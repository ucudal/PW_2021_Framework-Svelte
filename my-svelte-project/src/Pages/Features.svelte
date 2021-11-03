<script>
  let expanded = false;
  let count = 0;
  let visibility = true;
  export let unProp;

  const handleExpand = () => {
    expanded = !expanded;
  };

  const changeCount = () => {
    count++;
  };

  const changeVisibility = () => {
    visibility = !visibility;
  };
</script>

<div on:click={handleExpand}>
  <h1 class="text-6xl text-center py-6 bold bg-offgray rounded-md text-white cursor-pointer">Funcionalidades out-of-the-box</h1>
</div>
{#if expanded}
  <div class="border-4 border-offgray rounded-md -mt-2 py-2">
    <p class="text-center">Hola! Acabas de hacer click sobre un componente y este activó un evento que permitió renderizar esta parte de la página!</p>
    <p class="text-center">Esto es solo un poco de lo que es capaz Svelte 😉 pero tenemos mucho más que mostrar:</p>
    <div class="mx-4">
      <h1 class="text-xl bold">Componentes reactivos</h1>
      <p>Cambia HTML en tiempo real! Inyecta una variable sobre la página</p>
      <div class="flex space-x-2">
        <button on:click={changeCount}>Aumenta el valor</button>
        <p>{count}</p>
      </div>
    </div>
    <div class="mx-4">
      <h1 class="text-xl bold">Eventos</h1>
      <p>Dispara una función a partir de un evento cualquiera</p>
      <div class="flex space-x-2">
        {#if visibility}
          <button on:click={changeVisibility}>Ahora me ves...</button>
        {:else}
          <button on:click={changeVisibility}>Ahora no lo ves...</button>
        {/if}
      </div>
    </div>
    <div class="mx-4">
      <h1 class="text-xl bold">Props</h1>
      <p>Información que se envía entre componentes, estos son los de esta página:</p>
      <p>{unProp} del prop: unProp</p>
    </div>
    <div class="mx-4">
      <h1 class="text-4xl italic">Y mucho más...</h1>
    </div>
  </div>
{/if}
