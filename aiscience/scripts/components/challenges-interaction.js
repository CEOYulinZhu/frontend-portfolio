export class ChallengesInteraction {
    constructor() {
        this.cards = document.querySelectorAll('.challenge-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', () => this.showCaseStudy(card));
            card.addEventListener('mouseleave', () => this.hideCaseStudy(card));
        });
    }

    showCaseStudy(card) {
        const caseStudy = card.querySelector('.case-study');
        caseStudy.style.opacity = '1';
        caseStudy.style.transform = 'translateY(0)';
    }

    hideCaseStudy(card) {
        const caseStudy = card.querySelector('.case-study');
        caseStudy.style.opacity = '0';
        caseStudy.style.transform = 'translateY(10px)';
    }
} 