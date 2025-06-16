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