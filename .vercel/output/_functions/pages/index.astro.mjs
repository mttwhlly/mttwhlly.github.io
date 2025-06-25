import { a as createComponent, m as maybeRenderHead, g as renderComponent, d as renderTemplate, r as renderHead, h as renderSlot, c as createAstro } from '../chunks/astro/server_D1QKJVsD.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ben Stafford",
      title: "Co-owner and Designer",
      organization: "Foxmeadow Creative",
      avatar: "/images/ben.png",
      content: "Matt has a wonderful ability to tackle complex challenges with simple creative solutions. He's trustworthy, reliable, and a smart designer. You may regret some things in life, but you'll never regret hiring Matt.",
      link: "https://BenIllustrated.com"
    },
    {
      id: 2,
      name: "Dan Draper",
      title: "Designer",
      organization: "Dan Draper Design",
      avatar: "/images/dan-d.png",
      content: "Matt has a skill set which can be hard to find in a creative team member — he's a graphic designer, UX designer, and a developer. This background and mix of talents makes him a thoughtful resource and an asset to any organization or client he works for.",
      link: "https://dandraperdesign.com/"
    },
    {
      id: 3,
      name: "Titus Smith",
      title: "IXD Program Director",
      organization: "University of Kansas",
      avatar: "/images/titus.jpg",
      content: "Matt cares deeply.",
      link: "https://thehideout.design/"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "py-16 px-4 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-12 max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-mono tracking-loose uppercase text-gray-500 mb-2", children: "_Testimonials" }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row space-x-2 items-start", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col justify-start w-full md:w-80 mb-4 md:mb-0 bg-white rounded-xl p-6 border border-gray-200",
        children: [
          /* @__PURE__ */ jsxs("blockquote", { className: "text-gray-700 text-lg", children: [
            '"',
            testimonial.content,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4 mt-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: testimonial.link,
                className: "hover:underline",
                target: "_blank",
                rel: "noopener noreferrer",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: testimonial.avatar,
                    alt: testimonial.name,
                    className: "w-12 h-12 mt-4 rounded-full object-cover flex-shrink-0"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-x-2 mt-2", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: testimonial.link,
                  className: "hover:underline",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: testimonial.name })
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: testimonial.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: testimonial.organization })
            ] }) })
          ] })
        ]
      },
      `${testimonial.id}-${index}`
    )) }) })
  ] });
};

const RecentProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Hangtime",
      description: "A minimalist training app for climbers, designed to guide hangboard routines through haptics, visual cues, and progressive timers. I built it for Apple Watch and iPhone with a focus on glanceability, low-distraction UI, and reliable performance under physical stress. The design emphasizes flow and focus—making workouts easier to start, sustain, and finish.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop&auto=format",
      tags: ["Figma", "Swift", "HealthKit", "WatchKit"],
      liveUrl: "#",
      githubUrl: "#",
      type: "WatchOS/iOS App"
    },
    {
      id: 2,
      title: "Surf Lab",
      description: "A focused surf conditions app built for St. Augustine, FL, designed to quickly answer a simple question: is it surfable right now? I prioritized speed, clarity, and a calm UI over data overload—making it ideal for real-life, time-sensitive checks. Future iterations will expand to other East Coast spots and include Apple Watch support for even faster, glanceable insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
      tags: ["HTML", "CSS", "JavaScript", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      type: "Progressive Web App"
    }
    // {
    //   id: 3,
    //   title: 'Legacy Platform Migration',
    //   description:
    //     'Migrated a complex legacy application to modern React architecture while maintaining 99.9% uptime and improving performance by 60%.',
    //   image:
    //     'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format',
    //   tags: ['React', 'Performance', 'Migration', 'Node.js'],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   type: 'Modernization',
    // },
  ];
  return /* @__PURE__ */ jsxs("section", { className: "container px-4 py-20 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-mono tracking-loose leading-tight uppercase text-gray-500", children: "_Projects" }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsx("p", { className: "text-md text-gray-700 p-6 bg-gray-50 rounded-xl border border-dashed border-gray-400 mb-16", children: "While I can’t share work from my current role, these personal projects represent my approach: thoughtful, user-focused, and built with care." }) }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-12 lg:gap-16", children: projects.map((project, index) => /* @__PURE__ */ jsx(
      "article",
      {
        className: `flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`,
        children: /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-medium border border-gray-300 text-gray-500 px-3 py-1 rounded-full", children: project.type }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-3xl font-sans font-bold leading-tight mb-4", children: project.title }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 leading-relaxed", children: project.description })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: project.tags.map((tag) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full",
              children: tag
            },
            tag
          )) })
        ] })
      },
      project.id
    )) })
  ] });
};

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header></header> <main class=""> <section class="container px-4 py-12 flex-auto flex flex-col gap-8 mt-12 max-w-4xl mx-auto"> <h1 class="mb-8 font-mono leading-tight md:text-6xl text-5xl md:tracking-tighter tracking-loose">Building calm, thoughtful interfaces in a noisy world</h1> <p class="text-xl text-gray-600 leading-relaxed">I'm a senior frontend developer with a foundation in visual design, focused on building useful products and scaling durable design systems.
</p><p class="text-xl text-gray-600 leading-relaxed">
I work best at the intersection of design and engineering—translating visual clarity into accessible, maintainable interfaces. I’ve led design system initiatives, modernized legacy codebases, and advocated for quality in fast-paced, resource-constrained environments.
</p><p class="text-xl text-gray-600 leading-relaxed">
I’m passionate about building products that are not just functional, but also delightful to use. I believe in the power of thoughtful design and clean code to create experiences that resonate with users. My approach is user-centered, focusing on solving real problems with empathy and precision.
I value calm collaboration, thoughtful execution, and long-term product thinking. I’m currently looking for a remote-friendly team that shares those values—and is building something that matters.</p> </section> <section class="container px-4 flex-auto flex flex-col gap-8 mt-12 max-w-4xl mx-auto"> <h2 class="text-2xl mb-8 font-mono leading-tight uppercase text-gray-500">_About</h2> <p class="text-xl text-gray-600 leading-relaxed">Based in St Augustine, Florida, I'm a dad, climber, and surfer always looking for ways to combine tech with real life.
Offline, you’ll often find me chasing waves or toddlers.</p> </section> ${renderComponent($$result, "RecentProjects", RecentProjects, {})} <section class="container px-4 flex-auto flex flex-col gap-8 mt-12 max-w-4xl mx-auto"> <h2 class="text-2xl mb-8 font-mono leading-tight uppercase text-gray-500">_Tools</h2> <div id="tools"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base leading-relaxed"> <div> <h3 class="font-semibold mb-1">Development</h3> <ul class="text-gray-700"> <li>React (Next.js, Remix), Svelte</li> <li>TypeScript, JavaScript, HTML5, CSS3</li> <li>React Native (Expo), SwiftUI</li> </ul> </div> <div> <h3 class="font-semibold mb-1">Design</h3> <ul class="text-gray-700"> <li>Figma, Adobe Creative Suite</li> <li>Design systems (Storybook)</li> <li>Typography, Iconography, Illustration</li> </ul> </div> <div> <h3 class="font-semibold mb-1">Tooling & Infrastructure</h3> <ul class="text-gray-700"> <li>Git, CI/CD, Docker, Vite, VS Code, Xcode</li> <li>Node.js, REST/GraphQL APIs</li> </ul> </div> <div> <h3 class="font-semibold mb-1">AI & Experiments</h3> <ul class="text-gray-700"> <li>Azure AI Services, OpenAI, Anthropic</li> <li>Ollama (local LLMs), prompt engineering, UX for AI</li> </ul> </div> </div> <p class="mt-6 text-gray-600">
I care more about what tools enable than the tools themselves—but I’m always experimenting and refining my workflow to build better software.
</p> </div> </section> <!-- <FAQ client:load/> --> ${renderComponent($$result, "Testimonials", Testimonials, {})} <section class="container px-4 pb-20 flex-auto flex flex-col gap-8 mt-12 max-w-4xl mx-auto"> <p class="text-xl text-gray-600 leading-relaxed">Looking for a thoughtful frontend lead or collaborator?
I’m open to remote roles or interesting side projects. Let’s talk.</p> <div class="my-12 flex justify-center"> <a href="mailto:matt@mattwhalley.com" class="text-2xl bg-blue-100 py-3 px-8 pl-4 hover:text-blue-800 transition-colors duration-300 rounded-full hover:bg-lemonlime-100 font-mono"> <img src="/images/me.png" width="54" height="54" class="rounded-full inline"> Get in Touch
</a> </div> </section> </main>`;
}, "/Users/mattwhalley/Projects/mttwhlly.github.io/src/components/Welcome.astro", void 0);

const SpotifyNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchAccessToken = async () => {
    try {
      const response = await fetch("/api/spotify", {
        method: "POST"
      });
      if (!response.ok) {
        throw new Error("Failed to get access token");
      }
      const data = await response.json();
      return data.access_token;
    } catch (err) {
      setError("Authentication error");
      console.error("Authentication error:", err);
      return null;
    }
  };
  const fetchNowPlaying = async (token) => {
    try {
      let response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.status === 204) {
        response = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (data && data.items && data.items.length > 0) {
          setNowPlaying({
            name: data.items[0].track.name,
            artist: data.items[0].track.artists[0].name,
            album: data.items[0].track.album.name,
            albumArt: data.items[0].track.album.images[0]?.url,
            isCurrentlyPlaying: false,
            trackLink: data.items[0].track.external_urls.spotify,
            artistLink: data.items[0].track.artists[0].external_urls.spotify,
            albumLink: data.items[0].track.album.external_urls.spotify
          });
        }
      } else if (response.ok) {
        const data = await response.json();
        if (data && data.item) {
          setNowPlaying({
            name: data.item.name,
            artist: data.item.artists[0].name,
            album: data.item.album.name,
            albumArt: data.item.album.images[0]?.url,
            isCurrentlyPlaying: true,
            trackLink: data.item.external_urls.spotify,
            artistLink: data.item.artists[0].external_urls.spotify,
            albumLink: data.item.album.external_urls.spotify
          });
        }
      } else {
        console.error("Error fetching data:", response.status);
      }
      setLoading(false);
    } catch (err) {
      setError("Error fetching data from Spotify");
      setLoading(false);
      console.error("Error fetching data from Spotify:", err);
    }
  };
  useEffect(() => {
    const initializeSpotify = async () => {
      const token = await fetchAccessToken();
      if (token) {
        fetchNowPlaying(token);
        const interval = setInterval(async () => {
          const refreshedToken = await fetchAccessToken();
          if (refreshedToken) {
            fetchNowPlaying(refreshedToken);
          }
        }, 3e4);
        return () => clearInterval(interval);
      }
    };
    initializeSpotify();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex", children: [
    loading && /* @__PURE__ */ jsx("p", { children: "Loading..." }),
    error && /* @__PURE__ */ jsx("p", { className: "error", children: error }),
    nowPlaying && /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsxs("div", { className: "flex space-x-1", children: [
      nowPlaying.isCurrentlyPlaying ? /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm md:text-md", children: "Current Track" }) : /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm md:text-md", children: "Recent Track" }),
      /* @__PURE__ */ jsx("h3", { className: " text-sm md:text-md", children: /* @__PURE__ */ jsxs("a", { href: nowPlaying.trackLink, children: [
        '"',
        nowPlaying.name,
        '"'
      ] }) }),
      /* @__PURE__ */ jsxs("p", { className: " text-sm md:text-md", children: [
        /* @__PURE__ */ jsx("span", { className: "italic text-sm md:text-md", children: "by" }),
        " ",
        /* @__PURE__ */ jsx("a", { href: nowPlaying.artistLink, children: nowPlaying.artist })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "status text-sm md:text-md" })
    ] }) })
  ] });
};

function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "shrink bg-black text-white py-12 md:flex-row flex-col", children: /* @__PURE__ */ jsxs("div", { className: "flex md:flex-row flex-col mx-auto px-4 md:px-16 justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 my-8 md:my-0", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 font-mono uppercase py-4", children: "_Offline" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { className: "h-[42px]", children: /* @__PURE__ */ jsx(SpotifyNowPlaying, {}) }),
        /* @__PURE__ */ jsxs("li", { className: "h-[42px] text-sm md:text-md", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400 font-extralight text-sm md:text-md", children: "Reading" }),
          " ",
          '"Anxious Generation" ',
          /* @__PURE__ */ jsx("i", { children: "by" }),
          " Jonathan Haidt"
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "h-[42px] text-sm md:text-md", children: [
          /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm md:text-md", children: "Climbing" }),
          " Red V5 on Prow Wall",
          " ",
          /* @__PURE__ */ jsx("i", { children: "at" }),
          " ",
          /* @__PURE__ */ jsx("a", { href: "https://stoneclimbing.com/", target: "_blank", children: "Stone Climbing Co." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 font-mono uppercase py-4", children: "_Online" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { className: "h-[42px] text-sm md:text-md", children: /* @__PURE__ */ jsxs("a", { href: "https://github.com/mttwhlly", target: "_blank", children: [
          /* @__PURE__ */ jsx("i", { className: "ph-fill ph-github-logo text-gray-400 text-sm md:text-md" }),
          " Github"
        ] }) }),
        /* @__PURE__ */ jsx("li", { className: "h-[42px] text-sm md:text-md", children: /* @__PURE__ */ jsxs("a", { href: "https://linkedin.com/in/mttwhlly", target: "_blank", children: [
          /* @__PURE__ */ jsx("i", { className: "ph-fill ph-linkedin-logo text-gray-400 text-sm md:text-md" }),
          " ",
          "Linkedin"
        ] }) }),
        /* @__PURE__ */ jsxs("li", { className: "h-[42px] text-sm md:text-md", children: [
          /* @__PURE__ */ jsx("i", { className: "ph-fill ph-envelope text-gray-400 text-sm md:text-md" }),
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:matt@mattwhalley.com", children: "Email" })
        ] })
      ] })
    ] })
  ] }) });
}

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Matt Whalley - Frontend Developer</title><!-- SEO --><meta name="description" content="Crafting modern digital experiences with curiosity & sincerity. Pursuing timeless quality with agility."><meta name="keywords" content="Frontend Developer Portfolio
    Web Development Projects,
    HTML/CSS Projects,
    JavaScript Portfolio Examples,
    Responsive Web Design Portfolio,
    UI/UX Design Projects,
    Interactive Web Applications,
    Frontend Coding Samples,
    Frontend Developer Skills Showcase,
    Portfolio for Web Developers,
    Creative Web Design Portfolio,
    Personal Website for Developers,
    Best Frontend Developer Portfolios,
    Frontend Development Case Studies"><meta name="author" content="Matt Whalley"><!-- Open Graph Tags --><meta property="og:title" content="Matt Whalley - Software Engineer"><meta property="og:description" content="Crafting modern digital experiences with curiosity & sincerity. Pursuing timeless quality with agility."><!-- TODO: add og:image --><!-- <meta property="og:image" content="image-url.jpg" /> --><meta property="og:url" content="https://mattwhalley.com"><!-- Favicon --><link rel="icon" href="favicon.ico" type="image/x-icon"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#171717"><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/fill/style.css"><meta name="msapplication-TileColor" content="#2d89ef"><meta name="theme-color" content="#000000">${renderHead()}</head> <body class="flex flex-col min-h-screen"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mattwhalley/Projects/mttwhlly.github.io/src/components/Footer", "client:component-export": "default" })} </body></html>`;
}, "/Users/mattwhalley/Projects/mttwhlly.github.io/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://mattwhalley.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "/Users/mattwhalley/Projects/mttwhlly.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/mattwhalley/Projects/mttwhlly.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
