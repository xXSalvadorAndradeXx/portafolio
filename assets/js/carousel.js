/**
 * Carousels Module
 */
class Carousels {
    constructor() { this.init(); }

    init() {
        const swiperConfig = (selector, slidesPerView = 1, spaceBetween = 20, breakpoints = {}, autoplay = false) => {
            const el = document.querySelector(selector);
            if (!el) return;
            const config = {
                slidesPerView, spaceBetween, loop: true,
                pagination: { el: `${selector} .swiper-pagination`, clickable: true },
                speed: 600, grabCursor: true,
            };
            if (breakpoints && Object.keys(breakpoints).length) config.breakpoints = breakpoints;
            if (autoplay) config.autoplay = { delay: autoplay, disableOnInteraction: false };
            const navNext = el.querySelector('.swiper-button-next');
            const navPrev = el.querySelector('.swiper-button-prev');
            if (navNext && navPrev) {
                config.navigation = { nextEl: navNext, prevEl: navPrev };
            }
            new Swiper(el, config);
        };

        swiperConfig('.recognitions-swiper', 1, 24, { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }, 4000);
        swiperConfig('.soft-skills-swiper', 1, 20, { 480: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }, 3500);
        swiperConfig('.projects-swiper', 1, 30, {}, false);
        swiperConfig('.publications-swiper', 1, 24, { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }, 5000);
        swiperConfig('.testimonials-swiper', 1, 24, { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }, 4500);
    }
}

document.addEventListener('DOMContentLoaded', () => { new Carousels(); });