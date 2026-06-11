/**
 * Main Application
 */
class App {
    constructor() {
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onReady());
        } else {
            this.onReady();
        }
    }

    onReady() {
        i18n.init();
        this.initCursor();
        this.initParticles();
        this.initHeader();
        this.initMobileMenu();
        this.initPopups();
        this.initSkillPopups();
        this.initCounters();
        this.initMagneticButtons();
        this.initSmoothScrollLinks();
        this.initScrollReveal();
        this.initLanguageToggle();
        this.initLazyLoading();
        this.initActiveNavLink();
        this.initMigrationPopup();
    }

    initCursor() {
        const cursor = document.getElementById('cursor');
        const follower = document.getElementById('cursorFollower');
        if (!cursor || !follower) return;
        if ('ontouchstart' in window) {
            cursor.style.display = 'none';
            follower.style.display = 'none';
            document.body.style.cursor = 'auto';
            return;
        }
        let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0, followerX = 0, followerY = 0;
        document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
        const interactive = document.querySelectorAll('a, button, .magnetic, .skill-card, .project-card, .contact-card, .recognition-card, .soft-skill-card, .testimonial-card, .publication-card');
        interactive.forEach(el => {
            el.addEventListener('mouseenter', () => { cursor.classList.add('cursor--hover'); follower.classList.add('cursor-follower--hover'); });
            el.addEventListener('mouseleave', () => { cursor.classList.remove('cursor--hover'); follower.classList.remove('cursor-follower--hover'); });
        });
        const animate = () => {
            cursorX += (mouseX - cursorX) * 0.3;
            cursorY += (mouseY - cursorY) * 0.3;
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            follower.style.left = `${followerX}px`;
            follower.style.top = `${followerY}px`;
            requestAnimationFrame(animate);
        };
        animate();
    }

    initParticles() {
        const canvas = document.getElementById('particles');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animId;
        const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        window.addEventListener('resize', () => { resize(); createParticles(); });
        resize();
        class Particle {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX; this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(79, 140, 255, ${this.opacity})`;
                ctx.fill();
            }
        }
        const createParticles = () => {
            const count = Math.floor((canvas.width * canvas.height) / 15000);
            particles = Array.from({ length: count }, () => new Particle());
        };
        createParticles();
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(79, 140, 255, ${0.05 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            animId = requestAnimationFrame(animate);
        };
        animate();
    }

    initHeader() {
        const header = document.getElementById('header');
        if (!header) return;
        let ticking = false;
        const updateHeaderScroll = () => {
            const currentScroll = window.scrollY;
            const theme = document.documentElement.getAttribute('data-theme');
            if (currentScroll > 50) {
                if (theme === 'light') {
                    header.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.08)';
                    header.style.background = 'rgba(255, 255, 255, 0.9)';
                    header.style.borderColor = 'rgba(0, 0, 0, 0.08)';
                } else {
                    header.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.5)';
                    header.style.background = 'rgba(14, 14, 16, 0.85)';
                    header.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }
            } else {
                if (theme === 'light') {
                    header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.04)';
                    header.style.background = 'rgba(255, 255, 255, 0.75)';
                    header.style.borderColor = 'rgba(0, 0, 0, 0.06)';
                } else {
                    header.style.boxShadow = 'none';
                    header.style.background = 'rgba(14, 14, 16, 0.7)';
                    header.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }
            }
            ticking = false;
        };
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateHeaderScroll);
                ticking = true;
            }
        }, { passive: true });
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') updateHeaderScroll();
            });
        });
        observer.observe(document.documentElement, { attributes: true });
    }

    initMobileMenu() {
        const menuBtn = document.getElementById('menuBtn');
        const menu = document.getElementById('headerMenu');
        const overlay = document.getElementById('menuOverlay');
        if (!menuBtn || !menu) return;
        const closeMenu = () => {
            menu.classList.remove('header__menu--active');
            menuBtn.classList.remove('header__menu-btn--active');
            menuBtn.setAttribute('aria-expanded', 'false');
            if (overlay) overlay.classList.remove('header__menu-overlay--active');
            document.body.classList.remove('no-scroll');
        };
        const openMenu = () => {
            menu.classList.add('header__menu--active');
            menuBtn.classList.add('header__menu-btn--active');
            menuBtn.setAttribute('aria-expanded', 'true');
            if (overlay) overlay.classList.add('header__menu-overlay--active');
            document.body.classList.add('no-scroll');
        };
        menuBtn.addEventListener('click', () => {
            menu.classList.contains('header__menu--active') ? closeMenu() : openMenu();
        });
        if (overlay) overlay.addEventListener('click', closeMenu);
        menu.querySelectorAll('.header__link').forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('header__menu--active')) closeMenu();
        });
    }

    initPopups() {
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('popupOverlay');
        const closeBtn = document.getElementById('popupClose');
        const body = document.getElementById('popupBody');
        if (!popup || !overlay || !closeBtn || !body) return;
        const openPopup = (content) => {
            body.innerHTML = content;
            popup.classList.add('popup--active');
            popup.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
        };
        const closePopup = () => {
            popup.classList.remove('popup--active');
            popup.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('no-scroll');
        };
        overlay.addEventListener('click', closePopup);
        closeBtn.addEventListener('click', closePopup);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popup.classList.contains('popup--active')) closePopup();
        });
        document.querySelectorAll('[data-popup="diploma"]').forEach(card => {
            card.addEventListener('click', () => {
                const title = card.getAttribute('data-popup-title');
                const institution = card.getAttribute('data-popup-institution');
                const date = card.getAttribute('data-popup-date');
                openPopup(`<h3>${title}</h3><p><strong>Institución:</strong> ${institution}</p><p><strong>Fecha:</strong> ${date}</p><p style="margin-top:16px">Certificación oficial que acredita competencias avanzadas en el área correspondiente.</p>`);
            });
        });
        document.querySelectorAll('[data-popup="softskill"]').forEach(card => {
            card.addEventListener('click', () => {
                const title = card.getAttribute('data-softskill-title');
                const desc = card.getAttribute('data-softskill-desc');
                openPopup(`<h3>${title}</h3><p>${desc}</p><p style="margin-top:16px"><strong>Aplicación profesional:</strong> Esta habilidad se aplica diariamente en entornos colaborativos.</p><p style="margin-top:12px"><strong>Beneficio:</strong> Mejora la productividad y satisfacción en proyectos.</p>`);
            });
        });
        document.querySelectorAll('[data-popup="testimonial"]').forEach(card => {
            card.addEventListener('click', () => {
                const name = card.getAttribute('data-testimonial-name');
                const role = card.getAttribute('data-testimonial-role');
                const text = card.querySelector('.testimonial-card__text').textContent;
                openPopup(`<div style="text-align:center;margin-bottom:16px"><i class="fas fa-user-circle" style="font-size:4rem;opacity:0.4;color:var(--color-secondary)"></i></div><h3 style="text-align:center">${name}</h3><p style="text-align:center;color:var(--color-accent)">${role}</p><div style="text-align:center;margin:12px 0;color:#fbbf24"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div><p style="font-size:1.05rem;line-height:1.8;margin-top:16px">${text}</p><p style="margin-top:16px;color:var(--color-secondary)">Trabajar con Salvador fue una experiencia excepcional. Su profesionalismo y atención al detalle superaron nuestras expectativas.</p>`);
            });
        });
    }

    initSkillPopups() {
        const popup = document.getElementById('popup');
        const body = document.getElementById('popupBody');
        if (!popup || !body) return;
        const skillData = {
            html5: { icon: 'fab fa-html5', name: 'HTML5', desc: 'Lenguaje de marcado para estructura web semántica y accesible.', experience: 'Más de 5 años', use: 'Maquetación semántica, SEO, accesibilidad web, estructura de documentos.', level: '95%', projects: 'ePortfolio, Huerto en Mano, QuantumSprint', color: '#E34F26' },
            css3: { icon: 'fab fa-css3-alt', name: 'CSS3', desc: 'Estilos avanzados con animaciones, flexbox, grid y diseño responsive.', experience: 'Más de 5 años', use: 'Diseño responsive, animaciones, layouts complejos, temas personalizados.', level: '90%', projects: 'ePortfolio, Landing Pages, Dashboards', color: '#1572B6' },
            javascript: { icon: 'fab fa-js', name: 'JavaScript', desc: 'Programación del lado del cliente y servidor con ES6+.', experience: 'Más de 5 años', use: 'SPA, manipulación DOM, APIs, aplicaciones interactivas.', level: '92%', projects: 'VaresaAI, QuantumSprint, ePortfolio', color: '#F7DF1E' },
            typescript: { icon: 'fab fa-js', name: 'TypeScript', desc: 'JavaScript tipado para desarrollo escalable y mantenible.', experience: '3 años', use: 'Aplicaciones enterprise, tipado estático, POO avanzada.', level: '88%', projects: 'QuantumSprint, APIs REST', color: '#3178C6' },
            react: { icon: 'fab fa-react', name: 'React', desc: 'Biblioteca para interfaces de usuario interactivas y componentes reutilizables.', experience: '4 años', use: 'SPA, dashboards, aplicaciones interactivas, estado global.', level: '90%', projects: 'Huerto en Mano, Dashboards, ePortfolio', color: '#61DAFB' },
            nestjs: { icon: 'fas fa-server', name: 'NestJS', desc: 'Framework Node.js progresivo para aplicaciones backend escalables.', experience: '2 años', use: 'APIs REST, microservicios, arquitectura modular.', level: '82%', projects: 'QuantumSprint, APIs empresariales', color: '#E0234E' },
            nodejs: { icon: 'fab fa-node-js', name: 'Node.js', desc: 'Entorno de ejecución JavaScript del lado del servidor.', experience: '4 años', use: 'Backend, APIs, servicios web, scripting, automatización.', level: '90%', projects: 'Huerto en Mano, VaresaAI, APIs REST', color: '#339933' },
            php: { icon: 'fab fa-php', name: 'PHP', desc: 'Lenguaje de scripting para desarrollo web del lado del servidor.', experience: '3 años', use: 'Backend tradicional, CMS, Laravel, APIs.', level: '78%', projects: 'Sistemas legacy, Laravel apps', color: '#777BB4' },
            python: { icon: 'fab fa-python', name: 'Python', desc: 'Lenguaje versátil para desarrollo web, IA y automatización.', experience: '3 años', use: 'Machine Learning, Flask, automatización, scripting.', level: '85%', projects: 'VaresaAI, Scripts automatizados', color: '#3776AB' },
            mysql: { icon: 'fas fa-database', name: 'MySQL', desc: 'Sistema de gestión de bases de datos relacional.', experience: '4 años', use: 'Modelado de datos, consultas complejas, optimización.', level: '88%', projects: 'QuantumSprint, Sistemas empresariales', color: '#4479A1' },
            docker: { icon: 'fab fa-docker', name: 'Docker', desc: 'Contenedores para despliegue y desarrollo consistente.', experience: '2 años', use: 'CI/CD, entornos aislados, microservicios.', level: '80%', projects: 'Infraestructura DevOps', color: '#2496ED' },
            git: { icon: 'fab fa-git-alt', name: 'Git', desc: 'Control de versiones distribuido para trabajo colaborativo.', experience: '5 años', use: 'Control de versiones, branching, code review, CI/CD.', level: '95%', projects: 'Todos los proyectos', color: '#F05032' }
        };
        document.querySelectorAll('.skill-card[data-skill]').forEach(card => {
            card.addEventListener('click', () => {
                const skillKey = card.getAttribute('data-skill');
                const data = skillData[skillKey];
                if (!data) return;
                const content = `
                    <div class="popup-skill__icon"><i class="${data.icon}" style="color:${data.color}"></i></div>
                    <h3 style="text-align:center">${data.name}</h3>
                    <p style="text-align:center;color:var(--color-secondary)">${data.desc}</p>
                    <div class="popup-skill__level-bar"><div class="popup-skill__level-fill" style="width:${data.level}"></div></div>
                    <p style="text-align:center;font-weight:600;color:var(--color-accent)">${data.level}</p>
                    <p style="margin-top:16px"><strong>Experiencia:</strong> ${data.experience}</p>
                    <p><strong>Casos de uso:</strong> ${data.use}</p>
                    <p><strong>Proyectos relacionados:</strong> ${data.projects}</p>
                `;
                body.innerHTML = content;
                popup.classList.add('popup--active');
                popup.setAttribute('aria-hidden', 'false');
                document.body.classList.add('no-scroll');
            });
        });
    }

    initCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-counter'));
                    const duration = 2000;
                    const startTime = performance.now();
                    const update = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        counter.textContent = Math.round(target * eased);
                        if (progress < 1) requestAnimationFrame(update);
                    };
                    requestAnimationFrame(update);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(c => observer.observe(c));
    }

    initMagneticButtons() {
        document.querySelectorAll('.magnetic').forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                requestAnimationFrame(() => {
                    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
                });
            });
            el.addEventListener('mouseleave', () => {
                requestAnimationFrame(() => { el.style.transform = 'translate(0, 0)'; });
            });
        });
    }

    initSmoothScrollLinks() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const headerHeight = document.getElementById('header')?.offsetHeight || 80;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            });
        });
    }

    initScrollReveal() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
    }

    initLanguageToggle() {
        const btn = document.getElementById('languageToggle');
        if (!btn) return;
        btn.addEventListener('click', () => {
            i18n.toggle();
            const label = btn.querySelector('.lang-label');
            label.style.transform = 'scale(0.8)';
            requestAnimationFrame(() => {
                label.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
                label.style.transform = 'scale(1)';
            });
        });
    }

    initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            document.querySelectorAll('img[data-src]').forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        } else {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                });
            });
            document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
        }
    }

    initActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.header__link');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
                    });
                }
            });
        }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
        sections.forEach(section => observer.observe(section));
    }

    initMigrationPopup() {
    const migrationPopup = document.getElementById('popupMigration');
    const closeBtn = document.getElementById('popupMigrationClose');
    const acceptBtn = document.getElementById('popupMigrationAccept');
    const overlay = migrationPopup?.querySelector('.popup-migration__overlay');
    
    if (!migrationPopup) return;
    
    // SIEMPRE mostrar
    const closeMigrationPopup = () => {
        // Limpiar estilos inline primero
        migrationPopup.style.opacity = '';
        migrationPopup.style.visibility = '';
        migrationPopup.style.pointerEvents = '';
        // Luego agregar la clase
        migrationPopup.classList.add('popup--hidden');
        document.body.classList.remove('no-scroll');
    };
    
    const showMigrationPopup = () => {
        // Verificar que no haya otro popup abierto
        const otherPopup = document.getElementById('popup');
        if (otherPopup && otherPopup.classList.contains('popup--active')) {
            setTimeout(showMigrationPopup, 500);
            return;
        }
        // Remover la clase hidden y limpiar estilos inline residuales
        migrationPopup.classList.remove('popup--hidden');
        migrationPopup.style.opacity = '';
        migrationPopup.style.visibility = '';
        migrationPopup.style.pointerEvents = '';
        document.body.classList.add('no-scroll');
    };
    
    // Mostrar después del loader
    const loader = document.getElementById('loader');
    if (loader) {
        if (loader.classList.contains('loader--hidden')) {
            setTimeout(showMigrationPopup, 500);
        } else {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.target.classList.contains('loader--hidden')) {
                        setTimeout(showMigrationPopup, 500);
                        observer.disconnect();
                    }
                });
            });
            observer.observe(loader, { attributes: true, attributeFilter: ['class'] });
        }
    } else {
        setTimeout(showMigrationPopup, 800);
    }
    
    // Event listeners para cerrar
    closeBtn?.addEventListener('click', closeMigrationPopup);
    acceptBtn?.addEventListener('click', closeMigrationPopup);
    overlay?.addEventListener('click', closeMigrationPopup);
    
    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !migrationPopup.classList.contains('popup--hidden')) {
            closeMigrationPopup();
        }
    });
    
    // Cerrar al hacer clic en enlaces del popup
    migrationPopup.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMigrationPopup, 300);
        });
    });
}
}

const app = new App();