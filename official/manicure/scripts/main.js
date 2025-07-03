// 移动端菜单控制
document.querySelector('.mobile-menu-button').addEventListener('click', function () {
    document.querySelector('.main-header').classList.toggle('menu-open');
});

// 点击导航链接后关闭菜单
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.main-header').classList.remove('menu-open');
    });
});

// 导航栏滚动效果
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const header = document.querySelector('.main-header');

    if (currentScroll > 100) {
        if (currentScroll > lastScroll) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled');
        }
    } else {
        header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
});

// 添加当前页面位置的active状态
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// 添加滚动动画
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .hero-content, .hero-image').forEach((el) => {
    observer.observe(el);
});

// 添加更多需要观察的元素
document.querySelectorAll('.solution-card, .data-card, .contact-content > *').forEach((el) => {
    observer.observe(el);
});

// 添加平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // 关闭移动端菜单
            document.querySelector('.main-header').classList.remove('menu-open');
        }
    });
}); 