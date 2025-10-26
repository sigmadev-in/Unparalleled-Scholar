// UI/UX Enhancements
// Developed by Srijanxi Technologies
// Project: US.V1 - Unparalleled Scholar

// ========================================
// 1. BREADCRUMB NAVIGATION
// ========================================
function initBreadcrumb() {
  const breadcrumb = document.getElementById('breadcrumb');
  if (!breadcrumb) return;

  const path = window.location.pathname;
  const segments = path.split('/').filter(seg => seg);
  
  let breadcrumbHTML = '<a href="/">Home</a>';
  let currentPath = '';
  
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const name = segment.replace('.html', '').replace(/-/g, ' ');
    const displayName = name.charAt(0).toUpperCase() + name.slice(1);
    
    if (index === segments.length - 1) {
      breadcrumbHTML += ` <span class="separator">/</span> <span class="current">${displayName}</span>`;
    } else {
      breadcrumbHTML += ` <span class="separator">/</span> <a href="${currentPath}">${displayName}</a>`;
    }
  });
  
  breadcrumb.innerHTML = breadcrumbHTML;
}

// ========================================
// 2. READING PROGRESS BAR
// ========================================
function initProgressBar() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / documentHeight) * 100;
    
    progressBar.style.width = `${Math.min(progress, 100)}%`;
  });
}

// ========================================
// 3. ENHANCED BACK TO TOP BUTTON
// ========================================
function initBackToTop() {
  const backToTop = document.getElementById('back-to-top');
  if (!backToTop) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ========================================
// 4. SMOOTH PAGE TRANSITIONS
// ========================================
function initPageTransitions() {
  // Fade in on page load
  document.body.style.opacity = '0';
  window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  });

  // Fade out on navigation
  document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && !href.startsWith('#')) {
        e.preventDefault();
        document.body.style.opacity = '0';
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    });
  });
}

// ========================================
// 5. PARALLAX SCROLLING
// ========================================
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(window.scrollY * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
}

// ========================================
// 6. LOADING ANIMATIONS
// ========================================
class LoadingSpinner {
  constructor() {
    this.spinner = null;
  }

  show(message = 'Loading...') {
    this.hide(); // Remove existing spinner
    
    this.spinner = document.createElement('div');
    this.spinner.className = 'loading-spinner-overlay';
    this.spinner.innerHTML = `
      <div class="loading-spinner">
        <div class="spinner-ring"></div>
        <p class="spinner-text">${message}</p>
      </div>
    `;
    
    document.body.appendChild(this.spinner);
  }

  hide() {
    if (this.spinner) {
      this.spinner.remove();
      this.spinner = null;
    }
  }
}

// ========================================
// 7. TYPING ANIMATION
// ========================================
class TypingAnimation {
  constructor(element, texts, speed = 100) {
    this.element = element;
    this.texts = texts;
    this.speed = speed;
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
  }

  type() {
    const currentText = this.texts[this.textIndex];
    
    if (this.isDeleting) {
      this.element.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.element.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.speed;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.charIndex === currentText.length) {
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }

  start() {
    this.type();
  }
}

// ========================================
// 8. PRINT OPTIMIZATION
// ========================================
function initPrintOptimization() {
  window.addEventListener('beforeprint', () => {
    document.body.classList.add('printing');
  });

  window.addEventListener('afterprint', () => {
    document.body.classList.remove('printing');
  });
}

// ========================================
// 9. SCROLL REVEAL ANIMATIONS
// ========================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('[data-reveal]');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initBreadcrumb();
  initProgressBar();
  initBackToTop();
  initPageTransitions();
  initParallax();
  initPrintOptimization();
  initScrollReveal();

  // Initialize typing animation if element exists
  const typingElement = document.querySelector('[data-typing]');
  if (typingElement) {
    const texts = JSON.parse(typingElement.dataset.typing || '["Welcome"]');
    const typing = new TypingAnimation(typingElement, texts);
    typing.start();
  }
});

// Export utilities
window.UIEnhancements = {
  LoadingSpinner,
  TypingAnimation,
  initBreadcrumb,
  initProgressBar,
  initParallax,
};
