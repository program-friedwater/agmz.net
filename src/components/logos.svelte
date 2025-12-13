<script>
    export let logo;
    export let alt;
    export let perc;

    let color;

    if (perc >= 0 && perc <= 49) {
        color = "red";
    } else if (perc >= 50 && perc <= 65) {
        color = "orange";
    } else {
        color = "green";
    }
</script>

<div class="tooltip">
    <div class="tooltip-content">
        {#if color == "red"}
            <div class="text-red-600">
                {perc}%
            </div>

        {:else if color == "orange"}
            <div class="text-amber-600">
                {perc}%
            </div>
        {:else}
            <div class="text-green-500">
                {perc}%
            </div>
        {/if}
    </div>
    <img src={logo} class="h-10 logos" alt={alt} />
</div>

<style>
    .logos {
        filter: grayscale(100%);
        transition: filter 0.3s ease;
    }

    .logos:hover {
        filter: grayscale(0%);
    }
</style>