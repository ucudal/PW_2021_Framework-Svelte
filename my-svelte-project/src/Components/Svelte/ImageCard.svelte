<script>
    export let imageUrl;
    export let imageAlt;
    export let title;
    export let color;
    export let onClick;
</script>

<div 
    on:click={onClick}
    class="w-1/2 pl-4 pr-4 pt-2 pb-2 text-center border-{color}-500 border-2 bg-{color}-100">
    <img src={imageUrl} alt={imageAlt}>
    <p class="text-xl">{title}</p>
</div>