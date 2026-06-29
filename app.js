// Data Storage
const defaultPosts = [
    // 마이크론 테크놀러지 (4개)
    {
        id: 101, category: 'overseas', company: '마이크론 테크놀러지',
        title: '마이크론, 세계 최대 245TB SSD ‘6600 ION’ 출하 시작',
        content: '[번역 요약] 마이크론이 AI 데이터센터의 스토리지 병목 현상을 해결할 245TB 초고용량 SSD 출하를 시작했습니다. 이는 업계 최대 용량으로, AI 워크로드 처리에 혁신적인 효율성을 제공할 것으로 기대됩니다.',
        image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1000',
        date: '2026-05-05', url: 'https://www.micron.com'
    },
    {
        id: 107, category: 'overseas', company: '마이크론 테크놀러지',
        title: '마이크론, 2026년 HBM 생산량 전량 매진 발표',
        content: '[번역 요약] 마이크론은 AI 수요 폭증으로 인해 2026년까지 계획된 고대역폭 메모리(HBM) 생산 물량이 이미 전량 예약 완료되었다고 밝혔습니다. 엔비디아와의 협력이 실적 성장의 핵심 동력입니다.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
        date: '2026-05-01', url: 'https://www.micron.com'
    },
    {
        id: 109, category: 'overseas', company: '마이크론 테크놀러지',
        title: '마이크론, 차세대 HBM4 샘플 엔비디아 공급 및 테스트 진행',
        content: '[번역 요약] 마이크론이 차세대 HBM4 샘플을 엔비디아에 공급하고 본격적인 테스트에 돌입했습니다. 12단 및 16단 적층 기술을 통해 데이터 처리 속도를 획기적으로 높인 것이 특징입니다.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-20', url: 'https://www.micron.com'
    },
    {
        id: 110, category: 'overseas', company: '마이크론 테크놀러지',
        title: '마이크론, 미국 아이다호주 신규 팹 건설에 정부 보조금 수령',
        content: '[번역 요약] 미국 반도체법(CHIPS Act)에 따라 마이크론이 아이다호주 신규 메모리 팹 건설을 위한 대규모 연방 보조금을 수령했습니다. 이를 통해 첨단 메모리 자급체제를 강화할 계획입니다.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-15', url: 'https://www.micron.com'
    },

    // 샌디스크/웨스턴디지털 (4개)
    {
        id: 102, category: 'overseas', company: '샌디스크',
        title: '웨스턴디지털, AI 데이터센터용 HDD 수요 폭증으로 실적 급등',
        content: '[번역 요약] 샌디스크의 모기업 웨스턴디지털이 2026 회계연도 3분기 어닝 서프라이즈를 기록했습니다. AI 학습을 위한 대규모 데이터 저장 수요가 늘면서 고용량 HDD와 SSD 판매가 사상 최대치를 기록 중입니다.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000',
        date: '2026-05-04', url: 'https://www.westerndigital.com'
    },
    {
        id: 111, category: 'overseas', company: '샌디스크',
        title: '샌디스크, AI 데이터센터용 30TB 초고용량 HDD 전격 출시',
        content: '[번역 요약] 샌디스크가 하이퍼스케일러 데이터센터를 겨냥한 30TB 용량의 최신 HDD를 출시했습니다. AI 서버의 방대한 데이터 저장 용량을 지원하며 운영 비용 절감에 최적화된 제품입니다.',
        image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-28', url: 'https://www.westerndigital.com'
    },
    {
        id: 112, category: 'overseas', company: '샌디스크',
        title: '웨스턴디지털, 낸드 플래시 가격 인상에 따른 수익성 대폭 개선',
        content: '[번역 요약] 메모리 시장의 공급 부족 현상으로 낸드 플래시 가격이 지속 상승하면서 웨스턴디지털의 수익성이 크게 개선되었습니다. 특히 기업용 SSD 부문의 이익률이 가파르게 상승하고 있습니다.',
        image: 'https://images.unsplash.com/photo-1564410267841-915d8e4d71ea?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-18', url: 'https://www.westerndigital.com'
    },
    {
        id: 113, category: 'overseas', company: '샌디스크',
        title: '샌디스크, 차세대 BiCS 낸드 기술 로드맵 공개... ‘적층 경쟁’ 주도',
        content: '[번역 요약] 웨스턴디지털과 샌디스크가 차세대 BiCS 낸드 플래시 기술 로드맵을 발표했습니다. 더 얇은 층으로 더 높이 쌓는 기술을 통해 제조 원가 경쟁력을 극대화할 전략입니다.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-10', url: 'https://www.westerndigital.com'
    },

    // 인텔 (4개)
    {
        id: 103, category: 'overseas', company: '인텔',
        title: '인텔, TSMC와 파운드리 협력 강화... ‘물리적 AI’ 시대 선포',
        content: '[번역 요약] 인텔이 차세대 칩 생산을 위해 TSMC와의 전략적 제조 파운드리 파트너십을 확대합니다. 겔싱어 CEO는 클라이언트 컴퓨팅과 물리적 AI를 중심으로 비즈니스 구조를 전면 쇄신하겠다고 발표했습니다.',
        image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1000',
        date: '2026-05-03', url: 'https://www.intel.com'
    },
    {
        id: 114, category: 'overseas', company: '인텔',
        title: '인텔, 가우디 3(Gaudi 3) AI 가속기 시장 점유율 가파른 상승',
        content: '[번역 요약] 인텔의 최신 AI 가속기 가우디 3가 엔비디아의 대항마로 부상하며 시장 점유율을 넓히고 있습니다. 가성비와 개방형 생태계를 앞세워 글로벌 클라우드 기업들의 채택이 늘고 있습니다.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-25', url: 'https://www.intel.com'
    },
    {
        id: 115, category: 'overseas', company: '인텔',
        title: '인텔, 1.8A(18나노) 공정 양산 안정화 단계 진입... ‘파운드리 왕좌’ 도전',
        content: '[번역 요약] 인텔 파운드리 서비스(IFS)가 최첨단 1.8A 공정의 수율 안정화에 성공하며 본격적인 고객사 유치에 나섰습니다. 이는 삼성전자 및 TSMC와의 기술 경쟁에서 중요한 분기점이 될 전망입니다.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-12', url: 'https://www.intel.com'
    },
    {
        id: 116, category: 'overseas', company: '인텔',
        title: '인텔, 차세대 루나 레이크 CPU 성능 벤치마크 공개... 저전력 혁신',
        content: '[번역 요약] 인텔이 모바일용 차세대 CPU ‘루나 레이크’의 벤치마크 결과를 공개했습니다. 전력 소모를 절반으로 줄이면서도 AI 연산 성능은 3배 향상시켜 AI 노트북 시장을 선점할 계획입니다.',
        image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-05', url: 'https://www.intel.com'
    },

    // 삼성전자 (4개)
    {
        id: 105, category: 'domestic', company: '삼성전자',
        title: '삼성전자, 4나노 공정 수율 80% 돌파... AI TV 라인업 확대',
        content: '삼성전자가 파운드리 4나노 공정 수율을 80% 이상으로 끌어올리며 경쟁력을 회복했습니다. 동시에 AI 프로세서를 탑재한 2026년형 프리미엄 TV 라인업을 통해 가전 시장의 AI 혁신을 주도하고 있습니다.',
        image: 'https://images.unsplash.com/photo-1591815302525-756a9bcc3425?auto=format&fit=crop&q=80&w=1000',
        date: '2026-05-02', url: 'https://www.samsung.com/sec'
    },
    {
        id: 108, category: 'domestic', company: '삼성전자',
        title: '삼성전자, 업계 최초 ‘3나노 GAA’ 2세대 공정 고객사 확보',
        content: '삼성전자가 3나노 게이트올어라운드(GAA) 2세대 공정의 양산 안정성을 확보하고, 다수의 글로벌 팹리스 고객사들과 계약을 체결했습니다. TSMC와의 점유율 격차 축소가 기대됩니다.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-30', url: 'https://www.samsung.com/sec'
    },
    {
        id: 117, category: 'domestic', company: '삼성전자',
        title: '삼성전자, 12나노급 D램 기반 32Gb DDR5 개발 성공',
        content: '삼성전자가 업계 최선단 12나노급 공정을 활용해 고용량 32Gb DDR5 D램 개발에 성공했습니다. 별도의 TSV 기술 없이도 대용량 모듈 제작이 가능해 서버 시장의 판도를 바꿀 전망입니다.',
        image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-22', url: 'https://www.samsung.com/sec'
    },
    {
        id: 118, category: 'domestic', company: '삼성전자',
        title: '삼성전자, 미국 테일러 파운드리 공장 연내 가동 준비 완료',
        content: '삼성전자가 미국 텍사스주 테일러시에 건설 중인 최첨단 파운드리 공장의 장비 반입을 마무리하고 연내 가동을 위한 최종 점검에 돌입했습니다. 북미 고객사 대응이 한층 빨라질 예정입니다.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-15', url: 'https://www.samsung.com/sec'
    },

    // SK하이닉스 (4개)
    {
        id: 104, category: 'domestic', company: 'SK하이닉스',
        title: 'SK하이닉스, 엔비디아 차세대 ‘베라 루빈’용 HBM3E 독점 공급 논의',
        content: 'SK하이닉스 주가가 사상 최고치를 경신했습니다. 엔비디아의 차세대 AI 플랫폼 ‘베라 루빈(Vera Rubin)’에 탑재될 HBM3E 물량에 대한 독점적 공급 논의가 진행 중이라는 소식이 시장을 자극했습니다.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
        date: '2026-05-06', url: 'https://www.skhynix.com'
    },
    {
        id: 119, category: 'domestic', company: 'SK하이닉스',
        title: 'SK하이닉스, 주가 사상 최고치 경신 및 1분기 영업이익 역대급 달성',
        content: 'SK하이닉스가 HBM 시장 독점에 힘입어 2026년 1분기 어닝 서프라이즈를 기록했습니다. 영업이익률이 업계 최고 수준을 기록하며 메모리 반도체의 ‘황금기’를 증명하고 있습니다.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-24', url: 'https://www.skhynix.com'
    },
    {
        id: 120, category: 'domestic', company: 'SK하이닉스',
        title: 'SK하이닉스, 세계 최초 300단 낸드 플래시 양산 기술 확보',
        content: 'SK하이닉스가 300단 이상의 초고적층 낸드 플래시 양산 기술을 세계 최초로 확보했습니다. 이를 통해 모바일 및 데이터센터용 초고용량 저장장치 시장 선점에 나섭니다.',
        image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-14', url: 'https://www.skhynix.com'
    },
    {
        id: 121, category: 'domestic', company: 'SK하이닉스',
        title: 'SK하이닉스, 청주 M15X 공장 건설 가속화 및 HBM 캐파 증설',
        content: 'SK하이닉스가 청주에 건설 중인 M15X 팹의 완공 일정을 앞당기기로 했습니다. 급증하는 HBM 수요에 대응하기 위해 패키징 설비를 대폭 증설할 계획입니다.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-08', url: 'https://www.skhynix.com'
    },

    // 한미반도체 (4개)
    {
        id: 106, category: 'domestic', company: '한미반도체',
        title: '한미반도체, 세미콘 동남아에서 ‘2.5D TC 본더’ 신제품 공개',
        content: '한미반도체가 동남아시아 최대 반도체 전시회에서 CoWoS 패키징 핵심 장비인 ‘2.5D TC 본더 40/120’ 모델을 공개했습니다. 글로벌 AI 반도체 공급망 내 장비 리더십이 더욱 강화될 전망입니다.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000',
        date: '2026-05-05', url: 'http://www.hanmisemi.com'
    },
    {
        id: 122, category: 'domestic', company: '한미반도체',
        title: '한미반도체, 글로벌 빅테크향 TC 본더 대규모 추가 수주 성공',
        content: '한미반도체가 북미 소재 글로벌 AI 반도체 기업으로부터 수천억 원 규모의 TC 본더 장비 추가 수주에 성공했습니다. HBM 생산 필수 장비로서의 독보적 지위를 굳히고 있습니다.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-27', url: 'http://www.hanmisemi.com'
    },
    {
        id: 123, category: 'domestic', company: '한미반도체',
        title: '한미반도체, HBM4용 차세대 하이브리드 본더 프로토타입 완료',
        content: '한미반도체가 미래 HBM4 시장을 겨냥한 차세대 하이브리드 본딩 장비의 프로토타입 제작을 완료했습니다. 칩 간 간격을 최소화하는 초정밀 본딩 기술이 핵심입니다.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-19', url: 'http://www.hanmisemi.com'
    },
    {
        id: 124, category: 'domestic', company: '한미반도체',
        title: '한미반도체, 인천 신공장 가동에 따른 생산 캐파 2배 확대',
        content: '한미반도체가 인천 본사 부근에 건설한 신규 생산 라인의 가동을 시작했습니다. 이를 통해 밀려드는 글로벌 수주 물량에 기민하게 대응할 수 있는 기반을 마련했습니다.',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000',
        date: '2026-04-11', url: 'http://www.hanmisemi.com'
    },
    // 엔비디아 (4개)
    {
        id: 125, category: 'interest', company: '엔비디아',
        title: '엔비디아, 차세대 AI 플랫폼 ‘블랙웰’ 본격 출하... 전 세계 데이터센터 공급 시작',
        content: '엔비디아가 차세대 AI GPU인 블랙웰(Blackwell) 아키텍처 기반의 가속기 칩 출하를 본격적으로 개시했습니다. 기존 호퍼(Hopper) 시리즈 대비 연산 속도가 최대 30배 향상되어 글로벌 클라우드 서비스 제공업체(CSP)들의 대규모 수주가 이어지고 있습니다.',
        image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&q=80&w=1000',
        date: '2026-05-26', url: 'https://www.nvidia.com'
    },
    {
        id: 126, category: 'interest', company: '엔비디아',
        title: '엔비디아, 시가총액 세계 1위 탈환... AI 칩 수요 지속세 증명',
        content: 'AI 시장의 지속적인 성장세에 힘입어 엔비디아의 주가가 연일 급등하며 글로벌 시가총액 1위 자리를 다시 차지했습니다. 월가 분석가들은 빅테크 기업들의 AI 인프라 투자 규모가 여전히 견고하다고 평가하고 있습니다.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000',
        date: '2026-05-20', url: 'https://www.nvidia.com'
    },
    {
        id: 127, category: 'interest', company: '엔비디아',
        title: '엔비디아, 차세대 ‘블랙웰 Ultra’ 및 HBM4 탑재 로드맵 공개',
        content: '엔비디아가 개발자 콘퍼런스에서 블랙웰 울트라와 차세대 루빈(Rubin) 플랫폼의 세부 사양을 발표했습니다. 특히 HBM4 탑재 시점을 앞당겨 AI 학습 및 추론 속도를 획기적으로 개선하겠다는 전략을 공개했습니다.',
        image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1000',
        date: '2026-05-15', url: 'https://www.nvidia.com'
    },
    {
        id: 128, category: 'interest', company: '엔비디아',
        title: '엔비디아, AI 자율주행 플랫폼 ‘드라이브 토르’ 탑재 차량 연내 출시',
        content: '엔비디아의 차세대 차량용 고성능 컴퓨터 칩인 ‘드라이브 토르(Drive Thor)’를 탑재한 자율주행 전기차들이 연내 글로벌 시장에 본격적으로 출시될 예정입니다. 자동차 산업 내 스마트 인프라 혁신이 더욱 가속화되고 있습니다.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
        date: '2026-05-10', url: 'https://www.nvidia.com'
    },
    // 자라 주식 투자법 (이미지)
    {
        id: 132, category: 'invest_method', company: '주식투자법',
        title: '자라 주식 투자법 3',
        content: '시장은 항상 움직입니다. 기회를 잡는 자라 투자법의 실천 방안입니다.',
        image: 'strategy3.jpg',
        date: '2026-05-13', url: '#'
    }
];

// Initialize posts by merging default data with localStorage
let savedPosts = JSON.parse(localStorage.getItem('stock_news_data')) || [];
let posts = [...defaultPosts];

// Add saved posts that are NOT in defaultPosts (checking by ID)
savedPosts.forEach(saved => {
    if (!posts.some(p => p.id === saved.id)) {
        posts.push(saved);
    }
});

const categoryNames = {
    'all': '전체 뉴스 피드',
    'overseas': '해외 반도체기업 뉴스',
    'domestic': '국내 반도체기업 뉴스',
    'interest': '관심 기업 뉴스',
    'invest': '투자 기업 뉴스',
    'invest_method': '자라 주식 투자법'
};

// DOM Elements
const postsList = document.getElementById('posts-list');
const categoryTitle = document.getElementById('current-category-title');
const menuItems = document.querySelectorAll('.menu-item');
const submenuItems = document.querySelectorAll('.submenu-item');
const postForm = document.getElementById('post-form');
const postModal = document.getElementById('post-modal');
const writeBtn = document.getElementById('write-btn');
const closeModal = document.getElementById('close-modal');

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderPosts('all');
});

// Render Posts
function renderPosts(categoryFilter = 'all', companyFilter = null) {
    postsList.innerHTML = '';
    
    // Hide hero section when 'invest_method' is selected
    const hero = document.querySelector('.hero-section');
    if (categoryFilter === 'invest_method') {
        hero.style.display = 'none';
        
        // Add special small banners for abc.png and abc2.png
        const bannerContainer = document.createElement('div');
        bannerContainer.className = 'invest-banner-container';
        bannerContainer.innerHTML = `
            <div class="invest-banner-item"><img src="abc.png" alt="Guide 1"></div>
            <div class="invest-banner-item"><img src="abc2.png" alt="Guide 2"></div>
        `;
        postsList.appendChild(bannerContainer);
    } else {
        hero.style.display = 'block';
    }

    if (companyFilter) {
        categoryTitle.innerText = `${companyFilter} 뉴스`;
    } else {
        categoryTitle.innerText = categoryNames[categoryFilter];
    }

    let filtered = (categoryFilter === 'all' || companyFilter)
        ? posts 
        : posts.filter(p => p.category === categoryFilter);
    
    if (companyFilter) {
        filtered = filtered.filter(p => p.company === companyFilter);
    }

    if (filtered.length === 0 && categoryFilter !== 'invest_method') {
        postsList.innerHTML += `<div class="no-posts">해당 카테고리에 등록된 뉴스가 없습니다.</div>`;
        return;
    }

    filtered.sort((a, b) => b.id - a.id).forEach(post => {
        const card = document.createElement('div');
        card.className = `post-card ${post.category === 'invest_method' ? 'invest-method-card' : ''}`;
        card.innerHTML = `
            <div class="post-img-container">
                <img src="${post.image || 'https://via.placeholder.com/400x200?text=Stock+News'}" alt="${post.company}" class="post-img">
            </div>
            <div class="post-body">
                <div class="post-meta">
                    <span class="badge badge-${post.category}">${getCategoryLabel(post.category)}</span>
                    <span class="post-date">${post.date}</span>
                </div>
                <div class="post-company">${post.company}</div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-content">${post.content}</p>
                <div class="source-link">
                    <a href="${post.url}" target="_blank">출처: ${post.url} ↗</a>
                </div>
                <div class="post-footer">
                    <button class="btn-del" onclick="deletePost(${post.id})">뉴스 삭제</button>
                </div>
            </div>
        `;
        postsList.appendChild(card);
    });
}

function getCategoryLabel(cat) {
    const labels = {
        'overseas': '해외 반도체기업',
        'domestic': '국내 반도체기업',
        'interest': '관심 기업',
        'invest': '투자 기업',
        'invest_method': '주식투자법'
    };
    return labels[cat] || cat;
}

// Event Listeners
menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // Prevent trigger if clicking inside dropdown content (though menu-item itself is usually the button)
        if (e.target.classList.contains('submenu-item')) return;
        
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        renderPosts(item.dataset.category);
        
        // Smooth scroll to results
        document.querySelector('.board-container').scrollIntoView({ behavior: 'smooth' });
    });
});

submenuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent parent menu-item click
        const company = item.dataset.company;
        const category = item.dataset.category;
        
        menuItems.forEach(i => i.classList.remove('active'));
        // Find and highlight the corresponding parent menu item
        document.querySelector(`.menu-item[data-category="${category}"]`).classList.add('active');
        
        renderPosts(category, company);
        
        // Hide dropdown content immediately upon click
        const dropdownContent = item.closest('.dropdown-content');
        if (dropdownContent) {
            dropdownContent.classList.add('clicked');
        }
        
        document.querySelector('.board-container').scrollIntoView({ behavior: 'smooth' });
    });
});

// Reset dropdown clicked state when mouse leaves the dropdown
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseleave', () => {
        const content = dropdown.querySelector('.dropdown-content');
        if (content) {
            content.classList.remove('clicked');
        }
    });
});

writeBtn.addEventListener('click', () => {
    postModal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
    postModal.classList.add('hidden');
});

postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newPost = {
        id: Date.now(),
        category: document.getElementById('post-category').value,
        title: document.getElementById('post-title').value,
        company: document.getElementById('post-company').value,
        content: document.getElementById('post-content').value,
        image: document.getElementById('post-image').value,
        date: new Date().toISOString().split('T')[0]
    };

    posts.push(newPost);
    localStorage.setItem('stock_news_data', JSON.stringify(posts));
    
    postForm.reset();
    postModal.classList.add('hidden');
    
    // Switch to 'all' to see new post
    menuItems.forEach(i => i.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    renderPosts('all');
});

window.deletePost = function(id) {
    if (confirm('이 게시물을 삭제하시겠습니까?')) {
        posts = posts.filter(p => p.id !== id);
        localStorage.setItem('stock_news_data', JSON.stringify(posts));
        const activeCat = document.querySelector('.menu-item.active').dataset.category;
        renderPosts(activeCat);
    }
};
