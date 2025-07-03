/**
 * AI提示词宝库 - 首页JavaScript文件
 * 处理首页特定功能
 */

// 全局变量
let currentPosition = 0;
let slideWidth = 0;
let slidesToShow = 3;
let totalSlides = 0;
let slider = null;

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 初始化提示词滑块
    initPromptsSlider();

    // 加载精选提示词
    loadFeaturedPrompts();

    // 初始化返回顶部按钮
    if (typeof initBackToTop === 'function') {
        console.log('首页：初始化返回顶部按钮');
        initBackToTop();
    } else {
        console.error('首页：initBackToTop函数未定义');
    }
});

/**
 * 根据窗口宽度设置显示的滑块数量
 * 注意：此函数现在只用于初始化，实际计算在updateSliderPosition中完成
 */
function updateSlidesToShow() {
    // 初始默认值
    if (window.innerWidth < 768) {
        slidesToShow = 1;
    } else if (window.innerWidth < 992) {
        slidesToShow = 2;
    } else {
        slidesToShow = 3;
    }
}

/**
 * 更新滑块位置
 */
function updateSliderPosition() {
    slider = slider || document.getElementById('prompts-slider');
    if (!slider || !slider.children.length) return;

    // 更新总滑块数量
    totalSlides = slider.children.length;

    // 获取容器宽度
    const container = slider.closest('.container');
    const containerWidth = container ? container.offsetWidth : slider.parentElement.offsetWidth;

    // 计算单个滑块的宽度，包括外边距
    const sliderItem = slider.children[0];
    const itemStyle = getComputedStyle(sliderItem);
    const marginLeft = parseInt(itemStyle.marginLeft) || 0;
    const marginRight = parseInt(itemStyle.marginRight) || 0;

    slideWidth = sliderItem.offsetWidth + marginLeft + marginRight;

    // 计算每行能显示的卡片数量
    slidesToShow = Math.floor(containerWidth / slideWidth);
    if (slidesToShow > 3) slidesToShow = 3; // 最多显示3个
    if (slidesToShow < 1) slidesToShow = 1; // 至少显示1个

    // 确保当前位置不超出范围
    if (currentPosition > totalSlides - slidesToShow) {
        currentPosition = totalSlides - slidesToShow;
        if (currentPosition < 0) currentPosition = 0;
    }

    // 应用变换
    slider.style.transform = `translateX(${-currentPosition * slideWidth}px)`;
    slider.style.transition = 'transform 0.3s ease';

    console.log('更新滑块位置:', {
        containerWidth,
        slideWidth,
        slidesToShow,
        currentPosition,
        totalSlides
    });
}

/**
 * 初始化提示词滑块
 */
function initPromptsSlider() {
    slider = document.getElementById('prompts-slider');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');

    if (!slider || !prevButton || !nextButton) return;

    // 重置位置
    currentPosition = 0;

    // 下一个滑块
    function nextSlide() {
        if (currentPosition < totalSlides - slidesToShow) {
            currentPosition++;
            updateSliderPosition();
        } else {
            // 循环到第一个
            currentPosition = 0;
            updateSliderPosition();
        }
        console.log('下一个滑块，当前位置:', currentPosition);
    }

    // 上一个滑块
    function prevSlide() {
        if (currentPosition > 0) {
            currentPosition--;
            updateSliderPosition();
        } else {
            // 循环到最后一个
            currentPosition = Math.max(0, totalSlides - slidesToShow);
            updateSliderPosition();
        }
        console.log('上一个滑块，当前位置:', currentPosition);
    }

    // 清除之前的事件监听器
    prevButton.removeEventListener('click', prevSlide);
    nextButton.removeEventListener('click', nextSlide);

    // 添加按钮事件
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // 窗口大小改变时更新
    window.removeEventListener('resize', updateOnResize);
    window.addEventListener('resize', updateOnResize);

    // 初始化
    updateSlidesToShow();
    updateSliderPosition();
}

/**
 * 窗口大小改变时更新滑块
 */
const updateOnResize = debounce(() => {
    updateSliderPosition();
}, 200);

/**
 * 加载精选提示词
 */
function loadFeaturedPrompts() {
    slider = document.getElementById('prompts-slider');
    if (!slider) return;

    // 模拟从API获取数据
    // 实际应用中，这里应该是从后端API获取数据
    const featuredPrompts = [
        {
            id: 1,
            title: '高效写作助手',
            category: '写作助手',
            description: '帮助您快速生成高质量的文章、博客和报告，克服写作障碍。',
            content: '我需要写一篇关于[主题]的[文章类型]。请提供一个引人入胜的开头，3-5个关键点，以及一个有力的结论。文章风格应该是[风格]，目标读者是[目标受众]。',
            rating: 4.9,
            usageCount: 12580,
            createdAt: '2025-05-15'
        },
        {
            id: 2,
            title: '代码优化专家',
            category: '编程开发',
            description: '帮助开发者优化代码，提高性能，解决复杂的编程问题。',
            content: '请帮我优化以下[编程语言]代码，重点关注性能和可读性。如果有任何设计模式或最佳实践可以应用，请指出：\n\n```\n[您的代码]\n```',
            rating: 4.8,
            usageCount: 8765,
            createdAt: '2025-04-22'
        },
        {
            id: 3,
            title: '营销文案生成器',
            category: '商业应用',
            description: '创建引人注目的营销文案，提高转化率，吸引更多客户。',
            content: '请为[产品/服务]创建一个引人注目的营销文案。目标受众是[目标人群]，主要卖点是[卖点]。文案应包括标题、副标题和号召性用语(CTA)。风格应该是[风格]。',
            rating: 4.7,
            usageCount: 9432,
            createdAt: '2025-03-10'
        },
        {
            id: 4,
            title: '创意故事生成器',
            category: '创意设计',
            description: '激发您的创造力，生成独特的故事情节、角色和场景描述。',
            content: '请创作一个短篇故事，类型是[类型]。主角是[角色描述]，故事发生在[场景]。故事应该包含一个意想不到的转折，并传达[主题/教训]。',
            rating: 4.9,
            usageCount: 7654,
            createdAt: '2025-02-25'
        },
        {
            id: 5,
            title: '学习计划制定',
            category: '教育学习',
            description: '根据您的学习目标和时间安排，创建个性化的学习计划。',
            content: '请为我制定一个学习[主题/技能]的计划。我的目标是[学习目标]，每周可以投入[小时数]小时。我的当前水平是[初级/中级/高级]。请包括学习资源推荐和进度跟踪方法。',
            rating: 4.6,
            usageCount: 6543,
            createdAt: '2025-03-18'
        },
        {
            id: 6,
            title: '会议总结助手',
            category: '效率提升',
            description: '快速整理会议内容，提取关键点和行动项，提高工作效率。',
            content: '请帮我总结以下会议记录，提取关键讨论点、决策和行动项。格式应该清晰易读，重点突出：\n\n[会议记录]',
            rating: 4.8,
            usageCount: 8901,
            createdAt: '2025-04-12'
        }
    ];

    // 清空滑块
    slider.innerHTML = '';

    // 添加提示词卡片
    featuredPrompts.forEach(prompt => {
        const card = createPromptCard(prompt);
        slider.appendChild(card);
    });

    // 重置当前位置
    currentPosition = 0;

    // 在所有卡片加载完成后重新初始化滑块
    setTimeout(() => {
        // 更新滑块显示数量
        updateSlidesToShow();
        // 更新滑块位置
        updateSliderPosition();
        console.log('滑块初始化完成，总数:', totalSlides, '显示数量:', slidesToShow);
    }, 100);
}

/**
 * 创建提示词卡片
 * @param {Object} prompt - 提示词数据
 * @returns {HTMLElement} - 提示词卡片元素
 */
function createPromptCard(prompt) {
    const card = document.createElement('div');
    card.className = 'prompt-card';

    // 格式化日期
    const formattedDate = formatDate(prompt.createdAt, 'YYYY-MM-DD');

    // 格式化使用次数
    const formattedUsageCount = prompt.usageCount.toLocaleString();

    // 生成星级评分
    const ratingStars = generateRatingStars(prompt.rating);

    card.innerHTML = `
        <div class="prompt-header">
            <span class="prompt-category">${prompt.category}</span>
            <div class="prompt-rating">
                ${ratingStars}
                <span>${prompt.rating.toFixed(1)}</span>
            </div>
        </div>
        <h3 class="prompt-title">${prompt.title}</h3>
        <p class="prompt-description">${prompt.description}</p>
        <div class="prompt-content">${prompt.content}</div>
        <div class="prompt-footer">
            <div class="prompt-meta">
                <span><i class="fas fa-user-friends"></i> ${formattedUsageCount}</span>
                <span><i class="far fa-calendar-alt"></i> ${formattedDate}</span>
            </div>
            <div class="prompt-actions">
                <a href="pages/prompt-detail.html?id=${prompt.id}" target="_blank">查看详情</a>
            </div>
        </div>
    `;

    return card;
}

/**
 * 生成星级评分HTML
 * @param {number} rating - 评分(0-5)
 * @returns {string} - 星级评分HTML
 */
function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let starsHtml = '';

    // 添加满星
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }

    // 添加半星
    if (halfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }

    // 添加空星
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }

    return starsHtml;
} 