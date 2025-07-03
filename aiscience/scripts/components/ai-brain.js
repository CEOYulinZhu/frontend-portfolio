export class AIBrain {
    constructor(container) {
        this.container = container;
        this.nodes = [];
        this.connections = [];
        this.init();
    }

    init() {
        // 创建节点
        for (let i = 0; i < 20; i++) {
            const node = document.createElement('div');
            node.className = 'neural-node';
            node.style.left = `${Math.random() * 100}%`;
            node.style.top = `${Math.random() * 100}%`;
            node.style.animationDelay = `${Math.random() * 2}s`;
            this.container.appendChild(node);
            this.nodes.push(node);
        }

        // 创建连接
        for (let i = 0; i < 15; i++) {
            const connection = document.createElement('div');
            connection.className = 'neural-connection';
            connection.style.left = `${Math.random() * 100}%`;
            connection.style.top = `${Math.random() * 100}%`;
            connection.style.width = `${50 + Math.random() * 100}px`;
            connection.style.transform = `rotate(${Math.random() * 360}deg)`;
            connection.style.animationDelay = `${Math.random() * 2}s`;
            this.container.appendChild(connection);
            this.connections.push(connection);
        }
    }
} 