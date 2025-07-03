import { animationManager, Easing } from './utils/animator.js';

class LanternEffect {
    constructor() {
        this.container = document.getElementById('lanternContainer');
        this.lanterns = [];
        this.characters = ['福', '喜', '春', '圆', '安', '乐', '吉', '祥', '瑞', '和']; // 灯笼上的文字
        this.moonArea = {
            right: 250,  // 月亮区域右边界（距离右侧）
            top: 80,    // 月亮区域顶部（距离顶部）
            bottom: 280, // 月亮区域底部（距离顶部）
            width: 250   // 月亮区域宽度
        };
        this.navbarHeight = 80; // 导航栏高度
        this.init();
        this.bindEvents();
    }

    init() {
        // 根据屏幕宽度创建不同数量的灯笼
        const count = window.innerWidth > 768 ? 20 : 10;  // 减少灯笼总数

        // 定义灯笼的可能位置区域
        const positions = this.generateLanternPositions(count);

        // 随机打乱字符数组
        const shuffledChars = [...this.characters].sort(() => Math.random() - 0.5);

        // 创建灯笼
        positions.forEach((pos, index) => {
            this.createLantern({
                x: pos.x,
                y: pos.y,
                size: window.innerWidth > 768 ?
                    (35 + Math.random() * 15) : // 电脑端灯笼尺寸范围：35-50px
                    (28 + Math.random() * 12),  // 移动端灯笼尺寸范围：28-40px
                character: shuffledChars[index % shuffledChars.length]
            });
        });
    }

    generateLanternPositions(count) {
        const positions = [];
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const isMobile = screenWidth <= 768;

        // 计算灯笼实际尺寸（包括装饰和动画空间）
        const baseLanternSize = isMobile ? 30 : 35;
        const lanternFullHeight = {
            height: baseLanternSize * 1.4,
            decoration: baseLanternSize * 0.3,
            animation: 10,
            total: baseLanternSize * 1.4 + baseLanternSize * 0.3 + 10
        };

        // 优化安全边距
        const safeMargin = {
            top: this.navbarHeight + (isMobile ? 20 : 30),
            bottom: lanternFullHeight.total + (isMobile ? 20 : 30),
            left: isMobile ? 15 : 30,
            right: isMobile ? 15 : 30
        };

        // 重新设计区域划分
        const usableHeight = screenHeight - safeMargin.top - safeMargin.bottom;
        const usableWidth = screenWidth - safeMargin.left - safeMargin.right;

        // 将空间划分为网格
        const gridRows = isMobile ? 6 : 8;
        const gridCols = isMobile ? 4 : 6;
        const cellHeight = usableHeight / gridRows;
        const cellWidth = usableWidth / gridCols;

        // 为每个网格分配灯笼数量
        const areas = [];
        for (let row = 0; row < gridRows; row++) {
            for (let col = 0; col < gridCols; col++) {
                // 根据位置调整每个网格的灯笼数量
                let maxLanterns;
                if (isMobile) {
                    // 移动端网格分配
                    if (row === 0 || row === gridRows - 1) {
                        maxLanterns = 1; // 顶部和底部行少一些
                    } else if (row === 1 || row === gridRows - 2) {
                        maxLanterns = 2; // 次顶部和次底部行适中
                    } else {
                        maxLanterns = 2; // 中间区域
                    }
                } else {
                    // 电脑端网格分配
                    if (row === 0 || row === gridRows - 1) {
                        maxLanterns = 2; // 顶部和底部行
                    } else if (row === 1 || row === gridRows - 2) {
                        maxLanterns = 2; // 次顶部和次底部行
                    } else {
                        maxLanterns = 3; // 中间区域
                    }
                }

                areas.push({
                    x: safeMargin.left + col * cellWidth,
                    y: safeMargin.top + row * cellHeight,
                    width: cellWidth,
                    height: cellHeight - lanternFullHeight.total,
                    maxLanterns: maxLanterns
                });
            }
        }

        // 在每个网格中放置灯笼
        areas.forEach((area, areaIndex) => {
            let areaAttempts = 0;
            const maxAreaAttempts = 60;
            let lanternsInArea = 0;

            while (areaAttempts < maxAreaAttempts && lanternsInArea < area.maxLanterns) {
                if (positions.length >= count) break;

                let x, y;
                let attempts = 0;
                const maxAttempts = 40;

                do {
                    x = area.x + Math.random() * area.width;
                    y = area.y + Math.random() * area.height;
                    attempts++;
                } while (
                    attempts < maxAttempts &&
                    (this.isInMoonArea(x, y) || this.isTooCloseToOthers(x, y, positions))
                );

                if (attempts < maxAttempts && !this.isInMoonArea(x, y)) {
                    if (y + lanternFullHeight.total <= screenHeight) {
                        positions.push({ x, y });
                        lanternsInArea++;
                    }
                }

                areaAttempts++;
            }
        });

        return positions;
    }

    isInMoonArea(x, y) {
        const screenWidth = window.innerWidth;
        const moonX = screenWidth - this.moonArea.right;
        const expandedArea = 50; // 扩大月亮区域的安全距离
        return (
            x > moonX - this.moonArea.width - expandedArea &&
            x < moonX + this.moonArea.width &&
            y > this.moonArea.top - expandedArea &&
            y < this.moonArea.bottom + expandedArea
        );
    }

    isTooCloseToOthers(x, y, positions, minDistance = window.innerWidth > 768 ? 90 : 50) { // 增加最小间距
        return positions.some(pos => {
            const dx = x - pos.x;
            const dy = y - pos.y;
            return Math.sqrt(dx * dx + dy * dy) < minDistance;
        });
    }

    createLantern(options) {
        const lantern = document.createElement('div');
        lantern.className = 'lantern';

        // 设置灯笼样式
        lantern.style.left = `${options.x}px`;
        lantern.style.top = `${options.y}px`;
        lantern.style.width = `${options.size}px`;
        lantern.style.height = `${options.size * 1.4}px`;
        lantern.style.setProperty('--character', `"${options.character}"`);

        // 添加灯笼装饰
        const decoration = document.createElement('div');
        decoration.className = 'lantern-decoration';
        lantern.appendChild(decoration);

        // 添加灯笼光晕
        const glow = document.createElement('div');
        glow.className = 'lantern-glow';
        lantern.appendChild(glow);

        // 设置文字
        lantern.setAttribute('data-character', options.character);

        this.container.appendChild(lantern);
        this.lanterns.push(lantern);

        // 为每个灯笼创建独特的动画
        this.createLanternAnimation(lantern);
    }

    createLanternAnimation(lantern) {
        const baseDelay = Math.random() * 2000;
        const swingDuration = 3000 + Math.random() * 1000;

        // 摇摆动画
        const swingAnimation = {
            update: (deltaTime) => {
                const time = (performance.now() + baseDelay) % swingDuration;
                const progress = time / swingDuration;
                const rotation = Math.sin(progress * Math.PI * 2) * 3;
                const translateY = Math.sin(progress * Math.PI * 2) * 10;
                lantern.style.transform = `rotate(${rotation}deg) translateY(${translateY}px)`;
            }
        };

        animationManager.addAnimation(swingAnimation);
    }

    bindEvents() {
        // 窗口大小改变时重新初始化灯笼
        window.addEventListener('resize', () => {
            this.container.innerHTML = '';
            this.lanterns = [];
            this.init();
        });

        // 鼠标移动时添加交互效果
        let timeout;
        this.container.addEventListener('mousemove', (e) => {
            clearTimeout(timeout);

            this.lanterns.forEach(lantern => {
                const rect = lantern.getBoundingClientRect();
                const lanternX = rect.left + rect.width / 2;
                const lanternY = rect.top + rect.height / 2;

                const dx = e.clientX - lanternX;
                const dy = e.clientY - lanternY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 200) {
                    const angle = Math.atan2(dy, dx);
                    const push = (200 - distance) / 10;
                    const scale = 1 + (200 - distance) / 1000;

                    lantern.style.transform = `translate(${Math.cos(angle) * push}px, ${Math.sin(angle) * push}px) scale(${scale})`;
                    lantern.style.transition = 'transform 0.3s ease-out';
                }
            });

            // 恢复原始动画
            timeout = setTimeout(() => {
                this.lanterns.forEach(lantern => {
                    lantern.style.transform = '';
                    lantern.style.transition = 'transform 1s ease-out';
                });
            }, 1000);
        });
    }
}

// 创建灯笼效果实例
document.addEventListener('DOMContentLoaded', () => {
    new LanternEffect();
}); 