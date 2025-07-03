/**
 * 页面标题组件加载和配置
 * 用于在页面中加载和配置页面标题组件
 */

// 存储待设置的标题和副标题
let pendingTitle = null;
let pendingSubtitle = null;

document.addEventListener('DOMContentLoaded', function () {
    // 加载页面标题组件
    loadPageHeader();
});

/**
 * 加载页面标题组件
 * @param {string} title - 页面标题
 * @param {string} subtitle - 页面副标题
 */
function loadPageHeader(title, subtitle) {
    // 如果提供了标题和副标题，先存储起来
    if (title) pendingTitle = title;
    if (subtitle) pendingSubtitle = subtitle;

    // 获取页面标题组件容器
    const pageHeaderContainer = document.getElementById('page-header-container');

    if (!pageHeaderContainer) {
        console.error('页面标题组件容器不存在');
        return;
    }

    // 获取当前页面的路径，以确定相对路径
    const currentPath = window.location.pathname;
    const isInPagesDir = currentPath.includes('/pages/');
    const componentPath = isInPagesDir ? '../components/page-header.html' : './components/page-header.html';

    // 加载页面标题组件
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            // 插入页面标题组件
            pageHeaderContainer.innerHTML = data;

            // 如果有待设置的标题和副标题，立即设置
            if (pendingTitle || pendingSubtitle) {
                setPageHeader(pendingTitle, pendingSubtitle);
                // 清除待设置的值
                pendingTitle = null;
                pendingSubtitle = null;
            }
        })
        .catch(error => {
            console.error('加载页面标题组件失败:', error);
        });
}

/**
 * 设置页面标题和副标题
 * @param {string} title - 页面标题
 * @param {string} subtitle - 页面副标题
 */
function setPageHeader(title, subtitle) {
    const titleElement = document.getElementById('page-title');
    const subtitleElement = document.getElementById('page-subtitle');

    if (!titleElement || !subtitleElement) {
        // 如果元素不存在，可能组件还没加载完成，先存储值
        pendingTitle = title;
        pendingSubtitle = subtitle;
        return;
    }

    if (title) {
        titleElement.textContent = title;
    }

    if (subtitle) {
        subtitleElement.textContent = subtitle;
    }
} 