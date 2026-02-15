// Web Components Definitions

class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const title = this.getAttribute('title') || 'My App';
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background: #ffffff;
                    border-bottom: 1px solid #e5e7eb;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-weight: 700;
                    font-size: 1.25rem;
                    color: #2563eb;
                    text-decoration: none;
                }
                nav ul {
                    display: flex;
                    list-style: none;
                    gap: 1.5rem;
                }
                nav a {
                    text-decoration: none;
                    color: #4b5563;
                    font-size: 0.875rem;
                    font-weight: 500;
                }
                nav a:hover {
                    color: #2563eb;
                }
            </style>
            <header>
                <a href="#" class="logo">${title}</a>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

class AppFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    padding: 3rem 1rem;
                    text-align: center;
                    border-top: 1px solid #e5e7eb;
                    color: #6b7280;
                    font-size: 0.875rem;
                }
            </style>
            <footer>
                &copy; ${new Date().getFullYear()} Jasper AdSense Test Project. All rights reserved.
            </footer>
        `;
    }
}

class ArticleCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const excerpt = this.getAttribute('excerpt');
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background: #ffffff;
                    padding: 2.5rem;
                    border-radius: 1.5rem;
                    border: 1px solid #e5e7eb;
                    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s ease;
                }
                .card:hover {
                    transform: translateY(-4px);
                }
                h2 { margin: 0 0 1rem 0; font-size: 1.75rem; color: #111827; }
                p { margin: 0; color: #4b5563; line-height: 1.6; }
                .meta { margin-top: 1.5rem; display: flex; gap: 1rem; font-size: 0.75rem; color: #9ca3af; }
            </style>
            <article class="card">
                <h2>${title}</h2>
                <p>${excerpt}</p>
                <div class="meta">
                    <span>5 min read</span>
                    <span>•</span>
                    <span>Technology</span>
                </div>
            </article>
        `;
    }
}

class AdsensePlaceholder extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const type = this.getAttribute('type') || 'display';
        const height = type === 'sidebar' ? '600px' : '250px';
        
        this.shadowRoot.innerHTML = `
            <style>
                .placeholder {
                    background: #f3f4f6;
                    border: 2px dashed #d1d5db;
                    border-radius: 0.75rem;
                    height: ${height};
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: #9ca3af;
                    position: relative;
                    overflow: hidden;
                }
                .label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .sublabel {
                    font-size: 0.7rem;
                    margin-top: 0.5rem;
                }
                .placeholder::after {
                    content: 'AD';
                    position: absolute;
                    top: 0.5rem;
                    right: 0.5rem;
                    font-size: 0.6rem;
                    background: #d1d5db;
                    color: white;
                    padding: 0.1rem 0.3rem;
                    border-radius: 0.2rem;
                }
            </style>
            <div class="placeholder">
                <span class="label">AdSense Placeholder</span>
                <span class="sublabel">Type: ${type}</span>
            </div>
        `;
    }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
customElements.define('article-card', ArticleCard);
customElements.define('adsense-placeholder', AdsensePlaceholder);
