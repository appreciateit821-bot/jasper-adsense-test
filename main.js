// ===== QUOTES DATA WITH ORIGINAL COMMENTARY =====
const quotes = [
    // 인생/철학
    { text: "삶이 있는 한 희망은 있다.", author: "키케로", authorEn: "Cicero", desc: "고대 로마 철학자 (BC 106-43)", category: "인생",
      commentary: "키케로는 로마 공화정 말기의 정치가이자 웅변가였습니다. 정치적 격변 속에서도 끝까지 공화정의 이상을 포기하지 않았던 그는, 어떤 상황에서도 삶 자체가 가능성의 근거라는 확신을 가지고 있었습니다. 이 명언은 절망적인 순간에도 생존 자체가 반전의 씨앗이라는 메시지를 담고 있습니다." },
    { text: "검사하지 않은 삶은 살 가치가 없다.", author: "소크라테스", authorEn: "Socrates", desc: "고대 그리스 철학자 (BC 470-399)", category: "인생",
      commentary: "소크라테스의 재판 기록인 『소크라테스의 변론』에서 나온 이 말은, 서양 철학의 근본 정신을 요약합니다. 그는 사형 선고 앞에서도 자신의 신념을 굽히지 않으며 이 말을 남겼습니다. '검사한다'는 것은 단순한 반성이 아니라, 자신의 믿음과 행동의 근거를 끊임없이 질문하는 비판적 사고를 의미합니다." },
    { text: "인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다.", author: "찰리 채플린", authorEn: "Charlie Chaplin", desc: "영국 배우/감독 (1889-1977)", category: "인생",
      commentary: "무성영화 시대의 전설적인 코미디언 채플린은 런던 빈민가에서 자라 할리우드 최고의 스타가 된 인물입니다. 가난과 고난을 웃음으로 승화시킨 그의 예술 세계가 이 한 마디에 응축되어 있습니다. 현재의 고통도 시간이 지나면 삶의 한 장면으로 바뀐다는 관조적 지혜를 전합니다." },
    { text: "우리가 두려워해야 할 것은 두려움 그 자체뿐이다.", author: "프랭클린 D. 루스벨트", authorEn: "Franklin D. Roosevelt", desc: "미국 제32대 대통령 (1882-1945)", category: "인생",
      commentary: "1933년 대공황 한복판에서의 취임 연설에 등장한 이 명언은, 경제적 파탄으로 공포에 빠진 미국 국민에게 용기를 준 역사적 한마디입니다. 루스벨트는 두려움이라는 감정 자체가 상황을 더 악화시킨다는 점을 지적하며, 행동으로 나아갈 것을 촉구했습니다." },
    { text: "삶은 자전거를 타는 것과 같다. 균형을 잡으려면 계속 움직여야 한다.", author: "알베르트 아인슈타인", authorEn: "Albert Einstein", desc: "물리학자 (1879-1955)", category: "인생",
      commentary: "상대성이론으로 물리학의 패러다임을 바꾼 아인슈타인은 과학뿐 아니라 인생에 대한 통찰로도 유명했습니다. 1930년 아들 에두아르트에게 보낸 편지에서 이 비유를 사용했는데, 정체는 곧 쓰러짐이라는 물리적 진실을 인생의 지혜로 연결한 것이 특징입니다." },
    { text: "산다는 것은 호흡하는 것이 아니라 행동하는 것이다.", author: "장 자크 루소", authorEn: "Jean-Jacques Rousseau", desc: "프랑스 철학자 (1712-1778)", category: "인생",
      commentary: "프랑스 계몽주의를 대표하는 사상가 루소는 『에밀』에서 교육의 본질을 탐구하며 이 말을 남겼습니다. 그에게 진정한 삶이란 생물학적 생존이 아니라 의지를 가지고 세상과 관계를 맺는 능동적 행위였습니다. 이 사상은 이후 프랑스 혁명의 정신적 토대가 되기도 했습니다." },
    { text: "인생에서 가장 중요한 것은 자신의 길을 찾는 것이다.", author: "헤르만 헤세", authorEn: "Hermann Hesse", desc: "독일 작가/노벨문학상 (1877-1962)", category: "인생",
      commentary: "『데미안』, 『싯다르타』 등으로 자아 탐구의 문학을 개척한 헤세는 평생 '자기 자신이 되는 것'의 중요성을 역설했습니다. 독일에서 태어나 스위스로 귀화한 그의 파란만장한 삶 자체가 자신만의 길을 찾아가는 여정이었으며, 이 명언은 그 여정의 핵심을 담고 있습니다." },
    { text: "삶이란 우리가 다른 계획을 세우느라 바쁠 때 일어나는 것이다.", author: "존 레논", authorEn: "John Lennon", desc: "영국 음악가 (1940-1980)", category: "인생",
      commentary: "비틀즈의 리더이자 평화 운동가였던 존 레논의 이 말은 곡 'Beautiful Boy'에 담겨 있습니다. 우리가 미래를 통제하려 애쓰는 동안 정작 현재의 소중한 순간들을 놓치고 있다는 역설을 지적합니다. 40세에 총격으로 세상을 떠난 그의 삶이 이 명언에 더 깊은 울림을 더합니다." },
    { text: "살아 있다는 것 자체가 기적이다.", author: "틱낫한", authorEn: "Thich Nhat Hanh", desc: "베트남 승려/평화운동가 (1926-2022)", category: "인생",
      commentary: "베트남 전쟁 중 평화 운동을 이끌며 마틴 루터 킹에 의해 노벨평화상 후보로 추천된 틱낫한 스님은 '마음챙김(mindfulness)'의 세계적 전파자입니다. 이 명언은 과거의 후회나 미래의 불안에서 벗어나 '지금 여기'의 존재 자체에 감사하라는 불교적 가르침을 현대인의 언어로 표현한 것입니다." },
    { text: "인생은 짧고 예술은 길다.", author: "히포크라테스", authorEn: "Hippocrates", desc: "고대 그리스 의학의 아버지 (BC 460-370)", category: "인생",
      commentary: "의학의 아버지 히포크라테스가 남긴 이 격언은 원래 의술을 배우는 데는 인생이 너무 짧다는 뜻이었습니다. 여기서 '예술(ars)'은 기술과 학문을 포함하는 넓은 의미로, 한 분야를 완전히 익히려면 평생이 걸린다는 겸손의 자세를 표현합니다. 2400년이 지난 지금도 모든 분야의 장인들에게 통용되는 진리입니다." },

    // 성공/동기부여
    { text: "천 리 길도 한 걸음부터 시작된다.", author: "노자", authorEn: "Lao Tzu", desc: "중국 고대 철학자 (BC 6세기)", category: "성공",
      commentary: "도가 사상의 창시자 노자의 『도덕경』 64장에 나오는 이 말은 동양 철학의 정수를 담고 있습니다. 위대한 성취도 작은 시작에서 비롯된다는 이 가르침은, 시작을 두려워하는 현대인에게도 여전히 유효합니다. 노자는 '무위자연'을 강조했지만, 이 명언은 행동의 시작이 갖는 힘을 역설합니다." },
    { text: "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다. 계속하는 용기가 중요하다.", author: "윈스턴 처칠", authorEn: "Winston Churchill", desc: "영국 전 총리 (1874-1965)", category: "성공",
      commentary: "제2차 세계대전 당시 나치 독일의 폭격 속에서도 영국을 이끈 처칠은 '절대 포기하지 마라'의 화신이었습니다. 정치적으로 여러 번 실각했다가 다시 복귀한 그의 인생 자체가 이 명언의 살아있는 증거입니다. 성공에 안주하지 않고 실패에 좌절하지 않는 지속적 용기를 강조합니다." },
    { text: "나는 실패한 적이 없다. 나는 효과가 없는 만 가지 방법을 발견한 것이다.", author: "토마스 에디슨", authorEn: "Thomas Edison", desc: "미국 발명가 (1847-1931)", category: "성공",
      commentary: "전구, 축음기, 영사기 등 1,093개의 특허를 보유한 에디슨은 인류 역사상 가장 많은 발명을 한 사람입니다. 전구 하나를 완성하기까지 수천 번의 실험을 반복한 그에게 실패란 성공에 가까워지는 과정이었을 뿐입니다. 이 사고방식은 현대 스타트업 문화의 '빠른 실패, 빠른 학습' 정신의 원형이기도 합니다." },
    { text: "위대한 일을 하는 유일한 방법은 하는 일을 사랑하는 것이다.", author: "스티브 잡스", authorEn: "Steve Jobs", desc: "애플 공동 창업자 (1955-2011)", category: "성공",
      commentary: "2005년 스탠퍼드 대학교 졸업식 연설에서 나온 이 말은 잡스 철학의 핵심입니다. 자신이 창립한 애플에서 쫓겨났다가 다시 돌아와 아이폰으로 세상을 바꾼 그의 여정은, 열정이 없으면 역경을 이겨낼 수 없다는 교훈을 보여줍니다. '아직 찾지 못했다면 계속 찾으라'는 그의 후속 메시지도 유명합니다." },
    { text: "미래는 자신의 꿈의 아름다움을 믿는 사람들에게 속한다.", author: "엘리너 루스벨트", authorEn: "Eleanor Roosevelt", desc: "미국 전 대통령 부인/인권운동가 (1884-1962)", category: "성공",
      commentary: "프랭클린 루스벨트 대통령의 부인이자 유엔 세계인권선언의 주도자였던 엘리너는 '세계에서 가장 존경받는 여성'으로 불렸습니다. 당시 퍼스트레이디의 전통적 역할을 넘어 인권과 사회정의를 위해 목소리를 높인 선구자였으며, 이 명언은 꿈을 현실로 만드는 첫 번째 조건이 자기 확신이라는 메시지를 전합니다." },
    { text: "나에게 여섯 시간을 주어 나무를 자르게 한다면, 나는 처음 네 시간을 도끼를 가는 데 쓰겠다.", author: "에이브러햄 링컨", authorEn: "Abraham Lincoln", desc: "미국 제16대 대통령 (1809-1865)", category: "성공",
      commentary: "노예해방 선언으로 미국 역사의 방향을 바꾼 링컨은 일리노이 주의 가난한 통나무집에서 독학으로 변호사가 된 입지전적 인물입니다. 이 비유는 철저한 준비가 효율적인 실행의 핵심이라는 교훈을 담고 있으며, 성급하게 결과를 추구하기보다 기본기를 다지는 것의 중요성을 강조합니다." },
    { text: "할 수 있다고 믿든, 할 수 없다고 믿든, 당신이 옳다.", author: "헨리 포드", authorEn: "Henry Ford", desc: "포드자동차 창업자 (1863-1947)", category: "성공",
      commentary: "대량생산 시스템을 도입하여 자동차를 대중화시킨 헨리 포드는 실용적 낙관주의자였습니다. 이 명언은 자기실현적 예언(self-fulfilling prophecy)의 원리를 직관적으로 표현한 것으로, 믿음이 행동을 결정하고 행동이 결과를 결정한다는 심리학적 진실을 담고 있습니다." },
    { text: "기회는 일어나는 것이 아니라 만드는 것이다.", author: "크리스 그로서", authorEn: "Chris Grosser", desc: "기업가/작가", category: "성공",
      commentary: "이 명언은 수동적으로 기회를 기다리는 것이 아니라 능동적으로 기회를 창출해야 한다는 기업가 정신의 핵심을 표현합니다. 성공한 사업가와 혁신가들의 공통점은 주어진 환경에 적응하는 것을 넘어 환경 자체를 바꾸는 주도성에 있습니다." },
    { text: "배움에는 왕도가 없다.", author: "유클리드", authorEn: "Euclid", desc: "고대 그리스 수학자 (BC 325-265)", category: "성공",
      commentary: "기하학의 아버지 유클리드가 프톨레마이오스 1세에게 한 말로 전해집니다. 왕이 기하학을 쉽게 배울 방법을 물었을 때 이렇게 답했다고 합니다. 아무리 높은 지위에 있더라도 학문의 길에서는 지름길이 없으며, 누구나 같은 노력을 기울여야 한다는 평등한 진리를 담고 있습니다." },
    { text: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.", author: "윈스턴 처칠", authorEn: "Winston Churchill", desc: "영국 전 총리 (1874-1965)", category: "성공",
      commentary: "처칠의 정치 인생은 실패와 좌절의 연속이었습니다. 해군장관 시절 갈리폴리 작전의 실패, 1930년대의 정치적 소외기를 거쳐 65세에 총리가 된 그는 '늦은 성공'의 대명사입니다. 실패 자체보다 실패 후 열정을 잃는 것이 진짜 패배라는 통찰이 담겨 있습니다." },

    // 사랑
    { text: "사랑받는 것은 좋은 일이지만, 사랑하는 것이야말로 진정한 행복이다.", author: "헤르만 헤세", authorEn: "Hermann Hesse", desc: "독일 작가/노벨문학상 (1877-1962)", category: "사랑",
      commentary: "헤세는 사랑의 본질이 받는 것이 아닌 주는 것에 있다고 보았습니다. 『나르치스와 골드문트』에서 탐구한 것처럼, 능동적으로 사랑하는 행위 자체가 인간을 성장시키고 완성시킨다는 통찰입니다. 사랑을 소유가 아닌 실천으로 바라보는 이 관점은 에리히 프롬의 『사랑의 기술』과도 맥을 같이합니다." },
    { text: "어둠으로 어둠을 몰아낼 수 없다. 오직 빛만이 그렇게 할 수 있다. 미움으로 미움을 몰아낼 수 없다. 오직 사랑만이 그렇게 할 수 있다.", author: "마틴 루터 킹 주니어", authorEn: "Martin Luther King Jr.", desc: "미국 인권운동가 (1929-1968)", category: "사랑",
      commentary: "1963년 워싱턴 대행진의 'I Have a Dream' 연설로 유명한 킹 목사는 비폭력 저항의 상징입니다. 이 명언은 간디의 비폭력주의에서 영향을 받은 것으로, 폭력이나 증오에 같은 방식으로 대응하는 것은 악순환만 낳는다는 깨달음을 표현합니다. 인종차별의 시대에 용서와 사랑의 힘을 믿은 그의 신념이 응축된 말입니다." },
    { text: "사랑은 언제나 인내하고 친절합니다.", author: "사도 바울", authorEn: "Apostle Paul", desc: "기독교 사도 (5-67)", category: "사랑",
      commentary: "신약성경 고린도전서 13장에 나오는 이 구절은 2천 년간 결혼식과 예배에서 가장 많이 인용되는 사랑의 정의입니다. 바울은 당시 갈등이 심했던 고린도 교회에 보내는 편지에서 사랑의 구체적 특성을 열거하며, 사랑이 모든 덕목 중 가장 위대하다고 선언했습니다." },
    { text: "가장 좋은 것은 사랑하는 것이고, 그 다음으로 좋은 것은 사랑받는 것이다.", author: "빅토르 위고", authorEn: "Victor Hugo", desc: "프랑스 작가 (1802-1885)", category: "사랑",
      commentary: "『레미제라블』, 『노트르담의 꼽추』의 작가 빅토르 위고는 프랑스 문학의 거장입니다. 사회적 약자에 대한 깊은 연민을 작품에 담았던 그는 사랑의 능동성을 강조했습니다. 사랑하는 행위가 사랑받는 것보다 상위에 있다는 이 통찰은 헤세의 사상과도 공명합니다." },
    { text: "사랑할 때 우리는 가장 살아있다.", author: "존 업다이크", authorEn: "John Updike", desc: "미국 소설가 (1932-2009)", category: "사랑",
      commentary: "퓰리처상을 두 번 수상한 미국 현대문학의 대가 업다이크는 일상 속 인간 관계의 미묘한 결을 포착하는 데 탁월했습니다. 이 명언은 사랑이라는 감정이 인간의 모든 감각과 의식을 가장 생생하게 깨운다는 존재론적 관찰을 담고 있습니다." },
    { text: "세상에서 가장 아름다운 것은 보이거나 만져지는 것이 아니라 마음으로 느끼는 것이다.", author: "헬렌 켈러", authorEn: "Helen Keller", desc: "미국 작가/사회운동가 (1880-1968)", category: "사랑",
      commentary: "19개월에 시각과 청각을 잃은 헬렌 켈러는 설리번 선생의 도움으로 언어를 배우고 하버드 래드클리프 대학을 졸업한 인류 역사의 기적 같은 인물입니다. 물리적 감각이 차단된 그녀이기에 마음의 감각이 더 본질적이라는 이 통찰은 특별한 무게를 가집니다." },

    // 지혜
    { text: "아는 것이 힘이다.", author: "프랜시스 베이컨", authorEn: "Francis Bacon", desc: "영국 철학자 (1561-1626)", category: "지혜",
      commentary: "근대 경험론의 아버지 베이컨은 중세의 스콜라 철학에서 벗어나 관찰과 실험을 통한 지식 획득을 주장했습니다. 이 간결한 명언은 지식이 단순한 이론이 아니라 세상을 변화시키는 실질적 도구라는 근대적 세계관의 선언이었으며, 과학혁명의 정신적 토대가 되었습니다." },
    { text: "배우고 때때로 익히면 또한 즐겁지 아니한가.", author: "공자", authorEn: "Confucius", desc: "중국 고대 사상가 (BC 551-479)", category: "지혜",
      commentary: "『논어』의 첫 문장이자 동양 교육 철학의 출발점입니다. 공자는 배움(學)과 실천(習)을 분리하지 않았으며, 이 둘이 결합될 때 비로소 기쁨(悅)이 생긴다고 보았습니다. 2,500년이 지난 오늘날 교육학에서도 '학습한 것을 적용하는 과정에서 진정한 이해가 완성된다'는 원리로 재조명되고 있습니다." },
    { text: "한 가지를 알면 열 가지를 안다.", author: "공자", authorEn: "Confucius", desc: "중국 고대 사상가 (BC 551-479)", category: "지혜",
      commentary: "공자는 제자 안회를 가리켜 '하나를 들으면 열을 안다(聞一知十)'고 칭찬했습니다. 이는 단순 암기가 아닌 원리의 이해를 통한 유추 능력을 높이 산 것입니다. 현대적으로 해석하면 '전이 학습'의 개념과 통하며, 깊이 있는 이해가 넓은 적용을 가능하게 한다는 교육적 진리입니다." },
    { text: "나 자신을 알라.", author: "소크라테스", authorEn: "Socrates", desc: "고대 그리스 철학자 (BC 470-399)", category: "지혜",
      commentary: "원래 델포이 아폴론 신전에 새겨져 있던 격언으로, 소크라테스가 자신의 철학의 모토로 삼았습니다. 그에게 자기 인식은 모든 지혜의 출발점이었습니다. 자신의 무지를 아는 것(知的 겸손)이야말로 진정한 앎의 시작이라는 역설적 가르침이 담겨 있습니다." },
    { text: "교육은 가장 강력한 무기이며, 그것으로 세상을 바꿀 수 있다.", author: "넬슨 만델라", authorEn: "Nelson Mandela", desc: "남아공 전 대통령 (1918-2013)", category: "지혜",
      commentary: "27년간 감옥에서 교육을 통해 희망을 잃지 않았던 만델라는 석방 후 남아프리카공화국 최초의 흑인 대통령이 되었습니다. 아파르트헤이트(인종차별정책)를 종식시킨 그는 보복 대신 화해를 선택했으며, 교육이야말로 불평등과 억압을 근본적으로 해결할 수 있는 유일한 도구라고 확신했습니다." },
    { text: "진정한 지혜는 자신이 아무것도 모른다는 것을 아는 것이다.", author: "소크라테스", authorEn: "Socrates", desc: "고대 그리스 철학자 (BC 470-399)", category: "지혜",
      commentary: "소크라테스적 무지(Socratic ignorance)로 알려진 이 개념은 서양 인식론의 초석입니다. 델포이 신탁이 소크라테스를 가장 지혜로운 사람이라고 했을 때, 그는 자신이 지혜로운 이유가 '자신의 무지를 아는 것'에 있다고 해석했습니다. 이는 독단을 경계하고 끊임없이 질문하라는 비판적 사고의 원형입니다." },
    { text: "지혜로운 사람은 말을 적게 하고 많이 듣는다.", author: "피타고라스", authorEn: "Pythagoras", desc: "고대 그리스 수학자 (BC 570-495)", category: "지혜",
      commentary: "피타고라스 정리로 유명한 수학자이자 철학자인 피타고라스는 제자들에게 처음 5년간 침묵 수행을 시켰다고 전해집니다. 말하기보다 듣기를 중시한 그의 교육 방식은, 지식의 습득이 자기 주장이 아닌 경청에서 시작된다는 지혜를 실천한 것이었습니다." },
    { text: "독서란 자신의 머리로 다른 사람의 생각을 하는 것이다.", author: "아르투어 쇼펜하우어", authorEn: "Arthur Schopenhauer", desc: "독일 철학자 (1788-1860)", category: "지혜",
      commentary: "염세주의 철학으로 유명한 쇼펜하우어는 독서의 양면성을 지적했습니다. 독서는 타인의 사고를 빌려오는 것이므로, 과도한 독서는 오히려 자기 사유 능력을 약화시킬 수 있다는 경고이기도 합니다. 읽은 것을 자신의 것으로 소화하는 '사색'의 중요성을 함께 강조한 것입니다." },

    // 용기
    { text: "용기란 두려움이 없는 것이 아니라, 두려움보다 중요한 것이 있다는 판단이다.", author: "앰브로즈 레드문", authorEn: "Ambrose Redmoon", desc: "작가 (1933-1996)", category: "용기",
      commentary: "이 명언은 용기에 대한 가장 현실적인 정의 중 하나입니다. 용감한 사람도 두려움을 느끼며, 차이는 두려움에도 불구하고 행동하느냐에 있습니다. 군인, 소방관, 의료인 등 위험을 무릅쓰는 사람들의 동기는 공포의 부재가 아니라 사명감이라는 점에서 이 명언의 진실성이 확인됩니다." },
    { text: "세상에서 가장 용감한 행동은 스스로 생각하고 그것을 큰 소리로 말하는 것이다.", author: "코코 샤넬", authorEn: "Coco Chanel", desc: "프랑스 패션 디자이너 (1883-1971)", category: "용기",
      commentary: "코르셋에서 여성을 해방시키고 현대 패션의 기틀을 마련한 샤넬은 고아원 출신으로 남성 중심의 패션 업계를 혁신한 인물입니다. 관습에 도전하고 자신만의 미학을 밀어붙인 그녀의 삶은 이 명언의 완벽한 실증입니다." },
    { text: "당신이 할 수 있는 일, 꿈꿀 수 있는 일이라면, 시작하라. 대담함 속에 천재성, 힘, 그리고 마법이 있다.", author: "요한 볼프강 폰 괴테", authorEn: "Johann Wolfgang von Goethe", desc: "독일 작가 (1749-1832)", category: "용기",
      commentary: "『파우스트』, 『젊은 베르테르의 슬픔』으로 독일 문학의 정점을 이룬 괴테는 문학뿐 아니라 과학, 정치 등 다방면에서 활약한 르네상스적 인물이었습니다. 이 명언은 완벽한 준비를 기다리며 미루는 것보다 과감한 첫 걸음이 모든 것을 바꿀 수 있다는 통찰을 전합니다." },
    { text: "한 사람의 용기는 다수를 만든다.", author: "앤드루 잭슨", authorEn: "Andrew Jackson", desc: "미국 제7대 대통령 (1767-1845)", category: "용기",
      commentary: "서부 개척 시대의 군인 출신 대통령 잭슨은 '평민의 대통령'으로 불린 인물입니다. 한 사람이 먼저 용기를 내면 그것이 주변 사람들에게 전파되어 연쇄반응을 일으킨다는 이 관찰은, 리더십에서 솔선수범의 중요성을 강조합니다." },
    { text: "칼을 들어야 칼을 쓸 수 있고, 붓을 들어야 붓을 쓸 수 있다. 먼저 시작해야 한다.", author: "이순신", authorEn: "Yi Sun-sin", desc: "조선 시대 장군 (1545-1598)", category: "용기",
      commentary: "임진왜란에서 23전 23승의 신화를 쓴 충무공 이순신은 한국 역사상 가장 존경받는 인물 중 하나입니다. 12척의 배로 133척의 왜군을 물리친 명량해전은 준비와 실행의 용기가 불가능을 가능으로 바꿀 수 있음을 보여준 역사적 사건입니다." },
    { text: "위대한 영광은 한 번도 넘어지지 않는 데 있는 것이 아니라, 넘어질 때마다 일어서는 데 있다.", author: "공자", authorEn: "Confucius", desc: "중국 고대 사상가 (BC 551-479)", category: "용기",
      commentary: "공자 자신도 정치적 이상을 실현하기 위해 여러 나라를 떠돌았지만 번번이 좌절을 겪었습니다. 그럼에도 제자 교육과 학문 정리를 멈추지 않은 그의 삶이 이 명언에 진정성을 부여합니다. 회복탄력성(resilience)이라는 현대 심리학 개념의 원형이기도 합니다." },

    // 행복
    { text: "행복은 완성품이 아니다. 행복은 자신의 행동에서 나온다.", author: "달라이 라마", authorEn: "Dalai Lama", desc: "티베트 정신적 지도자 (1935-)", category: "행복",
      commentary: "14대 달라이 라마 텐진 갸초는 1959년 중국의 티베트 침공 이후 인도에 망명하여 반세기 넘게 비폭력 저항을 이어오고 있습니다. 그는 행복을 외부 조건의 충족이 아닌 내면의 수련을 통해 달성하는 것으로 봅니다. 현대 긍정심리학의 연구 결과와도 일치하는 이 가르침은 행복이 '상태'가 아닌 '과정'임을 알려줍니다." },
    { text: "행복의 비결은 자유이고 자유의 비결은 용기이다.", author: "투키디데스", authorEn: "Thucydides", desc: "고대 그리스 역사가 (BC 460-395)", category: "행복",
      commentary: "『펠로폰네소스 전쟁사』를 쓴 투키디데스는 서양 역사학의 아버지로 불립니다. 이 명언은 페리클레스의 장례 연설에서 인용한 것으로, 행복-자유-용기가 연쇄적으로 연결되어 있다는 통찰을 담고 있습니다. 자유를 지키기 위해서는 용기가 필요하며, 그 자유 위에서만 진정한 행복이 가능하다는 고대 아테네의 정신을 표현합니다." },
    { text: "가장 행복한 사람은 모든 것을 가진 사람이 아니라 가진 것에 감사하는 사람이다.", author: "찰스 디킨스", authorEn: "Charles Dickens", desc: "영국 소설가 (1812-1870)", category: "행복",
      commentary: "『올리버 트위스트』, 『크리스마스 캐럴』 등으로 빅토리아 시대 영국 사회의 빈부격차를 고발한 디킨스는 소유의 양이 아닌 감사의 자세가 행복을 결정한다는 것을 작품 곳곳에서 보여주었습니다. 현대 심리학에서도 감사 일기 쓰기가 행복도를 유의미하게 높인다는 연구 결과가 이를 뒷받침합니다." },
    { text: "행복은 당신이 생각하는 것, 당신이 말하는 것, 당신이 하는 것이 조화를 이룰 때 온다.", author: "마하트마 간디", authorEn: "Mahatma Gandhi", desc: "인도 독립운동가 (1869-1948)", category: "행복",
      commentary: "비폭력 불복종 운동으로 인도의 독립을 이끈 간디는 사상과 언행의 일치를 평생 실천한 인물입니다. 이 명언은 내면의 갈등이 불행의 근원이며, 생각-말-행동이 하나로 정렬될 때 비로소 마음의 평화가 온다는 통합적 인간관을 표현합니다." },
    { text: "남과 비교하지 말라. 비교는 행복의 도둑이다.", author: "시어도어 루스벨트", authorEn: "Theodore Roosevelt", desc: "미국 제26대 대통령 (1858-1919)", category: "행복",
      commentary: "미국 역사상 가장 젊은 나이(42세)에 대통령이 된 루스벨트는 행동파 지도자였습니다. SNS 시대인 오늘날 이 명언은 더욱 절실한 가르침이 되었습니다. 타인과의 비교는 끝이 없으며, 자신만의 기준으로 삶을 평가해야 한다는 이 통찰은 현대 심리학에서 '사회적 비교 이론'으로 검증되고 있습니다." },
    { text: "행복은 습관이다. 그것을 몸에 지녀라.", author: "허버트 스펜서", authorEn: "Herbert Spencer", desc: "영국 철학자 (1820-1903)", category: "행복",
      commentary: "사회진화론으로 유명한 스펜서는 행복을 일시적 감정이 아닌 반복적 실천의 결과로 보았습니다. 현대 신경과학에서도 긍정적 사고 패턴이 반복되면 뇌의 신경회로가 재구성된다는 '신경가소성' 원리가 발견되어, 행복이 실제로 습관화될 수 있음이 과학적으로 입증되고 있습니다." },

    // 리더십
    { text: "리더는 길을 알고, 길을 가고, 길을 보여주는 사람이다.", author: "존 C. 맥스웰", authorEn: "John C. Maxwell", desc: "리더십 전문가/작가 (1947-)", category: "리더십",
      commentary: "20권 이상의 리더십 관련 저서를 쓴 맥스웰은 현대 리더십 이론의 대가입니다. 이 명언은 리더의 세 가지 필수 역할 — 비전(알고), 실행(가고), 소통(보여주고) — 을 명료하게 정리한 것으로, 아는 것만으로는 충분하지 않고 직접 실천하며 다른 사람도 이끌어야 한다는 통합적 리더십관을 표현합니다." },
    { text: "백성을 두려워해야 하는 것은 군주이지, 군주를 두려워해야 하는 것은 백성이 아니다.", author: "세종대왕", authorEn: "King Sejong the Great", desc: "조선 제4대 왕 (1397-1450)", category: "리더십",
      commentary: "한글을 창제하고 과학, 문화, 농업 등 전 분야에서 혁신을 이끈 세종대왕은 민본주의의 실천자였습니다. 이 말은 권력의 원천이 백성에게 있다는 혁명적 사상을 담고 있으며, 15세기 동아시아에서 이러한 민주적 사고가 있었다는 것은 세계사적으로도 주목할 만합니다." },
    { text: "모범을 보이는 것은 다른 사람에게 영향을 미치는 주된 방법이 아니라 유일한 방법이다.", author: "알베르트 슈바이처", authorEn: "Albert Schweitzer", desc: "독일 신학자/의사/노벨평화상 (1875-1965)", category: "리더십",
      commentary: "신학 교수이자 오르간 연주자였던 슈바이처는 30세에 의학을 공부하여 아프리카 가봉에 병원을 세우고 평생을 바쳤습니다. 말이 아닌 행동으로 가르치는 것이 유일하게 효과적인 영향력이라는 그의 확신은 자신의 삶으로 증명되었으며, 이것이 노벨평화상의 배경이 되었습니다." },
    { text: "불가능이란 노력하지 않는 자의 변명이다.", author: "나폴레옹 보나파르트", authorEn: "Napoleon Bonaparte", desc: "프랑스 황제 (1769-1821)", category: "리더십",
      commentary: "코르시카 섬의 하급 귀족 출신으로 프랑스 황제까지 오른 나폴레옹은 근대 유럽의 지도를 바꾼 인물입니다. '내 사전에 불가능은 없다'와 함께 그의 대표 명언으로, 한계를 미리 설정하지 않는 도전 정신을 담고 있습니다. 물론 러시아 원정의 실패처럼 때로는 한계를 인정하는 것도 필요하다는 역사의 교훈도 있습니다." },
    { text: "위대한 지도자는 시대가 만드는 것이 아니라 스스로 시대를 만든다.", author: "마거릿 대처", authorEn: "Margaret Thatcher", desc: "영국 전 총리 (1925-2013)", category: "리더십",
      commentary: "영국 최초의 여성 총리 마거릿 대처는 '철의 여인'이라는 별명답게 강력한 리더십으로 1980년대 영국 경제를 개혁했습니다. 이 명언은 환경을 탓하기보다 주도적으로 변화를 이끌어야 한다는 리더의 책임을 강조하며, 능동적 리더십의 본질을 표현합니다." },

    // 창의성
    { text: "상상력은 지식보다 중요하다.", author: "알베르트 아인슈타인", authorEn: "Albert Einstein", desc: "물리학자 (1879-1955)", category: "창의성",
      commentary: "아인슈타인은 상대성이론을 수학 공식이 아닌 '빛을 타고 달리면 어떨까'라는 상상(사고실험)에서 출발시켰습니다. 지식은 현재 알려진 것에 국한되지만, 상상력은 아직 존재하지 않는 것까지 다룰 수 있다는 그의 통찰은 과학적 창의성의 본질을 꿰뚫습니다." },
    { text: "창의성은 즐기는 지성이다.", author: "알베르트 아인슈타인", authorEn: "Albert Einstein", desc: "물리학자 (1879-1955)", category: "창의성",
      commentary: "아인슈타인이 특허청에 근무하며 물리학의 혁명적 논문들을 썼던 1905년(기적의 해)은, 의무가 아닌 순수한 지적 즐거움에서 위대한 발견이 탄생할 수 있음을 보여줍니다. 놀이하듯 사고하는 자유로운 지성이 창의성의 원천이라는 이 명언은 현대 교육에도 중요한 시사점을 줍니다." },
    { text: "예술은 자연이 만들지 않는 것을 만든다.", author: "아리스토텔레스", authorEn: "Aristotle", desc: "고대 그리스 철학자 (BC 384-322)", category: "창의성",
      commentary: "플라톤의 제자이자 알렉산더 대왕의 스승인 아리스토텔레스는 서양 학문의 거의 모든 분야를 개척한 인물입니다. 자연은 주어진 법칙에 따르지만 인간의 예술(기술)은 자연에 없는 새로운 것을 만들어낸다는 이 관찰은, 인간 창조 능력의 고유성을 최초로 철학적으로 정의한 것입니다." },
    { text: "창의성은 연결하는 능력이다. 경험을 연결하여 새로운 것을 만들어내는 것이다.", author: "스티브 잡스", authorEn: "Steve Jobs", desc: "애플 공동 창업자 (1955-2011)", category: "창의성",
      commentary: "잡스가 리드 대학에서 우연히 들은 캘리그래피 수업이 훗날 매킨토시의 아름다운 서체로 이어진 일화는 유명합니다. 그는 창의성이 무에서 유를 창조하는 것이 아니라, 기존의 다양한 경험들을 새롭게 연결하는 능력이라고 보았습니다. 이는 '점을 연결하라(connecting the dots)'는 그의 또 다른 유명한 조언과 맥을 같이합니다." },
    { text: "모든 아이는 예술가다. 문제는 어른이 되어서도 예술가로 남아 있는 것이다.", author: "파블로 피카소", authorEn: "Pablo Picasso", desc: "스페인 화가 (1881-1973)", category: "창의성",
      commentary: "입체파를 창시하고 91세까지 왕성하게 활동하며 5만 점 이상의 작품을 남긴 피카소는 20세기 미술의 혁명가입니다. 아이들이 가진 자유로운 상상력과 표현력은 교육과 사회화 과정에서 점차 억압된다는 그의 관찰은, 창의성 교육에서 '비판 없는 자유로운 사고'의 중요성을 일깨워줍니다." },
    { text: "규칙을 배워라. 그래야 규칙을 제대로 깰 수 있다.", author: "달라이 라마", authorEn: "Dalai Lama", desc: "티베트 정신적 지도자 (1935-)", category: "창의성",
      commentary: "달라이 라마의 이 말은 파괴적 혁신과 건설적 혁신의 차이를 명확히 합니다. 기존 규칙을 이해하지 못한 채 깨는 것은 무지이고, 충분히 이해한 후 한계를 인식하고 넘어서는 것이 진정한 창의성입니다. 피카소가 사실적 그림을 완벽히 그릴 수 있었기에 추상화가 의미를 가졌던 것처럼." },

    // 변화
    { text: "세상에서 유일하게 변하지 않는 것은 모든 것이 변한다는 사실이다.", author: "헤라클레이토스", authorEn: "Heraclitus", desc: "고대 그리스 철학자 (BC 535-475)", category: "변화",
      commentary: "'만물은 유전한다(panta rhei)'는 명제로 유명한 헤라클레이토스는 변화 자체를 우주의 본질로 파악했습니다. 같은 강물에 두 번 발을 담글 수 없다는 그의 비유는, 영원히 고정된 것은 없으며 변화를 받아들이는 것이 자연의 이치라는 통찰을 전합니다." },
    { text: "세상을 바꾸고 싶다면 먼저 자신을 바꿔라.", author: "마하트마 간디", authorEn: "Mahatma Gandhi", desc: "인도 독립운동가 (1869-1948)", category: "변화",
      commentary: "간디는 영국 식민지배에 맞서 비폭력 불복종 운동을 펼치면서도, 변화의 출발점은 항상 자기 자신이라고 강조했습니다. 소금 행진, 물레질 운동 등 그가 직접 몸으로 보여준 실천은, 세상의 변화가 개인의 내면적 변화에서 시작된다는 신념의 표현이었습니다." },
    { text: "변화를 두려워하지 마라. 변화하지 않는 것을 두려워하라.", author: "잭 웰치", authorEn: "Jack Welch", desc: "GE 전 CEO (1935-2020)", category: "변화",
      commentary: "20년간 GE의 CEO로서 기업 가치를 4,000% 이상 성장시킨 잭 웰치는 '20세기 최고의 경영자'로 불렸습니다. 그는 조직이 변화를 거부하면 시장에서 도태된다는 것을 체험적으로 알았으며, 이 명언은 변화를 위험이 아닌 생존의 조건으로 보는 경영 철학을 담고 있습니다." },
    { text: "가장 강한 종이 살아남는 것이 아니라 변화에 가장 잘 적응하는 종이 살아남는다.", author: "찰스 다윈", authorEn: "Charles Darwin", desc: "영국 자연과학자 (1809-1882)", category: "변화",
      commentary: "비글호의 항해와 갈라파고스 제도의 관찰을 통해 진화론을 정립한 다윈의 이 통찰은, 생물학을 넘어 경영학, 사회학 등 모든 분야에 적용됩니다. 급변하는 디지털 시대에 기업의 생존도 규모가 아닌 적응력에 달려 있다는 교훈을 줍니다." },
    { text: "어제와 같은 방법을 쓰면서 다른 결과를 기대하는 것은 미친 짓이다.", author: "알베르트 아인슈타인", authorEn: "Albert Einstein", desc: "물리학자 (1879-1955)", category: "변화",
      commentary: "아인슈타인의 이름으로 널리 알려진 이 명언은 변화 없이 다른 결과를 기대하는 인간의 모순을 꼬집습니다. 과학적 방법론에서 변수를 바꾸지 않으면 결과도 바뀌지 않는다는 원리를 일상의 지혜로 확장한 것으로, 반복적 실패에서 벗어나려면 접근 방식 자체를 바꿔야 한다는 교훈입니다." },

    // 꿈
    { text: "꿈을 크게 꿔라. 꿈이 작으면 가슴 뛸 일이 없다.", author: "도널드 트럼프", authorEn: "Donald Trump", desc: "미국 전 대통령/기업인 (1946-)", category: "꿈",
      commentary: "부동산 재벌에서 미국 대통령까지 오른 트럼프의 이 명언은 그의 저서 『거래의 기술』의 핵심 철학을 담고 있습니다. 목표를 크게 설정하면 그에 맞는 전략과 에너지가 따라온다는 것이 그의 경험적 교훈입니다. 현실성과의 균형이 필요하지만, 자기 한계를 미리 축소하지 않는 것의 가치를 일깨워줍니다." },
    { text: "나에게는 꿈이 있습니다.", author: "마틴 루터 킹 주니어", authorEn: "Martin Luther King Jr.", desc: "미국 인권운동가 (1929-1968)", category: "꿈",
      commentary: "1963년 8월 28일, 워싱턴 링컨 기념관 앞에서 25만 명에게 울린 이 말은 20세기 가장 위대한 연설의 시작입니다. 킹 목사는 인종의 벽이 허물어지고 모든 사람이 평등한 세상을 꿈꿨으며, 그 꿈은 이후 시민권법과 투표권법의 통과로 부분적으로 현실이 되었습니다." },
    { text: "꿈을 이루려면 먼저 깨어 있어야 한다.", author: "J.M. 파워", authorEn: "J.M. Power", desc: "작가", category: "꿈",
      commentary: "이 명언의 핵심은 '깨어 있음'에 대한 이중적 의미입니다. 물리적으로 잠에서 깨어나 행동해야 한다는 뜻과 동시에, 현실을 직시하는 각성 상태에서만 꿈을 향한 구체적 계획을 세울 수 있다는 의미를 담고 있습니다. 꿈꾸는 것과 꿈을 실현하는 것 사이에는 의식적 노력이라는 다리가 필요합니다." },
    { text: "모든 위대한 꿈은 꿈꾸는 사람으로부터 시작된다.", author: "해리엇 터브먼", authorEn: "Harriet Tubman", desc: "미국 노예 해방 운동가 (1822-1913)", category: "꿈",
      commentary: "태어날 때부터 노예였던 터브먼은 탈출에 성공한 후, 지하철도(Underground Railroad)를 통해 300명 이상의 노예를 자유로 이끌었습니다. 한 번도 인도 중에 사람을 잃지 않은 그녀의 용기와 지략은 전설적입니다. 가장 열악한 환경에서도 꿈을 포기하지 않은 그녀의 삶이 이 명언에 특별한 무게를 부여합니다." },
    { text: "현실에 발을 딛고 꿈을 향해 두 손을 뻗어라.", author: "빅토르 위고", authorEn: "Victor Hugo", desc: "프랑스 작가 (1802-1885)", category: "꿈",
      commentary: "위고의 이 명언은 이상주의와 현실주의의 완벽한 균형을 표현합니다. 『레미제라블』에서 가난한 장발장이 도덕적 구원을 이루는 이야기처럼, 현실의 제약을 인정하면서도 더 나은 미래를 향해 손을 뻗는 자세가 중요하다는 메시지입니다." },

    // 시간
    { text: "시간은 가장 현명한 상담자이다.", author: "페리클레스", authorEn: "Pericles", desc: "고대 그리스 정치가 (BC 495-429)", category: "시간",
      commentary: "아테네 민주주의의 황금기를 이끈 페리클레스는 파르테논 신전을 건설하고 예술과 철학을 장려한 위대한 지도자였습니다. 급한 판단보다 시간이 가져다주는 객관적 시각을 신뢰한 그의 통치 철학이 이 명언에 담겨 있습니다. 감정적 결정보다 시간을 두고 숙고하라는 현대적 교훈이기도 합니다." },
    { text: "오늘 할 수 있는 일을 내일로 미루지 마라.", author: "벤자민 프랭클린", authorEn: "Benjamin Franklin", desc: "미국 건국의 아버지 (1706-1790)", category: "시간",
      commentary: "과학자, 발명가, 외교관, 작가 등 다방면에서 활약한 프랭클린은 시간 관리의 대가였습니다. 매일의 일과를 세밀하게 계획하고 실행한 그의 습관은 자서전에 상세히 기록되어 있습니다. 이 명언은 미루기(procrastination)의 해로움을 경고하며, 현재의 행동이 미래를 결정한다는 실용주의적 지혜를 담고 있습니다." },
    { text: "시간은 우리가 가장 원하는 것이면서 가장 낭비하는 것이다.", author: "윌리엄 펜", authorEn: "William Penn", desc: "미국 펜실베이니아 건설자 (1644-1718)", category: "시간",
      commentary: "퀘이커교도였던 윌리엄 펜은 종교적 자유를 찾아 미국에 펜실베이니아를 건설한 인물입니다. 이 명언은 시간에 대한 인간의 모순적 태도를 꼬집습니다. 모든 사람이 시간이 부족하다고 말하면서도 정작 주어진 시간을 허투루 쓰는 역설은 오늘날 스마트폰 시대에 더욱 절실한 경고가 됩니다." },
    { text: "과거에서 배우고, 현재를 살고, 미래를 향해 희망하라.", author: "알베르트 아인슈타인", authorEn: "Albert Einstein", desc: "물리학자 (1879-1955)", category: "시간",
      commentary: "시간의 상대성을 과학적으로 증명한 아인슈타인이 삶에서의 시간에 대해 남긴 이 명언은 세 가지 시제에 대한 최적의 자세를 요약합니다. 과거는 교훈의 원천으로, 현재는 행동의 무대로, 미래는 희망의 방향으로 삼으라는 이 균형 잡힌 시간관은 후회와 불안 사이에서 방향을 잃기 쉬운 현대인에게 나침반이 됩니다." },
    { text: "가장 좋은 때는 지금이다.", author: "한비자", authorEn: "Han Feizi", desc: "중국 고대 법가 사상가 (BC 280-233)", category: "시간",
      commentary: "법가 사상을 집대성한 한비자는 진시황이 가장 존경한 사상가였습니다. 이 간결한 명언은 완벽한 시기를 기다리는 것은 결국 영원히 시작하지 않는 것과 같다는 통찰을 담고 있습니다. 행동의 최적 시점은 '지금'이라는 이 가르침은 노자의 '천 리 길도 한 걸음부터'와 함께 동양 실천 철학의 정수입니다." },
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
        <div class="quote-icon">\u201C</div>
        <p class="quote-text">${q.text}</p>
        <div class="quote-commentary">${q.commentary}</div>
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
            <div class="quote-commentary">${q.commentary}</div>
            <span class="quote-category-tag">${q.category}</span>
        `;
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
        q.authorEn.toLowerCase().includes(query) ||
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
    btn.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
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
            "alternateName": q.authorEn,
            "description": q.desc
        },
        "about": q.category,
        "description": q.commentary
    }));

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "명언 모음 - 전세계 위인들의 명언",
        "description": "인생 명언, 성공 명언, 사랑 명언, 동기부여 명언 등 전세계 위인들의 명언 모음",
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
