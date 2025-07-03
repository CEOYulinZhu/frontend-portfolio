// 偏见与事实数据
const biasData = [
    {
        stereotype: "女性更适合做家务和照顾孩子",
        fact: "根据调查，当男性承担更多家务时，家庭关系更和谐",
        data: "43%",
        icon: "fa-solid fa-house-user"
    },
    {
        stereotype: "女性在科技领域表现不如男性",
        fact: "女性在STEM领域的学术表现与男性相当或更优",
        data: "52%",
        icon: "fa-solid fa-microchip"
    },
    {
        stereotype: "女性领导能力不如男性",
        fact: "研究表明女性领导的企业在危机中表现更稳定",
        data: "87%",
        icon: "fa-solid fa-crown"
    },
    {
        stereotype: "女性更情绪化，不适合做重要决策",
        fact: "数据显示女性决策者往往更注重长期可持续发展",
        data: "74%",
        icon: "fa-solid fa-brain"
    },
    {
        stereotype: "女性创业成功率低",
        fact: "女性创业者的投资回报率平均高于男性",
        data: "63%",
        icon: "fa-solid fa-rocket"
    },
    {
        stereotype: "女性在体育领域竞争力较弱",
        fact: "女性运动员在耐力项目中展现出独特优势",
        data: "58%",
        icon: "fa-solid fa-medal"
    },
    {
        stereotype: "女性不适合从事高强度工作",
        fact: "全球女性医生在疫情期间的平均工作时长超过男性",
        data: "56.3小时",
        icon: "fa-solid fa-user-doctor"
    },
    {
        stereotype: "女性在金融投资方面能力较弱",
        fact: "研究显示女性投资者的年平均收益率优于男性",
        data: "0.4%",
        icon: "fa-solid fa-chart-line"
    },
    {
        stereotype: "女性在数理化学科表现不佳",
        fact: "全球高等教育机构中女性数理化专业优秀毕业生比例",
        data: "48.5%",
        icon: "fa-solid fa-square-root-variable"
    },
    {
        stereotype: "女性不适合担任高管职位",
        fact: "拥有女性高管的企业平均利润率高于同行业水平",
        data: "21%",
        icon: "fa-solid fa-briefcase"
    },
    {
        stereotype: "女性缺乏创新能力",
        fact: "近五年全球专利申请中女性发明人的年增长率",
        data: "16.4%",
        icon: "fa-solid fa-lightbulb"
    },
    {
        stereotype: "女性在政治领导力方面表现欠佳",
        fact: "由女性领导的国家在疫情应对中的平均死亡率低于男性领导的国家",
        data: "40%",
        icon: "fa-solid fa-landmark"
    }
];

// Fisher-Yates 洗牌算法
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 创建卡片元素
function createBiasCard(data) {
    const card = document.createElement('div');
    card.className = 'bias-card';

    card.innerHTML = `
        <div class="bias-card-inner">
            <div class="bias-card-front">
                <i class="${data.icon} bias-icon"></i>
                <p class="bias-stereotype">${data.stereotype}</p>
            </div>
            <div class="bias-card-back">
                <div class="bias-data">${data.data}</div>
                <p class="bias-fact">${data.fact}</p>
            </div>
        </div>
    `;

    return card;
}

// 初始化卡片墙
function initBiasWall() {
    const container = document.querySelector('.bias-cards-container');
    if (!container) return;

    // 清空容器
    container.innerHTML = '';

    // 随机排序数据
    const shuffledData = shuffleArray([...biasData]);

    // 创建并添加卡片
    shuffledData.forEach(data => {
        const card = createBiasCard(data);
        container.appendChild(card);

        // 添加点击事件
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
}

// 检查卡片是否在视口中
function checkCardsVisibility() {
    const cards = document.querySelectorAll('.bias-card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = (rect.top <= windowHeight * 0.8);

        if (isVisible) {
            card.classList.add('visible');
        }
    });
}

// 页面滚动时重新排列卡片
let scrollTimeout;
function handleScroll() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const container = document.querySelector('.bias-cards-container');
        const cards = Array.from(container.children);

        // 获取当前可见的卡片
        const visibleCards = cards.filter(card =>
            card.classList.contains('visible')
        );

        // 只有当所有卡片都可见时才进行重新排列
        if (visibleCards.length === cards.length) {
            const shuffledCards = shuffleArray([...cards]);
            container.innerHTML = '';
            shuffledCards.forEach(card => container.appendChild(card));
        }
    }, 100);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initBiasWall();
    checkCardsVisibility();

    // 添加滚动事件监听
    window.addEventListener('scroll', () => {
        checkCardsVisibility();
        handleScroll();
    });
}); 