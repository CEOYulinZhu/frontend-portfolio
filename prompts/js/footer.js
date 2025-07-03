/**
 * AI提示词宝库 - 页脚JavaScript文件
 * 处理页脚相关功能
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 加载页脚组件
    loadFooterComponent();
});

/**
 * 加载页脚组件
 */
function loadFooterComponent() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    // 获取当前路径
    const currentPath = window.location.pathname;
    const isHomePage = currentPath === '/' || currentPath.endsWith('index.html');

    // 根据当前页面路径确定组件路径
    const componentPath = isHomePage ? 'components/footer.html' : '../components/footer.html';

    // 加载组件
    loadComponent(componentPath, 'footer')
        .then(() => {
            // 组件加载完成后初始化
            initFooterFunctionality();

            // 处理首页和内页的资源路径差异
            if (isHomePage) {
                // 修正首页中的链接路径
                const links = footer.querySelectorAll('a[href^="/"]');
                links.forEach(link => {
                    const href = link.getAttribute('href');
                    link.setAttribute('href', href.substring(1)); // 移除开头的斜杠
                });
            }
        })
        .catch(error => {
            console.error('加载页脚组件失败:', error);
        });
}

/**
 * 初始化页脚功能
 */
function initFooterFunctionality() {
    // 初始化页脚订阅表单
    const footerSubscribeForm = document.getElementById('footer-subscribe-form');
    if (footerSubscribeForm) {
        footerSubscribeForm.addEventListener('submit', handleSubscribeForm);
    }

    // 初始化社交媒体分享
    initSocialSharing();

    // 更新版权年份
    updateCopyrightYear();
}

/**
 * 初始化社交媒体分享
 */
function initSocialSharing() {
    const socialIcons = document.querySelectorAll('.social-icons a');

    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            // 如果有特定的分享功能，可以在这里实现
            // 例如，分享当前页面到社交媒体
            const platform = icon.getAttribute('aria-label');
            if (platform) {
                // 这里可以实现特定平台的分享逻辑
                // sharePage(platform);
            }
        });
    });
}

/**
 * 更新版权年份
 */
function updateCopyrightYear() {
    const copyrightElement = document.querySelector('.footer-bottom p');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        const copyrightText = copyrightElement.textContent;

        // 使用正则表达式替换年份
        const updatedText = copyrightText.replace(/\d{4}/, currentYear);
        copyrightElement.textContent = updatedText;
    }
} 