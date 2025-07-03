class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.sections = document.querySelectorAll('section[id]');
        this.navbarCollapse = document.querySelector('.navbar-collapse');
        this.init();
    }

    init() {
        this.bindEvents();
        this.checkScroll();
        this.highlightCurrentSection();
    }

    bindEvents() {
        // 使用节流处理滚动事件
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.checkScroll();
                    this.highlightCurrentSection();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // 监听导航链接点击
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // 使用平滑滚动
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });

                    // 如果在移动端，关闭菜单
                    if (window.innerWidth < 992) {
                        // 使用Bootstrap的collapse方法关闭菜单
                        const bsCollapse = new bootstrap.Collapse(this.navbarCollapse, {
                            toggle: false
                        });
                        bsCollapse.hide();
                    }
                }
            });
        });

        // 处理移动端点击外部关闭菜单
        document.addEventListener('click', (e) => {
            if (window.innerWidth < 992 && this.navbarCollapse.classList.contains('show')) {
                // 检查点击是否在菜单外部
                if (!this.navbarCollapse.contains(e.target) &&
                    !e.target.matches('.navbar-toggler, .navbar-toggler *')) {
                    const bsCollapse = new bootstrap.Collapse(this.navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    }

    checkScroll() {
        // 添加滚动效果
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }

    highlightCurrentSection() {
        const scrollPosition = window.scrollY + 100; // 偏移量，考虑固定导航栏的高度

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// 等待DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
}); 