<script>
    import Card from "./Card.svelte";

    let framework;
    let libreria;

    const definitions = {
        framework: {
            title: 'Framework',
            definition: 'Los frameworks son un conjunto de funciones que nos permiten a los devs abstraernos de estar pendientes de cuándo son invocadas ciertas acciones y cómo es que se configuran. Éstos brindan una API amigable que nos permite configurar el comportamiento de nuestra app, pero es el framework el que tiene el control sobre ello.'
        },
        libreria: {
            title: 'Libreria',
            definition: 'Las librerías son conjuntos de funciones que nosotros debemos invocar cuando querramos hacer uso de ellas. Un ejemplo claro es la libreria java.util.Date que nos permite acceder a funciones de fecha, pero solo son ejecutadas cuando nosotros directamente lo codificamos.'
        }
    }

    $: {
        framework = definitions.framework.title
        libreria = definitions.libreria.title
    }

    function onFrameworkClick() {
        if (framework == definitions.framework.title) {
            framework = definitions.framework.definition
        } else {
            framework = definitions.framework.title
        }
    }

    function onLibraryClick() {
        if (libreria == definitions.libreria.title) {
            libreria = definitions.libreria.definition
        } else {
            libreria = definitions.libreria.title
        }
    }

</script>

<!-- Definiciones en una card que cambia el texto 
    al hacer click
-->
<article class="p-5 mb-5 bg-red-200">
    <h2 class="text-2xl mb-3">Framework o Libreria?</h2>
    
    <div class="flex space-x-6">
        <Card 
            title={framework}
            onClick={onFrameworkClick} />
        <Card 
            onClick={onLibraryClick}
            title={libreria}/>
    </div>
</article>