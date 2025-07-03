/**
 * AI提示词宝库 - 联系我们页面JavaScript文件
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 初始化页面
    initPage();
});

/**
 * 初始化页面
 */
function initPage() {
    // 隐藏加载动画
    const loader = document.querySelector('.loader-container');
    if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }

    // 初始化联系表单
    initContactForm();

    // 初始化FAQ
    initFAQ();
}

/**
 * 初始化联系表单
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // 获取表单数据
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());

            // 表单验证
            if (validateForm(formValues)) {
                // 模拟表单提交
                submitForm(formValues);
            }
        });
    }
}

/**
 * 验证表单数据
 * @param {Object} formValues - 表单数据
 * @returns {boolean} 验证结果
 */
function validateForm(formValues) {
    let isValid = true;
    const errors = [];

    // 验证姓名
    if (!formValues.name || formValues.name.trim() === '') {
        errors.push('请输入您的姓名');
        isValid = false;
        highlightField('name');
    }

    // 验证邮箱
    if (!formValues.email || !isValidEmail(formValues.email)) {
        errors.push('请输入有效的电子邮箱地址');
        isValid = false;
        highlightField('email');
    }

    // 验证主题
    if (!formValues.subject || formValues.subject.trim() === '') {
        errors.push('请输入主题');
        isValid = false;
        highlightField('subject');
    }

    // 验证消息内容
    if (!formValues.message || formValues.message.trim() === '') {
        errors.push('请输入消息内容');
        isValid = false;
        highlightField('message');
    }

    // 如果有错误，显示错误信息
    if (!isValid) {
        showNotification('error', '表单验证失败', errors.join('<br>'));
    }

    return isValid;
}

/**
 * 高亮显示错误字段
 * @param {string} fieldId - 字段ID
 */
function highlightField(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.add('error');

        // 添加错误样式
        if (!document.querySelector('.form-error-style')) {
            const style = document.createElement('style');
            style.className = 'form-error-style';
            style.textContent = `
                .error {
                    border-color: var(--error-color) !important;
                    background-color: rgba(var(--error-rgb), 0.05) !important;
                }
            `;
            document.head.appendChild(style);
        }

        // 移除错误样式（当用户开始输入时）
        field.addEventListener('input', () => {
            field.classList.remove('error');
        });
    }
}

/**
 * 验证邮箱格式
 * @param {string} email - 邮箱地址
 * @returns {boolean} 验证结果
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * 提交表单
 * @param {Object} formValues - 表单数据
 */
function submitForm(formValues) {
    // 显示加载状态
    const submitButton = document.querySelector('.submit-btn');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 发送中...';

    // 模拟API请求延迟
    setTimeout(() => {
        // 模拟成功响应
        showNotification('success', '消息已发送', '感谢您的留言，我们会尽快回复您！');

        // 重置表单
        document.getElementById('contact-form').reset();

        // 恢复按钮状态
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 1500);
}

/**
 * 显示通知消息
 * @param {string} type - 通知类型（success/error/info）
 * @param {string} title - 通知标题
 * @param {string} message - 通知内容
 */
function showNotification(type, title, message) {
    // 检查是否已存在通知容器
    let notificationContainer = document.querySelector('.notification-container');

    // 如果不存在，创建一个
    if (!notificationContainer) {
        notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
        document.body.appendChild(notificationContainer);

        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
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
            
            .close-notification {
                background: none;
                border: none;
                cursor: pointer;
                font-size: 14px;
                color: white;
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
        `;
        document.head.appendChild(style);
    }

    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    // 设置通知内容
    notification.innerHTML = `
        <div class="notification-header">
            <h4>${title}</h4>
            <button class="close-notification"><i class="fas fa-times"></i></button>
        </div>
        <div class="notification-body">
            ${message}
        </div>
    `;

    // 添加到容器
    notificationContainer.appendChild(notification);

    // 添加关闭按钮事件
    const closeBtn = notification.querySelector('.close-notification');
    closeBtn.addEventListener('click', () => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });

    // 自动关闭（成功和信息类型的通知）
    if (type === 'success' || type === 'info') {
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
}

/**
 * 初始化FAQ功能
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        // 监听details的toggle事件
        item.addEventListener('toggle', () => {
            // 关闭其他打开的FAQ项
            if (item.open) {
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.open) {
                        otherItem.open = false;
                    }
                });
            }
        });
    });
} 