<script>
    import ImageCard from "./ImageCard.svelte";

    const colors = {
        default: 'purple',
        error: 'red',
        success: 'green'
    }

    const quizzCards = {
        framework: {
            title: 'Framework',
            imageUrl: 'https://media.giphy.com/media/7J1llSYGJhKQJpVS9V/giphy.gif',
            imageAlt: 'Gif de Alf filmando con una cámara',
            color: colors.default
        },
        libreria: {
            title: 'Libreria',
            imageUrl: 'https://media.giphy.com/media/Jn6UleOajZxAY/giphy.gif',
            imageAlt: 'Gif de Alf mirando una película',
            color: colors.default
        }
    }

    function onFrameworkClick() {
        quizzCards.framework.imageUrl = "https://media.giphy.com/media/KY41NM9XNzWy4/giphy.gif"
        quizzCards.framework.imageAlt = "Gif de Alf cantando feliz"
        quizzCards.framework.color = colors.success
    }

    function onLibraryClick() {
        quizzCards.libreria.imageUrl = "https://media.giphy.com/media/NDvZ2XKsfFm24/giphy.gif"
        quizzCards.libreria.imageAlt = "Gif de Alf cuando explota la cocina y sale volando"
        quizzCards.libreria.color = colors.default
    }
</script>

<article class="p-5 mb-5 bg-red-200">
    <h2 class="text-2xl mb-3">Qué es Svelte?</h2>

    <!-- Quizz -->
    <p class="mb-3">Selecciona la opcion que creas correcta :)</p>
    <div class="flex mb-5 space-x-6">
        <ImageCard 
        title={quizzCards.framework.title}
        imageUrl={quizzCards.framework.imageUrl}
        imageAlt={quizzCards.framework.imageAlt}
        color={quizzCards.framework.color}
        onClick={onFrameworkClick} />

        <ImageCard 
        title={quizzCards.libreria.title}
        imageUrl={quizzCards.libreria.imageUrl}
        imageAlt={quizzCards.libreria.imageAlt}
        color={quizzCards.libreria.color}
        onClick={onLibraryClick}
        />
        
        <!-- <div class="w-1/2 pl-4 pr-4 pt-2 pb-2 text-center border-green-500 border-2 bg-green-100">
        <img 
        src="https://media.giphy.com/media/Jn6UleOajZxAY/giphy.gif" 
        alt="Gif de Alf mirando una película">
        <p class="text-xl">Libreria</p>
        </div> -->
    </div>
</article>