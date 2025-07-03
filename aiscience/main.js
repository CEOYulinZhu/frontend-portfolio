// 页面滚动动画
document.addEventListener('DOMContentLoaded', () => {
    // 初始化粒子动画
    initParticles();

    // 监听滚动事件
    window.addEventListener('scroll', () => {
        handleScroll();
        updateJourneyMap();
    });

    // 初始化打字效果
    initTypingEffect();
});

// 粒子动画效果
function initParticles() {
    const particles = document.querySelector('.ai-particles');
    // 创建动态粒子效果
}

// 处理滚动显示效果
function handleScroll() {
    const cards = document.querySelectorAll('.interactive-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight * 0.8) {
            card.classList.add('visible');
        }
    });
}

// 打字机效果
function initTypingEffect() {
    const typingTexts = document.querySelectorAll('.typing-text');
    typingTexts.forEach(text => {
        const content = text.textContent;
        text.textContent = '';
        let index = 0;

        function type() {
            if (index < content.length) {
                text.textContent += content.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }

        type();
    });
} 