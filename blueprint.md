# **Project Blueprint: 명언의 정원 (Garden of Quotes)**

## **Overview**
"명언의 정원" is a refined, SEO-optimized web application designed to provide users with a daily dose of wisdom and inspiration from world-renowned figures. The application emphasizes a beautiful, interactive, and shareable user experience, leveraging modern web standards to deliver high performance and cross-platform compatibility.

## **Core Features & Design**

### **1. Visual Aesthetic: Pinterest-Style Bookmarks**
*   **Concept:** Quote cards are designed with a "bookmark" aesthetic—elegant, vertical, and tactile. They evoke a feeling of something precious that users want to save and collect.
*   **Pinterest Layout:** Uses a masonry grid for the "All Quotes" section, creating a dynamic and visually engaging discovery experience.
*   **Typography:** Expressive serif fonts (Noto Serif KR) for quotes to convey weight and wisdom, paired with clean sans-serif (Noto Sans KR) for metadata.
*   **Visual Effects:**
    *   **Depth:** Multi-layered soft shadows to make cards look "lifted" off the page.
    *   **Texture:** Subtle noise textures and gradients to add a premium, tactile feel.
    *   **Interactive Feedback:** Cards subtly scale and deepen their shadows on hover.
    *   **Bookmark Notch:** A decorative ribbon or notch element at the top of cards to reinforce the bookmark theme.

### **2. Enhanced Sharing System**
*   **KakaoTalk Integration:** Direct sharing to KakaoTalk using the Kakao SDK, allowing users to send beautiful quote cards directly to friends or groups.
*   **Instagram Optimized:** An "Image Card Generator" that creates perfectly sized (1080x1080 or 1080x1350) images with elegant themes, optimized for Instagram Feed and Stories.
*   **Text Copy:** One-click copying of the quote and author for quick sharing on other platforms.
*   **Pinterest Save:** Visual design encouraged "saving" behavior, with clear download options for pinning.

### **3. Content & Discovery**
*   **Daily Quote:** A prominent hero section featuring a "Quote of the Day" to greet returning users.
*   **Categorized Wisdom:** 11+ categories (Life, Success, Love, Wisdom, Courage, etc.) for targeted inspiration.
*   **Person Profiles:** Dedicated sections for 70+ historical figures, including biographies and their collected wisdom.
*   **Search:** Real-time search by quote text, author, or keyword.
*   **Like System:** Persistent "Like" functionality allowing users to curate their own collection of favorite quotes.

### **4. Technical Excellence (Baseline)**
*   **Framework-less:** Built with Vanilla JS, HTML5, and CSS3 for maximum speed and zero dependency bloat.
*   **Web Components:** Encapsulated UI elements (e.g., `<quote-card>`, `<ad-unit>`) for maintainable code.
*   **Performance:** Optimized for Core Web Vitals, featuring lazy loading for images and efficient DOM manipulation.
*   **SEO Mastery:** Comprehensive structured data (JSON-LD), semantic HTML, and optimized meta tags for high search engine visibility.
*   **Responsive Design:** Fully fluid layouts that adapt seamlessly from mobile to wide-screen desktops.

## **Current Development Plan: The Bookmark Update**

### **Step 1: UI Redesign (The Bookmark Aesthetic)**
- [ ] Update `.quote-card` in `style.css` with a vertical bookmark layout.
- [ ] Add decorative elements like a notch or ribbon at the top of the card.
- [ ] Implement premium textures and multi-layered shadows.
- [ ] Enhance typography with varied font weights and expressive sizes.

### **Step 2: KakaoTalk & Instagram Integration**
- [ ] Integrate Kakao SDK in `index.html`.
- [ ] Replace X (Twitter) sharing button with a KakaoTalk sharing button in `main.js`.
- [ ] Update the Image Card Generator in `main.js` to create even more beautiful "bookmark" style images.
- [ ] Ensure the generated images are optimized for Instagram's aspect ratios.

### **Step 3: Verification & Polishing**
- [ ] Verify Kakao sharing functionality on mobile devices.
- [ ] Test the Image Card Generator across different browsers.
- [ ] Audit the mobile responsiveness of the new bookmark cards.
- [ ] Ensure SEO structured data remains accurate.
