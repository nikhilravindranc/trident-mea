/* ============================================================
   TRIDENT MEA — v2 interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Marquee (client logos) ---------- */
  var clients = [];
  for (var i = 1; i <= 47; i++) clients.push("clients/c" + String(i).padStart(2, "0") + (i === 16 ? ".svg" : ".png"));
  var rowA = clients.slice(0, 24), rowB = clients.slice(24).concat([clients[15]]);
  function fill(sel, list) {
    var t = document.querySelector(sel); if (!t) return;
    var h = list.map(function (s) { return '<div class="logo-cell"><img src="' + s + '" alt="Client logo" loading="lazy"></div>'; }).join("");
    t.innerHTML = h + h;
  }
  fill('.marquee-track[data-row="a"]', rowA);
  fill('.marquee-track[data-row="b"]', rowB);

  /* ---------- Partner grid ---------- */
  var partners = [
    ["p01.png","Juniper Networks"],["p03.png","Ruckus Wireless"],["p04.png","Fortinet"],["p05.png","Sophos"],
    ["p07.png","EnGenius"],["p08.png","Lenovo"],["p09.png","SMART"],["p10.png","VMware"],["p12.png","Veeam"],
    ["p14.png","ConVox"],["p15.png","Yeastar"],["p16.png","Grandstream"],["p17.png","NovelVox"],["p18.png","Hikvision"],
    ["p19.png","APC"],["p20.png","Schneider Electric"],["p22.png","AudioCodes"],["p24.png","Sennheiser"],["p25.png","Ergotron"],
    ["p27.png","JVC"],["p28.jpeg","Sony"],["p29.png","Zebra"],["p31.png","Cybernet"],["p32.png","GE HealthCare"],
    ["p33.png","Poly"],["p34.png","Philips Healthcare"],["p36.png","Mitel"],["p37.png","Barco"],["p38.png","Jabra"],["p40.png","Extreme Networks"]
  ];
  var grid = document.getElementById("partnerGrid");
  if (grid) grid.innerHTML = partners.map(function (p) {
    return '<div class="pill-card"><img src="partners/' + p[0] + '" alt="' + p[1] + '" loading="lazy"></div>';
  }).join("");

  /* ---------- Sectors (dual-material 3D icons) ---------- */
  var SECTORS = [
    { t: "Healthcare", d: "Supporting critical care with reliable, uninterrupted systems.",
      p: ["M32 50 C14 38 9 27 17 20 C23 15 30 18 32 23 C34 18 41 15 47 20 C55 27 50 38 32 50 Z"] },
    { t: "Hospitality", d: "Enhancing guest experience while improving operational efficiency.",
      p: ["M32 14 L52 31 V51 H12 V31 Z"] },
    { t: "Government & Public Sector", d: "Secure, compliant infrastructure for public service delivery.",
      p: ["M11 27 L32 14 L53 27 Z","M13 49 H51 V53 H13 Z","M18 29 H23 V47 H18 Z","M29.5 29 H34.5 V47 H29.5 Z","M41 29 H46 V47 H41 Z"] },
    { t: "BFSI", d: "High-performance systems built for security, compliance, and uptime.",
      p: ["M9 21 H55 a3 3 0 0 1 3 3 V40 a3 3 0 0 1 -3 3 H9 a3 3 0 0 1 -3 -3 V24 a3 3 0 0 1 3 -3 Z","M6 28 H58 V33 H6 Z"] },
    { t: "Education", d: "Connected environments for modern learning experiences.",
      p: ["M32 16 L57 26 L32 36 L7 26 Z","M19 31 L32 36.5 L45 31 V40 C45 44 19 44 19 40 Z"] },
    { t: "Oil & Gas", d: "Robust solutions designed for demanding, high-risk environments.",
      p: ["M32 12 C32 12 47 30 47 39 A15 15 0 0 1 17 39 C17 30 32 12 32 12 Z"] },
    { t: "Retail", d: "Integrated systems that improve customer experience and operations.",
      p: ["M24 25 A8 8 0 0 1 40 25 L36 25 A4 4 0 0 0 28 25 Z","M15 24 H49 L52 53 H12 Z"] },
    { t: "Telecommunications", d: "Scalable infrastructure for high-demand communication networks.",
      p: ["M14 44 H22 V53 H14 Z","M28 33 H36 V53 H28 Z","M42 22 H50 V53 H42 Z"] }
  ];
  function sectorIcon(paths) {
    var solid = paths.map(function (d) { return '<path d="' + d + '" fill="url(#tgSolid)"/>'; }).join("");
    var glass = paths.map(function (d) { return '<path d="' + d + '" fill="url(#tgGlass)" stroke="url(#tgEdge)" stroke-width="1.4" stroke-linejoin="round"/>'; }).join("");
    return '<svg viewBox="0 0 64 64" fill="none">' +
      '<g class="sic-solid" transform="translate(6,-4)">' + solid + '</g>' +
      '<g class="sic-glass">' + glass + '</g></svg>';
  }
  var sgrid = document.getElementById("sectorsGrid");
  if (sgrid) sgrid.innerHTML = SECTORS.map(function (s, i) {
    return '<article class="sector reveal' + (i % 4 ? " d" + (i % 4) : "") + '">' +
      '<div class="sector-ic">' + sectorIcon(s.p) + '</div>' +
      '<h3>' + s.t + '</h3><p>' + s.d + '</p></article>';
  }).join("");

  /* ---------- Who We Are — 4 dual-material columns ---------- */
  var FOURCOL = [
    { t: "Integrate", d: "We unify complex technologies into cohesive, reliable systems.",
      p: ["M26 13 H51 a3 3 0 0 1 3 3 V41 a3 3 0 0 1 -3 3 H26 a3 3 0 0 1 -3 -3 V16 a3 3 0 0 1 3 -3 Z","M13 22 H38 a3 3 0 0 1 3 3 V50 a3 3 0 0 1 -3 3 H13 a3 3 0 0 1 -3 -3 V25 a3 3 0 0 1 3 -3 Z"] },
    { t: "Optimize", d: "Improve efficiency and reduce operational costs across the business.",
      p: ["M10 23 H54 V29 H10 Z","M10 37 H54 V43 H10 Z","M22 26 m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0","M41 40 m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0"] },
    { t: "Secure", d: "Protect systems, data, and operations from evolving threats.",
      p: ["M32 9 L53 17 V31 C53 43 44 51 32 55 C20 51 11 43 11 31 V17 Z","M24 31 L29 36 L40 25 L43.5 28.5 L29 43 L20.5 34.5 Z"] },
    { t: "Scale", d: "Build foundations that grow and perform with your business.",
      p: ["M12 12 H30 L23 19 L31 27 L27 31 L19 23 L12 30 Z","M52 52 H34 L41 45 L33 37 L37 33 L45 41 L52 34 Z"] }
  ];
  var fcol = document.getElementById("fourCol");
  if (fcol) fcol.innerHTML = FOURCOL.map(function (f, i) {
    return '<div class="fcol reveal' + (i ? " d" + i : "") + '">' +
      '<div class="dm-ic">' + sectorIcon(f.p) + '</div>' +
      '<h4>' + f.t + '</h4><p>' + f.d + '</p></div>';
  }).join("");

  /* ---------- Solutions tabs ---------- */
  var commsIcon = '<svg viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 0 1 16 0v5a3 3 0 0 1-3 3h-2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><rect x="3" y="12" width="4" height="6" rx="1.5" stroke="currentColor"/><rect x="17" y="12" width="4" height="6" rx="1.5" stroke="currentColor"/></svg>';
  var chatIcon  = '<svg viewBox="0 0 24 24" fill="none"><path d="M21 12a8.5 8.5 0 0 1-12.3 7.6L3 21l1.4-5.7A8.5 8.5 0 1 1 21 12Z" stroke="currentColor" stroke-linejoin="round"/><path d="M9 11h6M9 14h4" stroke="currentColor" stroke-linecap="round"/></svg>';
  var serverIcon= '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor"/><rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor"/><path d="M7 7h.01M7 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  var shieldIcon= '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4v5c0 4.5-3.4 7.6-8 9-4.6-1.4-8-4.5-8-9V7l8-4Z" stroke="currentColor" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var elvIcon   = '<svg viewBox="0 0 24 24" fill="none"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" stroke-linejoin="round"/></svg>';
  var avIcon    = '<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor"/><path d="M9 8l6 4-6 4Z" stroke="currentColor" stroke-linejoin="round"/><path d="M8 21h8" stroke="currentColor" stroke-linecap="round"/></svg>';
  var softIcon  = '<svg viewBox="0 0 24 24" fill="none"><path d="M8 6 3 12l5 6M16 6l5 6-5 6M14 4l-4 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var tick = '<svg class="tick" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M8.5 12l2.3 2.3L15.5 9.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var TABS = [
    {
      h: "Unified Communications & Collaboration",
      p: "Seamless communication across teams, locations, and devices — keeping your people connected wherever work happens.",
      feats: ["Voice, video, and messaging on one platform", "Connect every location and device", "Built for hybrid and distributed teams"],
      icon: commsIcon, label: "Unified Communications", sub: "Connected everywhere",
      badge: ["99.9", "%", "Network uptime"],
      rows: [["VO","Voice & Video","tag","Live"],["MS","Messaging","bar",""],["MB","Mobile & Desk","bar",""]]
    },
    {
      h: "Contact Center Solutions",
      p: "Consistent, scalable customer experience across every interaction and channel — from voice to digital.",
      feats: ["Omnichannel routing and queuing", "Real-time agent insights", "Scales with seasonal demand"],
      icon: chatIcon, label: "Contact Center", sub: "Every interaction, on brand",
      badge: ["4.8", "/5", "CSAT score"],
      rows: [["AG","Active Agents","tag","42"],["QU","Queue Health","bar",""],["AI","Smart Routing","bar",""]]
    },
    {
      h: "IT Infrastructure",
      p: "Secure, resilient systems built to support business growth — networks, compute, and storage engineered to perform.",
      feats: ["Resilient network & data center design", "Scalable compute and storage", "Proactive monitoring and support"],
      icon: serverIcon, label: "IT Infrastructure", sub: "Foundations that perform",
      badge: ["24/7", "", "Monitoring"],
      rows: [["NW","Network","tag","Healthy"],["CP","Compute","bar",""],["ST","Storage","bar",""]]
    },
    {
      h: "Information Security",
      p: "Protect your systems, data, and operations from evolving threats with layered, compliant security.",
      feats: ["Threat detection and response", "Compliance-ready frameworks", "Endpoint to perimeter protection"],
      icon: shieldIcon, label: "Information Security", sub: "Protected by design",
      badge: ["0", "", "Breaches"],
      rows: [["FW","Firewall","tag","Active"],["ED","Endpoints","bar",""],["ID","Identity","bar",""]]
    },
    {
      h: "ELV Systems",
      p: "Integrated low-voltage systems for smarter, more efficient environments — access control, surveillance, and automation working as one.",
      feats: ["Access control and surveillance integration", "Building automation and smart systems", "Structured cabling and low-voltage design"],
      icon: elvIcon, label: "ELV Systems", sub: "Smarter environments",
      badge: ["100", "%", "Automated"],
      rows: [["AC","Access Control","tag","Live"],["CC","Surveillance","bar",""],["BA","Automation","bar",""]]
    },
    {
      h: "Audio Visual Solutions",
      p: "Reliable communication through intelligent AV integration — conferencing, signage, and collaboration spaces built to perform.",
      feats: ["Conference room and huddle space AV", "Digital signage and display systems", "Seamless integration with UC platforms"],
      icon: avIcon, label: "Audio Visual", sub: "Engaging every room",
      badge: ["4K", "", "Display ready"],
      rows: [["CR","Conference Rooms","tag","Active"],["DS","Digital Signage","bar",""],["AV","AV Control","bar",""]]
    },
    {
      h: "Software Solutions",
      p: "Custom-built applications aligned with your workflows — from internal tools to customer-facing platforms.",
      feats: ["Custom application development", "Workflow automation and integration", "Ongoing support and enhancement"],
      icon: softIcon, label: "Software Solutions", sub: "Built for your workflow",
      badge: ["100", "%", "Custom built"],
      rows: [["AP","Applications","tag","Deployed"],["IN","Integrations","bar",""],["SU","Support","bar",""]]
    }
  ];

  function rowHtml(r) {
    var right = r[2] === "tag"
      ? '<span class="tag">' + r[3] + '</span>'
      : '<div class="bars"><div class="bar"></div><div class="bar s"></div></div>';
    return '<div class="sr"><span class="av">' + r[0] + '</span>' +
           (r[2] === "tag" ? '<div class="bars"><div class="bar"></div><div class="bar s"></div></div>' : '') +
           right + '</div>';
  }

  function renderTab(idx) {
    var t = TABS[idx];
    var feats = t.feats.map(function (f) { return '<li>' + tick + '<span>' + f + '</span></li>'; }).join("");
    var rows = t.rows.map(rowHtml).join("");
    var html =
      '<div class="tab-copy">' +
        '<h3>' + t.h + '</h3>' +
        '<p>' + t.p + '</p>' +
        '<ul class="tab-feats">' + feats + '</ul>' +
        '<a class="link-arrow" href="#cta">Explore this solution <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>' +
      '</div>' +
      '<div class="tab-visual"><div class="spot">' +
        '<div class="spot-card">' +
          '<div class="sc-top"><span class="sc-ic">' + t.icon + '</span><div><b>' + t.label + '</b><span>' + t.sub + '</span></div></div>' +
          '<div class="spot-rows">' + rows + '</div>' +
        '</div>' +
        '<div class="spot-badge"><b>' + t.badge[0] + '<span>' + t.badge[1] + '</span></b><i>' + t.badge[2] + '</i></div>' +
      '</div></div>';
    var stage = document.getElementById("tabStage");
    if (!stage) return;
    stage.innerHTML = html;
  }

  var tabBtns = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  tabBtns.forEach(function (b) {
    b.addEventListener("click", function () {
      tabBtns.forEach(function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      renderTab(parseInt(b.getAttribute("data-tab"), 10));
    });
  });
  if (document.getElementById("tabStage")) renderTab(0);

  /* ---------- Sticky nav ---------- */
  var nav = document.getElementById("nav");
  function onScroll() { nav.classList.toggle("scrolled", window.scrollY > 12); }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  /* ---------- Dropdown ---------- */
  var solDrop = document.getElementById("solDrop");
  if (solDrop) {
    var btn = solDrop.querySelector("button"), timer;
    function open() { clearTimeout(timer); solDrop.classList.add("open"); btn.setAttribute("aria-expanded","true"); }
    function close() { solDrop.classList.remove("open"); btn.setAttribute("aria-expanded","false"); }
    solDrop.addEventListener("mouseenter", open);
    solDrop.addEventListener("mouseleave", function () { timer = setTimeout(close, 120); });
    btn.addEventListener("click", function (e) { e.preventDefault(); solDrop.classList.contains("open") ? close() : open(); });
    document.addEventListener("click", function (e) { if (!solDrop.contains(e.target)) close(); });
  }

  /* ---------- Mobile menu ---------- */
  var ham = document.getElementById("hamburger"), panel = document.getElementById("mobilePanel");
  ham.addEventListener("click", function () {
    var o = document.body.classList.toggle("menu-open");
    ham.setAttribute("aria-expanded", o ? "true" : "false");
  });
  panel.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { document.body.classList.remove("menu-open"); ham.setAttribute("aria-expanded","false"); });
  });
  var mpSol = document.getElementById("mpSol");
  if (mpSol) mpSol.querySelector("button").addEventListener("click", function () { mpSol.classList.toggle("open"); });

  /* ---------- Reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else reveals.forEach(function (el) { el.classList.add("in"); });

  /* ---------- Count-up stats ---------- */
  function countUp(el) {
    var m = el.textContent.trim().match(/^(\d+)/); if (!m) return;
    var target = parseInt(m[1], 10);
    var suffix = el.querySelector("small") ? el.querySelector("small").outerHTML : "";
    var dur = 1200, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.innerHTML = Math.round((1 - Math.pow(1 - p, 3)) * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var rows = document.querySelector(".statsx-rows");
  if (rows && "IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.querySelectorAll(".sn").forEach(countUp); so.disconnect(); } });
    }, { threshold: 0.3 });
    so.observe(rows);
  }
})();
