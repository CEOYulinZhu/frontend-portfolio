import { gameConfig } from '../data/game-config.js';

export class TangYuan {
    constructor(x, filling, isSpecial = false, physics = null) {
        this.x = x;
        this.y = gameConfig.physics.initialDropHeight;
        this.size = Math.random() * (gameConfig.tangyuan.maxSize - gameConfig.tangyuan.minSize) + gameConfig.tangyuan.minSize;
        this.color = gameConfig.tangyuan.color;
        this.strokeColor = gameConfig.tangyuan.strokeColor;
        this.filling = filling;
        this.isSpecial = isSpecial;

        // 物理属性 - 使用传入的参数或默认值
        this.velocityY = 0;
        this.gravity = physics?.gravity || gameConfig.physics.gravity;
        this.maxFallSpeed = physics?.maxFallSpeed || gameConfig.physics.maxFallSpeed;

        // 视觉效果
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;

        // 游戏状态
        this.landed = false;
        this.comboMultiplier = 1;

        // 特效属性
        if (isSpecial) {
            this.effectType = gameConfig.fillings[filling].effect;
            this.effectDuration = gameConfig.fillings[filling].effectDuration;
            this.glowIntensity = 0;
            this.glowDirection = 1;
        }
    }

    update(slowMotion = 1, timeScale = 1) {
        if (this.landed) return;

        // 更新位置，使用timeScale来保证动画速度的一致性
        this.velocityY = Math.min(
            this.velocityY + this.gravity * slowMotion * timeScale,
            this.maxFallSpeed * slowMotion
        );
        this.y += this.velocityY * timeScale;

        // 更新旋转
        this.rotation += this.rotationSpeed * timeScale;

        // 更新特效
        if (this.isSpecial) {
            this.glowIntensity += 0.05 * this.glowDirection * timeScale;
            if (this.glowIntensity >= 1 || this.glowIntensity <= 0) {
                this.glowDirection *= -1;
            }
        }
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        // 如果是特殊汤圆，添加发光效果
        if (this.isSpecial) {
            ctx.shadowBlur = 15 + this.glowIntensity * 10;
            ctx.shadowColor = gameConfig.fillings[this.filling].color;
        }

        // 绘制外层
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.lineWidth = gameConfig.tangyuan.strokeWidth;
        ctx.strokeStyle = this.strokeColor;
        ctx.stroke();

        // 绘制馅料
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = gameConfig.fillings[this.filling].color;
        ctx.fill();

        ctx.restore();
    }

    checkBowlCollision(bowl) {
        return bowl.checkCollision(this.x, this.y, this.size);
    }

    land() {
        this.landed = true;
        this.velocityY = 0;
    }

    getScore() {
        const baseScore = gameConfig.fillings[this.filling].score;
        return Math.round(baseScore * this.comboMultiplier);
    }

    setComboMultiplier(multiplier) {
        this.comboMultiplier = multiplier;
    }
} 