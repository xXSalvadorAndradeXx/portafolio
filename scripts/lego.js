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