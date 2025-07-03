/**
 * AI提示词宝库 - 登录页面脚本
 */

document.addEventListener('DOMContentLoaded', function () {
    // 页面加载完成后隐藏加载动画
    const loader = document.querySelector('.loader-container');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }, 300);
    }

    // 添加视差效果 - 减少移动幅度使其更轻量
    const authInfo = document.querySelector('.auth-info');
    if (authInfo) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;

            const decorationElements = document.querySelector('.decoration-elements');
            if (decorationElements) {
                decorationElements.style.transform = `translate(${x * 12}px, ${y * 12}px)`;
            }

            const circles = document.querySelectorAll('.decoration-circle');
            circles.forEach((circle, index) => {
                const factor = (index + 1) * 3;
                circle.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        });
    }

    // 动态粒子效果 - 减少粒子数量和动画复杂度
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        // 随机位置
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        particle.style.left = `${randomX}%`;
        particle.style.top = `${randomY}%`;

        // 随机大小 - 减小粒子尺寸
        const size = 1.5 + Math.random() * 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // 随机透明度
        const opacity = 0.3 + Math.random() * 0.5;
        particle.style.opacity = opacity;

        // 随机动画延迟
        const delay = Math.random() * 5;
        particle.style.animationDelay = `${delay}s`;
    });

    // 标签切换功能
    const tabs = document.querySelectorAll('.auth-tab');
    const formContainers = document.querySelectorAll('.auth-form-container');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            // 更新标签状态
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // 更新表单容器显示
            formContainers.forEach(container => {
                container.classList.remove('active');
                if (container.id === `${target}-form-container`) {
                    container.classList.add('active');

                    // 如果切换到注册表单，确保滚动到顶部
                    if (target === 'register') {
                        container.scrollTop = 0;

                        // 确保父容器也滚动到顶部
                        const authCard = document.querySelector('.auth-card');
                        if (authCard) {
                            authCard.scrollTop = 0;
                        }
                    }
                }
            });
        });
    });

    // 密码显示/隐藏功能
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');

    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function () {
            const passwordInput = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });

    // 密码强度检测功能
    const passwordInput = document.getElementById('register-password');
    const strengthBar = document.querySelector('.strength-level');
    const strengthText = document.querySelector('.strength-text');

    if (passwordInput && strengthBar && strengthText) {
        passwordInput.addEventListener('input', () => {
            const password = passwordInput.value;
            const strength = checkPasswordStrength(password);

            // 更新强度条
            strengthBar.setAttribute('data-level', strength.level);

            // 更新强度文本
            strengthText.textContent = `密码强度: ${strength.text}`;
        });
    }

    // 表单提交处理
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // 获取表单数据
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const remember = document.getElementById('remember-me').checked;

            // 显示加载状态
            const submitButton = loginForm.querySelector('.auth-button');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 登录中...';
            submitButton.disabled = true;

            // 模拟登录请求 - 减少等待时间
            setTimeout(() => {
                console.log('登录信息:', { email, password, remember });

                // 这里应该是实际的登录API请求
                // 登录成功后重定向到首页
                // window.location.href = '../index.html';

                // 恢复按钮状态（仅用于演示）
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;

                // 显示成功消息（仅用于演示）
                showNotification('登录成功！正在跳转...', 'success');
            }, 800);
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // 获取表单数据
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;

            // 验证密码是否匹配
            if (password !== confirmPassword) {
                showNotification('两次输入的密码不一致', 'error');
                return;
            }

            // 显示加载状态
            const submitButton = registerForm.querySelector('.auth-button');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 注册中...';
            submitButton.disabled = true;

            // 模拟注册请求 - 减少等待时间
            setTimeout(() => {
                console.log('注册信息:', { username, email, password });

                // 这里应该是实际的注册API请求

                // 恢复按钮状态（仅用于演示）
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;

                // 显示成功消息（仅用于演示）
                showNotification('注册成功！请登录您的账号', 'success');

                // 切换到登录标签
                document.querySelector('.auth-tab[data-tab="login"]').click();
            }, 800);
        });
    }

    // 添加表单输入动画效果 - 简化动画
    const inputs = document.querySelectorAll('.input-with-icon input');

    inputs.forEach(input => {
        // 聚焦时添加动画效果
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('input-focused');
        });

        // 失焦时移除动画效果
        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('input-focused');
        });
    });

    // 添加社交登录按钮悬停效果 - 减小移动幅度
    const socialButtons = document.querySelectorAll('.social-button');

    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // 添加特性卡片悬停效果 - 减小变换幅度
    const features = document.querySelectorAll('.auth-feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            const icon = feature.querySelector('.feature-icon');
            icon.style.transform = 'scale(1.05) rotate(3deg)';
        });

        feature.addEventListener('mouseleave', () => {
            const icon = feature.querySelector('.feature-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

/**
 * 检查密码强度
 * @param {string} password - 用户输入的密码
 * @returns {Object} 包含强度级别和文本描述
 */
function checkPasswordStrength(password) {
    // 如果密码为空，返回最低强度
    if (!password) {
        return { level: 0, text: '弱' };
    }

    let score = 0;

    // 长度检查
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;

    // 复杂性检查
    if (/[A-Z]/.test(password)) score += 1; // 大写字母
    if (/[a-z]/.test(password)) score += 1; // 小写字母
    if (/[0-9]/.test(password)) score += 1; // 数字
    if (/[^A-Za-z0-9]/.test(password)) score += 1; // 特殊字符

    // 根据得分确定强度级别
    let level, text;

    if (score < 3) {
        level = 0;
        text = '弱';
    } else if (score < 5) {
        level = 1;
        text = '中';
    } else if (score < 7) {
        level = 2;
        text = '强';
    } else {
        level = 3;
        text = '非常强';
    }

    return { level, text };
}

/**
 * 显示通知消息
 * @param {string} message - 通知消息
 * @param {string} type - 通知类型（success, error, warning, info）
 */
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    // 设置图标
    let icon;
    switch (type) {
        case 'success':
            icon = 'fa-check-circle';
            break;
        case 'error':
            icon = 'fa-times-circle';
            break;
        case 'warning':
            icon = 'fa-exclamation-triangle';
            break;
        default:
            icon = 'fa-info-circle';
    }

    // 设置通知内容
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;

    // 添加到页面
    document.body.appendChild(notification);

    // 显示通知
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    // 自动关闭通知
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// 添加通知样式
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        background-color: white;
        color: var(--dark-text);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 1000;
        transform: translateX(120%);
        transition: transform 0.3s ease;
        max-width: 350px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification i {
        font-size: 1.2rem;
    }
    
    .notification.success {
        border-left: 4px solid var(--success-color);
    }
    
    .notification.success i {
        color: var(--success-color);
    }
    
    .notification.error {
        border-left: 4px solid var(--error-color);
    }
    
    .notification.error i {
        color: var(--error-color);
    }
    
    .notification.warning {
        border-left: 4px solid var(--warning-color);
    }
    
    .notification.warning i {
        color: var(--warning-color);
    }
    
    .notification.info {
        border-left: 4px solid var(--primary-color);
    }
    
    .notification.info i {
        color: var(--primary-color);
    }
    
    .input-with-icon.input-focused {
        animation: pulse 1s infinite;
    }
    
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.4);
        }
        70% {
            box-shadow: 0 0 0 5px rgba(var(--primary-rgb), 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0);
        }
    }
`;

document.head.appendChild(style);
