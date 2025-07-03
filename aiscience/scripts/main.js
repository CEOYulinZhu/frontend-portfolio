// 导入所需模块
import ParticleSystem from './components/particles.js';
import { TypingEffect } from './components/typing.js';
import { initScroll } from './components/scroll.js';
import { helpers } from './utils/helpers.js';
import { NeuralNetwork } from './components/neural-network.js';
import { AIProcess } from './components/ai-process.js';
import { FutureVision } from './components/future-vision.js';

// 处理卡片显示动画
function handleCardAnimations() {
    const cards = document.querySelectorAll('.interactive-card');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    cards.forEach(card => observer.observe(card));
}

// 主程序入口
document.addEventListener('DOMContentLoaded', () => {
    // 初始化各个模块
    const particleSystem = new ParticleSystem(document.querySelector('.particles-container'));
    particleSystem.init();

    // 初始化打字效果
    const typingElements = document.querySelectorAll('.typing-text');
    const typingEffects = new Map();

    typingElements.forEach(element => {
        const container = element.closest('.typing-container');
        const statusElement = container?.querySelector('.typing-status');
        const originalText = element.textContent.trim();
        element.textContent = '';

        const effect = new TypingEffect(element, originalText, {
            speed: 30,
            statusElement: statusElement
        });
        typingEffects.set(element, effect);
    });

    // 监听滚动事件，检测元素是否进入视图
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const typingElement = entry.target.querySelector('.typing-text');
                if (typingElement) {
                    const effect = typingEffects.get(typingElement);
                    if (effect) {
                        effect.reset();
                        effect.start();
                    }
                }
            }
        });
    }, {
        threshold: 0.5 // 元素出现50%时触发
    });

    // 观察所有包含打字效果的容器
    document.querySelectorAll('.interactive-card').forEach(card => {
        observer.observe(card);
    });

    initScroll();
    handleCardAnimations();

    // 初始化神经网络可视化
    const networkCanvas = document.getElementById('neural-network');
    if (networkCanvas) {
        new NeuralNetwork(networkCanvas);
    }

    // 初始化AI工作原理展示
    new AIProcess();

    // 初始化未来展望部分
    new FutureVision();
}); 