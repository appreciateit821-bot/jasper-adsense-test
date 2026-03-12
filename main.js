
// Data Imports
import { people } from './data/people.js';
import { quotes } from './data/quotes.js';

// ===== SEARCH FUNCTIONALITY =====
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();

        if (query.length < 1) {
            searchResults.style.display = 'none';
            return;
        }

        const matchedQuotes = quotes.filter(q => 
            q.text.toLowerCase().includes(query) || 
            q.author.toLowerCase().includes(query) ||
            q.category.toLowerCase().includes(query) ||
            (q.commentary && q.commentary.toLowerCase().includes(query))
        ).slice(0, 10); // Show top 10 results

        const matchedPeople = Object.values(getUniquePeople()).filter(p => 
            p.name.toLowerCase().includes(query) ||
            p.desc.toLowerCase().includes(query)
        ).slice(0, 5); // Show top 5 people results

        renderSearchResults(matchedQuotes, matchedPeople, query);
    });

    // Hide results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchResults.contains(e.target) && e.target !== searchInput) {
            searchResults.style.display = 'none';
        }
    });
}

function renderSearchResults(quoteResults, peopleResults, query) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (quoteResults.length === 0 && peopleResults.length === 0) {
        searchResults.innerHTML = `<div class="search-result-item no-result">'${query}'에 대한 결과가 없습니다.</div>`;
        searchResults.style.display = 'block';
        return;
    }

    if (peopleResults.length > 0) {
        searchResults.innerHTML += `<div class="search-result-header">인물</div>`;
        peopleResults.forEach(p => {
            const item = document.createElement('div');
            item.className = 'search-result-item person-result';
            item.innerHTML = `
                <div class="author-avatar">${getInitials(p.name)}</div>
                <div class="author-info">
                    <div class="author-name">${highlight(p.name, query)}</div>
                    <div class="author-desc">${highlight(p.desc, query)}</div>
                </div>
            `;
            item.addEventListener('click', () => {
                showPersonQuotes(p);
                document.getElementById('searchInput').value = '';
                searchResults.style.display = 'none';
            });
            searchResults.appendChild(item);
        });
    }

    if (quoteResults.length > 0) {
        searchResults.innerHTML += `<div class="search-result-header">명언</div>`;
        quoteResults.forEach(q => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `
                <p class="quote-text">${highlight(q.text, query)}</p>
                <footer class="quote-author">— ${highlight(q.author, query)}</footer>
            `;
            item.addEventListener('click', () => {
                showSingleQuote(q);
                document.getElementById('searchInput').value = '';
                searchResults.style.display = 'none';
            });
            searchResults.appendChild(item);
        });
    }

    searchResults.style.display = 'block';
}

function highlight(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// ===== SINGLE QUOTE VIEW =====
function showSingleQuote(q) {
    // This function can be expanded to show a quote in a modal or a dedicated view
    // For now, let's just scroll to it if it's on the page
    const allCards = document.querySelectorAll('quote-card');
    let targetCard = null;
    allCards.forEach(card => {
        if (card.quoteData && getQuoteId(card.quoteData) === getQuoteId(q)) {
            targetCard = card;
        }
    });

    if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.add('highlight-card');
        setTimeout(() => targetCard.classList.remove('highlight-card'), 2000);
    } else {
        // If not on the page, perhaps show it in the hero
        const p = people[q.author] || {};
        document.getElementById('dailyQuoteText').textContent = q.text;
        document.getElementById('dailyQuoteAuthor').textContent = `${q.author} (${p.nameEn || ''}) — ${p.desc || ''}`;
        document.getElementById('daily').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


// ===== HERO BACKGROUNDS =====
const HERO_IMAGES = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80',  // mountains
    'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&q=80',  // stars
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80',  // portrait
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80',  // forest path
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80',  // night mountain
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80',  // laptop
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&q=80',  // paris
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80',  // ocean
    'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=80',  // kyoto
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80',  // forest
];
let _lastHeroIdx = -1;

async function getHeroImage() {
    let idx;
    do { idx = Math.floor(Math.random() * HERO_IMAGES.length); } while (idx === _lastHeroIdx && HERO_IMAGES.length > 1);
    _lastHeroIdx = idx;
    return HERO_IMAGES[idx];
}

// ===== IMAGE CARD GENERATOR FONTS & OPTIONS =====
const CARD_FONTS = [
    { id: 'serif', label: '세리프체', family: '"Noto Serif KR", Georgia, serif', style: 'italic' },
    { id: 'sans',  label: '노토산스',   family: '"Noto Sans KR", sans-serif', style: 'normal' },
    { id: 'batang', label: '고운바탕', family: '"Gowun Batang", serif', style: 'normal' },
    { id: 'black', label: '블랙한산스', family: '"Black Han Sans", sans-serif', style: 'normal' },
];

const CARD_BACKGROUNDS = [
    { id: 'paris',       label: '파리',       url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' },
    { id: 'newyork',     label: '뉴욕',       url: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee' },
    { id: 'nature',      label: '자연',       url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e' },
    { id: 'stars',       label: '별밤',       url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a' },
    { id: 'minimal',     label: '미니멀',     url: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85' },
    { id: 'ocean',       label: '바다',       url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
    { id: 'kyoto',       label: '교토',       url: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186' },
    { id: 'desert',      label: '사막',       url: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35' }
];

const CARD_COLORS = [
    { id: 'white',  label: '화이트', value: '#FFFFFF' },
    { id: 'cream',  label: '크림',   value: '#FFF6E0' },
    { id: 'gold',   label: '골드',   value: '#F5C842' },
    { id: 'black',  label: '블랙',   value: '#1C1C1C' },
    { id: 'navy',   label: '네이비', value: '#1E3A5F' }
];

const CARD_OVERLAYS = [
    { id: 'none',   label: '없음',     alpha: 0.0  },
    { id: 'soft',   label: '부드럽게', alpha: 0.35 },
    { id: 'medium', label: '보통',     alpha: 0.52 },
    { id: 'dark',   label: '진하게',   alpha: 0.70 },
];

const _bgCache = new Map();
let _cardModal = null;
let _cardQuote = null;
let _cardState = { bgId: 'paris', fontId: 'serif', colorId: 'white', overlayId: 'medium' };

// ===== CORE LOGIC =====

const categories = [...new Set(quotes.map(q => q.category))];

function getUniquePeople() {
    const map = new Map();
    quotes.forEach(q => {
        if (!map.has(q.author)) {
            const p = people[q.author] || {};
            map.set(q.author, { name: q.author, nameEn: p.nameEn || '', desc: p.desc || '', wiki: p.wiki || '', bio: p.bio || '', count: 1 });
        } else {
            map.get(q.author).count++;
        }
    });
    return [...map.values()].sort((a, b) => b.count - a.count);
}

const imageCache = {};
async function getWikiImage(wikiTitle) {
    if (!wikiTitle) return null;
    if (imageCache[wikiTitle]) return imageCache[wikiTitle];
    try {
        const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle)}`);
        if (!res.ok) return null;
        const data = await res.json();
        const url = data.thumbnail?.source || null;
        if (url) imageCache[wikiTitle] = url;
        return url;
    } catch { return null; }
}

function getLikes() {
    try { return JSON.parse(localStorage.getItem('quoteLikes') || '{}'); } catch { return {}; }
}
function saveLikes(likes) {
    localStorage.setItem('quoteLikes', JSON.stringify(likes));
}
function getQuoteId(q) {
    return btoa(unescape(encodeURIComponent(q.text.slice(0, 30) + q.author))).replace(/[^a-zA-Z0-9]/g, '');
}
function toggleLike(quoteId) {
    const likes = getLikes();
    if (likes[quoteId]) { delete likes[quoteId]; } else { likes[quoteId] = true; }
    saveLikes(likes);
    document.dispatchEvent(new CustomEvent('likesUpdated'));
    return !!likes[quoteId];
}
function isLiked(quoteId) { return !!getLikes()[quoteId]; }
function getLikeCount() { return Object.keys(getLikes()).length; }

function getInitials(name) { return name.charAt(0); }
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ===== HERO SECTION =====
async function showDailyQuote() {
    const idx = Math.floor(Math.random() * quotes.length);
    const q = quotes[idx];
    const p = people[q.author] || {};
    
    const textEl = document.getElementById('dailyQuoteText');
    const authorEl = document.getElementById('dailyQuoteAuthor');
    const bgEl = document.getElementById('dailyBg');

    textEl.style.opacity = '0';
    authorEl.style.opacity = '0';

    setTimeout(() => {
        textEl.textContent = q.text;
        authorEl.textContent = `${q.author} (${p.nameEn || ''}) — ${p.desc || ''}`;
        textEl.style.opacity = '1';
        authorEl.style.opacity = '1';
    }, 400);

    if (bgEl) {
        bgEl.style.opacity = '0';
        const imgUrl = await getHeroImage();
        const img = new Image();
        img.onload = () => {
            bgEl.style.backgroundImage = `url(${imgUrl})`;
            bgEl.style.opacity = '0.7'; // Updated opacity
        };
        img.src = imgUrl;
    }
}

// ===== QUOTE CARD COMPONENT =====
class QuoteCard extends HTMLElement {
    connectedCallback() {
        if (this.quoteData) this.render();
    }
    set quoteData(q) {
        this._quoteData = q;
        this.render();
    }
    get quoteData() {
        return this._quoteData;
    }
    render() {
        const q = this.quoteData;
        if (!q) return;
        const p = people[q.author] || {};
        const qId = getQuoteId(q);
        const liked = isLiked(qId);
        this.className = 'quote-card';
        this.innerHTML = `
            <span class="quote-category">${q.category}</span>
            <div class="quote-icon">\u201C</div>
            <p class="quote-text">${q.text}</p>
            ${q.commentary ? `<div class="quote-commentary">${q.commentary}</div>` : ''}
            <div class="quote-actions">
                <button class="like-btn ${liked ? 'liked' : ''}" data-qid="${qId}">
                    <span class="like-icon">${liked ? '\u2764\uFE0F' : '\u2661'}</span>
                    <span class="like-label">좋아요</span>
                </button>
                <div class="share-buttons">
                    <button class="share-btn share-btn-kakao" title="카카오톡 공유">💬</button>
                    <button class="share-btn share-btn-instagram" title="이미지 카드 만들기">📸</button>
                    <button class="share-btn share-btn-copy" title="명언 텍스트 복사">🔗</button>
                </div>
            </div>
            <div class="quote-footer">
                <div class="author-avatar" data-author="${q.author}">${getInitials(q.author)}</div>
                <div class="author-info" data-author="${q.author}">
                    <div class="author-name">${q.author}</div>
                    <div class="author-desc">${p.desc || ''}</div>
                </div>
            </div>
        `;
        this.querySelector('.like-btn').addEventListener('click', (e) => {
            const isNowLiked = toggleLike(qId);
            e.currentTarget.classList.toggle('liked', isNowLiked);
            e.currentTarget.querySelector('.like-icon').textContent = isNowLiked ? '\u2764\uFE0F' : '\u2661';
        });
        this.querySelector('.share-btn-kakao').addEventListener('click', () => shareToKakao(q));
        this.querySelector('.share-btn-instagram').addEventListener('click', () => showImageCardModal(q));
        this.querySelector('.share-btn-copy').addEventListener('click', (e) => copyQuoteText(q, e.currentTarget));
        this.querySelectorAll('[data-author]').forEach(el => {
            el.addEventListener('click', () => {
                const personData = getUniquePeople().find(pp => pp.name === q.author);
                if (personData) showPersonQuotes(personData);
            });
        });
        if (p.wiki) {
            getWikiImage(p.wiki).then(url => {
                if (url) {
                    const av = this.querySelector('.author-avatar');
                    av.innerHTML = `<img src="${url}" alt="${q.author}">`;
                }
            });
        }
    }
}
customElements.define('quote-card', QuoteCard);

// ===== RENDER LOGIC =====

function renderCategoryTabs() {
    const container = document.getElementById('categoryTabs');
    if (!container) return;
    container.innerHTML = '';
    const allCats = ['전체', ...categories, '좋아요'];
    allCats.forEach((cat, i) => {
        const btn = document.createElement('button');
        btn.className = 'category-tab' + (i === 0 ? ' active' : '');
        btn.textContent = cat;
        if (cat === '좋아요') {
            btn.innerHTML += ` <span id="likedCountBadge"></span>`;
        }
        btn.addEventListener('click', () => {
            container.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            if (cat === '전체') {
                showAllQuotesView();
            } else if (cat === '좋아요') {
                showLikedQuotesView();
            } else {
                showCategoryQuotesView(cat);
            }
        });
        container.appendChild(btn);
    });
    updateLikedCountBadge();
}

function updateLikedCountBadge() {
    const badge = document.getElementById('likedCountBadge');
    if (!badge) return;
    const count = getLikeCount();
    if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }
}

function showAllQuotesView() {
    document.getElementById('categoryQuotes').style.display = 'none';
    document.getElementById('allQuotes').style.display = 'block';
    renderAllQuotes();
}

function showLikedQuotesView() {
    document.getElementById('allQuotes').style.display = 'none';
    const container = document.getElementById('categoryQuotes');
    container.style.display = 'grid';
    container.innerHTML = '';
    const liked = getLikes();
    const likedQuotes = quotes.filter(q => liked[getQuoteId(q)]);
    
    if (likedQuotes.length === 0) {
        container.innerHTML = `<div class="no-results-message">아직 좋아요를 누른 명언이 없습니다. 마음에 드는 명언에 하트를 눌러보세요.</div>`;
        return;
    }
    
    likedQuotes.forEach(q => {
        const card = document.createElement('quote-card');
        card.quoteData = q;
        container.appendChild(card);
    });
}

function showCategoryQuotesView(cat) {
    document.getElementById('allQuotes').style.display = 'none';
    const container = document.getElementById('categoryQuotes');
    container.style.display = 'grid';
    container.innerHTML = '';
    const categoryQuotes = quotes.filter(q => q.category === cat);
    categoryQuotes.forEach(q => {
        const card = document.createElement('quote-card');
        card.quoteData = q;
        container.appendChild(card);
    });
}

function renderPeopleGrid() {
    const container = document.getElementById('peopleGrid');
    if (!container) return;
    container.innerHTML = '';
    getUniquePeople().forEach(p => {
        const card = document.createElement('div');
        card.className = 'person-card';
        card.innerHTML = `
            <div class="person-avatar">${getInitials(p.name)}</div>
            <div class="person-info">
                <div class="person-name">${p.name}</div>
                <div class="person-title">${p.desc}</div>
                <div class="person-count">${p.count}개</div>
            </div>
        `;
        card.addEventListener('click', () => showPersonQuotes(p));
        if (p.wiki) {
            getWikiImage(p.wiki).then(url => {
                if (url) {
                    const av = card.querySelector('.person-avatar');
                    av.innerHTML = `<img src="${url}" alt="${p.name}">`;
                }
            });
        }
        container.appendChild(card);
    });
}

function showPersonQuotes(person) {
    document.getElementById('mainContent').style.display = 'none';
    const section = document.getElementById('personQuotes');
    section.style.display = 'block';
    const header = document.getElementById('personHeader');
    header.innerHTML = `
        <div class="person-avatar-lg" id="personDetailAvatar">${getInitials(person.name)}</div>
        <h2>${person.name}</h2>
        <p class="person-subtitle">${person.nameEn} — ${person.desc}</p>
        <p class="person-bio">${person.bio}</p>
    `;
    if (person.wiki) {
        getWikiImage(person.wiki).then(url => {
            if (url) {
                const av = document.getElementById('personDetailAvatar');
                av.innerHTML = `<img src="${url}" alt="${person.name}">`;
            }
        });
    }
    const list = document.getElementById('personQuotesList');
    list.innerHTML = '';
    quotes.filter(q => q.author === person.name).forEach(q => {
        const card = document.createElement('quote-card');
        card.quoteData = q;
        list.appendChild(card);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let allQuotesPage = 0;
const QUOTES_PER_PAGE = 12;
let shuffledQuotes = [];

function renderAllQuotes(loadMore = false) {
    const container = document.getElementById('allQuotesGrid');
    if (!container) return;

    if (!loadMore) {
        shuffledQuotes = shuffleArray(quotes);
        allQuotesPage = 0;
        container.innerHTML = '';
    }
    
    const start = allQuotesPage * QUOTES_PER_PAGE;
    const end = start + QUOTES_PER_PAGE;
    const slice = shuffledQuotes.slice(start, end);
    
    slice.forEach(q => {
        const card = document.createElement('quote-card');
        card.quoteData = q;
        container.appendChild(card);
    });
    
    allQuotesPage++;
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.style.display = end >= shuffledQuotes.length ? 'none' : 'block';
    }
}

function shareToKakao(q) {
    if (typeof Kakao === 'undefined' || !Kakao.isInitialized()) {
        alert('카카오톡 SDK가 초기화되지 않았습니다. 앱 키를 확인하세요.');
        return;
    }
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: `[재스퍼의 명언] ${q.author}`,
            description: q.text,
            imageUrl: 'https://jasper-adsense-test.pages.dev/og-image.png',
            link: { mobileWebUrl: window.location.href, webUrl: window.location.href },
        },
        buttons: [{ title: '더 많은 명언 보기', link: { mobileWebUrl: window.location.href, webUrl: window.location.href } }],
    });
}

function copyQuoteText(q, btn) {
    const text = `"${q.text}"\n— ${q.author}\n\n출처: 재스퍼의 명언 모음집`;
    navigator.clipboard.writeText(text).then(() => {
        const prev = btn.textContent;
        btn.textContent = '✓';
        setTimeout(() => { btn.textContent = '🔗'; }, 1600);
    });
}

// ===== IMAGE CARD GENERATOR (Pinterest Edition) =====

function showImageCardModal(q) {
    _cardQuote = q;
    if (!_cardModal) {
        _cardModal = document.createElement('div');
        _cardModal.className = 'card-gen-modal';
        _cardModal.innerHTML = _buildCardModalHTML();
        document.body.appendChild(_cardModal);
        _initCardModalEvents();
    }
    _cardModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    _renderCard();
}

function _buildCardModalHTML() {
    const bgThumbs = CARD_BACKGROUNDS.map(bg => `
        <button class="cg-bg-thumb ${bg.id === _cardState.bgId ? 'active' : ''}" data-bg="${bg.id}" title="${bg.label}">
            <img src="${bg.url}?w=100&h=125&fit=crop&q=60" loading="lazy" alt="${bg.label}">
            <span>${bg.label}</span>
        </button>`).join('');

    const fontBtns = CARD_FONTS.map(f => `
        <button class="cg-opt-btn ${f.id === _cardState.fontId ? 'active' : ''}" data-font="${f.id}" style="font-family:${f.family};">${f.label}</button>`).join('');

    const colorSwatches = CARD_COLORS.map(c => `
        <button class="cg-swatch ${c.id === _cardState.colorId ? 'active' : ''}" data-color="${c.id}" style="background:${c.value}" title="${c.label}"></button>`).join('');

    const overlayBtns = CARD_OVERLAYS.map(o => `
        <button class="cg-opt-btn ${o.id === _cardState.overlayId ? 'active' : ''}" data-overlay="${o.id}">${o.label}</button>`).join('');

    return `
    <div class="card-gen-inner">
        <div class="card-gen-header">
            <span class="card-gen-title">명언 카드 만들기</span>
            <button class="card-gen-close">✕</button>
        </div>
        <div class="card-gen-body">
            <div class="card-gen-preview">
                <div class="card-gen-canvas-wrap">
                    <canvas class="quote-canvas" width="1080" height="1350"></canvas>
                </div>
            </div>
            <div class="card-gen-controls">
                <div class="cg-option-group">
                    <p class="cg-option-label">배경 선택</p>
                    <div class="cg-bg-scroll">${bgThumbs}</div>
                </div>
                <div class="cg-option-group">
                    <p class="cg-option-label">폰트</p>
                    <div class="cg-opt-row">${fontBtns}</div>
                </div>
                <div class="cg-option-group">
                    <p class="cg-option-label">글씨 색</p>
                    <div class="cg-swatch-row">${colorSwatches}</div>
                </div>
                <div class="cg-option-group">
                    <p class="cg-option-label">어둡기</p>
                    <div class="cg-opt-row">${overlayBtns}</div>
                </div>
                <div class="cg-actions">
                    <button class="cg-save-btn">이미지 저장</button>
                </div>
            </div>
        </div>
    </div>`;
}

function _initCardModalEvents() {
    _cardModal.querySelectorAll('.cg-bg-thumb').forEach(btn => btn.addEventListener('click', () => {
        _cardModal.querySelector('.cg-bg-thumb.active').classList.remove('active');
        btn.classList.add('active'); _cardState.bgId = btn.dataset.bg; _renderCard();
    }));
    _cardModal.querySelectorAll('[data-font]').forEach(btn => btn.addEventListener('click', () => {
        _cardModal.querySelector('[data-font].active').classList.remove('active');
        btn.classList.add('active'); _cardState.fontId = btn.dataset.font; _renderCard();
    }));
    _cardModal.querySelectorAll('[data-color]').forEach(btn => btn.addEventListener('click', () => {
        _cardModal.querySelector('[data-color].active').classList.remove('active');
        btn.classList.add('active'); _cardState.colorId = btn.dataset.color; _renderCard();
    }));
    _cardModal.querySelectorAll('[data-overlay]').forEach(btn => btn.addEventListener('click', () => {
        _cardModal.querySelector('[data-overlay].active').classList.remove('active');
        btn.classList.add('active'); _cardState.overlayId = btn.dataset.overlay; _renderCard();
    }));
    _cardModal.querySelector('.cg-save-btn').addEventListener('click', () => {
        const canvas = _cardModal.querySelector('.quote-canvas');
        const a = document.createElement('a');
        a.download = `jasper-quote-card-${_cardQuote.author.replace(/ /g, '_')}.png`;
        a.href = canvas.toDataURL('image/png'); a.click();
    });
    _cardModal.querySelector('.card-gen-close').addEventListener('click', () => { _cardModal.style.display = 'none'; document.body.style.overflow = ''; });
}

async function _renderCard() {
    const canvas = _cardModal.querySelector('.quote-canvas');
    const ctx = canvas.getContext('2d');
    const W = 1080, H = 1350;
    const q = _cardQuote;
    const bg = CARD_BACKGROUNDS.find(b => b.id === _cardState.bgId);
    const font = CARD_FONTS.find(f => f.id === _cardState.fontId);
    const col = CARD_COLORS.find(c => c.id === _cardState.colorId);
    const ov = CARD_OVERLAYS.find(o => o.id === _cardState.overlayId);

    // Background
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,W,H);
    const bgImg = await _loadBg(bg);
    if (bgImg) {
        // Cover effect
        const hRatio = W / bgImg.width;
        const vRatio = H / bgImg.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (W - bgImg.width * ratio) / 2;
        const centerShift_y = (H - bgImg.height * ratio) / 2;
        ctx.drawImage(bgImg, 0, 0, bgImg.width, bgImg.height, centerShift_x, centerShift_y, bgImg.width * ratio, bgImg.height * ratio);
    }
    if (ov.alpha > 0) { ctx.fillStyle = `rgba(0,0,0,${ov.alpha})`; ctx.fillRect(0, 0, W, H); }

    ctx.fillStyle = col.value;
    ctx.textAlign = 'center';
    
    // Quote Text
    const fontSize = q.text.length > 80 ? 64 : 72;
    ctx.font = `${font.style === 'italic' ? 'italic ' : ''} ${fontSize}px ${font.family}`;
    const lines = _wrapText(ctx, q.text, W - 240);
    const lineH = fontSize * 1.5;
    const totalTextHeight = (lines.length -1) * lineH;
    lines.forEach((line, i) => ctx.fillText(line, W/2, H/2 - totalTextHeight/2 + i*lineH - 80));

    // Author
    ctx.font = `700 48px "Noto Sans KR"`;
    ctx.globalAlpha = 0.8;
    ctx.fillText(`— ${q.author}`, W/2, H/2 + totalTextHeight/2 + 100);
    ctx.globalAlpha = 1;

    // Footer
    ctx.font = `400 32px "Noto Sans KR"`;
    ctx.globalAlpha = 0.5;
    ctx.fillText("재스퍼의 명언 모음집", W/2, H - 90);
    ctx.globalAlpha = 1;
}

function _loadBg(bg) {
    return new Promise(resolve => {
        if (_bgCache.has(bg.id)) return resolve(_bgCache.get(bg.id));
        const img = new Image(); img.crossOrigin = 'anonymous';
        img.onload = () => { _bgCache.set(bg.id, img); resolve(img); };
        img.onerror = () => resolve(null);
        img.src = `${bg.url}?w=1080&h=1350&fit=crop&q=85`;
    });
}

function _wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const width = ctx.measureText(currentLine + " " + word).width;
        if (width < maxWidth) {
            currentLine += " " + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    lines.push(currentLine);
    return lines;
}


// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initial render
    showDailyQuote();
    renderCategoryTabs();
    renderPeopleGrid();
    showAllQuotesView(); // Default view
    setupSearch();

    // Event Listeners
    document.getElementById('newQuoteBtn').addEventListener('click', showDailyQuote);
    document.getElementById('loadMoreBtn').addEventListener('click', () => renderAllQuotes(true));
    document.getElementById('backToPeople').addEventListener('click', () => {
        document.getElementById('personQuotes').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    });
    document.querySelector('.logo').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('personQuotes').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Likes update event
    document.addEventListener('likesUpdated', () => {
        updateLikedCountBadge();
        // If the user is on the liked quotes view, refresh it
        const activeTab = document.querySelector('.category-tab.active');
        if (activeTab && activeTab.textContent.includes('좋아요')) {
            showLikedQuotesView();
        }
    });

    // Mobile menu
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
    }

    // Kakao SDK Init
    if (typeof Kakao !== 'undefined' && !Kakao.isInitialized()) {
        try { 
            Kakao.init('3a539348d51783f61927a442749007c6'); // Replace with your actual Kakao App Key
        } catch(e) {
            console.error("Kakao SDK 초기화 실패:", e);
        }
    }
});
