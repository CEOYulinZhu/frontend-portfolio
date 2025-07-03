export const gameConfig = {
    canvas: {
        width: 600,
        height: 600
    },
    bowl: {
        width: 120,
        height: 60,
        color: '#fff',
        strokeColor: '#e74c3c',
        strokeWidth: 3,
        moveSpeed: 8,
        levels: [
            { speed: 8, count: 1 },
            { speed: 9, count: 2 },
            { speed: 10, count: 2 },
            { speed: 11, count: 3 },
            { speed: 12, count: 3 }
        ]
    },
    fillings: {
        'black-sesame': {
            name: '黑芝麻',
            color: '#2c3e50',
            score: 10,
            effect: 'double_score',
            effectDuration: 30000, // 30秒
            probability: 0.15
        },
        'peanut': {
            name: '花生',
            color: '#d35400',
            score: 8,
            effect: 'enlarge_bowl',
            effectDuration: 15000, // 15秒
            probability: 0.2
        },
        'red-bean': {
            name: '红豆',
            color: '#c0392b',
            score: 12,
            effect: 'slow_motion',
            effectDuration: 20000, // 20秒
            probability: 0.18
        },
        'lotus': {
            name: '莲蓉',
            color: '#f39c12',
            score: 15,
            effect: 'clear_all',
            effectDuration: 0, // 立即生效
            probability: 0.1
        }
    },
    physics: {
        gravity: 0.2,
        maxFallSpeed: 8,
        spawnInterval: 2000, // 生成新汤圆的间隔（毫秒）
        initialDropHeight: -50, // 汤圆生成的初始高度
        mobile: {
            gravity: 0.15,    // 降低重力
            maxFallSpeed: 6,  // 降低最大下落速度
            spawnInterval: 2500  // 增加生成间隔
        }
    },
    tangyuan: {
        minSize: 30,
        maxSize: 40,
        color: '#fff',
        strokeColor: '#e74c3c',
        strokeWidth: 2
    },
    levels: {
        scoreToLevelUp: 100, // 每100分升一级
        maxLevel: 5,
        speedIncrease: 1.2, // 每级速度增加20%
        spawnRateIncrease: 0.8 // 每级生成间隔减少20%
    },
    combo: {
        timeWindow: 3000, // 连击判定时间窗口（毫秒）
        multiplier: {
            3: 1.5, // 3连击 1.5倍分数
            5: 2, // 5连击 2倍分数
            8: 3, // 8连击 3倍分数
            10: 4 // 10连击 4倍分数
        }
    }
}; 