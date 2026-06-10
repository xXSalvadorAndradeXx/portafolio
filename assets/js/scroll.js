/**
 * Smooth Scroll (Lenis)
 */
class SmoothScroll {
    constructor() { this.init(); }

    init() {
        if (typeof Lenis === 'undefined') return;
        this.lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            smoothTouch: false
        });
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            this.lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time) => { this.lenis.raf(time * 1000); });
            gsap.ticker.lagSmoothing(0);
        } else {
            const animate = (time) => { this.lenis.raf(time); requestAnimationFrame(animate); };
            requestAnimationFrame(animate);
        }
        document.body.classList.add('lenis-smooth');
    }

    destroy() { if (this.lenis) this.lenis.destroy(); }
}

document.addEventListener('DOMContentLoaded', () => { window.smoothScroll = new SmoothScroll(); });