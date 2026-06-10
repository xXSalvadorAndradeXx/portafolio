/**
 * Theme Module
 * Handles dark/light mode toggle with smooth transitions
 */
class Theme {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.themeIcon = this.themeToggle?.querySelector('i');
        this.currentTheme = 'dark';
        
        this.init();
    }

    init() {
        if (!this.themeToggle || !this.themeIcon) return;

        // Check saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.setTheme(savedTheme);
        }

        // Toggle theme on click
        this.themeToggle.addEventListener('click', () => {
            const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            this.setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        
        // Update icon
        if (theme === 'light') {
            this.themeIcon.className = 'fas fa-sun';
        } else {
            this.themeIcon.className = 'fas fa-moon';
        }

        // Animate icon
        this.themeIcon.style.transform = 'scale(0.5) rotate(180deg)';
        requestAnimationFrame(() => {
            this.themeIcon.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            this.themeIcon.style.transform = 'scale(1) rotate(0deg)';
        });

        // Update CSS variables for light theme
        if (theme === 'light') {
            document.documentElement.style.setProperty('--bg-primary', '#f5f5f7');
            document.documentElement.style.setProperty('--bg-secondary', '#ffffff');
            document.documentElement.style.setProperty('--card-bg', 'rgba(0, 0, 0, 0.04)');
            document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.7)');
            document.documentElement.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.08)');
            document.documentElement.style.setProperty('--color-primary', '#1d1d1f');
            document.documentElement.style.setProperty('--color-secondary', '#6e6e73');
        } else {
            document.documentElement.style.setProperty('--bg-primary', '#050505');
            document.documentElement.style.setProperty('--bg-secondary', '#0E0E10');
            document.documentElement.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.06)');
            document.documentElement.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.03)');
            document.documentElement.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.08)');
            document.documentElement.style.setProperty('--color-primary', '#ffffff');
            document.documentElement.style.setProperty('--color-secondary', '#bdbdbd');
        }
    }
}

// Initialize theme
document.addEventListener('DOMContentLoaded', () => {
    new Theme();
});