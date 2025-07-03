/**
 * AI提示词宝库 - 提示词库页面JavaScript文件
 * 处理提示词库页面的筛选、搜索和分页功能
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 初始化筛选功能
    initFilters();

    // 初始化搜索功能
    initSearch();

    // 初始化分页
    initPagination();

    // 加载提示词数据
    loadPrompts();
});

// 全局变量
let currentPage = 1;
let totalPages = 10;
let itemsPerPage = 12;
let currentFilters = {
    category: '',
    sort: 'popular',
    search: ''
};

/**
 * 初始化筛选功能
 */
function initFilters() {
    // 分类筛选
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            currentFilters.category = categoryFilter.value;
            currentPage = 1;
            loadPrompts();
            updateActiveFilters();
        });

        // 检查URL参数中是否有分类
        const urlCategory = getUrlParam('cat');
        if (urlCategory) {
            categoryFilter.value = urlCategory;
            currentFilters.category = urlCategory;
            updateActiveFilters();
        }
    }

    // 排序筛选
    const sortFilter = document.getElementById('sort-filter');
    if (sortFilter) {
        sortFilter.addEventListener('change', () => {
            currentFilters.sort = sortFilter.value;
            loadPrompts();
        });
    }

    // 初始化活动筛选标签
    updateActiveFilters();
}

/**
 * 更新活动筛选标签
 */
function updateActiveFilters() {
    const activeFiltersContainer = document.getElementById('active-filters');
    if (!activeFiltersContainer) return;

    // 清空当前标签
    activeFiltersContainer.innerHTML = '';

    // 添加分类标签
    if (currentFilters.category) {
        const categoryName = getCategoryName(currentFilters.category);
        const filterTag = createFilterTag('category', categoryName);
        activeFiltersContainer.appendChild(filterTag);
    }

    // 添加搜索标签
    if (currentFilters.search) {
        const filterTag = createFilterTag('search', `"${currentFilters.search}"`);
        activeFiltersContainer.appendChild(filterTag);
    }
}

/**
 * 创建筛选标签
 * @param {string} type - 标签类型
 * @param {string} text - 标签文本
 * @returns {HTMLElement} - 标签元素
 */
function createFilterTag(type, text) {
    const tag = document.createElement('div');
    tag.className = 'filter-tag';
    tag.innerHTML = `
        ${text}
        <span class="filter-tag-close" data-type="${type}">
            <i class="fas fa-times"></i>
        </span>
    `;

    // 添加关闭事件
    const closeBtn = tag.querySelector('.filter-tag-close');
    closeBtn.addEventListener('click', () => {
        if (type === 'category') {
            currentFilters.category = '';
            const categoryFilter = document.getElementById('category-filter');
            if (categoryFilter) categoryFilter.value = '';
        } else if (type === 'search') {
            currentFilters.search = '';
            const searchInput = document.getElementById('prompt-search');
            if (searchInput) searchInput.value = '';
        }

        currentPage = 1;
        loadPrompts();
        updateActiveFilters();
    });

    return tag;
}

/**
 * 获取分类名称
 * @param {string} categoryId - 分类ID
 * @returns {string} - 分类名称
 */
function getCategoryName(categoryId) {
    const categories = {
        'writing': '写作助手',
        'programming': '编程开发',
        'business': '商业应用',
        'creative': '创意设计',
        'education': '教育学习',
        'productivity': '效率提升'
    };

    return categories[categoryId] || categoryId;
}

/**
 * 初始化搜索功能
 */
function initSearch() {
    const searchInput = document.getElementById('prompt-search');
    const searchButton = document.getElementById('prompt-search-btn');

    if (!searchInput || !searchButton) return;

    // 搜索按钮点击事件
    searchButton.addEventListener('click', () => {
        handleSearch();
    });

    // 输入框回车事件
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // 添加焦点和失焦事件，增强动画效果
    searchInput.addEventListener('focus', () => {
        searchInput.classList.add('focused');
    });

    searchInput.addEventListener('blur', () => {
        searchInput.classList.remove('focused');
    });

    // 检查URL参数中是否有搜索关键词
    const urlSearch = getUrlParam('q');
    if (urlSearch) {
        searchInput.value = urlSearch;
        currentFilters.search = urlSearch;
        updateActiveFilters();
    }
}

/**
 * 处理搜索
 */
function handleSearch() {
    const searchInput = document.getElementById('prompt-search');
    if (!searchInput) return;

    const query = searchInput.value.trim();
    currentFilters.search = query;
    currentPage = 1;
    loadPrompts();
    updateActiveFilters();
}

/**
 * 初始化分页
 */
function initPagination() {
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const paginationNumbers = document.getElementById('pagination-numbers');

    if (!prevPageBtn || !nextPageBtn || !paginationNumbers) return;

    // 上一页按钮
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            loadPrompts();
            updatePagination();
        }
    });

    // 下一页按钮
    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            loadPrompts();
            updatePagination();
        }
    });

    // 初始化分页数字
    updatePagination();
}

/**
 * 更新分页UI
 */
function updatePagination() {
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const paginationNumbers = document.getElementById('pagination-numbers');

    if (!prevPageBtn || !nextPageBtn || !paginationNumbers) return;

    // 更新按钮状态
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;

    // 更新分页数字
    paginationNumbers.innerHTML = '';

    // 确定要显示的页码范围
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);

    // 调整起始页，确保始终显示3个页码（如果有足够的页数）
    if (endPage - startPage < 2 && totalPages > 2) {
        if (startPage === 1) {
            endPage = Math.min(totalPages, 3);
        } else {
            startPage = Math.max(1, endPage - 2);
        }
    }

    // 添加第一页
    if (startPage > 1) {
        const firstPageBtn = createPageNumberButton(1);
        paginationNumbers.appendChild(firstPageBtn);

        // 添加省略号
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationNumbers.appendChild(ellipsis);
        }
    }

    // 添加中间页码
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = createPageNumberButton(i);
        paginationNumbers.appendChild(pageBtn);
    }

    // 添加最后一页
    if (endPage < totalPages) {
        // 添加省略号
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            paginationNumbers.appendChild(ellipsis);
        }

        const lastPageBtn = createPageNumberButton(totalPages);
        paginationNumbers.appendChild(lastPageBtn);
    }
}

/**
 * 创建页码按钮
 * @param {number} pageNumber - 页码
 * @returns {HTMLElement} - 页码按钮元素
 */
function createPageNumberButton(pageNumber) {
    const button = document.createElement('button');
    button.className = 'pagination-number';
    button.textContent = pageNumber;

    if (pageNumber === currentPage) {
        button.classList.add('active');
    } else {
        button.addEventListener('click', () => {
            currentPage = pageNumber;
            loadPrompts();
            updatePagination();
        });
    }

    return button;
}

/**
 * 加载提示词数据
 */
function loadPrompts() {
    const promptsGrid = document.getElementById('prompts-grid');
    const loadingSpinner = document.getElementById('loading-spinner');
    const promptsCount = document.getElementById('prompts-count');

    if (!promptsGrid || !loadingSpinner) return;

    // 显示加载动画
    promptsGrid.innerHTML = '';
    loadingSpinner.classList.add('active');

    // 模拟API请求延迟
    setTimeout(() => {
        // 获取筛选后的提示词数据
        const filteredPrompts = getFilteredPrompts();

        // 计算分页
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredPrompts.length);
        const pagePrompts = filteredPrompts.slice(startIndex, endIndex);

        // 更新总页数
        totalPages = Math.ceil(filteredPrompts.length / itemsPerPage);
        if (totalPages === 0) totalPages = 1;

        // 更新分页UI
        updatePagination();

        // 更新提示词计数
        if (promptsCount) {
            promptsCount.textContent = `显示 ${pagePrompts.length} 个提示词，共 ${filteredPrompts.length} 个`;
        }

        // 隐藏加载动画
        loadingSpinner.classList.remove('active');

        // 渲染提示词卡片
        pagePrompts.forEach(prompt => {
            const card = createPromptCard(prompt);
            promptsGrid.appendChild(card);
        });

        // 如果没有结果
        if (pagePrompts.length === 0) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = `
                <i class="fas fa-search"></i>
                <h3>未找到匹配的提示词</h3>
                <p>请尝试调整筛选条件或搜索关键词</p>
            `;
            promptsGrid.appendChild(noResults);
        }
    }, 500);
}

/**
 * 获取筛选后的提示词数据
 * @returns {Array} - 筛选后的提示词数组
 */
function getFilteredPrompts() {
    // 模拟从API获取数据
    // 实际应用中，这里应该是从后端API获取数据
    const allPrompts = [
        {
            id: 1,
            title: '高效写作助手',
            category: 'writing',
            categoryName: '写作助手',
            description: '帮助您快速生成高质量的文章、博客和报告，克服写作障碍。',
            tags: ['写作', '内容创作', '博客'],
            rating: 4.9,
            usageCount: 12580,
            createdAt: '2025-02-25'
        },
        {
            id: 2,
            title: '代码优化专家',
            category: 'programming',
            categoryName: '编程开发',
            description: '帮助开发者优化代码，提高性能，解决复杂的编程问题。',
            tags: ['编程', '代码优化', '性能'],
            rating: 4.8,
            usageCount: 8765,
            createdAt: '2025-03-22'
        },
        {
            id: 3,
            title: '营销文案生成器',
            category: 'business',
            categoryName: '商业应用',
            description: '创建引人注目的营销文案，提高转化率，吸引更多客户。',
            tags: ['营销', '文案', '广告'],
            rating: 4.7,
            usageCount: 9432,
            createdAt: '2025-04-10'
        },
        {
            id: 4,
            title: '创意故事生成器',
            category: 'creative',
            categoryName: '创意设计',
            description: '激发您的创造力，生成独特的故事情节、角色和场景描述。',
            tags: ['创意', '故事', '写作'],
            rating: 4.9,
            usageCount: 7654,
            createdAt: '2025-05-05'
        },
        {
            id: 5,
            title: '学习计划制定',
            category: 'education',
            categoryName: '教育学习',
            description: '根据您的学习目标和时间安排，创建个性化的学习计划。',
            tags: ['教育', '学习', '计划'],
            rating: 4.6,
            usageCount: 6543,
            createdAt: '2025-03-18'
        },
        {
            id: 6,
            title: '会议总结助手',
            category: 'productivity',
            categoryName: '效率提升',
            description: '快速整理会议内容，提取关键点和行动项，提高工作效率。',
            tags: ['效率', '会议', '总结'],
            rating: 4.8,
            usageCount: 8901,
            createdAt: '2025-04-12'
        },
        {
            id: 7,
            title: 'SEO文章优化',
            category: 'writing',
            categoryName: '写作助手',
            description: '优化文章内容，提高搜索引擎排名，增加网站流量。',
            tags: ['SEO', '内容优化', '写作'],
            rating: 4.7,
            usageCount: 7123,
            createdAt: '2023-05-28'
        },
        {
            id: 8,
            title: 'API文档生成器',
            category: 'programming',
            categoryName: '编程开发',
            description: '根据代码自动生成清晰、详细的API文档，节省开发时间。',
            tags: ['API', '文档', '开发'],
            rating: 4.6,
            usageCount: 5432,
            createdAt: '2025-05-15'
        },
        {
            id: 9,
            title: '商业计划书助手',
            category: 'business',
            categoryName: '商业应用',
            description: '创建专业的商业计划书，包括市场分析、财务预测和执行策略。',
            tags: ['商业计划', '创业', '融资'],
            rating: 4.8,
            usageCount: 6789,
            createdAt: '2025-03-05'
        },
        {
            id: 10,
            title: 'UI设计提示生成器',
            category: 'creative',
            categoryName: '创意设计',
            description: '生成UI设计灵感和建议，帮助设计师创建美观、实用的界面。',
            tags: ['UI', '设计', '界面'],
            rating: 4.7,
            usageCount: 5678,
            createdAt: '2025-05-20'
        },
        {
            id: 11,
            title: '教学课程设计',
            category: 'education',
            categoryName: '教育学习',
            description: '为教师提供课程设计建议，包括教学目标、活动和评估方法。',
            tags: ['教学', '课程', '设计'],
            rating: 4.5,
            usageCount: 4567,
            createdAt: '2025-04-25'
        },
        {
            id: 12,
            title: '时间管理专家',
            category: 'productivity',
            categoryName: '效率提升',
            description: '提供个性化的时间管理建议，帮助您提高工作效率和生活平衡。',
            tags: ['时间管理', '效率', '规划'],
            rating: 4.9,
            usageCount: 9876,
            createdAt: '2025-03-10'
        },
        {
            id: 13,
            title: '学术论文助手',
            category: 'writing',
            categoryName: '写作助手',
            description: '协助撰写学术论文，提供结构建议、引用格式和语言润色。',
            tags: ['学术', '论文', '研究'],
            rating: 4.8,
            usageCount: 7890,
            createdAt: '2025-05-05'
        },
        {
            id: 14,
            title: '调试问题解决器',
            category: 'programming',
            categoryName: '编程开发',
            description: '分析代码错误，提供调试建议和解决方案，加速开发过程。',
            tags: ['调试', '错误修复', '问题解决'],
            rating: 4.9,
            usageCount: 8765,
            createdAt: '2025-05-28'
        },
        {
            id: 15,
            title: '市场分析报告',
            category: 'business',
            categoryName: '商业应用',
            description: '生成详细的市场分析报告，包括趋势、竞争对手和机会评估。',
            tags: ['市场分析', '报告', '商业智能'],
            rating: 4.7,
            usageCount: 6543,
            createdAt: '2025-05-12'
        },
        {
            id: 16,
            title: '产品描述优化',
            category: 'business',
            categoryName: '商业应用',
            description: '创建吸引人的产品描述，突出特点和优势，提高转化率。',
            tags: ['产品', '描述', '电商'],
            rating: 4.6,
            usageCount: 7654,
            createdAt: '2025-04-18'
        }
    ];

    // 复制一份数据进行筛选
    let filteredPrompts = [...allPrompts];

    // 应用分类筛选
    if (currentFilters.category) {
        filteredPrompts = filteredPrompts.filter(prompt =>
            prompt.category === currentFilters.category
        );
    }

    // 应用搜索筛选
    if (currentFilters.search) {
        const searchLower = currentFilters.search.toLowerCase();
        filteredPrompts = filteredPrompts.filter(prompt =>
            prompt.title.toLowerCase().includes(searchLower) ||
            prompt.description.toLowerCase().includes(searchLower) ||
            prompt.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
    }

    // 应用排序
    switch (currentFilters.sort) {
        case 'popular':
            filteredPrompts.sort((a, b) => b.usageCount - a.usageCount);
            break;
        case 'newest':
            filteredPrompts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            break;
        case 'rating':
            filteredPrompts.sort((a, b) => b.rating - a.rating);
            break;
        case 'az':
            filteredPrompts.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }

    return filteredPrompts;
}

/**
 * 格式化数字，将大数字转换为带单位的形式
 * @param {number} num - 要格式化的数字
 * @returns {string} - 格式化后的字符串
 */
function formatNumber(num) {
    if (num >= 10000) {
        return (num / 10000).toFixed(1) + '万';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + '千';
    }
    return num.toString();
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
    const formattedUsageCount = formatNumber(prompt.usageCount);

    // 生成星级评分
    const ratingStars = generateRatingStars(prompt.rating);

    // 生成标签
    const tagsHtml = prompt.tags.map(tag =>
        `<span class="prompt-tag">${tag}</span>`
    ).join('');

    card.innerHTML = `
        <div class="prompt-header">
            <span class="prompt-category">${prompt.categoryName}</span>
            <div class="prompt-rating">
                ${ratingStars}
                <span>${prompt.rating.toFixed(1)}</span>
            </div>
        </div>
        <div class="prompt-body">
            <h3 class="prompt-title">${prompt.title}</h3>
            <p class="prompt-description">${prompt.description}</p>
            <div class="prompt-tags">
                ${tagsHtml}
            </div>
        </div>
        <div class="prompt-footer">
            <div class="prompt-meta">
                <span><i class="fas fa-user-friends"></i> ${formattedUsageCount}</span>
                <span><i class="far fa-calendar-alt"></i> ${formattedDate}</span>
            </div>
            <div class="prompt-actions">
                <a href="prompt-detail.html?id=${prompt.id}" target="_blank" >查看详情</a>
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