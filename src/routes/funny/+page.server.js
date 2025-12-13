import { redirect } from "@sveltejs/kit";

const rollLink = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=RrESvSRNpeo",
    "https://www.youtube.com/watch?v=moZtoMP7HAA",
    "https://www.youtube.com/watch?v=3-B5WQNjD1w",
    "https://www.youtube.com/watch?v=xdzh-sriqJU",
    "https://www.youtube.com/watch?v=aYsgsSo1aow",

];

export const prerender = false;

export function load() {
    throw redirect(302, rollLink[Math.floor(Math.random() * rollLink.length)])
}