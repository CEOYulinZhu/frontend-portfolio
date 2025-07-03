class WishWall {
    constructor() {
        this.wishes = [];
        this.selectedStyle = 'style1';
        this.initElements();
        this.bindEvents();
        this.loadWishes();
    }

    initElements() {
        this.form = document.getElementById('wishForm');
        this.authorInput = document.getElementById('wishAuthor');
        this.contentInput = document.getElementById('wishContent');
        this.styleOptions = document.querySelectorAll('.style-option');
        this.wishCards = document.querySelector('.wish-cards');
    }

    bindEvents() {
        // 表单提交
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.addWish();
        });

        // 样式选择
        this.styleOptions.forEach(option => {
            option.addEventListener('click', () => {
                this.styleOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                this.selectedStyle = option.dataset.style;
            });
        });

        // 卡片点击动画
        this.wishCards.addEventListener('click', (e) => {
            const card = e.target.closest('.wish-card');
            if (card) {
                this.animateCard(card);
            }
        });
    }

    loadWishes() {
        // 从localStorage加载祝福
        const savedWishes = localStorage.getItem('wishes');
        if (savedWishes) {
            this.wishes = JSON.parse(savedWishes);
        } else {
            // 默认祝福
            this.wishes = [
                {
                    author: '小明',
                    content: '愿新年万事如意，阖家幸福安康！',
                    style: 'style1'
                },
                {
                    author: '小红',
                    content: '祝愿大家新春快乐，事业蒸蒸日上！',
                    style: 'style2'
                },
                {
                    author: '小华',
                    content: '愿我们的生活像汤圆一样甜美圆满！',
                    style: 'style3'
                }
            ];
            this.saveWishes();
        }
        this.renderWishes();
    }

    addWish() {
        const author = this.authorInput.value.trim();
        const content = this.contentInput.value.trim();

        if (!author || !content) return;

        const wish = {
            author,
            content,
            style: this.selectedStyle
        };

        this.wishes.unshift(wish);
        this.saveWishes();
        this.renderWishes();
        this.form.reset();

        // 添加新卡片的动画
        const newCard = this.wishCards.firstElementChild;
        if (newCard) {
            newCard.style.opacity = '0';
            newCard.style.transform = 'translateY(20px)';
            setTimeout(() => {
                newCard.style.opacity = '1';
                newCard.style.transform = 'translateY(0)';
            }, 10);
        }
    }

    saveWishes() {
        localStorage.setItem('wishes', JSON.stringify(this.wishes));
    }

    renderWishes() {
        this.wishCards.innerHTML = this.wishes.map(wish => `
            <div class="wish-card ${wish.style}" style="transition: all 0.3s ease">
                <div class="wish-content">${wish.content}</div>
                <div class="wish-author">—— ${wish.author}</div>
            </div>
        `).join('');
    }

    animateCard(card) {
        // 添加点击动画
        card.style.transform = 'scale(0.95) rotate(-1deg)';
        setTimeout(() => {
            card.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    }
}

// 当DOM加载完成后初始化祈福墙
document.addEventListener('DOMContentLoaded', () => {
    new WishWall();
}); 