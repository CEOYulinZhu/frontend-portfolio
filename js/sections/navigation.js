// Logo动画效果
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo a');

    // 鼠标进入时添加动画类
    logo.addEventListener('mouseenter', () => {
        logo.classList.add('animate');
    });

    // 鼠标离开时移除动画类
    logo.addEventListener('mouseleave', () => {
        logo.classList.remove('animate');
    });

    // 点击时添加点击效果
    logo.addEventListener('click', (e) => {
        // 创建涟漪效果
        const ripple = document.createElement('span');
        ripple.classList.add('logo-ripple');

        const rect = logo.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        logo.appendChild(ripple);

        // 动画结束后移除涟漪元素
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    });
});

// 添加平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    });
});

// 导航栏功能
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    // 移动端菜单切换
    if (mobileMenuToggle && navLinksContainer) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenuToggle.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });

        // 点击导航链接后关闭移动端菜单
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenuToggle.classList.remove('active');
                navLinksContainer.classList.remove('active');
            });
        });
    }

    // 获取区域偏移量，考虑导航栏高度
    function getSectionOffsets() {
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        return Array.from(sections).map(section => ({
            id: section.id,
            offsetTop: section.offsetTop - headerHeight - 50, // 增加50px缓冲区
            offsetBottom: section.offsetTop + section.offsetHeight - headerHeight
        }));
    }

    // 更新活跃导航链接
    function updateActiveNav() {
        const scrollPosition = window.scrollY;
        const sectionOffsets = getSectionOffsets();

        // 找到当前可见的section
        let activeSection = 'home'; // 默认为首页

        for (let i = sectionOffsets.length - 1; i >= 0; i--) {
            if (scrollPosition >= sectionOffsets[i].offsetTop) {
                activeSection = sectionOffsets[i].id;
                break;
            }
        }

        // 更新导航链接的活跃状态
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const targetId = href ? href.substring(1) : ''; // 移除 # 号

            if (targetId === activeSection) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // 平滑滚动到目标区域
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('.site-header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // 为导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const targetId = href.substring(1);
                smoothScrollTo(targetId);

                // 手动更新活跃状态
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // 监听滚动事件
    let scrollTimeout;
    window.addEventListener('scroll', function () {
        // 使用节流来优化性能
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        scrollTimeout = setTimeout(() => {
            updateActiveNav();
        }, 10);
    });

    // 监听窗口大小变化，重新计算偏移量
    window.addEventListener('resize', function () {
        updateActiveNav();
    });

    // 页面加载完成后初始化
    updateActiveNav();
}); 