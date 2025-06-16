document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('projectsTrack');
    const projects = document.querySelectorAll('.project-card');
    const projectCards = Array.from(projects);
    const indicatorsContainer = document.createElement('div');

    
    // Crear indicadores
    projectCards.forEach((_, index) => {
        const indicator = document.createElement('div');
       
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            goToProject(index);
        });
        indicatorsContainer.appendChild(indicator);
    });
    
    document.querySelector('.projects-carousel').appendChild(indicatorsContainer);
    
    const projectWidth = projects[0].offsetWidth + 30; // Ancho + gap
    let currentIndex = 0;
    const visibleProjects = 3; // Número de proyectos a mover por clic
    
    // Función para mover el carrusel
    window.moveProjects = function(direction) {
        currentIndex += direction * visibleProjects;
        
        // Ajustar índice para efecto infinito sin reset
        if (currentIndex >= projectCards.length) {
            currentIndex = 0;
        } else if (currentIndex < 0) {
            currentIndex = projectCards.length - visibleProjects;
        }
        
        // Calcular nueva posición
        const newPosition = currentIndex * projectWidth;
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = `translateX(-${newPosition}px)`;
        
        updateIndicators();
    };
    
    // Función para ir a un proyecto específico
    function goToProject(index) {
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * projectWidth}px)`;
        updateIndicators();
    }
    
    // Actualizar indicadores
    function updateIndicators() {
        const indicators = document.querySelectorAll('.carousel-indicator');
        const normalizedIndex = currentIndex % projectCards.length;
        
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === normalizedIndex);
        });
    }
    
    // Touch/swipe handling mejorado
    let isDragging = false;
    let startX, startScrollLeft, currentTranslate = 0;
    
    const dragStart = (e) => {
        isDragging = true;
        startX = e.pageX || e.touches[0].pageX;
        startScrollLeft = currentIndex * projectWidth;
        track.style.cursor = 'grabbing';
        track.style.transition = 'none';
        cancelAnimationFrame(animationId);
    };
    
    const dragMove = (e) => {
        if(!isDragging) return;
        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX) * 1.5; // Sensibilidad ajustada
        
        currentTranslate = startScrollLeft - walk;
        track.style.transform = `translateX(-${currentTranslate}px)`;
    };
    
    const dragEnd = () => {
        isDragging = false;
        track.style.cursor = 'grab';
        track.style.transition = 'transform 0.5s ease-in-out';
        
        // Determinar si fue un swipe significativo
        const threshold = projectWidth / 3;
        const delta = startScrollLeft - currentTranslate;
        
        if (delta > threshold) {
            moveProjects(1); // Swipe izquierda
        } else if (delta < -threshold) {
            moveProjects(-1); // Swipe derecha
        } else {
            // Volver a la posición actual si no se superó el threshold
            track.style.transform = `translateX(-${currentIndex * projectWidth}px)`;
        }
    };
    
    // Event listeners
    track.addEventListener('mousedown', dragStart);
    track.addEventListener('touchstart', dragStart, { passive: false });
    
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('touchmove', dragMove, { passive: false });
    
    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('touchend', dragEnd);
    
    // Animación suave para el arrastre
    let animationId;
    function smoothDrag() {
        if(!isDragging) return;
        track.style.transform = `translateX(-${currentTranslate}px)`;
        animationId = requestAnimationFrame(smoothDrag);
    }
    
    // Inicialización
    updateIndicators();
    
    // Ajuste responsive
    window.addEventListener('resize', () => {
        const newProjectWidth = projects[0].offsetWidth + 30;
        track.style.transform = `translateX(-${currentIndex * newProjectWidth}px)`;
    });
});