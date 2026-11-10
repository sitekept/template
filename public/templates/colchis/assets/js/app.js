/* Colchis — front-end runtime.
   i18n (4 languages, RTL), shared chrome (header/footer/WhatsApp), page renderers,
   yield calculator, filters, scroll reveals. No dependencies, works from file:// too. */
(function () {
  "use strict";

  const SITE = window.SITE;
  const DICT = window.I18N;
  const RTL = ["he"];
  const LOCALE = { he: "he-IL", ru: "ru-RU", en: "en-US", ka: "ka-GE" };
  const page = document.body.dataset.page;

  /* ---------------- Language ---------------- */
  function pickLang() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q && DICT[q]) return q;
    try { const s = localStorage.getItem("colchis-lang"); if (s && DICT[s]) return s; } catch (e) {}
    const nav = (navigator.language || "").slice(0, 2);
    return DICT[nav] ? nav : SITE.defaultLang;
  }
  let lang = pickLang();

  function t(key, vars) {
    let s = (DICT[lang] && DICT[lang][key]) ?? DICT.en[key] ?? key;
    if (vars) for (const k in vars) s = s.split("{" + k + "}").join(vars[k]);
    return s;
  }
  const L = (obj) => (obj && (obj[lang] || obj.en)) || "";
  const money = (n) => new Intl.NumberFormat(LOCALE[lang], { style: "currency", currency: "USD", currencyDisplay: "narrowSymbol", maximumFractionDigits: 0 }).format(n);
  const pct = (n, d = 1) => new Intl.NumberFormat(LOCALE[lang], { maximumFractionDigits: d, minimumFractionDigits: d }).format(n) + "%";
  const numf = (n) => new Intl.NumberFormat(LOCALE[lang], { maximumFractionDigits: 1 }).format(n);
  const date = (iso) => new Intl.DateTimeFormat(LOCALE[lang], { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));

  function applyI18n(root = document) {
    root.querySelectorAll("[data-i18n]").forEach((el) => { el.innerHTML = t(el.dataset.i18n); });
    root.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":");
        if (attr && key) el.setAttribute(attr.trim(), t(key.trim()));
      });
    });
  }

  function setLang(next) {
    if (!DICT[next]) return;
    lang = next;
    try { localStorage.setItem("colchis-lang", next); } catch (e) {}
    const url = new URL(location.href);
    if (url.searchParams.has("lang")) { url.searchParams.set("lang", next); history.replaceState(null, "", url); }
    render();
  }

  /* ---------------- Icons (1.25 stroke line set) ---------------- */
  const sv = (p, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${p}</svg>`;
  const I = {
    arrow: sv('<path d="M7 17 17 7M8 7h9v9"/>', 'class="i-arrow"'),
    chevron: sv('<path d="m6 9 6 6 6-6"/>'),
    globe: sv('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z"/>'),
    plane: sv('<path d="M10.5 13.5 3 11l1.5-1.5 7 1 4.2-4.2c.9-.9 2.6-1.4 3.3-.7.7.7.2 2.4-.7 3.3L14.1 13l1 7L13.6 21.5 11 14"/><path d="m6 17 1 1"/>'),
    bed: sv('<path d="M3 18V7M21 18v-5a3 3 0 0 0-3-3h-8v6M3 14h18M3 18h18"/><circle cx="6.5" cy="11.5" r="1.5"/>'),
    car: sv('<path d="M5 16V11l2-5h10l2 5v5M5 16h14M5 16v2M19 16v2M5 11h14"/><circle cx="8" cy="13.5" r=".6"/><circle cx="16" cy="13.5" r=".6"/>'),
    bank: sv('<path d="M3 9.5 12 4l9 5.5M4.5 10v8M9 10v8M15 10v8M19.5 10v8M3 20.5h18"/>'),
    scale: sv('<path d="M12 4v16M7 20h10M5 7h14M5 7l-2.5 6a3 3 0 0 0 5 0L5 7ZM19 7l-2.5 6a3 3 0 0 0 5 0L19 7Z"/>'),
    key: sv('<circle cx="8" cy="15" r="4"/><path d="m11 12 8.5-8.5M16 7l2.5 2.5M14 9l2 2"/>'),
    brush: sv('<path d="M14.5 4.5 19.5 9.5 11 18l-5-5 8.5-8.5ZM6 13l-2.5 2.5a2.5 2.5 0 0 0 0 3.5l1 1a2.5 2.5 0 0 0 3.5 0L11 18"/>'),
    passport: sv('<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 17h6"/>'),
    phone: sv('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>'),
    mail: sv('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>'
  };
  const SVC = [
    ["flights", "plane"], ["hotel", "bed"], ["pickup", "car"], ["bank", "bank"],
    ["legal", "scale"], ["management", "key"], ["interior", "brush"], ["residency", "passport"]
  ];

  const waLink = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg || t("wa.default"))}`;
  const img = (name, alt = "", sizes = "100vw", eager = false) =>
    `<img src="assets/img/${name}.jpg" srcset="assets/img/${name}-sm.jpg 900w, assets/img/${name}.jpg 1800w" sizes="${sizes}" alt="${alt}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
  const btn = (href, label, cls = "", icon = I.arrow, ext = false) =>
    `<a class="btn ${cls}" href="${href}"${ext ? ' target="_blank" rel="noopener"' : ""}><span>${label}</span><span class="chip">${icon}</span></a>`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------------- Finance helpers ---------------- */
  const gross = (p) => (p.rent * 12) / p.price * 100;
  const net = (p) => {
    const occ = p.rental === "long" ? 0.95 : 0.85;
    return (p.rent * 12 * occ * (1 - 0.18) * (1 - 0.05)) / p.price * 100;
  };

  /* ---------------- Shared chrome ---------------- */
  const NAV = [["index.html", "nav.home", "home"], ["listings.html", "nav.listings", "listings"], ["services.html", "nav.services", "services"], ["blog.html", "nav.journal", "journal"], ["faq.html", "nav.faq", "faq"], ["contact.html", "nav.contact", "contact"]];
  const navActive = (key) => key === page || (page === "property" && key === "listings") || (page === "article" && key === "journal");

  function header() {
    const links = NAV.slice(1).map(([h, k, id]) => `<li><a href="${h}"${navActive(id) ? ' aria-current="page"' : ""}>${t(k)}</a></li>`).join("");
    const mlinks = NAV.map(([h, k]) => `<li><a href="${h}">${t(k)}</a></li>`).join("");
    const langItems = SITE.langs.map((l) => `<li><button type="button" data-lang="${l}" aria-current="${l === lang}"><span>${t("lang." + l)}</span><small>${l.toUpperCase()}</small></button></li>`).join("");
    const mlang = SITE.langs.map((l) => `<button type="button" data-lang="${l}" aria-current="${l === lang}">${t("lang." + l)}</button>`).join("");
    return `
    <header class="site-header ${page === "home" ? "on-hero" : ""}">
      <nav class="nav-island" aria-label="Main">
        <a class="brand" href="index.html" aria-label="Colchis"><span class="brand-word">Colchis</span><span class="brand-geo" lang="ka">კოლხეთი</span></a>
        <ul class="nav-links">${links}</ul>
        <div class="nav-actions">
          <div class="lang">
            <button class="lang-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="${t("nav.language")}">${I.globe}<span>${lang.toUpperCase()}</span></button>
            <ul class="lang-menu" role="menu">${langItems}</ul>
          </div>
          <span class="btn-wa-nav">${btn(waLink(), t("cta.whatsappShort"), "btn-sm btn-wa", I.wa, true)}</span>
          <button class="burger" type="button" aria-label="${t("nav.menu")}" aria-expanded="false"><span></span><span></span></button>
        </div>
      </nav>
    </header>
    <div class="mobile-menu" aria-hidden="true">
      <ul>${mlinks}</ul>
      <div class="mm-foot"><div class="mm-langs">${mlang}</div>${btn(waLink(), t("cta.whatsapp"), "btn-wa", I.wa, true)}</div>
    </div>`;
  }

  function contactBand() {
    return `
    <section class="band" aria-labelledby="band-title">
      <div class="band-frame">
        ${img("p-batumi-night", "", "100vw")}
        <div class="reveal">
          <span class="eyebrow on-night" style="background:rgba(255,255,255,.08);color:rgba(239,233,221,.8)">${t("nav.contact")}</span>
          <h2 id="band-title" class="h-1">${t("contactband.title")}</h2>
          <p class="lead">${t("contactband.lead")}</p>
          <div class="actions">${btn(waLink(), t("cta.whatsapp"), "btn-light btn-wa", I.wa, true)}${btn("contact.html", t("cta.consult"), "btn-ghost on-dark")}</div>
        </div>
      </div>
    </section>`;
  }

  function footer() {
    const y = new Date().getFullYear();
    return `
    <footer class="site-footer">
      <div class="wrap">
        <div class="foot-grid">
          <div>
            <a class="brand" href="index.html"><span class="brand-word">Colchis</span><span class="brand-geo" lang="ka" style="color:var(--on-night-2)">კოლხეთი</span></a>
            <p class="foot-about" style="margin-top:1.2rem">${t("footer.about")}</p>
          </div>
          <div><h4>${t("footer.explore")}</h4><ul>${NAV.slice(1).map(([h, k]) => `<li><a href="${h}">${t(k)}</a></li>`).join("")}</ul></div>
          <div><h4>${t("footer.contact")}</h4><ul>
            <li><a href="${waLink()}" target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href="tel:${SITE.phone}"><span class="ltr">${SITE.phoneDisplay}</span></a></li>
            <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li style="color:var(--on-night-2)">${t("footer.hours")}</li>
          </ul></div>
          <div><h4>${t("footer.offices")}</h4><ul style="color:var(--on-night-2)"><li>${t("footer.officeTbilisi")}</li><li>${t("footer.officeBatumi")}</li></ul></div>
        </div>
        <div class="foot-word" aria-hidden="true">Colchis</div>
        <div class="foot-base"><span>© ${y} Colchis. ${t("footer.rights")} ${t("footer.disclaimer")}</span><a href="credits.html">${t("footer.credits")}</a></div>
      </div>
    </footer>
    <a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp"><span class="wa-dot">${I.wa}</span><span class="wa-label">${t("cta.whatsappShort")}</span></a>`;
  }

  /* ---------------- Components ---------------- */
  function propCard(p, i = 0) {
    return `
    <a class="pcard bezel reveal" style="--d:${(i % 3) * 0.08}s" href="property.html?id=${p.id}">
      <div class="core">
        <div class="pcard-media">
          ${img(p.img, esc(t(`p.${p.id}.title`)), "(max-width:640px) 100vw, (max-width:1100px) 50vw, 33vw")}
          <div class="pills"><span class="pill">${t("status." + p.status)}</span><span class="pill pill-yield num">${pct(gross(p))}</span></div>
        </div>
        <div class="pcard-body">
          <div class="pcard-meta"><span>${t("city." + p.city)}</span><span>${t("type." + p.type)}</span><span class="num">${p.area} ${t("unit.m2")}</span></div>
          <h3>${t(`p.${p.id}.title`)}</h3>
        </div>
        <dl class="figs num">
          <div><dt>${t("prop.price")}</dt><dd>${money(p.price)}</dd></div>
          <div><dt>${t("prop.rent")}</dt><dd>${money(p.rent)}</dd></div>
          <div><dt>${t("prop.yield")}</dt><dd class="accent">${pct(gross(p))}</dd></div>
        </dl>
      </div>
    </a>`;
  }

  function journalCard(a, i) {
    return `
    <a class="jcard reveal" style="--d:${i * 0.08}s" href="article.html?slug=${a.slug}">
      <div class="jcard-media">${img(a.img.replace("assets/img/", "").replace(".jpg", ""), "", "(max-width:860px) 100vw, 33vw")}</div>
      <div class="jcard-meta"><b>${L(a.category)}</b><span>${date(a.date)}</span><span>${t("journal.minRead", { n: a.readMin })}</span></div>
      <h3>${L(a.title)}</h3>
      <p>${L(a.excerpt)}</p>
    </a>`;
  }

  const qa = (n) => `<details class="qa"><summary><span>${t("faq.q" + n)}</span><span class="plus" aria-hidden="true"></span></summary><div class="ans"><p>${t("faq.a" + n)}</p></div></details>`;

  /* ---------------- Page renderers ---------------- */
  const R = {};

  R.home = function () {
    const featured = window.PROPERTIES.filter((p) => p.featured);
    const hp = window.PROPERTIES[0];
    const hc = document.getElementById("hero-card");
    if (hc) hc.innerHTML = `
      <div class="core">
        ${img(hp.img, "", "300px")}
        <div class="hc-title">${t(`p.${hp.id}.title`)}</div>
        <dl class="hc-figs num">
          <div><dt>${t("prop.price")}</dt><dd>${money(hp.price)}</dd></div>
          <div><dt>${t("prop.rent")}</dt><dd>${money(hp.rent)}</dd></div>
          <div><dt>${t("prop.yield")}</dt><dd class="accent">${pct(gross(hp))}</dd></div>
        </dl>
      </div>`;
    fill("featured", featured.map(propCard).join(""));
    fill("svc-grid", servicesBento());
    if (window.BLOG) fill("journal-grid", window.BLOG.map(journalCard).join(""));
    fill("faq-teaser", [1, 2, 8, 6, 12].map(qa).join(""));
    initCalc();
  };

  function servicesBento() {
    return SVC.map(([k, ic], i) => {
      const n = String(i + 1).padStart(2, "0");
      if (k === "flights" || k === "management") {
        const im = k === "flights" ? "kazbegi" : "p-sololaki";
        return `<article class="svc svc-wide svc-img bezel reveal" style="--d:${(i % 4) * 0.06}s"><div class="core">
          <div class="svc-text"><span class="svc-icon">${I[ic]}</span><span class="idx num">${n}</span><h3>${t(`svc.${k}.title`)}</h3><p>${t(`svc.${k}.text`)}</p></div>
          ${img(im, "", "(max-width:640px) 100vw, 25vw")}
        </div></article>`;
      }
      const wide = k === "interior" || k === "residency" ? " svc-wide" : "";
      return `<article class="svc${wide} bezel reveal" style="--d:${(i % 4) * 0.06}s"><div class="core">
        <span class="svc-icon">${I[ic]}</span><span class="idx num">${n}</span><h3>${t(`svc.${k}.title`)}</h3><p>${t(`svc.${k}.text`)}</p>
      </div></article>`;
    }).join("");
  }

  function initCalc() {
    const root = document.getElementById("calc");
    if (!root) return;
    const $ = (id) => root.querySelector("#" + id);
    const inputs = ["c-price", "c-rent", "c-occ", "c-cost"].map($);
    const update = () => {
      const [price, rent, occ, cost] = inputs.map((i) => +i.value);
      inputs.forEach((i) => i.style.setProperty("--p", ((i.value - i.min) / (i.max - i.min)) * 100 + "%"));
      $("o-price").textContent = money(price);
      $("o-rent").textContent = money(rent);
      $("o-occ").textContent = occ + "%";
      $("o-cost").textContent = cost + "%";
      const g = (rent * 12) / price * 100;
      const annual = rent * 12 * (occ / 100) * (1 - cost / 100) * 0.95;
      const n = annual / price * 100;
      $("r-gross").textContent = pct(g);
      $("r-net").textContent = pct(n);
      $("r-annual").textContent = money(annual);
      $("r-payback").textContent = numf(price / Math.max(annual, 1)) + " " + t("calc.years");
    };
    if (!root.dataset.bound) { inputs.forEach((i) => i.addEventListener("input", update)); root.dataset.bound = "1"; }
    update();
  }

  R.listings = function () {
    const f = document.getElementById("filters");
    const params = new URLSearchParams(location.search);
    const cities = ["tbilisi", "batumi", "gudauri", "sighnaghi"];
    const types = ["apartment", "studio", "penthouse", "house"];
    const budgets = [75000, 150000, 250000, 500000];
    const state = f.dataset.state ? JSON.parse(f.dataset.state) : { city: params.get("city") || "", type: "", budget: "", sort: "yield" };
    const opt = (v, label, cur) => `<option value="${v}"${String(cur) === String(v) ? " selected" : ""}>${label}</option>`;
    f.innerHTML = `<div class="core">
      <label class="field-pill"><span>${t("filter.city")}</span><select name="city">${opt("", t("filter.all"), state.city)}${cities.map((c) => opt(c, t("city." + c), state.city)).join("")}</select></label>
      <label class="field-pill"><span>${t("filter.type")}</span><select name="type">${opt("", t("filter.all"), state.type)}${types.map((c) => opt(c, t("type." + c), state.type)).join("")}</select></label>
      <label class="field-pill"><span>${t("filter.budget")}</span><select name="budget">${opt("", t("filter.any"), state.budget)}${budgets.map((b) => opt(b, money(b), state.budget)).join("")}</select></label>
      <label class="field-pill"><span>${t("filter.sort")}</span><select name="sort">${["yield", "priceAsc", "priceDesc", "size"].map((s) => opt(s, t("sort." + s), state.sort)).join("")}</select></label>
      <span class="count num" id="count"></span>
    </div>`;
    f.className = "filters bezel";
    const run = () => {
      let list = window.PROPERTIES.filter((p) => (!state.city || p.city === state.city) && (!state.type || p.type === state.type) && (!state.budget || p.price <= +state.budget));
      const sorters = { yield: (a, b) => gross(b) - gross(a), priceAsc: (a, b) => a.price - b.price, priceDesc: (a, b) => b.price - a.price, size: (a, b) => b.area - a.area };
      list.sort(sorters[state.sort]);
      document.getElementById("count").textContent = t("listings.count", { n: list.length });
      const grid = document.getElementById("grid");
      grid.innerHTML = list.length ? list.map(propCard).join("") :
        `<div class="empty" style="grid-column:1/-1"><p>${t("listings.empty")}</p>${btn(waLink(), t("cta.whatsapp"), "btn-wa", I.wa, true)}</div>`;
      observe(grid);
    };
    f.querySelectorAll("select").forEach((s) => s.addEventListener("change", () => { state[s.name] = s.value; f.dataset.state = JSON.stringify(state); run(); }));
    f.dataset.state = JSON.stringify(state);
    run();
  };

  R.property = function () {
    const id = +new URLSearchParams(location.search).get("id");
    const p = window.PROPERTIES.find((x) => x.id === id);
    const main = document.getElementById("property");
    if (!p) { main.innerHTML = `<div class="wrap page-head"><h1 class="h-2">${t("prop.notFound")}</h1><p style="margin-top:2rem">${btn("listings.html", t("cta.viewAll"))}</p></div>`; return; }
    const title = t(`p.${p.id}.title`);
    document.title = `${title} — Colchis`;
    const waMsg = t("wa.property", { ref: p.ref, title });
    const similar = window.PROPERTIES.filter((x) => x.id !== p.id).sort((a, b) => (b.city === p.city) - (a.city === p.city) || Math.abs(a.price - p.price) - Math.abs(b.price - p.price)).slice(0, 3);
    main.innerHTML = `
      <section class="prop-hero">
        <div class="prop-gallery">
          <figure>${img(p.img, esc(title), "(max-width:860px) 100vw, 66vw", true)}</figure>
          <figure>${img(p.gallery[0], "", "33vw")}</figure>
          <figure>${img(p.gallery[1], "", "33vw")}</figure>
        </div>
      </section>
      <section class="section-tight"><div class="wrap prop-layout">
        <div>
          <nav class="crumbs" aria-label="Breadcrumb"><a href="listings.html">${t("nav.listings")}</a><span>/</span><span>${t("city." + p.city)}</span><span>/</span><span class="num">${p.ref}</span></nav>
          <h1 class="h-2 reveal">${title}</h1>
          <div class="prop-section" style="margin-top:2.5rem">
            <p class="prop-desc">${t(`p.${p.id}.desc`)}</p>
          </div>
          <div class="prop-section">
            <h2>${t("prop.details")}</h2>
            <dl class="kv num">
              <div><dt>${t("prop.area")}</dt><dd>${p.area} ${t("unit.m2")}</dd></div>
              <div><dt>${t("prop.rooms")}</dt><dd>${p.rooms}</dd></div>
              <div><dt>${t("prop.bedrooms")}</dt><dd>${p.bedrooms}</dd></div>
              <div><dt>${t("prop.floor")}</dt><dd>${p.floor}</dd></div>
              <div><dt>${t("prop.status")}</dt><dd>${t("status." + p.status)}</dd></div>
              <div><dt>${t("prop.rentalModel")}</dt><dd>${t("prop.rental." + p.rental)}</dd></div>
            </dl>
          </div>
          <div class="prop-section">
            <h2>${t("prop.features")}</h2>
            <ul class="features">${p.features.map((k) => `<li>${t("feat." + k)}</li>`).join("")}</ul>
          </div>
        </div>
        <aside class="prop-aside bezel"><div class="core">
          <span class="eyebrow" style="margin-bottom:.4rem">${t("prop.ref")} <span class="num">${p.ref}</span></span>
          <div class="prop-price num">${money(p.price)}</div>
          <dl class="kv num">
            <div><dt>${t("prop.rent")}</dt><dd>${money(p.rent)}</dd></div>
            <div><dt>${t("prop.annualRent")}</dt><dd>${money(p.rent * 12)}</dd></div>
            <div><dt>${t("prop.yield")}</dt><dd class="accent">${pct(gross(p))}</dd></div>
            <div><dt>${t("prop.netYield")}</dt><dd>${pct(net(p))}</dd></div>
            <div><dt>${t("prop.pricePerM2")}</dt><dd>${money(Math.round(p.price / p.area))}</dd></div>
            <div><dt>${t("prop.area")}</dt><dd>${p.area} ${t("unit.m2")}</dd></div>
          </dl>
          <p class="small-note">${t("prop.netNote")}</p>
          <h3 class="h-3" style="margin-top:1.8rem">${t("prop.interested")}</h3>
          <p class="small-note" style="margin-top:.6rem">${t("prop.interestedLead")}</p>
          ${btn(waLink(waMsg), t("cta.whatsapp"), "btn-wa", I.wa, true)}
          ${btn("contact.html", t("cta.consult"), "btn-ghost")}
        </div></aside>
      </div></section>
      <section class="section-tight on-paper-2"><div class="wrap">
        <h2 class="h-2" style="margin-bottom:3rem">${t("prop.similar")}</h2>
        <div class="grid-props">${similar.map(propCard).join("")}</div>
      </div></section>`;
  };

  R.services = function () {
    fill("svc-rows", SVC.map(([k, ic], i) => `
      <div class="svc-row reveal">
        <span class="svc-icon">${I[ic]}</span>
        <h3><span class="num" style="color:var(--ink-3);font-size:.5em;vertical-align:middle;margin-inline-end:.8rem">${String(i + 1).padStart(2, "0")}</span>${t(`svc.${k}.title`)}</h3>
        <p>${t(`svc.${k}.text`)}</p>
      </div>`).join(""));
  };

  R.journal = function () { if (window.BLOG) fill("journal-grid", window.BLOG.map(journalCard).join("")); };

  R.article = function () {
    const slug = new URLSearchParams(location.search).get("slug");
    const a = (window.BLOG || []).find((x) => x.slug === slug) || (window.BLOG || [])[0];
    const main = document.getElementById("article");
    if (!a) return;
    document.title = `${L(a.title)} — Colchis`;
    const others = window.BLOG.filter((x) => x !== a);
    main.innerHTML = `
      <header class="article-head wrap">
        <div class="jcard-meta"><b>${L(a.category)}</b><span>${date(a.date)}</span><span>${t("journal.minRead", { n: a.readMin })}</span></div>
        <h1 class="h-1">${L(a.title)}</h1>
      </header>
      <div class="article-cover">${`<figure>${img(a.img.replace("assets/img/", "").replace(".jpg", ""), "", "100vw", true)}</figure>`}</div>
      <article class="section-tight"><div class="wrap"><div class="prose">${L(a.body)}</div>
        <div class="prose" style="margin-top:3rem;display:flex;gap:.75rem;flex-wrap:wrap">${btn(waLink(), t("cta.whatsapp"), "btn-wa", I.wa, true)}${btn("blog.html", t("cta.allArticles"), "btn-ghost")}</div>
      </div></article>
      <section class="section-tight on-paper-2"><div class="wrap">
        <h2 class="h-2" style="margin-bottom:3rem">${t("journal.related")}</h2>
        <div class="journal-grid" style="grid-template-columns:1fr 1fr">${others.map(journalCard).join("")}</div>
      </div></section>`;
  };

  R.faq = function () {
    const groups = [["buying", [1, 2, 3, 4]], ["money", [5, 6, 7, 10]], ["renting", [8, 9]], ["travel", [11, 12]]];
    fill("faq-all", groups.map(([g, qs]) => `<h2 class="faq-group-title">${t("faq.group." + g)}</h2><div class="faq-list">${qs.map(qa).join("")}</div>`).join(""));
    // FAQPage structured data
    const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: Array.from({ length: 12 }, (_, i) => ({ "@type": "Question", name: t("faq.q" + (i + 1)), acceptedAnswer: { "@type": "Answer", text: t("faq.a" + (i + 1)) } })) };
    let s = document.getElementById("ld-faq");
    if (!s) { s = document.createElement("script"); s.type = "application/ld+json"; s.id = "ld-faq"; document.head.appendChild(s); }
    s.textContent = JSON.stringify(ld);
  };

  R.contact = function () {
    fill("direct", `
      <a href="${waLink()}" target="_blank" rel="noopener"><div><small>WhatsApp</small><b class="ltr">${SITE.phoneDisplay}</b></div>${I.arrow}</a>
      <a href="tel:${SITE.phone}"><div><small>${t("contact.phone")}</small><b class="ltr">${SITE.phoneDisplay}</b></div>${I.arrow}</a>
      <a href="mailto:${SITE.email}"><div><small>${t("contact.email")}</small><b>${SITE.email}</b></div>${I.arrow}</a>
      <div><div><small>${t("contact.languages")}</small><b>${t("contact.languagesValue")}</b></div></div>
      <div><div><small>${t("footer.offices")}</small><b style="font-size:1rem">${t("footer.officeTbilisi")}<br>${t("footer.officeBatumi")}</b></div></div>`);
    const form = document.getElementById("contact-form");
    const langSel = form.querySelector("[name=lang]");
    langSel.innerHTML = SITE.langs.map((l) => `<option value="${l}"${l === lang ? " selected" : ""}>${t("lang." + l)}</option>`).join("");
    if (form.dataset.bound) return;
    form.dataset.bound = "1";
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = Object.fromEntries(new FormData(form));
      const msg = form.querySelector(".form-msg");
      if (!d.name.trim() || !d.phone.trim()) { msg.textContent = t("contact.form.required"); return; }
      const sel = (n) => { const s = form.querySelector(`[name=${n}]`); return s.options[s.selectedIndex].text; };
      const text = [t("wa.default"), "", `${t("contact.form.name")}: ${d.name}`, `${t("contact.form.phone")}: ${d.phone}`, d.email && `${t("contact.form.email")}: ${d.email}`, `${t("contact.form.lang")}: ${sel("lang")}`, `${t("contact.form.interest")}: ${sel("interest")}`, `${t("contact.form.budget")}: ${sel("budget")}`, d.message && `\n${d.message}`].filter(Boolean).join("\n");
      window.open(waLink(text), "_blank", "noopener");
      msg.textContent = t("contact.form.sent");
    });
  };

  R.credits = function () {
    fill("credits", window.PHOTO_CREDITS.map(([n, f]) => `<li><a href="https://commons.wikimedia.org/wiki/${encodeURI(f)}" target="_blank" rel="noopener">${f.replace("File:", "").replace(/_/g, " ")}</a> — Wikimedia Commons</li>`).join(""));
  };

  /* ---------------- Behaviour ---------------- */
  function fill(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }

  let io;
  function observe(root = document) {
    if (!("IntersectionObserver" in window)) { root.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in")); return; }
    io = io || new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    root.querySelectorAll(".reveal:not(.is-in)").forEach((el) => io.observe(el));
  }

  function bindChrome() {
    const hdr = document.querySelector(".site-header");
    const langBox = document.querySelector(".lang");
    const lb = langBox.querySelector(".lang-btn");
    lb.addEventListener("click", (e) => { e.stopPropagation(); const o = langBox.classList.toggle("is-open"); lb.setAttribute("aria-expanded", o); });
    document.addEventListener("click", () => { langBox.classList.remove("is-open"); lb.setAttribute("aria-expanded", "false"); }, { once: false });
    document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => { document.body.classList.remove("menu-open"); setLang(b.dataset.lang); }));
    const burger = document.querySelector(".burger");
    const mm = document.querySelector(".mobile-menu");
    burger.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open); mm.setAttribute("aria-hidden", !open);
      burger.setAttribute("aria-label", t(open ? "nav.close" : "nav.menu"));
    });
    mm.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("menu-open")));

    // Header: solid after hero, hide on scroll down, show on scroll up. Uses a sentinel + rAF-throttled scroll.
    const wa = document.querySelector(".wa-float");
    let lastY = scrollY, ticking = false;
    const onScroll = () => {
      const y = scrollY;
      hdr.classList.toggle("is-scrolled", y > innerHeight * 0.6);
      hdr.classList.toggle("is-hidden", y > 400 && y > lastY && !document.body.classList.contains("menu-open"));
      wa.classList.toggle("is-visible", y > 500);
      lastY = y; ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
    onScroll();
  }

  function render() {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = RTL.includes(lang) ? "rtl" : "ltr";
    const metaKey = document.body.dataset.meta;
    if (metaKey) document.title = t(metaKey);
    const desc = document.querySelector('meta[name="description"]');
    if (desc && page === "home") desc.content = t("meta.home.desc");

    document.getElementById("chrome-top").innerHTML = header();
    const bottom = document.getElementById("chrome-bottom");
    bottom.innerHTML = (document.body.dataset.band === "off" ? "" : contactBand()) + footer();

    applyI18n();
    document.querySelectorAll("[data-wa]").forEach((a) => { a.href = waLink(); a.target = "_blank"; a.rel = "noopener"; const c = a.querySelector(".chip"); if (c && !c.innerHTML) c.innerHTML = I.wa; });
    (R[page] || (() => {}))();
    bindChrome();
    observe();
  }

  render();
})();
