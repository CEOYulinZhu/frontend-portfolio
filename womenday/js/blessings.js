// 祝福语数据
const blessingsData = {
    "破茧": [
        "愿你打破束缚，找到真我",
        "用勇气击碎偏见的牢笼",
        "让梦想的种子破土而出",
        "在挑战中发现自己的力量",
        "突破限制，绽放独特光芒"
    ],
    "绽放": [
        "以智慧之光，照亮前行之路",
        "在生命的舞台上尽情绽放",
        "让才华如花般盛开",
        "用温暖的笑容感染世界",
        "在平凡中创造非凡"
    ],
    "翱翔": [
        "展翅高飞，拥抱广阔天空",
        "让梦想载着你翱翔",
        "在事业的蓝天自由飞翔",
        "突破云层，触摸理想的星辰",
        "以坚定的信念跨越高峰"
    ]
};

// 粒子系统类
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.text = '';
        this.textParticles = [];
        this.mouse = { x: 0, y: 0 };
        this.hue = 330;

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.initParticles();
        this.animate();
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    initParticles() {
        const particleCount = 100;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                size: Math.random() * 2 + 1,
                color: `hsla(${330 + Math.random() * 30}, 80%, 70%, 0.6)`
            });
        }
    }

    animate() {
        this.ctx.fillStyle = 'rgba(255, 248, 250, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;

            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.fill();
        });

        this.hue = (this.hue + 0.1) % 360;
        requestAnimationFrame(() => this.animate());
    }
}

class PhysicsEngine {
    constructor(container) {
        this.container = container;
        this.cards = [];
        this.bounds = container.getBoundingClientRect();
        this.gravity = 0.05; // 减小重力
        this.friction = 0.98;
        this.columns = 5;
        this.rows = 3;
        this.padding = 20;

        // 监听容器大小变化
        window.addEventListener('resize', () => {
            this.bounds = container.getBoundingClientRect();
            this.redistributeCards();
        });
    }

    getGridPosition(index) {
        const cellWidth = (this.bounds.width - this.padding * 2) / this.columns;
        const cellHeight = (this.bounds.height - this.padding * 2) / this.rows;
        const row = Math.floor(index / this.columns);
        const col = index % this.columns;

        return {
            x: this.padding + col * cellWidth + (Math.random() * 20 - 10),
            y: this.padding + row * cellHeight + (Math.random() * 20 - 10)
        };
    }

    addCard(card, index) {
        const position = this.getGridPosition(index);
        const rotation = (Math.random() - 0.5) * 6;

        this.cards.push({
            element: card,
            x: position.x,
            y: position.y,
            vx: 0,
            vy: 0,
            rotation: rotation,
            targetX: position.x,
            targetY: position.y,
            width: card.offsetWidth,
            height: card.offsetHeight
        });

        card.style.transform = `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`;
    }

    redistributeCards() {
        this.cards.forEach((card, index) => {
            const position = this.getGridPosition(index);
            card.targetX = position.x;
            card.targetY = position.y;
        });
    }

    update() {
        this.cards.forEach(card => {
            // 计算与目标位置的距离
            const dx = card.targetX - card.x;
            const dy = card.targetY - card.y;

            // 添加弹簧效果
            card.vx += dx * 0.03;
            card.vy += dy * 0.03;

            // 应用重力和摩擦力
            card.vy += this.gravity;
            card.vx *= this.friction;
            card.vy *= this.friction;

            // 更新位置
            card.x += card.vx;
            card.y += card.vy;

            // 边界检查
            if (card.y > this.bounds.height - card.height - this.padding) {
                card.y = this.bounds.height - card.height - this.padding;
                card.vy *= -0.3;
            }
            if (card.x < this.padding) {
                card.x = this.padding;
                card.vx *= -0.3;
            }
            if (card.x > this.bounds.width - card.width - this.padding) {
                card.x = this.bounds.width - card.width - this.padding;
                card.vx *= -0.3;
            }

            // 更新卡片位置
            card.element.style.transform = `translate(${card.x}px, ${card.y}px) rotate(${card.rotation}deg)`;
        });

        requestAnimationFrame(() => this.update());
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化粒子系统
    const canvas = document.getElementById('particleCanvas');
    const particleSystem = new ParticleSystem(canvas);

    // 获取容器
    const container = document.querySelector('.blessings-grid');
    const physics = new PhysicsEngine(container);

    // 创建并添加祝福卡片
    let cardIndex = 0;
    Object.entries(blessingsData).forEach(([category, blessings]) => {
        blessings.forEach(blessing => {
            const card = document.createElement('div');
            card.className = 'blessing-card';

            card.innerHTML = `
                <div class="blessing-content">${blessing}</div>
                <div class="blessing-category">${category}</div>
            `;

            // 添加鼠标移动效果
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });

            container.appendChild(card);
            physics.addCard(card, cardIndex++);
        });
    });

    // 启动物理引擎
    physics.update();

    // 更新背景色相
    let scrollPercent = 0;
    window.addEventListener('scroll', () => {
        const section = document.querySelector('.blessings-section');
        const rect = section.getBoundingClientRect();
        const viewHeight = window.innerHeight;

        if (rect.top <= viewHeight && rect.bottom >= 0) {
            scrollPercent = (viewHeight - rect.top) / (viewHeight + rect.height);
            const hue = 330 + (scrollPercent * 30);
            section.style.setProperty('--dynamic-hue', `${hue}`);
        }
    });
}); 