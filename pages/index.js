import { useEffect } from "react";
import Reddit from "../components/home/reddit";

export default function Home() {
  useEffect(() => {
    console.log("getData");
  }, []);
  const MOCK_DATA = {
    img_url: "https://avatars.dicebear.com/api/adventurer/123.svg",
    about: "home",
    posts: [
      {
        posted: "u/Mitsiee",
        date: "4 months ago",
        sub_id: "sunraybee",
        heading:
          "Add some flair to your apps with Svelte Confetti! A tiny component that works even without JavaScript through SSR!",
        data: "I've created a tiny component that lets you easily add confetti effects to your app. It's silly, it's niche, but it's fun! The entire component is only 2.1kb minified, 581 bytes minified and gzipped.All animations are done through CSS, only the initialization requires JavaScript, which means it will work even for those who have JavaScript disabled as long as you use SSR.",
      },
      {
        sub_id: "sunraybee",
        posted: "u/itsjakeandelwood",
        date: "7 months ago",
        heading: "Why I wouldn't recommend Svelte JS to a fellow CTO",
        data: "Context: I've been using Svelte + Sapper and now Sveltekit for 2 years. I founded a startup as CTO 2020 and my cofounder and I decided to bet on Svelte for our frontend. Small team of 3 engineers who all lived and breathed svelte for about 16 months till our startup had to close up shop. Since then I've worked on 2 medium-sized projects in Sveltekit.",
      },
      {
        sub_id: "sunraybee",
        posted: "u/SonoUnCavalloPesante",
        date: "4 months ago",
        heading: "Updating Our Project from Sveltekit to the New RC",
        data: "I'm the lead developer over a tabletop RPG game site. It's had a long history, starting out as a WordPress site, then moving to a standalone PHP site, then eventually to 11ty, and then as of 2021, to SvelteKit. So far it's been our favorite and all of our other projects use SvelteKit as the base. Problem is, we didn't bother to keep it up to date, so we kind of ignored all the latest RC updates.We got a notice from Netlify that they wouldn't support our Node version anymore, and to update. We could probably just update the image and the project would build as normal, but we all decided this would be a good opportunity to just update to the latest RC so we could keep things a bit more modern.",
      },
      {
        posted: "u/Mitsiee",
        sub_id: "sunraybee",
        date: "4 months ago",
        heading:
          "Add some flair to your apps with Svelte Confetti! A tiny component that works even without JavaScript through SSR!",
        data: "I've created a tiny component that lets you easily add confetti effects to your app. It's silly, it's niche, but it's fun! The entire component is only 2.1kb minified, 581 bytes minified and gzipped.All animations are done through CSS, only the initialization requires JavaScript, which means it will work even for those who have JavaScript disabled as long as you use SSR.",
      },
      {
        sub_id: "sunraybee",
        posted: "u/itsjakeandelwood",
        date: "7 months ago",
        heading: "Why I wouldn't recommend Svelte JS to a fellow CTO",
        data: "Context: I've been using Svelte + Sapper and now Sveltekit for 2 years. I founded a startup as CTO 2020 and my cofounder and I decided to bet on Svelte for our frontend. Small team of 3 engineers who all lived and breathed svelte for about 16 months till our startup had to close up shop. Since then I've worked on 2 medium-sized projects in Sveltekit.",
      },
      {
        sub_id: "sunraybee",
        posted: "u/SonoUnCavalloPesante",
        date: "4 months ago",
        heading: "Updating Our Project from Sveltekit to the New RC",
        data: "I'm the lead developer over a tabletop RPG game site. It's had a long history, starting out as a WordPress site, then moving to a standalone PHP site, then eventually to 11ty, and then as of 2021, to SvelteKit. So far it's been our favorite and all of our other projects use SvelteKit as the base. Problem is, we didn't bother to keep it up to date, so we kind of ignored all the latest RC updates.We got a notice from Netlify that they wouldn't support our Node version anymore, and to update. We could probably just update the image and the project would build as normal, but we all decided this would be a good opportunity to just update to the latest RC so we could keep things a bit more modern.",
      },
    ],
  };
  return <Reddit {...MOCK_DATA} />;
}
