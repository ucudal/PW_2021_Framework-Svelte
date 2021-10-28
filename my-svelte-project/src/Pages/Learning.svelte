<script>
    import Opinions from "../Components/Learning/Opinions.svelte";

    let contador = 0
    const aumentar = () => {
      if (contador < 3) { 
        contador ++ 
    
      } else {
        contador =0;
      }
    }
    const decrementar = () => {
      if (contador > 0) { 
        contador -- 
    
      } else {
        contador = 3;
      }
    }


    

</script>

<article>
  <div class="grid justify-items-center">
    <h2 class="text-2xl mb-3">Curva de aprendizaje!</h2>
  </div>

  <Opinions id={contador}/>
  <div class="grid justify-items-center">
    <div class="flex">
      <div>
        <button on:click={decrementar}>Anterior</button>
      </div>
      <div>
        <button on:click={aumentar}>Siguiente</button>
      </div>
    </div>
  </div>
</article>

