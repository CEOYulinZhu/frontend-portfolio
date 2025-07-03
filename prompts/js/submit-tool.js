/**
 * 提交工具页面脚本
 */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('submit-tool-form');
    const requiredFields = form.querySelectorAll('[required]');
    const languageCheckboxes = form.querySelectorAll('input[name="language"]');

    // 表单验证
    function validateForm() {
        let isValid = true;

        // 检查必填字段
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                showError(field, '此字段为必填项');
                isValid = false;
            } else {
                clearError(field);
            }
        });

        // 验证URL格式
        const websiteField = document.getElementById('tool-website');
        if (websiteField.value && !isValidUrl(websiteField.value)) {
            showError(websiteField, '请输入有效的网址');
            isValid = false;
        }

        // 验证邮箱格式
        const emailField = document.getElementById('submitter-email');
        if (emailField.value && !isValidEmail(emailField.value)) {
            showError(emailField, '请输入有效的邮箱地址');
            isValid = false;
        }

        // 验证语言选择
        const hasLanguageSelected = Array.from(languageCheckboxes).some(cb => cb.checked);
        if (!hasLanguageSelected) {
            const languageGroup = document.querySelector('.checkbox-group');
            showError(languageGroup, '请至少选择一种语言');
            isValid = false;
        } else {
            clearError(document.querySelector('.checkbox-group'));
        }

        return isValid;
    }

    // 显示错误信息
    function showError(element, message) {
        clearError(element);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#dc3545';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        element.parentNode.appendChild(errorDiv);
        element.style.borderColor = '#dc3545';
    }

    // 清除错误信息
    function clearError(element) {
        const errorDiv = element.parentNode.querySelector('.error-message');
        if (errorDiv) {
            errorDiv.remove();
        }
        element.style.borderColor = '';
    }

    // 验证URL格式
    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    // 验证邮箱格式
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // 实时验证
    requiredFields.forEach(field => {
        field.addEventListener('blur', function () {
            if (!this.value.trim()) {
                showError(this, '此字段为必填项');
            } else {
                clearError(this);
            }
        });

        field.addEventListener('input', function () {
            clearError(this);
        });
    });

    // 处理表单提交
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // 收集表单数据
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            website: formData.get('website'),
            category: formData.get('category'),
            description: formData.get('description'),
            features: formData.get('features'),
            price: formData.get('price'),
            languages: Array.from(languageCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value),
            submitter: {
                name: formData.get('submitter_name'),
                email: formData.get('submitter_email')
            }
        };

        try {
            // TODO: 替换为实际的API端点
            const response = await fetch('/api/submit-tool', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // 显示成功消息
                showNotification('提交成功！我们会尽快审核您提交的工具。', 'success');
                form.reset();
            } else {
                throw new Error('提交失败');
            }
        } catch (error) {
            // 显示错误消息
            showNotification('抱歉，提交失败，请稍后重试。', 'error');
            console.error('提交错误:', error);
        }
    });

    // 显示通知
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.padding = '1rem 2rem';
        notification.style.borderRadius = '6px';
        notification.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';
        notification.style.color = 'white';
        notification.style.zIndex = '1000';
        notification.textContent = message;

        document.body.appendChild(notification);

        // 3秒后自动移除通知
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}); 