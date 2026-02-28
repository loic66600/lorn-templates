/* LORN Animation Engine — Vanilla JS */

// Scroll Reveal
function initReveal() {
  const els = document.querySelectorAll(
    '.reveal,.slide-left,.slide-right,.scale-in,.blur-sharp,.rotate-in,.clip-reveal,.masonry-item'
  );
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

// Parallax
function initParallax() {
  const els = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (!els.length) return;
  function tick() {
    els.forEach(el => {
      const speed = parseFloat(el.dataset.parallax || '0.3');
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// Tilt 3D
function initTilt() {
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach(el => {
    const power = parseFloat(el.dataset.tilt || '8');
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const rx = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -power;
      const ry = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * power;
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
      el.style.transition = 'transform 0.1s ease';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
    });
  });
}

// Counter
function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target as HTMLElement;
      const target = parseInt(el.dataset.count || '0', 10);
      const suffix = el.dataset.suffix || '';
      const start = performance.now();
      function tick(now: number) {
        const p = Math.min((now - start) / 1500, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal(); initParallax(); initTilt(); initCounters();
});
