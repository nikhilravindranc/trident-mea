/* ============================================================
   TRIDENT MEA — v2 interactions
   ============================================================ */
(function () {
  "use strict";

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

  /* ---------- Sectors (photography-led cards) ---------- */
  var SECTORS = [
    { t: "Healthcare", d: "Supporting critical care with reliable, uninterrupted systems.", img: "healthcare.jpg" },
    { t: "Government & Public Sector", d: "Secure, compliant infrastructure for public service delivery.", img: "government.jpg" },
    { t: "Banking & Financial Services", d: "High-performance systems built for security, compliance, and uptime.", img: "banking.jpg" },
    { t: "Hospitality", d: "Enhancing guest experience while improving operational efficiency.", img: "hospitality.jpg" },
    { t: "Education", d: "Connected environments for modern learning experiences.", img: "education.jpg" },
    { t: "Telecommunications", d: "Scalable infrastructure for high-demand communication networks.", img: "telecom.jpg" },
    { t: "Oil & Gas", d: "Robust solutions designed for demanding, high-risk environments.", img: "oilgas.jpg" },
    { t: "Retail", d: "Integrated systems that improve customer experience and operations.", img: "retail.jpg" },
    { t: "Manufacturing", d: "Dependable technology for continuous production environments.", img: "manufacturing.jpg" }
  ];
  var sgrid = document.getElementById("sectorsGrid");
  if (sgrid) {
    sgrid.innerHTML = SECTORS.map(function (s, i) {
      return '<article class="sector reveal' + (i % 4 ? " d" + (i % 4) : "") + '">' +
        '<div class="sector-image" style="background-image:url(&quot;images/industries/' + s.img + '&quot;)"></div>' +
        '<div class="sector-overlay"><h3>' + s.t + '</h3><p>' + s.d + '</p></div></article>';
    }).join("");
    var cta = document.getElementById("industriesCta");
    if (cta) sgrid.appendChild(cta);
  }

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

  /* ---------- Healthcare-specific icons for ecosystem section ---------- */
  var hcIcons = {
    infra: '<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M7 7h.01M7 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    uc: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 2c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5ZM17 13c1.5 0 2.8.8 3.5 2M7 15c-.7-1.2-2-2-3.5-2M21 20c0-3-2.7-5-6-5s-6 2-6 5M3 20c0-3 2.7-5 6-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    contact: '<svg viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2M9 9h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M12 15v-3M9 9v3M15 9v3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    elv: '<svg viewBox="0 0 24 24" fill="none"><path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.6"/><path d="M10 11h4M10 16h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    av: '<svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M9 8l6 4-6 4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 21h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    security: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4v5c0 4.5-3.4 7.6-8 9-4.6-1.4-8-4.5-8-9V7l8-4Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    software: '<svg viewBox="0 0 24 24" fill="none"><path d="M7 12c0 2.8 1.3 5.3 3.3 7M7 12c0-2.8 1.3-5.3 3.3-7M17 12c0 2.8-1.3 5.3-3.3 7M17 12c0-2.8-1.3-5.3-3.3-7M12 3c-1.5 0-2.8 1.3-2.8 2.8M12 18.2c1.5 0 2.8 1.3 2.8 2.8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg>',
    clinical: '<svg viewBox="0 0 24 24" fill="none"><path d="M3 9h18v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 3v12M15 3v12M9 9h6M9 15h6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    patientid: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="9" r="1.5" fill="currentColor"/><path d="M9 14h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
    mobility: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 16h16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M6 3v10h12V3" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="7" cy="18.5" r="1.5" fill="currentColor"/><circle cx="17" cy="18.5" r="1.5" fill="currentColor"/></svg>'
  };

  /* Render data-ic icons */
  document.querySelectorAll('[data-ic]').forEach(function (el) {
    var ic = el.getAttribute('data-ic');
    if (hcIcons[ic]) {
      var svg = document.createElement('div');
      svg.innerHTML = hcIcons[ic];
      svg.className = 'sic-solid';
      el.appendChild(svg.firstElementChild);
    }
  });

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
  function setupDropdown(dropId) {
    var drop = document.getElementById(dropId);
    if (!drop) return;
    var btn = drop.querySelector("button"), timer;
    function open() { clearTimeout(timer); drop.classList.add("open"); btn.setAttribute("aria-expanded","true"); }
    function close() { drop.classList.remove("open"); btn.setAttribute("aria-expanded","false"); }
    drop.addEventListener("mouseenter", open);
    drop.addEventListener("mouseleave", function () { timer = setTimeout(close, 120); });
    btn.addEventListener("click", function (e) { e.preventDefault(); drop.classList.contains("open") ? close() : open(); });
    document.addEventListener("click", function (e) { if (!drop.contains(e.target)) close(); });
  }
  setupDropdown("aboutDrop");
  setupDropdown("solDrop");

  /* ---------- Mobile menu ---------- */
  var ham = document.getElementById("hamburger"), panel = document.getElementById("mobilePanel");
  ham.addEventListener("click", function () {
    var o = document.body.classList.toggle("menu-open");
    ham.setAttribute("aria-expanded", o ? "true" : "false");
  });
  panel.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { document.body.classList.remove("menu-open"); ham.setAttribute("aria-expanded","false"); });
  });
  function setupMobileDropdown(mpId) {
    var mp = document.getElementById(mpId);
    if (mp) mp.querySelector("button").addEventListener("click", function () { mp.classList.toggle("open"); });
  }
  setupMobileDropdown("mpAbout");
  setupMobileDropdown("mpSol");

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

  /* ---------- Globe hover interaction ---------- */
  var hvStage = document.querySelector(".hv-stage");
  var hvGlobe = document.querySelector(".hv-globe");
  if (hvStage && hvGlobe) {
    hvStage.addEventListener("mousemove", function (e) {
      var rect = hvStage.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var centerY = rect.top + rect.height / 2;
      var deltaX = e.clientX - centerX;
      var deltaY = e.clientY - centerY;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      var constrainedAngle = Math.max(-45, Math.min(45, angle / 2));
      hvGlobe.style.transform = "rotateZ(" + constrainedAngle + "deg)";
    });
    hvStage.addEventListener("mouseleave", function () {
      hvGlobe.style.transform = "rotateZ(0deg)";
      hvGlobe.style.transition = "transform 0.3s ease-out";
    });
    hvGlobe.addEventListener("transitionend", function () {
      hvGlobe.style.transition = "";
    });
  }

  /* ---------- Practice graphics hover interaction ---------- */
  document.querySelectorAll(".practice-stage").forEach(function (stage) {
    var spin = stage.querySelector(".practice-spin");
    if (!spin) return;
    stage.addEventListener("mousemove", function (e) {
      var rect = stage.getBoundingClientRect();
      var deltaX = e.clientX - (rect.left + rect.width / 2);
      var deltaY = e.clientY - (rect.top + rect.height / 2);
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      var constrainedAngle = Math.max(-45, Math.min(45, angle / 2));
      spin.style.transform = "rotateZ(" + constrainedAngle + "deg)";
    });
    stage.addEventListener("mouseleave", function () {
      spin.style.transform = "rotateZ(0deg)";
      spin.style.transition = "transform 0.3s ease-out";
    });
    spin.addEventListener("transitionend", function () {
      spin.style.transition = "";
    });
  });
})();
