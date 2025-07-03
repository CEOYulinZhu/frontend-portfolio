export class SelfDrivingDemo {
    constructor(container) {
        this.container = container;
        this.car = container.querySelector('.car-model');
        this.environment = container.querySelector('.environment-objects');
        this.sensorData = container.querySelector('.sensor-data');
        this.init();
    }

    init() {
        this.createEnvironment();
        this.initSensors();
        this.startSimulation();
    }

    createEnvironment() {
        // 创建道路场景
        const objects = ['car', 'pedestrian', 'obstacle'];
        objects.forEach(type => {
            const object = document.createElement('div');
            object.className = `environment-object ${type}`;
            this.environment.appendChild(object);
        });
    }

    initSensors() {
        // 初始化传感器显示
        const sensors = ['distance', 'camera', 'lidar'];
        sensors.forEach(type => {
            const sensor = document.createElement('div');
            sensor.className = `sensor ${type}`;
            this.car.querySelector('.sensor-indicators').appendChild(sensor);
        });
    }

    startSimulation() {
        // 开始自动驾驶模拟
        setInterval(() => {
            this.updateSensorData();
            this.updateCarBehavior();
        }, 100);
    }

    updateSensorData() {
        // 更新传感器数据显示
        const dataItems = this.sensorData.querySelectorAll('.data-item');
        dataItems.forEach(item => {
            item.innerHTML = `${item.textContent}: ${Math.random().toFixed(2)}m`;
        });
    }

    updateCarBehavior() {
        // 更新车辆行为
        this.car.style.transform = `translateX(${Math.sin(Date.now() / 1000) * 20}px)`;
    }
} 