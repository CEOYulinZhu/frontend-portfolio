/**
 * AI提示词宝库 - 页头JavaScript文件
 * 处理页头相关功能
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 加载页头组件
    loadHeaderComponent();

    // 初始化搜索功能
    initSearch();
});

/**
 * 加载页头组件
 */
function loadHeaderComponent() {
    const header = document.getElementById('main-header');
    if (!header) return;

    // 获取当前路径
    const currentPath = window.location.pathname;
    const isHomePage = currentPath === '/' || currentPath.endsWith('index.html');

    // 根据当前页面路径确定组件路径
    const componentPath = isHomePage ? 'components/header.html' : '../components/header.html';

    // 加载组件
    loadComponent(componentPath, 'main-header')
        .then(() => {
            // 设置logo图片路径
            const logoImage = document.getElementById('logo-image');
            if (logoImage) {
                logoImage.src = '/prompts/assets/images/logo.png';
                // logoImage.src = isHomePage ? 'assets/images/logo.svg' : '../assets/images/logo.svg';
            }

            // 修正导航链接路径
            adjustNavLinks(isHomePage);

            // 组件加载完成后初始化
            initActiveNavItem();

            // 重新初始化移动菜单
            initMobileMenu();

            // 重新初始化主题切换
            initThemeToggle();

            // 初始化搜索功能
            initSearch();
        })
        .catch(error => {
            console.error('加载页头组件失败:', error);
        });
}

/**
 * 调整导航链接路径
 * @param {boolean} isHomePage - 是否是首页
 */
function adjustNavLinks(isHomePage) {
    // 首页链接
    const homeLinks = document.querySelectorAll('.home-link');
    homeLinks.forEach(link => {
        link.setAttribute('href', isHomePage ? '/' : '../');
    });

    // 分类页面链接
    const categoriesLinks = document.querySelectorAll('.categories-link');
    categoriesLinks.forEach(link => {
        link.setAttribute('href', isHomePage ? 'pages/categories.html' : 'categories.html');
    });

    // 分类详情链接
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
        const href = link.getAttribute('href');
        const catParam = href.split('?')[1];
        link.setAttribute('href', isHomePage ? `pages/category.html?${catParam}` : `category.html?${catParam}`);
    });

    // 提示词库链接
    const libraryLinks = document.querySelectorAll('.library-link');
    libraryLinks.forEach(link => {
        link.setAttribute('href', isHomePage ? 'pages/prompt-library.html' : 'prompt-library.html');
    });

    // AI工具链接
    const toolsLinks = document.querySelectorAll('.tools-link');
    toolsLinks.forEach(link => {
        link.setAttribute('href', isHomePage ? 'pages/ai-tools.html' : 'ai-tools.html');
    });

    // 教程链接
    const tutorialsLinks = document.querySelectorAll('.tutorials-link');
    tutorialsLinks.forEach(link => {
        link.setAttribute('href', isHomePage ? 'pages/tutorials.html' : 'tutorials.html');
    });

    // 关于我们链接
    const aboutLinks = document.querySelectorAll('.about-link');
    aboutLinks.forEach(link => {
        link.setAttribute('href', isHomePage ? 'pages/about.html' : 'about.html');
    });
}

/**
 * 初始化当前活动导航项
 */
function initActiveNavItem() {
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.main-nav a, .mobile-nav a');

    navItems.forEach(item => {
        const href = item.getAttribute('href');

        // 检查当前路径是否匹配导航项链接
        if (currentPath.endsWith(href) ||
            (href !== '/' && currentPath.includes(href)) ||
            (href === '/' && (currentPath === '/' || currentPath.endsWith('index.html')))) {
            item.classList.add('active');

            // 如果是下拉菜单中的项，也激活父菜单
            const parentDropdown = item.closest('.dropdown');
            if (parentDropdown) {
                const parentLink = parentDropdown.querySelector('a');
                if (parentLink) {
                    parentLink.classList.add('active');
                }
            }

            // 如果是移动下拉菜单中的项，也激活父菜单
            const parentMobileDropdown = item.closest('.mobile-dropdown');
            if (parentMobileDropdown) {
                parentMobileDropdown.classList.add('active');
                const mobileDropdownContent = parentMobileDropdown.querySelector('.mobile-dropdown-content');
                if (mobileDropdownContent) {
                    mobileDropdownContent.style.display = 'block';
                }
            }
        }
    });
}

/**
 * 初始化搜索功能
 */
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

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

    // 输入框自动完成
    searchInput.addEventListener('input', debounce(() => {
        const query = searchInput.value.trim();
        if (query.length >= 2) {
            // 这里可以实现搜索建议功能
            // fetchSearchSuggestions(query);
        }
    }, 300));
}

/**
 * 处理搜索
 */
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    const query = searchInput.value.trim();
    if (query.length === 0) {
        showNotification('请输入搜索关键词', 'warning');
        return;
    }

    // 获取当前路径层级
    const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    const searchPagePath = isHomePage ? 'pages/search.html' : '../pages/search.html';

    // 跳转到搜索结果页
    window.location.href = `${searchPagePath}?q=${encodeURIComponent(query)}`;
} 