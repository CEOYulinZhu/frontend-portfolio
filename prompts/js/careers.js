/**
 * AI提示词宝库 - 职位空缺页面JavaScript文件
 */

// 职位数据
const jobsData = [
    {
        id: 1,
        title: "高级AI工程师",
        department: "tech",
        location: "北京",
        type: "全职",
        description: "负责AI提示词优化算法的研发，提升提示词的效果和准确性。",
        requirements: ["5年以上AI/ML开发经验", "精通Python和深度学习框架", "良好的算法设计能力"],
        tags: ["AI", "机器学习", "Python", "算法"]
    },
    {
        id: 2,
        title: "前端开发工程师",
        department: "tech",
        location: "上海",
        type: "全职",
        description: "负责AI提示词平台的前端开发，打造流畅的用户体验。",
        requirements: ["3年以上前端开发经验", "精通Vue/React", "注重代码质量和性能优化"],
        tags: ["前端", "Vue", "React", "JavaScript"]
    },
    {
        id: 3,
        title: "产品经理",
        department: "product",
        location: "北京",
        type: "全职",
        description: "负责AI提示词产品的规划和设计，深入理解用户需求。",
        requirements: ["3年以上产品经理经验", "对AI/ML领域有深入了解", "优秀的沟通协调能力"],
        tags: ["产品设计", "用户体验", "项目管理"]
    },
    {
        id: 4,
        title: "内容运营专员",
        department: "operation",
        location: "remote",
        type: "全职",
        description: "负责AI提示词的收集、整理和质量管理，建设提示词知识库。",
        requirements: ["2年以上内容运营经验", "对AI应用有浓厚兴趣", "良好的文字功底"],
        tags: ["内容运营", "社区运营", "AI应用"]
    },
    {
        id: 5,
        title: "UI设计师",
        department: "product",
        location: "上海",
        type: "全职",
        description: "负责平台的视觉设计，创造美观且易用的界面。",
        requirements: ["3年以上UI设计经验", "精通设计工具", "有SaaS产品设计经验"],
        tags: ["UI设计", "视觉设计", "交互设计"]
    },
    {
        id: 6,
        title: "市场营销经理",
        department: "operation",
        location: "北京",
        type: "全职",
        description: "负责产品的市场推广和品牌建设，扩大用户群体。",
        requirements: ["5年以上市场营销经验", "熟悉AI/科技行业", "出色的策划和执行能力"],
        tags: ["市场营销", "品牌推广", "用户增长"]
    },
    {
        id: 7,
        title: "内容策划",
        department: "content",
        location: "remote",
        type: "全职",
        description: "负责AI提示词的内容策划和编写，制作教程和使用指南。",
        requirements: ["3年以上内容策划经验", "优秀的文案写作能力", "对AI技术有深入了解"],
        tags: ["内容策划", "技术文档", "教程制作"]
    },
    {
        id: 8,
        title: "后端开发工程师",
        department: "tech",
        location: "上海",
        type: "全职",
        description: "负责平台后端服务的开发和优化，确保系统的稳定性和可扩展性。",
        requirements: ["3年以上后端开发经验", "精通Node.js/Python", "有分布式系统开发经验"],
        tags: ["后端开发", "Node.js", "Python", "微服务"]
    }
];

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 等待header和footer加载完成后再初始化页面
    const observer = new MutationObserver((mutations, obs) => {
        const footer = document.querySelector('#footer .footer-container');

        if (footer) {
            // 底部已加载，初始化页面
            initPage();
            // 停止观察
            obs.disconnect();
            // 隐藏加载动画
            const loader = document.querySelector('.loader-container');
            if (loader) {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 300);
            }
        }
    });

    // 开始观察document.body的子节点变化
    observer.observe(document.body, { childList: true, subtree: true });
});

/**
 * 初始化页面
 */
function initPage() {
    // 初始化职位列表
    initJobsList();

    // 初始化筛选器
    initFilters();

    // 初始化滚动动画
    initScrollAnimations();
}

/**
 * 初始化职位列表
 */
function initJobsList() {
    renderJobs(jobsData);
}

/**
 * 初始化筛选器
 */
function initFilters() {
    const departmentFilter = document.getElementById('department-filter');
    const locationFilter = document.getElementById('location-filter');

    // 添加筛选器事件监听
    departmentFilter.addEventListener('change', filterJobs);
    locationFilter.addEventListener('change', filterJobs);
}

/**
 * 渲染职位列表
 */
function renderJobs(jobs) {
    const jobsContainer = document.getElementById('jobs-container');
    jobsContainer.innerHTML = '';

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3 class="job-title">${job.title}</h3>
            <div class="job-meta">
                <span><i class="fas fa-building"></i>${job.department === 'tech' ? '技术研发' :
                job.department === 'product' ? '产品设计' :
                    job.department === 'operation' ? '运营市场' : '内容策划'}</span>
                <span><i class="fas fa-map-marker-alt"></i>${job.location}</span>
                <span><i class="fas fa-clock"></i>${job.type}</span>
            </div>
            <p class="job-description">${job.description}</p>
            <div class="job-tags">
                ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
            </div>
            <div class="job-actions">
                <a href="#" class="btn btn-apply" onclick="applyJob(${job.id}); return false;">立即申请</a>
                <button class="btn btn-save" onclick="saveJob(${job.id})">
                    <i class="far fa-bookmark"></i> 收藏职位
                </button>
            </div>
        `;
        jobsContainer.appendChild(jobCard);
    });

    // 如果没有职位显示空状态
    if (jobs.length === 0) {
        jobsContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <p>暂无符合条件的职位</p>
            </div>
        `;
    }
}

/**
 * 筛选职位
 */
function filterJobs() {
    const department = document.getElementById('department-filter').value;
    const location = document.getElementById('location-filter').value;

    let filteredJobs = jobsData;

    if (department) {
        filteredJobs = filteredJobs.filter(job => job.department === department);
    }

    if (location) {
        filteredJobs = filteredJobs.filter(job => job.location.toLowerCase() === location);
    }

    renderJobs(filteredJobs);
}

/**
 * 申请职位
 */
function applyJob(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (job) {
        // 这里可以添加申请逻辑，比如打开申请表单或跳转到申请页面
        alert(`感谢您对"${job.title}"职位的关注！\n我们即将跳转到申请页面。`);
    }
}

/**
 * 收藏职位
 */
function saveJob(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (job) {
        // 这里可以添加收藏逻辑，比如保存到本地存储
        alert(`已收藏"${job.title}"职位！`);
    }
}

/**
 * 初始化滚动动画
 */
function initScrollAnimations() {
    // 获取所有需要动画的元素
    const animatedElements = document.querySelectorAll('.culture-grid, .benefits-grid, .job-card');

    // 创建Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // 观察每个元素
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // 为每个元素添加初始样式
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .culture-grid,
            .benefits-grid,
            .job-card {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .culture-grid.animate,
            .benefits-grid.animate,
            .job-card.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            .job-card {
                transition-delay: calc(var(--animation-order) * 0.1s);
            }
        </style>
    `);
} 