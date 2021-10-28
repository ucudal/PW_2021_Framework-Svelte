# 📦️ Funcionalidades out-of-the-box
Aunque Svelte sea mega ligero, tiene a su merced una cantidad de herramientas poderosas que lo asemejan mucho a otros frameworks competidores que le permiten mantenerse a la altura. Algunos son:

## ⚛️ Componentes reactivos
Agrega una variable sobre el HTML que permite renderizar la página inyectando el valor de esa variable

```html
<script>
	let count = 0;
</script>

<button>
	Clicked {count} times!
</button>
```

## 🧠 Directivas
Son especies de atributos en los tags de HTML que permiten controlar el comportamiento de los elementos de una forma u otra
- `on:click` -> Haz que **cualquier** elemento haga una acción después de ser clickeado
- `bind:variable` -> Permite la comunicación de componentes Hijo-Padre
- `bind:group` -> Agrupa elementos similares (ejemplo inputs de radio o checkbox)
## 🚩 Eventos
Permite asociar eventos genéricos sobre cualquier elemento HTML y asignarlo hacia una función definida

```html
<script>
	let count = 0;
	
	const addOne = () => {
		count++;
	}
</script>

<button on:click={addOne}>
	Clicked {count} times!
</button>
```

Los eventos también permiten la comunicación de un componente hijo hacia un componente padre

```html
<!-- Child.svelte -->

<script>
	import { createEventDispatcher } from "svelte";
	
	// Comunicación con el padre directo del componente
	const dispatch = createEventDispatcher();
	
	//Data opcional para enviar junto al evento
	const data = "Hola :)"
	
	const sendEvent() {
		dispatch('unEvento', data);
	}
</script>

<button on:click={sendEvent}>Enviar evento a papá</button>
```

```html
<!-- Father.svelte -->

<script>
	import Child from "./Child.svelte";	

	// Función que se encarga de manejar el evento del hijo
	const handleEvent = (e) => {
		console.log(e.type, e.detail)
	}
</script>

<Child on:unEvento={handleEvent} />
```

Combinando [Eventos](#eventos) y [Componentes Reactivos](#componentes+reactivos), logramos una herramienta muy poderosa que, a partir de un evento se re-renderize el componente y se vean los resultados en tiempo real de los eventos

## 📚 Props (o datos de entrada)
Un componente puede tener datos de entrada y de esa manera permitir la comunicación entre un componente padre e hijo

```html
<!-- Father.svelte -->

<script>
	import Child from "./Child.svelte";
</script>

<div>
	<p>¿Cuál es tu comida favorita?</p>
	<Child answer={Hamburguesa} />
</div>
```

```html
<!-- Child.svelte -->

<script>
	export let answer = "Aire";	
</script>

<div>
	<p>{answer}</p>
</div>
```
## ⁉️ Renderizado condicional
Al igual que en la programación, existe lógica condicional permitiendo renderizar componentes a partir de condiciones que sean verdaderas o falsas

```html
<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
</script>

{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{/if}

{#if !user.loggedIn}
	<button on:click={toggle}>
		Log in
	</button>
{/if}
```

## 🔁 Lifecycle
Los componentes tienen un tiempo de vida que disparan eventos que nos permiten ejecutar lógica cuando se da cada uno de ellos

### onMount
Se ejecuta cada vez que el componente se renderiza por primera vez en el DOM, ideal para funciones de inicialización o `fetch`
```html
<script>
	import { onMount } from 'svelte';
	let loaded = false;

	onMount(() => {
		console.log('the component has mounted');
		loaded = true;
	});
</script>

<div>
	{#if loaded}
		<p>Cargué!</p>
	{/if}
</div>
```
### onDestroy
Se ejecuta cuando el componente se va a quitar del DOM, ideal para limpieza de memoria
```html
<script>
	import { onDestroy } from 'svelte';

	onDestroy(() => {
		console.log('the component is being destroyed');
	});
</script>
```
### beforeUpdate
Ejecutar código **antes** que el DOM se vaya a actualizar
```html
<script>
	import { beforeUpdate } from 'svelte';
	let count = 0;

	beforeUpdate(() => {
		console.log('the component is about to update', count);
	});
		
	const addOne = () => {
		count++;
	}
</script>

<button on:click={addOne}>
	Clicked {count} times!
</button>
```
### afterUpdate
Ejecutar código **después** que el DOM se haya actualizado
```html
<script>
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		console.log('the component just updated', count);
	});
		
	const addOne = () => {
		count++;
	}
</script>

<button on:click={addOne}>
	Clicked {count} times!
</button>
```
### tick
Ejecuta código después de que alguno de los otros lifecycles haya corrido
```html
<script>
	import { beforeUpdate, tick } from 'svelte';

	beforeUpdate(async () => {
		console.log('the component is about to update');
		await tick();
		console.log('the component just updated');
	});
</script>
```

## 🧺 Store
Es una manera de tener una o varias variables poder ser transmitidas entre varios componentes a la vez
### writable
Para variables que se puedan escribir
```js
// store.js
import { writable } from 'svelte/store';

// Tenemos una variable count que inicializa en 0
export const count = writable(0);
```

```html
<!-- App.svelte -->

<script>
	// Obtenemos nuestra variable del store
	import { count } from './store.js'
	
	let valorApp;
	
	// Nos suscribimos al store para detectar cualquier cambio
	count.subscribe((actual) => {
		valorApp = actual;
	})
	
	// Hacemos update para hacer modificaciones sobre el valor actual de la variable
	handleChange(e) => {
		e.preventDefault();
		count.update((actual) => actual + 1)
	}
	
	// Hacemos set para reescribir el valor por completo
	handleReset(e) => {
		e.preventDefault();
		count.set(0)
	}
</script>

<div
	<h1>{valorApp}</h1>
	<button on:click={handleChange}>Aumentar valor</button>
	<button on:click={handleReset}>Resetear</button>
</div>
```
### readable
Para variables solo lectura
```js
import { readable } from 'svelte/store';

// Creamos una variable de tipo readable, 
// donde su primer parámetro es el valor inicial
// y el segundo una función de "start"
export const time = readable(null, function start(set) {
	
	// La función start inicia cuando un componente lee el store
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	// stop se ejecuta cuando ya no hay subscriptores disponibles
	// (todos los componentes están destruídos)
	return function stop() {
		clearInterval(interval);
	};
});
```

```html
<script>
	import { time } from './stores.js';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<h1>Ahora son las {formatter.format($time)}</h1>
```