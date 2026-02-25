#!/usr/bin/env node
// Generate SEO static pages for all categories and top authors
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ── Load data from main.js ──────────────────────────────────────────────────
const mainJs = fs.readFileSync(path.join(__dirname, 'main.js'), 'utf-8');
const dataEnd = mainJs.indexOf('// ===== UNIQUE PEOPLE =====');
if (dataEnd === -1) { console.error('Could not find data section'); process.exit(1); }
const dataScript = mainJs.substring(0, dataEnd).replace(/\bconst\b/g, 'var').replace(/\blet\b/g, 'var');

const loadData = new Function(
    dataScript + '\nvar categories = [...new Set(quotes.map(function(q){return q.category;}))]; return { people: people, quotes: quotes, categories: categories };'
);
const { people, quotes, categories } = loadData();
console.log(`✅ Loaded: ${Object.keys(people).length} people, ${quotes.length} quotes, ${categories.length} categories`);

// ── Helpers ─────────────────────────────────────────────────────────────────
const BASE = 'https://jasper-adsense-test.pages.dev';
const TODAY = '2026-02-25';

function safeSlug(str) {
    return str.replace(/\s+/g, '-');
}

function catFileName(cat) { return `${cat}-명언.html`; }
function authorFileName(author) { return `${safeSlug(author)}-명언.html`; }

function escHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function adsenseBlock() {
    return `<div class="container ad-container">
    <ad-unit></ad-unit>
</div>`;
}

function headerHtml(activeCat) {
    const catLinks = categories.map(c =>
        `<li><a href="${catFileName(c)}"${c === activeCat ? ' aria-current="page"' : ''}>${escHtml(c)} 명언</a></li>`
    ).join('\n');
    return `<header class="site-header">
<div class="container header-inner">
    <a href="index.html" class="logo">명언의 정원</a>
    <nav class="main-nav" aria-label="주요 네비게이션">
        <ul>
            <li><a href="index.html">홈</a></li>
            <li><a href="index.html#categories">카테고리</a></li>
            <li><a href="index.html#people">인물별</a></li>
            <li><a href="about.html">소개</a></li>
        </ul>
    </nav>
</div>
</header>`;
}

function footerHtml() {
    const catLinks = categories.map(c =>
        `<li><a href="${catFileName(c)}">${escHtml(c)} 명언</a></li>`
    ).join('\n');
    return `<footer class="site-footer">
<div class="container">
    <div class="footer-inner">
        <div class="footer-brand">
            <p class="footer-logo">명언의 정원</p>
            <p class="footer-desc">전세계 위인들의 지혜와 영감을 한곳에 모았습니다.</p>
        </div>
        <div class="footer-links">
            <h4>카테고리</h4>
            <ul>${catLinks}</ul>
        </div>
        <div class="footer-links">
            <h4>바로가기</h4>
            <ul>
                <li><a href="index.html">홈</a></li>
                <li><a href="about.html">소개</a></li>
                <li><a href="privacy.html">개인정보처리방침</a></li>
                <li><a href="terms.html">이용약관</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2026 명언의 정원. All rights reserved.</p>
    </div>
</div>
</footer>`;
}

function pageHead({ title, desc, url, keywords }) {
    return `<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escHtml(title)}</title>
<meta name="description" content="${escHtml(desc)}">
<meta name="keywords" content="${escHtml(keywords)}">
<meta name="google-adsense-account" content="ca-pub-5029784324732715">
<link rel="canonical" href="${BASE}/${url}">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<meta property="og:type" content="website">
<meta property="og:title" content="${escHtml(title)}">
<meta property="og:description" content="${escHtml(desc)}">
<meta property="og:url" content="${BASE}/${url}">
<meta property="og:site_name" content="명언의 정원">
<meta property="og:locale" content="ko_KR">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${escHtml(title)}">
<meta name="twitter:description" content="${escHtml(desc)}">
<link rel="stylesheet" href="style.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Serif+KR:wght@400;700&display=swap" rel="stylesheet">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5029784324732715" crossorigin="anonymous"></script>
</head>`;
}

function quoteItemHtml(q, showAuthorLink = true) {
    const p = people[q.author] || {};
    const authorFile = authorFileName(q.author);
    const authorLink = showAuthorLink
        ? `<a href="${authorFile}" class="author-link">${escHtml(q.author)}</a>`
        : `<span>${escHtml(q.author)}</span>`;
    return `<article class="static-quote-item" itemscope itemtype="https://schema.org/Quotation">
    <meta itemprop="author" content="${escHtml(q.author)}">
    <blockquote itemprop="text" class="static-quote-text">${escHtml(q.text)}</blockquote>
    <div class="static-quote-footer">
        <div class="static-quote-author">
            — ${authorLink}${p.desc ? ` <span class="author-desc-small">(${escHtml(p.desc)})</span>` : ''}
        </div>
        <span class="static-quote-category">${escHtml(q.category)}</span>
    </div>
    ${q.commentary ? `<div class="static-quote-commentary">${escHtml(q.commentary)}</div>` : ''}
</article>`;
}

// ── Category page schema ──────────────────────────────────────────────────
function categorySchema(cat, catQuotes) {
    const items = catQuotes.map((q, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
            "@type": "Quotation",
            "text": q.text,
            "spokenByCharacter": { "@type": "Person", "name": q.author }
        }
    }));
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `${cat} 명언 모음`,
        "numberOfItems": catQuotes.length,
        "itemListElement": items,
        "url": `${BASE}/${catFileName(cat)}`
    });
}

// ── Generate category pages ──────────────────────────────────────────────
const generatedUrls = [];

categories.forEach(cat => {
    const catQuotes = quotes.filter(q => q.category === cat);
    const topAuthors = [...new Set(catQuotes.map(q => q.author))].slice(0, 5).join(', ');
    const fname = catFileName(cat);
    const url = fname;
    const title = `${cat} 명언 모음 ${catQuotes.length}선 — 감동적인 ${cat}의 지혜 | 명언의 정원`;
    const desc = `${cat}에 관한 명언 ${catQuotes.length}개를 해설과 함께 만나보세요. ${topAuthors} 등 위인들의 ${cat} 명언 모음.`;
    const keywords = `${cat} 명언, ${cat} 좋은 글귀, ${cat} 짧은 명언, ${topAuthors}, 명언 모음, 좋은 글귀`;

    // Related categories
    const relatedCats = categories.filter(c => c !== cat).slice(0, 6);
    const relatedLinks = relatedCats.map(c =>
        `<a href="${catFileName(c)}" class="related-tag">${escHtml(c)} 명언</a>`
    ).join('\n');

    // Breadcrumb schema
    const breadcrumbSchema = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": `${BASE}/` },
            { "@type": "ListItem", "position": 2, "name": `${cat} 명언`, "item": `${BASE}/${fname}` }
        ]
    });

    const html = `<!DOCTYPE html>
<html lang="ko">
${pageHead({ title, desc, url, keywords })}
<body>
${headerHtml(cat)}
<main>
    <section class="static-hero">
        <div class="container">
            <nav class="breadcrumb" aria-label="경로">
                <a href="index.html">홈</a> › <span>${escHtml(cat)} 명언</span>
            </nav>
            <h1>${escHtml(cat)} 명언 모음 ${catQuotes.length}선</h1>
            <p class="static-hero-desc">감동적인 ${escHtml(cat)}에 관한 명언을 해설과 함께 만나보세요. ${escHtml(topAuthors)} 등 역사 속 위인들의 지혜를 모았습니다.</p>
        </div>
    </section>

    ${adsenseBlock()}

    <section class="static-quotes-section">
        <div class="container">
            <div class="static-quotes-list">
                ${catQuotes.map(q => quoteItemHtml(q)).join('\n')}
            </div>
        </div>
    </section>

    ${adsenseBlock()}

    <section class="static-related">
        <div class="container">
            <h2>다른 카테고리 명언 보기</h2>
            <div class="related-tags">
                ${relatedLinks}
            </div>
            <div style="text-align:center;margin-top:1.5rem;">
                <a href="index.html#categories" class="btn-main-site">🌿 명언의 정원 전체 명언 보기</a>
            </div>
        </div>
    </section>
</main>
${footerHtml()}
<script type="application/ld+json">${categorySchema(cat, catQuotes)}</script>
<script type="application/ld+json">${breadcrumbSchema}</script>
</body>
</html>`;

    fs.writeFileSync(path.join(__dirname, fname), html, 'utf-8');
    generatedUrls.push({ url: fname, priority: '0.85', changefreq: 'weekly' });
    console.log(`📄 Generated: ${fname} (${catQuotes.length} quotes)`);
});

// ── Generate author pages ────────────────────────────────────────────────
// Get authors with 3+ quotes
const authorMap = new Map();
quotes.forEach(q => {
    if (!authorMap.has(q.author)) authorMap.set(q.author, []);
    authorMap.get(q.author).push(q);
});

const topAuthors = [...authorMap.entries()]
    .filter(([, qs]) => qs.length >= 2)
    .sort((a, b) => b[1].length - a[1].length);

topAuthors.forEach(([author, authorQuotes]) => {
    const p = people[author] || {};
    const fname = authorFileName(author);
    const url = fname;
    const nameEn = p.nameEn || author;
    const desc = p.desc || '위인';
    const title = `${author} 명언 모음 ${authorQuotes.length}선 — ${escHtml(nameEn)} 어록 | 명언의 정원`;
    const metaDesc = p.bio
        ? `${author}(${nameEn})의 명언 ${authorQuotes.length}개. ${p.bio.slice(0, 80)}...`
        : `${author}의 대표 명언 ${authorQuotes.length}개를 해설과 함께 만나보세요.`;
    const keywords = `${author} 명언, ${author} 어록, ${nameEn} quotes, ${author} 좋은 글귀, 명언 모음`;

    const breadcrumbSchema = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "홈", "item": `${BASE}/` },
            { "@type": "ListItem", "position": 2, "name": `${author} 명언`, "item": `${BASE}/${fname}` }
        ]
    });

    const personSchema = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": author,
        "alternateName": nameEn,
        "description": p.desc || '',
        "sameAs": p.wiki ? `https://en.wikipedia.org/wiki/${p.wiki}` : undefined
    });

    // Author's categories
    const authorCats = [...new Set(authorQuotes.map(q => q.category))];
    const catTagLinks = authorCats.map(c =>
        `<a href="${catFileName(c)}" class="related-tag">${escHtml(c)} 명언</a>`
    ).join('\n');

    // Related authors (from same most common category)
    const mainCat = authorCats[0];
    const relatedAuthors = [...new Set(
        quotes.filter(q => q.category === mainCat && q.author !== author).map(q => q.author)
    )].slice(0, 5);
    const relatedAuthorLinks = relatedAuthors.map(a =>
        `<a href="${authorFileName(a)}" class="related-tag">▸ ${escHtml(a)} 명언</a>`
    ).join('\n');

    const html = `<!DOCTYPE html>
<html lang="ko">
${pageHead({ title, desc: metaDesc, url, keywords })}
<body>
${headerHtml()}
<main>
    <section class="static-hero">
        <div class="container">
            <nav class="breadcrumb" aria-label="경로">
                <a href="index.html">홈</a> › <span>${escHtml(author)} 명언</span>
            </nav>
            <h1>${escHtml(author)} 명언 모음</h1>
            <p class="static-hero-subdesc">${escHtml(nameEn)} · ${escHtml(desc)}</p>
            ${p.bio ? `<p class="static-author-bio">${escHtml(p.bio)}</p>` : ''}
        </div>
    </section>

    ${adsenseBlock()}

    <section class="static-quotes-section">
        <div class="container">
            <h2>${escHtml(author)}의 대표 명언 ${authorQuotes.length}개</h2>
            <div class="static-quotes-list">
                ${authorQuotes.map(q => quoteItemHtml(q, false)).join('\n')}
            </div>
        </div>
    </section>

    ${adsenseBlock()}

    <section class="static-related">
        <div class="container">
            <h2>카테고리별 명언 보기</h2>
            <div class="related-tags">${catTagLinks}</div>
            ${relatedAuthorLinks ? `<h2 style="margin-top:1.5rem">비슷한 인물의 명언</h2><div class="related-tags">${relatedAuthorLinks}</div>` : ''}
            <div style="text-align:center;margin-top:1.5rem;">
                <a href="index.html#people" class="btn-main-site">🌿 전체 인물 명언 보기</a>
            </div>
        </div>
    </section>
</main>
${footerHtml()}
<script type="application/ld+json">${personSchema}</script>
<script type="application/ld+json">${breadcrumbSchema}</script>
</body>
</html>`;

    fs.writeFileSync(path.join(__dirname, fname), html, 'utf-8');
    generatedUrls.push({ url: fname, priority: '0.75', changefreq: 'monthly' });
    console.log(`👤 Generated: ${fname} (${authorQuotes.length} quotes)`);
});

// ── Append extra CSS to style.css (if not already there) ─────────────────
const cssFile = path.join(__dirname, 'style.css');
const cssContent = fs.readFileSync(cssFile, 'utf-8');
if (!cssContent.includes('static-quote-item')) {
    const extraCss = `
/* ===== STATIC SEO PAGES ===== */
.static-hero {
    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
    color: white;
    padding: 3.5rem 0 2.5rem;
}
.static-hero h1 {
    font-size: clamp(1.6rem, 4vw, 2.5rem);
    font-family: var(--font-serif);
    margin-bottom: 0.8rem;
    line-height: 1.3;
}
.static-hero-desc, .static-hero-subdesc {
    font-size: 1rem;
    opacity: 0.9;
    max-width: 640px;
    line-height: 1.6;
}
.static-author-bio {
    font-size: 0.9rem;
    opacity: 0.85;
    max-width: 700px;
    margin-top: 0.8rem;
    line-height: 1.7;
}
.breadcrumb {
    font-size: 0.82rem;
    opacity: 0.75;
    margin-bottom: 0.8rem;
}
.breadcrumb a { color: white; text-decoration: none; }
.breadcrumb a:hover { text-decoration: underline; }

.static-quotes-section { padding: 3rem 0; }
.static-quotes-section h2 { font-size: 1.3rem; margin-bottom: 1.5rem; color: var(--text); }

.static-quotes-list { display: flex; flex-direction: column; gap: 1.5rem; }

.static-quote-item {
    background: var(--card-bg);
    border-radius: var(--radius-lg);
    padding: 2rem;
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.2s;
}
.static-quote-item:hover { box-shadow: var(--shadow); }

.static-quote-text {
    font-family: var(--font-serif);
    font-size: 1.15rem;
    line-height: 1.75;
    color: var(--text);
    border-left: 3px solid var(--primary);
    padding-left: 1.2rem;
    margin-bottom: 1rem;
    font-style: italic;
}

.static-quote-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
}
.static-quote-author {
    font-weight: 600;
    font-size: 0.9rem;
}
.static-quote-author a.author-link {
    color: var(--primary);
    text-decoration: none;
    font-weight: 700;
}
.static-quote-author a.author-link:hover { text-decoration: underline; }
.author-desc-small { font-weight: 400; color: var(--text-muted); font-size: 0.82rem; }

.static-quote-category {
    font-size: 0.72rem;
    background: var(--primary-light);
    color: var(--primary);
    padding: 0.2rem 0.6rem;
    border-radius: 50px;
    font-weight: 500;
}
.static-quote-commentary {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.65;
    border-top: 1px dashed var(--border);
    padding-top: 0.8rem;
    margin-top: 0.5rem;
}

.static-related { padding: 2.5rem 0; background: var(--card-bg); }
.static-related h2 { font-size: 1.1rem; margin-bottom: 1rem; color: var(--text); }

.related-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.related-tag {
    padding: 0.38rem 0.9rem;
    border-radius: 50px;
    border: 1px solid var(--border);
    background: var(--bg);
    color: var(--text-muted);
    font-size: 0.82rem;
    text-decoration: none;
    transition: all 0.18s;
    font-family: var(--font-sans);
}
.related-tag:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--primary-light);
}

.btn-main-site {
    display: inline-block;
    padding: 0.75rem 1.8rem;
    background: var(--primary);
    color: white;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: background 0.18s, transform 0.18s;
}
.btn-main-site:hover { background: var(--primary-dark); transform: translateY(-1px); }
`;
    fs.appendFileSync(cssFile, extraCss, 'utf-8');
    console.log('🎨 Appended static page styles to style.css');
}

// ── Update sitemap.xml ───────────────────────────────────────────────────
const baseUrls = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: 'about.html', priority: '0.8', changefreq: 'monthly' },
    { url: 'privacy.html', priority: '0.5', changefreq: 'yearly' },
    { url: 'terms.html', priority: '0.5', changefreq: 'yearly' },
];

const allUrls = [...baseUrls, ...generatedUrls];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(({ url, priority, changefreq }) => `  <url>
    <loc>${BASE}/${url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(`🗺  Updated sitemap.xml with ${allUrls.length} URLs`);
console.log(`\n✨ Done! Generated ${generatedUrls.length} SEO pages.`);
