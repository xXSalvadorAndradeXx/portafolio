
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