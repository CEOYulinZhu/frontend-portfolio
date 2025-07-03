// 名人语录数据
const quotesData = [
    {
        content: "女性是世界的一半。如果你想让你的国家真正向前发展，你就必须让你的女性和你一起前进。",
        author: "马拉拉·优素福扎伊",
        title: "诺贝尔和平奖获得者"
    },
    {
        content: "女性的权利是人权。而人权是每个人与生俱来的权利，无论性别、种族、国籍、民族、语言、宗教或任何其他身份。",
        author: "希拉里·克林顿",
        title: "前美国国务卿"
    },
    {
        content: "女性的解放是衡量社会总体解放的自然标准。",
        author: "卡尔·马克思",
        title: "哲学家、经济学家"
    },
    {
        content: "女人能顶半边天。",
        author: "毛泽东",
        title: "中国革命家、政治家"
    },
    {
        content: "我们不能所有人都获得成功，如果有一半人被束缚着。",
        author: "玛丽·沃斯通克拉夫特",
        title: "女权主义先驱"
    },
    {
        content: "女性的教育程度越高，国家就越文明和繁荣。",
        author: "斯瓦米·维韦卡南达",
        title: "印度哲学家"
    },
    {
        content: "如果你想了解一个国家的文明程度，那就看看这个国家的女性地位如何。",
        author: "尼赫鲁",
        title: "印度首任总理"
    },
    {
        content: "女性是社会的基石，她们的力量、智慧和爱心塑造了我们的世界。",
        author: "米歇尔·奥巴马",
        title: "前美国第一夫人"
    },
    {
        content: "女性的进步是人类进步的最可靠标志。",
        author: "查尔斯·傅立叶",
        title: "法国哲学家"
    },
    {
        content: "女性不应该被视为弱者，而应该被视为强者。她们是生命的给予者，是家庭的支柱，是社会的建设者。",
        author: "安吉拉·默克尔",
        title: "前德国总理"
    },
    {
        content: "女性的力量不在于模仿男性的强势，而在于展现自己独特的品质和价值。",
        author: "杨绛",
        title: "中国作家、翻译家"
    },
    {
        content: "没有妇女的解放，人类就不可能获得真正的自由。",
        author: "列宁",
        title: "苏联革命家、政治家"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    // 初始化名人语录轮播
    initQuotes();

    // 检测滚动位置，触发动画
    checkQuotesVisibility();
    window.addEventListener('scroll', checkQuotesVisibility);
});

function initQuotes() {
    const track = document.querySelector('.quotes-track');
    if (!track) return;

    // 清空现有内容
    track.innerHTML = '';

    // 创建并添加语录卡片
    quotesData.forEach((quote, index) => {
        const card = createQuoteCard(quote);
        track.appendChild(card);
    });

    // 更新导航点
    updateQuoteNav();

    // 初始化轮播控制
    initQuoteControls();
}

// 创建语录卡片
function createQuoteCard(quote) {
    const card = document.createElement('div');
    card.className = 'quote-card';

    card.innerHTML = `
        <div class="quote-content">${quote.content}</div>
        <div class="quote-author">
            <div class="author-image">
                <i class="fas fa-user"></i>
            </div>
            <div class="author-info">
                <div class="author-name">${quote.author}</div>
                <div class="author-title">${quote.title}</div>
            </div>
        </div>
    `;

    return card;
}

// 更新导航点
function updateQuoteNav() {
    const nav = document.querySelector('.quotes-nav');
    if (!nav) return;

    nav.innerHTML = quotesData.map((_, index) =>
        `<div class="quote-dot${index === 0 ? ' active' : ''}"></div>`
    ).join('');
}

// 初始化轮播控制
function initQuoteControls() {
    const track = document.querySelector('.quotes-track');
    const prevBtn = document.querySelector('.quote-arrow-prev');
    const nextBtn = document.querySelector('.quote-arrow-next');
    const dots = document.querySelectorAll('.quote-dot');
    let currentIndex = 0;

    // 更新轮播状态
    function updateSlider() {
        // 更新轨道位置
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // 更新卡片状态
        const cards = track.querySelectorAll('.quote-card');
        cards.forEach((card, index) => {
            if (index === currentIndex) {
                setTimeout(() => {
                    card.classList.add('active');
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.classList.remove('active');
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
            }
        });

        // 更新导航点状态
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // 点击导航点切换
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // 点击箭头切换
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + quotesData.length) % quotesData.length;
            updateSlider();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % quotesData.length;
            updateSlider();
        });
    }

    // 自动轮播
    let interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % quotesData.length;
        updateSlider();
    }, 3000);

    // 鼠标悬停时暂停自动轮播
    track.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });

    track.addEventListener('mouseleave', () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % quotesData.length;
            updateSlider();
        }, 5000);
    });

    // 初始化显示第一个卡片
    updateSlider();
}

// 检测滚动位置，触发动画
function checkQuotesVisibility() {
    const section = document.querySelector('.quotes-section');
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
        section.classList.add('visible');
    }
}

// 随机颜色生成函数，用于作者头像背景
function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`;
} 