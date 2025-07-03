/**
 * AI提示词宝库 - 分类页面JavaScript文件
 * 处理分类页面的交互功能
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 初始化分类页面功能
    initCategoryPage();
});

/**
 * 初始化分类页面功能
 */
function initCategoryPage() {
    // 初始化分类卡片点击事件
    initCategoryCards();
}

/**
 * 初始化分类卡片点击事件
 */
function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.dataset.categoryId;
            if (categoryId) {
                window.location.href = `category.html?id=${categoryId}`;
            }
        });
    });
}

// 辅助函数
function debounce(func, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

/**
 * 获取分类数据
 * @returns {Array} - 分类数据数组
 */
function getCategoriesData() {
    // 这里可以从API获取数据，现在使用静态数据
    return [
        {
            id: 'writing',
            name: '写作助手',
            description: '提升写作效率与质量',
            icon: 'fa-pen-fancy',
            count: 42,
            type: 'main'
        },
        {
            id: 'programming',
            name: '编程开发',
            description: '加速代码编写与问题解决',
            icon: 'fa-code',
            count: 38,
            type: 'main'
        },
        {
            id: 'business',
            name: '商业应用',
            description: '优化业务流程与决策',
            icon: 'fa-chart-line',
            count: 35,
            type: 'main'
        },
        {
            id: 'creative',
            name: '创意设计',
            description: '激发创意灵感',
            icon: 'fa-paint-brush',
            count: 29,
            type: 'main'
        },
        {
            id: 'education',
            name: '教育学习',
            description: '辅助教学与个性化学习',
            icon: 'fa-graduation-cap',
            count: 31,
            type: 'main'
        },
        {
            id: 'productivity',
            name: '效率提升',
            description: '简化工作流程，提高生产力',
            icon: 'fa-tasks',
            count: 27,
            type: 'main'
        },
        {
            id: 'marketing',
            name: '市场营销',
            description: '提升品牌影响力与营销效果',
            icon: 'fa-bullhorn',
            count: 24,
            type: 'specialized'
        },
        {
            id: 'research',
            name: '研究分析',
            description: '辅助学术研究与数据分析',
            icon: 'fa-microscope',
            count: 19,
            type: 'specialized'
        },
        {
            id: 'healthcare',
            name: '医疗健康',
            description: '健康管理与医学信息整理',
            icon: 'fa-heartbeat',
            count: 22,
            type: 'specialized'
        },
        {
            id: 'legal',
            name: '法律咨询',
            description: '法律文件起草与信息整理',
            icon: 'fa-balance-scale',
            count: 18,
            type: 'specialized'
        },
        {
            id: 'personal',
            name: '个人成长',
            description: '自我提升与生活规划',
            icon: 'fa-user',
            count: 21,
            type: 'special'
        },
        {
            id: 'entertainment',
            name: '娱乐休闲',
            description: '游戏、故事与创意娱乐',
            icon: 'fa-gamepad',
            count: 25,
            type: 'special'
        },
        {
            id: 'social',
            name: '社交沟通',
            description: '改善沟通技巧与社交能力',
            icon: 'fa-comments',
            count: 17,
            type: 'special'
        },
        {
            id: 'travel',
            name: '旅行规划',
            description: '旅行准备与行程安排',
            icon: 'fa-plane',
            count: 16,
            type: 'special'
        }
    ];
} 