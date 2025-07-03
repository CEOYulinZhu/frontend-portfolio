/**
 * AI科普区域的神经网络效果
 */
function createNeuralNetwork() {
    const container = document.querySelector('.neural-nodes');
    if (!container) return;

    const nodeCount = 30;
    const connectionCount = 25;

    // 创建节点
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'node';
        node.style.left = `${Math.random() * 140 - 20}%`;
        node.style.top = `${Math.random() * 140 - 20}%`;
        node.style.animationDelay = `${Math.random() * 3}s`;
        container.appendChild(node);
    }

    // 创建连接线
    for (let i = 0; i < connectionCount; i++) {
        const connection = document.createElement('div');
        connection.className = 'neural-connection';
        connection.style.left = `${Math.random() * 140 - 20}%`;
        connection.style.top = `${Math.random() * 140 - 20}%`;
        connection.style.transform = `rotate(${Math.random() * 360}deg)`;
        connection.style.animationDelay = `${Math.random() * 4}s`;
        container.appendChild(connection);
    }
}

// 页面加载完成后初始化神经网络效果
document.addEventListener('DOMContentLoaded', createNeuralNetwork); 