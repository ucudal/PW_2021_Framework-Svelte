<script>
  // import Opinions from "../Components/Learning/Opinions.svelte";

    let tutorial_name = 'Tutorial'
    let tutorial_text = "El tutorial me parecio bastante" +
    " accesible, aunque parece ser muy basico, en internet"+
    " se puede encontrar mas informacion y buenos ejemplos"

    let loPrimero_name = 'Lo primero que pense'
    let loPrimero_text = "Mi primer impresion fue que estaba muy bueno"+
    ", se pueden obtener resultados rapidamente y con pocas lineas de codigo."+
    " Por lo que pude ver de otros frameworks, Svelte utiliza una sintaxis muy"+
    " similar a html y javascript, por lo que hace que sea mas facil aprenderlo."

    let internet_name = 'Segun internet...'
    let internet_text = "Es uno de los mas usados para crear apps facilmente"+
    ", optimiza las aplicaciones porque no utiliza DOM virtual."+
    "  Se volvio bastante popular... "

    let resumen_name = 'Resumiendo...'
    let resumen_text = "Me gusto bastante, es bien sencillo, "+
    " obvio apenas lo conozco pero valoro haber conocido esta herramienta."


    // export let opinions;
    let opinions = [
        {name: tutorial_name, text: tutorial_text, showed: false},
        {name: loPrimero_name, text: loPrimero_text, showed: false},
        {name: internet_name, text: internet_text, showed: false},
        {name: resumen_name, text: resumen_text, showed: false},
    ];

  const verSiguiente = op_name => {
      op = opinions.filter(item => item.name == op_name)
      op.showed = true
      opinions = [rest_op, op]
      return opinions

  }

</script>

<div >
    <div class="grid justify-items-center">
      <h1 class="font-sans">Curva de aprendizaje!</h1>
    </div>


    {#each opinions as op }
      {#if !op.showed}
        <div class="container mx-auto">
          <p class="font-sans">{op.name}</p>
        </div>

        <div >
          <p class="font-sans">
            {op.text}
          </p>
        </div>
        <button on:click="{verSiguiente(op.name)}">
          Ver siguiente
        </button>
      {/if}

    {/each}

  </div>

