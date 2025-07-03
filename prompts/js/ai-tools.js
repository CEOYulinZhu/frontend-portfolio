/**
 * AI提示词宝库 - AI工具页面JavaScript文件
 */

// 当前筛选条件
let currentFilters = {
    category: 'all',
    search: '',
    sort: 'popular'
};

// 当前页码和每页显示数量
let currentPage = 1;
const itemsPerPage = 8;
let totalTools = 0;

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 初始化页面
    initPage();
});

/**
 * 初始化页面
 */
function initPage() {
    // 初始化分类导航
    initCategoryNav();

    // 初始化搜索功能
    initSearch();

    // 初始化排序功能
    initSort();

    // 初始化加载更多按钮
    initLoadMore();

    // 初始化返回顶部按钮
    if (typeof initBackToTop === 'function') {
        console.log('AI工具页面：初始化返回顶部按钮');
        initBackToTop();
    } else {
        console.error('AI工具页面：initBackToTop函数未定义');
    }

    // 加载精选工具
    loadFeaturedTools();

    // 加载工具数据（加载完成后会隐藏加载动画）
    loadTools();
}

/**
 * 初始化分类导航
 */
function initCategoryNav() {
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新活动按钮
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 更新筛选条件
            currentFilters.category = button.dataset.category;
            currentPage = 1;

            // 重新加载工具
            loadTools();
        });
    });
}

/**
 * 初始化搜索功能
 */
function initSearch() {
    const searchInput = document.getElementById('tool-search');
    const searchButton = document.getElementById('tool-search-btn');

    if (searchButton) {
        searchButton.addEventListener('click', () => {
            handleSearch();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });

        // 实时搜索（带防抖）
        searchInput.addEventListener('input', debounce(() => {
            handleSearch(false);
        }, 500));

        // 添加焦点和失焦事件，增强动画效果
        searchInput.addEventListener('focus', () => {
            searchInput.classList.add('focused');
        });

        searchInput.addEventListener('blur', () => {
            searchInput.classList.remove('focused');
        });
    }
}

/**
 * 处理搜索
 * @param {boolean} resetPage - 是否重置页码
 */
function handleSearch(resetPage = true) {
    const searchInput = document.getElementById('tool-search');
    if (!searchInput) return;

    currentFilters.search = searchInput.value.trim();

    if (resetPage) {
        currentPage = 1;
    }

    loadTools();
}

/**
 * 防抖函数
 * @param {Function} func - 要执行的函数
 * @param {number} delay - 延迟时间（毫秒）
 * @returns {Function} 防抖处理后的函数
 */
function debounce(func, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

/**
 * 初始化排序功能
 */
function initSort() {
    const sortFilter = document.getElementById('sort-filter');

    if (sortFilter) {
        sortFilter.addEventListener('change', () => {
            currentFilters.sort = sortFilter.value;
            currentPage = 1;
            loadTools();
        });
    }
}

/**
 * 初始化加载更多按钮
 */
function initLoadMore() {
    const loadMoreBtn = document.getElementById('load-more-btn');

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentPage++;
            loadTools(true);
        });
    }
}

/**
 * 显示通知
 * @param {string} type - 通知类型
 * @param {string} title - 通知标题
 * @param {string} message - 通知内容
 */
function showNotification(type, title, message) {
    if (typeof window.showNotification === 'function') {
        window.showNotification(type, title, message);
    } else {
        console.log(`${type}: ${title} - ${message}`);
    }
}

/**
 * 加载工具数据
 * @param {boolean} append - 是否追加数据（用于加载更多）
 */
function loadTools(append = false) {
    const toolsContainer = document.getElementById('tools-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const loader = document.querySelector('.loader-container');

    if (!toolsContainer) return;

    // 如果不是追加模式，显示加载状态
    if (!append) {
        toolsContainer.innerHTML = '<div class="loading-spinner"></div>';
    } else {
        // 如果是追加模式，禁用加载更多按钮
        if (loadMoreBtn) {
            loadMoreBtn.disabled = true;
            loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 加载中...';
        }
    }

    // 模拟API请求延迟
    setTimeout(() => {
        // 获取筛选后的工具
        const filteredTools = getFilteredTools();
        totalTools = filteredTools.length;

        // 计算当前页的工具
        const startIndex = append ? (currentPage - 1) * itemsPerPage : 0;
        const endIndex = currentPage * itemsPerPage;
        const currentPageTools = filteredTools.slice(startIndex, endIndex);

        // 如果不是追加模式，清空容器
        if (!append) {
            toolsContainer.innerHTML = '';
        }

        // 如果没有匹配的工具
        if (filteredTools.length === 0) {
            toolsContainer.innerHTML = `
                <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem 0;">
                    <i class="fas fa-search" style="font-size: 3rem; color: var(--gray-400); margin-bottom: 1rem;"></i>
                    <h3>未找到匹配的工具</h3>
                    <p>请尝试使用不同的筛选条件或搜索关键词</p>
                </div>
            `;

            // 隐藏加载更多按钮
            if (loadMoreBtn) {
                loadMoreBtn.style.display = 'none';
            }

            return;
        }

        // 添加工具卡片
        currentPageTools.forEach(tool => {
            const toolCard = createToolCard(tool);
            toolsContainer.appendChild(toolCard);
        });

        // 更新加载更多按钮状态
        if (loadMoreBtn) {
            loadMoreBtn.disabled = false;
            loadMoreBtn.textContent = '加载更多工具';

            // 如果已经加载完所有工具，隐藏按钮
            if (endIndex >= filteredTools.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }

        // 隐藏页面加载动画
        if (loader && !loader.classList.contains('hidden')) {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }
    }, 500); // 模拟加载延迟
}

/**
 * 获取工具数据
 * @returns {Array} 工具数据数组
 */
function getToolsData() {
    // 模拟API返回的数据
    return [
        {
            id: 'chatgpt',
            name: 'ChatGPT',
            description: 'OpenAI开发的强大对话AI，可以回答问题、创作内容、辅助编程等多种任务。',
            category: 'text',
            rating: 4.8,
            uses: 15000,
            image: '../assets/images/tool-chatgpt.jpg',
            url: 'https://chat.openai.com/',
            featured: true,
            badge: '热门',
            date: '2024-03-01'
        },
        {
            id: 'midjourney',
            name: 'Midjourney',
            description: '强大的AI图像生成工具，可以根据文本描述创建高质量、艺术风格的图像。',
            category: 'image',
            rating: 4.9,
            uses: 12000,
            image: '../assets/images/tool-midjourney.jpg',
            url: 'https://www.midjourney.com/',
            featured: true,
            badge: '推荐',
            date: '2024-02-28'
        },
        {
            id: 'github-copilot',
            name: 'GitHub Copilot',
            description: '由GitHub和OpenAI合作开发的AI编程助手，可以根据注释和上下文生成代码。',
            category: 'code',
            rating: 4.7,
            uses: 8000,
            image: '../assets/images/tool-github-copilot.jpg',
            url: 'https://github.com/features/copilot',
            featured: true,
            date: '2024-02-25'
        },
        {
            id: 'claude',
            name: 'Claude',
            description: 'Anthropic开发的对话AI助手，注重安全性和有益性，可以处理各种文本任务。',
            category: 'text',
            rating: 4.7,
            uses: 7000,
            image: '../assets/images/tool-claude.jpg',
            url: 'https://claude.ai/',
            date: '2024-02-20'
        },
        {
            id: 'dalle',
            name: 'DALL-E',
            description: 'OpenAI开发的AI图像生成系统，可以根据文本描述创建各种风格的图像。',
            category: 'image',
            rating: 4.8,
            uses: 9000,
            image: '../assets/images/tool-dalle.jpg',
            url: 'https://openai.com/dall-e-3',
            date: '2024-02-15'
        },
        {
            id: 'descript',
            name: 'Descript',
            description: '一站式音频和视频编辑平台，提供AI驱动的转录、编辑和声音克隆功能。',
            category: 'audio',
            rating: 4.6,
            uses: 5000,
            image: '../assets/images/tool-descript.jpg',
            url: 'https://www.descript.com/',
            date: '2024-02-10'
        },
        {
            id: 'runway',
            name: 'Runway',
            description: 'AI驱动的创意工具套件，提供视频编辑、生成和特效功能。',
            category: 'video',
            rating: 4.5,
            uses: 4500,
            image: '../assets/images/tool-runway.jpg',
            url: 'https://runwayml.com/',
            date: '2024-02-05'
        },
        {
            id: 'tabnine',
            name: 'Tabnine',
            description: 'AI代码助手，支持多种编程语言和IDE，提供智能代码补全和建议。',
            category: 'code',
            rating: 4.4,
            uses: 6000,
            image: '../assets/images/tool-tabnine.jpg',
            url: 'https://www.tabnine.com/',
            date: '2024-01-30'
        },
        {
            id: 'notion-ai',
            name: 'Notion AI',
            description: 'Notion集成的AI助手，可以帮助撰写、编辑、总结和翻译内容。',
            category: 'productivity',
            rating: 4.6,
            uses: 7500,
            image: '../assets/images/tool-notion-ai.jpg',
            url: 'https://www.notion.so/product/ai',
            date: '2024-01-25'
        },
        {
            id: 'elicit',
            name: 'Elicit',
            description: 'AI研究助手，可以帮助查找论文、总结研究结果和回答研究问题。',
            category: 'research',
            rating: 4.5,
            uses: 3500,
            image: '../assets/images/tool-elicit.jpg',
            url: 'https://elicit.org/',
            date: '2024-01-20'
        },
        {
            id: 'jasper',
            name: 'Jasper',
            description: 'AI内容创作平台，专为营销和商业内容设计，提供多种模板和功能。',
            category: 'text',
            rating: 4.3,
            uses: 5500,
            image: '../assets/images/tool-jasper.jpg',
            url: 'https://www.jasper.ai/',
            date: '2024-01-15'
        }
    ];
}

/**
 * 获取筛选后的工具
 * @returns {Array} 筛选后的工具数组
 */
function getFilteredTools() {
    const allTools = getToolsData();

    return allTools.filter(tool => {
        // 筛选分类
        if (currentFilters.category !== 'all' && tool.category !== currentFilters.category) {
            return false;
        }

        // 筛选搜索关键词
        if (currentFilters.search) {
            const searchLower = currentFilters.search.toLowerCase();
            const nameMatch = tool.name.toLowerCase().includes(searchLower);
            const descMatch = tool.description.toLowerCase().includes(searchLower);

            if (!nameMatch && !descMatch) {
                return false;
            }
        }

        return true;
    }).sort((a, b) => {
        // 应用排序
        switch (currentFilters.sort) {
            case 'newest':
                return new Date(b.date) - new Date(a.date);
            case 'rating':
                return b.rating - a.rating;
            case 'popular':
            default:
                return b.uses - a.uses;
        }
    });
}

/**
 * 创建工具卡片
 * @param {Object} tool - 工具数据
 * @returns {HTMLElement} 工具卡片元素
 */
function createToolCard(tool) {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.dataset.category = tool.category;

    // 获取图标和颜色
    const { icon, bgColor } = getToolVisuals(tool.category);

    card.innerHTML = `
        <div class="tool-card-header">
            <div class="tool-icon-text" style="color: ${bgColor}">
                <i class="${icon}"></i>
            </div>
            <h3>${tool.name}</h3>
        </div>
        <p>${tool.description}</p>
        <div class="tool-card-meta">
            <span class="tool-card-category">${getCategoryName(tool.category)}</span>
            <span class="tool-card-rating">${tool.rating.toFixed(1)}</span>
        </div>
        <div class="tool-card-actions">
            <a href="${tool.url}" class="tool-card-link" target="_blank">访问网站 <i class="fas fa-external-link-alt"></i></a>
        </div>
    `;

    return card;
}

/**
 * 获取分类名称
 * @param {string} category - 分类ID
 * @returns {string} 分类名称
 */
function getCategoryName(category) {
    const categories = {
        'text': '文本生成',
        'image': '图像生成',
        'audio': '音频处理',
        'video': '视频创作',
        'code': '代码辅助',
        'productivity': '效率工具',
        'research': '研究分析'
    };

    return categories[category] || category;
}

/**
 * 获取工具视觉表现元素（图标和背景色）
 * @param {string} category - 工具分类
 * @returns {Object} 包含图标和背景色的对象
 */
function getToolVisuals(category) {
    const visuals = {
        'text': { icon: 'fas fa-comment-alt', bgColor: '#3b82f6' },
        'image': { icon: 'fas fa-image', bgColor: '#8b5cf6' },
        'audio': { icon: 'fas fa-headphones', bgColor: '#ec4899' },
        'video': { icon: 'fas fa-video', bgColor: '#f43f5e' },
        'code': { icon: 'fas fa-code', bgColor: '#10b981' },
        'productivity': { icon: 'fas fa-tasks', bgColor: '#f59e0b' },
        'research': { icon: 'fas fa-search', bgColor: '#6366f1' }
    };

    return visuals[category] || { icon: 'fas fa-robot', bgColor: '#6b7280' };
}

/**
 * 加载精选工具
 */
function loadFeaturedTools() {
    const container = document.getElementById('featured-tools-container');
    if (!container) return;

    // 获取精选工具
    const featuredTools = getToolsData().filter(tool => tool.featured);

    // 清空容器
    container.innerHTML = '';

    // 添加精选工具卡片
    featuredTools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'featured-tool-card';

        // 获取图标和颜色
        const { icon, bgColor } = getToolVisuals(tool.category);

        card.innerHTML = `
            <div class="tool-image">
                <div class="tool-image-placeholder" style="background-color: ${bgColor}">
                    <i class="${icon}"></i>
                    <span class="tool-featured-name">${tool.name}</span>
                </div>
                ${tool.badge ? `<div class="tool-badge">${tool.badge}</div>` : ''}
            </div>
            <div class="tool-content">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <div class="tool-meta">
                    <span class="tool-category">${getCategoryName(tool.category)}</span>
                    <span class="tool-rating">
                        ${createStarRating(tool.rating)}
                    </span>
                </div>
                <div class="tool-actions">
                    <a href="${tool.url}" class="btn btn-primary" target="_blank">访问网站</a>
                    <a href="#" class="btn btn-secondary">查看提示词</a>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

/**
 * 创建星级评分HTML
 * @param {number} rating - 评分
 * @returns {string} 星级评分HTML
 */
function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return `
        ${Array(fullStars).fill('<i class="fas fa-star"></i>').join('')}
        ${hasHalfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
        ${Array(emptyStars).fill('<i class="far fa-star"></i>').join('')}
    `;
} 