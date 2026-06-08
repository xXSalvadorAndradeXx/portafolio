// ========== script.js ==========
document.addEventListener('DOMContentLoaded', () => {
  // ---------- LOADING SCREEN ----------
  const loadingScreen = document.getElementById('loading-screen');
  const progressBar = document.getElementById('progress-bar');
  const loadingPercentage = document.getElementById('loading-percentage');
  const mainContent = document.getElementById('main-content');
  
  const progressSteps = [0, 15, 35, 67, 89, 100];
  let currentStep = 0;
  
  const simulateLoading = () => {
    if (currentStep < progressSteps.length) {
      const value = progressSteps[currentStep];
      progressBar.style.width = value + '%';
      loadingPercentage.textContent = value + '%';
      currentStep++;
      setTimeout(simulateLoading, 400 + Math.random() * 300);
    } else {
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        mainContent.style.opacity = '1';
        mainContent.style.visibility = 'visible';
        document.body.style.cursor = 'auto';
        initApp();
      }, 500);
    }
  };
  
  simulateLoading();

  function initApp() {
    // ---------- CUSTOM CURSOR ----------
    const cursor = document.getElementById('custom-cursor');
    const dot = document.getElementById('cursor-dot');
    
    document.addEventListener('mousemove', (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
    });

    // ---------- THEME TOGGLE ----------
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });

    // ---------- NAVBAR SCROLL ----------
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ---------- MOBILE MENU ----------
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('navbar-menu');
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      toggle.setAttribute('aria-expanded', menu.classList.contains('active'));
    });

    // ---------- PARTICLES ----------
    particlesJS('particles-js', {
      particles: {
        number: { value: 40 },
        color: { value: '#6c5ce7' },
        shape: { type: 'circle' },
        opacity: { value: 0.3 },
        size: { value: 2 },
        line_linked: { enable: true, color: '#6c5ce7', opacity: 0.1 },
        move: { enable: true, speed: 0.5 }
      }
    });

    // ---------- TYPED.JS ----------
    new Typed('#typed-text', {
      strings: ['Desarrollador Full-Stack', 'Arquitecto de Software', 'Innovador Digital'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

    // ---------- AOS ----------
    AOS.init({ duration: 800, once: true });

    // ---------- SWIPERS ----------
    new Swiper('.recognitions-swiper', { slidesPerView: 1.2, spaceBetween: 20, breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }, pagination: { el: '.swiper-pagination', clickable: true } });
    new Swiper('.projects-swiper', { slidesPerView: 1.2, spaceBetween: 20, breakpoints: { 768: { slidesPerView: 2 } } });
    new Swiper('.publications-swiper', { slidesPerView: 1.2, spaceBetween: 20, breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } } });

    // ---------- SKILLS DINÁMICAS ----------
    const skills = [
      { name: 'HTML5', pct: 98 }, { name: 'CSS3', pct: 95 }, { name: 'JavaScript', pct: 95 },
      { name: 'TypeScript', pct: 90 }, { name: 'PHP', pct: 90 }, { name: 'Laravel', pct: 90 },
      { name: 'Node.js', pct: 90 }, { name: 'NestJS', pct: 88 }, { name: 'Vue.js', pct: 85 },
      { name: 'React.js', pct: 85 }, { name: 'MySQL', pct: 90 }, { name: 'PostgreSQL', pct: 82 },
      { name: 'MongoDB', pct: 80 }, { name: 'Git', pct: 92 }, { name: 'GitHub', pct: 90 }, { name: 'Docker', pct: 75 }
    ];
    
    const grid = document.getElementById('skills-grid');
    skills.forEach(s => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `<div class="skill-header"><span>${s.name}</span><span>${s.pct}%</span></div><div class="skill-bar-bg"><div class="skill-bar-fill" data-width="${s.pct}"></div></div>`;
      grid.appendChild(card);
    });

    // Animación de barras con ScrollTrigger
    gsap.utils.toArray('.skill-bar-fill').forEach(bar => {
      gsap.fromTo(bar, { width: '0%' }, { width: bar.dataset.width + '%', duration: 1.5, scrollTrigger: { trigger: bar, start: 'top 80%' } });
    });

    // Contadores
    gsap.utils.toArray('.stat-number[data-target]').forEach(el => {
      gsap.fromTo(el, { innerText: 0 }, { innerText: el.dataset.target, duration: 2, snap: { innerText: 1 }, scrollTrigger: { trigger: el } });
    });
  }

  // ---------- MODAL GLOBAL ----------
  window.openModal = function(id) {
    const container = document.getElementById('modal-container');
    container.innerHTML = `<div class="modal-overlay" onclick="closeModal()"></div><div class="modal-content"><button onclick="closeModal()" style="float:right;background:none;border:none;color:inherit;font-size:1.5rem;">&times;</button><h3>Detalle</h3><p>Contenido del modal ${id}.</p></div>`;
    container.classList.add('active');
  };
  
  window.closeModal = function() {
    document.getElementById('modal-container').classList.remove('active');
  };
});
