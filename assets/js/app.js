function setText(selector, value, html = false) {
  const el = document.querySelector(selector);
  if (!el) return;
  if (html) el.innerHTML = value;
  else el.textContent = value;
}

function setAll(selector, values, html = false) {
  document.querySelectorAll(selector).forEach((el, idx) => {
    if (values[idx] === undefined) return;
    if (html) el.innerHTML = values[idx];
    else el.textContent = values[idx];
  });
}

function getStoredLanguage() {
  try {
    return localStorage.getItem("portfolioLang");
  } catch (error) {
    return null;
  }
}

function storeLanguage(lang) {
  try {
    localStorage.setItem("portfolioLang", lang);
  } catch (error) {
    return;
  }
}

function setWorkCard(card, updates = {}) {
  if (!card) return;
  if (updates.badge) setTextIn(card, ".badge", updates.badge);
  if (updates.period) setTextIn(card, ".period", updates.period);
  if (updates.title) setTextIn(card, ".work-title", updates.title);
  if (updates.desc) setTextIn(card, ".work-desc", updates.desc);
  if (updates.link) setTextIn(card, ".card-link", updates.link, true);
}

function setTextIn(parent, selector, value, html = false) {
  const el = parent.querySelector(selector);
  if (!el) return;
  if (html) el.innerHTML = value;
  else el.textContent = value;
}

function applyLanguage(lang) {
  lang = translations[lang] ? lang : "en";
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  storeLanguage(lang);
  document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
    const active = btn.dataset.langSwitch === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
  setAll(".nav-links a", t.nav);
  setAll(".mobile-menu > a", t.mobile);
  setText(".nav-cv", t.cv);
  document.querySelectorAll(".cv-link").forEach((link) => {
    link.setAttribute("href", t.cvFile);
    link.setAttribute("download", t.cvFile);
  });
  setText(".card-link.cv-link", t.downloadPdf, true);
  setText(".eyebrow", t.eyebrow);
  setText(".hero h1", t.heroTitle);
  setText(".hero-lead", t.heroLead, true);
  setText(".hero-actions .btn-primary", t.heroCta, true);
  
  // Hero trust pills with icons preserved
  const trustPills = document.querySelectorAll(".trust-pill");
  const icons = [
    '<i class="fa-solid fa-graduation-cap"></i>',
    '<i class="fa-solid fa-briefcase"></i>',
    '<i class="fa-solid fa-location-dot"></i>'
  ];
  t.trust.forEach((text, idx) => {
    if (trustPills[idx]) {
      trustPills[idx].innerHTML = `${icons[idx]} ${text}`;
    }
  });

  setText(".console-line", `<span class="prompt">$</span> ${t.terminal[0]}`, true);
  setAll(".console-metric .metric-copy b", [t.terminal[1], t.terminal[3], t.terminal[5]]);
  setAll(".console-metric .metric-copy span", [t.terminal[2], t.terminal[4], t.terminal[6]]);
  setAll(".proof-label", t.proof);
  setText("#work .section-label", t.workLabel);
  setText("#work .section-title", t.workTitle);
  setText("#work .section-desc", t.workDesc);
  const cards = document.querySelectorAll("#work .work-card");
  setWorkCard(cards[0], {
    badge: t.thesisBadge,
    period: t.thesisPeriod,
    title: t.thesisTitle,
    desc: t.thesisDesc,
    link: t.thesisLink,
  });
  setWorkCard(cards[1], {
    badge: t.sdwanBadge,
    desc: t.sdwanDesc,
    link: t.github,
  });
  setWorkCard(cards[2], {
    badge: t.aiBadge,
    desc: t.aiDesc,
    link: t.github,
  });
  setWorkCard(cards[3], {
    badge: t.aiBadge,
    desc: t.vpnDesc,
    link: t.github,
  });
  setText("#more-work .section-label", t.moreLabel);
  setText("#more-work .section-title", t.moreTitle);
  setText("#more-work .section-desc", t.moreDesc);
  document.querySelectorAll("#more-work .card-link").forEach((link) => {
    if (!link.textContent.includes("Watch") && !link.textContent.includes("demo") && !link.href.includes("netlify.app") && !link.closest("#makeFlowCard")) {
      link.innerHTML = t.github;
    }
  });
  
  // Make.com flow project card translation
  const makeCard = document.getElementById("makeFlowCard");
  if (makeCard) {
    setTextIn(makeCard, ".work-title", t.makeFlowTitle);
    setTextIn(makeCard, ".work-desc", t.makeFlowDesc);
    setTextIn(makeCard, ".card-link", t.makeFlowLink, true);
  }
  
  // Experience section label translations
  setText("#experience .section-label", t.expLabel);
  setText("#experience .section-title", t.expTitle);
  setText("#experience .section-desc", t.expDesc);
  
  // Multiple experience cards translations
  const expCards = document.querySelectorAll("#experienceList .experience-card");
  t.experience.forEach((exp, idx) => {
    const card = expCards[idx];
    if (!card) return;
    setTextIn(card, ".company", exp.company);
    setTextIn(card, ".role", exp.role);
    setTextIn(card, ".period", exp.period);
    setTextIn(card, ".address", `<i class="fa-solid fa-location-dot"></i> ${exp.address}`, true);
    
    const list = card.querySelector(".bullet-list");
    if (list) {
      list.innerHTML = exp.bullets.map(b => `<li>${b}</li>`).join("");
    }
  });

  // Focus section label translations
  setText("#focus .section-label", t.focusLabel);
  setText("#focus .section-title", t.focusTitle);
  setText("#focus .section-desc", t.focusDesc);
  
  // Focus cards translations
  const focusCards = document.querySelectorAll("#focus .focus-card");
  t.focusCards.forEach((focus, idx) => {
    const card = focusCards[idx];
    if (!card) return;
    setTextIn(card, ".focus-title", focus.title);
    setTextIn(card, ".focus-copy", focus.desc);
  });

  // Certifications section label translations
  setText("#certifications .section-label", t.certLabel);
  setText("#certifications .section-title", t.certTitle);
  setText("#certifications .section-desc", t.certDesc);
  
  // Certifications cards translations
  const certCards = document.querySelectorAll("#certifications .cert-card");
  t.certs.forEach((cert, idx) => {
    const card = certCards[idx];
    if (!card) return;
    setTextIn(card, "h3", cert.title);
    setTextIn(card, "p", cert.desc);
  });

  // About section translations
  setText("#about .section-label", t.aboutLabel);
  setText("#about .section-title", t.aboutTitle);
  setAll("#about .about-copy p", t.aboutP, true);
  
  // Contact section translations
  setText("#contact .section-label", t.contactLabel);
  setText("#contact .section-title", t.contactTitle);
  setText("#contact .contact-desc", t.contactDesc);
  setText("#contact .direct-links .btn-primary", t.emailMe, true);
  const inputs = document.querySelectorAll("#contactForm input, #contactForm textarea");
  if (inputs[0]) inputs[0].placeholder = t.form[0];
  if (inputs[1]) inputs[1].placeholder = t.form[1];
  if (inputs[2]) inputs[2].placeholder = t.form[2];
  setText("#submitBtn", t.form[3]);
  setText("footer", t.footer, true);
}

// Event Listeners for Language Switch
document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.langSwitch));
});
applyLanguage(getStoredLanguage() || "en");

// Header scroll effect
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 32);
});

// Mobile menu toggle
navToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// Contact Formspree integration
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");
const submitBtn = document.getElementById("submitBtn");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  submitBtn.textContent = "Sending...";
  submitBtn.setAttribute("disabled", "true");
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      form.reset();
      form.style.display = "none";
      successMsg.style.display = "block";
    } else {
      submitBtn.textContent = "Failed — use email instead";
      submitBtn.removeAttribute("disabled");
    }
  } catch (error) {
    submitBtn.textContent = "Failed — use email instead";
    submitBtn.removeAttribute("disabled");
  }
});

// Scroll Reveal animation
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!reduceMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 5, 4) * 0.05}s`;
    observer.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}
