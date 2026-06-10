/**
 * Loader - Siempre se ejecuta
 */
class Loader {
    constructor() {
        this.loader = document.getElementById('loader');
        this.init();
    }

    init() {
        if (!this.loader) return;
        // Forzar visibilidad del loader siempre
        this.loader.classList.remove('loader--hidden');
        this.loader.style.opacity = '1';
        this.loader.style.visibility = 'visible';
        this.startAnimation();
    }

    startAnimation() {
        const tl = gsap.timeline({
            onComplete: () => this.hideLoader()
        });

        tl.to('.piece--1', { opacity: 1, scale: 1, rotation: 0, duration: 0.35, ease: 'back.out(1.7)' })
          .to('.piece--2', { opacity: 1, scale: 1.5, rotation: 90, duration: 0.35, ease: 'back.out(1.7)' }, '-=0.18')
          .to('.piece--3', { opacity: 1, scale: 1, rotation: 180, duration: 0.35, ease: 'back.out(1.7)' }, '-=0.18')
          .to('.piece--4', { opacity: 1, scale: 1.8, rotation: 270, duration: 0.35, ease: 'back.out(1.7)' }, '-=0.18')
          .to('.piece--5', { opacity: 1, scale: 1, rotation: 360, duration: 0.35, ease: 'back.out(1.7)' }, '-=0.18')
          .to('.piece--6', { opacity: 1, scale: 1.5, rotation: 45, duration: 0.35, ease: 'back.out(1.7)' }, '-=0.18')
          .to('.piece', { scale: 0, opacity: 0, duration: 0.45, stagger: 0.04, ease: 'power2.in' })
          .to('#loaderLogo', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.25')
          .to('#loaderText', { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.25')
          .to({}, { duration: 0.6 })
          .to(['#loaderLogo', '#loaderText'], { opacity: 0, scale: 1.1, filter: 'blur(10px)', duration: 0.5, ease: 'power2.inOut' });
    }

    hideLoader() {
        gsap.to(this.loader, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
                this.loader.classList.add('loader--hidden');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => { new Loader(); });