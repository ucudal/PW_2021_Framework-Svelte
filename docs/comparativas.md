# ⚖️ Comparativas con otros frameworks
Existe un amplio rango de frameworks, unos que son más modulares y simples, dependiendo de paquetes de terceros para ciertas funciones como React, hasta otros que te entregan todo en un paquete y depender la gran mayoría de sus funcionalidades como Angular.

Svelte cae más sobre el primero de ellos. Es un framework mega modular y sus usuarios comparan y lo asemejan mucho con React; por ejemplo, hay una librería llamada [`svelte-navigator`](https://github.com/mefechoel/svelte-navigator) que su puro propósito es:
- Ayudar con la implementación de SPA en Svelte
- Asemejarse al paquete [`react-router`](https://github.com/remix-run/react-router) de React

Y las similitudes con React la verdad que se notan!

Este repositorio, en la carpeta `my-svelte-project` se implementó un componente llamado [`Sidebar`](https://github.com/ucudal/PW_2021_Framework-Svelte/blob/main/my-svelte-project/src/Components/Sidebar/Sidebar.svelte) el cuál se hizo siguiendo [un tutorial apuntado para React](https://www.youtube.com/watch?v=pfaSUYaSgRo)

La única diferencia significativa que se encontró con respecto al tutorial y Svelte es en el pasaje de componentes entre componentes. Algo que se sabe que es posible (debido a que `svelte-navigator` lo implementa) solo que no se su implementación

```html
<!-- De esto... -->
<script>
	import Componente from "./componente.svelte"
	let tooltip = "Una Descripción"
</script>

<SidebarIcon tooltip={tooltip} icon={<Componente />} />

<!-- Pasamos a esto... -->
<script>
	import Componente from "./componente.svelte"
	let tooltip = "Una Descripción"
</script>

<Link to="/">
	<div>
		<Componente />
		<span>{tooltip}</span>
	</div>
</Link>

```