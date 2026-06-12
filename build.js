#!/usr/bin/env node
// build.js — Generates per-study HTML pages under /work/<slug>/
// Run: node build.js
// Output: dist-css/case-study-bundle.css — concatenated stylesheet
//         work/<slug>/index.html         — static HTML shell per study

const fs   = require("fs");
const path = require("path");

const ROOT = __dirname;

const STUDIES = [
  {
    slug: "supervisor-review",
    title: "Supervisor Review Mode — Dan Gruskin",
    desc: "Supervisors were managing case reviews across Acrobat, local folders, and handwritten checklists. We moved the whole thing into the cloud — saving hours per week and ensuring data accuracy.",
  },
  {
    slug: "interview-platform",
    title: "Interview Platform Redesign — Dan Gruskin",
    desc: "Modernized the UI and workflow for officers conducting immigration interviews. 194 officers opted into the redesigned experience.",
  },
  {
    slug: "case-finder",
    title: "Case Finder — Dan Gruskin",
    desc: "Purpose-built search tool for caseworkers to quickly locate files across a large, disorganized case database. 40% faster lookup.",
  },
  {
    slug: "civic-platform",
    title: "Government Platform Work — Dan Gruskin",
    desc: "Two years designing tools for a government case management platform — workshops, large-scale UI updates, research sessions, and 167 days of staff time saved.",
  },
  {
    slug: "gridx-empower",
    title: "GridX Empower, Re-imagined — Dan Gruskin",
    desc: "Took a raw energy billing API and designed a turn-key solution for utilities and their customers. Zero to one: API to product.",
  },
  {
    slug: "gridx-touchscreen",
    title: "GridX Interactive Touchscreen — Dan Gruskin",
    desc: "Replaced the 45-minute live sales demo with a self-serve kiosk experience. 24% lift in booth traffic.",
  },
  {
    slug: "taylor-series",
    title: "Taylor Guitars Series Pages — Dan Gruskin",
    desc: "Total restructuring and redesign for the guitar series pages. 105% increase in page views post-launch.",
  },
  {
    slug: "taylor-sustainability",
    title: "Taylor Sustainability Hub — Dan Gruskin",
    desc: "Modular CMS and storytelling platform that brought 50 years of editorial content to life and legitimized the brand's sustainability efforts.",
  },
];

// ─── Step 1: Bundle CSS ───────────────────────────────────────────────────────
const CSS_SOURCES = [
  "styles.css",
  "style-switcher.css",
  "styles-hero.css",
  "styles-rest.css",
  "case-study.css",
];

console.log("Bundling CSS...");
fs.mkdirSync(path.join(ROOT, "dist-css"), { recursive: true });
const bundledCss = CSS_SOURCES
  .map(f => fs.readFileSync(path.join(ROOT, f), "utf8"))
  .join("\n");
fs.writeFileSync(path.join(ROOT, "dist-css", "case-study-bundle.css"), bundledCss);
const bundleKB = (Buffer.byteLength(bundledCss, "utf8") / 1024).toFixed(1);
console.log(`  dist-css/case-study-bundle.css (${bundleKB} KB)`);

// ─── Step 2: Read style-switcher.js for inlining ─────────────────────────────
const switcherJs = fs.readFileSync(path.join(ROOT, "style-switcher.js"), "utf8");

// ─── Step 3: Generate per-study HTML ─────────────────────────────────────────
console.log("Generating study pages...");
for (const s of STUDIES) {
  const dir = path.join(ROOT, "work", s.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), studyHtml(s, switcherJs));
  console.log(`  work/${s.slug}/index.html`);
}

console.log("Done.");

// ─── HTML template ────────────────────────────────────────────────────────────
function studyHtml(s, switcherJs) {
  const e = (str) => str.replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <base href="/" />
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-0SSHKT8LPF"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-0SSHKT8LPF');
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${e(s.title)}</title>
  <meta name="description" content="${e(s.desc)}" />
  <meta property="og:title" content="${e(s.title)}" />
  <meta property="og:description" content="${e(s.desc)}" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${e(s.title)}" />
  <meta name="twitter:description" content="${e(s.desc)}" />
  <link rel="icon" href="/favicon.ico" sizes="any" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="/dist-css/case-study-bundle.css" />
  <script>${switcherJs}</script>
</head>
<body>
  <div class="scroll-progress" id="scroll-progress"></div>

  <header class="topbar">
    <div class="topbar-inner">
      <div class="topbar-left">
        <a href="/" class="brand-mark">Dan Gruskin</a>
        <span class="mono-sm muted" style="border-left:1px solid var(--rule);padding-left:14px">Case Study</span>
      </div>
      <nav class="topbar-mid">
        <a href="/">Work</a>
        <a href="/about.html">About</a>
        <a href="/contact.html">Contact</a>
      </nav>
      <div class="topbar-right">
        <a class="resume-btn" href="/">All work ←</a>
        <button class="topbar-burger" id="topbar-burger" aria-label="Open menu" aria-expanded="false" aria-controls="topbar-nav-mobile">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <nav class="topbar-nav-mobile" id="topbar-nav-mobile" hidden>
      <a href="/">Work</a>
      <a href="/about.html">About</a>
      <a href="/contact.html">Contact</a>
      <div class="topbar-nav-mobile-footer">
        <a class="resume-btn" href="/">All work ←</a>
      </div>
    </nav>
  </header>

  <main id="app"></main>

  <script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
  <script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>

  <script type="text/babel" src="/schematics.jsx"></script>
  <script type="text/babel" src="/case-studies.jsx"></script>

  <script>
    (function () {
      const burger = document.getElementById("topbar-burger");
      const nav = document.getElementById("topbar-nav-mobile");
      if (!burger || !nav) return;
      const open  = () => { nav.hidden = false; burger.setAttribute("aria-expanded", "true");  burger.setAttribute("aria-label", "Close menu"); };
      const close = () => { nav.hidden = true;  burger.setAttribute("aria-expanded", "false"); burger.setAttribute("aria-label", "Open menu");  };
      burger.addEventListener("click", () => nav.hidden ? open() : close());
      nav.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
      window.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
    })();
    const sp = document.getElementById("scroll-progress");
    window.addEventListener("scroll", () => {
      const h = document.documentElement;
      sp.style.transform = "scaleX(" + h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) + ")";
    }, { passive: true });
  </script>
</body>
</html>`;
}
