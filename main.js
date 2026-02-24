// ===== PERSON DATA (images from Wikipedia, bios original) =====
const people = {
    "키케로": {
        nameEn: "Cicero", wiki: "Cicero", desc: "고대 로마 철학자 (BC 106-43)",
        bio: "마르쿠스 툴리우스 키케로는 로마 공화정 말기의 정치가, 철학자, 웅변가입니다. 로마 최고의 연설가로 꼽히며, 라틴어 산문의 표준을 세웠습니다. 로마 원로원에서 활동하며 공화정의 이상을 지켰고, 카이사르 암살 후 안토니우스에 맞서 공화정을 수호하려 했으나 결국 암살당했습니다. 그의 철학 저술과 서간문은 르네상스 시대에 재발견되어 서양 인문주의의 기반이 되었습니다."
    },
    "소크라테스": {
        nameEn: "Socrates", wiki: "Socrates", desc: "고대 그리스 철학자 (BC 470-399)",
        bio: "소크라테스는 서양 철학의 아버지로 불리는 고대 아테네의 철학자입니다. 스스로 글을 남기지 않았지만, 제자 플라톤의 대화편을 통해 그의 사상이 전해집니다. '문답법(산파술)'이라는 독특한 교육 방식으로 대화 상대가 스스로 진리를 발견하도록 이끌었습니다. 아테네 청년을 타락시켰다는 혐의로 재판을 받고, 독배를 마시며 '검사하지 않은 삶은 살 가치가 없다'는 유명한 말을 남겼습니다. 그의 제자 플라톤, 그리고 플라톤의 제자 아리스토텔레스로 이어지는 계보가 서양 사상의 근간을 형성했습니다."
    },
    "찰리 채플린": {
        nameEn: "Charlie Chaplin", wiki: "Charlie_Chaplin", desc: "영국 배우/감독 (1889-1977)",
        bio: "찰스 스펜서 채플린은 무성영화 시대를 대표하는 전설적인 코미디언, 감독, 작곡가입니다. 런던 빈민가에서 태어나 어린 시절 극심한 가난을 겪었지만, 할리우드에서 '떠돌이(The Tramp)' 캐릭터로 세계적 스타가 되었습니다. 《시티 라이트》, 《모던 타임즈》, 《위대한 독재자》 등 영화사에 길이 남을 걸작을 남겼으며, 웃음 속에 사회 비판과 인간에 대한 따뜻한 시선을 담았습니다. 88세까지 활동하며 아카데미 명예상을 수상했습니다."
    },
    "프랭클린 D. 루스벨트": {
        nameEn: "Franklin D. Roosevelt", wiki: "Franklin_D._Roosevelt", desc: "미국 제32대 대통령 (1882-1945)",
        bio: "프랭클린 델라노 루스벨트(FDR)는 미국 역사상 유일하게 4선에 성공한 대통령입니다. 대공황 시기에 뉴딜 정책으로 경제를 회복시키고, 제2차 세계대전에서 연합국을 승리로 이끌었습니다. 39세에 소아마비로 하반신이 마비되었음에도 정치 활동을 계속하여 대통령에 당선되었으며, '우리가 두려워해야 할 것은 두려움 그 자체뿐이다'라는 취임 연설은 미국 역사상 가장 유명한 연설 중 하나입니다."
    },
    "알베르트 아인슈타인": {
        nameEn: "Albert Einstein", wiki: "Albert_Einstein", desc: "물리학자 (1879-1955)",
        bio: "알베르트 아인슈타인은 20세기 최고의 물리학자이자 과학의 아이콘입니다. 독일에서 태어나 스위스에서 교육받았으며, 1905년 특수상대성이론, 광전효과, 브라운 운동 등 혁명적 논문을 발표했습니다. 1915년 일반상대성이론을 완성하여 시공간의 본질에 대한 이해를 근본적으로 바꾸었습니다. 1921년 노벨물리학상을 수상했고, 나치 집권 후 미국으로 망명하여 프린스턴 고등연구소에서 연구를 계속했습니다. 핵무기의 위험성을 경고하는 평화 운동에도 앞장섰습니다."
    },
    "장 자크 루소": {
        nameEn: "Jean-Jacques Rousseau", wiki: "Jean-Jacques_Rousseau", desc: "프랑스 철학자 (1712-1778)",
        bio: "장 자크 루소는 프랑스 계몽주의를 대표하는 사상가이자 작가입니다. 제네바에서 태어나 파리에서 활동했으며, 《사회계약론》에서 '인민주권론'을 주장하여 프랑스 혁명의 사상적 기반을 마련했습니다. 《에밀》에서는 자연주의 교육론을 펼쳤고, 《고백록》은 근대 자서전 문학의 효시가 되었습니다. '인간은 자유롭게 태어났으나 어디서나 사슬에 묶여 있다'는 그의 선언은 근대 민주주의의 출발점이 되었습니다."
    },
    "헤르만 헤세": {
        nameEn: "Hermann Hesse", wiki: "Hermann_Hesse", desc: "독일 작가/노벨문학상 (1877-1962)",
        bio: "헤르만 헤세는 독일 태생의 스위스 작가이자 시인으로, 1946년 노벨문학상을 수상했습니다. 《데미안》, 《싯다르타》, 《유리알 유희》 등의 작품으로 자아 탐구와 동서양 정신세계의 융합을 문학적으로 구현했습니다. 특히 1960-70년대 미국 히피 문화에서 정신적 지주로 추앙받았으며, 개인의 내면 여행과 자기 실현의 중요성을 역설한 작품들은 오늘날에도 전 세계 청년들에게 깊은 영감을 주고 있습니다."
    },
    "존 레논": {
        nameEn: "John Lennon", wiki: "John_Lennon", desc: "영국 음악가 (1940-1980)",
        bio: "존 레논은 비틀즈의 리더이자 20세기 가장 영향력 있는 음악가 중 한 명입니다. 리버풀에서 태어나 폴 매카트니와 함께 비틀즈를 결성하여 대중음악의 역사를 바꾸었습니다. 솔로 활동에서는 《Imagine》 등의 곡으로 평화와 사랑의 메시지를 전했으며, 오노 요코와 함께 반전 운동을 펼쳤습니다. 1980년 뉴욕에서 팬에 의해 총격으로 40세의 나이에 세상을 떠났으며, 그의 음악과 메시지는 지금도 전 세계인에게 영감을 주고 있습니다."
    },
    "틱낫한": {
        nameEn: "Thich Nhat Hanh", wiki: "Thich_Nhat_Hanh", desc: "베트남 승려/평화운동가 (1926-2022)",
        bio: "틱낫한은 베트남 출신의 불교 승려이자 세계적인 평화운동가, 작가입니다. 베트남 전쟁 중 비폭력 평화운동을 이끌었으며, 마틴 루터 킹 목사에 의해 노벨평화상 후보로 추천되었습니다. 프랑스에 '플럼 빌리지' 수행 공동체를 설립하고, '마음챙김(mindfulness)' 수행을 서양에 널리 알렸습니다. 100권 이상의 저서를 남겼으며, 달라이 라마와 함께 세계에서 가장 영향력 있는 불교 지도자로 꼽힙니다."
    },
    "히포크라테스": {
        nameEn: "Hippocrates", wiki: "Hippocrates", desc: "고대 그리스 의학의 아버지 (BC 460-370)",
        bio: "히포크라테스는 '의학의 아버지'로 불리는 고대 그리스의 의사입니다. 코스 섬에서 태어나 당시 미신과 종교에 의존하던 질병 치료를 관찰과 경험에 기반한 과학적 의학으로 전환시켰습니다. 의사의 윤리를 규정한 '히포크라테스 선서'는 오늘날에도 의대 졸업식에서 낭독되며, 체액설, 환경의학, 환자 관찰 기록 등 그의 의학적 방법론은 수천 년간 서양 의학의 기본 틀이 되었습니다."
    },
    "노자": {
        nameEn: "Lao Tzu", wiki: "Laozi", desc: "중국 고대 철학자 (BC 6세기)",
        bio: "노자는 도가 사상의 창시자로, 동양 철학의 가장 중요한 인물 중 한 명입니다. 실존 여부에 대한 논란이 있으나, 전통적으로 춘추시대 초나라 사람으로 주나라 왕실 도서관의 사관이었다고 전해집니다. 《도덕경》 81장을 저술하여 '도(道)'와 '무위자연'의 철학을 체계화했습니다. '물은 만물에 이로우면서도 다투지 않는다'는 그의 가르침은 겸손과 자연스러움의 가치를 일깨워주며, 동아시아 문화 전반에 깊은 영향을 미쳤습니다."
    },
    "윈스턴 처칠": {
        nameEn: "Winston Churchill", wiki: "Winston_Churchill", desc: "영국 전 총리 (1874-1965)",
        bio: "윈스턴 처칠은 제2차 세계대전 시기 영국의 총리로서 나치 독일에 맞서 연합국의 승리를 이끈 20세기 가장 위대한 지도자 중 한 명입니다. 군인, 기자, 정치가, 화가, 작가 등 다방면에서 활약했으며, 1953년 노벨문학상을 수상했습니다. '절대, 절대, 절대 포기하지 마라'는 그의 좌우명처럼 여러 번의 정치적 좌절을 극복하고 66세에 총리가 되어 영국을 구원했습니다. BBC 여론조사에서 '가장 위대한 영국인'으로 선정되었습니다."
    },
    "토마스 에디슨": {
        nameEn: "Thomas Edison", wiki: "Thomas_Edison", desc: "미국 발명가 (1847-1931)",
        bio: "토마스 앨바 에디슨은 인류 역사상 가장 많은 발명품(1,093개 미국 특허)을 남긴 발명가이자 사업가입니다. 전구, 축음기, 영사기, 발전소 등을 발명하여 현대 전기 문명의 기초를 놓았습니다. 정규 교육을 거의 받지 못하고 어머니의 홈스쿨링으로 성장했으며, 청력 장애에도 불구하고 멘로파크와 웨스트오렌지의 연구소에서 체계적인 연구개발 시스템을 구축했습니다. '천재는 1%의 영감과 99%의 노력으로 이루어진다'는 명언으로도 유명합니다."
    },
    "스티브 잡스": {
        nameEn: "Steve Jobs", wiki: "Steve_Jobs", desc: "애플 공동 창업자 (1955-2011)",
        bio: "스티브 잡스는 애플을 공동 창업하여 개인용 컴퓨터, 스마트폰, 디지털 음악, 태블릿 등 여러 산업을 혁신한 비전가입니다. 시리아 이민자의 아들로 태어나 입양되었고, 대학 중퇴 후 21세에 애플을 창업했습니다. 자신이 세운 회사에서 쫓겨났다가 12년 만에 복귀하여 iMac, iPod, iPhone, iPad를 연이어 출시하며 세계를 변화시켰습니다. 2005년 스탠퍼드 졸업식 연설 'Stay Hungry, Stay Foolish'는 역대 가장 많이 시청된 졸업 연설입니다."
    },
    "엘리너 루스벨트": {
        nameEn: "Eleanor Roosevelt", wiki: "Eleanor_Roosevelt", desc: "미국 전 대통령 부인/인권운동가 (1884-1962)",
        bio: "엘리너 루스벨트는 프랭클린 루스벨트 대통령의 부인이자 역대 가장 활동적인 퍼스트레이디였습니다. 남편의 대통령 재임 기간 동안 인권, 여성 권리, 사회 정의를 위해 적극적으로 목소리를 높였습니다. 남편 사후에는 유엔 인권위원회 의장으로서 세계인권선언의 초안 작성을 주도하여 '세계의 퍼스트레이디'로 불렸습니다. 트루먼 대통령은 그녀를 '세계의 제1인자'라고 칭했습니다."
    },
    "에이브러햄 링컨": {
        nameEn: "Abraham Lincoln", wiki: "Abraham_Lincoln", desc: "미국 제16대 대통령 (1809-1865)",
        bio: "에이브러햄 링컨은 미국의 제16대 대통령으로, 남북전쟁을 이끌고 노예해방 선언을 발표하여 미국 역사의 방향을 바꾼 인물입니다. 켄터키 주의 통나무집에서 태어나 극심한 가난 속에서 독학으로 변호사가 되었습니다. 수차례 선거에서 낙선을 경험했지만 포기하지 않고 마침내 대통령에 당선되었습니다. 게티즈버그 연설의 '국민의, 국민에 의한, 국민을 위한 정부'는 민주주의의 가장 유명한 정의로 남아 있습니다."
    },
    "헨리 포드": {
        nameEn: "Henry Ford", wiki: "Henry_Ford", desc: "포드자동차 창업자 (1863-1947)",
        bio: "헨리 포드는 포드자동차의 창업자이며, 대량생산 방식(컨베이어 벨트 조립라인)을 도입하여 자동차를 부유층의 전유물에서 대중의 이동 수단으로 바꾼 산업혁명가입니다. 미시간 주의 농장에서 태어나 기계에 대한 열정으로 자동차 산업에 뛰어들었으며, '모델 T'로 자동차 대중화에 성공했습니다. 직원들에게 업계 최고 수준인 일당 5달러를 지급하여 중산층 형성에도 기여했습니다."
    },
    "크리스 그로서": {
        nameEn: "Chris Grosser", wiki: "", desc: "기업가/작가",
        bio: "크리스 그로서는 기업가 정신과 자기 개발 분야의 작가이자 연설가입니다. '기회는 일어나는 것이 아니라 만드는 것이다'라는 그의 명언은 전 세계적으로 기업가들 사이에서 널리 인용되며, 수동적으로 기회를 기다리지 말고 능동적으로 만들어가야 한다는 기업가 정신의 핵심을 담고 있습니다."
    },
    "유클리드": {
        nameEn: "Euclid", wiki: "Euclid", desc: "고대 그리스 수학자 (BC 325-265)",
        bio: "유클리드는 '기하학의 아버지'로 불리는 고대 그리스의 수학자입니다. 알렉산드리아에서 활동하며 《기하학 원론(Stoicheia)》 13권을 저술했는데, 이 책은 성경 다음으로 많이 인쇄된 책으로 꼽히며 2천 년 이상 수학 교육의 기본서로 사용되었습니다. 5개의 공리에서 출발하여 논리적으로 정리를 증명하는 그의 연역적 방법은 이후 모든 수학과 과학의 모범이 되었습니다."
    },
    "마틴 루터 킹 주니어": {
        nameEn: "Martin Luther King Jr.", wiki: "Martin_Luther_King_Jr.", desc: "미국 인권운동가 (1929-1968)",
        bio: "마틴 루터 킹 주니어는 미국 시민권 운동의 지도자이자 비폭력 저항의 상징입니다. 조지아 주 애틀랜타에서 목사의 아들로 태어나 자신도 목사가 되었으며, 간디의 비폭력주의에 영향을 받아 평화적 방법으로 인종차별에 맞섰습니다. 1963년 워싱턴 대행진에서의 'I Have a Dream' 연설은 20세기 가장 위대한 연설로 평가되며, 1964년 노벨평화상을 수상했습니다. 1968년 암살되었지만 그의 꿈은 시민권법과 투표권법으로 결실을 맺었습니다."
    },
    "사도 바울": {
        nameEn: "Apostle Paul", wiki: "Paul_the_Apostle", desc: "기독교 사도 (5-67)",
        bio: "사도 바울(본명 사울)은 기독교 역사상 가장 영향력 있는 인물 중 한 명입니다. 유대인 바리새인으로 처음에는 기독교인을 박해했으나, 다마스쿠스로 가는 길에서 극적인 회심을 경험한 후 이방인 선교에 헌신했습니다. 로마 제국 전역을 순회하며 교회를 세웠고, 신약성경의 13개 서신을 저술하여 기독교 신학의 기초를 놓았습니다. 고린도전서 13장의 '사랑의 찬가'는 2천 년간 가장 많이 인용되는 사랑에 대한 글입니다."
    },
    "빅토르 위고": {
        nameEn: "Victor Hugo", wiki: "Victor_Hugo", desc: "프랑스 작가 (1802-1885)",
        bio: "빅토르 위고는 19세기 프랑스 문학의 거장으로, 소설가, 시인, 극작가로 활동했습니다. 《레미제라블》과 《노트르담의 꼽추(파리의 노트르담)》는 세계 문학의 고전으로 꼽히며, 특히 《레미제라블》은 뮤지컬로도 제작되어 전 세계에서 사랑받고 있습니다. 정치적으로도 활발히 활동하여 사형제 폐지와 보통선거권을 주장했으며, 나폴레옹 3세의 쿠데타에 반대하여 19년간 망명 생활을 했습니다."
    },
    "존 업다이크": {
        nameEn: "John Updike", wiki: "John_Updike", desc: "미국 소설가 (1932-2009)",
        bio: "존 업다이크는 퓰리처상을 두 번 수상한 미국 현대문학의 대가입니다. 펜실베이니아 주에서 태어나 하버드를 졸업한 후, 《뉴요커》 지에서 활동했습니다. '래빗' 4부작으로 미국 중산층의 삶을 세밀하게 묘사했으며, 소설, 시, 수필, 비평 등 전 방위적 문학 활동을 펼쳤습니다. 일상의 미세한 감정과 관계의 결을 포착하는 섬세한 문체로 '미국의 발자크'라 불렸습니다."
    },
    "헬렌 켈러": {
        nameEn: "Helen Keller", wiki: "Helen_Keller", desc: "미국 작가/사회운동가 (1880-1968)",
        bio: "헬렌 켈러는 19개월에 열병으로 시각과 청각을 모두 잃었지만, 설리번 선생의 헌신적인 교육으로 언어를 배우고 하버드 래드클리프 대학을 졸업한 인류 역사의 기적 같은 인물입니다. 최초의 시청각 장애인 학사 학위 취득자이며, 이후 작가, 강연자, 사회운동가로 활발히 활동했습니다. 장애인 권리, 여성 참정권, 노동 운동에 앞장섰으며, 12권의 책과 475편의 글을 남겼습니다."
    },
    "프랜시스 베이컨": {
        nameEn: "Francis Bacon", wiki: "Francis_Bacon", desc: "영국 철학자 (1561-1626)",
        bio: "프랜시스 베이컨은 영국의 철학자, 정치가, 과학자로 '근대 경험론의 아버지'로 불립니다. 케임브리지 대학을 졸업하고 대법관까지 올랐으며, 《노붐 오르가눔》에서 관찰과 실험을 통한 귀납적 과학 방법론을 제시했습니다. 중세의 스콜라 철학에서 벗어나 경험적 지식의 중요성을 역설하여 과학혁명의 정신적 토대를 마련했습니다."
    },
    "공자": {
        nameEn: "Confucius", wiki: "Confucius", desc: "중국 고대 사상가 (BC 551-479)",
        bio: "공자(孔子)는 동양 문명을 형성한 가장 영향력 있는 사상가입니다. 노나라에서 태어나 관직에 올랐으나 뜻을 펴지 못하고 14년간 제자들과 여러 나라를 떠돌며 유세했습니다. 만년에 고향으로 돌아와 제자 교육과 고전 정리에 전념했으며, 그의 가르침은 제자들에 의해 《논어》로 정리되었습니다. 인(仁), 의(義), 예(禮)를 핵심 덕목으로 하는 유교 사상은 2,500년간 동아시아 문화, 정치, 교육의 근간이 되었습니다."
    },
    "넬슨 만델라": {
        nameEn: "Nelson Mandela", wiki: "Nelson_Mandela", desc: "남아공 전 대통령 (1918-2013)",
        bio: "넬슨 만델라는 남아프리카공화국의 반아파르트헤이트 운동가이자 최초의 흑인 대통령입니다. 27년간 로벤 섬 등에서 수감 생활을 했지만 신념을 포기하지 않았고, 1990년 석방된 후 화해와 용서의 정치로 남아공의 민주화를 이끌었습니다. 1993년 노벨평화상을 수상했으며, 보복 대신 '진실과 화해 위원회'를 통해 과거를 치유하는 전례 없는 방식을 선택했습니다. '마디바'라는 애칭으로 전 세계인에게 사랑받았습니다."
    },
    "피타고라스": {
        nameEn: "Pythagoras", wiki: "Pythagoras", desc: "고대 그리스 수학자 (BC 570-495)",
        bio: "피타고라스는 고대 그리스의 수학자, 철학자로 사모스 섬에서 태어났습니다. 남이탈리아의 크로톤에 학파를 세우고 수학, 음악, 천문학, 철학을 가르쳤습니다. 직각삼각형의 빗변에 관한 '피타고라스 정리'로 가장 유명하며, '만물의 근원은 수(數)'라는 사상으로 수학과 철학을 결합했습니다. 음악의 화음이 수의 비율로 설명된다는 발견은 과학적 세계관의 시초로 평가됩니다."
    },
    "아르투어 쇼펜하우어": {
        nameEn: "Arthur Schopenhauer", wiki: "Arthur_Schopenhauer", desc: "독일 철학자 (1788-1860)",
        bio: "아르투어 쇼펜하우어는 독일의 철학자로, 염세주의 철학의 대표 주자입니다. 단치히(현 그단스크)에서 부유한 상인의 아들로 태어나 여러 나라를 여행한 후 철학에 전념했습니다. 주저 《의지와 표상으로서의 세계》에서 세계의 본질은 맹목적인 '의지'이며 삶은 본질적으로 고통이라고 주장했습니다. 동양 철학, 특히 불교와 힌두교에 깊은 관심을 보인 최초의 서양 철학자 중 한 명이며, 니체, 프로이트, 비트겐슈타인 등에게 큰 영향을 미쳤습니다."
    },
    "앰브로즈 레드문": {
        nameEn: "Ambrose Redmoon", wiki: "", desc: "작가 (1933-1996)",
        bio: "앰브로즈 레드문(본명 제임스 닐 홀링워스)은 미국의 작가이자 히피 문화의 일원이었습니다. '용기란 두려움이 없는 것이 아니라, 두려움보다 중요한 것이 있다는 판단이다'라는 그의 명언은 전 세계적으로 가장 많이 인용되는 용기에 대한 정의 중 하나가 되었습니다."
    },
    "코코 샤넬": {
        nameEn: "Coco Chanel", wiki: "Coco_Chanel", desc: "프랑스 패션 디자이너 (1883-1971)",
        bio: "코코 샤넬(본명 가브리엘 보뇌르 샤넬)은 20세기 패션을 혁신한 프랑스의 디자이너입니다. 고아원에서 자란 불우한 어린 시절을 딛고 파리에서 패션 하우스를 설립했습니다. 코르셋에서 여성을 해방시키고, 리틀 블랙 드레스, 샤넬 수트, 샤넬 No.5 향수 등을 만들어 현대 여성 패션의 기틀을 마련했습니다. '패션은 변하지만 스타일은 영원하다'는 그녀의 철학은 오늘날에도 패션계의 금언으로 통합니다."
    },
    "요한 볼프강 폰 괴테": {
        nameEn: "Johann Wolfgang von Goethe", wiki: "Johann_Wolfgang_von_Goethe", desc: "독일 작가 (1749-1832)",
        bio: "요한 볼프강 폰 괴테는 독일 문학의 최고봉이자 유럽 문학사에서 셰익스피어, 단테와 함께 3대 문호로 꼽히는 인물입니다. 《젊은 베르테르의 슬픔》으로 25세에 유럽적 명성을 얻었고, 60년에 걸쳐 완성한 《파우스트》는 세계 문학의 최고 걸작 중 하나입니다. 문학 외에도 색채론, 식물학, 광물학 등 자연과학에서도 업적을 남겼으며, 바이마르 공국의 재상으로 정치에도 참여한 르네상스적 인물이었습니다."
    },
    "앤드루 잭슨": {
        nameEn: "Andrew Jackson", wiki: "Andrew_Jackson", desc: "미국 제7대 대통령 (1767-1845)",
        bio: "앤드루 잭슨은 미국의 제7대 대통령으로, '평민의 대통령'으로 불린 인물입니다. 사우스캐롤라이나의 가난한 가정에서 태어나 독학으로 변호사가 되었고, 1812년 전쟁에서 영국군을 물리쳐 국민적 영웅이 되었습니다. 대통령으로서 재산이나 신분에 관계없이 모든 백인 남성에게 선거권을 확대하는 등 미국 민주주의를 확장시켰습니다."
    },
    "이순신": {
        nameEn: "Yi Sun-sin", wiki: "Yi_Sun-sin", desc: "조선 시대 장군 (1545-1598)",
        bio: "이순신은 조선 시대의 명장으로, 임진왜란(1592-1598) 당시 23전 23승이라는 전무후무한 기록을 세웠습니다. 특히 12척의 배로 133척의 왜군을 격파한 명량해전은 세계 해전사에서도 유례를 찾기 힘든 기적적 승리입니다. 거북선(귀선)을 개발하여 해전의 패러다임을 바꾸었으며, '죽고자 하면 살 것이고, 살고자 하면 죽을 것이다(必死則生 必生則死)'라는 그의 훈시는 한국인의 정신에 깊이 새겨져 있습니다. 노량해전에서 전사하며 구국의 영웅으로 영원히 기억되고 있습니다."
    },
    "달라이 라마": {
        nameEn: "Dalai Lama", wiki: "14th_Dalai_Lama", desc: "티베트 정신적 지도자 (1935-)",
        bio: "제14대 달라이 라마 텐진 갸초는 티베트의 정신적, 정치적 지도자입니다. 2살에 달라이 라마의 환생으로 인정되었고, 1950년 중국의 티베트 침공 이후 1959년 인도로 망명하여 다람살라에 망명정부를 수립했습니다. 60년 이상 비폭력 저항과 대화를 통한 티베트 자치를 주장해왔으며, 1989년 노벨평화상을 수상했습니다. 불교의 자비와 마음챙김을 현대적 언어로 전파하며, 종교와 과학의 대화를 이끌고 있습니다."
    },
    "투키디데스": {
        nameEn: "Thucydides", wiki: "Thucydides", desc: "고대 그리스 역사가 (BC 460-395)",
        bio: "투키디데스는 고대 아테네의 장군이자 역사가로, '서양 역사학의 아버지'로 불립니다. 《펠로폰네소스 전쟁사》를 저술하여 아테네와 스파르타 간의 전쟁을 기록했으며, 신화나 신의 개입을 배제하고 객관적 사실에 기반한 역사 서술의 선구자가 되었습니다. 국제관계에서의 권력 정치를 분석한 그의 저서는 오늘날에도 정치학, 국제관계학의 필독서입니다."
    },
    "찰스 디킨스": {
        nameEn: "Charles Dickens", wiki: "Charles_Dickens", desc: "영국 소설가 (1812-1870)",
        bio: "찰스 디킨스는 빅토리아 시대 영국을 대표하는 소설가로, 영어권 문학사에서 셰익스피어 다음으로 위대한 작가로 평가받습니다. 아버지가 채무자 감옥에 수감되는 등 어린 시절 가난을 경험했으며, 이 경험이 사회적 약자에 대한 깊은 공감으로 작품에 반영되었습니다. 《올리버 트위스트》, 《크리스마스 캐럴》, 《위대한 유산》, 《두 도시 이야기》 등 수많은 명작을 남겼습니다."
    },
    "마하트마 간디": {
        nameEn: "Mahatma Gandhi", wiki: "Mahatma_Gandhi", desc: "인도 독립운동가 (1869-1948)",
        bio: "마하트마 간디는 인도의 독립운동가이자 비폭력 저항의 상징입니다. 영국 유학을 마치고 남아프리카에서 인종차별에 맞서 싸우며 비폭력 불복종 운동(사티아그라하)을 발전시켰습니다. 인도로 돌아와 소금 행진, 물레질 운동 등으로 영국 식민지배에 저항했으며, 1947년 인도의 독립을 이끌었습니다. '마하트마(위대한 영혼)'라는 존칭으로 불리며, 킹 목사, 만델라 등 후대의 인권 운동가들에게 지대한 영향을 미쳤습니다."
    },
    "시어도어 루스벨트": {
        nameEn: "Theodore Roosevelt", wiki: "Theodore_Roosevelt", desc: "미국 제26대 대통령 (1858-1919)",
        bio: "시어도어 루스벨트는 미국의 제26대 대통령으로, 42세에 미국 역사상 가장 젊은 대통령이 되었습니다. 어린 시절 심한 천식을 앓았지만 운동과 모험으로 극복했으며, 목장주, 작가, 군인 등 다양한 경력을 쌓았습니다. 대통령으로서 독점 기업 규제, 자연보호 정책, 파나마 운하 건설 등을 추진했으며, 러일전쟁 중재로 노벨평화상을 수상했습니다. 러시모어 산에 얼굴이 새겨진 4명의 대통령 중 한 명입니다."
    },
    "허버트 스펜서": {
        nameEn: "Herbert Spencer", wiki: "Herbert_Spencer", desc: "영국 철학자 (1820-1903)",
        bio: "허버트 스펜서는 영국의 철학자, 사회학자로 사회진화론의 창시자입니다. '적자생존(survival of the fittest)'이라는 용어를 만든 것으로 유명하며, 다윈의 진화론을 사회과학에 적용하려 했습니다. 생물학, 심리학, 사회학, 윤리학을 아우르는 방대한 '종합 철학 체계'를 구축했으며, 빅토리아 시대에 가장 영향력 있는 사상가 중 한 명이었습니다."
    },
    "존 C. 맥스웰": {
        nameEn: "John C. Maxwell", wiki: "John_C._Maxwell", desc: "리더십 전문가/작가 (1947-)",
        bio: "존 C. 맥스웰은 세계적인 리더십 전문가이자 베스트셀러 작가입니다. 80권 이상의 책을 저술했으며, 《리더십의 21가지 불변의 법칙》 등은 수백만 부가 판매되었습니다. 목사로 시작하여 리더십 교육자로 변신한 그는, 전 세계 기업, 정부, 군대에서 리더십 훈련을 진행해왔습니다. 'Inc.' 매거진이 선정한 '세계에서 가장 영향력 있는 리더십 전문가 1위'입니다."
    },
    "세종대왕": {
        nameEn: "King Sejong the Great", wiki: "Sejong_the_Great", desc: "조선 제4대 왕 (1397-1450)",
        bio: "세종대왕은 조선의 제4대 왕으로, 한국 역사상 가장 위대한 군주로 추앙받습니다. 가장 큰 업적은 한글(훈민정음)의 창제로, 백성 누구나 쉽게 읽고 쓸 수 있는 문자를 만들어 지식의 민주화를 이루었습니다. 이 외에도 측우기, 해시계, 물시계 등 과학 기구를 발명하게 하고, 음악, 의학, 농업, 군사 등 전 분야에서 혁신을 이끌었습니다. 만원 지폐의 인물이며, '세종'이라는 묘호 자체가 '세상을 다스리는 으뜸'이라는 뜻입니다."
    },
    "알베르트 슈바이처": {
        nameEn: "Albert Schweitzer", wiki: "Albert_Schweitzer", desc: "독일 신학자/의사/노벨평화상 (1875-1965)",
        bio: "알베르트 슈바이처는 독일 출신의 신학자, 음악가, 철학자, 의사입니다. 스트라스부르 대학의 신학 교수이자 뛰어난 오르간 연주자였으나, 30세에 '직접 봉사하겠다'는 결심으로 의학을 공부하기 시작했습니다. 38세에 아프리카 가봉의 랑바레네에 병원을 세우고 50년간 열대 의학에 헌신했습니다. '생명에 대한 경외'를 핵심 철학으로 삼았으며, 1952년 노벨평화상을 수상했습니다."
    },
    "나폴레옹 보나파르트": {
        nameEn: "Napoleon Bonaparte", wiki: "Napoleon", desc: "프랑스 황제 (1769-1821)",
        bio: "나폴레옹 보나파르트는 프랑스 혁명의 혼란 속에서 군사적 천재성으로 권력을 장악하여 프랑스 황제가 된 인물입니다. 코르시카 섬의 하급 귀족 출신으로 포병 장교에서 출발하여 유럽 대부분을 정복했습니다. 나폴레옹 법전을 편찬하여 근대 법률 체계의 기초를 놓았고, 미터법 도입 등 행정 개혁을 단행했습니다. 러시아 원정 실패와 워털루 전투 패배 후 세인트헬레나 섬에 유배되어 생을 마감했습니다."
    },
    "마거릿 대처": {
        nameEn: "Margaret Thatcher", wiki: "Margaret_Thatcher", desc: "영국 전 총리 (1925-2013)",
        bio: "마거릿 대처는 영국 최초의 여성 총리이자 20세기 가장 영향력 있는 정치인 중 한 명입니다. 식료품점 주인의 딸로 태어나 옥스퍼드에서 화학을 전공한 후 정치에 입문했습니다. 1979년부터 11년간 총리를 역임하며 대처리즘으로 알려진 강력한 경제 개혁을 추진했습니다. 노조 개혁, 국영기업 민영화, 포클랜드 전쟁 승리 등으로 '철의 여인'이라는 별명을 얻었습니다."
    },
    "아리스토텔레스": {
        nameEn: "Aristotle", wiki: "Aristotle", desc: "고대 그리스 철학자 (BC 384-322)",
        bio: "아리스토텔레스는 플라톤의 제자이자 알렉산더 대왕의 스승으로, 서양 학문의 거의 모든 분야를 개척한 인물입니다. 논리학, 물리학, 형이상학, 윤리학, 정치학, 생물학, 시학 등에서 체계적인 저술을 남겼으며, 그의 논리학은 2천 년간 서양 사고의 기본 틀이 되었습니다. '모든 인간은 본성적으로 앎을 추구한다'는 그의 《형이상학》 첫 문장은 학문에 대한 인간의 근본적 열망을 표현합니다."
    },
    "파블로 피카소": {
        nameEn: "Pablo Picasso", wiki: "Pablo_Picasso", desc: "스페인 화가 (1881-1973)",
        bio: "파블로 피카소는 20세기 미술을 대표하는 스페인 출신의 화가이자 조각가입니다. 입체파를 창시하여 미술의 역사를 바꾸었으며, 91세까지 왕성하게 활동하며 5만 점 이상의 작품을 남겼습니다. 청색시대, 장밋빛시대, 입체파, 신고전주의, 초현실주의 등 끊임없이 화풍을 변화시켰으며, 《게르니카》는 전쟁의 참상을 고발하는 20세기 가장 유명한 그림 중 하나입니다."
    },
    "헤라클레이토스": {
        nameEn: "Heraclitus", wiki: "Heraclitus", desc: "고대 그리스 철학자 (BC 535-475)",
        bio: "헤라클레이토스는 에페소스 출신의 고대 그리스 철학자로, '만물은 유전한다(panta rhei)'는 명제로 유명합니다. '같은 강물에 두 번 발을 담글 수 없다'는 비유를 통해 변화가 우주의 본질이라고 주장했습니다. 불(火)을 만물의 근원으로 보았으며, 대립물의 통일과 투쟁이 세계를 움직이는 원리라는 변증법적 사고의 선구자입니다. 난해한 문체 때문에 '어두운 철학자'라는 별명을 얻었습니다."
    },
    "잭 웰치": {
        nameEn: "Jack Welch", wiki: "Jack_Welch", desc: "GE 전 CEO (1935-2020)",
        bio: "잭 웰치는 1981년부터 2001년까지 20년간 제너럴 일렉트릭(GE)의 CEO를 역임하며 기업 가치를 약 4,000% 성장시킨 경영의 전설입니다. 매사추세츠의 노동자 가정에서 태어나 화학 박사 학위를 취득한 후 GE에 입사했습니다. '중성자 잭'이라는 별명에서 알 수 있듯 과감한 구조조정과 효율화를 단행했으며, 식스시그마 경영을 도입하여 품질 혁신을 이끌었습니다."
    },
    "찰스 다윈": {
        nameEn: "Charles Darwin", wiki: "Charles_Darwin", desc: "영국 자연과학자 (1809-1882)",
        bio: "찰스 다윈은 영국의 자연과학자로, 진화론을 통해 생물학과 인류의 세계관을 근본적으로 바꾼 인물입니다. 비글호를 타고 5년간의 세계 항해에서 관찰한 자료를 바탕으로 자연선택에 의한 진화 이론을 발전시켰으며, 《종의 기원》(1859)에서 이를 체계적으로 발표했습니다. 갈라파고스 제도의 핀치새 관찰은 그의 이론의 핵심 증거가 되었습니다."
    },
    "도널드 트럼프": {
        nameEn: "Donald Trump", wiki: "Donald_Trump", desc: "미국 전 대통령/기업인 (1946-)",
        bio: "도널드 트럼프는 미국의 부동산 재벌이자 제45대 대통령입니다. 뉴욕에서 부동산 사업가의 아들로 태어나 트럼프 오거니제이션을 이끌며 호텔, 카지노, 골프장 등으로 사업을 확장했습니다. TV 리얼리티 쇼 《어프렌티스》로 대중적 인지도를 높였고, 2016년 정치 경험 없이 대통령에 당선되어 세계를 놀라게 했습니다. '거래의 기술'을 비롯한 여러 저서를 냈으며, 독특한 소통 방식과 대담한 목표 설정으로 알려져 있습니다."
    },
    "J.M. 파워": {
        nameEn: "J.M. Power", wiki: "", desc: "작가",
        bio: "J.M. 파워는 동기부여 분야의 작가로, '꿈을 이루려면 먼저 깨어 있어야 한다'라는 명언으로 널리 알려진 인물입니다. 꿈과 현실 사이의 간극을 의식적 노력으로 메울 것을 강조하는 그의 메시지는 자기계발 문헌에서 꾸준히 인용되고 있습니다."
    },
    "해리엇 터브먼": {
        nameEn: "Harriet Tubman", wiki: "Harriet_Tubman", desc: "미국 노예 해방 운동가 (1822-1913)",
        bio: "해리엇 터브먼은 태어날 때부터 노예였으나 1849년에 탈출에 성공한 후, 지하철도(Underground Railroad)라 불리는 비밀 조직망을 통해 13번의 구출 작전으로 70명 이상의 노예를 자유로 이끌었습니다. 남북전쟁 중에는 북군의 정찰병과 간호사로 활동했으며, 전쟁 후에는 여성 참정권 운동에 참여했습니다. '흑인의 모세'로 불리며, 미국 20달러 지폐의 새 인물로 선정되었습니다."
    },
    "페리클레스": {
        nameEn: "Pericles", wiki: "Pericles", desc: "고대 그리스 정치가 (BC 495-429)",
        bio: "페리클레스는 아테네 민주주의의 황금기를 이끈 정치가이자 장군입니다. 30년 이상 아테네의 사실상 지도자로서 민주주의 제도를 완성하고, 파르테논 신전 등 아크로폴리스의 건축 사업을 주도했습니다. 예술과 철학을 장려하여 소크라테스, 소포클레스, 헤로도토스 등이 활동하는 문화 환경을 조성했습니다. 투키디데스가 기록한 그의 장례 연설은 민주주의의 가치를 가장 감동적으로 표현한 연설로 남아 있습니다."
    },
    "벤자민 프랭클린": {
        nameEn: "Benjamin Franklin", wiki: "Benjamin_Franklin", desc: "미국 건국의 아버지 (1706-1790)",
        bio: "벤자민 프랭클린은 미국 건국의 아버지 중 한 명이자 과학자, 발명가, 외교관, 작가입니다. 보스턴의 양초 제조공 아들로 태어나 독학으로 인쇄업자가 되었고, 번개가 전기임을 증명하는 연 실험으로 유명합니다. 피뢰침, 이중초점 안경, 프랭클린 스토브 등을 발명했으며, 미국 독립선언서와 헌법 작성에 참여한 유일한 인물 중 한 명입니다. 100달러 지폐의 인물입니다."
    },
    "윌리엄 펜": {
        nameEn: "William Penn", wiki: "William_Penn", desc: "미국 펜실베이니아 건설자 (1644-1718)",
        bio: "윌리엄 펜은 영국의 퀘이커교도이자 펜실베이니아 식민지의 건설자입니다. 부유한 해군 제독의 아들이었으나 퀘이커교에 입교하여 종교적 박해를 받았고, 신앙의 자유를 찾아 신대륙에 펜실베이니아를 건설했습니다. 종교적 관용과 민주적 자치를 실천하여 다양한 배경의 이민자들이 공존하는 식민지를 만들었으며, 이는 후에 미국 민주주의의 모범이 되었습니다."
    },
    "한비자": {
        nameEn: "Han Feizi", wiki: "Han_Fei", desc: "중국 고대 법가 사상가 (BC 280-233)",
        bio: "한비자는 중국 전국시대 한나라 출신의 사상가로, 법가 사상을 집대성한 인물입니다. 순자에게 배웠으며, 동문인 이사와 함께 진시황에게 큰 영향을 미쳤습니다. 법(法), 술(術), 세(勢)를 통치의 세 축으로 제시하여 법치주의의 기초를 놓았으며, 진시황의 중국 통일에 사상적 기반을 제공했습니다. 《한비자》 55편을 저술했으나, 정치적 모함에 의해 진나라 감옥에서 독을 마시고 세상을 떠났습니다."
    }
};

// ===== QUOTES DATA =====
const quotes = [
    // 인생/철학
    { text: "삶이 있는 한 희망은 있다.", author: "키케로", category: "인생",
      commentary: "키케로는 로마 공화정 말기의 정치가이자 웅변가였습니다. 정치적 격변 속에서도 끝까지 공화정의 이상을 포기하지 않았던 그는, 어떤 상황에서도 삶 자체가 가능성의 근거라는 확신을 가지고 있었습니다. 이 명언은 절망적인 순간에도 생존 자체가 반전의 씨앗이라는 메시지를 담고 있습니다." },
    { text: "검사하지 않은 삶은 살 가치가 없다.", author: "소크라테스", category: "인생",
      commentary: "소크라테스의 재판 기록인 『소크라테스의 변론』에서 나온 이 말은, 서양 철학의 근본 정신을 요약합니다. 그는 사형 선고 앞에서도 자신의 신념을 굽히지 않으며 이 말을 남겼습니다. '검사한다'는 것은 단순한 반성이 아니라, 자신의 믿음과 행동의 근거를 끊임없이 질문하는 비판적 사고를 의미합니다." },
    { text: "인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다.", author: "찰리 채플린", category: "인생",
      commentary: "무성영화 시대의 전설적인 코미디언 채플린은 런던 빈민가에서 자라 할리우드 최고의 스타가 된 인물입니다. 가난과 고난을 웃음으로 승화시킨 그의 예술 세계가 이 한 마디에 응축되어 있습니다." },
    { text: "우리가 두려워해야 할 것은 두려움 그 자체뿐이다.", author: "프랭클린 D. 루스벨트", category: "인생",
      commentary: "1933년 대공황 한복판에서의 취임 연설에 등장한 이 명언은, 경제적 파탄으로 공포에 빠진 미국 국민에게 용기를 준 역사적 한마디입니다." },
    { text: "삶은 자전거를 타는 것과 같다. 균형을 잡으려면 계속 움직여야 한다.", author: "알베르트 아인슈타인", category: "인생",
      commentary: "1930년 아들 에두아르트에게 보낸 편지에서 이 비유를 사용했는데, 정체는 곧 쓰러짐이라는 물리적 진실을 인생의 지혜로 연결한 것이 특징입니다." },
    { text: "산다는 것은 호흡하는 것이 아니라 행동하는 것이다.", author: "장 자크 루소", category: "인생",
      commentary: "프랑스 계몽주의를 대표하는 사상가 루소는 『에밀』에서 교육의 본질을 탐구하며 이 말을 남겼습니다. 진정한 삶이란 의지를 가지고 세상과 관계를 맺는 능동적 행위입니다." },
    { text: "인생에서 가장 중요한 것은 자신의 길을 찾는 것이다.", author: "헤르만 헤세", category: "인생",
      commentary: "『데미안』, 『싯다르타』 등으로 자아 탐구의 문학을 개척한 헤세는 평생 '자기 자신이 되는 것'의 중요성을 역설했습니다." },
    { text: "삶이란 우리가 다른 계획을 세우느라 바쁠 때 일어나는 것이다.", author: "존 레논", category: "인생",
      commentary: "비틀즈의 리더이자 평화 운동가였던 존 레논의 이 말은 곡 'Beautiful Boy'에 담겨 있습니다. 40세에 총격으로 세상을 떠난 그의 삶이 이 명언에 더 깊은 울림을 더합니다." },
    { text: "살아 있다는 것 자체가 기적이다.", author: "틱낫한", category: "인생",
      commentary: "베트남 전쟁 중 평화 운동을 이끌며 마틴 루터 킹에 의해 노벨평화상 후보로 추천된 틱낫한 스님은 '마음챙김(mindfulness)'의 세계적 전파자입니다." },
    { text: "인생은 짧고 예술은 길다.", author: "히포크라테스", category: "인생",
      commentary: "의학의 아버지 히포크라테스가 남긴 이 격언은 원래 의술을 배우는 데는 인생이 너무 짧다는 뜻이었습니다. 2400년이 지난 지금도 모든 분야의 장인들에게 통용되는 진리입니다." },

    // 성공/동기부여
    { text: "천 리 길도 한 걸음부터 시작된다.", author: "노자", category: "성공",
      commentary: "도가 사상의 창시자 노자의 『도덕경』 64장에 나오는 이 말은 동양 철학의 정수를 담고 있습니다." },
    { text: "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. 계속하는 용기가 중요하다.", author: "윈스턴 처칠", category: "성공",
      commentary: "제2차 세계대전 당시 영국을 이끈 처칠은 여러 번 실각했다가 다시 복귀한 그의 인생 자체가 이 명언의 살아있는 증거입니다." },
    { text: "나는 실패한 적이 없다. 나는 효과가 없는 만 가지 방법을 발견한 것이다.", author: "토마스 에디슨", category: "성공",
      commentary: "1,093개의 특허를 보유한 에디슨은 전구 하나를 완성하기까지 수천 번의 실험을 반복했습니다. 이 사고방식은 현대 스타트업의 '빠른 실패, 빠른 학습' 정신의 원형입니다." },
    { text: "위대한 일을 하는 유일한 방법은 하는 일을 사랑하는 것이다.", author: "스티브 잡스", category: "성공",
      commentary: "2005년 스탠퍼드 대학교 졸업식 연설에서 나온 이 말은 잡스 철학의 핵심입니다." },
    { text: "미래는 자신의 꿈의 아름다움을 믿는 사람들에게 속한다.", author: "엘리너 루스벨트", category: "성공",
      commentary: "유엔 세계인권선언의 주도자였던 엘리너는 꿈을 현실로 만드는 첫 번째 조건이 자기 확신이라는 메시지를 전합니다." },
    { text: "나에게 여섯 시간을 주어 나무를 자르게 한다면, 나는 처음 네 시간을 도끼를 가는 데 쓰겠다.", author: "에이브러햄 링컨", category: "성공",
      commentary: "노예해방 선언으로 미국 역사의 방향을 바꾼 링컨은 철저한 준비가 효율적인 실행의 핵심이라는 교훈을 이 비유로 전합니다." },
    { text: "할 수 있다고 믿든, 할 수 없다고 믿든, 당신이 옳다.", author: "헨리 포드", category: "성공",
      commentary: "이 명언은 자기실현적 예언의 원리를 표현한 것으로, 믿음이 행동을 결정하고 행동이 결과를 결정한다는 심리학적 진실을 담고 있습니다." },
    { text: "기회는 일어나는 것이 아니라 만드는 것이다.", author: "크리스 그로서", category: "성공",
      commentary: "수동적으로 기회를 기다리는 것이 아니라 능동적으로 기회를 창출해야 한다는 기업가 정신의 핵심을 표현합니다." },
    { text: "배움에는 왕도가 없다.", author: "유클리드", category: "성공",
      commentary: "기하학의 아버지 유클리드가 프톨레마이오스 1세에게 한 말로, 학문의 길에서는 지름길이 없다는 평등한 진리를 담고 있습니다." },
    { text: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.", author: "윈스턴 처칠", category: "성공",
      commentary: "처칠의 정치 인생은 실패와 좌절의 연속이었습니다. 65세에 총리가 된 그는 '늦은 성공'의 대명사입니다." },

    // 사랑
    { text: "사랑받는 것은 좋은 일이지만, 사랑하는 것이야말로 진정한 행복이다.", author: "헤르만 헤세", category: "사랑",
      commentary: "헤세는 사랑의 본질이 받는 것이 아닌 주는 것에 있다고 보았습니다. 능동적으로 사랑하는 행위 자체가 인간을 성장시킨다는 통찰입니다." },
    { text: "어둠으로 어둠을 몰아낼 수 없다. 오직 빛만이 그렇게 할 수 있다. 미움으로 미움을 몰아낼 수 없다. 오직 사랑만이 그렇게 할 수 있다.", author: "마틴 루터 킹 주니어", category: "사랑",
      commentary: "비폭력 저항의 상징인 킹 목사는 폭력이나 증오에 같은 방식으로 대응하는 것은 악순환만 낳는다는 깨달음을 표현합니다." },
    { text: "사랑은 언제나 인내하고 친절합니다.", author: "사도 바울", category: "사랑",
      commentary: "신약성경 고린도전서 13장에 나오는 이 구절은 2천 년간 결혼식과 예배에서 가장 많이 인용되는 사랑의 정의입니다." },
    { text: "가장 좋은 것은 사랑하는 것이고, 그 다음으로 좋은 것은 사랑받는 것이다.", author: "빅토르 위고", category: "사랑",
      commentary: "『레미제라블』의 작가 빅토르 위고는 사랑의 능동성을 강조했습니다." },
    { text: "사랑할 때 우리는 가장 살아있다.", author: "존 업다이크", category: "사랑",
      commentary: "퓰리처상을 두 번 수상한 업다이크는 사랑이 인간의 모든 감각과 의식을 가장 생생하게 깨운다는 존재론적 관찰을 담았습니다." },
    { text: "세상에서 가장 아름다운 것은 보이거나 만져지는 것이 아니라 마음으로 느끼는 것이다.", author: "헬렌 켈러", category: "사랑",
      commentary: "19개월에 시각과 청각을 잃은 헬렌 켈러이기에 마음의 감각이 더 본질적이라는 이 통찰은 특별한 무게를 가집니다." },

    // 지혜
    { text: "아는 것이 힘이다.", author: "프랜시스 베이컨", category: "지혜",
      commentary: "근대 경험론의 아버지 베이컨은 지식이 세상을 변화시키는 실질적 도구라는 근대적 세계관을 선언했습니다." },
    { text: "배우고 때때로 익히면 또한 즐겁지 아니한가.", author: "공자", category: "지혜",
      commentary: "『논어』의 첫 문장이자 동양 교육 철학의 출발점입니다. 배움(學)과 실천(習)이 결합될 때 기쁨(悅)이 생긴다고 보았습니다." },
    { text: "한 가지를 알면 열 가지를 안다.", author: "공자", category: "지혜",
      commentary: "하나를 들으면 열을 안다(聞一知十)는 원리의 이해를 통한 유추 능력을 높이 산 것입니다." },
    { text: "나 자신을 알라.", author: "소크라테스", category: "지혜",
      commentary: "원래 델포이 아폴론 신전에 새겨져 있던 격언으로, 소크라테스가 자신의 철학의 모토로 삼았습니다." },
    { text: "교육은 가장 강력한 무기이며, 그것으로 세상을 바꿀 수 있다.", author: "넬슨 만델라", category: "지혜",
      commentary: "27년간 감옥에서 교육을 통해 희망을 잃지 않았던 만델라는 교육이 불평등을 근본적으로 해결할 수 있는 유일한 도구라고 확신했습니다." },
    { text: "진정한 지혜는 자신이 아무것도 모른다는 것을 아는 것이다.", author: "소크라테스", category: "지혜",
      commentary: "소크라테스적 무지로 알려진 이 개념은 독단을 경계하고 끊임없이 질문하라는 비판적 사고의 원형입니다." },
    { text: "지혜로운 사람은 말을 적게 하고 많이 듣는다.", author: "피타고라스", category: "지혜",
      commentary: "피타고라스는 제자들에게 처음 5년간 침묵 수행을 시켰다고 전해집니다. 지식의 습득은 경청에서 시작됩니다." },
    { text: "독서란 자신의 머리로 다른 사람의 생각을 하는 것이다.", author: "아르투어 쇼펜하우어", category: "지혜",
      commentary: "쇼펜하우어는 독서의 양면성을 지적했습니다. 읽은 것을 자신의 것으로 소화하는 '사색'의 중요성을 강조한 것입니다." },

    // 용기
    { text: "용기란 두려움이 없는 것이 아니라, 두려움보다 중요한 것이 있다는 판단이다.", author: "앰브로즈 레드문", category: "용기",
      commentary: "용감한 사람도 두려움을 느끼며, 차이는 두려움에도 불구하고 행동하느냐에 있습니다." },
    { text: "세상에서 가장 용감한 행동은 스스로 생각하고 그것을 큰 소리로 말하는 것이다.", author: "코코 샤넬", category: "용기",
      commentary: "코르셋에서 여성을 해방시키고 현대 패션의 기틀을 마련한 샤넬의 삶은 이 명언의 완벽한 실증입니다." },
    { text: "당신이 할 수 있는 일, 꿈꿀 수 있는 일이라면, 시작하라. 대담함 속에 천재성, 힘, 그리고 마법이 있다.", author: "요한 볼프강 폰 괴테", category: "용기",
      commentary: "『파우스트』로 독일 문학의 정점을 이룬 괴테는 과감한 첫 걸음이 모든 것을 바꿀 수 있다는 통찰을 전합니다." },
    { text: "한 사람의 용기는 다수를 만든다.", author: "앤드루 잭슨", category: "용기",
      commentary: "한 사람이 먼저 용기를 내면 주변 사람들에게 전파되어 연쇄반응을 일으킨다는 관찰입니다." },
    { text: "칼을 들어야 칼을 쓸 수 있고, 붓을 들어야 붓을 쓸 수 있다. 먼저 시작해야 한다.", author: "이순신", category: "용기",
      commentary: "임진왜란에서 23전 23승의 신화를 쓴 충무공 이순신은 준비와 실행의 용기가 불가능을 가능으로 바꿀 수 있음을 보여주었습니다." },
    { text: "위대한 영광은 한 번도 넘어지지 않는 데 있는 것이 아니라, 넘어질 때마다 일어서는 데 있다.", author: "공자", category: "용기",
      commentary: "공자 자신도 정치적 이상을 실현하기 위해 여러 나라를 떠돌았지만 번번이 좌절을 겪었습니다. 회복탄력성의 원형입니다." },

    // 행복
    { text: "행복은 완성품이 아니다. 행복은 자신의 행동에서 나온다.", author: "달라이 라마", category: "행복",
      commentary: "달라이 라마는 행복을 외부 조건이 아닌 내면의 수련을 통해 달성하는 것으로 봅니다. 현대 긍정심리학의 연구 결과와도 일치합니다." },
    { text: "행복의 비결은 자유이고 자유의 비결은 용기이다.", author: "투키디데스", category: "행복",
      commentary: "페리클레스의 장례 연설에서 인용한 것으로, 행복-자유-용기가 연쇄적으로 연결되어 있다는 통찰입니다." },
    { text: "가장 행복한 사람은 모든 것을 가진 사람이 아니라 가진 것에 감사하는 사람이다.", author: "찰스 디킨스", category: "행복",
      commentary: "디킨스는 소유의 양이 아닌 감사의 자세가 행복을 결정한다는 것을 작품 곳곳에서 보여주었습니다." },
    { text: "행복은 당신이 생각하는 것, 당신이 말하는 것, 당신이 하는 것이 조화를 이룰 때 온다.", author: "마하트마 간디", category: "행복",
      commentary: "간디는 생각-말-행동이 하나로 정렬될 때 비로소 마음의 평화가 온다는 통합적 인간관을 표현합니다." },
    { text: "남과 비교하지 말라. 비교는 행복의 도둑이다.", author: "시어도어 루스벨트", category: "행복",
      commentary: "SNS 시대인 오늘날 이 명언은 더욱 절실합니다. 현대 심리학에서 '사회적 비교 이론'으로 검증되고 있습니다." },
    { text: "행복은 습관이다. 그것을 몸에 지녀라.", author: "허버트 스펜서", category: "행복",
      commentary: "현대 신경과학에서 긍정적 사고 패턴이 반복되면 뇌의 신경회로가 재구성된다는 '신경가소성' 원리로 과학적으로 입증되고 있습니다." },

    // 리더십
    { text: "리더는 길을 알고, 길을 가고, 길을 보여주는 사람이다.", author: "존 C. 맥스웰", category: "리더십",
      commentary: "리더의 세 가지 필수 역할 — 비전(알고), 실행(가고), 소통(보여주고)을 명료하게 정리한 것입니다." },
    { text: "백성을 두려워해야 하는 것은 군주이지, 군주를 두려워해야 하는 것은 백성이 아니다.", author: "세종대왕", category: "리더십",
      commentary: "한글을 창제한 세종대왕은 민본주의의 실천자였습니다. 권력의 원천이 백성에게 있다는 혁명적 사상입니다." },
    { text: "모범을 보이는 것은 다른 사람에게 영향을 미치는 주된 방법이 아니라 유일한 방법이다.", author: "알베르트 슈바이처", category: "리더십",
      commentary: "아프리카 가봉에 병원을 세우고 평생을 바친 슈바이처는 말이 아닌 행동으로 가르치는 것이 유일하게 효과적인 영향력임을 증명했습니다." },
    { text: "불가능이란 노력하지 않는 자의 변명이다.", author: "나폴레옹 보나파르트", category: "리더십",
      commentary: "코르시카 섬의 하급 귀족 출신으로 프랑스 황제까지 오른 나폴레옹은 한계를 미리 설정하지 않는 도전 정신의 상징입니다." },
    { text: "위대한 지도자는 시대가 만드는 것이 아니라 스스로 시대를 만든다.", author: "마거릿 대처", category: "리더십",
      commentary: "영국 최초의 여성 총리 마거릿 대처는 환경을 탓하기보다 주도적으로 변화를 이끌어야 한다는 능동적 리더십을 실천했습니다." },

    // 창의성
    { text: "상상력은 지식보다 중요하다.", author: "알베르트 아인슈타인", category: "창의성",
      commentary: "아인슈타인은 상대성이론을 '빛을 타고 달리면 어떨까'라는 사고실험에서 출발시켰습니다." },
    { text: "창의성은 즐기는 지성이다.", author: "알베르트 아인슈타인", category: "창의성",
      commentary: "특허청에 근무하며 물리학의 혁명적 논문들을 썼던 1905년은, 순수한 지적 즐거움에서 위대한 발견이 탄생할 수 있음을 보여줍니다." },
    { text: "예술은 자연이 만들지 않는 것을 만든다.", author: "아리스토텔레스", category: "창의성",
      commentary: "플라톤의 제자이자 알렉산더 대왕의 스승인 아리스토텔레스는 인간 창조 능력의 고유성을 최초로 철학적으로 정의했습니다." },
    { text: "창의성은 연결하는 능력이다. 경험을 연결하여 새로운 것을 만들어내는 것이다.", author: "스티브 잡스", category: "창의성",
      commentary: "잡스가 우연히 들은 캘리그래피 수업이 매킨토시의 아름다운 서체로 이어진 것은 '점을 연결하라'는 조언의 원형입니다." },
    { text: "모든 아이는 예술가다. 문제는 어른이 되어서도 예술가로 남아 있는 것이다.", author: "파블로 피카소", category: "창의성",
      commentary: "91세까지 5만 점 이상의 작품을 남긴 피카소는 자유로운 상상력이 교육 과정에서 억압된다는 것을 지적합니다." },
    { text: "규칙을 배워라. 그래야 규칙을 제대로 깰 수 있다.", author: "달라이 라마", category: "창의성",
      commentary: "기존 규칙을 이해한 후 한계를 인식하고 넘어서는 것이 진정한 창의성입니다." },

    // 변화
    { text: "세상에서 유일하게 변하지 않는 것은 모든 것이 변한다는 사실이다.", author: "헤라클레이토스", category: "변화",
      commentary: "'만물은 유전한다'는 명제로 유명한 헤라클레이토스는 변화 자체를 우주의 본질로 파악했습니다." },
    { text: "세상을 바꾸고 싶다면 먼저 자신을 바꿔라.", author: "마하트마 간디", category: "변화",
      commentary: "간디는 세상의 변화가 개인의 내면적 변화에서 시작된다는 신념을 소금 행진, 물레질 운동 등으로 직접 보여주었습니다." },
    { text: "변화를 두려워하지 마라. 변화하지 않는 것을 두려워하라.", author: "잭 웰치", category: "변화",
      commentary: "20년간 GE의 CEO로서 기업 가치를 4,000% 이상 성장시킨 잭 웰치는 변화를 생존의 조건으로 보았습니다." },
    { text: "가장 강한 종이 살아남는 것이 아니라 변화에 가장 잘 적응하는 종이 살아남는다.", author: "찰스 다윈", category: "변화",
      commentary: "다윈의 이 통찰은 생물학을 넘어 급변하는 디지털 시대 기업의 생존에도 적용됩니다." },
    { text: "어제와 같은 방법을 쓰면서 다른 결과를 기대하는 것은 미친 짓이다.", author: "알베르트 아인슈타인", category: "변화",
      commentary: "변화 없이 다른 결과를 기대하는 인간의 모순을 꼬집으며, 접근 방식 자체를 바꿔야 한다는 교훈입니다." },

    // 꿈
    { text: "꿈을 크게 꿔라. 꿈이 작으면 가슴 뛸 일이 없다.", author: "도널드 트럼프", category: "꿈",
      commentary: "목표를 크게 설정하면 그에 맞는 전략과 에너지가 따라온다는 것이 그의 경험적 교훈입니다." },
    { text: "나에게는 꿈이 있습니다.", author: "마틴 루터 킹 주니어", category: "꿈",
      commentary: "1963년 워싱턴 링컨 기념관 앞에서 25만 명에게 울린 이 말은 20세기 가장 위대한 연설의 시작입니다." },
    { text: "꿈을 이루려면 먼저 깨어 있어야 한다.", author: "J.M. 파워", category: "꿈",
      commentary: "꿈꾸는 것과 꿈을 실현하는 것 사이에는 의식적 노력이라는 다리가 필요합니다." },
    { text: "모든 위대한 꿈은 꿈꾸는 사람으로부터 시작된다.", author: "해리엇 터브먼", category: "꿈",
      commentary: "태어날 때부터 노예였던 터브먼은 300명 이상의 노예를 자유로 이끈 용기와 지략의 전설입니다." },
    { text: "현실에 발을 딛고 꿈을 향해 두 손을 뻗어라.", author: "빅토르 위고", category: "꿈",
      commentary: "위고의 이 명언은 이상주의와 현실주의의 완벽한 균형을 표현합니다." },

    // 시간
    { text: "시간은 가장 현명한 상담자이다.", author: "페리클레스", category: "시간",
      commentary: "아테네 민주주의의 황금기를 이끈 페리클레스는 급한 판단보다 시간이 가져다주는 객관적 시각을 신뢰했습니다." },
    { text: "오늘 할 수 있는 일을 내일로 미루지 마라.", author: "벤자민 프랭클린", category: "시간",
      commentary: "과학자, 발명가, 외교관인 프랭클린은 시간 관리의 대가였습니다. 미루기의 해로움을 경고합니다." },
    { text: "시간은 우리가 가장 원하는 것이면서 가장 낭비하는 것이다.", author: "윌리엄 펜", category: "시간",
      commentary: "시간에 대한 인간의 모순적 태도를 꼬집습니다. 스마트폰 시대에 더욱 절실한 경고입니다." },
    { text: "과거에서 배우고, 현재를 살고, 미래를 향해 희망하라.", author: "알베르트 아인슈타인", category: "시간",
      commentary: "시간의 상대성을 과학적으로 증명한 아인슈타인이 삶에서의 시간에 대해 남긴 균형 잡힌 시간관입니다." },
    { text: "가장 좋은 때는 지금이다.", author: "한비자", category: "시간",
      commentary: "법가 사상을 집대성한 한비자는 완벽한 시기를 기다리는 것은 영원히 시작하지 않는 것과 같다고 보았습니다." },
];

// ===== CATEGORIES =====
const categories = [...new Set(quotes.map(q => q.category))];

// ===== UNIQUE PEOPLE =====
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

// ===== WIKIPEDIA IMAGE CACHE =====
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
    } catch {
        return null;
    }
}

// ===== LIKE SYSTEM =====
function getLikes() {
    try {
        return JSON.parse(localStorage.getItem('quoteLikes') || '{}');
    } catch { return {}; }
}

function saveLikes(likes) {
    localStorage.setItem('quoteLikes', JSON.stringify(likes));
}

function getQuoteId(q) {
    return btoa(unescape(encodeURIComponent(q.text.slice(0, 30) + q.author))).replace(/[^a-zA-Z0-9]/g, '');
}

function toggleLike(quoteId) {
    const likes = getLikes();
    if (likes[quoteId]) {
        delete likes[quoteId];
    } else {
        likes[quoteId] = true;
    }
    saveLikes(likes);
    return !!likes[quoteId];
}

function isLiked(quoteId) {
    return !!getLikes()[quoteId];
}

function getLikeCount() {
    return Object.keys(getLikes()).length;
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
    const p = people[q.author] || {};
    document.getElementById('dailyQuoteText').textContent = q.text;
    document.getElementById('dailyQuoteAuthor').textContent = `${q.author} (${p.nameEn || ''}) — ${p.desc || ''}`;
}

// ===== RENDER QUOTE CARD =====
function renderQuoteCard(q) {
    const p = people[q.author] || {};
    const qId = getQuoteId(q);
    const liked = isLiked(qId);

    const card = document.createElement('article');
    card.className = 'quote-card';
    card.innerHTML = `
        <span class="quote-category">${q.category}</span>
        <div class="quote-icon">\u201C</div>
        <p class="quote-text">${q.text}</p>
        <div class="quote-commentary">${q.commentary}</div>
        <div class="quote-actions">
            <button class="like-btn ${liked ? 'liked' : ''}" data-qid="${qId}" aria-label="좋아요">
                <span class="like-icon">${liked ? '\u2764\uFE0F' : '\u2661'}</span>
                <span class="like-label">${liked ? '좋아요 취소' : '좋아요'}</span>
            </button>
        </div>
        <div class="quote-footer">
            <div class="author-avatar" data-wiki="${p.wiki || ''}" data-author="${q.author}">${getInitials(q.author)}</div>
            <div class="author-info">
                <div class="author-name author-link" data-author="${q.author}">${q.author}</div>
                <div class="author-desc">${p.desc || ''}</div>
            </div>
        </div>
    `;

    // Like button
    card.querySelector('.like-btn').addEventListener('click', (e) => {
        const btn = e.currentTarget;
        const isNowLiked = toggleLike(qId);
        btn.classList.toggle('liked', isNowLiked);
        btn.querySelector('.like-icon').textContent = isNowLiked ? '\u2764\uFE0F' : '\u2661';
        btn.querySelector('.like-label').textContent = isNowLiked ? '좋아요 취소' : '좋아요';
        updateLikeCounter();
    });

    // Author click -> person detail
    card.querySelectorAll('.author-link, .author-avatar').forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
            const personData = getUniquePeople().find(pp => pp.name === q.author);
            if (personData) showPersonQuotes(personData);
        });
    });

    // Load image for avatar
    if (p.wiki) {
        const avatar = card.querySelector('.author-avatar');
        getWikiImage(p.wiki).then(url => {
            if (url) {
                avatar.style.backgroundImage = `url(${url})`;
                avatar.style.backgroundSize = 'cover';
                avatar.style.backgroundPosition = 'center';
                avatar.textContent = '';
            }
        });
    }

    return card;
}

// ===== LIKE COUNTER =====
function updateLikeCounter() {
    const counter = document.getElementById('likeCounter');
    if (counter) {
        const count = getLikeCount();
        counter.textContent = count > 0 ? `\u2764\uFE0F ${count}개의 명언을 좋아합니다` : '';
        counter.style.display = count > 0 ? 'block' : 'none';
    }
}

// ===== CATEGORY TABS =====
function renderCategoryTabs() {
    const container = document.getElementById('categoryTabs');
    categories.forEach((cat, i) => {
        const btn = document.createElement('button');
        btn.className = 'category-tab' + (i === 0 ? ' active' : '');
        btn.textContent = cat;
        btn.setAttribute('role', 'tab');
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
    const pList = getUniquePeople();
    pList.forEach(p => {
        const card = document.createElement('div');
        card.className = 'person-card';
        card.innerHTML = `
            <div class="person-avatar" data-wiki="${p.wiki}">${getInitials(p.name)}</div>
            <div class="person-name">${p.name}</div>
            <div class="person-title">${p.desc}</div>
            <div class="person-count">명언 ${p.count}개</div>
        `;
        card.addEventListener('click', () => showPersonQuotes(p));

        // Load wiki image
        if (p.wiki) {
            const avatar = card.querySelector('.person-avatar');
            getWikiImage(p.wiki).then(url => {
                if (url) {
                    avatar.style.backgroundImage = `url(${url})`;
                    avatar.style.backgroundSize = 'cover';
                    avatar.style.backgroundPosition = 'center';
                    avatar.textContent = '';
                }
            });
        }

        container.appendChild(card);
    });
}

function showPersonQuotes(person) {
    document.getElementById('people').style.display = 'none';
    const section = document.getElementById('personQuotes');
    section.style.display = 'block';

    const header = document.getElementById('personHeader');
    header.innerHTML = `
        <div class="person-avatar-lg" id="personDetailAvatar">${getInitials(person.name)}</div>
        <h2>${person.name}</h2>
        <p class="person-subtitle">${person.nameEn} — ${person.desc}</p>
        <div class="person-bio">${person.bio}</div>
    `;

    // Load large avatar
    if (person.wiki) {
        getWikiImage(person.wiki).then(url => {
            if (url) {
                const avatar = document.getElementById('personDetailAvatar');
                if (avatar) {
                    avatar.style.backgroundImage = `url(${url})`;
                    avatar.style.backgroundSize = 'cover';
                    avatar.style.backgroundPosition = 'center';
                    avatar.textContent = '';
                }
            }
        });
    }

    const list = document.getElementById('personQuotesList');
    list.innerHTML = '';
    const personQuotes = quotes.filter(q => q.author === person.name);
    personQuotes.forEach(q => {
        const qId = getQuoteId(q);
        const liked = isLiked(qId);
        const item = document.createElement('div');
        item.className = 'quote-list-item';
        item.innerHTML = `
            <p class="quote-text">${q.text}</p>
            <div class="quote-commentary">${q.commentary}</div>
            <div class="quote-list-footer">
                <span class="quote-category-tag">${q.category}</span>
                <button class="like-btn-sm ${liked ? 'liked' : ''}" data-qid="${qId}">
                    <span class="like-icon">${liked ? '\u2764\uFE0F' : '\u2661'}</span>
                </button>
            </div>
        `;
        item.querySelector('.like-btn-sm').addEventListener('click', (e) => {
            const btn = e.currentTarget;
            const isNowLiked = toggleLike(qId);
            btn.classList.toggle('liked', isNowLiked);
            btn.querySelector('.like-icon').textContent = isNowLiked ? '\u2764\uFE0F' : '\u2661';
            updateLikeCounter();
        });
        list.appendChild(item);
    });

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== ALL QUOTES (MASONRY) =====
let allQuotesPage = 0;
const QUOTES_PER_PAGE = 9;
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
        (people[q.author]?.nameEn || '').toLowerCase().includes(query) ||
        q.category.toLowerCase().includes(query) ||
        q.commentary.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        resultsEl.innerHTML = '<div class="search-result-item"><span class="quote-text">검색 결과가 없습니다.</span></div>';
    } else {
        resultsEl.innerHTML = results.map(q => `
            <div class="search-result-item">
                <div class="quote-text">\u201C${q.text}\u201D</div>
                <div class="quote-author">— ${q.author} | ${q.category}</div>
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
    btn.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => nav.classList.remove('open'));
    });
}

// ===== STRUCTURED DATA FOR SEO =====
function injectQuotationSchema() {
    const schemaQuotes = quotes.slice(0, 20).map(q => ({
        "@type": "Quotation",
        "text": q.text,
        "spokenByCharacter": {
            "@type": "Person",
            "name": q.author,
            "alternateName": people[q.author]?.nameEn || '',
            "description": people[q.author]?.desc || ''
        },
        "about": q.category
    }));

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "명언 모음",
        "numberOfItems": quotes.length,
        "itemListElement": schemaQuotes.map((q, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": q
        }))
    });
    document.head.appendChild(script);
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
    injectQuotationSchema();
    updateLikeCounter();

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

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-section')) {
            document.getElementById('searchResults').style.display = 'none';
        }
    });
});
