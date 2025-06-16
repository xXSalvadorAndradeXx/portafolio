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