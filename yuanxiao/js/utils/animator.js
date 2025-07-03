class AnimationManager {
    constructor() {
        this.animations = new Set();
        this.isRunning = false;
        this.lastTime = 0;
    }

    addAnimation(animation) {
        this.animations.add(animation);
        if (!this.isRunning) {
            this.start();
        }
    }

    removeAnimation(animation) {
        this.animations.delete(animation);
        if (this.animations.size === 0) {
            this.stop();
        }
    }

    start() {
        this.isRunning = true;
        this.lastTime = performance.now();
        requestAnimationFrame(this.update.bind(this));
    }

    stop() {
        this.isRunning = false;
    }

    update(currentTime) {
        if (!this.isRunning) return;

        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;

        for (const animation of this.animations) {
            if (animation.update) {
                animation.update(deltaTime);
            }
        }

        requestAnimationFrame(this.update.bind(this));
    }

    // 创建一个简单的补间动画
    createTween(options) {
        const {
            target,
            property,
            from,
            to,
            duration = 1000,
            easing = t => t,
            onComplete
        } = options;

        let startTime = null;

        const animation = {
            update(deltaTime) {
                if (startTime === null) {
                    startTime = performance.now();
                }

                const elapsed = performance.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easing(progress);

                target[property] = from + (to - from) * easedProgress;

                if (progress >= 1) {
                    this.manager.removeAnimation(this);
                    if (onComplete) onComplete();
                }
            },
            manager: this
        };

        this.addAnimation(animation);
        return animation;
    }
}

// 常用缓动函数
const Easing = {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: t => t * t * t,
    easeOutCubic: t => (--t) * t * t + 1,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
};

// 导出单例实例和缓动函数
export const animationManager = new AnimationManager();
export { Easing }; 