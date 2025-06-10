let currentPosition = 0;

        function moveCarousel(direction) {
            const carousel = document.getElementById('carouselItems');
            const items = carousel.children.length;
            const itemWidth = carousel.children[0].offsetWidth + 16; // Card width + margin
            const visibleItems = Math.floor(carousel.parentElement.offsetWidth / itemWidth);
            currentPosition = Math.max(0, Math.min(currentPosition + direction, items - visibleItems));
            carousel.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
        }

        function reconocimientosOpenModal(imageSrc, description) {
            document.getElementById('reconocimientos-modal-image').src = imageSrc;
            document.getElementById('reconocimientos-modal-description').innerText = description;
            document.getElementById('reconocimientos-modal').classList.add('active');
        }

        function reconocimientosCloseModal() {
            document.getElementById('reconocimientos-modal').classList.remove('active');
        }



let currentLanguage = 'es';
        const languageBtn = document.getElementById('languageBtn');
        
        languageBtn.addEventListener('click', function() {
            // Eliminar animación de pulso al hacer clic
            this.classList.remove('pulse');
            
            // Pequeña animación de "click"
            this.style.transform = 'translateY(2px)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px)';
                
                // Cambiar idioma después de la animación
                currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
                updateLanguage();
                
                // Restaurar animación de pulso después de 1 segundo
                setTimeout(() => {
                    this.classList.add('pulse');
                }, 1000);
                
            }, 100);
        });
        
        function updateLanguage() {
            // Actualizar texto del botón
            const btnText = languageBtn.querySelector('span');
            btnText.textContent = currentLanguage === 'es' ? 'English' : 'Español';
            
            // Actualizar elementos con atributos data-es y data-en
            document.querySelectorAll('[data-es], [data-en]').forEach(element => {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = element.getAttribute(`data-${currentLanguage}`);
                } else {
                    element.textContent = element.getAttribute(`data-${currentLanguage}`);
                }
            });
            
            // Actualizar el atributo lang del documento
            document.documentElement.lang = currentLanguage;
            
            // Actualizar el título de la página
            document.title = currentLanguage === 'es' ? 'Salvador Andrade' : 'Salvador Andrade';
        }
        
        // Función para mover las habilidades (existente)
        function moveSkills(direction) {
            // Tu código existente para mover las habilidades
        }



        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('nav ul');
    
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });


        function downloadCV() {
    var link = document.createElement('a');
    link.href = '/recursos/cv.pdf'; // Asegúrate de que la ruta sea correcta
    link.download = 'MiCV'; // Nombre del archivo al descargarse
    link.click(); // Simula el clic para descargar el archivo
}


window.addEventListener('scroll', function() {
    const sobreMi = document.querySelector('.sobre-mi');
    if (window.scrollY > 100) {  // Ajusta el valor para que se active después de un cierto desplazamiento
        sobreMi.classList.add('visible');
    } else {
        sobreMi.classList.remove('visible');
    }
});


const items = document.querySelectorAll('.carousel-item');
let currentIndex = 1;

function updateCarousel(index) {
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });
}



let currentIndex1 = 0; // Índice inicial

function moveSkills(direction) {
    const container = document.querySelector('.skills-container-content');
    const cards = container.children;
    const cardWidth = document.querySelector('.skill-card').offsetWidth + 20; // Ajuste del margen
    
    // Si es hacia la izquierda
    if (direction === 'left') {
        currentIndex = currentIndex === 0 ? cards.length - 4 : currentIndex - 1; // Si está en el primer elemento, regresa al último
    } 
    // Si es hacia la derecha
    else if (direction === 'right') {
        currentIndex = currentIndex === cards.length - 4 ? 0 : currentIndex + 1; // Si está en el último elemento, regresa al primero
    }

    // Desplazamos el contenedor de las tarjetas
    container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
// Modo nocturno
const themeBtn = document.getElementById('themeBtn');
        const body = document.body;
        
        // Verificar preferencia del sistema o localStorage
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const localStorageTheme = localStorage.getItem('theme');
        
        if (localStorageTheme === 'dark' || (!localStorageTheme && prefersDark)) {
            enableDarkMode();
        }
        
        themeBtn.addEventListener('click', toggleDarkMode);
        
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
            localStorage.setItem('theme', 'dark');
        }
        
        function disableDarkMode() {
            body.classList.remove('dark-mode');
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
        
        // Opcional: Cambiar automáticamente según la preferencia del sistema
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (localStorage.getItem('theme') === null) {
                if (e.matches) {
                    enableDarkMode();
                } else {
                    disableDarkMode();
                }
            }
        });


 // JavaScript para el carrusel de proyectos
 let currentProjectIndex = 0;
        const projectCards = document.querySelectorAll('.project-card');
        const projectsTrack = document.getElementById('projectsTrack');
        const projectsPerView = 3;
        
        function updateProjectsDisplay() {
            const cardWidth = projectCards[0].offsetWidth + 40; // Ancho + margen
            projectsTrack.style.transform = `translateX(-${currentProjectIndex * cardWidth}px)`;
            
            // Ocultar/mostrar botones según la posición
            document.querySelector('.carousel-btn.prev').style.display = 
                currentProjectIndex === 0 ? 'none' : 'flex';
            
            document.querySelector('.carousel-btn.next').style.display = 
                currentProjectIndex >= projectCards.length - projectsPerView ? 'none' : 'flex';
        }
        
        function moveProjects(direction) {
            const maxIndex = projectCards.length - projectsPerView;
            
            currentProjectIndex += direction;
            
            if (currentProjectIndex < 0) {
                currentProjectIndex = 0;
            } else if (currentProjectIndex > maxIndex) {
                currentProjectIndex = maxIndex;
            }
            
            updateProjectsDisplay();
        }
        
        // Ajustar para pantallas más pequeñas
        function handleResize() {
            const width = window.innerWidth;
            
            if (width <= 900) {
                projectsPerView = 2;
            } else if (width <= 600) {
                projectsPerView = 1;
            } else {
                projectsPerView = 3;
            }
            
            updateProjectsDisplay();
        }
        
        window.addEventListener('resize', handleResize);
        document.addEventListener('DOMContentLoaded', () => {
            handleResize();
            updateProjectsDisplay();
        });
        document.addEventListener("DOMContentLoaded", function() {
            var frases = [
                "El código no tiene errores, solo soluciones esperando ser descubiertas.",
                "Cada bug es una oportunidad para aprender algo nuevo.",
                "Lo más importante no es el lenguaje, sino la forma en que piensas como programador.",
                "Ser fullstack significa ser curioso y nunca dejar de aprender.",
                "Los proyectos grandes empiezan con pequeños pasos... y muchos commits.",
                "El mejor código es el que no necesitas escribir.",
                "El desarrollo web es un viaje, no un destino.",
                "Con cada línea de código, construimos el futuro, un proyecto a la vez."
            ];

            // Obtener el día actual
            var diaDelMes = new Date().getDate();

            // Elegir una frase diferente según el día
            var fraseElegida = frases[diaDelMes % frases.length];

            // Cambiar el contenido de la etiqueta <p> con la clase "frase-personal"
            document.querySelector(".frase-personal").textContent = fraseElegida;
        });






        // Datos de los testimonios
const testimonials = [
    {
        id: 1,
        name: "Victor Rivera",
        avatar: "/testimonios/victor.jpg",
        date: "Junio 2025",
        text: "Excelente profesional. Su trabajo en el desarrollo de nuestro sistema legal fue fundamental para optimizar nuestros procesos. Siempre atento a los detalles y con soluciones innovadoras."
    },
    {
        id: 2,
        name: "Maria Salgado",
        avatar: "/testimonios/mary.jpg",
        date: "Marzo 2025",
        text: "Trabajar con él fue una experiencia enriquecedora. Su capacidad para resolver problemas complejos y su dedicación al proyecto superaron todas nuestras expectativas."
    },
    {
        id: 3,
        name: "Juan Mejia",
        avatar: "/testimonios/juan.jpg",
        date: "Julio 2025",
        text: "Su enfoque metódico y su atención al detalle hicieron que nuestro proyecto fuera un éxito. Recomiendo ampliamente sus servicios profesionales."
    },
    {
        id: 4,
        name: "Julissa Odaly",
        avatar: "/testimonios/july.jpg",
        date: "Noviembre 2025",
        text: "Trabajar con él fue una experiencia enriquecedora. Su capacidad para resolver problemas complejos y su dedicación al proyecto superaron todas nuestras expectativas."
    },
    {
        id: 5,
        name: "Juan Ramon",
        avatar: "/testimonios/ramon.jpg",
        date: "Mayo 2025",
        text: "Su enfoque metódico y su atención al detalle hicieron que nuestro proyecto fuera un éxito. Recomiendo ampliamente sus servicios profesionales."
    }
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

// Cerrar al hacer clic fuera del contenido
window.onclick = function(event) {
    const popup = document.getElementById('testimonialPopup');
    if (event.target === popup) {
        closeTestimonial();
    }
}