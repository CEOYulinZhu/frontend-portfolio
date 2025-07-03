import { helpers } from '../utils/helpers.js';

export const initScroll = () => {
    const sections = document.querySelectorAll('.content-section');
    const journeyPoints = document.querySelectorAll('.journey-point');
    const journeyTrack = document.querySelector('.journey-track');

    // 更新导航点状态和连接线
    function updateNavigation() {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const point = journeyPoints[index];

            // 检查section是否在视口中间
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                // 移除所有active类
                journeyPoints.forEach(p => p.classList.remove('active'));
                // 为当前点添加active类
                point.classList.add('active');

                // 根据当前section的ID更新连接线高度
                const sectionId = section.id;
                switch (sectionId) {
                    case 'section1':
                        journeyTrack.style.setProperty('--connection-height', '25%');
                        break;
                    case 'section2':
                        journeyTrack.style.setProperty('--connection-height', '50%');
                        break;
                    case 'section6': // AI挑战
                        journeyTrack.style.setProperty('--connection-height', '75%');
                        break;
                    case 'section7': // 未来展望
                        journeyTrack.style.setProperty('--connection-height', '100%');
                        break;
                }
            }
        });
    }

    function updateJourneyTrack() {
        const sections = document.querySelectorAll('.content-section');
        const track = document.querySelector('.journey-track');

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                track.setAttribute('data-active', index + 1);
            }
        });
    }

    // 监听滚动事件
    window.addEventListener('scroll', () => {
        updateNavigation();
        updateJourneyTrack();
    });

    // 初始化
    document.addEventListener('DOMContentLoaded', () => {
        updateNavigation();
        updateJourneyTrack();
    });

    // 点击导航点时的处理
    document.querySelectorAll('.journey-point').forEach((point, index) => {
        point.addEventListener('click', () => {
            const sections = document.querySelectorAll('.content-section');
            const targetSection = sections[index];
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
}; 