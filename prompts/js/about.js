/**
 * AI提示词宝库 - 关于我们页面JavaScript文件
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 等待header和footer加载完成后再初始化页面
    // 使用MutationObserver监听DOM变化
    const observer = new MutationObserver((mutations, obs) => {
        const header = document.querySelector('#main-header .header-container');
        const footer = document.querySelector('#footer .footer-container');

        if (header && footer) {
            // 头部和底部都已加载，初始化页面
            initPage();
            // 停止观察
            obs.disconnect();
            // 隐藏加载动画
            const loader = document.querySelector('.loader-container');
            if (loader) {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 300);
            }
        }
    });

    // 开始观察document.body的子节点变化
    observer.observe(document.body, { childList: true, subtree: true });
});

/**
 * 初始化页面
 */
function initPage() {
    // 初始化滚动动画
    initScrollAnimations();

    // 初始化返回顶部按钮
    if (typeof initBackToTop === 'function') {
        console.log('关于我们页面：初始化返回顶部按钮');
        initBackToTop();
    } else {
        console.error('关于我们页面：initBackToTop函数未定义');
    }
}

/**
 * 初始化滚动动画
 */
function initScrollAnimations() {
    // 获取所有需要动画的元素
    const animatedElements = document.querySelectorAll('.section-content, .values-grid, .team-grid');

    // 创建Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // 观察每个元素
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // 为每个元素添加初始样式
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .section-content, .values-grid, .team-grid {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s ease, transform 0.8s ease;
            }
            
            .section-content.animate, .values-grid.animate, .team-grid.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            .values-grid .value-card, .team-grid .team-member {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.5s ease, transform 0.5s ease;
            }
            
            .values-grid.animate .value-card, .team-grid.animate .team-member {
                opacity: 1;
                transform: translateY(0);
            }
            
            .values-grid.animate .value-card:nth-child(1), .team-grid.animate .team-member:nth-child(1) {
                transition-delay: 0.1s;
            }
            
            .values-grid.animate .value-card:nth-child(2), .team-grid.animate .team-member:nth-child(2) {
                transition-delay: 0.2s;
            }
            
            .values-grid.animate .value-card:nth-child(3), .team-grid.animate .team-member:nth-child(3) {
                transition-delay: 0.3s;
            }
            
            .values-grid.animate .value-card:nth-child(4), .team-grid.animate .team-member:nth-child(4) {
                transition-delay: 0.4s;
            }
            
            .notification-container {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 1000;
                display: flex;
                flex-direction: column;
                gap: 10px;
                max-width: 350px;
            }
            
            .notification {
                background-color: white;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                overflow: hidden;
                animation: slide-in 0.3s ease forwards;
            }
            
            .notification.fade-out {
                animation: slide-out 0.3s ease forwards;
            }
            
            .notification-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 15px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }
            
            .notification-header h4 {
                margin: 0;
                font-size: 16px;
            }
            
            .close-btn {
                background: none;
                border: none;
                cursor: pointer;
                font-size: 14px;
                color: var(--gray-600);
            }
            
            .notification-body {
                padding: 15px;
                font-size: 14px;
                line-height: 1.5;
            }
            
            .notification.success .notification-header {
                background-color: var(--success-color, #4caf50);
                color: white;
            }
            
            .notification.error .notification-header {
                background-color: var(--error-color, #f44336);
                color: white;
            }
            
            .notification.info .notification-header {
                background-color: var(--info-color, #2196f3);
                color: white;
            }
            
            .notification .close-btn {
                color: white;
            }
            
            @keyframes slide-in {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slide-out {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            
            [data-theme="dark"] .notification {
                background-color: var(--gray-800);
                color: var(--gray-300);
            }
            
            [data-theme="dark"] .notification-header {
                border-bottom-color: rgba(255, 255, 255, 0.1);
            }
        </style>
    `);
} 