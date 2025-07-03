export class TypingEffect {
    constructor(element, text, options = {}) {
        this.element = element;
        this.text = text;
        this.speed = options.speed || 50;
        this.statusElement = options.statusElement;
        this.onComplete = options.onComplete;
        this.isTyping = false;
        this.currentIndex = 0;
    }

    start() {
        if (this.isTyping) return;
        this.isTyping = true;
        this.currentIndex = 0;
        this.element.textContent = '';

        // 添加激活类，显示文本容器
        this.element.classList.add('active');

        if (this.statusElement) {
            this.statusElement.textContent = 'AI正在输入...';
            this.statusElement.classList.add('typing');
            this.statusElement.classList.remove('complete');
        }

        // 添加短暂延迟，让状态显示更自然
        setTimeout(() => this.type(), 500);
    }

    type() {
        if (this.currentIndex < this.text.length) {
            this.element.textContent += this.text.charAt(this.currentIndex);
            this.currentIndex++;
            // 根据标点符号调整打字速度
            const nextChar = this.text.charAt(this.currentIndex);
            const delay = /[，。！？、]/.test(nextChar) ? this.speed * 3 : this.speed;
            setTimeout(() => this.type(), delay);
        } else {
            setTimeout(() => this.complete(), 500); // 完成后短暂延迟
        }
    }

    complete() {
        this.isTyping = false;
        if (this.statusElement) {
            this.statusElement.textContent = 'AI输出完毕 ✓';
            this.statusElement.classList.remove('typing');
            this.statusElement.classList.add('complete');
        }
        if (this.onComplete) {
            this.onComplete();
        }
    }

    reset() {
        this.isTyping = false;
        this.currentIndex = 0;
        this.element.textContent = '';
        this.element.classList.remove('active');
        if (this.statusElement) {
            this.statusElement.textContent = '';
            this.statusElement.classList.remove('typing', 'complete');
        }
    }
}

export const initTyping = () => {
    document.querySelectorAll('.typing-text').forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        new TypingEffect(element, text);
    });
}; 