/**
 * Animations Module
 */
class Animations {
    constructor() {
        this.init();
    }

    init() {
        this.initSkillBars();
        this.initParallax();
    }

    initSkillBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.getAttribute('data-width');
                    requestAnimationFrame(() => { bar.style.width = width; });
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.3 });
        document.querySelectorAll('.skill-card__bar-fill').forEach(bar => observer.observe(bar));
    }

    initParallax() {
        document.querySelectorAll('[data-parallax]').forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
            const update = () => {
                const rect = el.getBoundingClientRect();
                const offset = rect.top + window.scrollY;
                const parallax = (window.scrollY - offset) * speed;
                requestAnimationFrame(() => { el.style.transform = `translateY(${parallax}px)`; });
            };
            window.addEventListener('scroll', update, { passive: true });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => { new Animations(); });