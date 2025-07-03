// 无名英雄数据
const heroesData = [
    {
        name: "阿达·洛芙莱斯",
        title: "编程之母",
        description: "第一位程序员，发现计算机不仅可以计算数字，还能处理符号和音乐等内容。",
        icon: "fa-solid fa-code",
        achievements: [
            "发明了第一个计算机程序",
            "提出了循环概念",
            "预见了人工智能的可能性"
        ]
    },
    {
        name: "薇拉·鲁宾",
        title: "暗物质先驱",
        description: "通过研究星系旋转曲线，首次提供了暗物质存在的有力证据。",
        icon: "fa-solid fa-star",
        achievements: [
            "发现星系旋转异常现象",
            "提出暗物质理论",
            "获得国家科学奖章"
        ]
    },
    {
        name: "海蒂·拉玛",
        title: "无线通信先驱",
        description: "发明了跳频技术，为现代无线通信奠定基础。",
        icon: "fa-solid fa-wifi",
        achievements: [
            "发明频率跳跃技术",
            "获得电子通信专利",
            "为蓝牙技术发展做出贡献"
        ]
    },
    {
        name: "罗莎琳德·富兰克林",
        title: "DNA结构发现者",
        description: "拍摄了关键的DNA X射线衍射照片，为发现DNA双螺旋结构做出重要贡献。",
        icon: "fa-solid fa-dna",
        achievements: [
            "拍摄著名的'照片51号'",
            "发现DNA的A型和B型结构",
            "研究病毒结构"
        ]
    },
    {
        name: "利斯·迈特纳",
        title: "核裂变发现者",
        description: "首次解释了铀原子核裂变过程，但诺贝尔奖却授予了她的男性同事。",
        icon: "fa-solid fa-atom",
        achievements: [
            "发现核裂变原理",
            "计算核裂变能量释放",
            "推动和平利用核能"
        ]
    },
    {
        name: "格蕾丝·赫柏",
        title: "计算机语言先驱",
        description: "发明了第一个编译器，推动了COBOL语言的发展。",
        icon: "fa-solid fa-terminal",
        achievements: [
            "发明首个编译器",
            "开发COBOL语言",
            "标准化程序设计"
        ]
    }
];

// 初始化英雄画廊
document.addEventListener('DOMContentLoaded', () => {
    initHeroesGallery();
    checkHeroesVisibility();
    window.addEventListener('scroll', checkHeroesVisibility);
});

function initHeroesGallery() {
    const container = document.querySelector('.heroes-grid');
    if (!container) return;

    heroesData.forEach((hero, index) => {
        const card = createHeroCard(hero, index);
        container.appendChild(card);
    });
}

function createHeroCard(hero, index) {
    const card = document.createElement('div');
    card.className = 'hero-card';
    card.style.setProperty('--animation-order', index);

    card.innerHTML = `
        <div class="hero-content">
            <i class="${hero.icon} hero-icon"></i>
            <h3 class="hero-name">${hero.name}</h3>
            <div class="hero-title">${hero.title}</div>
            <p class="hero-description">${hero.description}</p>
            <div class="hero-achievements">
                ${hero.achievements.map(achievement => `
                    <div class="achievement-item">
                        <i class="fa-solid fa-star"></i>
                        <span>${achievement}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    return card;
}

function checkHeroesVisibility() {
    const cards = document.querySelectorAll('.hero-card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = (rect.top <= windowHeight * 0.8);

        if (isVisible) {
            card.classList.add('visible');
        }
    });
} 