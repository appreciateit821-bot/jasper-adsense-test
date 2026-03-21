# **Project Blueprint: 재스퍼의 명언 모음집 (Jasper's Quote Collection)**

## **Overview**
"재스퍼의 명언 모음집"은 세계적인 위인, 사업가, 작가 그리고 현대 대중문화(영화, 드라마) 속의 지혜를 핀터레스트 스타일의 감각적인 디자인으로 제공하는 프리미엄 명언 큐레이션 플랫폼입니다. 사용자가 매 접속 시 새로운 영감을 얻고, 이를 아름다운 이미지 카드로 소장 및 공유할 수 있는 경험을 제공합니다.

## **Core Features & Design**

### **1. Visual Aesthetic: Pinterest-Style Editorial**
*   **Concept:** "저장하고 싶은 감성". 세로형 북마크 레이아웃과 비정형 매립형 그리드를 통해 핀터레스트 특유의 탐색 재미를 제공합니다.
*   **Dynamic Hero:** 메인 화면 상단 '오늘의 명언' 섹션은 명언 내용과 매칭되는 고화질 실사 배경 이미지를 제공하며, 접속 시마다 랜덤하게 변경됩니다.
*   **Typography:** Noto Serif KR(무게감), Noto Sans KR(깔끔함), 그리고 감성적인 필기체 등을 조화롭게 사용하여 에디토리얼 느낌을 강조합니다.
*   **Tactile Textures:** 종이 질감의 노이즈 텍스처와 다중 레이어 그림자를 통해 실물 북마크와 같은 입체감을 부여합니다.

### **2. Massive Wisdom Database (10x Expansion)**
*   **Famous Writers:** 셰익스피어, 헤밍웨이, 도스토옙스키 등 문학 거장들의 문장.
*   **World-Class Entrepreneurs:** 일론 머스크, 제프 베조스, 샘 알트먼 등 현대 비즈니스 리더들의 성공 철학.
*   **Pop Culture (Netflix & Movies):** 넷플릭스 인기 드라마, 영화 속 심금을 울리는 명대사.
*   **Categorized Search:** 인생, 성공, 사랑, 지혜 등 기존 카테고리를 유지하며 검색 정확도를 높입니다.

### **3. Advanced Image Card Generator**
*   **Extended Fonts:** Noto Sans(고딕), Noto Serif(명조), 감성 필기체, 볼드한 타이틀체 등 4종 이상의 폰트 지원.
*   **Instagram Optimized:** 인스타그램 피드 및 스토리에 최적화된 4:5 및 9:16 비율 대응 이미지 생성.
*   **Bookmark Aesthetic:** 실제 출력한 듯한 북마크 디자인 요소(리본, 홈)를 이미지에 포함.

### **4. Interactive Features**
*   **Random Refresh:** 메인 히어로 섹션의 명언을 클릭 한 번으로 무한 새로고침 가능.
*   **Persistent Curation:** 로컬 스토리지를 활용한 '좋아요' 저장 기능으로 나만의 명언집 구축.

## **Current Development Plan: Jasper's Big Bang Update**

### **Step 1: Rebranding & UI Polish**
- [x] 모든 페이지의 제목과 로고를 '재스퍼의 명언 모음집'으로 변경.
- [x] 히어로 섹션에 배경 이미지 레이어 및 그라디언트 오버레이 추가.
- [x] 핀터레스트 무드를 위한 카드 여백 및 섀도우 값 미세 조정.

### **Step 2: Database Expansion (10x)**
- [x] 70명 이상의 인물 데이터 및 명언 데이터 대폭 추가 (사랑, 용기, 행복, 리더십, 창의성, 변화, 꿈, 시간, 책 카테고리 신규 구축).
- [x] 영화/드라마 카테고리 전용 데이터 구축.
- [x] 각 명언별 배경 이미지 매칭용 키워드 할당.
- [ ] 500개 이상의 명언으로 추가 확장 (현재 ~150개).

### **Step 3: Card Generator Upgrade**
- [x] Noto Sans, Noto Serif, Gowun Batang, Black Han Sans 4종 폰트 지원.
- [x] 캔버스 렌더링 엔진 구현 (1080x1350 고해상도 대응).

### **Step 4: Logic Implementation**
- [x] 메인 히어로 배경 이미지 동적 변경 로직 구현 (키워드 기반 Unsplash 이미지 자동 매핑).
- [x] 전체 명언 랜덤 셔플 및 페이징 성능 최적화 (DocumentFragment + IntersectionObserver 자동 로드).

### **Step 2 (완성): Database Expansion**
- [x] 500개 이상의 명언으로 확장 완료 (총 500개).
- [x] people.js에 40+ 새 인물 추가 (한국 위인, 운동선수, 철학자, 드라마/영화 등).

### **완료 일시**: 2026-03-21
