import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Lenis smooth scroll ──
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);


// ── Fade-in sections on scroll ──
function initReveal() {
  const panels = document.querySelectorAll('.panel .content');

  panels.forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => el.classList.add('visible'),
    });
  });

  // Make the first panel visible immediately
  if (panels.length > 0) {
    panels[0].classList.add('visible');
  }
}


// ── Animated counters ──
function initCounters() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    const target = parseFloat(counter.getAttribute('data-target'));

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power3.out',
          onUpdate: () => {
            counter.innerText = Math.round(obj.val);
          },
        });
      },
    });
  });
}


// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initCounters();
});
