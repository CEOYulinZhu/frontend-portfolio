export class AIProcess {
    constructor() {
        this.steps = document.querySelectorAll('.process-step');
        this.observer = null;
        this.progressBars = document.querySelectorAll('.progress');
        this.dataParticles = [];

        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.initDataParticles();
        this.initNeuralNetwork();
    }

    setupIntersectionObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 激活当前步骤
                    entry.target.classList.add('active');

                    // 获取步骤编号
                    const stepNumber = entry.target.dataset.step;

                    // 根据步骤触发相应动画
                    switch (stepNumber) {
                        case '1':
                            this.animateDataCollection(entry.target);
                            break;
                        case '2':
                            this.animateTraining(entry.target);
                            break;
                        case '3':
                            this.animateDecision(entry.target);
                            break;
                    }
                }
            });
        }, {
            threshold: 0.3
        });

        this.steps.forEach(step => this.observer.observe(step));
    }

    // 数据收集动画
    animateDataCollection(stepElement) {
        const sources = stepElement.querySelectorAll('.data-source');
        sources.forEach((source, index) => {
            // 添加发光效果
            source.style.animation = `pulse 2s infinite ${index * 0.3}s`;

            // 创建数据流动粒子
            this.createDataParticles(source);
        });
    }

    createDataParticles(source) {
        const container = source.querySelector('.data-particles');
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.className = 'data-particle';
            particle.style.animationDelay = `${i * 0.2}s`;
            container.appendChild(particle);
        }
    }

    // 训练过程动画
    animateTraining(stepElement) {
        const progress = stepElement.querySelector('.progress');
        if (progress) {
            // 模拟训练进度
            let width = 0;
            const interval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(interval);
                } else {
                    width += 1;
                    progress.style.width = width + '%';
                }
            }, 50);
        }
    }

    // 决策输出动画
    animateDecision(stepElement) {
        const path = stepElement.querySelector('.processing-path');
        if (path) {
            path.style.animation = 'processFlow 2s linear infinite';
        }

        // 延迟显示结果
        setTimeout(() => {
            const results = stepElement.querySelectorAll('.result-item');
            results.forEach((result, index) => {
                result.style.animation = `resultSlideIn 0.5s ease forwards ${index * 0.2}s`;
            });
        }, 1000);
    }

    // 初始化数据粒子
    initDataParticles() {
        const style = document.createElement('style');
        style.textContent = `
            .data-particle {
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--accent-color);
                border-radius: 50%;
                animation: particleFlow 2s linear infinite;
                box-shadow: 0 0 10px var(--accent-color);
            }

            @keyframes particleFlow {
                0% {
                    transform: translate(-50%, -50%) scale(0);
                    opacity: 0;
                }
                50% {
                    transform: translate(100%, 100%) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(200%, 200%) scale(0);
                    opacity: 0;
                }
            }

            @keyframes pulse {
                0%, 100% {
                    transform: scale(1);
                    filter: brightness(1);
                }
                50% {
                    transform: scale(1.1);
                    filter: brightness(1.2);
                }
            }
        `;
        document.head.appendChild(style);
    }
} 