/**
 * Smooth Scroll Module
 * Implements Lenis smooth scrolling with premium configuration
 */
class SmoothScroll {
    constructor() {
        this.lenis = null;
        this.init();
    }

    init() {
        if (typeof Lenis === 'undefined') {
            console.warn('Lenis not loaded, using native scroll');
            return;
        }

        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        // Integrate with GSAP ScrollTrigger
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            this.lenis.on('scroll', ScrollTrigger.update);
            
            gsap.ticker.add((time) => {
                this.lenis.raf(time * 1000);
            });
            
            gsap.ticker.lagSmoothing(0);
        } else {
            // Fallback animation frame
            const animate = (time) => {
                this.lenis.raf(time);
                requestAnimationFrame(animate);
            };
            
            requestAnimationFrame(animate);
        }

        // Add class to body for cursor handling
        document.body.classList.add('lenis-smooth');
    }

    /**
     * Scroll to a specific element
     */
    scrollTo(target, options = {}) {
        if (this.lenis) {
            this.lenis.scrollTo(target, {
                offset: options.offset || 0,
                duration: options.duration || 1.5,
                easing: options.easing || ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
            });
        } else {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

    /**
     * Stop the smooth scroll
     */
    destroy() {
        if (this.lenis) {
            this.lenis.destroy();
        }
    }
}

// Initialize smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    window.smoothScroll = new SmoothScroll();
});