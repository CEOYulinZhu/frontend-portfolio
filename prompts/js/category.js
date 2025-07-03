/**
 * AI提示词宝库 - 分类详情页面JavaScript文件
 * 处理分类详情页面的筛选、搜索和分页功能
 */

// 当前页码、每页显示数量和总页数
let currentPage = 1;
const itemsPerPage = 6;
let totalPages = 7; // 示例值，实际应从API获取

// 当前筛选条件
let currentFilters = {
    subcategory: 'all',
    sort: 'popular',
    search: ''
};

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 初始化页面
    initPage();
});

/**
 * 初始化页面
 */
function initPage() {
    // 从URL获取分类ID
    const categoryId = getCategoryIdFromUrl();

    // 加载分类信息
    loadCategoryInfo(categoryId);

    // 初始化筛选功能
    initFilters();

    // 初始化搜索功能
    initSearch();

    // 初始化分页
    initPagination();

    // 加载提示词
    loadPrompts();
}

/**
 * 从URL获取分类ID
 * @returns {string} 分类ID
 */
function getCategoryIdFromUrl() {
    // 从URL参数中获取分类ID
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || 'programming'; // 默认为编程分类
}

/**
 * 加载分类信息
 * @param {string} categoryId - 分类ID
 */
function loadCategoryInfo(categoryId) {
    // 这里应该从API获取分类信息
    // 现在使用模拟数据
    const categoryInfo = {
        id: 'programming',
        name: '编程开发',
        description: '加速代码编写与问题解决的AI提示词集合',
        icon: 'fa-code',
        count: 38,
        avgRating: 4.7
    };

    // 更新页面标题
    document.title = `${categoryInfo.name} - AI提示词宝库`;

    // 更新分类信息
    document.getElementById('category-title').textContent = categoryInfo.name;
    document.getElementById('category-description').textContent = categoryInfo.description;
    document.getElementById('prompt-count').textContent = categoryInfo.count;
    document.getElementById('avg-rating').textContent = categoryInfo.avgRating;

    // 更新分类图标
    const iconElement = document.querySelector('.category-icon i');
    if (iconElement) {
        iconElement.className = `fas ${categoryInfo.icon}`;
    }
}

/**
 * 初始化筛选功能
 */
function initFilters() {
    const subcategoryFilter = document.getElementById('subcategory-filter');
    const sortFilter = document.getElementById('sort-filter');

    if (subcategoryFilter) {
        subcategoryFilter.addEventListener('change', () => {
            currentFilters.subcategory = subcategoryFilter.value;
            updateActiveFilters();
            resetPagination();
            loadPrompts();
        });
    }

    if (sortFilter) {
        sortFilter.addEventListener('change', () => {
            currentFilters.sort = sortFilter.value;
            updateActiveFilters();
            loadPrompts();
        });
    }
}

/**
 * 更新活动筛选标签
 */
function updateActiveFilters() {
    const activeFiltersContainer = document.getElementById('active-filters');
    if (!activeFiltersContainer) return;

    // 清空当前标签
    activeFiltersContainer.innerHTML = '';

    // 添加子分类标签
    if (currentFilters.subcategory !== 'all') {
        const subcategoryName = getSubcategoryName(currentFilters.subcategory);
        createFilterTag(activeFiltersContainer, '子分类', subcategoryName, () => {
            document.getElementById('subcategory-filter').value = 'all';
            currentFilters.subcategory = 'all';
            updateActiveFilters();
            loadPrompts();
        });
    }

    // 添加排序标签
    const sortName = getSortName(currentFilters.sort);
    createFilterTag(activeFiltersContainer, '排序', sortName, null, true);

    // 添加搜索标签
    if (currentFilters.search) {
        createFilterTag(activeFiltersContainer, '搜索', currentFilters.search, () => {
            document.getElementById('prompt-search').value = '';
            currentFilters.search = '';
            updateActiveFilters();
            loadPrompts();
        });
    }
}

/**
 * 创建筛选标签
 * @param {HTMLElement} container - 标签容器
 * @param {string} type - 标签类型
 * @param {string} value - 标签值
 * @param {Function} onRemove - 移除回调
 * @param {boolean} isReadOnly - 是否只读
 */
function createFilterTag(container, type, value, onRemove, isReadOnly = false) {
    const tag = document.createElement('div');
    tag.className = 'filter-tag';

    tag.innerHTML = `
        <span>${type}: ${value}</span>
        ${!isReadOnly ? '<button><i class="fas fa-times"></i></button>' : ''}
    `;

    if (!isReadOnly && onRemove) {
        const removeButton = tag.querySelector('button');
        removeButton.addEventListener('click', onRemove);
    }

    container.appendChild(tag);
}

/**
 * 获取子分类名称
 * @param {string} subcategoryId - 子分类ID
 * @returns {string} 子分类名称
 */
function getSubcategoryName(subcategoryId) {
    const subcategories = {
        'web': 'Web开发',
        'mobile': '移动开发',
        'backend': '后端开发',
        'database': '数据库',
        'devops': 'DevOps'
    };

    return subcategories[subcategoryId] || subcategoryId;
}

/**
 * 获取排序名称
 * @param {string} sortId - 排序ID
 * @returns {string} 排序名称
 */
function getSortName(sortId) {
    const sorts = {
        'popular': '最受欢迎',
        'newest': '最新添加',
        'rating': '最高评分'
    };

    return sorts[sortId] || sortId;
}

/**
 * 初始化搜索功能
 */
function initSearch() {
    const searchInput = document.getElementById('prompt-search');
    const searchButton = document.getElementById('prompt-search-btn');

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

        // 添加焦点和失焦事件，增强动画效果
        searchInput.addEventListener('focus', () => {
            searchInput.classList.add('focused');
        });

        searchInput.addEventListener('blur', () => {
            searchInput.classList.remove('focused');
        });

        // 实时搜索（带防抖）
        searchInput.addEventListener('input', debounce(() => {
            handleSearch();
        }, 300));
    }
}

/**
 * 处理搜索
 */
function handleSearch() {
    const searchInput = document.getElementById('prompt-search');
    if (!searchInput) return;

    currentFilters.search = searchInput.value.trim();
    updateActiveFilters();
    resetPagination();
    loadPrompts();
}

/**
 * 初始化分页
 */
function initPagination() {
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const pageNumbers = document.getElementById('page-numbers');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
                loadPrompts();
                scrollToTop();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
                loadPrompts();
                scrollToTop();
            }
        });
    }

    // 初始化页码按钮
    updatePagination();
}

/**
 * 更新分页UI
 */
function updatePagination() {
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const pageNumbers = document.getElementById('page-numbers');

    // 更新上一页/下一页按钮状态
    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
    }

    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
    }

    // 更新页码
    if (pageNumbers) {
        pageNumbers.innerHTML = '';

        // 确定要显示的页码范围
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, startPage + 2);

        // 调整起始页，确保显示3个页码（如果有足够的页数）
        if (endPage - startPage < 2 && totalPages > 2) {
            startPage = Math.max(1, endPage - 2);
        }

        // 添加第一页
        if (startPage > 1) {
            pageNumbers.appendChild(createPageNumberButton(1));
        }

        // 添加省略号
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'page-ellipsis';
            ellipsis.textContent = '...';
            pageNumbers.appendChild(ellipsis);
        }

        // 添加中间页码
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.appendChild(createPageNumberButton(i));
        }

        // 添加省略号
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'page-ellipsis';
            ellipsis.textContent = '...';
            pageNumbers.appendChild(ellipsis);
        }

        // 添加最后一页
        if (endPage < totalPages) {
            pageNumbers.appendChild(createPageNumberButton(totalPages));
        }
    }
}

/**
 * 创建页码按钮
 * @param {number} pageNum - 页码
 * @returns {HTMLElement} 页码按钮元素
 */
function createPageNumberButton(pageNum) {
    const button = document.createElement('button');
    button.className = 'page-number' + (pageNum === currentPage ? ' active' : '');
    button.textContent = pageNum;

    button.addEventListener('click', () => {
        if (pageNum !== currentPage) {
            currentPage = pageNum;
            updatePagination();
            loadPrompts();
            scrollToTop();
        }
    });

    return button;
}

/**
 * 重置分页到第一页
 */
function resetPagination() {
    currentPage = 1;
    updatePagination();
}

/**
 * 滚动到内容顶部
 */
function scrollToTop() {
    const promptsSection = document.querySelector('.prompts-section');
    if (promptsSection) {
        promptsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

/**
 * 加载提示词
 */
function loadPrompts() {
    // 获取筛选后的提示词
    const filteredPrompts = getFilteredPrompts();

    // 计算分页
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedPrompts = filteredPrompts.slice(startIndex, endIndex);

    // 更新提示词数量显示
    const filteredCountElement = document.getElementById('filtered-count');
    if (filteredCountElement) {
        filteredCountElement.innerHTML = `显示 <strong>${filteredPrompts.length}</strong> 个提示词`;
    }

    // 更新分页控件
    totalPages = Math.ceil(filteredPrompts.length / itemsPerPage);
    updatePagination();

    // 渲染提示词卡片
    const promptsContainer = document.getElementById('prompts-grid');
    if (!promptsContainer) return;

    // 清空容器
    promptsContainer.innerHTML = '';

    // 添加提示词卡片
    if (paginatedPrompts.length === 0) {
        promptsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>未找到匹配的提示词</h3>
                <p>尝试使用不同的筛选条件或清除搜索关键词</p>
                <button class="btn btn-primary" id="clear-filters">清除所有筛选</button>
            </div>
        `;

        const clearFiltersButton = document.getElementById('clear-filters');
        if (clearFiltersButton) {
            clearFiltersButton.addEventListener('click', () => {
                // 重置所有筛选条件
                document.getElementById('subcategory-filter').value = 'all';
                document.getElementById('sort-filter').value = 'popular';
                document.getElementById('prompt-search').value = '';

                currentFilters = {
                    subcategory: 'all',
                    sort: 'popular',
                    search: ''
                };

                updateActiveFilters();
                resetPagination();
                loadPrompts();
            });
        }
    } else {
        paginatedPrompts.forEach(prompt => {
            promptsContainer.appendChild(createPromptCard(prompt));
        });
    }

    // 隐藏加载动画
    const loader = document.querySelector('.loader-container');
    if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
}

/**
 * 获取筛选后的提示词
 * @returns {Array} 筛选后的提示词数组
 */
function getFilteredPrompts() {
    // 这里应该从API获取数据
    // 现在使用模拟数据
    const allPrompts = getPromptData();

    // 应用筛选条件
    return allPrompts.filter(prompt => {
        // 筛选子分类
        if (currentFilters.subcategory !== 'all' && prompt.subcategory !== currentFilters.subcategory) {
            return false;
        }

        // 筛选搜索关键词
        if (currentFilters.search) {
            const searchLower = currentFilters.search.toLowerCase();
            const titleMatch = prompt.title.toLowerCase().includes(searchLower);
            const descMatch = prompt.description.toLowerCase().includes(searchLower);
            const tagsMatch = prompt.tags.some(tag => tag.toLowerCase().includes(searchLower));

            if (!titleMatch && !descMatch && !tagsMatch) {
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
 * 创建提示词卡片
 * @param {Object} prompt - 提示词数据
 * @returns {HTMLElement} 提示词卡片元素
 */
function createPromptCard(prompt) {
    const card = document.createElement('div');
    card.className = 'prompt-card';

    // 格式化日期
    const date = new Date(prompt.date);
    const formattedDate = date.toLocaleDateString('zh-CN');

    card.innerHTML = `
        <div class="prompt-header">
            <div class="prompt-header-left">
                <span class="prompt-subcategory">${prompt.subcategory}</span>
                <h3>${prompt.title}</h3>
            </div>
            <div class="prompt-rating">
                <i class="fas fa-star"></i>
                <span>${prompt.rating}</span>
            </div>
        </div>
        <p class="prompt-description">${prompt.description}</p>
        <div class="prompt-tags">
            ${prompt.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="prompt-footer">
            <div class="prompt-meta">
                <span class="prompt-uses"><i class="fas fa-bolt"></i> ${formatNumber(prompt.uses)} 次使用</span>
                <span class="prompt-date"><i class="far fa-calendar-alt"></i> ${formattedDate}</span>
            </div>
            <a href="/prompts/pages/prompt-detail.html?id=${prompt.id}" class="prompt-link" target="_blank">查看详情 <i class="fas fa-arrow-right"></i></a>
        </div>
    `;

    return card;
}

/**
 * 格式化数字（添加千位分隔符或缩写）
 * @param {number} num - 要格式化的数字
 * @returns {string} 格式化后的数字
 */
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'm';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

/**
 * 获取提示词数据
 * @returns {Array} 提示词数据数组
 */
function getPromptData() {
    // 模拟数据，实际应从API获取
    return [
        {
            id: 'code-optimizer',
            title: '代码优化助手',
            description: '帮助优化现有代码，提高性能和可读性，同时保持功能不变。',
            tags: ['优化', '重构', '性能'],
            rating: 4.9,
            uses: 2400,
            date: '2025-05-15',
            subcategory: 'web'
        },
        {
            id: 'bug-debugger',
            title: 'Bug调试专家',
            description: '分析代码错误，提供详细的调试步骤和修复建议。',
            tags: ['调试', '错误修复', '问题排查'],
            rating: 4.8,
            uses: 3100,
            date: '2023-06-20',
            subcategory: 'backend'
        },
        {
            id: 'api-designer',
            title: 'API设计顾问',
            description: '帮助设计符合RESTful原则的API，提供最佳实践和示例。',
            tags: ['API', '设计', 'RESTful'],
            rating: 4.7,
            uses: 1800,
            date: '2025-04-10',
            subcategory: 'backend'
        },
        {
            id: 'code-commenter',
            title: '代码注释生成器',
            description: '为代码生成清晰、专业的注释，提高代码可读性和可维护性。',
            tags: ['注释', '文档', '可读性'],
            rating: 4.6,
            uses: 2200,
            date: '2025-05-05',
            subcategory: 'web'
        },
        {
            id: 'algorithm-expert',
            title: '算法解析专家',
            description: '详细解释各种算法的工作原理，提供实现示例和性能分析。',
            tags: ['算法', '数据结构', '性能'],
            rating: 4.9,
            uses: 1900,
            date: '2025-03-25',
            subcategory: 'backend'
        },
        {
            id: 'unit-test-generator',
            title: '单元测试生成器',
            description: '为代码生成全面的单元测试，确保代码质量和功能正确性。',
            tags: ['测试', 'TDD', '质量保证'],
            rating: 4.7,
            uses: 1600,
            date: '2025-04-12',
            subcategory: 'devops'
        },
        {
            id: 'database-optimizer',
            title: '数据库优化专家',
            description: '分析和优化数据库查询，提高数据库性能和响应速度。',
            tags: ['数据库', 'SQL', '性能优化'],
            rating: 4.8,
            uses: 1400,
            date: '2025-03-27',
            subcategory: 'database'
        },
        {
            id: 'mobile-ui-designer',
            title: '移动UI设计助手',
            description: '帮助设计符合最佳实践的移动应用界面，提供UI/UX建议。',
            tags: ['UI', 'UX', '移动设计'],
            rating: 4.6,
            uses: 1700,
            date: '2025-02-28',
            subcategory: 'mobile'
        },
        {
            id: 'code-reviewer',
            title: '代码审查助手',
            description: '提供全面的代码审查，发现潜在问题并提出改进建议。',
            tags: ['代码审查', '质量', '最佳实践'],
            rating: 4.7,
            uses: 1500,
            date: '2025-4-30',
            subcategory: 'devops'
        },
        {
            id: 'security-analyzer',
            title: '安全漏洞分析器',
            description: '检测代码中的安全漏洞，提供修复建议和安全最佳实践。',
            tags: ['安全', '漏洞', '防护'],
            rating: 4.9,
            uses: 2100,
            date: '2024-04-08',
            subcategory: 'devops'
        },
        {
            id: 'docker-expert',
            title: 'Docker容器专家',
            description: '帮助创建和优化Docker容器，解决容器化问题。',
            tags: ['Docker', '容器', '部署'],
            rating: 4.8,
            uses: 1800,
            date: '2025-05-22',
            subcategory: 'devops'
        },
        {
            id: 'react-developer',
            title: 'React开发助手',
            description: '提供React组件设计和开发建议，解决常见React问题。',
            tags: ['React', '前端', 'JavaScript'],
            rating: 4.7,
            uses: 2300,
            date: '2025-04-15',
            subcategory: 'web'
        }
    ];
} 