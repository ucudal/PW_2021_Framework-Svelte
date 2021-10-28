<script>
  let primerExtremo = false;
  let segundoExtremo = false;
  let svelteLogo = false;

  const handleFirst = () => {
    primerExtremo = true;
  };

  const handleSecond = () => {
    segundoExtremo = true;
  };

  const handleThird = () => {
    svelteLogo = true;
  };
</script>

<div class="px-4">
  <h1 class="text-6xl border-b-4 border-prime">¿Cómo se asemeja con otros frameworks?</h1>
  <div class="flex space-x-8 my-4">
    <button on:click={handleFirst}>Muestra el primer extremo</button>
    <button on:click={handleSecond}>Muestra el segundo extremo</button>
    <button on:click={handleThird}>¿Dónde queda Svelte?</button>
  </div>
  <div class="flex justify-center">
    {#if primerExtremo}
      <img class="w-60" alt="logo react" src="http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png" />
    {/if}
    {#if svelteLogo}
      <img class="w-60" alt="logo svelte" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png" />
    {/if}
    {#if segundoExtremo}
      <img class="w-60 ml-96" alt="logo angular" src="http://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png" />
    {/if}
  </div>
</div>
