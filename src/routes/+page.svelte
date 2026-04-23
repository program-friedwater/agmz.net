<script>
    import '../routes/layout.css';
    import myImage from '../assets/image.png';
    import Social from '../components/social.svelte';
    import Logos from '../components/logos.svelte';
    import Fedi from '../components/fedi.svelte';
    import Share from '../components/share.svelte';
    import Birthday from '../components/birthday.svelte';
</script>

{#if new Date() >= new Date("2026-04-24T00:00:00+09:00")}
<Birthday />
{/if}
<div class="flex justify-center mt-6 mb-5">
    <img src={myImage} alt="My Avatar" class="w-24 h-24 rounded-full"/>
</div>

<p class="text-white text-center text-4xl">揚げ水</p>
<p id="localize" class="text-sky-500 localize text-center mt-2 mb-2 lg:text-xl"><span class="text-white">a.k.a. </span>Friedwater, 아케미즈</p>
<p class="text-white text-center mb-5 lg:text-xl">A student who like programming and rhythm games!</p>
<p class="text-white text-center mt-5 mb-5 lg:text-xl">- Learned Technology -</p>

<div class="flex flex-row items-center justify-center mb-5 gap-4">
    <Logos logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" perc=60 />
    <Logos logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" alt="Svelte" perc=80 />
    <Logos logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" perc=70 />
    <Logos logo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="Kotlin" perc=40 />
</div>

<div class="links flex flex-col items-center">
    <Social color="#1da1f2" name="Twitter" alt="Twitter" redirectUrl="https://x.com/agmz_frw" hoverC="#ffffff"/>
    <Social color="#ff0000" name="YouTube" alt="YouTube" redirectUrl="https://www.youtube.com/@%E6%8F%9A%E3%81%92%E6%B0%B4-h9b" hoverC="#ffffff"/>
    <Social color="#ff5700" name="Reddit" alt="Reddit" redirectUrl="https://www.reddit.com/user/4g3_8ki_m1zu/" hoverC="#ffffff"/>
    <Social color="#9146ff" name="Twitch" alt="Twitch" redirectUrl="https://www.twitch.tv/agemizu_" hoverC="#ffffff"/>
    <Social color="#ffffff" name="This Website" alt="This Website" redirectUrl="https://agmz.net/" hoverC="#000000"/>
    <Social color="#0DBD8B" name="Element (Matrix)" alt="Element (Matrix)" redirectUrl="https://matrix.to/#/#agemizu:matrix.org" hoverC="#ffffff"/>
    <Social color="#FCA326" name="Gitlab" alt="Gitlab" redirectUrl="https://gitlab.com/program-agewater" hoverC="#ffffff"/>
    <Social color="#6364FF" name="Mastodon (kiritan.work)" alt="Mastodon (kiritan.work)" redirectUrl="https://kiritan.work/@Cidermizu" hoverC="#ffffff"/>
    <Social color="#9cc500" name="Misskey" alt="Misskey.io" redirectUrl="https://misskey.io/@friedwater/" hoverC="#ffffff"/>
    <Social color="#ffffff" name="Github" alt="Github" redirectUrl="https://github.com/program-friedwater" hoverC="#000000"/>
    <Social color="#58cc02" name="Duolingo" alt="Duolingo" redirectUrl="https://www.duolingo.com/profile/agemizu.xxx" hoverC="#ffffff"/>
    <Social color="#ff66aa" name="osu!" alt="osu!" redirectUrl="https://osu.ppy.sh/users/37776877" hoverC="#ffffff"/>
    <Social color="#f7a028" name="Scratch" alt="Scratch" redirectUrl="https://scratch.mit.edu/users/programeragewater/" hoverC="#ffffff"/>
    <Social color="#ffffff" name="Old Website" alt="Old Website" redirectUrl="https://vir.jp/friedwater" hoverC="#000000"/>
    <Social color="#009dff" name="Pixiv" alt="Pixiv" redirectUrl="https://www.pixiv.net/users/101319743" hoverC="#ffffff"/>
    
</div>

<hr class="mt-10">

<p class="mt-10 text-white text-3xl text-center mb-5">Fediverse Feed</p>
<Fedi />

<hr class="mt-10">

<p class="mt-10 text-white text-3xl text-center mb-5">Products</p>
<div class="links flex flex-col items-center">
    <Social color="#ffffff" name="Funny Link" alt="Funny Link" redirectUrl="https://agmz.net/funny" hoverC="#000000"/>
</div>

<hr class="mt-10 mb-5">
<Share />
<p class="text-center text-white mb-5">Copyright 2025 Friedwater All rights reserved</p>
<style>
    .links {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    hr {
        color: white;
    }
</style>