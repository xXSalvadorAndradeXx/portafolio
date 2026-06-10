/**
 * Internationalization Module
 */
const i18n = {
    currentLang: 'ES',
    translations: {
        ES: {
            'nav.home': 'Inicio',
            'nav.about': 'Sobre mí',
            'nav.recognitions': 'Reconocimientos',
            'nav.skills': 'Habilidades',
            'nav.projects': 'Proyectos',
            'nav.publications': 'Publicaciones',
            'nav.contact': 'Contacto',
            'hero.availability': 'Disponible para proyectos',
            'hero.role': 'Full Stack Developer',
            'hero.motto': '"El código es ser uno mismo"',
            'hero.viewProjects': 'Ver proyectos',
            'hero.downloadCV': 'Descargar CV',
            'about.title': 'Sobre mí',
            'about.description': 'Desarrollador Full Stack apasionado por crear soluciones tecnológicas innovadoras que transforman ideas en experiencias digitales excepcionales. Con más de 5 años de experiencia en el desarrollo de aplicaciones web y móviles, combinando creatividad con las mejores prácticas de ingeniería de software.',
            'about.stats.projects': 'Proyectos',
            'about.stats.technologies': 'Tecnologías',
            'about.stats.clients': 'Clientes',
            'about.stats.publications': 'Publicaciones',
            'about.philosophy.title': 'Filosofía',
            'about.philosophy.text': '"Crear código limpio, mantenible y escalable que resuelva problemas reales y mejore la vida de las personas."',
            'recognitions.title': 'Reconocimientos',
            'skills.title': 'Habilidades Duras',
            'softSkills.title': 'Habilidades Blandas',
            'projects.title': 'Proyectos',
            'publications.title': 'Publicaciones',
            'testimonials.title': 'Testimonios',
            'contact.title': 'Contacto',
            'footer.sitemap': 'Mapa del Sitio',
            'footer.technologies': 'Tecnologías',
            'footer.copyright': '© 2026 Salvador Andrade. Todos los derechos reservados.',
            'footer.tagline': 'Hecho con pasión, creatividad y miles de líneas de código.',
            'loader.text': 'Creando experiencias únicas'
        },
        EN: {
            'nav.home': 'Home',
            'nav.about': 'About Me',
            'nav.recognitions': 'Recognitions',
            'nav.skills': 'Skills',
            'nav.projects': 'Projects',
            'nav.publications': 'Publications',
            'nav.contact': 'Contact',
            'hero.availability': 'Available for projects',
            'hero.role': 'Full Stack Developer',
            'hero.motto': '"Code is being yourself"',
            'hero.viewProjects': 'View Projects',
            'hero.downloadCV': 'Download CV',
            'about.title': 'About Me',
            'about.description': 'Full Stack Developer passionate about creating innovative technological solutions that transform ideas into exceptional digital experiences. With over 5 years of experience in web and mobile application development, combining creativity with software engineering best practices.',
            'about.stats.projects': 'Projects',
            'about.stats.technologies': 'Technologies',
            'about.stats.clients': 'Clients',
            'about.stats.publications': 'Publications',
            'about.philosophy.title': 'Philosophy',
            'about.philosophy.text': '"Create clean, maintainable and scalable code that solves real problems and improves people\'s lives."',
            'recognitions.title': 'Recognitions',
            'skills.title': 'Hard Skills',
            'softSkills.title': 'Soft Skills',
            'projects.title': 'Projects',
            'publications.title': 'Publications',
            'testimonials.title': 'Testimonials',
            'contact.title': 'Contact',
            'footer.sitemap': 'Site Map',
            'footer.technologies': 'Technologies',
            'footer.copyright': '© 2026 Salvador Andrade. All rights reserved.',
            'footer.tagline': 'Made with passion, creativity and thousands of lines of code.',
            'loader.text': 'Creating unique experiences'
        }
    },
    
    init() {
        const saved = localStorage.getItem('lang');
        if (saved) this.currentLang = saved;
        this.updateUI();
        document.getElementById('languageToggle').querySelector('.lang-label').textContent = this.currentLang;
    },
    
    toggle() {
        this.currentLang = this.currentLang === 'ES' ? 'EN' : 'ES';
        localStorage.setItem('lang', this.currentLang);
        this.updateUI();
        document.getElementById('languageToggle').querySelector('.lang-label').textContent = this.currentLang;
    },
    
    translate(key) {
        return this.translations[this.currentLang][key] || key;
    },
    
    updateUI() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.translate(key);
        });
        document.getElementById('loaderText').textContent = this.translate('loader.text');
    }
};