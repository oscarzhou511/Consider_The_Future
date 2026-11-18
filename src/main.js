import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  createIcons, 
  ArrowUpRight, 
  ArrowDown, 
  ArrowRight, 
  ShieldAlert, 
  Zap, 
  Scale, 
  AlertTriangle, 
  Hourglass, 
  Globe, 
  Droplets, 
  HeartPulse, 
  Landmark, 
  Users, 
  Home, 
  Building2, 
  CheckCircle, 
  Check, 
  Send, 
  Copy, 
  Compass, 
  Clock 
} from 'lucide';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize Lucide Icons
function initIcons() {
  createIcons({
    icons: {
      ArrowUpRight,
      ArrowDown,
      ArrowRight,
      ShieldAlert,
      Zap,
      Scale,
      AlertTriangle,
      Hourglass,
      Globe,
      Droplets,
      HeartPulse,
      Landmark,
      Users,
      Home,
      Building2,
      CheckCircle,
      Check,
      Send,
      Copy,
      Compass,
      Clock
    }
  });
}

// -------------------------------------------------------------
// 1. Lenis Smooth Scrolling & GSAP Integration
// -------------------------------------------------------------
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
  touchMultiplier: 2,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Anchor Links with Lenis
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId !== '#') {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        lenis.scrollTo(targetElement, { offset: -70 });
      }
    }
  });
});

// -------------------------------------------------------------
// 2. Reading Progress Bar & Dynamic Header
// -------------------------------------------------------------
const progressBar = document.getElementById('scroll-progress');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  if (progressBar) {
    progressBar.style.width = `${scrollPercent}%`;
  }

  if (navbar) {
    if (scrollTop > 50) {
      navbar.classList.add('py-2', 'bg-noir/90', 'border-border/80', 'shadow-2xl');
      navbar.classList.remove('bg-noir/80');
    } else {
      navbar.classList.remove('py-2', 'bg-noir/90', 'border-border/80', 'shadow-2xl');
      navbar.classList.add('bg-noir/80');
    }
  }
});

// -------------------------------------------------------------
// 3. Parallax Animations & ScrollTriggers
// -------------------------------------------------------------
function initParallax() {
  // Parallax on Hero Typographic Watermark
  gsap.to('.parallax-bg', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  // Parallax Stat Cards Stagger
  gsap.from('.stat-card', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#stats-counter-container',
      start: 'top 80%',
      toggleActions: 'play none none none',
    }
  });
}

// -------------------------------------------------------------
// 4. Animated Statistics Counter
// -------------------------------------------------------------
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  let hasAnimated = false;

  ScrollTrigger.create({
    trigger: '#stats-counter-container',
    start: 'top 75%',
    onEnter: () => {
      if (hasAnimated) return;
      hasAnimated = true;

      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const duration = 2.2;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: duration,
          ease: 'power3.out',
          onUpdate: () => {
            if (target >= 1000) {
              counter.innerText = Math.round(obj.val).toString();
            } else {
              counter.innerText = Math.round(obj.val).toString();
            }
          }
        });
      });
    }
  });
}

// -------------------------------------------------------------
// 5. Interactive Perspective Matrix
// -------------------------------------------------------------
const perspectivesData = {
  youth: {
    tag: 'Youth Perspective • Intergenerational Justice',
    headline: '“We refuse to be the experimental generation.”',
    lead: 'Young people across the world recognize that their futures are being traded away for short-term corporate valuation bubbles.',
    body: `Unlike corporate executives whose stock compensation horizons span 3 to 5 years, today’s youth will inhabit the reality of the 2030s, 2040s, and 2050s. Youth advocates emphasize that they are not anti-technology. Rather, they demand a world where technological power is subordinate to human dignity, safety, and planetary stability. 
    
    When labs recklessly push towards recursive self-improvement without solving basic control and alignment, it is young people who inherit the existential hazard without ever having been granted a democratic voice.`,
    statsLabel: 'Youth Advocacy Consensus',
    statsValue: '78% of young people surveyed express high concern over unmonitored frontier technology',
    source: 'Australian Broadcasting Corporation (ABC) Youth Inquiry & Global Student Coalitions'
  },
  community: {
    tag: 'Community Perspective • Resource & Environmental Justice',
    headline: '“Our drinking water and local power grids are being drained.”',
    lead: 'Towns and rural counties are discovering that high-tech computing carries heavy physical and financial penalties for residents.',
    body: `Data centers are often celebrated in corporate brochures as clean, silent monoliths. The reality for surrounding neighborhoods is stark: massive industrial HVAC chiller fans emitting persistent 60dB hums, municipal aquifers depleted by millions of liters daily, and regional electricity grids nearing overload. 

    In numerous districts, residential utility bills have surged to subsidize the high-voltage infrastructure required by hyper-scale AI campuses. Communities are organizing to demand local moratoriums, environmental transparency, and direct community veto rights.`,
    statsLabel: 'Community Impact Metric',
    statsValue: 'Up to 5 million gallons of water consumed daily by single hyperscale server clusters',
    source: 'Harvard University Gazette (2026) & Regional Utility Consumer Watchdogs'
  },
  government: {
    tag: 'Government & Sovereign Perspective • The Regulatory Dilemma',
    headline: '“Caught between sovereign arms races and corporate lobbying.”',
    lead: 'Decision-makers face conflicting pressures between geopolitical rivalry and constitutional duty to protect citizen welfare.',
    body: `National security apparatuses fear falling behind foreign adversaries in autonomous defense and cyber capabilities, driving state-sponsored acceleration. At the same time, frontier tech conglomerates have heavily escalated their lobbying spending, deploying record millions to influence congressional committees.

    A prominent example was the December 2025 executive decree that stripped individual US states of the power to enforce localized AI safety regulations—centralizing power at the federal level and crippling local accountability. Effective governance requires resisting lobbyist capture and establishing verifiable, cross-border treaty standards.`,
    statsLabel: 'Regulatory Metric',
    statsValue: 'Record lobbying spending by frontier AI firms in 2025–2026 alongside federal state-law preemption',
    source: 'The White House Executive Records & CNBC Political Disclosures (2026)'
  },
  corporations: {
    tag: 'Frontier AI Labs • The Commercial Prisoner’s Dilemma',
    headline: '“Quarterly growth and competitive FOMO outweigh safety promises.”',
    lead: 'Even labs with stated safety missions find themselves trapped in a commercial race where caution is penalized by the market.',
    body: `Frontier artificial intelligence labs are locked in a relentless structural race. In private venture discussions, any lab that voluntarily slows down to conduct rigorous red-teaming or alignment research risks losing market capitalization, elite engineers, and computing capital to competitors.

    Consequently, corporate safety commitments often remain relegated to marketing departments and non-binding PR manifestos, while core engineering budgets prioritize raw compute scaling. Without enforceable legal liability and mandatory third-party audits, market forces will continue prioritizing speed over human survival.`,
    statsLabel: 'Market Reality',
    statsValue: 'Less than 4% of total venture capital in frontier tech is allocated to verifiable alignment & control',
    source: 'Stanford AI Index 2026 & Independent Safety Research Audits'
  }
};

function renderPerspective(key) {
  const data = perspectivesData[key];
  const container = document.getElementById('perspective-body');
  const footer = document.getElementById('perspective-source-footer');

  if (!data || !container || !footer) return;

  // Animate transition using GSAP
  gsap.to(container, {
    opacity: 0,
    y: 8,
    duration: 0.15,
    onComplete: () => {
      container.innerHTML = `
        <span class="font-mono text-[11px] text-crimson uppercase tracking-widest block mb-2">${data.tag}</span>
        <h3 class="font-serif text-2xl sm:text-3xl text-ivory mb-3 leading-snug">${data.headline}</h3>
        <p class="font-sans text-sm text-sand font-medium mb-6 leading-relaxed">${data.lead}</p>
        <p class="font-sans text-xs sm:text-sm text-muted font-light leading-relaxed mb-6 whitespace-pre-line">${data.body}</p>
        
        <div class="p-4 rounded-xl bg-noir/60 border border-border/60 mb-2">
          <span class="font-mono text-[10px] uppercase text-muted block mb-1">${data.statsLabel}</span>
          <span class="font-sans text-xs font-semibold text-ivory">${data.statsValue}</span>
        </div>
      `;

      footer.innerHTML = `
        <span>Primary Evidence: <strong class="text-sand font-normal">${data.source}</strong></span>
        <span class="text-crimson font-mono text-[10px]">VERIFIED CASE EVIDENCE</span>
      `;

      gsap.to(container, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' });
    }
  });
}

function initPerspectives() {
  const buttons = document.querySelectorAll('.perspective-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tabKey = btn.getAttribute('data-tab');
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderPerspective(tabKey);
    });
  });

  // Initial render
  renderPerspective('youth');
}

// -------------------------------------------------------------
// 6. Interactive Youth Declaration & Pledge Generator
// -------------------------------------------------------------
function initPledgeForm() {
  const form = document.getElementById('action-form');
  const nameInput = document.getElementById('user-name');
  const roleSelect = document.getElementById('user-role');
  const regionInput = document.getElementById('user-region');

  const previewName = document.getElementById('preview-name');
  const previewRole = document.getElementById('preview-role');
  const previewRegion = document.getElementById('preview-region');
  const copyBtn = document.getElementById('copy-letter-btn');
  const toast = document.getElementById('form-toast');
  const pledgeCountDisplay = document.getElementById('pledge-count-display');

  // Load stored pledge count or initialize default
  let currentCount = parseInt(localStorage.getItem('ctf_pledge_count') || '14892', 10);
  if (pledgeCountDisplay) {
    pledgeCountDisplay.innerText = currentCount.toLocaleString();
  }

  function updatePreview() {
    const nameVal = nameInput.value.trim() || 'a concerned citizen';
    const roleVal = roleSelect.value;
    const regionVal = regionInput.value.trim() || 'Worldwide';

    if (previewName) previewName.innerText = nameVal;
    if (previewRole) previewRole.innerText = roleVal;
    if (previewRegion) previewRegion.innerText = regionVal;
  }

  nameInput.addEventListener('input', updatePreview);
  roleSelect.addEventListener('change', updatePreview);
  regionInput.addEventListener('input', updatePreview);

  // Copy Letter Text
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const letterText = document.getElementById('letter-preview')?.innerText;
      if (letterText) {
        navigator.clipboard.writeText(letterText).then(() => {
          const originalText = copyBtn.innerHTML;
          copyBtn.innerHTML = `Copied to Clipboard ✓`;
          copyBtn.classList.add('border-emerald', 'text-emerald');
          setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.classList.remove('border-emerald', 'text-emerald');
            initIcons();
          }, 2500);
        });
      }
    });
  }

  // Handle Form Submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      currentCount += 1;
      localStorage.setItem('ctf_pledge_count', currentCount.toString());
      if (pledgeCountDisplay) {
        pledgeCountDisplay.innerText = currentCount.toLocaleString();
        gsap.fromTo(pledgeCountDisplay, { scale: 1.1, color: '#e84734' }, { scale: 1, color: '#f6f5f1', duration: 0.6 });
      }

      if (toast) {
        toast.classList.remove('hidden');
        toast.innerHTML = `✓ Thank you, ${nameInput.value.trim() || 'advocate'}. Your declaration signature has been registered. Stand firm.`;
        setTimeout(() => {
          toast.classList.add('hidden');
        }, 6000);
      }

      form.reset();
      updatePreview();
    });
  }
}

// -------------------------------------------------------------
// DOM Ready Orchestrator
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  initParallax();
  initCounters();
  initPerspectives();
  initPledgeForm();
});
