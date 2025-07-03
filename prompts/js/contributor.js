// 页面加载控制
document.addEventListener('DOMContentLoaded', function () {
    // 添加 loading 类到 body
    document.body.classList.add('loading');

    // 初始化所有组件
    Promise.all([
        initPage(),
        initScrollAnimations(),
        initStatCounters(),
        initFormValidation()
    ]).then(() => {
        // 所有初始化完成后，显示页面内容
        setTimeout(() => {
            // 隐藏加载动画
            const loader = document.querySelector('.loader-container');
            loader.classList.add('hidden');

            // 显示主要内容
            const main = document.querySelector('main');
            main.classList.add('loaded');

            // 移除 body 的 loading 类
            document.body.classList.remove('loading');

            // 完全移除加载动画
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }, 500); // 给一个小延迟确保所有内容都准备好
    });
});

// 页面初始化函数
function initPage() {
    // 初始化滚动动画
    initScrollAnimations();

    // 初始化统计数字动画
    initStatCounters();

    // 初始化表单验证
    initFormValidation();
}

// 滚动动画初始化
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.value-card, .step-card, .type-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// 统计数字动画初始化
function initStatCounters() {
    const stats = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 1
    });

    stats.forEach(stat => {
        observer.observe(stat);
    });
}

// 数字动画函数
function animateCounter(element, target) {
    let current = 0;
    const duration = 2000; // 动画持续2秒
    const steps = 60; // 每秒60帧
    const increment = target / (duration / 1000 * steps);

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 1000 / steps);
}

// 表单验证初始化
function initFormValidation() {
    const form = document.querySelector('.contributor-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 获取表单数据
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // 验证表单数据
        if (validateForm(data)) {
            // 提交表单
            submitForm(data);
        }
    });
}

// 表单验证函数
function validateForm(data) {
    let isValid = true;
    const errors = {};

    // 验证姓名
    if (!data.name || data.name.trim().length < 2) {
        errors.name = '请输入有效的姓名（至少2个字符）';
        isValid = false;
    }

    // 验证邮箱
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.email = '请输入有效的邮箱地址';
        isValid = false;
    }

    // 验证贡献领域
    if (!data.contribution_area || data.contribution_area === '请选择') {
        errors.contribution_area = '请选择贡献领域';
        isValid = false;
    }

    // 显示错误信息
    if (!isValid) {
        showFormErrors(errors);
    }

    return isValid;
}

// 显示表单错误信息
function showFormErrors(errors) {
    // 清除之前的错误信息
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => element.remove());

    // 显示新的错误信息
    Object.entries(errors).forEach(([field, message]) => {
        const input = document.querySelector(`[name="${field}"]`);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        input.parentNode.insertBefore(errorDiv, input.nextSibling);
    });
}

// 提交表单函数
async function submitForm(data) {
    try {
        // 显示加载状态
        showLoading();

        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1500));

        // 显示成功消息
        showSuccess();

        // 重置表单
        document.querySelector('.contributor-form').reset();

    } catch (error) {
        // 显示错误消息
        showError('提交失败，请稍后重试');

    } finally {
        // 隐藏加载状态
        hideLoading();
    }
}

// 显示加载状态
function showLoading() {
    const submitButton = document.querySelector('.contributor-form button[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 提交中...';
}

// 隐藏加载状态
function hideLoading() {
    const submitButton = document.querySelector('.contributor-form button[type="submit"]');
    submitButton.disabled = false;
    submitButton.innerHTML = '提交申请';
}

// 显示成功消息
function showSuccess() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.textContent = '申请提交成功！我们会尽快审核您的申请。';

    const form = document.querySelector('.contributor-form');
    form.parentNode.insertBefore(message, form.nextSibling);

    // 3秒后移除成功消息
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// 显示错误消息
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message global-error';
    errorDiv.textContent = message;

    const form = document.querySelector('.contributor-form');
    form.parentNode.insertBefore(errorDiv, form);

    // 3秒后移除错误消息
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
} 