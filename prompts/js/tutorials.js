// 教程页面交互逻辑

document.addEventListener('DOMContentLoaded', () => {
    // 初始化变量
    const categoryButtons = document.querySelectorAll('.category-btn');
    const tutorialCards = document.querySelectorAll('.tutorial-card');
    const loadMoreBtn = document.getElementById('load-more-btn');
    let currentPage = 1;

    // 计算每行显示的卡片数量（基于grid布局的列数）
    let cardsPerRow = getCardsPerRow();
    // 每次加载两行内容
    let cardsPerLoad = cardsPerRow * 2;

    // 获取当前屏幕宽度下每行显示的卡片数量
    function getCardsPerRow() {
        if (window.innerWidth >= 1200) return 3;
        if (window.innerWidth >= 992) return 2;
        return 1;
    }

    // 分类切换
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新按钮状态
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 过滤教程
            const category = button.dataset.category;
            filterTutorialsByCategory(category);
        });
    });

    // 加载更多
    loadMoreBtn.addEventListener('click', loadMoreTutorials);

    // 分类过滤函数
    function filterTutorialsByCategory(category) {
        tutorialCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });

        updateLoadMoreButton();
    }

    // 加载更多教程
    function loadMoreTutorials() {
        // 这里应该发送API请求获取更多教程
        // 示例代码仅作演示
        const mockData = [
            {
                id: 4,
                category: 'special',
                title: '教育领域的应用',
                description: '探索AI如何改变现代教育模式和学习方法。',
                difficulty: 'intermediate',
                duration: '35分钟',
                level: '中级'
            },
            {
                id: 5,
                category: 'beginner',
                title: 'AI实践入门：从零开始',
                description: '通过实践案例学习AI应用的基础知识。',
                difficulty: 'beginner',
                duration: '25分钟',
                level: '入门'
            },
            {
                id: 6,
                category: 'advanced',
                title: 'AI模型调优与性能优化',
                description: '学习如何调整和优化AI模型以提高性能。',
                difficulty: 'advanced',
                duration: '50分钟',
                level: '高级'
            },
            {
                id: 7,
                category: 'intermediate',
                title: 'AI工具使用指南：提高效率',
                description: '学习如何有效使用各种AI工具提高工作效率。',
                difficulty: 'intermediate',
                duration: '35分钟',
                level: '中级'
            },
            {
                id: 8,
                category: 'special',
                title: 'AI未来发展趋势展望',
                description: '探讨AI技术的未来发展方向和潜在影响。',
                difficulty: 'intermediate',
                duration: '45分钟',
                level: '中级'
            },
            {
                id: 9,
                category: 'beginner',
                title: 'AI提示词写作指南',
                description: '学习如何编写高效的AI提示词以获得更好的结果。',
                difficulty: 'beginner',
                duration: '30分钟',
                level: '入门'
            }
        ];

        // 根据当前页码和每次加载数量获取对应的数据
        const startIndex = (currentPage - 1) * cardsPerLoad;
        const endIndex = startIndex + cardsPerLoad;
        const currentPageData = mockData.slice(startIndex, endIndex);

        // 添加新教程卡片
        currentPageData.forEach(tutorial => {
            const card = createTutorialCard(tutorial);
            document.querySelector('.tutorials-container').appendChild(card);
        });

        currentPage++;
        updateLoadMoreButton();
    }

    // 创建教程卡片
    function createTutorialCard(tutorial) {
        const card = document.createElement('article');
        card.className = 'tutorial-card';
        card.dataset.category = tutorial.category;

        // 根据教程类别获取相应的图标和颜色
        const { icon, bgColor, title } = getTutorialVisuals(tutorial.category, tutorial.title);

        card.innerHTML = `
            <div class="tutorial-image">
                <div class="tutorial-icon-placeholder" style="background-color: ${bgColor}">
                    <i class="${icon}"></i>
                    <span class="tutorial-title-overlay">${title}</span>
                </div>
                <span class="difficulty ${tutorial.difficulty}">${getDifficultyText(tutorial.difficulty)}</span>
            </div>
            <div class="tutorial-content">
                <h3>${tutorial.title}</h3>
                <p>${tutorial.description}</p>
                <div class="tutorial-meta">
                    <span><i class="far fa-clock"></i> ${tutorial.duration}</span>
                    <span><i class="far fa-user"></i> ${tutorial.level}</span>
                </div>
                <a href="tutorial-detail.html?id=${tutorial.id}" class="btn btn-outline">开始学习</a>
            </div>
        `;

        return card;
    }

    // 获取教程视觉元素（图标、颜色和显示标题）
    function getTutorialVisuals(category, fullTitle) {
        // 提取短标题用于显示在图标上
        let shortTitle = getShortTitle(fullTitle);

        // 根据类别设置不同的图标和背景色
        const visuals = {
            'beginner': {
                icon: 'fas fa-comments',
                bgColor: '#4caf50',
                title: shortTitle
            },
            'intermediate': {
                icon: 'fas fa-cogs',
                bgColor: '#ff9800',
                title: shortTitle
            },
            'advanced': {
                icon: 'fas fa-rocket',
                bgColor: '#f44336',
                title: shortTitle
            },
            'special': {
                icon: 'fas fa-briefcase',
                bgColor: '#3f51b5',
                title: shortTitle
            }
        };

        // 针对特定标题的定制图标
        if (fullTitle.includes('优化') || fullTitle.includes('调试')) {
            return { icon: 'fas fa-sliders-h', bgColor: '#f44336', title: shortTitle };
        } else if (fullTitle.includes('基础概念')) {
            return { icon: 'fas fa-robot', bgColor: '#4caf50', title: '基础概念' };
        } else if (fullTitle.includes('趋势') || fullTitle.includes('未来')) {
            return { icon: 'fas fa-chart-line', bgColor: '#3f51b5', title: '发展趋势' };
        } else if (fullTitle.includes('工具')) {
            return { icon: 'fas fa-tools', bgColor: '#ff9800', title: '工具指南' };
        } else if (fullTitle.includes('实践')) {
            return { icon: 'fas fa-laptop-code', bgColor: '#4caf50', title: '实践入门' };
        }

        return visuals[category] || { icon: 'fas fa-book', bgColor: '#6b7280', title: shortTitle };
    }

    // 从完整标题中提取短标题
    function getShortTitle(fullTitle) {
        // 从标题中提取关键词作为短标题
        if (fullTitle.includes('：')) {
            // 如果标题包含冒号，取冒号后的部分作为短标题
            const parts = fullTitle.split('：');
            if (parts.length > 1) {
                return parts[1].length <= 4 ? parts[1] : parts[1].substring(0, 4);
            }
        }

        // 如果标题很短，直接使用
        if (fullTitle.length <= 4) {
            return fullTitle;
        }

        // 默认取前4个字符
        return fullTitle.substring(0, 4);
    }

    // 获取难度文本
    function getDifficultyText(difficulty) {
        const texts = {
            beginner: '入门',
            intermediate: '进阶',
            advanced: '高级'
        };
        return texts[difficulty] || difficulty;
    }

    // 更新加载更多按钮状态
    function updateLoadMoreButton() {
        const visibleCards = document.querySelectorAll('.tutorial-card[style=""]').length;
        const totalCards = 18; // 设置总卡片数量
        loadMoreBtn.style.display = visibleCards < totalCards ? 'block' : 'none';
    }

    // 监听窗口大小变化
    window.addEventListener('resize', () => {
        const newCardsPerRow = getCardsPerRow();
        if (newCardsPerRow !== cardsPerRow) {
            cardsPerRow = newCardsPerRow;
            cardsPerLoad = cardsPerRow * 2;
            updateLoadMoreButton();
        }
    });

    // 初始化页面
    updateLoadMoreButton();
}); 