export class NeuralNetwork {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.nodes = [];
        this.connections = [];
        this.activeNodes = new Set();
        this.activePaths = new Set();

        this.setupCanvas();
        this.createNetwork();
        this.animate();
    }

    setupCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * window.devicePixelRatio;
        this.canvas.height = rect.height * window.devicePixelRatio;
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    createNetwork() {
        // 创建三层神经网络
        const layers = [4, 6, 4]; // 输入层、隐藏层、输出层的节点数
        let xOffset = this.canvas.width / (layers.length + 1);

        // 创建节点
        layers.forEach((nodeCount, layerIndex) => {
            const yStep = this.canvas.height / (nodeCount + 1);
            for (let i = 0; i < nodeCount; i++) {
                this.nodes.push({
                    x: xOffset * (layerIndex + 1),
                    y: yStep * (i + 1),
                    radius: 4,
                    layer: layerIndex,
                    activation: 0
                });
            }
        });

        // 创建连接
        for (let i = 0; i < layers.length - 1; i++) {
            const currentLayer = this.nodes.filter(node => node.layer === i);
            const nextLayer = this.nodes.filter(node => node.layer === i + 1);

            currentLayer.forEach(startNode => {
                nextLayer.forEach(endNode => {
                    this.connections.push({
                        start: startNode,
                        end: endNode,
                        weight: Math.random(),
                        signal: 0
                    });
                });
            });
        }
    }

    activateRandomPath() {
        // 随机激活一条从输入到输出的路径
        const inputNodes = this.nodes.filter(node => node.layer === 0);
        const startNode = inputNodes[Math.floor(Math.random() * inputNodes.length)];

        let currentNode = startNode;
        this.activeNodes.add(currentNode);

        while (currentNode.layer < 2) {
            const possibleConnections = this.connections.filter(conn =>
                conn.start === currentNode && !this.activePaths.has(conn));

            if (possibleConnections.length === 0) break;

            const connection = possibleConnections[
                Math.floor(Math.random() * possibleConnections.length)
            ];

            this.activePaths.add(connection);
            currentNode = connection.end;
            this.activeNodes.add(currentNode);
        }

        // 5秒后清除路径
        setTimeout(() => {
            this.activeNodes.delete(startNode);
            this.activePaths.clear();
        }, 5000);
    }

    drawNetwork() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // 绘制连接
        this.connections.forEach(conn => {
            const isActive = this.activePaths.has(conn);
            this.ctx.beginPath();
            this.ctx.moveTo(conn.start.x, conn.start.y);
            this.ctx.lineTo(conn.end.x, conn.end.y);
            this.ctx.strokeStyle = isActive
                ? `rgba(100, 255, 218, ${0.8 + Math.sin(Date.now() * 0.005) * 0.2})`
                : 'rgba(100, 255, 218, 0.1)';
            this.ctx.lineWidth = isActive ? 2 : 1;
            this.ctx.stroke();
        });

        // 绘制节点
        this.nodes.forEach(node => {
            const isActive = this.activeNodes.has(node);

            // 绘制光晕
            if (isActive) {
                const gradient = this.ctx.createRadialGradient(
                    node.x, node.y, 0,
                    node.x, node.y, 20
                );
                gradient.addColorStop(0, 'rgba(100, 255, 218, 0.3)');
                gradient.addColorStop(1, 'rgba(100, 255, 218, 0)');
                this.ctx.fillStyle = gradient;
                this.ctx.beginPath();
                this.ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
                this.ctx.fill();
            }

            // 绘制节点
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = isActive
                ? 'rgba(100, 255, 218, 1)'
                : 'rgba(100, 255, 218, 0.3)';
            this.ctx.fill();
        });
    }

    animate() {
        this.drawNetwork();

        // 随机激活新路径
        if (Math.random() < 0.02) {
            this.activateRandomPath();
        }

        requestAnimationFrame(() => this.animate());
    }
} 