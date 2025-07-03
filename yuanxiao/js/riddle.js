import { riddles } from './data/riddles.js';

class RiddleManager {
    constructor() {
        this.currentIndex = 0;
        this.riddles = riddles;
        this.initElements();
        this.bindEvents();
        this.updateRiddle();
    }

    initElements() {
        // 获取所有需要的DOM元素
        this.riddleNumber = document.querySelector('.riddle-number');
        this.riddleType = document.querySelector('.riddle-type');
        this.riddleQuestion = document.querySelector('.riddle-question');
        this.riddleHint = document.querySelector('.riddle-hint');
        this.riddleAnswer = document.querySelector('.riddle-answer');
        this.answerContent = document.querySelector('.answer-content');

        this.btnHint = document.querySelector('.btn-hint');
        this.btnAnswer = document.querySelector('.btn-answer');
        this.btnPrev = document.querySelector('.btn-prev');
        this.btnNext = document.querySelector('.btn-next');
    }

    bindEvents() {
        // 绑定按钮点击事件
        this.btnHint.addEventListener('click', () => this.toggleHint());
        this.btnAnswer.addEventListener('click', () => this.toggleAnswer());
        this.btnPrev.addEventListener('click', () => this.showPrevRiddle());
        this.btnNext.addEventListener('click', () => this.showNextRiddle());
    }

    updateRiddle() {
        const riddle = this.riddles[this.currentIndex];

        // 更新灯谜内容
        this.riddleNumber.textContent = `谜题 ${this.currentIndex + 1}/${this.riddles.length}`;
        this.riddleType.textContent = riddle.type;
        this.riddleQuestion.textContent = riddle.question;
        this.riddleHint.textContent = `提示：${riddle.hint}`;

        // 更新答案内容
        this.answerContent.innerHTML = `
            <h4>答案：${riddle.answer}</h4>
            <p class="answer-explanation">${riddle.explanation}</p>
        `;

        // 重置提示和答案的显示状态
        this.riddleHint.style.display = 'none';
        this.riddleAnswer.classList.remove('show');
        this.btnHint.textContent = '查看提示';
        this.btnAnswer.textContent = '查看答案';

        // 更新导航按钮状态
        this.btnPrev.disabled = this.currentIndex === 0;
        this.btnNext.disabled = this.currentIndex === this.riddles.length - 1;

        // 添加动画效果
        this.addTransitionEffect();
    }

    toggleHint() {
        const isHidden = this.riddleHint.style.display === 'none';
        this.riddleHint.style.display = isHidden ? 'block' : 'none';
        this.btnHint.textContent = isHidden ? '隐藏提示' : '查看提示';

        if (isHidden) {
            this.riddleHint.style.opacity = '0';
            setTimeout(() => {
                this.riddleHint.style.opacity = '1';
            }, 10);
        }
    }

    toggleAnswer() {
        const isHidden = !this.riddleAnswer.classList.contains('show');
        this.riddleAnswer.classList.toggle('show');
        this.btnAnswer.textContent = isHidden ? '隐藏答案' : '查看答案';
    }

    showPrevRiddle() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateRiddle();
        }
    }

    showNextRiddle() {
        if (this.currentIndex < this.riddles.length - 1) {
            this.currentIndex++;
            this.updateRiddle();
        }
    }

    addTransitionEffect() {
        const elements = [this.riddleQuestion, this.riddleType, this.riddleNumber];
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(10px)';
            setTimeout(() => {
                element.style.transition = 'all 0.4s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 10);
        });
    }
}

// 当DOM加载完成后初始化灯谜管理器
document.addEventListener('DOMContentLoaded', () => {
    new RiddleManager();
}); 