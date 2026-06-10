/**
 * Carousel Module
 * Initializes all Swiper carousels with premium configurations
 */
class Carousels {
    constructor() {
        this.init();
    }

    init() {
        this.initRecognitionsCarousel();
        this.initSoftSkillsCarousel();
        this.initProjectsCarousel();
        this.initPublicationsCarousel();
        this.initTestimonialsCarousel();
    }

    /**
     * Recognitions carousel
     */
    initRecognitionsCarousel() {
        new Swiper('.recognitions-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.recognitions-swiper .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.recognitions-swiper .swiper-button-next',
                prevEl: '.recognitions-swiper .swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            speed: 600,
            grabCursor: true,
        });
    }

    /**
     * Soft skills carousel
     */
    initSoftSkillsCarousel() {
        new Swiper('.soft-skills-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.soft-skills-swiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
            speed: 500,
            grabCursor: true,
        });
    }

    /**
     * Projects carousel
     */
    initProjectsCarousel() {
        new Swiper('.projects-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.projects-swiper .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.projects-swiper .swiper-button-next',
                prevEl: '.projects-swiper .swiper-button-prev',
            },
            speed: 700,
            grabCursor: true,
            effect: 'slide',
        });
    }

    /**
     * Publications carousel
     */
    initPublicationsCarousel() {
        new Swiper('.publications-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.publications-swiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            speed: 600,
            grabCursor: true,
        });
    }

    /**
     * Testimonials carousel
     */
    initTestimonialsCarousel() {
        new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.testimonials-swiper .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            speed: 600,
            grabCursor: true,
        });
    }
}

// Initialize carousels
document.addEventListener('DOMContentLoaded', () => {
    new Carousels();
});