// ==============================================
// VARIABLES GLOBALES Y CONFIGURACIÓN INICIAL
// ==============================================
let currentLanguage = 'es';
const languageBtn = document.getElementById('languageBtn');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('mainNav');
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

// ==============================================
// ANIMACIÓN DE CARGA LEGO
// ==============================================
document.addEventListener("DOMContentLoaded", function() {
    // Simular tiempo de carga
    setTimeout(function() {
        document.querySelector('.lego-construction').classList.add('hide');
        setTimeout(function() {
            document.querySelector('.lego-construction').style.display = 'none';
        }, 1500);
    }, 3500);
    
    // Inicializar componentes
    initNavigation();
    initTheme();
    handleResize();
    updateProjectsDisplay();
    initContactForm();
});

// ==============================================
// NAVEGACIÓN PRINCIPAL
// ==============================================
function initNavigation() {
    // Menú móvil
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            // Marcar como activo
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Resaltar enlace activo según la sección visible
    window.addEventListener('scroll', highlightNavLink);
}

function highlightNavLink() {
    const sections = document.querySelectorAll('section[id]');
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.add('active');
        } else {
            document.querySelector('.nav-link[href*=' + sectionId + ']')?.classList.remove('active');
        }
    });
}

// ==============================================
// CAMBIO DE IDIOMA
// ==============================================
languageBtn.addEventListener('click', function() {
    this.classList.remove('pulse');
    this.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        this.style.transform = 'scale(1.05)';
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        updateLanguage();
        
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            this.classList.add('pulse');
        }, 200);
    }, 100);
});

function updateLanguage() {
    const btnText = languageBtn.querySelector('span');
    btnText.textContent = currentLanguage === 'es' ? 'English' : 'Español';
    
    document.querySelectorAll('[data-es], [data-en]').forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = element.getAttribute(`data-${currentLanguage}`);
        } else {
            const translatedText = element.getAttribute(`data-${currentLanguage}`);
            if (translatedText) {
                element.innerHTML = translatedText;
            }
        }
    });
    
    document.documentElement.lang = currentLanguage;
    document.title = currentLanguage === 'es' ? 'Salvador Andrade | Desarrollador Full-Stack' : 'Salvador Andrade | Full-Stack Developer';
}

// ==============================================
// MODO OSCURO / CLARO
// ==============================================
function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localStorageTheme = localStorage.getItem('theme');
    
    if (localStorageTheme === 'dark' || (!localStorageTheme && prefersDark)) {
        enableDarkMode();
    }
    
    themeBtn.addEventListener('click', toggleDarkMode);
}

function toggleDarkMode() {
    if (body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

function enableDarkMode() {
    body.classList.add('dark-mode');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    themeBtn.title = 'Cambiar a modo claro';
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    themeBtn.title = 'Cambiar a modo oscuro';
    localStorage.setItem('theme', 'light');
}

// ==============================================
// CARRUSEL DE HABILIDADES BLANDAS
// ==============================================
let currentSkillIndex = 0;

function moveSkills(direction) {
    const container = document.querySelector('.skills-container-content');
    const cards = container.children;
    const cardWidth = cards[0].offsetWidth + 25; // Ancho + gap
    
    if (direction === 'left') {
        currentSkillIndex = Math.max(0, currentSkillIndex - 1);
    } else {
        currentSkillIndex = Math.min(cards.length - 1, currentSkillIndex + 1);
    }
    
    container.scrollTo({
        left: currentSkillIndex * cardWidth,
        behavior: 'smooth'
    });
}

// ==============================================
// CARRUSEL DE PROYECTOS
// ==============================================
let currentProjectIndex = 0;

function updateProjectsDisplay() {
    const track = document.getElementById('projectsTrack');
    const cards = document.querySelectorAll('.project-card');
    if (!track || cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth + 30;
    const maxScroll = track.scrollWidth - track.clientWidth;
    
    document.querySelector('.carousel-btn.prev').style.opacity = currentProjectIndex === 0 ? '0.5' : '1';
    document.querySelector('.carousel-btn.next').style.opacity = currentProjectIndex * cardWidth >= maxScroll ? '0.5' : '1';
}

function moveProjects(direction) {
    const track = document.getElementById('projectsTrack');
    const cards = document.querySelectorAll('.project-card');
    if (!track || cards.length === 0) return;
    
    const cardWidth = cards[0].offsetWidth + 30;
    
    if (direction === -1) {
        currentProjectIndex = Math.max(0, currentProjectIndex - 1);
    } else {
        currentProjectIndex = Math.min(Math.floor((track.scrollWidth - track.clientWidth) / cardWidth), currentProjectIndex + 1);
    }
    
    track.scrollTo({
        left: currentProjectIndex * cardWidth,
        behavior: 'smooth'
    });
    
    setTimeout(updateProjectsDisplay, 500);
}

// ==============================================
// MODAL DE RECONOCIMIENTOS
// ==============================================
function reconocimientosOpenModal(imageSrc, description) {
    document.getElementById('reconocimientos-modal-image').src = imageSrc;
    document.getElementById('reconocimientos-modal-description').innerText = description;
    document.getElementById('reconocimientos-modal').classList.add('active');
}

function reconocimientosCloseModal() {
    document.getElementById('reconocimientos-modal').classList.remove('active');
}

// ==============================================
// MODAL DE TESTIMONIOS
// ==============================================
const testimonials = [
    { id: 1, name: "Victor Rivera", avatar: "/testimonios/victor.jpg", date: "Junio 2024", text: "Excelente profesional. Su trabajo en el desarrollo de nuestro sistema legal fue fundamental para optimizar nuestros procesos. Siempre atento a los detalles y con soluciones innovadoras." },
    { id: 2, name: "Maria Salgado", avatar: "/testimonios/mary.jpg", date: "Marzo 2024", text: "Trabajar con él fue una experiencia enriquecedora. Su capacidad para resolver problemas complejos y su dedicación al proyecto superaron todas nuestras expectativas." },
    { id: 3, name: "Juan Mejia", avatar: "/testimonios/juan.jpg", date: "Julio 2024", text: "Su enfoque metódico y su atención al detalle hicieron que nuestro proyecto fuera un éxito. Recomiendo ampliamente sus servicios profesionales." },
    { id: 4, name: "Julissa Odaly", avatar: "/testimonios/july.jpg", date: "Noviembre 2024", text: "Trabajar con él fue una experiencia enriquecedora. Su capacidad para resolver problemas complejos y su dedicación al proyecto superaron todas nuestras expectativas." },
    { id: 5, name: "Juan Ramon", avatar: "/testimonios/ramon.jpg", date: "Mayo 2024", text: "Su enfoque metódico y su atención al detalle hicieron que nuestro proyecto fuera un éxito. Recomiendo ampliamente sus servicios profesionales." }
];

function openTestimonial(id) {
    const testimonial = testimonials.find(t => t.id === id);
    if (testimonial) {
        document.getElementById('popupAvatar').src = testimonial.avatar;
        document.getElementById('popupName').textContent = testimonial.name;
        document.getElementById('popupDate').textContent = testimonial.date;
        document.getElementById('popupText').textContent = testimonial.text;
        document.getElementById('testimonialPopup').style.display = 'flex';
    }
}

function closeTestimonial() {
    document.getElementById('testimonialPopup').style.display = 'none';
}

// ==============================================
// FORMULARIO DE CONTACTO
// ==============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const messageDiv = document.getElementById('formMessage');
        messageDiv.className = 'form-message';
        messageDiv.style.display = 'none';
        
        // Validación simple
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        if (!nombre || !email || !mensaje) {
            messageDiv.textContent = currentLanguage === 'es' ? 'Por favor, complete todos los campos.' : 'Please fill in all fields.';
            messageDiv.classList.add('error');
            return;
        }
        
        // Simular envío (reemplazar con tu lógica real)
        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.textContent = currentLanguage === 'es' ? 'Enviando...' : 'Sending...';
        
        setTimeout(() => {
            messageDiv.textContent = currentLanguage === 'es' ? '¡Mensaje enviado con éxito! Te responderé pronto.' : 'Message sent successfully! I will reply soon.';
            messageDiv.classList.add('success');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = currentLanguage === 'es' ? 'Enviar Mensaje' : 'Send Message';
        }, 2000);
    });
}

// ==============================================
// FUNCIONES AUXILIARES
// ==============================================
function handleResize() {
    updateProjectsDisplay();
}

window.addEventListener('resize', handleResize);

// Cerrar modales al hacer clic fuera
window.onclick = function(event) {
    const popup = document.getElementById('testimonialPopup');
    const modal = document.getElementById('reconocimientos-modal');
    
    if (event.target === popup) {
        closeTestimonial();
    }
    if (event.target === modal) {
        reconocimientosCloseModal();
    }
}

// Frase dinámica del día
document.addEventListener("DOMContentLoaded", function() {
    const frases = [
        "El código no tiene errores, solo soluciones esperando ser descubiertas.",
        "Cada bug es una oportunidad para aprender algo nuevo.",
        "Lo más importante no es el lenguaje, sino la forma en que piensas como programador.",
        "Ser fullstack significa ser curioso y nunca dejar de aprender.",
        "Los proyectos grandes empiezan con pequeños pasos... y muchos commits.",
        "El mejor código es el que no necesitas escribir.",
        "El desarrollo web es un viaje, no un destino.",
        "Con cada línea de código, construimos el futuro, un proyecto a la vez."
    ];
    
    const diaDelMes = new Date().getDate();
    const fraseElegida = frases[diaDelMes % frases.length];
    const elementoFrase = document.querySelector(".frase-personal");
    if (elementoFrase) {
        elementoFrase.textContent = fraseElegida;
    }
});

// ==============================================
// PANTALLA DE CARGA MEJORADA (ROBUSTA Y ELEGANTE)
// ==============================================
function initLoader() {
    const loader = document.getElementById('loader');
    const progressBar = document.querySelector('.loader-progress-bar::before');
    const percentageText = document.getElementById('loaderPercentage');
    
    // Si no existe el loader, salir
    if (!loader) return;
    
    let progress = 0;
    const targetProgress = 100;
    const duration = 2500; // Duración total: 2.5 segundos
    const interval = 30; // Actualizar cada 30ms
    const steps = duration / interval;
    const increment = targetProgress / steps;
    
    // Simular progreso con pequeñas variaciones aleatorias para que sea más realista
    const progressInterval = setInterval(() => {
        // Añadir variación aleatoria entre 0.5 y 1.5 veces el incremento base
        const randomFactor = 0.5 + Math.random() * 1.0;
        progress += increment * randomFactor;
        
        // Limitar el progreso al 95% hasta que la página esté realmente cargada
        if (progress > 95) {
            progress = 95;
        }
        
        // Actualizar barra de progreso
        const progressBarElement = document.querySelector('.loader-progress-bar');
        if (progressBarElement) {
            progressBarElement.style.setProperty('--progress', `${Math.min(progress, 100)}%`);
            // Actualizar el pseudo-elemento mediante un estilo inline
            progressBarElement.style.background = `
                linear-gradient(
                    90deg,
                    #3d6afe 0%,
                    #5e8bff ${Math.min(progress, 100)}%,
                    rgba(255, 255, 255, 0.1) ${Math.min(progress, 100)}%
                )
            `;
        }
        
        // Actualizar texto del porcentaje
        if (percentageText) {
            percentageText.textContent = `${Math.floor(progress)}%`;
        }
        
    }, interval);
    
    // Cuando la página esté completamente cargada
    window.addEventListener('load', () => {
        // Completar la barra al 100%
        clearInterval(progressInterval);
        
        if (percentageText) {
            percentageText.textContent = '100%';
        }
        
        const progressBarElement = document.querySelector('.loader-progress-bar');
        if (progressBarElement) {
            progressBarElement.style.background = `
                linear-gradient(
                    90deg,
                    #3d6afe 0%,
                    #5e8bff 100%,
                    rgba(255, 255, 255, 0.1) 100%
                )
            `;
        }
        
        // Pequeño retraso para que se vea el 100% antes de desaparecer
        setTimeout(() => {
            // Añadir clase para la animación de salida
            loader.classList.add('fade-out');
            
            // Eliminar el loader del DOM después de la animación
            setTimeout(() => {
                if (loader && loader.parentNode) {
                    loader.remove();
                }
                console.log('✅ Carga completada - Loader eliminado');
            }, 800); // Coincide con la duración de la transición CSS
        }, 500);
    });
    
    // Fallback: si después de 8 segundos no ha cargado, ocultar el loader igualmente
    setTimeout(() => {
        if (loader && loader.parentNode) {
            console.warn('⚠️ Tiempo de espera agotado - Ocultando loader por seguridad');
            loader.classList.add('fade-out');
            setTimeout(() => {
                if (loader && loader.parentNode) {
                    loader.remove();
                }
            }, 800);
        }
    }, 8000);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initLoader);