
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const response = await fetch('https://script.google.com/macros/s/AKfycbzI7TxZO0U7vRszghLcqwx36VdvfvXHpXVn8xOozRXIjEmmrN51nv5Ctt4kVb7alFrp/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            mensaje: document.getElementById('mensaje').value
        })
    });
    
    if (response.ok) {
        alert('Mensaje enviado con éxito');
        document.getElementById('contactForm').reset();
    } else {
        alert('Error al enviar el mensaje');
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.lego-construction');
  const blocksContainer = document.querySelector('.lego-blocks-container');
  
  // Crear bloques LEGO
  function createLegoBlocks() {
    const blockSize = 40;
    const cols = Math.ceil(window.innerWidth / blockSize);
    const rows = Math.ceil(window.innerHeight / blockSize);
    const totalBlocks = cols * rows;
    
    for (let i = 0; i < totalBlocks; i++) {
      const block = document.createElement('div');
      block.className = 'lego-block';
      
      // Posición aleatoria
      const x = (i % cols) * blockSize;
      const y = Math.floor(i / cols) * blockSize;
      
      // Estilo del bloque
      block.style.width = `${blockSize}px`;
      block.style.height = `${blockSize}px`;
      block.style.left = `${x}px`;
      block.style.top = `${y}px`;
      
      // Color aleatorio (variaciones del color primario)
      const hue = 220 + Math.random() * 20 - 10; // Variación de ±10 del azul
      const saturation = 70 + Math.random() * 20;
      const lightness = 50 + Math.random() * 20;
      block.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      
      // Retraso de animación escalonado
      const delay = Math.random() * 2;
      block.style.animationDelay = `${delay}s`;
      
      blocksContainer.appendChild(block);
    }
  }
  
  // Iniciar construcción
  createLegoBlocks();
  
  // Ocultar después de 4 segundos
  setTimeout(() => {
    container.classList.add('hide');
    
    // Eliminar completamente después de la animación
    setTimeout(() => {
      container.remove();
      
      // Efecto de rebote en el logo al cargar la página
      const logo = document.querySelector('.flotante');
      if (logo) {
        logo.style.animation = 'legoBounce 0.8s ease';
      }
    }, 1500);
  }, 4000);
  
  // Opcional: Saltar al hacer clic
  container.addEventListener('click', function() {
    this.classList.add('hide');
    setTimeout(() => this.remove(), 1500);
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const track = document.getElementById('projectsTrack');
  const projects = document.querySelectorAll('.project-card');
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'dots-container';
  
  // Crear puntos indicadores
  projects.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goToProject(index);
    });
    dotsContainer.appendChild(dot);
  });
  
  // Insertar puntos después del carrusel

  
  // Configurar el carrusel
  let currentIndex = 0;
  const cardWidth = projects[0].offsetWidth + 30; // Ancho de la tarjeta + gap
  
  function updateCarousel() {
    track.scrollTo({
      left: currentIndex * cardWidth,
      behavior: 'smooth'
    });
    
    // Actualizar puntos activos
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
  
  function moveProjects(direction) {
    const maxIndex = projects.length - 1;
    
    if (direction === -1 && currentIndex > 0) {
      currentIndex--;
    } else if (direction === 1 && currentIndex < maxIndex) {
      currentIndex++;
    }
    
    updateCarousel();
  }
  
  function goToProject(index) {
    currentIndex = index;
    updateCarousel();
  }
  
  // Event listeners para los botones
  document.querySelector('.prev').addEventListener('click', () => moveProjects(-1));
  document.querySelector('.next').addEventListener('click', () => moveProjects(1));
  
  // Evento para detectar el scroll y actualizar el índice
  track.addEventListener('scroll', () => {
    const scrollPosition = track.scrollLeft;
    currentIndex = Math.round(scrollPosition / cardWidth);
    
    // Actualizar puntos activos
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  });
  
  // Ajustar al cambiar tamaño de pantalla
  window.addEventListener('resize', () => {
    cardWidth = projects[0].offsetWidth + 30;
    updateCarousel();
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Efecto de aparición gradual
  const publicationElements = document.querySelectorAll('.publicacion-container > *');
  
  publicationElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    
    setTimeout(() => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, 100);
  });
  
  // Animación al hacer hover en los tags
  const tags = document.querySelectorAll('.tag');
  
  tags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
    });
    
    tag.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});

// Función para mover el carrusel
function moveSkills(direction) {
    const container = document.querySelector('.skills-container-content');
    const scrollAmount = 300; // Cantidad de desplazamiento
    
    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Opcional: Deshabilitar flechas cuando no hay más contenido para desplazar
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.skills-container-content');
    const leftBtn = document.querySelector('.arrow-btn.left');
    const rightBtn = document.querySelector('.arrow-btn.right');
    
    function checkScroll() {
        // Mostrar/ocultar flecha izquierda
        if (container.scrollLeft <= 10) {
            leftBtn.style.opacity = '0.5';
            leftBtn.style.pointerEvents = 'none';
        } else {
            leftBtn.style.opacity = '1';
            leftBtn.style.pointerEvents = 'auto';
        }
        
        // Mostrar/ocultar flecha derecha
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
            rightBtn.style.opacity = '0.5';
            rightBtn.style.pointerEvents = 'none';
        } else {
            rightBtn.style.opacity = '1';
            rightBtn.style.pointerEvents = 'auto';
        }
    }
    
    // Verificar al cargar y al desplazar
    checkScroll();
    container.addEventListener('scroll', checkScroll);
    
    // Verificar también al redimensionar la ventana
    window.addEventListener('resize', checkScroll);
});

// Datos de los testimonios (puedes reemplazar con tus datos reales)
const testimonialsData = {
    1: {
        name: "Victor Rivera",
        date: "Junio 2024",
        text: "Salvador demostró un excelente manejo de las tecnologías front-end en nuestro proyecto. Su capacidad para resolver problemas complejos y su atención a los detalles fueron fundamentales para el éxito del desarrollo.",
        avatar: "/testimonios/victor.jpg"
    },
    2: {
        name: "Maria Salgado",
        date: "Mayo 2024",
        text: "Trabajar con Salvador fue una experiencia enriquecedora. Su profesionalismo y conocimiento en desarrollo back-end aceleraron nuestros procesos y mejoraron la eficiencia del sistema.",
        avatar: "/testimonios/mary.jpg"
    },
    3: {
        name: "Juan Mejia",
        date: "Abril 2024",
        text: "Como líder de proyecto, aprecio mucho la capacidad de Salvador para trabajar en equipo y su disposición para ayudar a los demás miembros. Un desarrollador confiable y talentoso.",
        avatar: "/testimonios/juan.jpg"
    },
    4: {
        name: "Julissa Odaly",
        date: "Marzo 2024",
        text: "Salvador transformó completamente nuestra plataforma web. Su enfoque metódico y su habilidad para implementar soluciones innovadoras superaron nuestras expectativas.",
        avatar: "/testimonios/july.jpg"
    },
    5: {
        name: "Juan Ramon",
        date: "Febrero 2024",
        text: "Recomiendo a Salvador sin dudarlo. Su combinación de habilidades técnicas y blandas lo convierten en un activo valioso para cualquier equipo de desarrollo.",
        avatar: "/testimonios/ramon.jpg"
    }
};

// Función para abrir el testimonio
function openTestimonial(id) {
    const testimonial = testimonialsData[id];
    const popup = document.getElementById('testimonialPopup');
    
    if (testimonial && popup) {
        document.getElementById('popupAvatar').src = testimonial.avatar;
        document.getElementById('popupName').textContent = testimonial.name;
        document.getElementById('popupDate').textContent = testimonial.date;
        document.getElementById('popupText').textContent = testimonial.text;
        
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Función para cerrar el testimonio
function closeTestimonial() {
    const popup = document.getElementById('testimonialPopup');
    popup.classList.remove('active');
    document.body.style.overflow = '';
}

// Cerrar al hacer clic fuera del contenido
document.getElementById('testimonialPopup').addEventListener('click', function(e) {
    if (e.target === this) {
        closeTestimonial();
    }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', function(e) {
    const popup = document.getElementById('testimonialPopup');
    if (e.key === 'Escape' && popup.classList.contains('active')) {
        closeTestimonial();
    }
});









document.addEventListener('DOMContentLoaded', function() {
    // Animar las barras de progreso al cargar la página
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100);
    });
    
    // Opcional: Efecto de hover más pronunciado
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
    });
});
// Función para abrir el modal de reconocimientos
function reconocimientosOpenModal(imageSrc, description) {
    const modal = document.getElementById('reconocimientos-modal');
    const modalImage = document.getElementById('reconocimientos-modal-image');
    const modalDescription = document.getElementById('reconocimientos-modal-description');
    
    // Configurar el contenido del modal
    modalImage.src = imageSrc;
    modalImage.alt = description;
    modalDescription.textContent = description;
    
    // Mostrar el modal con animación
    modal.classList.add('active');
    
    // Bloquear el scroll del body
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function reconocimientosCloseModal() {
    const modal = document.getElementById('reconocimientos-modal');
    
    // Ocultar el modal
    modal.classList.remove('active');
    
    // Restaurar el scroll del body
    document.body.style.overflow = '';
}

// Cerrar modal al hacer clic fuera del contenido
document.getElementById('reconocimientos-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        reconocimientosCloseModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('reconocimientos-modal');
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        reconocimientosCloseModal();
    }
});



        // Toggle del menú móvil
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.getElementById('menuToggle');
            const mainNav = document.getElementById('mainNav');
            
            menuToggle.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                
                // Animación de clic
                this.classList.add('clicked');
                setTimeout(() => {
                    this.classList.remove('clicked');
                }, 300);
            });
            
            // Cerrar menú al hacer clic en un enlace (solo móvil)
            const menuLinks = document.querySelectorAll('#menuList a');
            menuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    if (window.innerWidth < 768) {
                        mainNav.classList.remove('active');
                    }
                });
            });
            
            // Cambiar clase active al desplazarse
            window.addEventListener('scroll', function() {
                const sections = document.querySelectorAll('section');
                const navLinks = document.querySelectorAll('nav a');
                
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        });




        document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los enlaces del menú
    const menuLinks = document.querySelectorAll('#menuList a[href^="#"]');
    
    // Agregar evento click a cada enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir comportamiento predeterminado
            
            // Obtener el ID de la sección objetivo
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Cerrar menú móvil si está abierto
                const nav = document.getElementById('mainNav');
                nav.classList.remove('active');
                
                // Calcular posición de la sección
                const targetPosition = targetSection.offsetTop;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 800; // Duración en milisegundos
                let startTime = null;
                
                // Función de animación
                function animation(currentTime) {
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = ease(timeElapsed, startPosition, distance, duration);
                    window.scrollTo(0, run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                }
                
                // Función de easing para efecto suave
                function ease(t, b, c, d) {
                    t /= d/2;
                    if (t < 1) return c/2*t*t*t + b;
                    t -= 2;
                    return c/2*(t*t*t + 2) + b;
                }
                
                // Iniciar animación
                requestAnimationFrame(animation);
            }
        });
    });
    
    // Opcional: Actualizar URL sin recargar la página
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetId = this.getAttribute('href');
            history.pushState(null, null, targetId);
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.getElementById('languageBtn');
    const textElements = document.querySelectorAll('[data-es], [data-en]');
    let currentLanguage = 'es'; // Idioma por defecto
    
    // Configurar tooltip inicial
    updateButtonText();
    
    languageBtn.addEventListener('click', function() {
        // Cambiar idioma
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        
        // Actualizar todos los textos
        textElements.forEach(element => {
            if (element.hasAttribute(`data-${currentLanguage}`)) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = element.getAttribute(`data-${currentLanguage}`);
                } else {
                    element.textContent = element.getAttribute(`data-${currentLanguage}`);
                }
            }
        });
        
        // Actualizar el botón
        updateButtonText();
        
        // Efecto visual
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 300);
        
        // Guardar preferencia (opcional)
        localStorage.setItem('preferredLanguage', currentLanguage);
    });
    
    // Cargar idioma guardado (opcional)
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        languageBtn.click(); // Simular click para cambiar idioma
    }
    
    function updateButtonText() {
        const langText = currentLanguage === 'es' ? 'English' : 'Español';
        const tooltipText = currentLanguage === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish';
        
        languageBtn.querySelector('span').textContent = langText;
        languageBtn.setAttribute('data-tooltip', tooltipText);
    }
    
    // Efecto de onda al hacer clic
    languageBtn.addEventListener('click', function(e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Añadir al CSS:
/*
.ripple {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    animation: rippleEffect 0.6s linear;
}

@keyframes rippleEffect {
    to {
        transform: translate(-50%, -50%) scale(30);
        opacity: 0;
    }
}
*/




document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.getElementById('themeBtn');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Verificar preferencia del sistema o guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        enableDarkMode();
    }
    
    // Configurar evento click
    themeBtn.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
        
        // Efecto de onda
        this.classList.add('active');
        setTimeout(() => this.classList.remove('active'), 300);
    });
    
    // Opcional: Escuchar cambios en las preferencias del sistema
    prefersDarkScheme.addListener(e => {
        if (e.matches && !document.body.classList.contains('dark-mode')) {
            enableDarkMode();
        } else if (!e.matches && document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        }
    });
    
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        themeBtn.setAttribute('title', 'Modo diurno');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
        
        // Animación especial
        document.documentElement.style.setProperty('--oneui-transition', 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)');
        setTimeout(() => {
            document.documentElement.style.setProperty('--oneui-transition', 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)');
        }, 500);
    }
    
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        themeBtn.setAttribute('title', 'Modo nocturno');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
        
        // Animación especial
        document.documentElement.style.setProperty('--oneui-transition', 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)');
        setTimeout(() => {
            document.documentElement.style.setProperty('--oneui-transition', 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)');
        }, 500);
    }
    
    // Efecto de carga gradual para el modo oscuro
    if (document.body.classList.contains('dark-mode')) {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 10);
    }
});