<script>
    export let title;
    export let onClick;
</script>

<button 
    on:click={onClick}
    class="w-1/2 pl-4 pr-4 pt-2 pb-2 text-center border-blue-500 border-2 bg-blue-100">
    <p class="text-xl">{title}</p>
</button>