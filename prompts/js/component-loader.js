/**
 * 组件加载器
 * 用于加载HTML组件并处理组件中的模板变量
 */

// 加载组件并替换模板变量
function loadComponent(elementId, componentPath, templateVars = {}) {
    return fetch(componentPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`无法加载组件: ${componentPath}`);
            }
            return response.text();
        })
        .then(html => {
            // 替换模板变量
            let processedHtml = html;
            for (const [key, value] of Object.entries(templateVars)) {
                const regex = new RegExp(`{{${key}}}`, 'g');
                processedHtml = processedHtml.replace(regex, value);
            }

            // 更新DOM
            document.getElementById(elementId).innerHTML = processedHtml;
            return processedHtml;
        })
        .catch(error => {
            console.error(`加载组件时出错: ${error.message}`);
            document.getElementById(elementId).innerHTML = `<div class="error-message">组件加载失败</div>`;
        });
}

// 加载法律页面的所有组件
function loadLegalPageComponents(pageTitle, pageSubtitle, contactEmail, contactPhone, contactAddress) {
    // 创建一个Promise数组来跟踪所有组件的加载
    const promises = [];

    // 加载加载动画组件
    promises.push(loadComponent('loader-component', '../components/loader.html'));

    // 加载页面标题组件
    promises.push(loadComponent('page-header-component', '../components/page-header.html', {
        title: pageTitle,
        subtitle: pageSubtitle
    }));

    // 加载联系信息组件
    promises.push(loadComponent('contact-info-component', '../components/contact-info.html', {
        email: contactEmail,
        phone: contactPhone,
        address: contactAddress
    }));

    // 当所有组件加载完成后，隐藏加载动画
    Promise.all(promises)
        .then(() => {
            setTimeout(() => {
                const loader = document.querySelector('.loader-container');
                if (loader) {
                    loader.classList.add('hidden');
                }
            }, 300);
        })
        .catch(error => {
            console.error('加载组件时出错:', error);
            // 即使出错也要隐藏加载动画
            setTimeout(() => {
                const loader = document.querySelector('.loader-container');
                if (loader) {
                    loader.classList.add('hidden');
                }
            }, 300);
        });
} 