export class FutureVision {
    constructor() {
        this.timelineNodes = document.querySelectorAll('.timeline-node');
        this.init();
    }

    init() {
        // 创建Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.3
            }
        );

        // 观察所有时间线节点
        this.timelineNodes.forEach(node => {
            observer.observe(node);
        });

        // 初始化粒子动画
        this.initParticles();
    }

    initParticles() {
        const canvas = document.getElementById('future-particles');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const particles = [];

        // 设置canvas尺寸
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // 创建粒子
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2 + 1,
                speed: Math.random() * 2 + 1,
                direction: Math.random() * Math.PI * 2,
                alpha: Math.random() * 0.5 + 0.5
            });
        }

        // 动画循环
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(100, 255, 218, 0.1)';

            particles.forEach(particle => {
                // 更新位置
                particle.x += Math.cos(particle.direction) * particle.speed;
                particle.y += Math.sin(particle.direction) * particle.speed;

                // 边界检查
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // 绘制粒子
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100, 255, 218, ${particle.alpha})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();
    }
} 