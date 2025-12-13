<script>
    import '../routes/layout.css'

    let fedi = "kiritandon";

</script>

<div class="flex justify-center mb-5 text-black">
    <select class="mx-auto" name="twitter_account" id="twitter" bind:value={fedi}>
        <option value="mattyaski">Mattyaski (Type4ny)</option>
        <option value="kiritandon" selected>kiritan.work (Mastodon)</option>
    </select>
</div>

{#if fedi == "mattyaski"}
    <iframe class="mx-auto" title="Misskey" src="https://mattyaski.co/embed/user-timeline/99cmmur0nk?maxHeight=700" data-misskey-embed-id="v1_ag63ch0jrc" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" style="border: none; width: 100%; max-width: 500px; height: 300px; color-scheme: light dark;"></iframe>
    <script defer src="https://mattyaski.co/embed.js"></script>
{:else if fedi == "kiritandon"}
    <iframe class="mx-auto" title="Mastodon" allowfullscreen sandbox="allow-top-navigation allow-scripts allow-popups allow-popups-to-escape-sandbox" style="max-width:100vw;max-height:100vh;" width="400" height="800" src="https://mastofeed.com/apiv2/feed?userurl=https%3A%2F%2Fkiritan.work%2Fusers%2FCidermizu&theme=dark&size=100&header=true&replies=false&boosts=false"></iframe>
{/if}
