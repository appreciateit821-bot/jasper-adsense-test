#!/usr/bin/env node
// Generate SEO static pages for all categories and top authors
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ── Load data from data/ directory ──────────────────────────────────────────
function loadExportFile(filePath) {
    const src = fs.readFileSync(filePath, 'utf-8');
    const script = src.replace(/^export\s+const\s+/m, 'var ').replace(/\bexport\s+/g, '');
    const fn = new Function(script + '\nreturn ' + (src.match(/^export const (\w+)/m) || [])[1] + ';');
    return fn();
}
const people = loadExportFile(path.join(__dirname, 'data/people.js'));
const quotes = loadExportFile(path.join(__dirname, 'data/quotes.js'));
const categories = [...new Set(quotes.map(q => q.category))];
console.log(`✅ Loaded: ${Object.keys(people).length} people, ${quotes.length} quotes, ${categories.length} categories`);

// ── Helpers ─────────────────────────────────────────────────────────────────
const BASE = 'https://jasper-adsense-test.pages.dev';
const TODAY = '2026-02-26';

// ── Category editorial content ──────────────────────────────────────────────
const CATEGORY_CONTENT = {
    '인생': {
        editorial: `<p>인생에 관한 명언은 인류가 기록을 남기기 시작한 순간부터 존재했습니다. 고대 그리스 철학자들이 아테네 광장에서 나눈 대화, 중세 수도사들이 양피지에 남긴 성찰, 현대 기업가들이 강연에서 공유한 경험까지 — 시대와 문화를 초월하여 인간은 항상 삶의 의미를 묻고 답하려 했습니다.</p>
<p>소크라테스는 "검사하지 않은 삶은 살 가치가 없다"고 했습니다. 이 짧은 문장 안에는 철학의 핵심이 담겨 있습니다. 삶을 단순히 살아내는 것이 아니라, 그 삶을 깊이 들여다보고 질문하며 성찰할 때 비로소 진정한 의미를 갖는다는 것입니다. 2,400년이 지난 오늘날에도 이 말은 여전히 유효합니다.</p>
<p>찰리 채플린은 "인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다"라고 말했습니다. 런던의 빈민가에서 태어나 극심한 가난을 경험한 그는 고통을 웃음으로 승화시켰습니다. 이 명언은 관점의 힘을 일깨워 줍니다. 지금 이 순간의 고통이 긴 인생의 흐름 속에서는 어떻게 보일까요?</p>
<p>인생 명언이 우리에게 주는 가장 큰 선물은 '연대감'입니다. 수천 년 전 로마의 철학자 키케로가 느낀 좌절과 희망, 19세기 미국 대통령이 직면했던 두려움, 20세기 인권운동가가 품었던 꿈 — 이 모든 것이 오늘을 살아가는 우리의 경험과 다르지 않습니다. 시공간을 초월한 이 공명이 바로 인생 명언의 힘입니다.</p>`,
        faq: [
            { q: '가장 감동적인 인생 명언은 무엇인가요?', a: '소크라테스의 "검사하지 않은 삶은 살 가치가 없다", 찰리 채플린의 "인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다", 아인슈타인의 "삶은 자전거를 타는 것과 같다. 균형을 잡으려면 계속 움직여야 한다" 등이 대표적입니다. 이 명언들은 수천 년의 세월을 넘어 오늘날에도 깊은 울림을 줍니다.' },
            { q: '인생 명언이 실제로 삶에 도움이 되나요?', a: '심리학 연구에 따르면, 의미 있는 문장을 읽고 내면화하면 실제로 사고방식과 행동에 변화가 생깁니다. 특히 어려운 상황에서 위인들의 경험에서 나온 명언은 "나만 이런 어려움을 겪는 게 아니구나"라는 연대감과 "그들도 이겨냈다"는 용기를 줍니다. 단, 명언은 깊이 생각하고 자신의 삶에 적용할 때 진정한 가치를 발휘합니다.' },
            { q: '동양과 서양의 인생관 차이는 명언에 어떻게 드러나나요?', a: '서양 철학의 인생 명언은 개인의 자유, 이성, 탐구를 강조하는 경향이 있습니다. 소크라테스의 자기 검증, 아인슈타인의 끊임없는 움직임이 그 예입니다. 반면 동양의 인생 명언은 자연과의 조화, 수양, 관계를 중시합니다. 노자의 무위자연, 공자의 인(仁) 사상이 대표적입니다. 그러나 인생의 유한함과 희망의 중요성은 동서양 모두에서 공통적으로 나타납니다.' },
            { q: '인생에 대해 가장 많이 인용되는 짧은 명언을 추천해주세요.', a: '"삶이 있는 한 희망은 있다" (키케로), "천 리 길도 한 걸음부터" (노자), "삶은 자전거를 타는 것과 같다" (아인슈타인) 등이 대표적인 짧은 인생 명언입니다. 짧을수록 기억하기 쉽고 일상에서 반복적으로 떠올릴 수 있어 더 큰 영향력을 발휘합니다.' }
        ]
    },
    '성공': {
        editorial: `<p>성공에 관한 명언만큼 다양한 관점이 공존하는 주제도 드뭅니다. 어떤 이는 성공을 결과로 정의하고, 어떤 이는 과정으로 봅니다. 에디슨은 "나는 실패한 적이 없다. 효과가 없는 만 가지 방법을 발견한 것이다"라고 했고, 처칠은 "성공은 최종적인 것이 아니며, 실패는 치명적인 것이 아니다"라고 했습니다. 이처럼 가장 큰 성공을 거둔 사람들이 정의하는 성공은 놀랍도록 겸손합니다.</p>
<p>현대 사회는 종종 성공을 부, 명예, 지위로만 측정합니다. 그러나 위인들의 명언을 살펴보면 전혀 다른 이야기를 들을 수 있습니다. 아인슈타인은 "성공한 사람이 되려 하지 말고, 가치 있는 사람이 되려 하라"고 권고했습니다. 스티브 잡스는 "위대한 일을 하는 유일한 방법은 하는 일을 사랑하는 것이다"라며 열정을 성공의 전제 조건으로 꼽았습니다.</p>
<p>성공 명언에서 반복적으로 등장하는 주제는 '끈기'입니다. 에이브러햄 링컨은 수차례 선거에서 낙선하고도 마침내 대통령이 되었습니다. 헨리 포드는 여러 번 파산을 경험한 뒤에야 자동차 대중화에 성공했습니다. 그들이 남긴 명언에는 단순한 낙관주의가 아닌, 실제 실패를 딛고 일어선 사람의 무게감이 실려 있습니다.</p>
<p>성공 명언을 읽을 때 중요한 것은 '누가 했느냐'입니다. 실제로 그 말을 실천하며 살았던 사람의 명언은 이론이 아닌 경험의 산물입니다. 명언의 정원에서는 각 인물의 생애와 함께 명언의 맥락을 제공하여, 단순한 문구 이상의 깊이 있는 통찰을 드립니다.</p>`,
        faq: [
            { q: '성공한 사람들이 공통적으로 강조하는 것은 무엇인가요?', a: '세계적으로 성공한 사람들의 명언을 분석하면 몇 가지 공통점이 보입니다. 첫째, 실패를 배움의 기회로 보는 시각입니다. 에디슨, 처칠, 링컨 모두 수많은 실패 이후에 성공했습니다. 둘째, 자신이 하는 일에 대한 진정한 열정입니다. 셋째, 포기하지 않는 끈기입니다. 이 세 가지는 시대와 분야를 초월하여 반복되는 성공의 핵심 요소입니다.' },
            { q: '성공과 행복은 함께 올 수 있나요?', a: '많은 위인들이 성공과 행복의 관계에 대해 깊이 생각했습니다. 아인슈타인은 성공보다 가치 있는 삶을 강조했고, 처칠은 성공을 최종 목적지가 아닌 여정으로 봤습니다. 현대 심리학 연구들도 외적 성공만을 추구할 때 행복감이 오히려 줄어들 수 있음을 보여줍니다. 진정한 성공은 자신이 의미 있다고 여기는 삶을 사는 것에서 비롯됩니다.' },
            { q: '실패를 두려워하지 않으려면 어떻게 해야 하나요?', a: '에디슨은 10,000번의 실험 끝에 전구를 발명했습니다. 그는 "나는 실패한 적이 없다. 효과가 없는 만 가지 방법을 발견한 것이다"라고 했습니다. 실패를 경험이자 데이터로 보는 관점의 전환이 핵심입니다. 또한 처칠의 말처럼 실패는 치명적이지 않습니다. 중요한 것은 실패 후에 어떻게 일어서느냐입니다.' },
            { q: '짧지만 강력한 성공 명언을 추천해주세요.', a: '"할 수 있다고 믿든, 할 수 없다고 믿든, 당신이 옳다" (헨리 포드), "천재는 1%의 영감과 99%의 노력으로 이루어진다" (에디슨), "위대한 일을 하는 유일한 방법은 하는 일을 사랑하는 것이다" (스티브 잡스) — 이 명언들은 짧지만 성공의 본질을 꿰뚫습니다.' }
        ]
    },
    '사랑': {
        editorial: `<p>사랑에 대한 명언은 인류 역사에서 가장 많이 쓰이고 인용된 주제입니다. 소크라테스부터 셰익스피어, 마틴 루터 킹까지 — 시대와 배경이 전혀 다른 사람들이 놀랍도록 비슷한 진실을 발견해왔습니다. 사랑은 단순한 감정이 아니라 인간 존재의 근본적인 힘이라는 것입니다.</p>
<p>마틴 루터 킹은 "미움으로 미움을 몰아낼 수 없다. 오직 사랑만이 그렇게 할 수 있다"고 했습니다. 이 말은 로맨틱한 사랑을 넘어, 사회 변화의 동력으로서 사랑을 이야기합니다. 그는 인종차별이라는 거대한 구조적 폭력 앞에서도 증오 대신 사랑을 무기로 선택했습니다. 그것이 단순한 이상주의가 아니라 전략이었음을 역사가 증명합니다.</p>
<p>헬렌 켈러는 "세상에서 가장 아름다운 것은 보거나 만질 수 없습니다. 마음으로 느껴야 합니다"라고 했습니다. 시각과 청각을 잃었지만 사랑의 아름다움을 누구보다 깊이 알았던 그녀의 말은 사랑의 본질이 감각이 아닌 마음에 있음을 일깨워 줍니다.</p>
<p>사랑 명언들은 사랑의 다양한 얼굴을 보여줍니다. 낭만적 사랑, 부모의 사랑, 인류에 대한 사랑, 자신에 대한 사랑까지. 위인들이 남긴 사랑에 관한 말들은 단순히 감성적 위로를 넘어, 더 깊이 사랑하고 더 넓게 사랑하는 방법을 가르쳐 줍니다.</p>`,
        faq: [
            { q: '사랑에 대한 가장 아름다운 명언은 무엇인가요?', a: '마틴 루터 킹의 "미움으로 미움을 몰아낼 수 없다. 오직 사랑만이 그렇게 할 수 있다", 헬렌 켈러의 "세상에서 가장 아름다운 것은 마음으로 느껴야 합니다", 헤르만 헤세의 "사랑하는 것이야말로 진정한 행복이다" 등이 깊은 울림을 줍니다. 진정한 사랑 명언은 단순히 감정을 묘사하는 것이 아니라 사랑의 본질을 포착합니다.' },
            { q: '사랑과 용기는 어떤 관계가 있나요?', a: '위인들의 명언을 보면 사랑과 용기는 불가분의 관계입니다. 마틴 루터 킹은 증오 앞에서 사랑을 선택하는 것이 가장 용감한 행위라고 봤습니다. 브레네 브라운 연구에 따르면 진정한 사랑은 취약함을 드러내는 용기를 필요로 합니다. 사랑한다는 것은 그 자체로 상처받을 위험을 감수하는 용감한 행위입니다.' },
            { q: '자신을 사랑하는 것의 중요성을 담은 명언이 있나요?', a: '오스카 와일드는 "자신을 사랑하는 것은 평생의 로맨스의 시작이다"라고 했습니다. 마야 안젤루는 자기 자신을 소중히 여기는 것이 타인을 진정으로 사랑하는 출발점이라고 강조했습니다. 현대 심리학에서도 건강한 자기 사랑(자기효능감, 자기존중감)이 더 깊고 건강한 대인관계의 기반이 된다는 것을 입증하고 있습니다.' },
            { q: '실연이나 이별의 아픔에 위로가 되는 명언은?', a: 'C.S. 루이스는 "마음이 아프다는 것은 마음이 있다는 증거"라고 했습니다. 이별의 고통이 사랑했다는 증거임을 상기시켜 줍니다. 알베르 카뮈의 "당신의 마음이 부서졌다면, 당신은 진심으로 살았다는 것"이라는 말도 같은 맥락입니다. 상처는 깊이 살았다는 훈장입니다.' }
        ]
    },
    '지혜': {
        editorial: `<p>지혜는 지식과 다릅니다. 지식은 배울 수 있지만 지혜는 경험과 성찰을 통해서만 쌓입니다. 이것이 바로 지혜에 관한 명언이 특별한 이유입니다 — 그 말들은 단순한 정보가 아니라, 긴 인생을 살아온 사람들의 정수(精髓)이기 때문입니다.</p>
<p>공자는 "아는 것을 안다고 하고, 모르는 것을 모른다고 하는 것 — 이것이 앎이다"라고 했습니다. 소크라테스도 "내가 아는 것은 내가 아무것도 모른다는 것이다"라는 역설적 지혜를 남겼습니다. 동서양의 두 위대한 사상가가 수천 킬로미터 떨어진 곳에서 동시에 같은 진실을 발견했다는 것은 놀랍습니다. 진정한 지혜는 자신의 무지를 인정하는 겸손에서 시작된다는 것입니다.</p>
<p>노자는 "남을 아는 자는 지식이 있고, 자신을 아는 자는 지혜가 있다"고 했습니다. 이 짧은 문장은 지식과 지혜의 차이를 명료하게 구분합니다. 외부 세계에 대한 지식은 학습으로 얻을 수 있지만, 자기 자신에 대한 이해는 끊임없는 내면의 탐구를 통해서만 가능합니다.</p>
<p>지혜 명언들을 모아보면 하나의 공통된 메시지가 있습니다. 지혜로운 삶이란 답을 아는 삶이 아니라, 옳은 질문을 하는 삶이라는 것입니다. 그 질문들은 우리를 더 깊은 이해와 더 나은 선택으로 이끕니다.</p>`,
        faq: [
            { q: '동양 지혜 명언과 서양 지혜 명언의 차이는 무엇인가요?', a: '동양의 지혜 명언은 주로 조화, 균형, 자연과의 합일을 강조합니다. 공자의 인(仁), 노자의 도(道), 불교의 중도(中道) 등이 대표적입니다. 서양의 지혜 명언은 이성적 탐구, 논리적 사고, 덕(Virtue)의 실천을 강조하는 경향이 있습니다. 소크라테스의 산파술, 아리스토텔레스의 실천적 지혜(phronesis)가 그 예입니다. 그러나 겸손, 성찰, 균형의 중요성은 두 전통 모두에서 공통적으로 나타납니다.' },
            { q: '지혜를 키우는 가장 좋은 방법은 무엇인가요?', a: '위인들의 명언에서 공통적으로 등장하는 지혜를 키우는 방법은 세 가지입니다. 첫째, 끊임없이 질문하고 자기 자신을 성찰하는 것입니다(소크라테스). 둘째, 다양한 경험을 하되 그 경험에서 교훈을 추출하는 것입니다(공자). 셋째, 실패와 고통을 배움의 기회로 전환하는 것입니다(에픽테토스). 지혜는 책에서도 배울 수 있지만, 궁극적으로는 삶의 현장에서 쌓입니다.' },
            { q: '지혜와 나이는 관계가 있나요?', a: '많은 사람들이 나이가 들면 자연히 지혜로워진다고 생각하지만, 위인들의 명언은 다른 이야기를 합니다. 공자는 젊은 제자들에게서도 배울 것이 있다고 했고, 소크라테스는 평생 배우는 자세를 강조했습니다. 경험이 지혜로 전환되려면 그 경험을 깊이 성찰하고 교훈을 끌어내는 노력이 필요합니다. 단순히 나이 드는 것만으로는 지혜가 쌓이지 않습니다.' },
            { q: '일상에서 실천할 수 있는 지혜의 명언을 추천해주세요.', a: '"알면 안다고 하고, 모르면 모른다고 하라" (공자), "남을 아는 자는 지식이 있고, 자신을 아는 자는 지혜가 있다" (노자), "검사하지 않은 삶은 살 가치가 없다" (소크라테스) — 이 명언들은 하루하루 스스로에게 물어볼 수 있는 실용적인 지혜를 담고 있습니다.' }
        ]
    },
    '용기': {
        editorial: `<p>용기는 두려움이 없는 상태가 아닙니다. 위인들의 명언이 이구동성으로 말하는 것은 용기란 두려움 속에서도 행동하는 것이라는 점입니다. 앰브로즈 레드문은 "용기란 두려움이 없는 것이 아니라, 두려움보다 중요한 것이 있다는 판단이다"라고 명확히 정의했습니다.</p>
<p>넬슨 만델라는 27년간의 감금 생활을 견디고 나와 남아프리카공화국의 대통령이 되었습니다. 그는 "나는 두려워하지 않는 용감한 사람이 아니다. 두려움을 정복한 사람이다"라고 했습니다. 이 말은 용기가 타고난 성격이 아니라 연습하고 선택하는 것임을 보여줍니다.</p>
<p>마야 안젤루는 "용기는 모든 덕목 중에서 가장 중요하다. 용기 없이는 일관되게 다른 어떤 덕목도 실천할 수 없기 때문이다"라고 했습니다. 정직하게 살고 싶어도 결과가 두렵다면 정직하기 어렵습니다. 친절하게 살고 싶어도 거절당할까봐 두렵다면 다가서기 어렵습니다. 용기는 다른 모든 미덕의 기반입니다.</p>
<p>용기 명언들을 읽으면 용기를 선택한 사람들이 공통적으로 두려웠다는 것을 알게 됩니다. 그들도 우리처럼 두려워했습니다. 단지, 그 두려움을 이기는 더 중요한 가치를 발견했을 뿐입니다. 그 가치가 무엇인지 찾는 것, 그것이 용기 있는 삶의 시작입니다.</p>`,
        faq: [
            { q: '두려움을 극복하는 방법을 담은 명언이 있나요?', a: '프랭클린 루스벨트의 "우리가 두려워해야 할 것은 두려움 그 자체뿐이다"는 두려움에 대한 두려움이 실제 위험보다 더 해롭다는 통찰을 줍니다. 엘리너 루스벨트의 "매일 하나씩 두려운 일을 하라"는 실천적인 조언입니다. 두려움은 무시해야 할 것이 아니라, 인식하고 작은 실천으로 극복해 나가는 것입니다.' },
            { q: '진정한 용기와 무모함의 차이는 무엇인가요?', a: '아리스토텔레스는 용기를 비겁함과 무모함 사이의 중용(中庸)이라고 정의했습니다. 진정한 용기는 위험을 인식하면서도 올바른 이유로 행동하는 것입니다. 무모함은 결과를 무시하고 무작정 뛰어드는 것이고, 비겁함은 두려움에 압도되어 마땅히 해야 할 일을 하지 않는 것입니다. 용기는 이성과 함께 합니다.' },
            { q: '일상에서 용기를 실천하는 방법은 무엇인가요?', a: '엘리너 루스벨트의 말처럼 "매일 하나씩 두려운 일을 하라"는 실용적인 방법입니다. 작은 용기부터 시작하는 것입니다 — 어색한 대화를 먼저 시작하기, 피드백을 요청하기, 실수를 솔직하게 인정하기. 이런 작은 용기들이 쌓이면 더 큰 도전에 맞설 수 있는 내면의 힘이 길러집니다.' },
            { q: '역사에서 가장 용감했던 사람들의 명언은?', a: '넬슨 만델라의 "나는 두려움을 정복한 사람이다", 마틴 루터 킹의 "두려움 앞에서 도덕적 용기를 발휘하라", 윈스턴 처칠의 "절대, 절대, 절대 포기하지 마라", 해리엇 터브먼의 "나는 기차를 한 번도 멈춘 적이 없다" — 이 명언들은 역사적 위기 속에서 용기를 선택한 사람들의 생생한 증언입니다.' }
        ]
    },
    '행복': {
        editorial: `<p>행복은 인류가 가장 오랫동안 탐구해온 주제 중 하나입니다. 기원전 그리스 철학자 아리스토텔레스부터 현대 긍정심리학까지 — 행복이란 무엇이며 어떻게 찾는지에 대한 탐구는 끊이지 않았습니다. 그리고 수천 년의 탐구 끝에 얻은 지혜들이 명언의 형태로 우리에게 전해집니다.</p>
<p>달라이 라마는 "행복은 준비된 마음에서 온다"고 했습니다. 이 말은 행복이 외적 환경이 아닌 내면의 상태에서 비롯된다는 깊은 통찰을 담고 있습니다. 흥미롭게도 현대 긍정심리학 연구들도 같은 결론에 도달했습니다. 소득이 일정 수준을 넘으면 더 많은 돈이 더 많은 행복을 가져다주지 않는다는 것입니다.</p>
<p>헬렌 켈러는 시각과 청각을 잃었지만 "나는 행복합니다. 불행하다면 뭔가 잘못 살아온 것이다"라는 태도로 살았습니다. 마야 안젤루는 "나는 아직 배우고 있다는 것을 깨달을 때 행복하다"고 했습니다. 이들의 행복은 조건이 충족되어서가 아니라 삶의 방향과 의미에서 오는 것입니다.</p>
<p>행복 명언들이 가르쳐 주는 역설이 있습니다. 행복을 직접적으로 추구할수록 오히려 멀어지기 쉽습니다. 의미 있는 일을 하고, 깊은 관계를 맺고, 성장을 추구하는 과정에서 행복은 부산물로 찾아옵니다.</p>`,
        faq: [
            { q: '행복해지는 방법을 알려주는 명언은 무엇인가요?', a: '달라이 라마의 "행복은 준비된 마음에서 온다", 에픽테토스의 "우리를 불행하게 만드는 것은 사건이 아니라 그 사건에 대한 우리의 판단이다", 마커스 아우렐리우스의 "행복한 삶은 내부에서 만들어진다" 등이 핵심적인 지혜를 담고 있습니다. 행복은 찾는 것이 아니라 내면에서 만드는 것입니다.' },
            { q: '돈과 행복은 관계가 있나요?', a: '벤저민 프랭클린은 "부유함은 행복으로 가는 길이 아니다"라고 했습니다. 현대 연구들도 비슷한 결론을 도출했습니다. 기본적인 필요가 충족된 이후에는 더 많은 돈이 더 많은 행복을 보장하지 않습니다. 오히려 의미 있는 관계, 목적 의식, 성장의 경험이 행복에 더 큰 기여를 합니다. 위인들의 명언들은 한결같이 내면의 풍요를 강조합니다.' },
            { q: '매일 조금 더 행복해지기 위한 실천 방법은?', a: '마커스 아우렐리우스는 매일 아침 감사할 것을 찾는 습관을 가졌습니다. 달라이 라마는 자비(compassion)를 실천하는 것이 행복의 지름길이라고 합니다. 현대 과학도 감사 일기 쓰기, 친절한 행동, 현재에 집중하기(마음챙김)가 행복 지수를 높인다는 것을 확인했습니다. 작지만 꾸준한 습관이 행복의 기반을 만듭니다.' },
            { q: '불행한 상황에서 행복을 찾는 명언이 있나요?', a: '빅토르 프랭클은 나치 강제수용소에서 살아남으며 "삶의 의미를 찾는 것이 최악의 상황도 견디게 해준다"는 것을 발견했습니다. 헬렌 켈러는 시청각 장애에도 불구하고 "낙관주의는 삶과 함께하는 믿음이다"라고 했습니다. 상황이 아무리 어려워도 그 안에서 의미와 선택의 자유를 찾을 수 있다는 것, 이것이 역경 속 행복의 비결입니다.' }
        ]
    },
    '변화': {
        editorial: `<p>변화는 인생에서 가장 확실한 것이자 가장 두려운 것이기도 합니다. 헤라클레이토스는 2,500년 전에 "같은 강물에 두 번 발을 담글 수 없다"고 했습니다. 만물은 끊임없이 변한다는 이 통찰은 오늘날에도 변하지 않는 진리입니다.</p>
<p>많은 사람들이 변화를 두려워하는 이유는 익숙함을 잃는 것에 대한 불안 때문입니다. 그러나 위인들의 명언은 다른 관점을 제시합니다. 아인슈타인은 "어제와 같은 방법을 쓰면서 다른 결과를 기대하는 것은 미친 짓이다"라고 했습니다. 변화는 위험이 아니라 새로운 가능성으로의 문입니다.</p>
<p>간디의 "당신이 세상에서 보고 싶은 변화가 되어라"는 변화에 대한 인식을 완전히 뒤집습니다. 우리는 종종 세상이 변하기를, 상황이 나아지기를 기다립니다. 그러나 간디는 변화가 밖에서 오는 것이 아니라 내 안에서 시작된다고 말합니다. 이것이 역설적으로 가장 강력한 변화의 방법입니다.</p>
<p>변화 명언들은 변화의 두 가지 측면을 모두 이야기합니다. 외부 환경의 변화를 받아들이는 유연함과, 자신이 원하는 변화를 능동적으로 만들어가는 주체성. 이 둘의 균형이 변화의 지혜입니다.</p>`,
        faq: [
            { q: '변화가 두려울 때 도움이 되는 명언은?', a: '헤라클레이토스의 "변화만이 영원하다"는 변화를 두려워하는 것이 얼마나 무의미한지를 일깨웁니다. 찰스 다윈의 "살아남는 종은 가장 강한 종이 아니라 변화에 가장 잘 적응하는 종이다"는 변화를 생존의 조건으로 봅니다. 변화는 피할 수 없는 것이기에, 그것을 두려워하는 대신 적응하고 활용하는 것이 현명합니다.' },
            { q: '스스로를 변화시키는 방법에 대한 명언은?', a: '간디의 "당신이 세상에서 보고 싶은 변화가 되어라"는 가장 강력한 변화의 시작점이 자신임을 말합니다. 아리스토텔레스는 "우리는 반복하는 것의 결과다. 탁월함은 습관이다"라며 변화는 큰 결심이 아니라 작은 습관의 축적임을 보여줍니다.' },
            { q: '나이 들어서도 변화할 수 있나요?', a: '그랜마 모지스(Grandma Moses)는 76세에 처음 그림을 시작하여 101세까지 1,600점 이상을 그렸습니다. 프랭크 로이드 라이트는 생애 후반에 최고의 작품들을 만들었습니다. 변화와 성장에는 나이 제한이 없습니다. C.S. 루이스는 "당신은 돌아가기엔 너무 늙지 않았다. 사실, 돌아가는 것이 앞으로 나아가는 빠른 방법일 때가 있다"고 했습니다.' },
            { q: '좋은 변화와 나쁜 변화를 어떻게 구분하나요?', a: '마커스 아우렐리우스는 "내가 바꿀 수 있는 것과 없는 것을 분별하는 지혜"를 강조했습니다. 모든 변화가 좋은 것은 아닙니다. 핵심은 변화의 방향이 자신의 가치와 일치하는지, 그리고 장기적으로 성장으로 이어지는지를 판단하는 것입니다. 때로는 변화하지 않는 것, 즉 자신의 본질을 지키는 것이 더 용감한 선택이기도 합니다.' }
        ]
    },
    '시간': {
        editorial: `<p>시간은 모든 인간에게 동등하게 주어지는 유일한 자원입니다. 세네카는 2,000년 전에 "우리는 짧은 삶을 받은 것이 아니라 많은 시간을 낭비하는 것이다"라고 했습니다. 이 말은 오늘날 스마트폰과 소셜미디어 시대를 살아가는 우리에게 그 어느 때보다 절실하게 다가옵니다.</p>
<p>시간에 관한 명언들의 핵심 메시지는 두 가지입니다. 첫째, 시간의 소중함을 인식하라는 것입니다. 스티브 잡스는 매일 아침 거울 앞에서 "오늘이 내 마지막 날이라면 지금 하려는 일을 할 것인가?"라고 스스로에게 물었다고 합니다. 둘째, 과거에 집착하거나 미래를 지나치게 걱정하는 대신 현재에 집중하라는 것입니다.</p>
<p>아인슈타인은 "과거에서 배우고, 현재를 살고, 미래를 향해 희망하라"고 했습니다. 물리적으로 시간의 상대성을 증명한 그가 삶에서의 시간에 대해 남긴 이 균형 잡힌 말은 특별한 무게를 가집니다. 과거와 미래 사이에서 현재를 충실히 사는 것, 그것이 시간을 현명하게 사용하는 방법입니다.</p>
<p>시간 명언들은 궁극적으로 우리에게 무엇을 위해 시간을 쓸 것인지 묻습니다. 가장 중요한 일에 가장 좋은 시간을 투자하고 있는지 돌아보게 합니다.</p>`,
        faq: [
            { q: '시간 관리에 도움이 되는 명언은 무엇인가요?', a: '세네카의 "우리는 짧은 삶을 받은 것이 아니라 많은 시간을 낭비하는 것이다"는 시간 낭비에 대한 가장 날카로운 지적입니다. 피터 드러커의 "시간은 관리할 수 없다. 오직 자신을 관리할 수 있을 뿐이다"는 시간 관리의 본질이 자기 관리임을 말합니다. 시간을 아끼는 첫 걸음은 지금 무엇을 하고 있는지를 인식하는 것입니다.' },
            { q: '과거의 후회나 미래의 불안에서 벗어나게 해주는 명언은?', a: '에픽테토스는 "우리가 통제할 수 없는 것에 대해 걱정하는 것은 어리석은 일이다"라고 했습니다. 과거는 바꿀 수 없고, 미래는 아직 오지 않았습니다. 달라이 라마는 "오늘이 내 인생에서 가장 중요한 날이다"라며 현재에 집중할 것을 강조합니다. 현재의 순간에 완전히 집중하는 것이 과거와 미래의 불안에서 벗어나는 방법입니다.' },
            { q: '빠르게 지나가는 시간에 대한 위로가 되는 명언은?', a: '마르쿠스 아우렐리우스는 "시간은 강처럼 흘러간다. 빠르게 흘러가는 것들을 붙잡을 수 없다"고 했습니다. 흘러가는 시간을 붙잡으려 하기보다 그 흐름 속에서 아름다운 것들을 충분히 경험하는 것이 지혜입니다. 오드리 헵번은 "불가능한 것에 손을 뻗는 것, 그것이 항상 아름다운 시간을 만든다"고 했습니다.' },
            { q: '"지금 이 순간"의 소중함을 깨닫게 해주는 명언을 알려주세요.', a: '틱낫한은 "현재의 순간이야말로 우리가 가진 전부다"라고 합니다. 공자는 "우리에게는 두 가지 삶이 있다. 두 번째 삶은 우리가 하나의 삶만 가졌다는 것을 깨달을 때 시작된다"고 했습니다. 지금 이 순간의 소중함은 그것이 지나간 후에야 깨닫게 되는 경우가 많습니다. 위인들의 명언들은 그 깨달음을 미리 전해줍니다.' }
        ]
    },
    '리더십': {
        editorial: `<p>리더십에 관한 명언은 수천 년의 역사를 통해 전장, 정치, 기업, 사회운동 등 다양한 현장에서 탄생했습니다. 고대 로마 장군들, 르네상스 시대 군주들, 현대 기업 CEO들 — 그들이 남긴 리더십의 지혜는 시대를 초월하여 오늘날에도 유효합니다.</p>
<p>윈스턴 처칠은 "리더는 희망을 파는 상인이다"라고 했습니다. 제2차 세계대전의 어두운 시절, 영국 국민에게 희망을 불어넣어 전쟁을 승리로 이끈 그의 경험에서 나온 말입니다. 리더십의 핵심이 지시나 명령이 아니라 비전과 희망을 제시하는 것임을 보여줍니다.</p>
<p>마틴 루터 킹은 "리더는 보스가 아니다. 보스는 사람들을 몰아붙이지만, 리더는 함께 이끈다"고 했습니다. 그는 인종차별이라는 거대한 구조에 맞서 수백만 명을 이끌면서 강압이나 두려움이 아닌 비전과 공감으로 리더십을 실천했습니다.</p>
<p>현대 리더십 연구들도 위대한 리더들의 공통점을 확인해줍니다. 자기 인식, 공감 능력, 명확한 비전, 그리고 구성원을 성장시키는 헌신. 고대 철학자들과 현대 연구자들이 같은 결론에 도달한다는 것이 흥미롭습니다.</p>`,
        faq: [
            { q: '좋은 리더와 나쁜 리더의 차이를 나타내는 명언이 있나요?', a: '마틴 루터 킹의 "리더는 보스가 아니다" 외에도, 존 C. 맥스웰은 "리더십은 영향력이다, 그 이상도 이하도 아니다"라고 정의했습니다. 좋은 리더는 지시하는 대신 영감을 줍니다. 피터 드러커는 "리더의 첫 번째 의무는 진실을 말하는 것이다"라며 리더의 정직성을 강조했습니다.' },
            { q: '리더십은 타고나는 것인가요, 배우는 것인가요?', a: '존 C. 맥스웰은 "리더십은 타고나는 것이 아니라 개발하는 것이다"라고 주장합니다. 역사적으로 많은 위대한 리더들이 처음부터 두각을 나타내지 않았습니다. 링컨은 여러 번 선거에 낙선했고, 처칠은 오랫동안 정치적 아웃사이더였습니다. 리더십은 끊임없는 자기 계발과 경험을 통해 성장하는 능력입니다.' },
            { q: '조직에서 리더십을 발휘하는 방법을 알려주는 명언은?', a: '드와이트 아이젠하워는 "리더십은 다른 사람이 당신이 원하는 것을 하도록 만드는 기술이다"라고 했습니다. 잭 웰치는 "리더가 되기 전에는 성공이 자신의 성장에 관한 것이다. 리더가 된 후에는 다른 사람들의 성장에 관한 것이다"라고 했습니다. 구성원의 성장에 집중하는 것이 진정한 리더십의 시작입니다.' },
            { q: '위기 상황에서 리더십을 발휘한 사람들의 명언은?', a: '처칠의 "절대, 절대, 절대 포기하지 마라", 루스벨트의 "우리가 두려워해야 할 것은 두려움 그 자체뿐이다", 만델라의 "지도자는 양 때를 뒤에서 이끈다" — 이 명언들은 모두 실제 위기 속에서 탄생한 말들입니다. 위기는 리더십의 진가를 드러내는 순간입니다.' }
        ]
    },
    '창의성': {
        editorial: `<p>창의성은 예술가와 발명가만의 특권이 아닙니다. 아인슈타인은 "창의성은 지능이 즐거움을 가질 때 생긴다"고 했습니다. 물리학의 혁명을 일으킨 그의 아이디어들이 빛에 타고 달리는 상상 같은 '놀이'에서 시작되었다는 것은 창의성의 본질을 잘 보여줍니다.</p>
<p>피카소는 "영감은 찾아온다. 그러나 반드시 일하는 도중에 찾아오도록 해야 한다"고 했습니다. 창의성을 기다리는 것이 아니라, 꾸준한 작업과 탐구 속에서 창의성을 불러내는 것입니다. 그가 91세까지 왕성하게 창작 활동을 한 비결이 바로 여기에 있습니다.</p>
<p>창의성에 관한 명언들에서 반복적으로 등장하는 주제는 '연결'입니다. 스티브 잡스는 "창의성은 연결하는 것이다. 창의적인 사람들은 다양한 경험들을 연결할 수 있다"고 했습니다. 서로 무관해 보이는 아이디어들을 새로운 방식으로 연결하는 것이 창의성의 핵심입니다.</p>
<p>창의성 명언들은 또한 실패에 대한 관대함을 강조합니다. 에디슨의 만 번의 실험, 피카소의 끊임없는 화풍 변화, 잡스의 두 번의 실패 끝에 이룬 성공 — 창의성은 완벽주의가 아니라 끊임없는 시도와 실패에서 자랍니다.</p>`,
        faq: [
            { q: '창의성을 높이는 방법에 대한 명언은 무엇인가요?', a: '아인슈타인의 "상상력은 지식보다 중요하다"는 가장 유명한 창의성 명언 중 하나입니다. 피카소의 "영감은 일하는 도중에 찾아온다"는 창의성이 기다림이 아닌 행동에서 온다는 것을 말합니다. 창의성을 높이려면 다양한 분야에 호기심을 갖고, 연결 짓는 습관을 들이고, 실패를 두려워하지 않는 것이 중요합니다.' },
            { q: '창의적인 사람들의 공통점은 무엇인가요?', a: '위인들의 명언과 창의성 연구를 종합하면 몇 가지 공통점이 있습니다. 첫째, 강한 호기심입니다. 레오나르도 다빈치는 거의 모든 분야에 관심을 가졌습니다. 둘째, 실패에 대한 관대함입니다. 에디슨은 수천 번의 실패를 실험 과정으로 봤습니다. 셋째, 경계를 뛰어넘는 사고입니다. 스티브 잡스는 예술과 기술을 결합했습니다.' },
            { q: '창의성과 규칙/제약의 관계는 어떤가요?', a: '많은 사람들이 창의성은 제약이 없을 때 발휘된다고 생각하지만, 위인들의 경험은 다를 때가 많습니다. 셰익스피어는 소네트의 엄격한 형식 안에서 불후의 시를 썼습니다. 건축가 프랭크 로이드 라이트는 "예술은 제약 없이는 존재할 수 없다"고 했습니다. 창의성은 종종 제약과의 창의적 씨름에서 태어납니다.' },
            { q: '나도 창의적인 사람이 될 수 있나요?', a: '아인슈타인은 "창의성은 특별한 재능이 아니라 특별한 태도다"라고 했습니다. 미겔 데 세르반테스는 "창의성은 무에서 유를 만드는 것이 아니라, 있는 것들을 새롭게 조합하는 것이다"라고 했습니다. 창의성은 누구에게나 있습니다. 호기심을 잃지 않고, 다양한 경험을 쌓고, 연결하는 습관을 기른다면 누구든 창의적으로 살 수 있습니다.' }
        ]
    },
    '꿈': {
        editorial: `<p>꿈은 현실이 되기 전 마음속에 존재하는 미래의 씨앗입니다. 마틴 루터 킹의 "나에게는 꿈이 있습니다(I Have a Dream)" 연설은 단순한 연설이 아니라 미국 역사의 방향을 바꾼 비전이었습니다. 꿈의 힘은 단지 개인을 움직이는 것이 아니라, 세상을 변화시키는 것입니다.</p>
<p>월트 디즈니는 "모든 꿈은 실현될 수 있다. 꿈을 추구할 용기가 있다면"이라고 했습니다. 그는 실제로 여러 번 파산하고 실패했지만 꿈을 포기하지 않았습니다. 오늘날 디즈니는 수억 명의 아이들에게 꿈을 심어주는 기업이 되었습니다. 꿈의 진정성이 결국 현실을 바꾼 것입니다.</p>
<p>꿈 명언들에서 주목할 것은 꿈과 행동의 관계입니다. 파울로 코엘료는 "당신이 무언가를 꿈꾼다면, 그것을 이룰 수 있다는 능력도 갖추고 있다"고 했습니다. 꿈이 무의미한 상상이 아니라 실현 가능한 미래임을 말합니다. 그러나 동시에 꿈은 행동 없이 실현되지 않습니다.</p>
<p>꿈에 관한 명언들은 또한 꿈의 본질에 대한 질문을 던집니다. 내가 꾸는 꿈이 정말 나의 꿈인가, 아니면 사회와 주변의 기대가 만든 꿈인가? 진정한 꿈을 찾는 것이 꿈을 이루는 것보다 선행되어야 할 과제일 수 있습니다.</p>`,
        faq: [
            { q: '꿈을 포기하고 싶을 때 힘이 되는 명언은?', a: '월트 디즈니의 "모든 꿈은 실현될 수 있다. 꿈을 추구할 용기가 있다면"은 여러 번 파산을 경험한 그의 실제 삶에서 나온 말이기에 더 큰 무게를 가집니다. 에디슨의 "많은 인생의 실패자들은 성공이 얼마나 가까이 있었는지를 포기할 때 깨닫지 못했다"는 말도 포기의 위험을 경고합니다. 꿈에 다가가는 길은 직선이 아닌 경우가 많습니다.' },
            { q: '작은 꿈과 큰 꿈, 어느 것이 더 좋은가요?', a: '마이크로소프트의 빌 게이츠는 "모든 PC에 컴퓨터를"이라는 당시로서는 황당한 꿈을 꿨고 실현시켰습니다. 마틴 루터 킹의 꿈은 나라 전체를 변화시켰습니다. 큰 꿈은 더 많은 사람을 끌어들이고 더 강력한 동기를 부여합니다. 그러나 큰 꿈도 작은 행동들의 축적으로 이루어집니다. 중요한 것은 꿈의 크기가 아니라 그 꿈에 대한 진정성입니다.' },
            { q: '꿈을 현실로 만들기 위한 구체적인 지혜를 주는 명언은?', a: '나폴레옹 힐은 "무엇이든 마음속으로 그리고 믿을 수 있다면 이룰 수 있다"고 했습니다. 공자는 "어떤 일이든 세 가지가 필요하다: 배움을 향한 사랑, 배운 것을 따를 용기, 가르침을 받으면 가르쳐 줄 뜻"이라고 했습니다. 꿈은 믿음에서 시작하지만, 계획과 행동 없이는 실현되지 않습니다.' },
            { q: '꿈을 꾸기에 너무 늦은 나이가 있나요?', a: '76세에 처음 그림을 시작한 그랜마 모지스(Grandma Moses), 67세에 KFC를 창업한 커넬 샌더스, 40대에 처음 정치에 입문하여 성공한 수많은 정치인들 — 역사는 꿈에 나이 제한이 없다는 것을 보여줍니다. C.S. 루이스는 "당신이 시작하기에 결코 너무 늦지 않았다"고 했습니다. 중요한 것은 나이가 아니라 지금 시작하는 것입니다.' }
        ]
    },
    '영화': {
        editorial: `<p>영화는 20세기가 인류에게 선물한 가장 강력한 이야기 매체입니다. 2시간 남짓의 상영 시간 안에 인생의 희노애락을 담아내고, 때로는 역사를 기록하고, 세상을 바라보는 새로운 시각을 제공합니다. 그 안에서 탄생한 명대사들은 단순한 대사를 넘어 시대의 정신을 담은 명언이 되었습니다.</p>
<p>영화 명언은 실제 역사 속 위인들의 명언과 다른 특별함이 있습니다. 작가, 감독, 배우가 협력하여 만들어낸 가상의 인물이 하는 말이지만, 그 말 속에는 현실 인간의 보편적 경험이 녹아 있습니다. 《쇼생크 탈출》의 "어떤 선한 것도 오래 지속될 수 없다"는 절망 속에서 희망을 붙잡는 인간의 의지를 담았습니다.</p>
<p>《스타워즈》의 "두려움은 어두운 곳으로 이끄는 길이다"는 수천 년 된 철학적 진리를 SF 서사 속에 녹여냈습니다. 《어린 왕자》의 "가장 중요한 것은 눈에 보이지 않아"는 생텍쥐페리의 깊은 인생철학이 아이들도 이해할 수 있는 언어로 표현된 것입니다.</p>
<p>영화 명언들은 우리가 스크린 앞에 앉아 공유한 집단적 경험의 결정체입니다. 같은 장면에서 눈물 흘리고, 같은 대사에 가슴이 떨렸던 그 순간들이 문화적 유산으로 남은 것입니다.</p>`,
        faq: [
            { q: '영화 역사상 가장 유명한 명대사는 무엇인가요?', a: '미국영화연구소(AFI)가 선정한 역대 명대사 1위는 《바람과 함께 사라지다》의 "솔직히 말하면, 나는 신경 쓰지 않아요"입니다. 《쇼생크 탈출》의 "두려움은 당신을 가두지만, 희망은 당신을 자유롭게 한다", 《스타워즈》의 "포스가 함께하기를" 등도 세계적으로 가장 많이 인용되는 영화 명대사입니다.' },
            { q: '인생 교훈을 주는 영화 명대사를 추천해주세요.', a: '《죽은 시인의 사회》의 "카르페 디엠(Carpe Diem) — 오늘을 붙잡아라"는 현재의 삶을 충실히 살라는 메시지를 줍니다. 《포레스트 검프》의 "인생은 초콜릿 상자 같은 것, 무엇을 집을지 절대 모른다"는 삶의 불확실성과 기대에 대한 통찰을 담습니다. 《인터스텔라》의 "우리는 답을 찾을 것이다. 늘 그래왔듯이"는 도전 정신을 일깨워 줍니다.' },
            { q: '한국 영화 중에도 명대사가 있나요?', a: '한국 영화에도 빛나는 명대사들이 있습니다. 《기생충》의 가치관과 현실을 꿰뚫는 대사들, 《올드보이》의 철학적 대사들, 《건축학개론》의 청춘의 감성을 담은 대사들이 많은 이들의 마음에 남아 있습니다. 한국 영화가 세계적으로 주목받으면서 한국 영화의 명대사들도 전 세계적으로 알려지고 있습니다.' },
            { q: '영화 명대사가 실제 명언과 다른 점은 무엇인가요?', a: '실제 역사 인물의 명언은 그 사람의 삶과 경험에서 우러난 것이라 더 직접적인 무게감을 가집니다. 영화 명대사는 작가가 창조한 이야기 속 인물의 말이지만, 그 안에는 인류의 보편적 경험이 녹아 있습니다. 영화 명대사의 힘은 맥락에 있습니다 — 스크린에서 경험한 감정적 순간과 함께 기억되기에 더 강렬하게 남기도 합니다.' }
        ]
    },
    '책': {
        editorial: `<p>책에 관한 명언을 읽다 보면 재미있는 현상을 발견합니다. 가장 많이 책을 읽은 사람들이 가장 열렬하게 독서를 권합니다. 마크 트웨인은 "책을 읽지 않는 사람은 책을 읽을 수 없는 사람보다 나을 것이 없다"고 했습니다. 독서의 기회를 갖고도 활용하지 않는 것이 더 안타깝다는 것입니다.</p>
<p>프랜시스 베이컨은 "독서는 완전한 인간을 만든다"는 유명한 말을 남겼습니다. 이 말이 쓰인 16세기와 달리, 오늘날은 유튜브, 팟캐스트, 소셜미디어 등 정보를 얻는 방법이 무수히 많아졌습니다. 그럼에도 책 읽기의 가치가 여전한 것은 책이 단순한 정보 전달 이상의 것을 제공하기 때문입니다 — 깊은 사유, 집중력, 다른 삶에 대한 공감 능력.</p>
<p>C.S. 루이스는 "독서는 혼자서 할 수 있는 가장 덜 외로운 활동이다"라고 했습니다. 책 속에서 우리는 수천 년 전 사람들과 대화하고, 다른 문화권의 사람들 삶을 경험하고, 아직 만나지 못한 사람들과 생각을 나눕니다. 독서는 시공간을 초월한 연대의 경험입니다.</p>
<p>책 명언들은 한결같이 독서가 단순한 취미를 넘어 삶을 풍요롭게 하는 필수 활동임을 말합니다. 읽는다는 것은 배운다는 것이고, 배운다는 것은 성장한다는 것입니다.</p>`,
        faq: [
            { q: '독서의 중요성을 강조하는 명언을 알려주세요.', a: '프랜시스 베이컨의 "독서는 완전한 인간을 만들고, 토론은 준비된 인간을 만들고, 쓰기는 정확한 인간을 만든다"는 독서의 인격 형성 효과를 말합니다. 마크 트웨인은 "오늘 읽지 않는 사람은 어제 읽을 수 없었던 사람보다 나을 게 없다"고 했습니다. 링컨은 "나는 능력이 없어 어떤 일을 하지 못하겠다고 대답한 사람을 좋아하지 않는다. 공부하라"고 했습니다.' },
            { q: '어떤 책을 읽어야 하는지 알려주는 명언이 있나요?', a: '에머슨은 "세상에는 좋은 책이 너무 많아서 나쁜 책을 읽을 시간이 없다"고 했습니다. 좋은 책 선택의 기준으로 C.S. 루이스는 "오래된 책을 읽어라. 현재의 관점만이 아닌 더 넓은 시각을 얻을 수 있다"고 권했습니다. 자신이 지금 필요한 것이 무엇인지 — 위로인지, 도전인지, 지식인지 — 에 따라 책을 선택하는 것이 좋습니다.' },
            { q: '독서 습관을 만들기 위한 조언을 담은 명언은?', a: '워런 버핏은 "독서는 인생에서 내가 투자한 것 중 가장 수익률이 높은 투자다"라며 하루 5시간 이상 독서를 합니다. 빌 게이츠는 일주일에 한 권을 읽는 것을 목표로 합니다. 짧게 시작하는 것이 중요합니다 — 하루 20분, 잠들기 전 10페이지. 습관이 쌓이면 독서는 의무가 아닌 즐거움이 됩니다.' },
            { q: '책과 인생의 관계를 말해주는 아름다운 명언은?', a: '헤르만 헤세는 "책은 집보다 더 믿을 수 있는 안식처다"라고 했습니다. 마르셀 프루스트는 "독서를 통해 우리는 혼자가 아님을 발견한다"고 했습니다. 조지 R.R. 마틴은 "책을 읽는 자는 천 개의 삶을 사는 것이다. 읽지 않는 자는 오직 하나의 삶만 산다"고 했습니다. 독서는 한 번뿐인 삶을 무한히 확장시켜 줍니다.' }
        ]
    }
};

function editorialHtml(cat) {
    const data = CATEGORY_CONTENT[cat];
    if (!data) return '';
    return `<section class="editorial-section">
    <div class="container">
        <div class="editorial-content">
            <h2 class="editorial-title">${escHtml(cat)} 명언에 대하여</h2>
            <div class="editorial-text">
                ${data.editorial}
            </div>
        </div>
    </div>
</section>`;
}

function faqHtml(cat) {
    const data = CATEGORY_CONTENT[cat];
    if (!data || !data.faq) return '';
    const faqSchema = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faq.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
    });
    const itemsHtml = data.faq.map((f, i) => `<div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <button class="faq-question" aria-expanded="false" aria-controls="faq-a-${escHtml(cat)}-${i}" itemprop="name">
            ${escHtml(f.q)}
            <span class="faq-icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" id="faq-a-${escHtml(cat)}-${i}" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">${escHtml(f.a)}</p>
        </div>
    </div>`).join('\n');
    return `<section class="faq-section">
    <div class="container">
        <h2>${escHtml(cat)} 명언 자주 묻는 질문</h2>
        <div class="faq-list" itemscope itemtype="https://schema.org/FAQPage">
            ${itemsHtml}
        </div>
    </div>
</section>
<script type="application/ld+json">${faqSchema}</script>
<script>
(function(){
    document.querySelectorAll('.faq-question').forEach(function(btn){
        btn.addEventListener('click', function(){
            var expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);
            btn.querySelector('.faq-icon').textContent = expanded ? '+' : '−';
            var answer = document.getElementById(btn.getAttribute('aria-controls'));
            if(answer) answer.style.display = expanded ? 'none' : 'block';
        });
    });
})();
</script>`;
}

function authorInsightHtml(author, p, authorQuotes) {
    if (!p || !p.bio) return '';
    const cats = [...new Set(authorQuotes.map(q => q.category))];
    const catText = cats.join(', ');
    const quoteCount = authorQuotes.length;
    return `<section class="author-insight-section">
    <div class="container">
        <div class="author-insight-grid">
            <div class="author-insight-block">
                <h2>${escHtml(author)}의 명언을 통해 배우는 것</h2>
                <p>${escHtml(author)}의 명언 ${quoteCount}개를 살펴보면 주로 <strong>${escHtml(catText)}</strong>에 관한 깊은 통찰을 담고 있습니다. 그의 삶 자체가 이 말들의 살아있는 증거입니다.</p>
                <p>${escHtml(p.bio)}</p>
                <p>${escHtml(author)}의 명언들은 단순한 격언이 아닙니다. 그것은 실제로 그 가치들을 삶으로 구현한 사람의 경험에서 나온 지혜입니다. 각 명언 아래의 해설을 통해 그 말이 탄생한 맥락과 오늘날의 의미를 함께 탐구해 보세요.</p>
            </div>
            <div class="author-insight-stats">
                <div class="insight-stat">
                    <span class="insight-stat-num">${quoteCount}</span>
                    <span class="insight-stat-label">대표 명언</span>
                </div>
                <div class="insight-stat">
                    <span class="insight-stat-num">${cats.length}</span>
                    <span class="insight-stat-label">주제 카테고리</span>
                </div>
            </div>
        </div>
    </div>
</section>`;
}

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
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
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
<script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.0/kakao.min.js" integrity="sha384-l68Y9yH67iXU/lO62nUoD5AUnqUa6D3pS5H79D7aUfXpYn6X6Y/fK68Y9yH67iXU" crossorigin="anonymous"></script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7Y20CR5QH9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-7Y20CR5QH9');
</script>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5029784324732715" crossorigin="anonymous"></script>
<!-- Microsoft Clarity -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vu3t6ywybl");
</script>
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

    ${editorialHtml(cat)}

    <section class="static-quotes-section">
        <div class="container">
            <h2>${escHtml(cat)} 명언 ${catQuotes.length}선 전체 목록</h2>
            <div class="static-quotes-list">
                ${catQuotes.map(q => quoteItemHtml(q)).join('\n')}
            </div>
        </div>
    </section>

    ${adsenseBlock()}

    ${faqHtml(cat)}

    <section class="static-related">
        <div class="container">
            <h2>다른 카테고리 명언 보기</h2>
            <div class="related-tags">
                ${relatedLinks}
            </div>
            <div style="text-align:center;margin-top:1.5rem;">
                <a href="index.html#categories" class="btn-main-site">명언의 정원 전체 명언 보기</a>
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

    ${authorInsightHtml(author, p, authorQuotes)}

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
                <a href="index.html#people" class="btn-main-site">전체 인물 명언 보기</a>
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
    border-radius: 4px 4px var(--radius-lg) var(--radius-lg);
    padding: 2.5rem 2rem 2rem;
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.012'/%3E%3C/svg%3E");
}

.static-quote-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1.5rem;
    width: 20px;
    height: 32px;
    background: var(--primary);
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%);
    opacity: 0.8;
}

.static-quote-item:hover { 
    transform: translateY(-4px);
    box-shadow: var(--shadow); 
}

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

/* ===== EDITORIAL SECTION ===== */
.editorial-section {
    padding: 3rem 0;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
}
.editorial-content { max-width: 760px; }
.editorial-title {
    font-family: var(--font-serif);
    font-size: 1.35rem;
    color: var(--text);
    margin-bottom: 1.2rem;
    position: relative;
    padding-left: 1rem;
}
.editorial-title::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.1em;
    bottom: 0.1em;
    width: 4px;
    background: var(--primary);
    border-radius: 2px;
}
.editorial-text p {
    font-size: 0.97rem;
    line-height: 1.85;
    color: var(--text-muted);
    margin-bottom: 1rem;
}
.editorial-text p:last-child { margin-bottom: 0; }

/* ===== FAQ SECTION ===== */
.faq-section {
    padding: 3rem 0;
    background: var(--card-bg);
    border-top: 1px solid var(--border);
}
.faq-section h2 {
    font-family: var(--font-serif);
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    color: var(--text);
}
.faq-list { display: flex; flex-direction: column; gap: 0.75rem; max-width: 760px; }
.faq-item {
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    background: var(--bg);
}
.faq-question {
    width: 100%;
    background: none;
    border: none;
    padding: 1rem 1.2rem;
    text-align: left;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    line-height: 1.4;
}
.faq-question:hover { background: var(--primary-light); color: var(--primary); }
.faq-icon {
    font-size: 1.2rem;
    font-weight: 400;
    color: var(--primary);
    flex-shrink: 0;
}
.faq-answer {
    display: none;
    padding: 0 1.2rem 1rem;
    border-top: 1px solid var(--border);
}
.faq-answer p {
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--text-muted);
    margin: 0.75rem 0 0;
}

/* ===== AUTHOR INSIGHT SECTION ===== */
.author-insight-section {
    padding: 2.5rem 0;
    background: var(--card-bg);
    border-bottom: 1px solid var(--border);
}
.author-insight-grid {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    align-items: start;
}
@media (max-width: 600px) {
    .author-insight-grid { grid-template-columns: 1fr; }
}
.author-insight-block h2 {
    font-family: var(--font-serif);
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--text);
}
.author-insight-block p {
    font-size: 0.93rem;
    line-height: 1.85;
    color: var(--text-muted);
    margin-bottom: 0.9rem;
}
.author-insight-block p:last-child { margin-bottom: 0; }
.author-insight-stats {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 110px;
}
.insight-stat {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1rem;
    text-align: center;
}
.insight-stat-num {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary);
    font-family: var(--font-serif);
    line-height: 1;
}
.insight-stat-label {
    display: block;
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-top: 0.3rem;
}
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
