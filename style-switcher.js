/* ============================================================
   Style Switcher — runs in <head> so prefs apply before paint
   ============================================================ */

(function () {
  var theme = localStorage.getItem("sx-theme") || "";
  var font  = localStorage.getItem("sx-font")  || "geist";
  // migrate old sx-geocities key
  if (!theme && localStorage.getItem("sx-geocities") === "1") theme = "geocities";
  document.documentElement.setAttribute("data-theme", theme === "geocities" ? "" : theme);
  document.documentElement.setAttribute("data-font", font);
  if (theme === "geocities") {
    document.documentElement.setAttribute("data-geocities", "");
  }
})();

var THEMES = [
  { id: "",          name: "Studio",   bg: "oklch(0.965 0.010 80)",  accent: "oklch(0.520 0.220 254)" },
  { id: "cream",     name: "Cream",    bg: "oklch(0.965 0.008 85)",  accent: "oklch(0.620 0.180 38)"  },
  { id: "ember",     name: "Ember",    bg: "oklch(0.96 0.012 70)",   accent: "oklch(0.58 0.24 28)"    },
  { id: "cobalt",    name: "Cobalt",   bg: "oklch(0.20 0.10 260)",   accent: "oklch(0.82 0.20 80)"    },
  { id: "plasma",    name: "Plasma",   bg: "oklch(0.16 0.030 270)",  accent: "oklch(0.88 0.22 130)"   },
  { id: "acid",      name: "Acid",     bg: "oklch(0.13 0.005 0)",    accent: "oklch(0.88 0.24 110)"   },
  { id: "geocities", name: "Geocities",bg: "#000033",                accent: "#ff00ff"                },
];

var FONTS = [
  { id: "geist", name: "Sans",  face: "Geist",            sample: "Aa", family: "'Geist', 'Inter', system-ui, sans-serif"   },
  { id: "serif", name: "Serif", face: "Playfair Display",  sample: "Ag", family: "'Playfair Display', Georgia, serif"        },
  { id: "mono",  name: "Mono",  face: "Space Mono",        sample: "Aa", family: "'Space Mono', 'JetBrains Mono', monospace" },
];

document.addEventListener("DOMContentLoaded", function () {
  var storedTheme = localStorage.getItem("sx-theme") || "";
  if (!storedTheme && localStorage.getItem("sx-geocities") === "1") storedTheme = "geocities";
  var currentTheme = storedTheme;
  var currentFont  = localStorage.getItem("sx-font")  || "geist";
  var isOpen = false;
  var gcElements = [];

  // --- Inject trigger button into .topbar-right (before the resume/allwork btn) ---
  var topbarRight = document.querySelector(".topbar-right");
  var trigger = document.createElement("button");
  trigger.className = "sx-trigger";
  trigger.setAttribute("aria-haspopup", "true");
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-label", "Style it yourself");
  trigger.innerHTML =
    '<span class="sx-trigger-icon">◑</span>' +
    '<span class="sx-trigger-label">Style it yourself!</span>';

  var resumeBtn = topbarRight && topbarRight.querySelector("a");
  if (resumeBtn) {
    topbarRight.insertBefore(trigger, resumeBtn);
  } else if (topbarRight) {
    topbarRight.prepend(trigger);
  }

  // --- Build dropdown ---
  var dropdown = document.createElement("div");
  dropdown.className = "sx-dropdown";
  dropdown.setAttribute("role", "dialog");
  dropdown.setAttribute("aria-label", "Style switcher");

  dropdown.innerHTML =
    '<div class="sx-section">' +
      '<div class="sx-section-label">Palette</div>' +
      '<div class="sx-themes">' +
        THEMES.map(function (t) {
          return '<button class="sx-swatch' + (t.id === currentTheme ? ' active' : '') + '" ' +
            'data-theme="' + t.id + '" ' +
            'style="--swatch-bg:' + t.bg + ';--swatch-accent:' + t.accent + '">' +
            '<span class="sx-dots">' +
              '<span class="sx-swatch-bg"></span>' +
              '<span class="sx-swatch-accent"></span>' +
            '</span>' +
            '<span class="sx-swatch-name">' + t.name + '</span>' +
          '</button>';
        }).join("") +
      '</div>' +
    '</div>' +
    '<div class="sx-section">' +
      '<div class="sx-section-label">Typeface</div>' +
      '<div class="sx-fonts">' +
        FONTS.map(function (f) {
          return '<button class="sx-font-opt' + (f.id === currentFont ? ' active' : '') + '" ' +
            'data-font="' + f.id + '">' +
            '<span class="sx-font-sample" style="font-family:' + f.family + '">' + f.sample + '</span>' +
            '<span class="sx-font-label">' +
              '<span class="sx-font-name">' + f.name + '</span>' +
              '<span class="sx-font-face">' + f.face + '</span>' +
            '</span>' +
          '</button>';
        }).join("") +
      '</div>' +
    '</div>' +
    '<div class="sx-actions">' +
      '<button class="sx-random-btn">⟳ Surprise me</button>' +
      '<button class="sx-reset-btn">↺ Reset</button>' +
    '</div>' +
    '<div class="sx-esc">Esc to close</div>';

  document.body.appendChild(dropdown);

  // Position dropdown below and right-aligned to the trigger button
  function positionDropdown() {
    var rect = trigger.getBoundingClientRect();
    var dropW = 300;
    var vpW = window.innerWidth;
    var left = rect.right - dropW;
    if (left < 8) left = 8;
    if (left + dropW > vpW - 8) left = vpW - dropW - 8;
    dropdown.style.top = (rect.bottom + 6) + "px";
    dropdown.style.left = left + "px";
    dropdown.style.right = "auto";
  }
  positionDropdown();
  window.addEventListener("resize", positionDropdown);

  // --- Open / close ---
  function openDropdown() {
    isOpen = true;
    positionDropdown();
    dropdown.classList.add("open");
    trigger.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.classList.remove("open");
    trigger.setAttribute("aria-expanded", "false");
  }

  trigger.addEventListener("click", function (e) {
    e.stopPropagation();
    isOpen ? closeDropdown() : openDropdown();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen) closeDropdown();
  });

  document.addEventListener("click", function (e) {
    if (isOpen && !dropdown.contains(e.target) && e.target !== trigger) closeDropdown();
  });

  // --- Geocities injection/removal ---
  function injectGeocities() {
    var marquee = document.createElement("div");
    marquee.className = "gc-marquee";
    marquee.innerHTML = '<div class="gc-marquee-inner">' +
      '★ WELCOME TO MY HOMEPAGE ★ YOU ARE VISITOR #27,439 ★ ' +
      'BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 ★ ' +
      'DO NOT STEAL MY HTML ★ ' +
      'SIGN MY GUESTBOOK ★ ' +
      'THIS PAGE IS ALWAYS UNDER CONSTRUCTION 🚧 ★ ' +
      'EMAIL ME AT webmaster@geocities.com ★ ' +
      'DOWNLOAD WINAMP ★ ' +
    '</div>';
    var topbar = document.querySelector(".topbar");
    topbar ? topbar.insertAdjacentElement("afterend", marquee) : document.body.prepend(marquee);
    gcElements.push(marquee);

    var sparkles = ["⭐", "💫", "✨", "🌟", "⚡", "🔥", "💥", "🎇"];
    for (var i = 0; i < 10; i++) {
      var star = document.createElement("div");
      star.className = "gc-star";
      star.textContent = sparkles[i % sparkles.length];
      star.style.cssText =
        "font-size:" + (14 + Math.random() * 18) + "px;" +
        "left:" + (Math.random() * 95) + "%;" +
        "top:" + (80 + Math.random() * (window.innerHeight - 160)) + "px;" +
        "animation-duration:" + (2 + Math.random() * 3) + "s;" +
        "animation-delay:" + (-Math.random() * 3) + "s;";
      document.body.appendChild(star);
      gcElements.push(star);
    }

    var badge = document.createElement("div");
    badge.className = "gc-badge";
    badge.innerHTML = "🚧 UNDER CONSTRUCTION 🚧<br>come back later!!";
    document.body.appendChild(badge);
    gcElements.push(badge);
  }

  function removeGeocities() {
    gcElements.forEach(function (el) { el.parentNode && el.parentNode.removeChild(el); });
    gcElements = [];
  }

  // --- Theme + font setters ---
  function setTheme(id) {
    var wasGeocities = currentTheme === "geocities";
    currentTheme = id;

    if (id === "geocities") {
      document.documentElement.setAttribute("data-theme", "");
      document.documentElement.setAttribute("data-geocities", "");
      if (!wasGeocities) injectGeocities();
    } else {
      document.documentElement.setAttribute("data-theme", id);
      document.documentElement.removeAttribute("data-geocities");
      if (wasGeocities) removeGeocities();
    }

    localStorage.setItem("sx-theme", id);
    dropdown.querySelectorAll(".sx-swatch").forEach(function (b) {
      b.classList.toggle("active", b.dataset.theme === id);
    });
  }

  function setFont(id) {
    currentFont = id;
    document.documentElement.setAttribute("data-font", id);
    localStorage.setItem("sx-font", id);
    dropdown.querySelectorAll(".sx-font-opt").forEach(function (b) {
      b.classList.toggle("active", b.dataset.font === id);
    });
  }

  dropdown.querySelectorAll(".sx-swatch").forEach(function (btn) {
    btn.addEventListener("click", function () { setTheme(btn.dataset.theme); });
  });

  dropdown.querySelectorAll(".sx-font-opt").forEach(function (btn) {
    btn.addEventListener("click", function () { setFont(btn.dataset.font); });
  });

  dropdown.querySelector(".sx-random-btn").addEventListener("click", function () {
    setTheme(THEMES[Math.floor(Math.random() * THEMES.length)].id);
    setFont(FONTS[Math.floor(Math.random() * FONTS.length)].id);
  });

  dropdown.querySelector(".sx-reset-btn").addEventListener("click", function () {
    setTheme("");
    setFont("geist");
  });

  // Inject geocities elements on load if that theme was saved
  if (currentTheme === "geocities") injectGeocities();
});
