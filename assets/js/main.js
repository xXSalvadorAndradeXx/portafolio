/**
 * Main Application
 * Initializes all modules and handles global functionality
 */
class App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM content to be loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onReady());
        } else {
            this.onReady();
        }
    }

    onReady() {
        // Initialize modules
        this.initCursor();
        this.initParticles();
        this.initHeader();
        this.initMobileMenu();
        this.initPopups();
        this.initCounters();
        this.initMagneticButtons();
        this.initSmoothScroll();
        this.initScrollReveal();
        this.initLanguageToggle();
        this.initLazyLoading();
        
        console.log('✨ Portfolio initialized successfully');
    }

    /**
     * Custom cursor
     */
    initCursor() {
        const cursor = document.getElementById('cursor');
        const follower = document.getElementById('cursorFollower');
        
        if (!cursor || !follower) return;
        
        // Check if it's a touch device
        if ('ontouchstart' in window) {
            cursor.style.display = 'none';
            follower.style.display = 'none';
            document.body.style.cursor = 'auto';
            return;
        }
        
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let followerX = 0;
        let followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Hover effect on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .magnetic, .skill-card, .project-card, .contact-card, .recognition-card, .soft-skill-card, .testimonial-card');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor--hover');
                follower.classList.add('cursor-follower--hover');
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor--hover');
                follower.classList.remove('cursor-follower--hover');
            });
        });
        
        // Animation loop using requestAnimationFrame
        const animateCursor = () => {
            // Smooth cursor movement
            cursorX += (mouseX - cursorX) * 0.3;
            cursorY += (mouseY - cursorY) * 0.3;
            
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            
            follower.style.left = `${followerX}px`;
            follower.style.top = `${followerY}px`;
            
            requestAnimationFrame(animateCursor);
        };
        
        animateCursor();
    }

    /**
     * Particles background
     */
    initParticles() {
        const canvas = document.getElementById('particles');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', () => {
            resize();
            createParticles();
        });
        
        resize();
        
        class Particle {
            constructor() {
                this.reset();
            }
            
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(79, 140, 255, ${this.opacity})`;
                ctx.fill();
            }
        }
        
        const createParticles = () => {
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };
        
        createParticles();
        
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(79, 140, 255, ${0.05 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            
            animationId = requestAnimationFrame(animate);
        };
        
        animate();
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        });
    }

    /**
     * Header scroll behavior
     */
    initHeader() {
        const header = document.getElementById('header');
        if (!header) return;
        
        let lastScroll = 0;
        let scrollTimeout;
        
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            
            if (currentScroll > 100) {
                if (currentScroll > lastScroll) {
                    // Scrolling down
                    header.classList.add('header--hidden');
                } else {
                    // Scrolling up
                    header.classList.remove('header--hidden');
                }
            } else {
                header.classList.remove('header--hidden');
            }
            
            lastScroll = currentScroll;
            
            // Debounce scroll handler
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (currentScroll < 100) {
                    header.classList.remove('header--hidden');
                }
            }, 100);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    /**
     * Mobile menu
     */
    initMobileMenu() {
        const menuBtn = document.getElementById('menuBtn');
        const menu = document.querySelector('.header__menu');
        const links = document.querySelectorAll('.header__link');
        
        if (!menuBtn || !menu) return;
        
        const toggleMenu = () => {
            const isOpen = menu.classList.contains('header__menu--active');
            
            if (isOpen) {
                menu.classList.remove('header__menu--active');
                menuBtn.classList.remove('header__menu-btn--active');
                menuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            } else {
                menu.classList.add('header__menu--active');
                menuBtn.classList.add('header__menu-btn--active');
                menuBtn.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            }
        };
        
        menuBtn.addEventListener('click', toggleMenu);
        
        // Close menu when clicking a link
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('header__menu--active');
                menuBtn.classList.remove('header__menu-btn--active');
                menuBtn.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when pressing Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('header__menu--active')) {
                toggleMenu();
            }
        });
    }

    /**
     * Popup functionality
     */
    initPopups() {
        const popup = document.getElementById('popup');
        const popupOverlay = document.getElementById('popupOverlay');
        const popupClose = document.getElementById('popupClose');
        const popupBody = document.getElementById('popupBody');
        
        if (!popup || !popupOverlay || !popupClose || !popupBody) return;
        
        // Open popup
        const openPopup = (content) => {
            popupBody.innerHTML = content;
            popup.classList.add('popup--active');
            popup.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        };
        
        // Close popup
        const closePopup = () => {
            popup.classList.remove('popup--active');
            popup.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        };
        
        popupOverlay.addEventListener('click', closePopup);
        popupClose.addEventListener('click', closePopup);
        
        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popup.classList.contains('popup--active')) {
                closePopup();
            }
        });
        
        // Diploma popups
        document.querySelectorAll('[data-diploma]').forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('.recognition-card__title').textContent;
                const institution = card.querySelector('.recognition-card__institution').textContent;
                const date = card.querySelector('.recognition-card__date').textContent;
                
                const content = `
                    <h3>${title}</h3>
                    <p><strong>Institución:</strong> ${institution}</p>
                    <p><strong>Fecha:</strong> ${date}</p>
                    <p style="margin-top: 16px;">Certificación oficial que acredita la finalización exitosa del programa de formación, demostrando competencias avanzadas en el área correspondiente.</p>
                `;
                
                openPopup(content);
            });
        });
        
        // Soft skill popups
        document.querySelectorAll('[data-soft-skill]').forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('.soft-skill-card__title').textContent;
                const desc = card.querySelector('.soft-skill-card__desc').textContent;
                
                const content = `
                    <h3>${title}</h3>
                    <p>${desc}</p>
                    <p style="margin-top: 16px;"><strong>Aplicación profesional:</strong></p>
                    <p>Esta habilidad se aplica diariamente en entornos de desarrollo colaborativo, permitiendo una comunicación efectiva con stakeholders, equipos multidisciplinarios y clientes.</p>
                    <p style="margin-top: 12px;"><strong>Beneficio clave:</strong></p>
                    <p>Mejora significativa en la productividad del equipo, reducción de malentendidos y mayor satisfacción en los proyectos.</p>
                `;
                
                openPopup(content);
            });
        });
        
        // Testimonial popups
        document.querySelectorAll('[data-testimonial]').forEach(card => {
            card.addEventListener('click', () => {
                const name = card.querySelector('.testimonial-card__name').textContent;
                const role = card.querySelector('.testimonial-card__role').textContent;
                const text = card.querySelector('.testimonial-card__text').textContent;
                
                const content = `
                    <div style="text-align: center; margin-bottom: 20px;">
                        <i class="fas fa-user-circle" style="font-size: 5rem; color: var(--color-secondary); opacity: 0.4;"></i>
                    </div>
                    <h3 style="text-align: center;">${name}</h3>
                    <p style="text-align: center; color: var(--color-accent);">${role}</p>
                    <div style="text-align: center; margin: 16px 0; color: #fbbf24;">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p style="font-size: 1.1rem; line-height: 1.8; margin-top: 20px;">"${text}"</p>
                    <p style="margin-top: 20px; color: var(--color-secondary);">Trabajar con Salvador fue una experiencia excepcional. Su profesionalismo, atención al detalle y capacidad para entender las necesidades del proyecto superaron nuestras expectativas. Recomiendo ampliamente sus servicios.</p>
                `;
                
                openPopup(content);
            });
        });
    }

    /**
     * Number counter animation
     */
    initCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-counter'));
            const duration = 2000;
            const startTime = performance.now();
            
            const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(target * eased);
                
                counter.textContent = current;
                
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            };
            
            requestAnimationFrame(update);
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    }

    /**
     * Magnetic button effect
     */
    initMagneticButtons() {
        const magneticElements = document.querySelectorAll('.magnetic');
        
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const strength = 0.15;
                const moveX = x * strength;
                const moveY = y * strength;
                
                requestAnimationFrame(() => {
                    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
                });
            });
            
            el.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => {
                    el.style.transform = 'translate(0, 0)';
                });
            });
        });
    }

    /**
     * Smooth scroll for anchor links
     */
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                
                if (target) {
                    e.preventDefault();
                    
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Scroll reveal using Intersection Observer
     */
    initScrollReveal() {
        const revealElements = document.querySelectorAll('[data-animate]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    // Don't unobserve stagger containers
                    if (entry.target.getAttribute('data-animate') !== 'stagger') {
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => observer.observe(el));
    }

    /**
     * Language toggle
     */
    initLanguageToggle() {
        const langToggle = document.getElementById('languageToggle');
        const langLabel = langToggle?.querySelector('.lang-label');
        
        if (!langToggle || !langLabel) return;
        
        let currentLang = 'ES';
        
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'ES' ? 'EN' : 'ES';
            langLabel.textContent = currentLang;
            
            // Add animation
            langLabel.style.transform = 'scale(0.8)';
            requestAnimationFrame(() => {
                langLabel.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
                langLabel.style.transform = 'scale(1)';
            });
            
            // Here you would implement actual language switching
            console.log(`Language changed to: ${currentLang}`);
        });
    }

    /**
     * Lazy loading for images
     */
    initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports lazy loading natively
            document.querySelectorAll('img[data-src]').forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        } else {
            // Fallback using Intersection Observer
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }
}

// Initialize application
const app = new App();