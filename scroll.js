// Reveal-on-scroll, count-up, parallax — native scroll (no wheel interception)
(function() {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = matchMedia('(max-width: 768px)').matches;

  // ===== Smooth anchor jumps only =====
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  // ===== Reveal on scroll =====
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  const tagReveals = () => {
    document.querySelectorAll('.section-head').forEach(el => el.setAttribute('data-reveal', ''));
    document.querySelectorAll('.metrics-grid, .features-grid, .testi-grid, .tech-grid, .funnel-grid, .funnel-detail, .bd-tiles, .vsl-wrap, .marquee').forEach(el => el.setAttribute('data-stagger', ''));
    document.querySelectorAll('.bigchart, .bigdash, .funnel-canvas, .final-cta').forEach(el => el.setAttribute('data-reveal', 'scale'));
    document.querySelectorAll('[data-reveal], [data-stagger]').forEach(el => io.observe(el));
  };

  // ===== Number count-up =====
  const countUp = (el) => {
    const final = el.textContent.trim();
    const match = final.match(/^([^\d]*)([\d,.]+)([^\d]*)$/);
    if (!match) return;
    const prefix = match[1], numStr = match[2], suffix = match[3];
    const isFloat = numStr.includes('.');
    const num = parseFloat(numStr.replace(/,/g, ''));
    if (isNaN(num)) return;
    const duration = 1300;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = num * eased;
      const formatted = isFloat
        ? v.toFixed(numStr.split('.')[1].length)
        : Math.round(v).toLocaleString();
      el.textContent = prefix + formatted + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const tagCounters = () => {
    const cIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          cIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('.metric-card .num, .vsl-side-card .big, .pull-stat .v, .bd-tile .val').forEach(el => {
      if (/\d/.test(el.textContent)) cIO.observe(el);
    });
  };

  // ===== Hero dashboard parallax =====
  const initParallax = () => {
    const dash = document.querySelector('.dash-mock');
    if (!dash || isMobile || reduceMotion) return;
    let mx = 0, my = 0, tx = 0, ty = 0;
    const heroEl = dash.closest('.hero');
    heroEl.addEventListener('mousemove', (e) => {
      const rect = heroEl.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      my = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    });
    heroEl.addEventListener('mouseleave', () => { mx = 0; my = 0; });
    const card = dash.querySelector('.dash-card');
    const fc1 = dash.querySelector('.fc-1');
    const fc2 = dash.querySelector('.fc-2');
    const tick = () => {
      tx += (mx - tx) * 0.08;
      ty += (my - ty) * 0.08;
      if (card) card.style.transform = `rotateY(${-3 + tx * 4}deg) rotateX(${2 - ty * 4}deg)`;
      if (fc1) fc1.style.transform = `translate(${tx * -10}px, ${ty * -8}px)`;
      if (fc2) fc2.style.transform = `translate(${tx * 12}px, ${ty * 10}px)`;
      requestAnimationFrame(tick);
    };
    tick();
  };

  const init = () => { tagReveals(); tagCounters(); initParallax(); };
  let attempts = 0;
  const wait = () => {
    if (document.querySelector('.metric-card') || attempts > 40) { init(); return; }
    attempts++;
    setTimeout(wait, 50);
  };
  if (document.readyState === 'complete' || document.readyState === 'interactive') wait();
  else document.addEventListener('DOMContentLoaded', wait);
})();
