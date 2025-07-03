// 历史时刻数据
const milestonesData = [
    {
        year: "1893",
        title: "新西兰女性获得选举权",
        description: "新西兰成为世界上第一个赋予女性投票权的国家，开创了女性参政的先河。",
        icon: "fa-solid fa-check-to-slot"
    },
    {
        year: "1903",
        title: "居里夫人获诺贝尔物理学奖",
        description: "玛丽·居里成为首位获得诺贝尔奖的女性，她在放射性研究领域的贡献开创了现代物理学的新纪元。",
        icon: "fa-solid fa-atom"
    },
    {
        year: "1928",
        title: "阿梅莉亚·埃尔哈特跨大西洋",
        description: "成为第一位独自驾驶飞机横跨大西洋的女性，打破了航空界的性别壁垒。",
        icon: "fa-solid fa-plane"
    },
    {
        year: "1963",
        title: "瓦莲京娜·捷列什科娃太空之旅",
        description: "成为首位进入太空的女性，开创了女性航天员的时代。",
        icon: "fa-solid fa-rocket"
    },
    {
        year: "1979",
        title: "玛格丽特·撒切尔就任英国首相",
        description: "成为英国历史上第一位女首相，开创了女性政治领袖的新篇章。",
        icon: "fa-solid fa-crown"
    },
    {
        year: "2011",
        title: "屠呦呦获诺贝尔生理学或医学奖",
        description: "因发现青蒿素而获奖，成为中国首位诺贝尔科学奖获得者，她的研究挽救了全球数百万疟疾患者的生命。",
        icon: "fa-solid fa-microscope"
    },
    {
        year: "2014",
        title: "马拉拉·优素福获诺贝尔和平奖",
        description: "17岁的马拉拉成为最年轻的诺贝尔奖获得者，她为女童教育权利的斗争激励了全世界。",
        icon: "fa-solid fa-book-open"
    },
    {
        year: "2016",
        title: "吴仪成为世界贸易组织首位女性副总干事",
        description: "作为中国女性的杰出代表，她成为WTO历史上首位女性副总干事，展现了中国女性的领导力。",
        icon: "fa-solid fa-globe"
    },
    {
        year: "2018",
        title: "董明珠入选《财富》最具影响力女性",
        description: "格力电器董事长董明珠跻身全球最具影响力商界女性榜单，展现了中国企业家的风采。",
        icon: "fa-solid fa-building"
    },
    {
        year: "2020",
        title: "张弥曼当选中国科学院院士",
        description: "被誉为'中国古鱼类学家的祖母'，她在古脊椎动物研究领域的贡献获得国际认可。",
        icon: "fa-solid fa-fish"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    initMilestones();
});

function initMilestones() {
    const track = document.querySelector('.milestones-track');
    if (!track) return;

    // 渲染里程碑项目
    milestonesData.forEach(data => {
        const item = createMilestoneItem(data);
        track.appendChild(item);
    });

    // 初始化导航按钮
    initNavigation();

    // 检查可见性
    checkMilestoneVisibility();
    window.addEventListener('scroll', checkMilestoneVisibility);
}

function createMilestoneItem(data) {
    const item = document.createElement('div');
    item.className = 'milestone-item';

    item.innerHTML = `
        <div class="milestone-dot"></div>
        <div class="milestone-card">
            <div class="milestone-icon">
                <i class="${data.icon}"></i>
            </div>
            <div class="milestone-year">${data.year}</div>
            <h3 class="milestone-title">${data.title}</h3>
            <p class="milestone-description">${data.description}</p>
        </div>
    `;

    return item;
}

function initNavigation() {
    const scroll = document.querySelector('.milestones-scroll');
    const prevBtn = document.querySelector('.milestone-nav-btn.prev');
    const nextBtn = document.querySelector('.milestone-nav-btn.next');
    const items = document.querySelectorAll('.milestone-item');

    // 计算滚动距离
    const scrollDistance = window.innerWidth <= 768 ? 280 : 350; // 移动端使用更小的滚动距离

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            scroll.scrollBy({
                left: -scrollDistance,
                behavior: 'smooth'
            });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            scroll.scrollBy({
                left: scrollDistance,
                behavior: 'smooth'
            });
        });
    }

    // 检查滚动位置以显示/隐藏导航按钮
    function updateNavButtons() {
        if (prevBtn) {
            prevBtn.style.opacity = scroll.scrollLeft <= 0 ? '0.5' : '1';
        }
        if (nextBtn) {
            nextBtn.style.opacity =
                Math.ceil(scroll.scrollLeft + scroll.clientWidth) >= scroll.scrollWidth
                    ? '0.5'
                    : '1';
        }
    }

    scroll.addEventListener('scroll', updateNavButtons);
    window.addEventListener('resize', updateNavButtons);
    updateNavButtons(); // 初始检查

    // 添加触摸滑动支持
    let isDown = false;
    let startX;
    let scrollLeft;

    scroll.addEventListener('touchstart', (e) => {
        isDown = true;
        scroll.style.cursor = 'grabbing';
        startX = e.touches[0].pageX - scroll.offsetLeft;
        scrollLeft = scroll.scrollLeft;
    });

    scroll.addEventListener('touchend', () => {
        isDown = false;
        scroll.style.cursor = 'grab';
        snapToNearestItem(scroll);
    });

    scroll.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - scroll.offsetLeft;
        const walk = (x - startX) * 1.5;
        scroll.scrollLeft = scrollLeft - walk;
    });
}

// 添加对齐到最近项目的功能
function snapToNearestItem(scroll) {
    const itemWidth = window.innerWidth <= 768 ? 280 : 350;
    const scrollLeft = scroll.scrollLeft;
    const targetIndex = Math.round(scrollLeft / itemWidth);

    scroll.scrollTo({
        left: targetIndex * itemWidth,
        behavior: 'smooth'
    });
}

function checkMilestoneVisibility() {
    const items = document.querySelectorAll('.milestone-item');
    const windowHeight = window.innerHeight;

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = (rect.top <= windowHeight * 0.8);

        if (isVisible) {
            item.classList.add('visible');
        }
    });
} 