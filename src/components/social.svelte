<script>
    import '../routes/layout.css'

    export let color;
    export let name;
    export let alt;
    export let redirectUrl;
    export let hoverC;
</script>

<a class="social-button hover:text-white transition-colors duration-300 text-center text-2xl" href={redirectUrl} aria-label={alt} style="--color-hover: {color}; --text-hover: {hoverC};">
    {name}
</a>

<style global>
    .social-button {
        display: inline-flex;
        position: relative;
        z-index: 10;
        overflow: visible;
        transition: color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        text-align: center;
        color: var(--color-hover);
    }

    .social-button::before, .social-button::after {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 0; /*疑似要素の幅0=背景のぶわーってなるやつがない*/
        background-color: var(--color-hover);
        z-index: -1; /*いわゆるz座標。social-button(文字)が10で、これは-1。これで文字の下に背景が行く。*/
        transition: width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        content: "";
    }

    .social-button::before {
        right: 50%; /*beforeは右側を担当*/
    }

    .social-button::after {
        left: 50%; /*afterは左側*/
    }

    .social-button:hover::before, .social-button:hover::after {
        width: 51vw; /*51にすることで50%で行かなくても端まで行くようにしている！*/
    } 

    .social-button:hover {
        color: var(--text-hover);
    }


</style>