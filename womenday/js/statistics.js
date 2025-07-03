// 统计数据
const statisticsData = [
    {
        icon: "fa-briefcase",
        number: 47,
        suffix: "%",
        title: "全球劳动力",
        description: "女性占全球劳动力的比例，但在许多地区仍面临就业障碍",
        progress: "47%"
    },
    {
        icon: "fa-graduation-cap",
        number: 39,
        suffix: "%",
        title: "高等教育",
        description: "全球范围内，女性在科学、技术、工程和数学领域的比例",
        progress: "39%"
    },
    {
        icon: "fa-gavel",
        number: 26,
        suffix: "%",
        title: "政治参与",
        description: "全球议会中女性代表的平均比例，反映政治决策中的性别差距",
        progress: "26%"
    },
    {
        icon: "fa-coins",
        number: 77,
        suffix: "%",
        title: "薪资差距",
        description: "全球范围内，女性平均收入是男性的77%，同工不同酬现象仍然存在",
        progress: "77%"
    },
    {
        icon: "fa-building",
        number: 8.8,
        suffix: "%",
        title: "企业领导",
        description: "全球财富500强企业中，女性CEO的比例仅为8.8%，领导层性别不平衡现象明显",
        progress: "8.8%"
    },
    {
        icon: "fa-book",
        number: 1.32,
        suffix: "亿",
        title: "教育缺失",
        description: "全球约有1.32亿女童失学，其中包括因童婚、贫困和性别歧视而被剥夺教育权利的女孩",
        progress: "60%"
    },
    {
        icon: "fa-heartbeat",
        number: 29.5,
        suffix: "万",
        title: "孕产妇健康",
        description: "每年约有29.5万名女性在怀孕和分娩过程中死亡，其中94%发生在低收入和中等收入国家",
        progress: "70%"
    },
    {
        icon: "fa-clock",
        number: 2.5,
        suffix: "倍",
        title: "无偿劳动",
        description: "全球范围内，女性承担的无偿家务和照料工作是男性的2.5倍，这限制了她们的职业发展",
        progress: "71%"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    // 初始化统计卡片
    initStatistics();

    // 检测滚动位置，触发动画
    window.addEventListener('scroll', checkStatistics);
    checkStatistics();
});

function initStatistics() {
    const container = document.querySelector('.statistics-container');
    if (!container) return;

    // 清空现有内容
    container.innerHTML = '';

    // 创建并添加统计卡片
    statisticsData.forEach((data, index) => {
        const card = createStatisticCard(data);
        container.appendChild(card);
    });
}

function createStatisticCard(data) {
    const card = document.createElement('div');
    card.className = 'statistic-card';

    card.innerHTML = `
        <div class="statistic-icon">
            <i class="fas ${data.icon}"></i>
        </div>
        <div class="statistic-number" data-value="${data.number}" data-suffix="${data.suffix}">0${data.suffix}</div>
        <h3 class="statistic-title">${data.title}</h3>
        <p class="statistic-description">${data.description}</p>
        <div class="progress-container">
            <div class="progress-bar" data-width="${data.progress}"></div>
        </div>
    `;

    return card;
}

function checkStatistics() {
    const section = document.querySelector('.statistics-section');
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.75) {
        // 显示统计卡片
        const cards = document.querySelectorAll('.statistic-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');

                // 为每个卡片单独触发数字和进度条动画
                setTimeout(() => {
                    animateNumberForCard(card);
                    animateProgressBarForCard(card);
                }, 300);
            }, index * 150);
        });

        // 移除滚动监听，避免重复触发
        window.removeEventListener('scroll', checkStatistics);
    }
}

function animateNumberForCard(card) {
    const numberElement = card.querySelector('.statistic-number');
    if (!numberElement) return;

    const targetValue = parseFloat(numberElement.getAttribute('data-value'));
    const suffix = numberElement.getAttribute('data-suffix') || '';
    const duration = 2000; // 动画持续时间（毫秒）
    const startTime = performance.now();
    let currentValue = 0;

    // 根据不同类型的数据设置不同的起始值和动画效果
    let startValue = 0;
    if (suffix === '%') {
        startValue = 0; // 百分比从0开始
    } else if (suffix === '倍') {
        startValue = 1; // 倍数从1开始
    } else if (targetValue > 1000) {
        startValue = Math.floor(targetValue / 3); // 大数值从三分之一开始
    } else if (targetValue > 100) {
        startValue = Math.floor(targetValue / 2); // 中等数值从一半开始
    }

    function updateNumber(timestamp) {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // 使用缓动函数使动画更自然
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        currentValue = startValue + (targetValue - startValue) * easedProgress;

        // 根据数值类型设置显示格式
        if (suffix === '%' || suffix === '倍' || targetValue < 100) {
            // 百分比、倍数或小数值保留一位小数
            numberElement.textContent = currentValue.toFixed(1) + suffix;
        } else {
            // 大数值取整
            numberElement.textContent = Math.round(currentValue) + suffix;
        }

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}

function animateProgressBarForCard(card) {
    const progressBar = card.querySelector('.progress-bar');
    if (!progressBar) return;

    const targetWidth = progressBar.getAttribute('data-width');
    progressBar.style.width = '0';

    setTimeout(() => {
        progressBar.style.width = targetWidth;
    }, 100);
}

// 保留原有的函数以兼容性，但不再主动调用
function animateNumbers() {
    const numberElements = document.querySelectorAll('.statistic-number');

    numberElements.forEach(element => {
        const targetValue = parseFloat(element.getAttribute('data-value'));
        const suffix = element.getAttribute('data-suffix') || '';
        const duration = 2000; // 动画持续时间（毫秒）
        const startTime = performance.now();
        let currentValue = 0;

        // 如果是百分比，从0开始；如果是大数字，可以从一半开始
        const startValue = suffix === '%' ? 0 : Math.floor(targetValue / 2);

        function updateNumber(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // 使用缓动函数使动画更自然
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            currentValue = startValue + (targetValue - startValue) * easedProgress;

            // 根据数值类型设置显示格式
            if (suffix === '%' || targetValue < 100) {
                // 百分比或小数值保留一位小数
                element.textContent = currentValue.toFixed(1) + suffix;
            } else {
                // 大数值取整
                element.textContent = Math.round(currentValue) + suffix;
            }

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        }

        requestAnimationFrame(updateNumber);
    });
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300);
    });
}
