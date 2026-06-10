/**
 * Theme Module - Modo Oscuro/Claro con corrección completa del menú
 */
class Theme {
    constructor() {
        this.toggleBtn = document.getElementById('themeToggle');
        this.icon = this.toggleBtn?.querySelector('i');
        this.current = 'dark';
        this.header = document.getElementById('header');
        this.menuBtn = document.getElementById('menuBtn');
        this.init();
    }

    init() {
        if (!this.toggleBtn || !this.icon) return;
        
        const saved = localStorage.getItem('theme');
        if (saved) {
            this.setTheme(saved);
        } else {
            // Asegurar que inicie en modo oscuro
            this.setTheme('dark');
        }
        
        this.toggleBtn.addEventListener('click', () => {
            const next = this.current === 'dark' ? 'light' : 'dark';
            this.setTheme(next);
            localStorage.setItem('theme', next);
        });
    }

    setTheme(theme) {
        this.current = theme;
        
        // Aplicar tema al documento
        document.documentElement.setAttribute('data-theme', theme);
        
        // Actualizar icono
        this.icon.className = theme === 'light' ? 'fas fa-sun' : 'fas fa-moon';
        
        // Animación del icono
        this.icon.style.transform = 'scale(0.5) rotate(180deg)';
        requestAnimationFrame(() => {
            this.icon.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            this.icon.style.transform = 'scale(1) rotate(0deg)';
        });
        
        // Forzar actualización de estilos del header
        this.updateHeaderStyles(theme);
        
        // Actualizar estilos del menú responsive
        this.updateMobileMenuStyles(theme);
        
        // Actualizar estilos de botones del header
        this.updateHeaderButtons(theme);
        
        // Actualizar meta theme-color
        this.updateMetaThemeColor(theme);
    }
    
    updateHeaderStyles(theme) {
        if (!this.header) return;
        
        if (theme === 'light') {
            this.header.style.background = 'rgba(255, 255, 255, 0.75)';
            this.header.style.border = '1px solid rgba(0, 0, 0, 0.08)';
            this.header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
        } else {
            this.header.style.background = 'rgba(14, 14, 16, 0.75)';
            this.header.style.border = '1px solid rgba(255, 255, 255, 0.08)';
            this.header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        }
    }
    
    updateMobileMenuStyles(theme) {
        const menu = document.getElementById('headerMenu');
        if (!menu) return;
        
        if (theme === 'light') {
            menu.style.background = 'rgba(255, 255, 255, 0.98)';
            menu.style.borderLeft = '1px solid rgba(0, 0, 0, 0.08)';
        } else {
            menu.style.background = 'rgba(14, 14, 16, 0.98)';
            menu.style.borderLeft = '1px solid rgba(255, 255, 255, 0.08)';
        }
    }
    
    updateHeaderButtons(theme) {
        const actionBtns = document.querySelectorAll('.header__action-btn');
        actionBtns.forEach(btn => {
            if (theme === 'light') {
                btn.style.color = '#1d1d1f';
            } else {
                btn.style.color = '#ffffff';
            }
        });
        
        // Actualizar líneas del botón hamburguesa
        if (this.menuBtn) {
            const spans = this.menuBtn.querySelectorAll('span');
            spans.forEach(span => {
                span.style.background = theme === 'light' ? '#1d1d1f' : '#ffffff';
            });
        }
        
        // Actualizar logo
        const logo = document.querySelector('.header__logo svg');
        if (logo) {
            logo.style.color = theme === 'light' ? '#1d1d1f' : '#ffffff';
        }
    }
    
    updateMetaThemeColor(theme) {
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === 'light' ? '#f5f5f7' : '#050505');
        }
    }
}

// Inicializar tema cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new Theme();
});