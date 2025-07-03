// 教程详情页面交互逻辑

document.addEventListener('DOMContentLoaded', () => {
    // 获取URL参数中的教程ID
    const urlParams = new URLSearchParams(window.location.search);
    const tutorialId = urlParams.get('id');

    // 初始化变量
    const tutorialTitle = document.getElementById('tutorial-title');
    const tutorialCategory = document.getElementById('tutorial-category');
    const tutorialDuration = document.getElementById('tutorial-duration');
    const tutorialLevel = document.getElementById('tutorial-level');
    const tutorialDate = document.getElementById('tutorial-date');
    const tutorialContent = document.getElementById('tutorial-content');
    const relatedTutorials = document.getElementById('related-tutorials');
    const prevTutorial = document.getElementById('prev-tutorial');
    const nextTutorial = document.getElementById('next-tutorial');

    // 模拟教程数据（实际项目中应从后端API获取）
    const tutorials = {
        1: {
            title: 'AI对话入门：如何有效提问',
            category: '入门基础',
            duration: '15分钟',
            level: '入门',
            date: '2025-03-15',
            content: `
                <section id="introduction">
                    <h2>简介</h2>
                    <p>在AI时代，学会与AI进行有效对话是一项重要技能。本教程将帮助你掌握与AI对话的基本方法和技巧，让你能够更好地利用AI工具。</p>
                </section>

                <section id="basics">
                    <h2>基础概念</h2>
                    <p>在开始之前，让我们先了解几个重要的概念：</p>
                    <ul>
                        <li>提示词（Prompt）：给予AI的输入文本</li>
                        <li>上下文（Context）：对话的背景信息</li>
                        <li>意图（Intent）：你想要达到的目标</li>
                    </ul>
                </section>

                <section id="techniques">
                    <h2>核心技巧</h2>
                    <h3>1. 明确目标</h3>
                    <p>在提问之前，先明确你想要获得什么样的答案。目标越具体，AI的回答就越准确。</p>

                    <h3>2. 提供上下文</h3>
                    <p>给AI提供足够的背景信息，帮助它更好地理解你的需求。</p>

                    <h3>3. 结构化提问</h3>
                    <p>将复杂的问题拆分成多个小问题，逐步引导AI给出答案。</p>
                </section>

                <section id="examples">
                    <h2>实践示例</h2>
                    <h3>示例1：编写代码</h3>
                    <pre><code>请帮我用Python编写一个简单的计算器程序
要求：
1. 支持加减乘除四则运算
2. 包含错误处理
3. 提供清晰的用户界面</code></pre>

                    <h3>示例2：内容创作</h3>
                    <pre><code>请帮我写一篇关于人工智能的文章
要求：
1. 面向普通读者
2. 长度约800字
3. 重点介绍AI的实际应用
4. 包含具体案例</code></pre>
                </section>

                <section id="summary">
                    <h2>总结回顾</h2>
                    <p>掌握与AI对话的技巧需要不断练习。记住以下关键点：</p>
                    <ul>
                        <li>明确表达你的需求和目标</li>
                        <li>提供必要的上下文信息</li>
                        <li>采用结构化的提问方式</li>
                        <li>通过实践不断优化你的提问技巧</li>
                    </ul>
                </section>
            `,
            prev: null,
            next: 2
        },
        2: {
            title: '提示词工程进阶技巧',
            category: '进阶',
            duration: '30分钟',
            level: '进阶',
            date: '2025-03-16',
            content: `
                <section id="introduction">
                    <h2>简介</h2>
                    <p>提示词工程（Prompt Engineering）是一门新兴的技术，它能帮助我们更好地利用AI模型。本教程将深入探讨提示词工程的核心概念和高级技巧。</p>
                </section>

                <section id="basics">
                    <h2>基础概念</h2>
                    <h3>什么是提示词工程？</h3>
                    <p>提示词工程是设计和优化AI提示词的过程，目的是获得更准确、更相关的AI响应。主要包括：</p>
                    <ul>
                        <li>提示词结构设计</li>
                        <li>上下文管理</li>
                        <li>约束条件设置</li>
                        <li>输出格式控制</li>
                    </ul>
                </section>

                <section id="techniques">
                    <h2>进阶技巧</h2>
                    <h3>1. 角色设定</h3>
                    <p>通过明确的角色定义，引导AI以特定的专业视角回答问题。</p>
                    <pre><code>作为一名资深软件架构师，请评估以下系统设计方案的优缺点...</code></pre>

                    <h3>2. 思维链提示</h3>
                    <p>引导AI逐步思考，展示推理过程。</p>
                    <pre><code>让我们一步步思考这个问题：
1. 首先，分析问题的关键要素
2. 然后，列出可能的解决方案
3. 最后，评估每个方案的可行性</code></pre>

                    <h3>3. 输出格式控制</h3>
                    <p>使用明确的格式指令获得结构化输出。</p>
                    <pre><code>请以JSON格式输出结果，包含以下字段：
{
    "title": "标题",
    "key_points": ["要点1", "要点2"],
    "conclusion": "结论"
}</code></pre>
                </section>

                <section id="examples">
                    <h2>实战案例</h2>
                    <h3>案例1：内容创作优化</h3>
                    <pre><code>作为一名专业的技术文档作者，请帮我改进以下文档：
[原文内容]

要求：
1. 提高专业性和准确性
2. 优化结构和可读性
3. 添加适当的技术细节
4. 保持语言简洁清晰</code></pre>

                    <h3>案例2：代码生成优化</h3>
                    <pre><code>作为一名Python高级开发者，请实现一个数据处理函数：
要求：
1. 使用最佳实践和设计模式
2. 包含完整的错误处理
3. 添加详细的文档注释
4. 确保代码可测试性</code></pre>
                </section>

                <section id="summary">
                    <h2>总结要点</h2>
                    <ul>
                        <li>提示词工程是一个迭代优化的过程</li>
                        <li>好的提示词应该清晰、具体且结构化</li>
                        <li>合理运用角色设定和思维链可以提高输出质量</li>
                        <li>持续实践和总结是提高提示词工程能力的关键</li>
                    </ul>
                </section>
            `,
            prev: 1,
            next: 3
        },
        3: {
            title: 'AI回答优化与调试',
            category: '高级',
            duration: '45分钟',
            level: '高级',
            date: '2025-03-17',
            content: `
                <section id="introduction">
                    <h2>简介</h2>
                    <p>AI输出的质量直接影响工作效率。本教程将介绍如何优化AI回答，提高输出质量，以及在遇到问题时如何进行有效的调试。</p>
                </section>

                <section id="basics">
                    <h2>优化基础</h2>
                    <h3>影响AI输出质量的因素</h3>
                    <ul>
                        <li>提示词的准确性和完整性</li>
                        <li>上下文的相关性和充分性</li>
                        <li>模型的能力边界</li>
                        <li>输出格式的规范性</li>
                    </ul>
                </section>

                <section id="techniques">
                    <h2>优化技巧</h2>
                    <h3>1. 迭代优化</h3>
                    <p>通过不断调整和优化提示词来提高输出质量。</p>
                    <pre><code>// 初始提示词
生成一个Python函数

// 优化后的提示词
请使用Python实现一个函数，要求：
1. 功能：处理用户输入的文本数据
2. 输入：字符串类型
3. 输出：处理后的字符串
4. 包含错误处理和边界检查
5. 遵循PEP 8规范</code></pre>

                    <h3>2. 输出结构化</h3>
                    <p>使用模板和格式控制来规范输出。</p>
                    <pre><code>请按以下格式输出分析结果：

## 问题分析
[详细分析内容]

## 解决方案
1. [方案一]
2. [方案二]

## 建议实施步骤
1. [步骤一]
2. [步骤二]

## 注意事项
- [注意点一]
- [注意点二]</code></pre>

                    <h3>3. 错误处理</h3>
                    <p>识别和处理常见的AI输出问题。</p>
                    <ul>
                        <li>输出不完整或中断</li>
                        <li>回答偏离主题</li>
                        <li>逻辑错误或矛盾</li>
                        <li>技术细节不准确</li>
                    </ul>
                </section>

                <section id="examples">
                    <h2>调试案例</h2>
                    <h3>案例1：代码生成调试</h3>
                    <pre><code>// 问题描述
生成的代码存在语法错误

// 调试步骤
1. 检查代码结构和缩进
2. 验证变量声明和使用
3. 测试边界条件
4. 添加错误处理</code></pre>

                    <h3>案例2：文本生成优化</h3>
                    <pre><code>// 原始输出
技术性描述晦涩难懂

// 优化步骤
1. 要求使用更简单的语言
2. 添加具体的例子
3. 使用类比解释
4. 分步骤展示过程</code></pre>
                </section>

                <section id="summary">
                    <h2>总结要点</h2>
                    <ul>
                        <li>优化是一个持续的过程，需要不断实践和总结</li>
                        <li>良好的错误处理机制可以提高输出的可靠性</li>
                        <li>结构化的输出格式有助于提高内容的可用性</li>
                        <li>调试技巧的掌握对提高AI使用效率至关重要</li>
                    </ul>
                </section>
            `,
            prev: 2,
            next: 4
        },
        4: {
            title: '教育领域的应用',
            category: '专题',
            duration: '35分钟',
            level: '进阶',
            date: '2025-03-18',
            description: '探索AI如何改变现代教育模式和学习方法。',
            content: `
                <section id="introduction">
                    <h2>简介</h2>
                    <p>人工智能正在深刻改变教育领域。本教程探讨AI在教育中的应用，以及这些技术如何优化学习体验。</p>
                </section>

                <section id="basics">
                    <h2>AI教育应用基础</h2>
                    <h3>AI在教育中的主要应用方向</h3>
                    <ul>
                        <li>个性化学习与适应性教学</li>
                        <li>智能评估与反馈系统</li>
                        <li>教育内容自动生成</li>
                        <li>虚拟辅导与助教</li>
                        <li>教育管理与数据分析</li>
                    </ul>
                </section>

                <section id="techniques">
                    <h2>核心技术与实践</h2>
                    <h3>1. 个性化学习系统</h3>
                    <p>AI可以分析学生的学习模式、进度和偏好，提供量身定制的学习路径。</p>
                    
                    <h3>2. 智能内容创建</h3>
                    <p>教育工作者可以利用AI生成教学素材、测验题和学习资料，大幅提高教学效率。</p>
                    
                    <h3>3. 实时反馈系统</h3>
                    <p>AI可以提供即时评估和反馈，帮助学生更快地改进学习方法和成果。</p>
                </section>

                <section id="examples">
                    <h2>实际案例</h2>
                    <h3>案例1：AI驱动的语言学习平台</h3>
                    <p>通过NLP技术分析学生的口语和写作，提供个性化纠错和改进建议。</p>
                    
                    <h3>案例2：适应性数学教学系统</h3>
                    <p>根据学生解题表现动态调整难度和内容，确保每个学生在最佳挑战区学习。</p>
                    
                    <h3>案例3：教师AI助手</h3>
                    <p>帮助教师自动批改作业、生成教案和识别学生学习中的困难点。</p>
                </section>

                <section id="summary">
                    <h2>总结与展望</h2>
                    <p>AI在教育领域的应用正处于快速发展阶段，未来将更加深入地融入教学过程。重要趋势包括：</p>
                    <ul>
                        <li>更精准的学习分析与预测</li>
                        <li>跨学科AI辅助教学工具</li>
                        <li>情感计算在教育中的应用</li>
                        <li>全球化教育资源的AI优化分配</li>
                    </ul>
                </section>
            `,
            prev: 3,
            next: 5
        },
        5: {
            title: 'AI实践入门：从零开始',
            category: '入门基础',
            duration: '25分钟',
            level: '入门',
            date: '2025-03-19',
            description: '通过实践案例学习AI应用的基础知识。',
            content: `
                <section id="introduction">
                    <h2>简介</h2>
                    <p>想要开始使用AI但不知从何入手？本教程将通过实际案例，带你了解AI应用的基础知识和实践方法。</p>
                </section>

                <section id="basics">
                    <h2>AI应用基础</h2>
                    <h3>常见AI应用类型</h3>
                    <ul>
                        <li>文本生成与处理</li>
                        <li>图像创作与编辑</li>
                        <li>数据分析与可视化</li>
                        <li>对话式AI助手</li>
                        <li>自动化工作流程</li>
                    </ul>
                    
                    <h3>开始使用AI的准备</h3>
                    <p>在开始AI实践之前，你需要：</p>
                    <ul>
                        <li>明确你想解决的问题</li>
                        <li>了解适合的AI工具和平台</li>
                        <li>准备必要的学习资源</li>
                        <li>设定合理的期望</li>
                    </ul>
                </section>

                <section id="techniques">
                    <h2>入门实践指南</h2>
                    <h3>1. 开始使用ChatGPT</h3>
                    <p>学习如何有效提问，获取有用的回答。</p>
                    <pre><code>例如:
"我想学习Python编程，我是完全的初学者。请给我一个为期两周的学习计划，每天学习2小时。"</code></pre>
                    
                    <h3>2. 尝试AI图像生成</h3>
                    <p>通过描述创建独特的图像。</p>
                    <pre><code>例如:
"一个未来风格的城市公园，有悬浮的树木和发光的植物，傍晚场景，蓝紫色调。"</code></pre>
                </section>

                <section id="examples">
                    <h2>入门项目案例</h2>
                    <h3>案例1：AI辅助写作</h3>
                    <p>使用AI帮助完成一篇博客文章：</p>
                    <ol>
                        <li>用AI生成文章大纲</li>
                        <li>扩展每个要点的内容</li>
                        <li>请AI润色文章风格和语言</li>
                        <li>使用AI检查语法和表达</li>
                    </ol>
                    
                    <h3>案例2：个人学习助手</h3>
                    <p>创建一个AI学习伙伴：</p>
                    <ol>
                        <li>定义你的学习目标和需求</li>
                        <li>设计针对性的AI提示模板</li>
                        <li>建立循环反馈机制</li>
                        <li>根据学习进度调整AI使用方法</li>
                    </ol>
                </section>

                <section id="summary">
                    <h2>总结与下一步</h2>
                    <p>通过本教程的实践，你已经迈出了AI应用的第一步。接下来可以：</p>
                    <ul>
                        <li>深入探索特定AI工具的高级功能</li>
                        <li>尝试将AI融入日常工作流程</li>
                        <li>学习如何组合多种AI工具解决复杂问题</li>
                        <li>加入AI学习社区分享经验和问题</li>
                    </ul>
                </section>
            `,
            prev: 4,
            next: 6
        },
        6: {
            title: 'AI模型调优与性能优化',
            category: '高级',
            duration: '50分钟',
            level: '高级',
            date: '2025-03-20',
            description: '学习如何调整和优化AI模型以提高性能。',
            content: `
                <section id="introduction">
                    <h2>简介</h2>
                    <p>AI模型的调优和性能优化是提高AI应用效果的关键。本教程将介绍如何通过调整参数和优化策略，使AI模型达到最佳性能。</p>
                </section>

                <section id="basics">
                    <h2>模型优化基础</h2>
                    <h3>影响模型性能的关键因素</h3>
                    <ul>
                        <li>数据质量与预处理</li>
                        <li>模型结构与复杂度</li>
                        <li>超参数选择</li>
                        <li>训练策略</li>
                        <li>评估指标</li>
                    </ul>
                </section>

                <section id="techniques">
                    <h2>优化技巧</h2>
                    <h3>1. 超参数调优</h3>
                    <p>学习如何系统地调整模型的超参数，找到最佳配置。</p>
                    <ul>
                        <li>网格搜索与随机搜索</li>
                        <li>贝叶斯优化</li>
                        <li>早停策略</li>
                    </ul>
                    
                    <h3>2. 模型压缩与加速</h3>
                    <p>了解如何在保持性能的同时减小模型体积、提高推理速度。</p>
                    <ul>
                        <li>知识蒸馏</li>
                        <li>模型裁剪</li>
                        <li>量化技术</li>
                    </ul>
                    
                    <h3>3. 优化提示词策略</h3>
                    <p>对于大语言模型，学习如何优化提示词以获得更好的结果。</p>
                </section>

                <section id="examples">
                    <h2>实战案例</h2>
                    <h3>案例1：图像分类模型优化</h3>
                    <p>通过数据增强、模型调优和集成学习提高准确率。</p>
                    
                    <h3>案例2：大语言模型性能提升</h3>
                    <p>使用高级提示工程技术和上下文优化提高回答质量。</p>
                    
                    <h3>案例3：推荐系统精度优化</h3>
                    <p>结合多种策略优化推荐算法的准确性和多样性。</p>
                </section>

                <section id="summary">
                    <h2>总结与最佳实践</h2>
                    <p>AI模型优化是一个持续迭代的过程，需要结合理论知识和实践经验。关键要点：</p>
                    <ul>
                        <li>建立系统化的优化流程</li>
                        <li>使用适当的评估指标</li>
                        <li>平衡性能和效率</li>
                        <li>持续学习新的优化技术</li>
                    </ul>
                </section>
            `,
            prev: 5,
            next: 7
        },
        7: {
            title: 'AI工具使用指南：提高效率',
            category: '进阶',
            duration: '35分钟',
            level: '中级',
            date: '2025-03-21',
            description: '学习如何有效使用各种AI工具提高工作效率。',
            content: `
                <section id="introduction">
                    <h2>简介</h2>
                    <p>AI工具正在彻底改变我们的工作方式。本教程将介绍如何有效利用各种AI工具提高工作效率，实现工作流程的优化。</p>
                </section>

                <section id="basics">
                    <h2>AI工具概览</h2>
                    <h3>常见AI工具类别</h3>
                    <ul>
                        <li>文本与内容生成工具</li>
                        <li>图像创作与编辑工具</li>
                        <li>数据分析与可视化工具</li>
                        <li>自动化与流程工具</li>
                        <li>语言翻译与沟通工具</li>
                    </ul>
                </section>

                <section id="techniques">
                    <h2>高效使用策略</h2>
                    <h3>1. 文本与内容创作工具</h3>
                    <p>利用AI提高写作效率和质量：</p>
                    <ul>
                        <li>内容规划与大纲生成</li>
                        <li>草稿编写与内容扩展</li>
                        <li>风格调整与润色</li>
                        <li>文本优化与校对</li>
                    </ul>
                    
                    <h3>2. 视觉创作工具</h3>
                    <p>使用AI图像工具提升视觉内容创作效率：</p>
                    <ul>
                        <li>概念可视化</li>
                        <li>模型训练与风格化</li>
                        <li>图像编辑与优化</li>
                        <li>批量生成与处理</li>
                    </ul>
                    
                    <h3>3. 工作流程集成</h3>
                    <p>将AI工具整合到现有工作流程中：</p>
                    <ul>
                        <li>创建自定义提示模板</li>
                        <li>构建工具链</li>
                        <li>自动化重复任务</li>
                        <li>建立质量控制机制</li>
                    </ul>
                </section>

                <section id="examples">
                    <h2>实际应用案例</h2>
                    <h3>案例1：内容营销自动化</h3>
                    <p>如何使用AI工具优化内容营销流程：</p>
                    <ol>
                        <li>主题研究与关键词分析</li>
                        <li>内容计划与大纲生成</li>
                        <li>初稿撰写与优化</li>
                        <li>内容分发与数据分析</li>
                    </ol>
                    
                    <h3>案例2：产品设计流程优化</h3>
                    <p>将AI工具融入产品设计流程：</p>
                    <ol>
                        <li>创意生成与概念验证</li>
                        <li>原型设计与迭代</li>
                        <li>用户体验优化</li>
                        <li>市场反馈分析</li>
                    </ol>
                </section>

                <section id="summary">
                    <h2>总结与最佳实践</h2>
                    <p>有效利用AI工具需要培养以下习惯：</p>
                    <ul>
                        <li>保持实验与学习的心态</li>
                        <li>建立清晰的工作流程</li>
                        <li>定期评估工具效果</li>
                        <li>组合使用多种工具</li>
                        <li>持续优化提示和工作方式</li>
                    </ul>
                </section>
            `,
            prev: 6,
            next: 8
        },
        8: {
            title: 'AI未来发展趋势展望',
            category: '专题',
            duration: '45分钟',
            level: '中级',
            date: '2025-03-22',
            description: '探讨AI技术的未来发展方向和潜在影响。',
            content: `
                <section id="introduction">
                    <h2>简介</h2>
                    <p>AI技术正以前所未有的速度发展。本教程将探讨AI的未来发展趋势，以及这些趋势可能对社会、经济和个人产生的影响。</p>
                </section>

                <section id="basics">
                    <h2>AI发展现状</h2>
                    <h3>当前AI技术的主要方向</h3>
                    <ul>
                        <li>大语言模型与通用人工智能</li>
                        <li>多模态AI系统</li>
                        <li>AI赋能的自动化</li>
                        <li>边缘计算与嵌入式AI</li>
                        <li>AI治理与伦理</li>
                    </ul>
                </section>

                <section id="techniques">
                    <h2>未来五年关键趋势</h2>
                    <h3>1. 多模态AI的普及</h3>
                    <p>未来的AI系统将能无缝理解和生成文本、图像、音频和视频内容，创造更自然的人机交互体验。</p>
                    
                    <h3>2. AI个性化与自适应</h3>
                    <p>AI将更好地适应个人需求和偏好，提供真正个性化的体验。</p>
                    
                    <h3>3. 人机协作新模式</h3>
                    <p>AI将成为创意伙伴和思维扩展工具，而不仅仅是执行任务的助手。</p>
                    
                    <h3>4. 本地化与隐私保护</h3>
                    <p>边缘AI技术将使更多智能处理在本地设备上完成，减少隐私风险。</p>
                </section>

                <section id="examples">
                    <h2>行业变革展望</h2>
                    <h3>医疗健康</h3>
                    <p>AI将革新疾病诊断、个性化治疗和医疗资源分配，但也面临数据隐私和监管挑战。</p>
                    
                    <h3>教育与学习</h3>
                    <p>AI将实现真正个性化的学习体验，改变教育评估方式，并使终身学习更加普及。</p>
                    
                    <h3>创意产业</h3>
                    <p>AI将成为创作者的协作工具，开创新的艺术形式，但也引发关于创作归属的讨论。</p>
                    
                    <h3>知识工作</h3>
                    <p>AI将显著提高知识工作者的生产力，改变工作内容和职业发展路径。</p>
                </section>

                <section id="summary">
                    <h2>未来展望与准备</h2>
                    <p>面对AI快速发展，我们应该如何准备：</p>
                    <ul>
                        <li>关注跨领域技能的培养</li>
                        <li>重视批判性思维和创造力</li>
                        <li>理解AI系统的局限性</li>
                        <li>参与AI伦理和治理讨论</li>
                        <li>保持学习和适应的态度</li>
                    </ul>
                </section>
            `,
            prev: 7,
            next: 9
        },
        9: {
            title: 'AI提示词写作指南',
            category: '入门基础',
            duration: '30分钟',
            level: '入门',
            date: '2025-03-23',
            description: '学习如何编写高效的AI提示词以获得更好的结果。',
            content: `
                <section id="introduction">
                    <h2>简介</h2>
                    <p>提示词是与AI模型沟通的桥梁。本教程将教你如何编写高效的提示词，以获得更精确、更有用的AI回答。</p>
                </section>

                <section id="basics">
                    <h2>提示词基础</h2>
                    <h3>什么是好的提示词？</h3>
                    <p>高效的提示词具有以下特点：</p>
                    <ul>
                        <li>清晰明确的目标</li>
                        <li>适当的详细程度</li>
                        <li>良好的结构和组织</li>
                        <li>恰当的语言和语调</li>
                        <li>考虑到AI的能力和限制</li>
                    </ul>
                </section>

                <section id="techniques">
                    <h2>提示词写作技巧</h2>
                    <h3>1. 明确目标和期望</h3>
                    <p>清晰表达你需要什么样的答案：</p>
                    <pre><code>不仅告诉我中国的GDP数据，还请分析过去5年的增长趋势，并对比与美国、日本的差异。</code></pre>
                    
                    <h3>2. 提供充分上下文</h3>
                    <p>给AI提供必要的背景信息：</p>
                    <pre><code>我是一位小学五年级语文老师，正在准备一个关于古诗的教案。请推荐5首适合这个年龄段的古诗，并说明为什么适合。</code></pre>
                    
                    <h3>3. 使用角色设定</h3>
                    <p>通过角色设定引导AI从特定视角回答：</p>
                    <pre><code>作为一名经验丰富的产品经理，请评估我这个移动应用的功能设计，并提出改进建议。</code></pre>
                </section>

                <section id="examples">
                    <h2>提示词模板示例</h2>
                    <h3>内容创作模板</h3>
                    <pre><code>请帮我写一篇关于[主题]的[文章类型]。
目标读者：[读者群体]
风格要求：[风格描述]
字数要求：约[字数]字
需要包含的关键点：
1. [关键点1]
2. [关键点2]
3. [关键点3]</code></pre>
                    
                    <h3>代码生成模板</h3>
                    <pre><code>请用[编程语言]实现[功能描述]。
要求：
1. 代码应该[性能要求]
2. 包含适当的错误处理
3. 遵循[编程规范]
4. 添加清晰的注释
示例输入：[示例]
预期输出：[预期结果]</code></pre>
                    
                    <h3>分析问题模板</h3>
                    <pre><code>我需要分析以下问题：[问题描述]
相关背景：[背景信息]
已知信息：[已知的事实和数据]
目标：[分析目标]
请提供：
1. 问题的不同角度分析
2. 可能的解决方案及其优缺点
3. 推荐的最佳方案及理由</code></pre>
                </section>

                <section id="summary">
                    <h2>提示词优化指南</h2>
                    <p>不断改进你的提示词：</p>
                    <ul>
                        <li>审视并修改不满意的结果</li>
                        <li>使用迭代法，逐步完善提示词</li>
                        <li>建立个人提示词库，收集有效的模板</li>
                        <li>学习和借鉴他人的成功经验</li>
                        <li>持续实验和优化</li>
                    </ul>
                </section>
            `,
            prev: 8,
            next: null
        }
    };

    // 获取难度对应的类名
    function getDifficultyClass(level) {
        const map = {
            '入门': 'beginner',
            '新手友好': 'beginner',
            '进阶': 'intermediate',
            '中级': 'intermediate',
            '高级': 'advanced',
            '专家': 'advanced'
        };
        return map[level] || 'intermediate';
    }

    // 加载教程内容
    function loadTutorial(id) {
        const tutorial = tutorials[id];
        if (!tutorial) {
            window.location.href = '/pages/tutorials.html';
            return;
        }

        // 更新页面标题和元信息
        document.title = `${tutorial.title} - AI提示词宝库`;
        tutorialTitle.textContent = tutorial.title;
        tutorialCategory.textContent = tutorial.category;
        tutorialDuration.textContent = tutorial.duration;
        tutorialLevel.textContent = tutorial.level;
        tutorialDate.textContent = tutorial.date;

        // 加载教程内容
        tutorialContent.innerHTML = tutorial.content;

        // 更新导航链接
        updateNavigation(tutorial);

        // 加载相关教程
        loadRelatedTutorials(id);

        // 初始化目录导航
        initTableOfContents();
    }

    // 更新上一篇/下一篇导航
    function updateNavigation(tutorial) {
        if (tutorial.prev) {
            prevTutorial.style.display = '';
            prevTutorial.href = `?id=${tutorial.prev}`;
        } else {
            prevTutorial.style.display = 'none';
        }

        if (tutorial.next) {
            nextTutorial.style.display = '';
            nextTutorial.href = `?id=${tutorial.next}`;
        } else {
            nextTutorial.style.display = 'none';
        }
    }

    // 加载相关教程
    function loadRelatedTutorials(currentId) {
        // 实际项目中应根据标签、分类等推荐相关教程
        relatedTutorials.innerHTML = ''; // 清空现有内容

        // 获取除当前教程外的其他教程
        const otherTutorials = Object.entries(tutorials)
            .filter(([id]) => id !== currentId)
            .map(([id, tutorial]) => ({ id, ...tutorial }))
            .slice(0, 3); // 最多显示3个相关教程

        // 创建相关教程卡片
        otherTutorials.forEach(tutorial => {
            const card = document.createElement('article');
            card.className = 'tutorial-card';

            // 根据教程类别获取相应的图标和颜色
            const { icon, bgColor, title } = getTutorialVisuals(tutorial.category, tutorial.title);

            card.innerHTML = `
                <div class="tutorial-image">
                    <div class="tutorial-icon-placeholder" style="background-color: ${bgColor}">
                        <i class="${icon}"></i>
                        <span class="tutorial-title-overlay">${title}</span>
                    </div>
                    <span class="difficulty ${getDifficultyClass(tutorial.level)}">${tutorial.level}</span>
                </div>
                <div class="tutorial-content">
                    <h3>${tutorial.title}</h3>
                    <p>${tutorial.description || '深入学习' + tutorial.title + '的核心概念和实践技巧。'}</p>
                    <div class="tutorial-meta">
                        <span><i class="far fa-clock"></i> ${tutorial.duration}</span>
                        <span><i class="far fa-user"></i> ${tutorial.level}</span>
                    </div>
                    <a href="tutorial-detail.html?id=${tutorial.id}" class="btn btn-outline">开始学习</a>
                </div>
            `;
            relatedTutorials.appendChild(card);
        });
    }

    // 获取教程视觉元素（图标、颜色和显示标题）
    function getTutorialVisuals(category, fullTitle) {
        // 提取短标题用于显示在图标上
        let shortTitle = getShortTitle(fullTitle);

        // 根据类别设置不同的图标和背景色
        const visuals = {
            '入门基础': {
                icon: 'fas fa-comments',
                bgColor: '#4caf50',
                title: shortTitle
            },
            '进阶': {
                icon: 'fas fa-cogs',
                bgColor: '#ff9800',
                title: shortTitle
            },
            '高级': {
                icon: 'fas fa-rocket',
                bgColor: '#f44336',
                title: shortTitle
            },
            '专题': {
                icon: 'fas fa-briefcase',
                bgColor: '#3f51b5',
                title: shortTitle
            }
        };

        // 针对特定标题的定制图标
        if (fullTitle.includes('优化') || fullTitle.includes('调试')) {
            return { icon: 'fas fa-sliders-h', bgColor: '#f44336', title: shortTitle };
        } else if (fullTitle.includes('基础概念')) {
            return { icon: 'fas fa-robot', bgColor: '#4caf50', title: '基础概念' };
        } else if (fullTitle.includes('趋势') || fullTitle.includes('未来')) {
            return { icon: 'fas fa-chart-line', bgColor: '#3f51b5', title: '发展趋势' };
        } else if (fullTitle.includes('工具')) {
            return { icon: 'fas fa-tools', bgColor: '#ff9800', title: '工具指南' };
        } else if (fullTitle.includes('实践')) {
            return { icon: 'fas fa-laptop-code', bgColor: '#4caf50', title: '实践入门' };
        }

        return visuals[category] || { icon: 'fas fa-book', bgColor: '#6b7280', title: shortTitle };
    }

    // 从完整标题中提取短标题
    function getShortTitle(fullTitle) {
        // 从标题中提取关键词作为短标题
        if (fullTitle.includes('：')) {
            // 如果标题包含冒号，取冒号后的部分作为短标题
            const parts = fullTitle.split('：');
            if (parts.length > 1) {
                return parts[1].length <= 4 ? parts[1] : parts[1].substring(0, 4);
            }
        }

        // 如果标题很短，直接使用
        if (fullTitle.length <= 4) {
            return fullTitle;
        }

        // 默认取前4个字符
        return fullTitle.substring(0, 4);
    }

    // 初始化目录导航
    function initTableOfContents() {
        const tocLinks = document.querySelectorAll('.tutorial-toc a');
        const sections = document.querySelectorAll('section[id]');

        // 点击目录项滚动到对应位置
        tocLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    const offset = 80; // 考虑固定导航栏的高度
                    const top = targetSection.offsetTop - offset;
                    window.scrollTo({
                        top,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // 滚动时更新当前目录项
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    document.querySelectorAll('.tutorial-toc li').forEach(li => {
                        li.classList.remove('active');
                    });
                    document.querySelector(`.tutorial-toc a[href="#${id}"]`)
                        ?.parentElement?.classList.add('active');
                }
            });
        }, {
            rootMargin: '-80px 0px -80% 0px'
        });

        sections.forEach(section => observer.observe(section));
    }

    // 加载教程内容
    if (tutorialId) {
        loadTutorial(tutorialId);
    } else {
        window.location.href = '/pages/tutorials.html';
    }
}); 