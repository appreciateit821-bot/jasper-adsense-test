// ===== QUOTES DATA =====
const quotes = [
    // 인생/철학
    { text: "삶이 있는 한 희망은 있다.", author: "키케로", authorEn: "Cicero", desc: "고대 로마 철학자", category: "인생" },
    { text: "검사하지 않은 삶은 살 가치가 없다.", author: "소크라테스", authorEn: "Socrates", desc: "고대 그리스 철학자", category: "인생" },
    { text: "인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다.", author: "찰리 채플린", authorEn: "Charlie Chaplin", desc: "영국 배우/감독", category: "인생" },
    { text: "우리가 두려워해야 할 것은 두려움 그 자체뿐이다.", author: "프랭클린 D. 루스벨트", authorEn: "Franklin D. Roosevelt", desc: "미국 제32대 대통령", category: "인생" },
    { text: "삶은 자전거를 타는 것과 같다. 균형을 잡으려면 계속 움직여야 한다.", author: "알베르트 아인슈타인", authorEn: "Albert Einstein", desc: "물리학자", category: "인생" },
    { text: "산다는 것은 호흡하는 것이 아니라 행동하는 것이다.", author: "장 자크 루소", authorEn: "Jean-Jacques Rousseau", desc: "프랑스 철학자", category: "인생" },
    { text: "인생에서 가장 중요한 것은 자신의 길을 찾는 것이다.", author: "헤르만 헤세", authorEn: "Hermann Hesse", desc: "독일 작가", category: "인생" },
    { text: "삶이란 우리가 다른 계획을 세우느라 바쁠 때 일어나는 것이다.", author: "존 레논", authorEn: "John Lennon", desc: "영국 음악가", category: "인생" },
    { text: "살아 있다는 것 자체가 기적이다.", author: "틱낫한", authorEn: "Thich Nhat Hanh", desc: "베트남 승려/평화운동가", category: "인생" },
    { text: "인생은 짧고 예술은 길다.", author: "히포크라테스", authorEn: "Hippocrates", desc: "고대 그리스 의학의 아버지", category: "인생" },

    // 성공/동기부여
    { text: "천 리 길도 한 걸음부터 시작된다.", author: "노자", authorEn: "Lao Tzu", desc: "중국 고대 철학자", category: "성공" },
    { text: "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. 계속하는 용기가 중요하다.", author: "윈스턴 처칠", authorEn: "Winston Churchill", desc: "영국 전 총리", category: "성공" },
    { text: "나는 실패한 적이 없다. 나는 효과가 없는 만 가지 방법을 발견한 것이다.", author: "토마스 에디슨", authorEn: "Thomas Edison", desc: "미국 발명가", category: "성공" },
    { text: "위대한 일을 하는 유일한 방법은 하는 일을 사랑하는 것이다.", author: "스티브 잡스", authorEn: "Steve Jobs", desc: "애플 공동 창업자", category: "성공" },
    { text: "미래는 자신의 꿈의 아름다움을 믿는 사람들에게 속한다.", author: "엘리너 루스벨트", authorEn: "Eleanor Roosevelt", desc: "미국 전 대통령 부인/인권운동가", category: "성공" },
    { text: "나에게 여섯 시간을 주어 나무를 자르게 한다면, 나는 처음 네 시간을 도끼를 가는 데 쓰겠다.", author: "에이브러햄 링컨", authorEn: "Abraham Lincoln", desc: "미국 제16대 대통령", category: "성공" },
    { text: "할 수 있다고 믿든, 할 수 없다고 믿든, 당신이 옳다.", author: "헨리 포드", authorEn: "Henry Ford", desc: "포드자동차 창업자", category: "성공" },
    { text: "기회는 일어나는 것이 아니라 만드는 것이다.", author: "크리스 그로서", authorEn: "Chris Grosser", desc: "기업가/작가", category: "성공" },
    { text: "배움에는 왕도가 없다.", author: "유클리드", authorEn: "Euclid", desc: "고대 그리스 수학자", category: "성공" },
    { text: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.", author: "윈스턴 처칠", authorEn: "Winston Churchill", desc: "영국 전 총리", category: "성공" },

    // 사랑
    { text: "사랑받는 것은 좋은 일이지만, 사랑하는 것이야말로 진정한 행복이다.", author: "헤르만 헤세", authorEn: "Hermann Hesse", desc: "독일 작가", category: "사랑" },
    { text: "어둠으로 어둠을 몰아낼 수 없다. 오직 빛만이 그렇게 할 수 있다. 미움으로 미움을 몰아낼 수 없다. 오직 사랑만이 그렇게 할 수 있다.", author: "마틴 루터 킹 주니어", authorEn: "Martin Luther King Jr.", desc: "미국 인권운동가", category: "사랑" },
    { text: "사랑은 언제나 인내하고 친절합니다.", author: "사도 바울", authorEn: "Apostle Paul", desc: "기독교 사도", category: "사랑" },
    { text: "가장 좋은 것은 사랑하는 것이고, 그 다음으로 좋은 것은 사랑받는 것이다.", author: "빅토르 위고", authorEn: "Victor Hugo", desc: "프랑스 작가", category: "사랑" },
    { text: "사랑할 때 우리는 가장 살아있다.", author: "존 업다이크", authorEn: "John Updike", desc: "미국 소설가", category: "사랑" },
    { text: "세상에서 가장 아름다운 것은 보이거나 만져지는 것이 아니라 마음으로 느끼는 것이다.", author: "헬렌 켈러", authorEn: "Helen Keller", desc: "미국 작가/사회운동가", category: "사랑" },

    // 지혜
    { text: "아는 것이 힘이다.", author: "프랜시스 베이컨", authorEn: "Francis Bacon", desc: "영국 철학자", category: "지혜" },
    { text: "배우고 때때로 익히면 또한 즐겁지 아니한가.", author: "공자", authorEn: "Confucius", desc: "중국 고대 사상가", category: "지혜" },
    { text: "한 가지를 알면 열 가지를 안다.", author: "공자", authorEn: "Confucius", desc: "중국 고대 사상가", category: "지혜" },
    { text: "나 자신을 알라.", author: "소크라테스", authorEn: "Socrates", desc: "고대 그리스 철학자", category: "지혜" },
    { text: "교육은 가장 강력한 무기이며, 그것으로 세상을 바꿀 수 있다.", author: "넬슨 만델라", authorEn: "Nelson Mandela", desc: "남아공 전 대통령", category: "지혜" },
    { text: "진정한 지혜는 자신이 아무것도 모른다는 것을 아는 것이다.", author: "소크라테스", authorEn: "Socrates", desc: "고대 그리스 철학자", category: "지혜" },
    { text: "지혜로운 사람은 말을 적게 하고 많이 듣는다.", author: "피타고라스", authorEn: "Pythagoras", desc: "고대 그리스 수학자", category: "지혜" },
    { text: "독서란 자신의 머리로 다른 사람의 생각을 하는 것이다.", author: "아르투어 쇼펜하우어", authorEn: "Arthur Schopenhauer", desc: "독일 철학자", category: "지혜" },

    // 용기
    { text: "용기란 두려움이 없는 것이 아니라, 두려움보다 중요한 것이 있다는 판단이다.", author: "앰브로즈 레드문", authorEn: "Ambrose Redmoon", desc: "작가", category: "용기" },
    { text: "세상에서 가장 용감한 행동은 스스로 생각하고 그것을 큰 소리로 말하는 것이다.", author: "코코 샤넬", authorEn: "Coco Chanel", desc: "프랑스 패션 디자이너", category: "용기" },
    { text: "당신이 할 수 있는 일, 꿈꿀 수 있는 일이라면, 시작하라. 대담함 속에 천재성, 힘, 그리고 마법이 있다.", author: "요한 볼프강 폰 괴테", authorEn: "Johann Wolfgang von Goethe", desc: "독일 작가", category: "용기" },
    { text: "한 사람의 용기는 다수를 만든다.", author: "앤드루 잭슨", authorEn: "Andrew Jackson", desc: "미국 제7대 대통령", category: "용기" },
    { text: "칼을 들어야 칼을 쓸 수 있고, 붓을 들어야 붓을 쓸 수 있다. 먼저 시작해야 한다.", author: "이순신", authorEn: "Yi Sun-sin", desc: "조선 시대 장군", category: "용기" },
    { text: "위대한 영광은 한 번도 넘어지지 않는 데 있는 것이 아니라, 넘어질 때마다 일어서는 데 있다.", author: "공자", authorEn: "Confucius", desc: "중국 고대 사상가", category: "용기" },

    // 행복
    { text: "행복은 완성품이 아니다. 행복은 자신의 행동에서 나온다.", author: "달라이 라마", authorEn: "Dalai Lama", desc: "티베트 정신적 지도자", category: "행복" },
    { text: "행복의 비결은 자유이고 자유의 비결은 용기이다.", author: "투키디데스", authorEn: "Thucydides", desc: "고대 그리스 역사가", category: "행복" },
    { text: "가장 행복한 사람은 모든 것을 가진 사람이 아니라 가진 것에 감사하는 사람이다.", author: "찰스 디킨스", authorEn: "Charles Dickens", desc: "영국 소설가", category: "행복" },
    { text: "행복은 당신이 생각하는 것, 당신이 말하는 것, 당신이 하는 것이 조화를 이룰 때 온다.", author: "마하트마 간디", authorEn: "Mahatma Gandhi", desc: "인도 독립운동가", category: "행복" },
    { text: "남과 비교하지 말라. 비교는 행복의 도둑이다.", author: "시어도어 루스벨트", authorEn: "Theodore Roosevelt", desc: "미국 제26대 대통령", category: "행복" },
    { text: "행복은 습관이다. 그것을 몸에 지녀라.", author: "허버트 스펜서", authorEn: "Herbert Spencer", desc: "영국 철학자", category: "행복" },

    // 리더십
    { text: "리더는 길을 알고, 길을 가고, 길을 보여주는 사람이다.", author: "존 C. 맥스웰", authorEn: "John C. Maxwell", desc: "리더십 전문가/작가", category: "리더십" },
    { text: "백성을 두려워해야 하는 것은 군주이지, 군주를 두려워해야 하는 것은 백성이 아니다.", author: "세종대왕", authorEn: "King Sejong the Great", desc: "조선 제4대 왕", category: "리더십" },
    { text: "모범을 보이는 것은 다른 사람에게 영향을 미치는 주된 방법이 아니라 유일한 방법이다.", author: "알베르트 슈바이처", authorEn: "Albert Schweitzer", desc: "독일 신학자/의사", category: "리더십" },
    { text: "불가능이란 노력하지 않는 자의 변명이다.", author: "나폴레옹 보나파르트", authorEn: "Napoleon Bonaparte", desc: "프랑스 황제", category: "리더십" },
    { text: "위대한 지도자는 시대가 만드는 것이 아니라 스스로 시대를 만든다.", author: "마거릿 대처", authorEn: "Margaret Thatcher", desc: "영국 전 총리", category: "리더십" },

    // 창의성
    { text: "상상력은 지식보다 중요하다.", author: "알베르트 아인슈타인", authorEn: "Albert Einstein", desc: "물리학자", category: "창의성" },
    { text: "창의성은 즐기는 지성이다.", author: "알베르트 아인슈타인", authorEn: "Albert Einstein", desc: "물리학자", category: "창의성" },
    { text: "예술은 자연이 만들지 않는 것을 만든다.", author: "아리스토텔레스", authorEn: "Aristotle", desc: "고대 그리스 철학자", category: "창의성" },
    { text: "창의성은 연결하는 능력이다. 경험을 연결하여 새로운 것을 만들어내는 것이다.", author: "스티브 잡스", authorEn: "Steve Jobs", desc: "애플 공동 창업자", category: "창의성" },
    { text: "모든 아이는 예술가다. 문제는 어른이 되어서도 예술가로 남아 있는 것이다.", author: "파블로 피카소", authorEn: "Pablo Picasso", desc: "스페인 화가", category: "창의성" },
    { text: "규칙을 배워라. 그래야 규칙을 제대로 깰 수 있다.", author: "달라이 라마", authorEn: "Dalai Lama", desc: "티베트 정신적 지도자", category: "창의성" },

    // 변화
    { text: "세상에서 유일하게 변하지 않는 것은 모든 것이 변한다는 사실이다.", author: "헤라클레이토스", authorEn: "Heraclitus", desc: "고대 그리스 철학자", category: "변화" },
    { text: "세상을 바꾸고 싶다면 먼저 자신을 바꿔라.", author: "마하트마 간디", authorEn: "Mahatma Gandhi", desc: "인도 독립운동가", category: "변화" },
    { text: "변화를 두려워하지 마라. 변화하지 않는 것을 두려워하라.", author: "잭 웰치", authorEn: "Jack Welch", desc: "GE 전 CEO", category: "변화" },
    { text: "가장 강한 종이 살아남는 것이 아니라 변화에 가장 잘 적응하는 종이 살아남는다.", author: "찰스 다윈", authorEn: "Charles Darwin", desc: "영국 자연과학자", category: "변화" },
    { text: "어제와 같은 방법을 쓰면서 다른 결과를 기대하는 것은 미친 짓이다.", author: "알베르트 아인슈타인", authorEn: "Albert Einstein", desc: "물리학자", category: "변화" },

    // 꿈
    { text: "꿈을 크게 꿔라. 꿈이 작으면 가슴 뛸 일이 없다.", author: "도널드 트럼프", authorEn: "Donald Trump", desc: "미국 전 대통령/기업인", category: "꿈" },
    { text: "나에게는 꿈이 있습니다.", author: "마틴 루터 킹 주니어", authorEn: "Martin Luther King Jr.", desc: "미국 인권운동가", category: "꿈" },
    { text: "꿈을 이루려면 먼저 깨어 있어야 한다.", author: "J.M. 파워", authorEn: "J.M. Power", desc: "작가", category: "꿈" },
    { text: "모든 위대한 꿈은 꿈꾸는 사람으로부터 시작된다.", author: "해리엇 터브먼", authorEn: "Harriet Tubman", desc: "미국 노예 해방 운동가", category: "꿈" },
    { text: "현실에 발을 딛고 꿈을 향해 두 손을 뻗어라.", author: "빅토르 위고", authorEn: "Victor Hugo", desc: "프랑스 작가", category: "꿈" },

    // 시간
    { text: "시간은 가장 현명한 상담자이다.", author: "페리클레스", authorEn: "Pericles", desc: "고대 그리스 정치가", category: "시간" },
    { text: "오늘 할 수 있는 일을 내일로 미루지 마라.", author: "벤자민 프랭클린", authorEn: "Benjamin Franklin", desc: "미국 건국의 아버지", category: "시간" },
    { text: "시간은 우리가 가장 원하는 것이면서 가장 낭비하는 것이다.", author: "윌리엄 펜", authorEn: "William Penn", desc: "미국 펜실베이니아 건설자", category: "시간" },
    { text: "과거에서 배우고, 현재를 살고, 미래를 향해 희망하라.", author: "알베르트 아인슈타인", authorEn: "Albert Einstein", desc: "물리학자", category: "시간" },
    { text: "가장 좋은 때는 지금이다.", author: "한비자", authorEn: "Han Feizi", desc: "중국 고대 법가 사상가", category: "시간" },
];

// ===== CATEGORIES =====
const categories = [...new Set(quotes.map(q => q.category))];

// ===== UNIQUE PEOPLE =====
function getUniquePeople() {
    const map = new Map();
    quotes.forEach(q => {
        if (!map.has(q.author)) {
            map.set(q.author, { name: q.author, nameEn: q.authorEn, desc: q.desc, count: 1 });
        } else {
            map.get(q.author).count++;
        }
    });
    return [...map.values()].sort((a, b) => b.count - a.count);
}

// ===== UTILITY =====
function getInitials(name) {
    return name.charAt(0);
}

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ===== DAILY QUOTE =====
function showDailyQuote() {
    const idx = Math.floor(Math.random() * quotes.length);
    const q = quotes[idx];
    document.getElementById('dailyQuoteText').textContent = q.text;
    document.getElementById('dailyQuoteAuthor').textContent = `${q.author} (${q.authorEn}) — ${q.desc}`;
}

// ===== RENDER QUOTE CARD =====
function renderQuoteCard(q) {
    const card = document.createElement('div');
    card.className = 'quote-card';
    card.innerHTML = `
        <span class="quote-category">${q.category}</span>
        <div class="quote-icon">"</div>
        <p class="quote-text">${q.text}</p>
        <div class="quote-footer">
            <div class="author-avatar">${getInitials(q.author)}</div>
            <div class="author-info">
                <div class="author-name">${q.author}</div>
                <div class="author-desc">${q.desc}</div>
            </div>
        </div>
    `;
    return card;
}

// ===== CATEGORY TABS =====
function renderCategoryTabs() {
    const container = document.getElementById('categoryTabs');
    categories.forEach((cat, i) => {
        const btn = document.createElement('button');
        btn.className = 'category-tab' + (i === 0 ? ' active' : '');
        btn.textContent = cat;
        btn.addEventListener('click', () => {
            container.querySelectorAll('.category-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCategoryQuotes(cat);
        });
        container.appendChild(btn);
    });
}

function renderCategoryQuotes(category) {
    const container = document.getElementById('categoryQuotes');
    container.innerHTML = '';
    const filtered = quotes.filter(q => q.category === category);
    filtered.forEach(q => container.appendChild(renderQuoteCard(q)));
}

// ===== PEOPLE GRID =====
function renderPeopleGrid() {
    const container = document.getElementById('peopleGrid');
    const people = getUniquePeople();
    people.forEach(p => {
        const card = document.createElement('div');
        card.className = 'person-card';
        card.innerHTML = `
            <div class="person-avatar">${getInitials(p.name)}</div>
            <div class="person-name">${p.name}</div>
            <div class="person-title">${p.desc}</div>
            <div class="person-count">명언 ${p.count}개</div>
        `;
        card.addEventListener('click', () => showPersonQuotes(p));
        container.appendChild(card);
    });
}

function showPersonQuotes(person) {
    document.getElementById('people').style.display = 'none';
    const section = document.getElementById('personQuotes');
    section.style.display = 'block';

    document.getElementById('personHeader').innerHTML = `
        <div class="person-avatar-lg">${getInitials(person.name)}</div>
        <h2>${person.name}</h2>
        <p>${person.nameEn} — ${person.desc}</p>
    `;

    const list = document.getElementById('personQuotesList');
    list.innerHTML = '';
    const personQuotes = quotes.filter(q => q.author === person.name);
    personQuotes.forEach(q => {
        const item = document.createElement('div');
        item.className = 'quote-list-item';
        item.innerHTML = `
            <p class="quote-text">${q.text}</p>
            <span class="quote-category-tag">${q.category}</span>
        `;
        list.appendChild(item);
    });

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== ALL QUOTES (MASONRY) =====
let allQuotesPage = 0;
const QUOTES_PER_PAGE = 12;
let shuffledQuotes = [];

function renderAllQuotes(loadMore = false) {
    if (!loadMore) {
        shuffledQuotes = shuffleArray(quotes);
        allQuotesPage = 0;
        document.getElementById('allQuotesGrid').innerHTML = '';
    }
    const container = document.getElementById('allQuotesGrid');
    const start = allQuotesPage * QUOTES_PER_PAGE;
    const end = start + QUOTES_PER_PAGE;
    const slice = shuffledQuotes.slice(start, end);

    slice.forEach(q => container.appendChild(renderQuoteCard(q)));
    allQuotesPage++;

    const btn = document.getElementById('loadMoreBtn');
    btn.style.display = end >= shuffledQuotes.length ? 'none' : 'block';
}

// ===== SEARCH =====
function handleSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultsEl = document.getElementById('searchResults');

    if (!query) {
        resultsEl.style.display = 'none';
        return;
    }

    const results = quotes.filter(q =>
        q.text.toLowerCase().includes(query) ||
        q.author.toLowerCase().includes(query) ||
        q.authorEn.toLowerCase().includes(query) ||
        q.category.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        resultsEl.innerHTML = '<div class="search-result-item"><span class="quote-text">검색 결과가 없습니다.</span></div>';
    } else {
        resultsEl.innerHTML = results.map(q => `
            <div class="search-result-item">
                <div class="quote-text">"${q.text}"</div>
                <div class="quote-author">— ${q.author} (${q.category})</div>
            </div>
        `).join('');
    }
    resultsEl.style.display = 'block';
}

// ===== FOOTER CATEGORIES =====
function renderFooterCategories() {
    const ul = document.getElementById('footerCategories');
    categories.forEach(cat => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#categories">${cat}</a>`;
        ul.appendChild(li);
    });
}

// ===== MOBILE MENU =====
function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.main-nav');
    btn.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => nav.classList.remove('open'));
    });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    showDailyQuote();
    renderCategoryTabs();
    renderCategoryQuotes(categories[0]);
    renderPeopleGrid();
    renderAllQuotes();
    renderFooterCategories();
    setupMobileMenu();

    document.getElementById('newQuoteBtn').addEventListener('click', showDailyQuote);
    document.getElementById('loadMoreBtn').addEventListener('click', () => renderAllQuotes(true));

    document.getElementById('searchBtn').addEventListener('click', handleSearch);
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('searchInput').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    document.getElementById('backToPeople').addEventListener('click', () => {
        document.getElementById('personQuotes').style.display = 'none';
        document.getElementById('people').style.display = 'block';
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-section')) {
            document.getElementById('searchResults').style.display = 'none';
        }
    });
});
