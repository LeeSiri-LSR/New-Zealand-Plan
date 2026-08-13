import fs from "node:fs";
import { marked } from "/Users/leesiri/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/marked/lib/marked.esm.js";

const sourcePath = new URL("./新西兰行程清单_v3.1.md", import.meta.url);
const outputPath = new URL("./新西兰行程清单_v3.2_iOS极简版.html", import.meta.url);
const markdown = fs.readFileSync(sourcePath, "utf8");

marked.use({
  gfm: true,
  breaks: false,
});

const body = marked.parse(markdown);
const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <title>新西兰7晚8日行程清单 · iOS极简版</title>
  <style>
    :root {
      --ios-bg: #f5f5f7;
      --ios-card: rgba(255, 255, 255, 0.88);
      --ios-card-solid: #ffffff;
      --ios-label: #1d1d1f;
      --ios-secondary: #6e6e73;
      --ios-tertiary: #8e8e93;
      --ios-blue: #007aff;
      --ios-blue-soft: rgba(0, 122, 255, 0.09);
      --ios-separator: rgba(60, 60, 67, 0.14);
      --ios-warning: #9a6700;
      --ios-warning-bg: #fff8e6;
      --ios-radius: 22px;
      --ios-shadow: 0 12px 35px rgba(0, 0, 0, 0.055);
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      color: var(--ios-label);
      background: var(--ios-bg);
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "PingFang SC", "Helvetica Neue", sans-serif;
      font-size: 15px;
      line-height: 1.65;
      -webkit-font-smoothing: antialiased;
    }
    .topbar {
      position: sticky;
      top: 0;
      z-index: 20;
      border-bottom: 1px solid var(--ios-separator);
      background: rgba(245, 245, 247, 0.76);
      backdrop-filter: saturate(180%) blur(24px);
      -webkit-backdrop-filter: saturate(180%) blur(24px);
    }
    .topbar-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: min(980px, calc(100% - 32px));
      min-height: 52px;
      margin: auto;
    }
    .brand { font-size: 14px; font-weight: 650; letter-spacing: -0.01em; }
    .nav-links { display: flex; gap: 6px; }
    .nav-links a {
      padding: 7px 11px;
      color: var(--ios-secondary);
      border-radius: 999px;
      font-size: 13px;
      text-decoration: none;
    }
    .nav-links a:hover { color: var(--ios-blue); background: var(--ios-blue-soft); }
    main {
      width: min(980px, calc(100% - 32px));
      margin: 0 auto;
      padding: 72px 0 96px;
    }
    h1, h2, h3 { color: var(--ios-label); line-height: 1.2; letter-spacing: -0.025em; }
    h1 {
      margin: 0;
      font-size: clamp(34px, 6vw, 58px);
      font-weight: 750;
    }
    .doc-title { max-width: 920px; font-size: clamp(36px, 5vw, 50px); }
    .plan-title {
      margin-top: 76px;
      padding-top: 28px;
      border-top: 1px solid var(--ios-separator);
      font-size: clamp(29px, 4.5vw, 43px);
    }
    .utility-title {
      margin-top: 70px;
      padding-top: 26px;
      border-top: 1px solid var(--ios-separator);
      font-size: clamp(26px, 4vw, 34px);
    }
    h2 {
      margin: 52px 0 16px;
      font-size: 24px;
      font-weight: 700;
    }
    h3 { margin: 32px 0 12px; font-size: 18px; font-weight: 650; }
    p { margin: 10px 0; }
    strong { font-weight: 680; }
    a { color: var(--ios-blue); text-underline-offset: 3px; overflow-wrap: anywhere; }
    a:hover { text-decoration-thickness: 2px; }
    hr { display: none; }
    blockquote {
      margin: 18px 0;
      padding: 16px 18px;
      color: var(--ios-warning);
      background: var(--ios-warning-bg);
      border: 0;
      border-radius: 16px;
    }
    blockquote p { margin: 4px 0; }
    .hero-meta {
      margin: 22px 0 0;
      padding: 0;
      color: var(--ios-secondary);
      background: transparent;
      font-size: 16px;
    }
    .plan-overview {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 14px;
      margin: 38px 0 70px;
    }
    .overview-card {
      display: block;
      min-height: 154px;
      padding: 24px;
      color: inherit;
      background: var(--ios-card-solid);
      border: 1px solid rgba(0, 0, 0, 0.04);
      border-radius: var(--ios-radius);
      box-shadow: var(--ios-shadow);
      text-decoration: none;
      transition: transform .18s ease, box-shadow .18s ease;
    }
    .overview-card:hover { transform: translateY(-2px); box-shadow: 0 16px 42px rgba(0, 0, 0, 0.08); }
    .overview-card small { color: var(--ios-blue); font-weight: 650; }
    .overview-card h3 { margin: 16px 0 7px; font-size: 23px; }
    .overview-card p { margin: 0; color: var(--ios-secondary); line-height: 1.5; }
    .day-list { display: grid; gap: 10px; margin: 18px 0 30px; }
    .day-card {
      display: grid;
      grid-template-columns: 92px minmax(0, 1fr) 112px;
      gap: 18px;
      align-items: start;
      padding: 19px 20px;
      background: var(--ios-card-solid);
      border: 1px solid rgba(0, 0, 0, 0.04);
      border-radius: 18px;
    }
    .day-label { color: var(--ios-blue); font-weight: 720; font-variant-numeric: tabular-nums; }
    .day-route { font-size: 16px; font-weight: 650; }
    .day-note { margin-top: 5px; color: var(--ios-secondary); font-size: 14px; }
    .day-time { color: var(--ios-tertiary); font-size: 13px; text-align: right; }
    .stay-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin: 18px 0 30px; }
    .stay-card {
      position: relative;
      min-height: 154px;
      padding: 21px;
      background: var(--ios-card-solid);
      border: 1px solid rgba(0, 0, 0, 0.04);
      border-radius: 18px;
    }
    .stay-day { color: var(--ios-blue); font-size: 13px; font-weight: 680; }
    .stay-place { margin: 8px 0; font-size: 17px; font-weight: 660; }
    .stay-price { color: var(--ios-secondary); font-size: 14px; }
    .stay-card a { display: inline-block; margin-top: 12px; font-size: 14px; text-decoration: none; }
    details.data-disclosure {
      margin: 14px 0;
      background: var(--ios-card-solid);
      border: 1px solid rgba(0, 0, 0, 0.04);
      border-radius: 18px;
      overflow: clip;
    }
    details.data-disclosure summary {
      position: relative;
      padding: 18px 48px 18px 20px;
      cursor: pointer;
      list-style: none;
      font-weight: 630;
    }
    details.data-disclosure summary::-webkit-details-marker { display: none; }
    details.data-disclosure summary::after {
      content: "＋";
      position: absolute;
      right: 20px;
      color: var(--ios-tertiary);
      font-size: 20px;
      font-weight: 400;
      transition: transform .2s ease;
    }
    details.data-disclosure[open] summary::after { transform: rotate(45deg); }
    details.data-disclosure[open] summary { border-bottom: 1px solid var(--ios-separator); }
    .table-wrap {
      width: 100%;
      margin: 0;
      overflow-x: auto;
    }
    table { width: 100%; min-width: 720px; border-collapse: collapse; background: transparent; }
    th, td { padding: 13px 16px; border-bottom: 1px solid var(--ios-separator); vertical-align: top; text-align: left; }
    th { color: var(--ios-secondary); font-size: 12px; font-weight: 650; white-space: nowrap; }
    td { font-size: 13px; }
    tr:last-child td { border-bottom: 0; }
    ul, ol { padding-left: 24px; }
    li { margin: 7px 0; }
    .task-list-item {
      margin: 8px 0;
      padding: 14px 16px;
      background: var(--ios-card-solid);
      border-radius: 14px;
      list-style: none;
    }
    .contains-task-list { padding-left: 0; }
    input[type="checkbox"] { width: 17px; height: 17px; margin: 0 9px 0 0; accent-color: var(--ios-blue); vertical-align: -3px; }
    code { padding: 2px 5px; background: rgba(118, 118, 128, 0.12); border-radius: 6px; }
    @media (max-width: 700px) {
      body { font-size: 14px; }
      .topbar-inner { width: calc(100% - 24px); }
      .brand { display: none; }
      .nav-links { width: 100%; justify-content: center; }
      main { width: calc(100% - 28px); padding: 46px 0 68px; }
      .plan-overview, .stay-grid { grid-template-columns: 1fr; }
      .plan-overview { margin-bottom: 54px; }
      .plan-title { margin-top: 60px; }
      h2 { margin-top: 40px; font-size: 21px; }
      .day-card { grid-template-columns: 68px minmax(0, 1fr); gap: 12px; }
      .day-time { grid-column: 2; text-align: left; }
      table { min-width: 660px; }
    }
    @media (prefers-color-scheme: dark) {
      :root {
        --ios-bg: #000000;
        --ios-card: rgba(28, 28, 30, 0.9);
        --ios-card-solid: #1c1c1e;
        --ios-label: #f5f5f7;
        --ios-secondary: #aeaeb2;
        --ios-tertiary: #8e8e93;
        --ios-blue: #0a84ff;
        --ios-blue-soft: rgba(10, 132, 255, 0.16);
        --ios-separator: rgba(84, 84, 88, 0.65);
        --ios-warning: #ffd60a;
        --ios-warning-bg: rgba(255, 214, 10, 0.12);
        --ios-shadow: none;
      }
      .topbar { background: rgba(0, 0, 0, 0.72); }
      .overview-card, .day-card, .stay-card, details.data-disclosure { border-color: rgba(255, 255, 255, 0.07); }
    }
    @media print {
      @page { size: A4; margin: 13mm; }
      body { background: white; font-size: 10pt; }
      .topbar, .plan-overview { display: none; }
      main { width: 100%; margin: 0; padding: 0; }
      h1 { font-size: 23pt; }
      h2 { break-after: avoid; }
      h3 { break-after: avoid; }
      blockquote, tr, .day-card, .stay-card { break-inside: avoid; }
      details.data-disclosure > * { display: block !important; }
      .table-wrap { overflow: visible; }
      table { min-width: 0; font-size: 8pt; }
      th { color: #444 !important; }
      a { color: inherit; text-decoration: none; }
    }
  </style>
</head>
<body>
  <nav class="topbar" aria-label="行程导航">
    <div class="topbar-inner">
      <span class="brand">New Zealand · 2026</span>
      <div class="nav-links">
        <a href="#north-island">北岛</a>
        <a href="#south-island">南岛</a>
        <a href="#通用必办事项">出发清单</a>
      </div>
    </div>
  </nav>
  <main>${body}</main>
  <script>
    const titles = document.querySelectorAll("main > h1");
    if (titles[0]) titles[0].classList.add("doc-title");
    if (titles[1]) { titles[1].classList.add("plan-title"); titles[1].id = "north-island"; }
    if (titles[2]) { titles[2].classList.add("plan-title"); titles[2].id = "south-island"; }
    Array.from(titles).slice(3).forEach((title) => title.classList.add("utility-title"));
    Array.from(titles).forEach((title) => {
      if (title.textContent.includes("通用：必办事项")) title.id = "通用必办事项";
    });

    const firstQuote = document.querySelector("main > blockquote");
    if (firstQuote) {
      firstQuote.classList.add("hero-meta");
      const overview = document.createElement("section");
      overview.className = "plan-overview";
      overview.setAttribute("aria-label", "两套方案概览");
      overview.innerHTML = '<a class="overview-card" href="#north-island">' +
        '<small>方案一</small><h3>北岛 · 轻松人文</h3>' +
        '<p>魔戒、地热与温泉。路线更从容，冬季公路压力相对较低。</p></a>' +
        '<a class="overview-card" href="#south-island">' +
        '<small>方案二</small><h3>南岛 · 高山湖海</h3>' +
        '<p>雪山、冰川湖与峡湾。景观更强，但需要为9月天气留出余量。</p></a>';
      firstQuote.after(overview);
    }

    function nearestHeading(table) {
      let node = table.previousElementSibling;
      while (node) {
        if (/^H[1-3]$/.test(node.tagName)) return node.textContent.trim();
        node = node.previousElementSibling;
      }
      return "详细数据";
    }

    function cellHTML(cell) { return cell ? cell.innerHTML.trim() : ""; }

    document.querySelectorAll("table").forEach((table) => {
      const headers = Array.from(table.querySelectorAll("thead th")).map((th) => th.textContent.trim());
      const rows = Array.from(table.querySelectorAll("tbody tr"));

      if (headers[0] === "天") {
        const list = document.createElement("div");
        list.className = "day-list";
        rows.forEach((row) => {
          const cells = row.querySelectorAll("td");
          const card = document.createElement("article");
          card.className = "day-card";
          card.innerHTML = '<div class="day-label">' + cellHTML(cells[0]) + '</div><div><div class="day-route">' +
            cellHTML(cells[1]) + '</div><div class="day-note">' + cellHTML(cells[3]) +
            '</div></div><div class="day-time">' + cellHTML(cells[2]) + '</div>';
          list.appendChild(card);
        });
        table.replaceWith(list);
        return;
      }

      if (headers[0] === "晚") {
        const grid = document.createElement("div");
        grid.className = "stay-grid";
        rows.forEach((row) => {
          const cells = row.querySelectorAll("td");
          const card = document.createElement("article");
          card.className = "stay-card";
          card.innerHTML = '<div class="stay-day">' + cellHTML(cells[0]) + '</div><div class="stay-place">' +
            cellHTML(cells[1]) + '</div><div class="stay-price">' + cellHTML(cells[3]) +
            '</div><div>' + cellHTML(cells[2]) + '</div>';
          card.querySelectorAll("a").forEach((link) => link.textContent = "查看房源 ↗");
          grid.appendChild(card);
        });
        table.replaceWith(grid);
        return;
      }

      const wrapper = document.createElement("div");
      wrapper.className = "table-wrap";
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
      const disclosure = document.createElement("details");
      disclosure.className = "data-disclosure";
      const summary = document.createElement("summary");
      summary.textContent = nearestHeading(wrapper) + " · 查看详细表格";
      wrapper.parentNode.insertBefore(disclosure, wrapper);
      disclosure.append(summary, wrapper);
    });

    document.querySelectorAll('li > input[type="checkbox"]').forEach((checkbox) => {
      checkbox.parentElement.classList.add("task-list-item");
      checkbox.parentElement.parentElement.classList.add("contains-task-list");
    });
    document.querySelectorAll('a[href^="http"]').forEach((link) => {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      if (link.textContent.trim().startsWith("http")) link.textContent = "打开官方链接 ↗";
    });
  </script>
</body>
</html>`;

fs.writeFileSync(outputPath, html, "utf8");
console.log(outputPath.pathname);
