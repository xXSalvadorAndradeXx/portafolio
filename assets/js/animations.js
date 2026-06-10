/**
 * Advanced Animations Module
 * Handles GSAP animations, scroll triggers, and visual effects
 */
class Animations {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollTriggers();
        this.initParallax();
        this.initSkillBars();
        this.initTextReveal();
    }

    /**
     * Initialize GSAP ScrollTrigger animations
     */
    initScrollTriggers() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            console.warn('GSAP or ScrollTrigger not loaded');
            return;
        }

        gsap.registerPlugin(ScrollTrigger);

        // Parallax sections
        document.querySelectorAll('.section').forEach((section, index) => {
            gsap.fromTo(section, {
                opacity: 0.6,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    end: 'top 50%',
                    scrub: 1
                }
            });
        });

        // Stagger children in skills grid
        gsap.from('.skills__grid .skill-card', {
            scrollTrigger: {
                trigger: '.skills__grid',
                start: 'top 80%'
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            stagger: 0.05,
            ease: 'back.out(1.4)'
        });

        // Hero elements entrance
        gsap.from('.hero__badge', {
            opacity: 0,
            y: -20,
            duration: 0.8,
            delay: 0.3,
            ease: 'power2.out'
        });

        // Stats counter animation is handled by Intersection Observer
    }

    /**
     * Parallax effect on elements
     */
    initParallax() {
        document.querySelectorAll('[data-parallax]').forEach(el => {
            const speed = el.getAttribute('data-parallax') || 0.1;
            
            const updateParallax = () => {
                const rect = el.getBoundingClientRect();
                const scrolled = window.scrollY;
                const offset = rect.top + scrolled;
                const parallax = (scrolled - offset) * speed;
                
                requestAnimationFrame(() => {
                    el.style.transform = `translateY(${parallax}px)`;
                });
            };
            
            window.addEventListener('scroll', updateParallax, { passive: true });
        });
    }

    /**
     * Animate skill bars when they come into view
     */
    initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-card__bar-fill');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.getAttribute('data-width');
                    
                    // Animate the bar
                    requestAnimationFrame(() => {
                        bar.style.width = width;
                    });
                    
                    observer.unobserve(bar);
                }
            });
        }, {
            threshold: 0.3
        });
        
        skillBars.forEach(bar => observer.observe(bar));
    }

    /**
     * Text reveal animation
     */
    initTextReveal() {
        document.querySelectorAll('.text-reveal').forEach(el => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        el.classList.add('is-visible');
                        observer.unobserve(el);
                    }
                });
            }, {
                threshold: 0.5
            });
            
            observer.observe(el);
        });
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    new Animations();
});