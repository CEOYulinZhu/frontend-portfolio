import { gameConfig } from './data/game-config.js';
import { Bowl } from './entities/Bowl.js';
import { TangYuan } from './entities/TangYuan.js';
import { animationManager } from './utils/animator.js';

class TangYuanGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.initCanvas();
        this.initGame();
        this.bindEvents();
    }

    initCanvas() {
        const container = this.canvas.parentElement;
        const size = Math.min(container.clientWidth, container.clientHeight);
        this.canvas.width = size;
        this.canvas.height = size;
        this.scaleFactor = size / gameConfig.canvas.width;

        // 判断是否需要使用移动端参数
        this.isMobile = size < 480;

        // 根据屏幕大小调整物理参数
        if (this.isMobile) {
            this.physics = {
                gravity: gameConfig.physics.mobile.gravity,
                maxFallSpeed: gameConfig.physics.mobile.maxFallSpeed,
                spawnInterval: gameConfig.physics.mobile.spawnInterval
            };
        } else {
            this.physics = {
                gravity: gameConfig.physics.gravity,
                maxFallSpeed: gameConfig.physics.maxFallSpeed,
                spawnInterval: gameConfig.physics.spawnInterval
            };
        }
    }

    initGame() {
        // 游戏状态
        this.isPlaying = false;
        this.score = 0;
        this.level = 1;
        this.combo = 0;
        this.lastCatchTime = 0;

        // 游戏对象
        this.bowl = new Bowl(this.canvas, gameConfig.bowl);
        this.tangYuans = [];

        // 特效状态
        this.activeEffects = {
            double_score: false,
            slow_motion: false
        };

        // 生成器状态
        this.lastSpawnTime = 0;
        this.spawnInterval = this.physics.spawnInterval;

        // 更新界面
        this.updateScore();
        this.updateLevel();
    }

    bindEvents() {
        // 键盘控制
        document.addEventListener('keydown', (e) => {
            if (!this.isPlaying) return;
            switch (e.key) {
                case 'ArrowLeft':
                    this.bowl.setDirection(-1);
                    break;
                case 'ArrowRight':
                    this.bowl.setDirection(1);
                    break;
            }
        });

        document.addEventListener('keyup', (e) => {
            if (!this.isPlaying) return;
            if ((e.key === 'ArrowLeft' && this.bowl.direction === -1) ||
                (e.key === 'ArrowRight' && this.bowl.direction === 1)) {
                this.bowl.setDirection(0);
            }
        });

        // 触摸控制
        this.canvas.addEventListener('touchstart', (e) => {
            if (!this.isPlaying) return;
            const touch = e.touches[0];
            const rect = this.canvas.getBoundingClientRect();
            const x = touch.clientX - rect.left;

            // 将画布分为左右两半
            if (x < rect.width / 2) {
                this.bowl.setDirection(-1);
            } else {
                this.bowl.setDirection(1);
            }

            // 阻止默认行为（如滚动）
            e.preventDefault();
        });

        this.canvas.addEventListener('touchend', () => {
            if (!this.isPlaying) return;
            this.bowl.setDirection(0);
        });

        this.canvas.addEventListener('touchcancel', () => {
            if (!this.isPlaying) return;
            this.bowl.setDirection(0);
        });

        // 开始游戏
        document.getElementById('startGame').addEventListener('click', () => {
            this.startGame();
        });

        // 重置游戏
        document.getElementById('resetGame').addEventListener('click', () => {
            this.resetGame();
        });

        // 窗口大小改变
        window.addEventListener('resize', () => {
            this.initCanvas();
        });
    }

    startGame() {
        // 确保之前的游戏状态被清理
        if (this.isPlaying) {
            this.resetGame();
        }

        this.isPlaying = true;
        document.getElementById('startGame').disabled = true;
        this.startGameLoop();
    }

    resetGame() {
        // 停止游戏
        this.isPlaying = false;

        // 清理动画管理器中的所有动画
        animationManager.stop();

        // 重置游戏状态
        this.score = 0;
        this.level = 1;
        this.combo = 0;
        this.lastCatchTime = 0;
        this.lastSpawnTime = 0;
        this.spawnInterval = this.physics.spawnInterval;

        // 重置特效状态
        this.activeEffects = {
            double_score: false,
            slow_motion: false
        };

        // 清空汤圆数组
        this.tangYuans = [];

        // 重置碗的状态
        this.bowl = new Bowl(this.canvas, gameConfig.bowl);

        // 更新界面显示
        this.updateScore();
        this.updateLevel();
        this.updateCombo();
        this.updateEffects();

        // 重置按钮状态
        document.getElementById('startGame').disabled = false;

        // 清空画布
        this.clearCanvas();
    }

    spawnTangYuan() {
        const now = Date.now();
        if (now - this.lastSpawnTime < this.spawnInterval) return;

        // 随机选择馅料
        const fillings = Object.keys(gameConfig.fillings);
        const filling = fillings[Math.floor(Math.random() * fillings.length)];

        // 决定是否生成特殊汤圆
        const isSpecial = Math.random() < gameConfig.fillings[filling].probability;

        // 随机生成位置
        const x = Math.random() * (this.canvas.width - 60) + 30;

        // 创建汤圆，传入物理参数
        const tangYuan = new TangYuan(x, filling, isSpecial, {
            gravity: this.physics.gravity,
            maxFallSpeed: this.physics.maxFallSpeed
        });
        this.tangYuans.push(tangYuan);

        this.lastSpawnTime = now;
    }

    updatePhysics(deltaTime = 16) {
        // 更新碗的位置
        this.bowl.update();

        // 更新所有汤圆
        for (let i = this.tangYuans.length - 1; i >= 0; i--) {
            const tangYuan = this.tangYuans[i];

            // 应用减速效果
            const slowMotion = this.activeEffects.slow_motion ? 0.5 : 1;
            // 使用deltaTime来保证动画速度的一致性
            tangYuan.update(slowMotion, deltaTime / 16);

            // 检查碰撞
            if (!tangYuan.landed && tangYuan.checkBowlCollision(this.bowl)) {
                this.handleCatch(tangYuan);
                this.tangYuans.splice(i, 1);
                continue;
            }

            // 检查是否落出屏幕
            if (tangYuan.y > this.canvas.height + tangYuan.size) {
                this.tangYuans.splice(i, 1);
                this.combo = 0;
                this.updateCombo();
            }
        }
    }

    handleCatch(tangYuan) {
        // 计算连击
        const now = Date.now();
        if (now - this.lastCatchTime < gameConfig.combo.timeWindow) {
            this.combo++;
        } else {
            this.combo = 1;
        }
        this.lastCatchTime = now;
        this.updateCombo();

        // 计算分数
        let multiplier = 1;
        for (const [comboCount, multi] of Object.entries(gameConfig.combo.multiplier)) {
            if (this.combo >= parseInt(comboCount)) {
                multiplier = multi;
            }
        }

        // 双倍分数效果
        if (this.activeEffects.double_score) {
            multiplier *= 2;
        }

        // 更新分数
        tangYuan.setComboMultiplier(multiplier);
        this.score += tangYuan.getScore();
        this.updateScore();

        // 检查升级
        this.checkLevelUp();

        // 处理特殊效果
        if (tangYuan.isSpecial) {
            this.activateEffect(tangYuan.effectType);
        }
    }

    activateEffect(effectType) {
        switch (effectType) {
            case 'double_score':
                this.activeEffects.double_score = true;
                setTimeout(() => {
                    this.activeEffects.double_score = false;
                    this.updateEffects();
                }, gameConfig.fillings['black-sesame'].effectDuration);
                break;
            case 'enlarge_bowl':
                this.bowl.enlarge();
                setTimeout(() => {
                    this.bowl.resetSize();
                }, gameConfig.fillings['peanut'].effectDuration);
                break;
            case 'slow_motion':
                this.activeEffects.slow_motion = true;
                setTimeout(() => {
                    this.activeEffects.slow_motion = false;
                    this.updateEffects();
                }, gameConfig.fillings['red-bean'].effectDuration);
                break;
            case 'clear_all':
                this.tangYuans = [];
                break;
        }
        this.updateEffects();
    }

    checkLevelUp() {
        const newLevel = Math.floor(this.score / gameConfig.levels.scoreToLevelUp) + 1;
        if (newLevel > this.level && newLevel <= gameConfig.levels.maxLevel) {
            this.level = newLevel;
            this.updateLevel();
            // 根据是否是移动端调整生成间隔
            this.spawnInterval *= this.isMobile ?
                gameConfig.levels.spawnRateIncrease * 1.1 : // 移动端降低难度增加速度
                gameConfig.levels.spawnRateIncrease;
        }
    }

    updateScore() {
        document.querySelector('.score').textContent = this.score;
    }

    updateLevel() {
        document.querySelector('.level').textContent = this.level;
    }

    updateCombo() {
        document.querySelector('.combo').textContent = this.combo;

        // 显示连击动画
        if (this.combo > 1) {
            const comboDisplay = document.querySelector('.combo-display');
            comboDisplay.textContent = `${this.combo} 连击！`;
            comboDisplay.classList.add('show');

            setTimeout(() => {
                comboDisplay.classList.remove('show');
            }, 1000);
        }
    }

    updateEffects() {
        const indicators = document.querySelectorAll('.effect-indicator');
        indicators.forEach(indicator => {
            const effect = indicator.dataset.effect;
            if (this.activeEffects[effect]) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    render() {
        this.clearCanvas();

        // 绘制碗
        this.bowl.draw();

        // 绘制所有汤圆
        this.tangYuans.forEach(tangYuan => {
            tangYuan.draw(this.ctx);
        });
    }

    startGameLoop() {
        // 创建新的游戏循环
        const gameLoop = {
            update: (deltaTime) => {
                if (!this.isPlaying) return;

                // 使用deltaTime来确保动画速度的一致性
                this.spawnTangYuan();
                this.updatePhysics(deltaTime);
                this.render();
            }
        };

        animationManager.addAnimation(gameLoop);
    }
}

// 当DOM加载完成后初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    new TangYuanGame();
}); 