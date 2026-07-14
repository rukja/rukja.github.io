(function () {
  const site = window.SITE_CONFIG;
  const page = window.PAGE_CONTENT;
  const pageKey = page?.key || document.body.dataset.page || "home";

  if (!site || !page) {
    document.getElementById("app").textContent = "This page could not load its content.";
    return;
  }

  document.title = site.siteTitle;
  document.querySelector('meta[name="Description"]')?.setAttribute("content", site.description);

  const app = document.getElementById("app");
  app.className = "site-shell";
  app.innerHTML = `
    <aside class="sidebar">
      <div class="brand">
        <h1 class="brand__name">${site.name}</h1>
        <p class="brand__prompt">${site.displayName}@home ~ $</p>
      </div>
      <nav class="nav" aria-label="Main navigation">
        ${site.nav.map(renderNavLink).join("")}
      </nav>
    </aside>
    <main class="main">
      <p class="terminal-line">${site.displayName}@home ~ $ open ${escapeHtml(pageKey)}</p>
      ${renderPage(page)}
      <footer class="footer">${site.name} (C) 2026-</footer>
    </main>
  `;

  function renderNavLink(link) {
    const isCurrent = normalizePath(link.href) === normalizePath(location.pathname);
    const current = isCurrent ? ` aria-current="page"` : "";
    return `<a href="${link.href}"${current}>+ ${link.label}</a>`;
  }

  function renderPage(pageData) {
    return `
      <h2 class="page-title">${pageData.title}</h2>
      ${pageData.ascii ? `<pre class="ascii" aria-hidden="true">${escapeHtml(pageData.ascii)}</pre>` : ""}
      ${renderIntro(pageData.intro)}
      ${renderSubnav(pageData.sections)}
      ${(pageData.sections || []).map(renderSection).join("")}
    `;
  }

  function renderIntro(intro) {
    if (!intro?.length) return "";
    return `<div class="intro">${intro.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>`;
  }

  function renderSubnav(sections) {
    if (!sections || sections.length < 2) return "";
    return `<ul class="subnav">${sections.map((section) => `<li><a href="#${slug(section.heading)}">${section.heading}</a></li>`).join("|")}</ul>`;
  }

  function renderSection(section) {
    return `
      <section class="section" id="${slug(section.heading)}">
        <h2>${section.heading}</h2>
        ${(section.paragraphs || []).map((paragraph) => `<p>${paragraph}</p>`).join("")}
        ${renderItems(section.items)}
        ${renderLinks(section.links)}
      </section>
    `;
  }

  function renderItems(items) {
    if (!items?.length) return "";
    return `<ul class="item-list">${items.map((item) => `
      <li class="item">
        ${item.meta ? `<div class="item__meta">[${item.meta}]</div>` : ""}
        ${item.title ? `<div class="item__title">${item.title}</div>` : ""}
        ${item.description ? `<p class="item__description">${item.description}</p>` : ""}
      </li>
    `).join("")}</ul>`;
  }

  function renderLinks(links) {
    if (!links?.length) return "";
    return `<ul class="link-list">${links.map(([label, href]) => `<li><a href="${href}"${isExternal(href) ? ' target="_blank" rel="noopener noreferrer"' : ""}>${label}</a></li>`).join("")}</ul>`;
  }

  function slug(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function normalizePath(path) {
    if (path.startsWith("http")) return path;
    return path.replace(/\/index\.html$/, "/").replace(/\.html$/, "").replace(/\/$/, "") || "/";
  }

  function isExternal(href) {
    return /^https?:\/\//.test(href);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
