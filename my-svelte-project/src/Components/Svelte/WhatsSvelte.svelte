<script>
    export let doShow;
</script>

{#if doShow}
    <article class="p-5 mb-5 bg-yellow-200">
        <div class="">
            <p class="mb-2">Svelte es un framework que permite componetizar 
            las interfaces de usuario de entornos web. 
            Dicho de otra manera, brinda la capacidad de 
            convertir partes de la UI en piezas reutilizables.
            </p>
            <p>
            La interesante diferencia de Svelte con respecto a 
            los otros frameworks conocidos, es que no maneja un 
            Virtual DOM para actualizar la UI ya que no es un 
            framework que funcione en tiempo de ejecución 
            (interpretado), sino que es compilado. Esto le 
            permite manejar lógica de actualización del DOM 
            de forma imperativa, indicando directamente lo 
            que debe ser cambiado.
            </p>
        </div>
    </article>
{/if}