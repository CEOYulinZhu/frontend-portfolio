/**
 * AI提示词宝库 - 主要JavaScript文件
 * 包含网站通用功能和初始化
 */

/**
 * 加载组件
 * @param {string} url - 组件URL
 * @param {string} targetId - 目标元素ID
 * @returns {Promise} - 加载完成的Promise
 */
function loadComponent(url, targetId) {
    return new Promise((resolve, reject) => {
        const target = document.getElementById(targetId);
        if (!target) {
            reject(new Error(`目标元素 ${targetId} 不存在`));
            return;
        }

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP错误! 状态: ${response.status}`);
                }
                return response.text();
            })
            .then(html => {
                target.innerHTML = html;
                resolve();
            })
            .catch(error => {
                console.error('加载组件失败:', error);
                reject(error);
            });
    });
}

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 初始化页面
    initPage();

    // 初始化移动菜单
    initMobileMenu();
});

/**
 * 初始化页面
 */
function initPage() {
    // 隐藏加载动画（仅当页面特定的JS没有处理时）
    // 使用setTimeout给页面特定的JS一些时间来处理加载动画
    setTimeout(() => {
        const loader = document.querySelector('.loader-container');
        // 检查加载动画是否仍然存在且可见（未被页面特定JS处理）
        if (loader && !loader.classList.contains('hidden') && loader.style.display !== 'none') {
            console.log('主JS隐藏加载动画');
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }
    }, 500); // 增加延迟时间，确保页面特定JS有足够时间处理

    // 初始化表单提交事件
    initForms();

    // 初始化返回顶部按钮 - 确保在所有页面上都初始化
    console.log('主JS初始化返回顶部按钮');
    initBackToTop();
}

/**
 * 初始化表单提交
 */
function initForms() {
    // 订阅表单
    const subscribeForm = document.getElementById('subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', handleSubscribeForm);
    }

    // 页脚订阅表单
    const footerSubscribeForm = document.getElementById('footer-subscribe-form');
    if (footerSubscribeForm) {
        footerSubscribeForm.addEventListener('submit', handleSubscribeForm);
    }
}

/**
 * 处理订阅表单提交
 * @param {Event} e - 表单提交事件
 */
function handleSubscribeForm(e) {
    e.preventDefault();

    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
        showNotification('请输入有效的电子邮箱地址', 'error');
        return;
    }

    // 模拟API调用
    setTimeout(() => {
        showNotification('订阅成功！感谢您的关注', 'success');
        emailInput.value = '';
    }, 1000);
}

/**
 * 验证电子邮箱格式
 * @param {string} email - 要验证的电子邮箱
 * @returns {boolean} - 是否为有效的电子邮箱
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * 初始化移动菜单
 */
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (!mobileMenuToggle || !mobileNav) return;

    // 添加菜单切换事件
    mobileMenuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');

        // 更新菜单按钮样式
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (mobileNav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // 移动下拉菜单
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = toggle.parentElement;
            parent.classList.toggle('active');
        });
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !mobileMenuToggle.contains(e.target) && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

/**
 * 显示通知消息
 * @param {string} message - 通知消息
 * @param {string} type - 通知类型 (success, error, info, warning)
 * @param {number} duration - 显示时长(毫秒)
 */
function showNotification(message, type = 'info', duration = 3000) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    // 设置图标
    let icon;
    switch (type) {
        case 'success':
            icon = '<i class="fas fa-check-circle"></i>';
            break;
        case 'error':
            icon = '<i class="fas fa-times-circle"></i>';
            break;
        case 'warning':
            icon = '<i class="fas fa-exclamation-triangle"></i>';
            break;
        default:
            icon = '<i class="fas fa-info-circle"></i>';
    }

    // 设置内容
    notification.innerHTML = `
        <div class="notification-icon">${icon}</div>
        <div class="notification-message">${message}</div>
        <button class="notification-close"><i class="fas fa-times"></i></button>
    `;

    // 添加到页面
    let notificationContainer = document.querySelector('.notification-container');
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);
    }

    notificationContainer.appendChild(notification);

    // 添加关闭按钮事件
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.classList.add('notification-hiding');
        setTimeout(() => {
            notification.remove();

            // 如果没有更多通知，移除容器
            if (notificationContainer.children.length === 0) {
                notificationContainer.remove();
            }
        }, 300);
    });

    // 显示动画
    setTimeout(() => {
        notification.classList.add('notification-visible');
    }, 10);

    // 自动关闭
    if (duration > 0) {
        setTimeout(() => {
            if (notification.parentElement) {
                notification.classList.add('notification-hiding');
                setTimeout(() => {
                    notification.remove();

                    // 如果没有更多通知，移除容器
                    if (notificationContainer.children.length === 0) {
                        notificationContainer.remove();
                    }
                }, 300);
            }
        }, duration);
    }
}

/**
 * 格式化日期
 * @param {Date|string} date - 日期对象或日期字符串
 * @param {string} format - 格式化模板
 * @returns {string} - 格式化后的日期字符串
 */
function formatDate(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');

    return format
        .replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hours)
        .replace('mm', minutes)
        .replace('ss', seconds);
}

/**
 * 获取URL参数
 * @param {string} name - 参数名
 * @returns {string|null} - 参数值
 */
function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

/**
 * 防抖函数
 * @param {Function} func - 要执行的函数
 * @param {number} wait - 等待时间(毫秒)
 * @returns {Function} - 防抖处理后的函数
 */
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * 节流函数
 * @param {Function} func - 要执行的函数
 * @param {number} limit - 限制时间(毫秒)
 * @returns {Function} - 节流处理后的函数
 */
function throttle(func, limit = 300) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

/**
 * 初始化返回顶部按钮
 */
function initBackToTop() {
    console.log('初始化返回顶部按钮');
    // 检查是否已存在返回顶部按钮
    let backToTopBtn = document.querySelector('.back-to-top');

    // 如果不存在，创建一个
    if (!backToTopBtn) {
        console.log('创建返回顶部按钮');
        backToTopBtn = document.createElement('button');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.setAttribute('aria-label', '返回顶部');
        document.body.appendChild(backToTopBtn);

        // 添加点击事件
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // 监听滚动事件，控制按钮显示/隐藏
        window.addEventListener('scroll', throttle(() => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
                console.log('显示返回顶部按钮');
            } else {
                backToTopBtn.classList.remove('visible');
                console.log('隐藏返回顶部按钮');
            }
        }, 200));
    } else {
        console.log('返回顶部按钮已存在');
    }
} 