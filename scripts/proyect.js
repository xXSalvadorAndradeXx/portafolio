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