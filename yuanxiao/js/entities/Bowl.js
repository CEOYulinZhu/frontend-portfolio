export class Bowl {
    constructor(canvas, config) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = config.width;
        this.height = config.height;
        this.color = config.color;
        this.strokeColor = config.strokeColor;
        this.strokeWidth = config.strokeWidth;
        this.speed = config.moveSpeed;

        // 位置初始化在底部中间
        this.x = canvas.width / 2;
        this.y = canvas.height - this.height - 10;

        // 移动状态
        this.direction = 0; // -1 左, 0 静止, 1 右

        // 特效状态
        this.enlarged = false;
        this.enlargeTimer = null;
        this.originalWidth = this.width;
    }

    update() {
        // 处理移动
        this.x += this.direction * this.speed;

        // 边界检查
        if (this.x - this.width / 2 < 0) {
            this.x = this.width / 2;
        }
        if (this.x + this.width / 2 > this.canvas.width) {
            this.x = this.canvas.width - this.width / 2;
        }
    }

    draw() {
        this.ctx.save();

        // 绘制碗的主体
        this.ctx.beginPath();
        this.ctx.ellipse(
            this.x,
            this.y,
            this.width / 2,
            this.height / 2,
            0,
            0,
            Math.PI,
            true
        );

        // 填充
        this.ctx.fillStyle = this.color;
        this.ctx.fill();

        // 描边
        this.ctx.strokeStyle = this.strokeColor;
        this.ctx.lineWidth = this.strokeWidth;
        this.ctx.stroke();

        // 添加装饰
        this.drawDecoration();

        this.ctx.restore();
    }

    drawDecoration() {
        // 添加碗的花纹装饰
        this.ctx.beginPath();
        this.ctx.ellipse(
            this.x,
            this.y - 5,
            this.width / 2.2,
            this.height / 2.5,
            0,
            0,
            Math.PI,
            true
        );
        this.ctx.strokeStyle = this.strokeColor;
        this.ctx.lineWidth = 1;
        this.ctx.stroke();
    }

    setDirection(direction) {
        this.direction = direction;
    }

    enlarge() {
        if (this.enlargeTimer) {
            clearTimeout(this.enlargeTimer);
        }
        this.width = this.originalWidth * 1.5;
        this.enlarged = true;
    }

    resetSize() {
        this.width = this.originalWidth;
        this.enlarged = false;
    }

    checkCollision(x, y, radius) {
        // 检查汤圆是否落入碗中
        const bowlLeft = this.x - this.width / 2;
        const bowlRight = this.x + this.width / 2;
        const bowlTop = this.y - this.height / 2;

        return (
            x >= bowlLeft &&
            x <= bowlRight &&
            y + radius >= bowlTop &&
            y + radius <= this.y
        );
    }
} 