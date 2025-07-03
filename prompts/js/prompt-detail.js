/**
 * AI提示词宝库 - 提示词详情页JavaScript文件
 * 处理提示词详情页面的功能
 */

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', () => {
    // 初始化页面
    initPromptDetailPage();
});

/**
 * 初始化提示词详情页面
 */
function initPromptDetailPage() {
    // 从URL获取提示词ID
    const urlParams = new URLSearchParams(window.location.search);
    const promptId = urlParams.get('id');

    if (!promptId) {
        showError('未找到提示词ID，请返回提示词库选择一个提示词。');
        return;
    }

    // 加载提示词详情
    loadPromptDetail(promptId);

    // 加载相关提示词
    loadRelatedPrompts(promptId);

    // 加载评论
    loadComments(promptId);

    // 初始化评分功能
    initRatingInput();

    // 初始化评论表单
    initCommentForm(promptId);

    // 初始化复制按钮功能
    initCopyButtons();
}

/**
 * 显示错误信息
 * @param {string} message - 错误信息
 */
function showError(message) {
    const contentElement = document.getElementById('prompt-detail-content');
    if (!contentElement) return;

    contentElement.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <p>${message}</p>
            <a href="../pages/prompt-library.html" class="btn btn-primary">返回提示词库</a>
        </div>
    `;
}

/**
 * 加载提示词详情
 * @param {string} promptId - 提示词ID
 */
function loadPromptDetail(promptId) {
    const contentElement = document.getElementById('prompt-detail-content');
    if (!contentElement) return;

    // 模拟从API获取数据
    // 实际应用中，这里应该是从后端API获取数据
    const promptsData = {
        1: {
            id: 1,
            title: '高效写作助手',
            category: '写作助手',
            description: '帮助您快速生成高质量的文章、博客和报告，克服写作障碍。这个提示词设计用于帮助内容创作者、学生和专业人士提高写作效率，生成结构清晰、内容丰富的文章。无论您是需要撰写博客文章、学术论文还是商业报告，这个提示词都能帮助您快速构思并生成初稿。',
            content: '我需要写一篇关于[主题]的[文章类型]。请提供一个引人入胜的开头，3-5个关键点，以及一个有力的结论。文章风格应该是[风格]，目标读者是[目标受众]。',
            rating: 4.9,
            usageCount: 12580,
            createdAt: '2025-03-15',
            updatedAt: '2025-03-20',
            author: '内容团队',
            tags: ['写作', '内容创作', '博客', '文案'],
            usageSteps: [
                {
                    title: '明确写作目标',
                    description: '在使用提示词前，先确定您要写的主题、文章类型、风格和目标受众。'
                },
                {
                    title: '填入具体信息',
                    description: '将方括号中的占位符替换为您的具体需求，例如"科技发展"、"博客文章"、"专业但平易近人"、"科技爱好者"。'
                },
                {
                    title: '审阅并调整',
                    description: '获得AI回复后，审阅内容并根据需要要求AI进行调整或扩展特定部分。'
                },
                {
                    title: '完善和个性化',
                    description: '在AI生成的框架基础上，添加您的个人见解、案例和数据，使文章更加独特和有价值。'
                }
            ]
        },
        2: {
            id: 2,
            title: '代码优化专家',
            category: '编程开发',
            description: '帮助开发者优化代码，提高性能，解决复杂的编程问题。这个提示词专为软件开发人员设计，旨在帮助识别代码中的性能瓶颈、改进代码结构、应用最佳实践，并提供详细的优化建议。无论您使用什么编程语言，这个提示词都能帮助您编写更高效、更易维护的代码。',
            content: '请帮我优化以下[编程语言]代码，重点关注性能和可读性。如果有任何设计模式或最佳实践可以应用，请指出：\n\n```\n[您的代码]\n```',
            rating: 4.8,
            usageCount: 8765,
            createdAt: '2025-03-22',
            updatedAt: '2025-03-25',
            author: '技术团队',
            tags: ['编程', '代码优化', '性能', '最佳实践'],
            usageSteps: [
                {
                    title: '准备代码',
                    description: '将您需要优化的代码准备好，确保代码片段包含足够的上下文。'
                },
                {
                    title: '指定编程语言',
                    description: '在提示词中明确指出您使用的编程语言，如"JavaScript"、"Python"、"Java"等。'
                },
                {
                    title: '添加具体需求',
                    description: '如果有特定的优化目标（如减少内存使用、提高执行速度等），请在提示中说明。'
                },
                {
                    title: '应用建议',
                    description: '根据AI提供的优化建议，逐步应用到您的代码中，并测试效果。'
                }
            ]
        },
        3: {
            id: 3,
            title: '营销文案生成器',
            category: '商业应用',
            description: '创建引人注目的营销文案，提高转化率，吸引更多客户。这个提示词专为市场营销人员和企业主设计，帮助您创建能够吸引目标受众、突出产品或服务价值、并促使用户采取行动的营销文案。无论是社交媒体帖子、广告文案还是产品描述，这个提示词都能帮助您生成有效的营销内容。',
            content: '请为[产品/服务]创建一个引人注目的营销文案。目标受众是[目标人群]，主要卖点是[卖点]。文案应包括标题、副标题和号召性用语(CTA)。风格应该是[风格]。',
            rating: 4.7,
            usageCount: 9432,
            createdAt: '2025-03-10',
            updatedAt: '2025-03-15',
            author: '营销团队',
            tags: ['营销', '文案', '广告', '转化率'],
            usageSteps: [
                {
                    title: '明确产品和受众',
                    description: '详细描述您的产品或服务，以及您想要吸引的目标受众群体。'
                },
                {
                    title: '确定主要卖点',
                    description: '列出产品或服务的2-3个最重要的卖点或独特价值主张。'
                },
                {
                    title: '选择合适的风格',
                    description: '根据品牌调性和目标受众，选择合适的文案风格，如"专业正式"、"轻松幽默"等。'
                },
                {
                    title: '测试和迭代',
                    description: '使用生成的文案进行A/B测试，根据效果进行调整和优化。'
                }
            ]
        },
        4: {
            id: 4,
            title: '创意故事生成器',
            category: '创意设计',
            description: '激发您的创造力，生成独特的故事情节、角色和场景描述。这个提示词专为作家、内容创作者和创意工作者设计，帮助您突破创作瓶颈，获取新的灵感和创意。无论您是在写小说、剧本还是游戏剧情，这个提示词都能帮助您构建引人入胜的故事世界。',
            content: '请创作一个短篇故事，类型是[类型]。主角是[角色描述]，故事发生在[场景]。故事应该包含一个意想不到的转折，并传达[主题/教训]。',
            rating: 4.9,
            usageCount: 7654,
            createdAt: '2025-03-05',
            updatedAt: '2025-03-10',
            author: '创意团队',
            tags: ['创意', '故事', '写作', '灵感'],
            usageSteps: [
                {
                    title: '选择故事类型',
                    description: '确定您想要的故事类型，如"科幻"、"奇幻"、"悬疑"、"爱情"等。'
                },
                {
                    title: '设计主角',
                    description: '描述主角的基本特征、背景和性格特点。'
                },
                {
                    title: '构思场景',
                    description: '想象故事发生的时间、地点和环境。'
                },
                {
                    title: '确定主题',
                    description: '思考您希望故事传达的主题或教训。'
                }
            ]
        },
        5: {
            id: 5,
            title: '学习计划制定',
            category: '教育学习',
            description: '根据您的学习目标和时间安排，创建个性化的学习计划。这个提示词专为学生、自学者和终身学习者设计，帮助您制定结构化、可行的学习路径。无论您是要学习一门新语言、掌握一项技能还是准备考试，这个提示词都能帮助您规划学习过程，提高学习效率。',
            content: '请为我制定一个学习[主题/技能]的计划。我的目标是[学习目标]，每周可以投入[小时数]小时。我的当前水平是[初级/中级/高级]。请包括学习资源推荐和进度跟踪方法。',
            rating: 4.6,
            usageCount: 6543,
            createdAt: '2025-03-18',
            updatedAt: '2025-03-25',
            author: '教育团队',
            tags: ['学习', '教育', '计划', '自我提升'],
            usageSteps: [
                {
                    title: '明确学习主题',
                    description: '确定您想要学习的具体主题或技能。'
                },
                {
                    title: '设定学习目标',
                    description: '设定明确、可衡量的学习目标，如"能够进行基本对话"、"通过认证考试"等。'
                },
                {
                    title: '评估时间投入',
                    description: '根据您的实际情况，确定每周可以投入学习的时间。'
                },
                {
                    title: '执行和调整',
                    description: '按照计划开始学习，并根据进展情况适时调整计划。'
                }
            ]
        },
        6: {
            id: 6,
            title: '会议总结助手',
            category: '效率提升',
            description: '快速整理会议内容，提取关键点和行动项，提高工作效率。这个提示词专为职场人士、项目经理和团队领导设计，帮助您从冗长的会议记录中提取重要信息，整理成清晰、结构化的会议总结。使用这个提示词，您可以节省整理会议记录的时间，确保不遗漏任何重要决策和行动项。',
            content: '请帮我总结以下会议记录，提取关键讨论点、决策和行动项。格式应该清晰易读，重点突出：\n\n[会议记录]',
            rating: 4.8,
            usageCount: 8901,
            createdAt: '2025-03-12',
            updatedAt: '2025-03-01',
            author: '效率团队',
            tags: ['会议', '总结', '效率', '工作'],
            usageSteps: [
                {
                    title: '准备会议记录',
                    description: '将完整的会议记录或笔记准备好。'
                },
                {
                    title: '提交记录',
                    description: '将会议记录粘贴到提示词中。'
                },
                {
                    title: '审阅总结',
                    description: '检查AI生成的总结，确保所有重要信息都被包含。'
                },
                {
                    title: '分享和跟进',
                    description: '将总结分享给相关团队成员，并跟进行动项的执行情况。'
                }
            ]
        }
    };

    // 获取提示词数据
    const promptData = promptsData[promptId];

    if (!promptData) {
        showError('未找到该提示词，可能已被删除或移动。');
        return;
    }

    // 更新页面标题
    document.title = `${promptData.title} - AI提示词宝库`;

    // 格式化日期
    const formattedCreatedDate = formatDate(promptData.createdAt, 'YYYY-MM-DD');
    const formattedUpdatedDate = formatDate(promptData.updatedAt, 'YYYY-MM-DD');

    // 格式化使用次数
    const formattedUsageCount = promptData.usageCount.toLocaleString();

    // 生成星级评分
    const ratingStars = generateRatingStars(promptData.rating);

    // 生成标签HTML
    const tagsHtml = promptData.tags.map(tag => `<span class="prompt-tag">${tag}</span>`).join('');

    // 生成使用步骤HTML
    const stepsHtml = promptData.usageSteps.map((step, index) => `
        <li>
            <div class="step-number">${index + 1}</div>
            <div class="step-content">
                <h4>${step.title}</h4>
                <p>${step.description}</p>
            </div>
        </li>
    `).join('');

    // 渲染提示词详情
    contentElement.innerHTML = `
        <div class="prompt-header">
            <div class="prompt-title-row">
                <div>
                    <span class="prompt-category">${promptData.category}</span>
                    <h1 class="prompt-title">${promptData.title}</h1>
                </div>
                <div class="prompt-rating">
                    <div class="stars">
                        ${ratingStars}
                    </div>
                    <span>${promptData.rating.toFixed(1)}</span>
                </div>
            </div>
            <div class="prompt-meta">
                <span><i class="fas fa-user"></i> ${promptData.author}</span>
                <span><i class="fas fa-user-friends"></i> ${formattedUsageCount}次使用</span>
                <span><i class="far fa-calendar-alt"></i> 创建于${formattedCreatedDate}</span>
                <span><i class="fas fa-sync-alt"></i> 更新于${formattedUpdatedDate}</span>
            </div>
        </div>
        <div class="prompt-body">
            <p class="prompt-description">${promptData.description}</p>
            
            <div class="prompt-content-box">
                <pre class="prompt-content-text">${promptData.content}</pre>
                <button class="copy-button" data-content="${escapeHtml(promptData.content)}">
                    <i class="far fa-copy"></i> 复制提示词
                </button>
            </div>
            
            <div class="prompt-usage">
                <h3>使用方法</h3>
                <ul class="usage-steps">
                    ${stepsHtml}
                </ul>
            </div>
            
            <div class="prompt-tags">
                ${tagsHtml}
            </div>
        </div>
    `;

    // 初始化复制按钮
    initCopyButtons();
}

/**
 * 转义HTML特殊字符
 * @param {string} html - 需要转义的HTML字符串
 * @returns {string} - 转义后的字符串
 */
function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
}

/**
 * 生成星级评分HTML
 * @param {number} rating - 评分(0-5)
 * @returns {string} - 星级评分HTML
 */
function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let starsHtml = '';

    // 添加满星
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }

    // 添加半星
    if (halfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }

    // 添加空星
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }

    return starsHtml;
}

/**
 * 格式化日期
 * @param {string} dateString - 日期字符串
 * @param {string} format - 格式化模式
 * @returns {string} - 格式化后的日期字符串
 */
function formatDate(dateString, format) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    if (format === 'YYYY-MM-DD') {
        return `${year}-${month}-${day}`;
    }

    return dateString;
}

/**
 * 加载相关提示词
 * @param {string} promptId - 当前提示词ID
 */
function loadRelatedPrompts(promptId) {
    const container = document.getElementById('related-prompts-container');
    if (!container) return;

    // 模拟从API获取数据
    // 实际应用中，这里应该是从后端API获取数据
    const relatedPrompts = [
        {
            id: promptId === '1' ? 3 : 1,
            title: promptId === '1' ? '营销文案生成器' : '高效写作助手',
            category: promptId === '1' ? '商业应用' : '写作助手',
            description: promptId === '1'
                ? '创建引人注目的营销文案，提高转化率，吸引更多客户。'
                : '帮助您快速生成高质量的文章、博客和报告，克服写作障碍。',
            rating: promptId === '1' ? 4.7 : 4.9
        },
        {
            id: promptId === '4' ? 2 : 4,
            title: promptId === '4' ? '代码优化专家' : '创意故事生成器',
            category: promptId === '4' ? '编程开发' : '创意设计',
            description: promptId === '4'
                ? '帮助开发者优化代码，提高性能，解决复杂的编程问题。'
                : '激发您的创造力，生成独特的故事情节、角色和场景描述。',
            rating: promptId === '4' ? 4.8 : 4.9
        },
        {
            id: promptId === '6' ? 5 : 6,
            title: promptId === '6' ? '学习计划制定' : '会议总结助手',
            category: promptId === '6' ? '教育学习' : '效率提升',
            description: promptId === '6'
                ? '根据您的学习目标和时间安排，创建个性化的学习计划。'
                : '快速整理会议内容，提取关键点和行动项，提高工作效率。',
            rating: promptId === '6' ? 4.6 : 4.8
        }
    ];

    // 清空容器
    container.innerHTML = '';

    // 添加相关提示词卡片
    relatedPrompts.forEach(prompt => {
        // 生成星级评分
        const ratingStars = generateRatingStars(prompt.rating);

        const card = document.createElement('div');
        card.className = 'related-prompt-card';
        card.innerHTML = `
            <div class="related-prompt-header">
                <span class="related-prompt-category">${prompt.category}</span>
                <div class="related-prompt-rating">
                    ${ratingStars}
                    <span>${prompt.rating.toFixed(1)}</span>
                </div>
            </div>
            <div class="related-prompt-body">
                <h3 class="related-prompt-title">${prompt.title}</h3>
                <p class="related-prompt-description">${prompt.description}</p>
                <a href="prompt-detail.html?id=${prompt.id}" class="related-prompt-link" target="_blank">查看详情</a>
            </div>
        `;

        container.appendChild(card);
    });
}

/**
 * 加载评论
 * @param {string} promptId - 提示词ID
 */
function loadComments(promptId) {
    const container = document.getElementById('comments-list');
    if (!container) return;

    // 模拟从API获取数据
    // 实际应用中，这里应该是从后端API获取数据
    const comments = [
        {
            id: 1,
            author: '李明',
            avatar: '../assets/images/temp.jpg',
            date: '2025-02-15',
            rating: 5,
            content: '这个提示词太棒了！我用它写了几篇博客文章，质量比以前提高了很多，而且节省了大量时间。强烈推荐给所有内容创作者。'
        },
        {
            id: 2,
            author: '张华',
            avatar: '../assets/images/temp.jpg',
            date: '2025-03-18',
            rating: 4,
            content: '整体来说非常实用，帮我解决了很多写作难题。唯一的建议是希望能有更多针对不同文章类型的变体。'
        },
        {
            id: 3,
            author: '王芳',
            avatar: '../assets/images/temp.jpg',
            date: '2025-04-20',
            rating: 5,
            content: '作为一名营销人员，这个提示词帮我极大地提高了工作效率。现在我可以在短时间内生成多个内容创意，然后选择最好的进行深入开发。'
        }
    ];

    // 清空容器
    container.innerHTML = '';

    if (comments.length === 0) {
        container.innerHTML = '<p class="no-comments">暂无评论，成为第一个评论者吧！</p>';
        return;
    }

    // 添加评论
    comments.forEach(comment => {
        // 格式化日期
        const formattedDate = formatDate(comment.date, 'YYYY-MM-DD');

        // 生成星级评分
        const ratingStars = generateRatingStars(comment.rating);

        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <div class="comment-header">
                <div class="comment-author">
                    <img src="${comment.avatar}" alt="${comment.author}">
                    <div class="comment-author-info">
                        <h4>${comment.author}</h4>
                        <p>${formattedDate}</p>
                    </div>
                </div>
                <div class="comment-rating">
                    ${ratingStars}
                </div>
            </div>
            <div class="comment-content">
                <p>${comment.content}</p>
            </div>
        `;

        container.appendChild(commentElement);
    });
}

/**
 * 初始化评分输入功能
 */
function initRatingInput() {
    const ratingStars = document.querySelectorAll('.rating-input i');
    const ratingInput = document.getElementById('comment-rating');

    if (!ratingStars.length || !ratingInput) return;

    // 添加星级评分点击事件
    ratingStars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'));
            ratingInput.value = rating;

            // 更新星星显示
            ratingStars.forEach((s, index) => {
                if (index < rating) {
                    s.className = 'fas fa-star';
                } else {
                    s.className = 'far fa-star';
                }
            });
        });

        // 添加鼠标悬停效果
        star.addEventListener('mouseover', () => {
            const rating = parseInt(star.getAttribute('data-rating'));

            // 更新星星显示
            ratingStars.forEach((s, index) => {
                if (index < rating) {
                    s.className = 'fas fa-star';
                } else {
                    s.className = 'far fa-star';
                }
            });
        });

        // 鼠标移出时恢复原始评分
        star.addEventListener('mouseout', () => {
            const rating = parseInt(ratingInput.value) || 0;

            // 更新星星显示
            ratingStars.forEach((s, index) => {
                if (index < rating) {
                    s.className = 'fas fa-star';
                } else {
                    s.className = 'far fa-star';
                }
            });
        });
    });
}

/**
 * 初始化评论表单
 * @param {string} promptId - 提示词ID
 */
function initCommentForm(promptId) {
    const form = document.getElementById('comment-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const rating = document.getElementById('comment-rating').value;
        const content = document.getElementById('comment-content').value;

        if (!rating || rating === '0') {
            alert('请选择评分');
            return;
        }

        if (!content.trim()) {
            alert('请输入评论内容');
            return;
        }

        // 模拟提交评论
        // 实际应用中，这里应该是向后端API提交数据
        alert('评论提交成功！');

        // 重置表单
        form.reset();
        document.querySelectorAll('.rating-input i').forEach(star => {
            star.className = 'far fa-star';
        });
        document.getElementById('comment-rating').value = '0';

        // 刷新评论列表
        loadComments(promptId);
    });
}

/**
 * 初始化复制按钮功能
 */
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-button');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.getAttribute('data-content');

            // 复制到剪贴板
            navigator.clipboard.writeText(content)
                .then(() => {
                    // 更新按钮文本
                    const originalText = button.innerHTML;
                    button.innerHTML = '<i class="fas fa-check"></i> 已复制';

                    // 2秒后恢复原始文本
                    setTimeout(() => {
                        button.innerHTML = originalText;
                    }, 2000);
                })
                .catch(err => {
                    console.error('复制失败:', err);
                    alert('复制失败，请手动复制');
                });
        });
    });
} 