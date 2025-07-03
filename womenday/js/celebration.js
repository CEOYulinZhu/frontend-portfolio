// 庆祝方式数据
const celebrationData = [
    {
        country: "中国",
        description: "在中国，三八妇女节是法定的女性半天假期，许多单位会为女性员工组织特别活动。",
        activities: [
            { icon: "fa-gift", text: "赠送鲜花和礼物" },
            { icon: "fa-utensils", text: "举办团建聚餐" },
            { icon: "fa-theater-masks", text: "组织文艺表演" },
            { icon: "fa-award", text: "表彰杰出女性" }
        ],
        footer: "\"半边天\"的力量在这一天得到特别的关注和赞美"
    },
    {
        country: "俄罗斯",
        description: "在俄罗斯，国际妇女节是重要的公共假日，男性会向生活中的女性表达感谢和敬意。",
        activities: [
            { icon: "fa-leaf", text: "郁金香和含羞草是传统礼物" },
            { icon: "fa-microphone-alt", text: "政府举办大型庆祝活动" },
            { icon: "fa-glass-cheers", text: "家庭聚会和特别晚餐" },
            { icon: "fa-hand-holding-heart", text: "男性承担家务" }
        ],
        footer: "这一天被视为春天的开始，象征着美丽和温暖的回归"
    },
    {
        country: "意大利",
        description: "在意大利，妇女节（Festa della Donna）的标志是黄色含羞草，象征着尊重、力量和女性团结。",
        activities: [
            { icon: "fa-seedling", text: "赠送含羞草（mimosa）" },
            { icon: "fa-female", text: "女性之间的聚会" },
            { icon: "fa-wine-glass-alt", text: "特别的餐厅优惠" },
            { icon: "fa-museum", text: "博物馆和文化场所免费" }
        ],
        footer: "含羞草的黄色花朵象征着女性的力量和敏感"
    },
    {
        country: "印度",
        description: "在印度，国际妇女节越来越受到重视，特别是在城市地区，成为讨论性别平等和女性赋权的重要平台。",
        activities: [
            { icon: "fa-bullhorn", text: "组织妇女权益研讨会" },
            { icon: "fa-running", text: "举办女性马拉松" },
            { icon: "fa-chalkboard-teacher", text: "学校特别教育活动" },
            { icon: "fa-hands-helping", text: "支持女性创业项目" }
        ],
        footer: "从传统束缚到现代赋权，印度女性正在书写新的历史"
    },
    {
        country: "美国",
        description: "在美国，整个三月被定为\"女性历史月\"，国际妇女节是其中的重要一天，各种组织举办活动纪念女性的贡献。",
        activities: [
            { icon: "fa-landmark", text: "政治领袖发表演讲" },
            { icon: "fa-graduation-cap", text: "大学校园讨论会" },
            { icon: "fa-briefcase", text: "职场平等倡议活动" },
            { icon: "fa-donate", text: "为女性事业筹款" }
        ],
        footer: "关注历史上被忽视的女性贡献，塑造更平等的未来"
    },
    {
        country: "非洲国家",
        description: "在许多非洲国家，国际妇女节是重要的公共假日，人们穿着特制的布料，参加游行和庆祝活动。",
        activities: [
            { icon: "fa-tshirt", text: "穿着特制的节日服装" },
            { icon: "fa-drum", text: "传统音乐和舞蹈表演" },
            { icon: "fa-users", text: "社区集会和演讲" },
            { icon: "fa-hand-holding-medical", text: "妇女健康宣传活动" }
        ],
        footer: "庆祝女性的韧性和力量，推动社会变革"
    }
];

// 初始化庆祝卡片
document.addEventListener('DOMContentLoaded', () => {
    initCelebrationCards();
    checkCelebrationCards();
    window.addEventListener('scroll', checkCelebrationCards);
});

function initCelebrationCards() {
    const container = document.querySelector('.celebration-grid');
    if (!container) return;

    // 清空现有内容
    container.innerHTML = '';

    // 创建并添加卡片
    celebrationData.forEach(data => {
        const card = createCelebrationCard(data);
        container.appendChild(card);
    });
}

function createCelebrationCard(data) {
    const card = document.createElement('div');
    card.className = 'celebration-card';

    card.innerHTML = `
        <div class="celebration-card-header">
            <h3 class="country-name">${data.country}</h3>
            <span class="country-flag"><i class="fas fa-flag"></i></span>
        </div>
        <div class="celebration-card-body">
            <p>${data.description}</p>
            <ul>
                ${data.activities.map(activity => `
                    <li><i class="fas ${activity.icon}"></i> ${activity.text}</li>
                `).join('')}
            </ul>
        </div>
        <div class="celebration-card-footer">
            ${data.footer}
        </div>
    `;

    return card;
}

// 检查卡片可见性并添加动画
function checkCelebrationCards() {
    const cards = document.querySelectorAll('.celebration-card');
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('visible');
        }
    });
}

// 添加随机颜色变化效果
document.addEventListener('DOMContentLoaded', () => {
    const cardHeaders = document.querySelectorAll('.celebration-card-header');

    // 预定义的渐变色组合
    const gradients = [
        'linear-gradient(135deg, #ff69b4, #f06292)',
        'linear-gradient(135deg, #f06292, #ba68c8)',
        'linear-gradient(135deg, #ba68c8, #9575cd)',
        'linear-gradient(135deg, #9575cd, #7986cb)',
        'linear-gradient(135deg, #7986cb, #64b5f6)',
        'linear-gradient(135deg, #64b5f6, #4fc3f7)'
    ];

    // 为每个卡片头部设置不同的渐变色
    cardHeaders.forEach((header, index) => {
        header.style.background = gradients[index % gradients.length];
    });
}); 