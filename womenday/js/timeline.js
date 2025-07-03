// 时间线数据
const timelineData = [
    {
        "year": "1908",
        "title": "纽约女工大游行",
        "description": "15,000名女工走上纽约街头，抗议恶劣的工作条件，要求缩短工时、提高工资和获得选举权。这次游行成为国际妇女节的重要起源。",
        "icon": "fa-fist-raised",
        "expandedContent": "这次游行中，女工们高喊'面包与玫瑰'的口号，象征着对经济保障和生活品质的双重追求。游行引发了广泛的社会关注，为后来的劳工权益和女性权益运动奠定了基础。"
    },
    {
        "year": "1909",
        "title": "首个'全国妇女日'",
        "description": "美国社会党宣布2月28日为首个全国妇女日，以纪念1908年的女工罢工。这一天，数千名妇女在全美各地集会，要求政治权利和经济权利。",
        "icon": "fa-landmark",
        "expandedContent": "这次活动由社会活动家克拉拉·泽特金等人组织，她们的努力使妇女权益问题首次获得全国性的关注，为国际妇女节的确立铺平了道路。"
    },
    {
        year: "1910",
        title: "国际妇女节的确立",
        description: "在丹麦哥本哈根举行的国际社会主义妇女大会上，德国社会主义者克拉拉·泽特金提议设立国际妇女节，得到与会17个国家代表的一致赞同。",
        icon: "fa-globe-europe",
        expandedContent: "克拉拉·泽特金是国际妇女运动的先驱，她提出设立国际妇女节的目的是为了促进妇女权益，争取普选权。这一提议标志着妇女运动从国家层面提升到了国际层面。"
    },
    {
        year: "1911",
        title: "首个国际妇女节",
        description: "3月19日，奥地利、丹麦、德国和瑞士等国家超过100万人参加了首个国际妇女节庆祝活动，要求妇女获得工作权、受教育权、选举权和反对歧视。",
        icon: "fa-fire",
        expandedContent: "这次活动规模空前，不仅有妇女参加，还有许多男性支持者。人们举行游行、集会和演讲，表达对妇女权益的支持。这一天也成为了妇女争取平等权利的重要象征。"
    },
    {
        year: "1913-1914",
        title: "日期统一为3月8日",
        description: "在欧洲多国，妇女们举行和平集会，抗议第一次世界大战。这些活动大多选在3月8日前后举行，逐渐形成了固定的纪念日期。",
        icon: "fa-calendar-day",
        expandedContent: "在战争的阴影下，妇女们展现出强大的和平力量。她们的反战活动不仅是对战争的抗议，也是对妇女在社会中发挥积极作用的证明。这一时期的活动为3月8日成为固定的国际妇女节日期奠定了基础。"
    },
    {
        year: "1975",
        title: "联合国正式确认",
        description: "联合国开始庆祝国际妇女节，并在1977年通过决议，邀请所有会员国将3月8日定为'联合国妇女权利和国际和平日'。",
        icon: "fa-dove",
        expandedContent: "联合国的正式认可使国际妇女节获得了全球性的地位。这一决议强调了妇女权益与世界和平的密切关系，呼吁各国政府采取措施，消除对妇女的歧视，促进妇女全面参与社会发展。"
    },
    {
        year: "1995",
        title: "北京世界妇女大会",
        description: "第四次世界妇女大会在北京举行，189个国家代表通过了《北京宣言》和《行动纲领》，成为全球妇女权益发展的里程碑。",
        icon: "fa-balance-scale",
        expandedContent: "这次大会提出了'男女平等是人权'的理念，确定了12个关键领域的战略目标和行动措施。《北京行动纲领》至今仍是全球妇女权益工作的重要指导文件，对推动性别平等产生了深远影响。"
    },
    {
        year: "2017",
        title: "#MeToo运动",
        description: "这一全球性运动揭露了职场性骚扰和性侵犯问题，成为现代妇女运动的重要里程碑，推动了社会对性别平等问题的深入讨论。",
        icon: "fa-hashtag",
        expandedContent: "#MeToo运动始于社交媒体上的一个简单标签，却引发了全球范围内的强烈共鸣。数百万女性分享了自己的经历，打破了长期的沉默。这场运动不仅揭露了问题，还推动了法律和政策的改变，为创造更安全、更平等的环境做出了贡献。"
    },
    {
        year: "2020至今",
        title: "数字时代的妇女运动",
        description: "社交媒体和数字平台成为妇女权益倡导的重要工具，全球妇女运动呈现出更加多元、包容和互联的特点。",
        icon: "fa-users",
        expandedContent: "数字技术的发展使妇女运动突破了地域限制，形成了全球性的连接。女性可以通过网络平台分享经验、组织活动、发起倡议，这种新形式的活动使妇女运动更具影响力。同时，数字鸿沟也成为需要关注的新问题，确保所有女性都能平等地参与数字世界成为新的挑战。"
    }
];

// 初始化时间线
document.addEventListener('DOMContentLoaded', () => {
    initTimeline();
    checkTimelineItems();
    window.addEventListener('scroll', checkTimelineItems);
});

function initTimeline() {
    const container = document.querySelector('.timeline-container');
    if (!container) return;

    // 清空现有内容，保留中心线
    const centerLine = container.querySelector('.timeline-center-line');
    container.innerHTML = '';
    container.appendChild(centerLine);

    // 创建时间线项目
    timelineData.forEach((data, index) => {
        const item = createTimelineItem(data);
        container.appendChild(item);
    });

    // 添加点击事件监听
    addTimelineInteractions();
}

function createTimelineItem(data) {
    const item = document.createElement('div');
    item.className = 'timeline-item';

    item.innerHTML = `
        <div class="timeline-dot"></div>
        <i class="timeline-icon fas ${data.icon}"></i>
        <div class="timeline-content">
            <div class="timeline-year">${data.year}</div>
            <h3 class="timeline-title">${data.title}</h3>
            <p class="timeline-description">${data.description}</p>
            <div class="timeline-expanded-content" style="display: none; max-height: 0; overflow: hidden; transition: max-height 0.3s ease;">
                <hr style="margin: 1rem 0;">
                <p>${data.expandedContent}</p>
            </div>
        </div>
    `;

    return item;
}

function addTimelineInteractions() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            // 移除其他项的活跃状态
            timelineItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('active');
                    const expandedContent = i.querySelector('.timeline-expanded-content');
                    if (expandedContent) {
                        expandedContent.style.maxHeight = '0';
                        setTimeout(() => {
                            expandedContent.style.display = 'none';
                        }, 300);
                    }
                }
            });

            // 切换当前项的活跃状态
            item.classList.toggle('active');
            const expandedContent = item.querySelector('.timeline-expanded-content');

            if (expandedContent) {
                if (item.classList.contains('active')) {
                    expandedContent.style.display = 'block';
                    setTimeout(() => {
                        expandedContent.style.maxHeight = expandedContent.scrollHeight + 'px';
                    }, 10);
                } else {
                    expandedContent.style.maxHeight = '0';
                    setTimeout(() => {
                        expandedContent.style.display = 'none';
                    }, 300);
                }
            }
        });

        // 添加鼠标悬停效果
        item.addEventListener('mouseenter', () => {
            const dot = item.querySelector('.timeline-dot');
            dot.style.animation = 'pulse 1.5s infinite';
        });

        item.addEventListener('mouseleave', () => {
            const dot = item.querySelector('.timeline-dot');
            dot.style.animation = 'none';
        });
    });
}

function checkTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;

    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = (rect.top <= windowHeight * 0.8);

        if (isVisible) {
            item.classList.add('visible');
        }
    });
}

// 脉冲动画
document.head.insertAdjacentHTML('beforeend', `
<style>
@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(255, 105, 180, 0.7);
    }
    70% {
        box-shadow: 0 0 0 15px rgba(255, 105, 180, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(255, 105, 180, 0);
    }
}
</style>
`); 