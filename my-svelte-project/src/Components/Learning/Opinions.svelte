<script>
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

    export let id;
    let opinions = [
        {id: 0, name: tutorial_name, text: tutorial_text},
        {id: 1, name: loPrimero_name, text: loPrimero_text},
        {id: 2, name: internet_name, text: internet_text},
        {id: 3, name: resumen_name, text: resumen_text},
    ];

</script>
<article class="p-5 m-5 bg-red-200 rounded-full py-3 px-6">
    <h1>{opinions[id].name}</h1>
    <h3>{opinions[id].text}</h3>
</article>
