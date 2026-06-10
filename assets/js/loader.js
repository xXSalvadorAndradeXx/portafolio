/**
 * Premium Loading Screen
 * Creates an elegant loading animation with GSAP
 */
class Loader {
    constructor() {
        this.loader = document.getElementById('loader');
        this.pieces = document.querySelectorAll('.piece');
        this.logo = document.getElementById('loaderLogo');
        this.text = document.getElementById('loaderText');
        
        this.init();
    }

    init() {
        if (!this.loader) return;
        
        // Check if loader has already been shown
        if (sessionStorage.getItem('loaderShown')) {
            this.hideLoader();
            return;
        }
        
        this.startAnimation();
    }

    startAnimation() {
        const tl = gsap.timeline({
            onComplete: () => {
                this.hideLoader();
                sessionStorage.setItem('loaderShown', 'true');
            }
        });

        // Phase 1: Pieces appear and assemble
        tl.to('.piece--1', {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.4,
            ease: 'back.out(1.7)'
        })
        .to('.piece--2', {
            opacity: 1,
            scale: 1.5,
            rotation: 90,
            duration: 0.4,
            ease: 'back.out(1.7)'
        }, '-=0.2')
        .to('.piece--3', {
            opacity: 1,
            scale: 1,
            rotation: 180,
            duration: 0.4,
            ease: 'back.out(1.7)'
        }, '-=0.2')
        .to('.piece--4', {
            opacity: 1,
            scale: 1.8,
            rotation: 270,
            duration: 0.4,
            ease: 'back.out(1.7)'
        }, '-=0.2')
        .to('.piece--5', {
            opacity: 1,
            scale: 1,
            rotation: 360,
            duration: 0.4,
            ease: 'back.out(1.7)'
        }, '-=0.2')
        .to('.piece--6', {
            opacity: 1,
            scale: 1.5,
            rotation: 45,
            duration: 0.4,
            ease: 'back.out(1.7)'
        }, '-=0.2')

        // Phase 2: Pieces merge and form logo
        .to('.piece', {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.in'
        })
        
        // Phase 3: Logo appears
        .to(this.logo, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.3')
        
        // Phase 4: Text appears
        .to(this.text, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.3')

        // Phase 5: Hold
        .to({}, { duration: 0.8 })

        // Phase 6: Everything fades out
        .to([this.logo, this.text], {
            opacity: 0,
            scale: 1.1,
            filter: 'blur(10px)',
            duration: 0.6,
            ease: 'power2.inOut'
        });
    }

    hideLoader() {
        gsap.to(this.loader, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: () => {
                this.loader.classList.add('loader--hidden');
                // Trigger entrance animations for hero
                this.triggerHeroAnimations();
            }
        });
    }

    triggerHeroAnimations() {
        const heroElements = document.querySelectorAll('.hero [data-animate]');
        
        gsap.fromTo(heroElements, {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            delay: 0.2
        });
    }
}

// Initialize loader
document.addEventListener('DOMContentLoaded', () => {
    const loader = new Loader();
});