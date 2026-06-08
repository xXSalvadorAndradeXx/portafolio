/* =========================================================
   SCRIPT.JS – Salvador Andrade Portfolio
   ES6+ | GSAP | AOS | Swiper | Typed.js | Lenis
========================================================= */

/* =========================================================
   GSAP PLUGINS
========================================================= */
gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   DATA
========================================================= */
const AWARDS_DATA = [
  {
    icon: '<i class="ri-award-line"></i>',
    name: 'Desarrollo Web Full-Stack',
    org: 'Platzi Academy',
    date: 'Diciembre 2023',
    desc: 'Certificación integral en desarrollo web full-stack, cubriendo frontend, backend, bases de datos y despliegue en producción con las tecnologías más demandadas del mercado.'
  },
  {
    icon: '<i class="ri-medal-line"></i>',
    name: 'Node.js Advanced',
    org: 'Udemy',
    date: 'Octubre 2023',
    desc: 'Curso avanzado en Node.js cubriendo arquitecturas de microservicios, patrones de diseño, rendimiento, seguridad y buenas prácticas de desarrollo backend.'
  },
  {
    icon: '<i class="ri-trophy-line"></i>',
    name: 'Arquitectura de Software',
    org: 'Coursera',
    date: 'Agosto 2022',
    desc: 'Especialización en patrones de arquitectura de software empresarial, incluyendo microservicios, DDD, CQRS y Event Sourcing.'
  },
  {
    icon: '<i class="ri-star-line"></i>',
    name: 'Vue.js & React Expert',
    org: 'Frontend Masters',
    date: 'Marzo 2024',
    desc: 'Dominio avanzado de Vue.js y React para construir aplicaciones web de gran escala con enfoque en rendimiento, accesibilidad y experiencia de usuario.'
  },
  {
    icon: '<i class="ri-shield-check-line"></i>',
    name: 'Docker & DevOps',
    org: 'LinkedIn Learning',
    date: 'Enero 2024',
    desc: 'Certificación en containerización con Docker, orquestación con Kubernetes, pipelines CI/CD y despliegue en plataformas cloud modernas.'
  }
];

const PROJECTS_DATA = [
  {
    icon: '<i class="ri-paw-line"></i>',
    bg: 'linear-gradient(135deg, #1a1040, #2d1a5e)',
    name: 'QuantumSprint',
    desc: 'Plataforma integral para mascotas: gestión veterinaria, seguimiento de salud, historial médico completo, recordatorios de vacunas y comunidad de dueños responsables.',
    features: [
      'Gestión de historiales médicos con IA',
      'Sistema de citas y recordatorios automáticos',
      'Comunidad y red social para dueños de mascotas',
      'Dashboard analítico de salud por mascota',
      'Integración con clínicas veterinarias',
      'App móvil PWA offline-first'
    ],
    tags: ['Vue', 'NestJS', 'PostgreSQL', 'Docker', 'TypeScript'],
    status: 'En producción',
    repo: '#', demo: '#'
  },
  {
    icon: '<i class="ri-plant-line"></i>',
    bg: 'linear-gradient(135deg, #0e2a1a, #1a4a2e)',
    name: 'Huerto en Mano',
    desc: 'Aplicación inteligente para gestión de jardines y huertos personalizados, con integración de sensores IoT, recomendaciones de IA y guías de cultivo adaptadas al clima local.',
    features: [
      'Integración con sensores IoT en tiempo real',
      'Recomendaciones de riego con Machine Learning',
      'Calendario de siembra personalizado por zona',
      'Comunidad de jardineros y foros de ayuda',
      'Dashboard con métricas de crecimiento',
      'Alertas de plagas y enfermedades'
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'IoT'],
    status: 'En desarrollo',
    repo: '#', demo: '#'
  },
  {
    icon: '<i class="ri-store-2-line"></i>',
    bg: 'linear-gradient(135deg, #2a1010, #4a2010)',
    name: 'NexCommerce',
    desc: 'Plataforma e-commerce moderna con sistema de carrito dual para usuarios anónimos y autenticados, panel administrativo completo, reportes analíticos y gateway de pagos.',
    features: [
      'Carrito dual para usuarios anónimos y autenticados',
      'Migración automática de carrito al autenticar',
      'Panel administrativo con reportes en tiempo real',
      'Integración con múltiples gateways de pago',
      'Sistema de inventario y alertas de stock',
      'SEO optimizado con SSR'
    ],
    tags: ['Laravel', 'Vue', 'MySQL', 'Docker', 'PHP'],
    status: 'Completado',
    repo: '#', demo: '#'
  }
];

const TESTIMONIALS_DATA = [
  {
    initial: 'V',
    name: 'Victor Hernández',
    cargo: 'CTO · TechNova Solutions',
    stars: '★★★★★',
    quote: 'Salvador es un desarrollador excepcional que siempre entrega más de lo esperado. Su capacidad para entender los requerimientos del negocio y transformarlos en soluciones técnicas elegantes es impresionante. Trabajar con él fue una de las mejores decisiones que tomamos como empresa. Su código es limpio, bien documentado y fácil de mantener. Sin duda lo recomendaría para cualquier proyecto de envergadura.'
  },
  {
    initial: 'J',
    name: 'Juan Carlos Mena',
    cargo: 'Product Manager · Softcorp',
    stars: '★★★★★',
    quote: 'Trabajar con Salvador fue una experiencia increíble. Su dominio técnico es impresionante, pero lo que más destaca es su actitud proactiva y su capacidad para comunicar ideas complejas de forma clara. Entregó el proyecto en tiempo récord sin sacrificar calidad. Es un profesional íntegro que se convierte rápidamente en un activo invaluable para cualquier equipo.'
  },
  {
    initial: 'R',
    name: 'Ramón Delgado',
    cargo: 'Founder · StartupLab',
    stars: '★★★★★',
    quote: 'Su capacidad de resolver problemas complejos de forma elegante y eficiente es única en el mercado. Salvador no solo escribe código, construye soluciones. Desde el primer día demostró un nivel de madurez técnica y profesionalismo que superó nuestras expectativas. El sistema que nos construyó sigue funcionando perfectamente y ha escalado sin problemas. Es simplemente el mejor desarrollador con el que he trabajado.'
  }
];

/* =========================================================
   LOADER
========================================================= */
(function initLoader() {
  const loader     = document.getElementById('loader');
  const bar        = document.getElementById('loaderBar');
  const percent    = document.getElementById('loaderPercent');
  const steps      = [0, 15, 35, 67, 89, 100];
  const delays     = [0, 400, 700, 1100, 1600, 2100];
  let idx = 0;

  function nextStep() {
    if (idx >= steps.length) return;
    const val = steps[idx];
    bar.style.width = val + '%';
    percent.textContent = val + '%';
    idx++;
    if (idx < steps.length) {
      setTimeout(nextStep, delays[idx] - delays[idx - 1]);
    } else {
      setTimeout(() => {
        loader.classList.add('loader--hidden');
        document.body.style.overflow = '';
        heroEntrance();
      }, 600);
    }
  }

  document.body.style.overflow = 'hidden';
  setTimeout(nextStep, 300);
})();

/* =========================================================
   LENIS SMOOTH SCROLL
========================================================= */
let lenis;
try {
  lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
  function lenisRaf(time) {
    lenis.raf(time);
    requestAnimationFrame(lenisRaf);
  }
  requestAnimationFrame(lenisRaf);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);
} catch(e) {
  // Lenis not available, fallback graceful
}

/* =========================================================
   AOS
========================================================= */
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60
});

/* =========================================================
   THEME TOGGLE
========================================================= */
(function initTheme() {
  const toggle = document.getElementById('themeToggle');
  const icon   = document.getElementById('themeIcon');
  const html   = document.documentElement;

  const saved = localStorage.getItem('sa-theme') || 'dark';
  html.setAttribute('data-theme', saved);
  icon.className = saved === 'dark' ? 'ri-sun-line' : 'ri-moon-line';

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('sa-theme', next);
    icon.className = next === 'dark' ? 'ri-sun-line' : 'ri-moon-line';

    gsap.fromTo(toggle,
      { rotate: 0 },
      { rotate: 360, duration: .5, ease: 'back.out(1.5)' }
    );
  });
})();

/* =========================================================
   NAVBAR
========================================================= */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const menu      = document.getElementById('navMenu');
  const overlay   = document.getElementById('mobileOverlay');
  const links     = document.querySelectorAll('.navbar__link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
  }, { passive: true });

  function closeMenu() {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('nav--open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('nav--open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    overlay.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  overlay.addEventListener('click', closeMenu);
  links.forEach(l => l.addEventListener('click', closeMenu));

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.navbar__link[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));
})();

/* =========================================================
   CUSTOM CURSOR
========================================================= */
(function initCursor() {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;
  if (window.matchMedia('(pointer: coarse)').matches) return;

  let mouseX = 0, mouseY = 0;
  let follX = 0,  follY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    gsap.to(cursor, { x: mouseX, y: mouseY, duration: .08 });
  });

  (function loop() {
    follX += (mouseX - follX) * .12;
    follY += (mouseY - follY) * .12;
    follower.style.left = follX + 'px';
    follower.style.top  = follY + 'px';
    requestAnimationFrame(loop);
  })();

  const hoverEls = document.querySelectorAll('a, button, [role="button"], .award-card, .testi-card');
  const body = document.body;
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => body.classList.add('cursor--expand'));
    el.addEventListener('mouseleave', () => body.classList.remove('cursor--expand'));
  });
})();

/* =========================================================
   HERO – CANVAS PARTICLES
========================================================= */
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const count = Math.min(80, Math.floor(W * H / 12000));

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + .5,
      vx: (Math.random() - .5) * .25,
      vy: (Math.random() - .5) * .25,
      alpha: Math.random() * .5 + .2
    });
  }

  let mouseX = W / 2, mouseY = H / 2;
  document.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const pColor = isDark ? '108,99,255' : '80,72,200';

    particles.forEach(p => {
      p.x += p.vx + (mouseX - W / 2) * .0003;
      p.y += p.vy + (mouseY - H / 2) * .0003;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${pColor},${p.alpha})`;
      ctx.fill();
    });

    // Connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${pColor},${.12 * (1 - dist / 100)})`;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* =========================================================
   HERO ENTRANCE (after loader)
========================================================= */
function heroEntrance() {
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.from('.hero__badge',  { y: 30, opacity: 0, duration: .8, delay: .1 })
    .from('.hero__name-line', { y: 60, opacity: 0, duration: 1, stagger: .15 }, '-=.4')
    .from('.hero__role',   { y: 30, opacity: 0, duration: .8 }, '-=.5')
    .from('.hero__quote',  { y: 20, opacity: 0, duration: .7 }, '-=.5')
    .from('.hero__cta .btn', { y: 20, opacity: 0, duration: .7, stagger: .12 }, '-=.4')
    .from('.hero__stat',   { y: 20, opacity: 0, duration: .6, stagger: .1 }, '-=.3')
    .from('.hero__scroll', { opacity: 0, duration: 1 }, '-=.2');

  initTyped();
  startHeroStatCounters();
}

/* =========================================================
   TYPED.JS
========================================================= */
function initTyped() {
  if (typeof Typed === 'undefined') return;
  new Typed('#typedRole', {
    strings: [
      'Desarrollador Full-Stack',
      'Arquitecto de Software',
      'Apasionado por la Tecnología',
      'Creador de Experiencias Web'
    ],
    typeSpeed: 55,
    backSpeed: 28,
    backDelay: 2200,
    loop: true,
    cursorChar: '|'
  });
}

/* =========================================================
   ANIMATED COUNTERS
========================================================= */
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  gsap.fromTo(el,
    { textContent: 0 },
    {
      textContent: target, duration: 2,
      ease: 'power2.out', snap: { textContent: 1 },
      onUpdate() { el.textContent = Math.round(this.targets()[0].textContent); }
    }
  );
}

function startHeroStatCounters() {
  document.querySelectorAll('.hero__stat-num').forEach(el => animateCounter(el));
}

// About section counters via IntersectionObserver
const aboutStatObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.about__stat-num').forEach(el => animateCounter(el));
      aboutStatObserver.unobserve(e.target);
    }
  });
}, { threshold: .3 });
const aboutStats = document.querySelector('.about__stats');
if (aboutStats) aboutStatObserver.observe(aboutStats);

/* =========================================================
   SKILL BARS
========================================================= */
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const bar = e.target.querySelector('.skill-card__bar');
      if (bar) bar.style.width = bar.dataset.width + '%';
      skillObserver.unobserve(e.target);
    }
  });
}, { threshold: .3 });
document.querySelectorAll('.skill-card').forEach(card => skillObserver.observe(card));

/* =========================================================
   SWIPERS
========================================================= */
// Awards
new Swiper('.awards-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: { el: '.awards-pagination', clickable: true },
  breakpoints: {
    480:  { slidesPerView: 2 },
    768:  { slidesPerView: 3 },
    1024: { slidesPerView: 4 }
  }
});

// Projects
new Swiper('.projects-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: { el: '.projects-pagination', clickable: true },
  navigation: { nextEl: '.projects-next', prevEl: '.projects-prev' },
  breakpoints: {
    768: { slidesPerView: 2 }
  }
});

// Publications
new Swiper('.publications-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: { el: '.publications-pagination', clickable: true },
  breakpoints: {
    768: { slidesPerView: 2 }
  }
});

// Testimonials
new Swiper('.testimonials-swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: { el: '.testimonials-pagination', clickable: true },
  breakpoints: {
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 }
  }
});

/* =========================================================
   MODAL HELPERS
========================================================= */
function openModal(modal) {
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('modal--open');
  document.body.style.overflow = 'hidden';
  const firstFocus = modal.querySelector('button, a, input');
  if (firstFocus) firstFocus.focus();
}

function closeModal(modal) {
  modal.classList.remove('modal--open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupModalClose(modalId, overlayId, closeId) {
  const modal   = document.getElementById(modalId);
  const overlay = document.getElementById(overlayId);
  const btn     = document.getElementById(closeId);
  if (!modal) return;
  overlay.addEventListener('click', () => closeModal(modal));
  btn.addEventListener('click',     () => closeModal(modal));
  modal.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(modal); });
}

setupModalClose('awardModal',   'awardModalOverlay',   'awardModalClose');
setupModalClose('projectModal', 'projectModalOverlay', 'projectModalClose');
setupModalClose('testiModal',   'testiModalOverlay',   'testiModalClose');

/* =========================================================
   AWARDS MODAL
========================================================= */
document.querySelectorAll('.award-card').forEach((card, i) => {
  function trigger() {
    const d = AWARDS_DATA[i];
    if (!d) return;
    const modal = document.getElementById('awardModal');
    document.getElementById('awardModalIcon').innerHTML = d.icon;
    document.getElementById('awardModalTitle').textContent = d.name;
    document.getElementById('awardModalOrg').textContent   = d.org;
    document.getElementById('awardModalDate').textContent  = d.date;
    document.getElementById('awardModalDesc').textContent  = d.desc;
    openModal(modal);
  }
  card.addEventListener('click', trigger);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); } });
});

/* =========================================================
   PROJECT MODAL
========================================================= */
document.querySelectorAll('[data-project]').forEach(btn => {
  btn.addEventListener('click', () => {
    const idx = parseInt(btn.dataset.project);
    const d   = PROJECTS_DATA[idx];
    if (!d) return;
    const modal = document.getElementById('projectModal');

    document.getElementById('projectModalHeader').style.background = d.bg;
    document.getElementById('projectModalHeader').innerHTML = d.icon;
    document.getElementById('projectModalTitle').textContent = d.name;
    document.getElementById('projectModalDesc').textContent  = d.desc;

    const ul = d.features.map(f => `<li>${f}</li>`).join('');
    document.getElementById('projectModalFeatures').innerHTML = `<ul>${ul}</ul>`;

    const tags = d.tags.map(t => {
      const cls = t.toLowerCase().replace('.','').replace(/\s/g,'');
      return `<span class="tag tag--${cls}">${t}</span>`;
    }).join('');
    document.getElementById('projectModalTech').innerHTML = tags;

    document.getElementById('projectModalLinks').innerHTML = `
      <a href="${d.repo}" class="btn btn--outline btn--sm" target="_blank" rel="noopener">
        <i class="ri-github-line"></i> Repositorio
      </a>
      <a href="${d.demo}" class="btn btn--primary btn--sm" target="_blank" rel="noopener">
        <i class="ri-external-link-line"></i> Demo
      </a>
    `;
    openModal(modal);
  });
});

/* =========================================================
   TESTIMONIAL MODAL
========================================================= */
document.querySelectorAll('.testi-card').forEach((card, i) => {
  function trigger() {
    const d = TESTIMONIALS_DATA[i];
    if (!d) return;
    const modal = document.getElementById('testiModal');
    document.getElementById('testiModalAvatar').textContent = d.initial;
    document.getElementById('testiModalName').textContent   = d.name;
    document.getElementById('testiModalCargo').textContent  = d.cargo;
    document.getElementById('testiModalStars').textContent  = d.stars;
    document.getElementById('testiModalQuote').textContent  = `"${d.quote}"`;
    openModal(modal);
  }
  card.addEventListener('click', trigger);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); } });
});

/* =========================================================
   CONTACT FORM
========================================================= */
(function initForm() {
  const nameEl   = document.getElementById('contactName');
  const emailEl  = document.getElementById('contactEmail');
  const msgEl    = document.getElementById('contactMsg');
  const submitEl = document.getElementById('contactSubmit');
  const success  = document.getElementById('formSuccess');

  function validate(el, errorId, validFn) {
    const err = document.getElementById(errorId);
    if (!validFn(el.value.trim())) {
      el.classList.add('error'); err.textContent = getError(errorId);
      return false;
    }
    el.classList.remove('error'); err.textContent = '';
    return true;
  }

  function getError(id) {
    const map = {
      nameError:  'Por favor, ingresa tu nombre.',
      emailError: 'Ingresa un correo electrónico válido.',
      msgError:   'El mensaje debe tener al menos 10 caracteres.'
    };
    return map[id] || '';
  }

  [nameEl, emailEl, msgEl].forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('error');
      const errId = el.id.replace('contact', '').toLowerCase() === 'name'  ? 'nameError'
                  : el.id.replace('contact', '').toLowerCase() === 'email' ? 'emailError'
                  : 'msgError';
      const errEl = document.getElementById(errId);
      if (errEl) errEl.textContent = '';
    });
  });

  submitEl.addEventListener('click', () => {
    const v1 = validate(nameEl,  'nameError',  v => v.length >= 2);
    const v2 = validate(emailEl, 'emailError', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    const v3 = validate(msgEl,   'msgError',   v => v.length >= 10);
    if (!v1 || !v2 || !v3) return;

    submitEl.disabled = true;
    submitEl.innerHTML = '<i class="ri-loader-4-line"></i> Enviando...';

    setTimeout(() => {
      submitEl.disabled = false;
      submitEl.innerHTML = '<span>Enviar mensaje</span><i class="ri-send-plane-line"></i>';
      success.hidden = false;
      nameEl.value = ''; emailEl.value = ''; msgEl.value = '';
      gsap.from(success, { y: 10, opacity: 0, duration: .5, ease: 'expo.out' });
      setTimeout(() => { success.hidden = true; }, 5000);
    }, 1500);
  });
})();

/* =========================================================
   BACK TO TOP
========================================================= */
document.getElementById('backTop')?.addEventListener('click', () => {
  if (lenis) lenis.scrollTo(0, { duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =========================================================
   GSAP SCROLL ANIMATIONS
========================================================= */
// Navbar parallax on hero
gsap.to('.hero__glow--1', {
  y: 80, ease: 'none',
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
});
gsap.to('.hero__glow--2', {
  y: -60, ease: 'none',
  scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
});

// Footer reveal
gsap.from('.footer__inner', {
  y: 40, opacity: 0, duration: 1, ease: 'expo.out',
  scrollTrigger: { trigger: '.footer', start: 'top 90%', once: true }
});

// Stagger skill cards
gsap.utils.toArray('.skill-card').forEach((card, i) => {
  gsap.from(card, {
    opacity: 0, y: 30, duration: .6,
    delay: i * 0.04, ease: 'expo.out',
    scrollTrigger: { trigger: card, start: 'top 90%', once: true }
  });
});

/* =========================================================
   SECTION LABEL GLOW ON SCROLL
========================================================= */
document.querySelectorAll('.section__label').forEach(el => {
  ScrollTrigger.create({
    trigger: el,
    start: 'top 85%',
    once: true,
    onEnter: () => gsap.fromTo(el,
      { scale: .85, opacity: 0 },
      { scale: 1, opacity: 1, duration: .6, ease: 'back.out(2)' }
    )
  });
});

/* =========================================================
   HERO STAT MOUSE PARALLAX
========================================================= */
document.addEventListener('mousemove', e => {
  const xPct = (e.clientX / window.innerWidth  - .5) * 20;
  const yPct = (e.clientY / window.innerHeight - .5) * 20;
  gsap.to('.hero__glow--3', { x: xPct, y: yPct, duration: 2, ease: 'power1.out' });
});
