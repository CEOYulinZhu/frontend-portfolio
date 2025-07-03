// 全球女性时刻数据
const timeData = [
    {
        time: "00:00",
        zone: "UTC+0",
        location: "伦敦，英国",
        story: "急诊室护士Sarah正在夜班，她的专业和耐心为无数生命带来希望。"
    },
    {
        time: "03:00",
        zone: "UTC+3",
        location: "莫斯科，俄罗斯",
        story: "天文学家Elena正在观测星空，记录宇宙的奥秘。"
    },
    {
        time: "06:00",
        zone: "UTC+6",
        location: "新德里，印度",
        story: "瑜伽导师Priya正在准备晨课，传播身心健康的理念。"
    },
    {
        time: "08:00",
        zone: "UTC+8",
        location: "北京，中国",
        story: "软件工程师小林正在编写代码，开发改变世界的应用。"
    },
    {
        time: "09:00",
        zone: "UTC+9",
        location: "东京，日本",
        story: "建筑师Yuki正在设计环保建筑，为城市注入绿色活力。"
    },
    {
        time: "11:00",
        zone: "UTC+11",
        location: "悉尼，澳大利亚",
        story: "海洋生物学家Emma正在研究珊瑚保护，守护海洋生态。"
    },
    {
        time: "14:00",
        zone: "UTC-10",
        location: "檀香山，美国",
        story: "环保活动家Leilani正在组织海滩清理活动。"
    },
    {
        time: "16:00",
        zone: "UTC-8",
        location: "旧金山，美国",
        story: "创业者Jessica正在召开团队会议，引领科技创新。"
    },
    {
        time: "19:00",
        zone: "UTC-5",
        location: "纽约，美国",
        story: "指挥家Maria正在为晚上的交响乐演出做最后准备。"
    },
    {
        time: "21:00",
        zone: "UTC-3",
        location: "圣保罗，巴西",
        story: "记者Ana正在编辑一篇关于女性权益的深度报道。"
    }
];

// 时区数据
const timeZoneData = [
    { zone: "UTC-8", location: "洛杉矶", story: "硅谷女性工程师正在进行新一轮的技术创新" },
    { zone: "UTC-5", location: "纽约", story: "华尔街女性分析师正在进行市场预测" },
    { zone: "UTC+0", location: "伦敦", story: "金融城女性主管正在主持晨会" },
    { zone: "UTC+1", location: "巴黎", story: "时尚设计师正在准备新季发布会" },
    { zone: "UTC+3", location: "莫斯科", story: "女性科学家正在进行空间站研究" },
    { zone: "UTC+5:30", location: "新德里", story: "女性医生正在进行远程医疗咨询" },
    { zone: "UTC+8", location: "北京", story: "女企业家正在召开国际视频会议" },
    { zone: "UTC+9", location: "东京", story: "女性游戏开发者正在完善新作品" },
    { zone: "UTC+10", location: "悉尼", story: "女性环保学家正在进行海洋生态考察" },
    { zone: "UTC+12", location: "奥克兰", story: "女性教育工作者正在开展在线课程" }
];

class DigitalClock {
    constructor() {
        this.timeDisplay = document.querySelector('.time');
        this.secondsDisplay = document.querySelector('.seconds');
        this.zoneDisplay = document.querySelector('.current-zone');
        this.detailCard = document.querySelector('.detail-card');
        this.currentZoneIndex = 6; // 默认从北京时间开始
        this.isPlaying = true;
        this.clockInterval = null;

        // 初始化时立即更新显示
        this.updateTimeZoneInfo();
        this.updateClock();

        this.initControls();
    }

    initControls() {
        const prevBtn = document.getElementById('prevHour');
        const nextBtn = document.getElementById('nextHour');
        const playBtn = document.getElementById('togglePlay');

        prevBtn.addEventListener('click', () => this.jumpToHour(-1));
        nextBtn.addEventListener('click', () => this.jumpToHour(1));
        playBtn.addEventListener('click', () => {
            this.togglePlay();
            playBtn.innerHTML = this.isPlaying ?
                '<i class="fas fa-pause"></i>' :
                '<i class="fas fa-play"></i>';
        });
    }

    togglePlay() {
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
            this.startClock();
        } else {
            if (this.clockInterval) {
                clearInterval(this.clockInterval);
                this.clockInterval = null;
            }
        }
    }

    jumpToHour(direction) {
        // 暂停当前时钟
        const wasPlaying = this.isPlaying;
        if (this.clockInterval) {
            clearInterval(this.clockInterval);
            this.clockInterval = null;
        }

        // 更新时区索引
        this.currentZoneIndex = (this.currentZoneIndex + direction + timeZoneData.length) % timeZoneData.length;

        // 立即更新显示
        this.updateTimeZoneInfo();
        this.updateClock();

        // 如果之前是播放状态，立即恢复播放
        if (wasPlaying) {
            this.isPlaying = true;
            document.getElementById('togglePlay').innerHTML = '<i class="fas fa-pause"></i>';
            this.startClock();
        } else {
            this.isPlaying = false;
            document.getElementById('togglePlay').innerHTML = '<i class="fas fa-play"></i>';
        }

        // 添加动画效果
        if (this.detailCard) {
            this.detailCard.style.animation = 'none';
            this.detailCard.offsetHeight; // 触发重排
            this.detailCard.style.animation = 'fadeIn 0.3s ease forwards';
        }
    }

    getTimeForZone(zoneStr) {
        // 获取当前UTC时间
        const now = new Date();
        const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);

        // 解析时区字符串
        const match = zoneStr.match(/UTC([+-])(\d+)(?::(\d+))?/);
        if (!match) return new Date(utcTime);

        const sign = match[1] === '+' ? 1 : -1;
        const hours = parseInt(match[2]);
        const minutes = match[3] ? parseInt(match[3]) : 0;

        // 计算目标时区的时间
        const targetTime = utcTime + (sign * (hours * 3600000 + minutes * 60000));
        return new Date(targetTime);
    }

    updateClock() {
        if (!this.isPlaying && this.clockInterval) {
            clearInterval(this.clockInterval);
            this.clockInterval = null;
            return;
        }

        const currentZone = timeZoneData[this.currentZoneIndex];
        const time = this.getTimeForZone(currentZone.zone);

        // 更新时间显示
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');

        this.timeDisplay.textContent = `${hours}:${minutes}`;
        this.secondsDisplay.textContent = seconds;
    }

    updateTimeZoneInfo() {
        const currentZone = timeZoneData[this.currentZoneIndex];
        this.zoneDisplay.textContent = currentZone.zone;

        if (this.detailCard) {
            this.detailCard.innerHTML = `
                <div class="detail-time">${currentZone.zone}</div>
                <div class="detail-location">${currentZone.location}</div>
                <div class="detail-story">${currentZone.story}</div>
            `;
        }
    }

    startClock() {
        // 清除现有的interval
        if (this.clockInterval) {
            clearInterval(this.clockInterval);
        }

        // 立即更新一次
        this.updateClock();

        // 设置新的interval
        this.clockInterval = setInterval(() => this.updateClock(), 1000);
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    const clock = new DigitalClock();
    clock.startClock();
});
