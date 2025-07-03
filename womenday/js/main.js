// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // 向下滚动
        navbar.style.transform = 'translateY(-100%)';
        navbar.classList.add('scroll-down');
        navbar.classList.remove('scroll-up');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // 向上滚动
        navbar.style.transform = 'translateY(0)';
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// 移动端菜单处理
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const menuLinks = document.querySelectorAll('.nav-links a');

    // 切换菜单状态
    function toggleMenu() {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    // 点击菜单按钮
    mobileMenuBtn.addEventListener('click', toggleMenu);

    // 点击遮罩层关闭菜单
    overlay.addEventListener('click', toggleMenu);

    // 点击菜单链接后关闭菜单
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
}); 