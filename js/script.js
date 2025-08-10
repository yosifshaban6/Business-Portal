// Main JavaScript file for Business Portal

document.addEventListener('DOMContentLoaded', function () {
  // Video handling
  const video = document.querySelector('.header-video');
  if (video) {
    video.addEventListener('loadstart', () =>
      console.log('Video loading started')
    );
    video.addEventListener('canplay', () => {
      console.log('Video can play');
      video.playbackRate = 0.5;
    });
    video.addEventListener('error', (e) => console.error('Video error:', e));
    video.addEventListener('loadeddata', () =>
      console.log('Video data loaded')
    );
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe elements for scroll animations
  document
    .querySelectorAll(
      '.service-card, .mission-card, .value-card, .team-card, .stat-item'
    )
    .forEach((el) => {
      el.classList.add('scroll-animate');
      observer.observe(el);
    });

  // Navbar background on scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
      } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = '';
      }
    });
  }

  // CTA button interactions
  document.querySelectorAll('.cta-button').forEach((button) => {
    button.addEventListener('click', function (e) {
      // Add ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Counter animation for stats
  function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
      start += increment;
      if (start < target) {
        element.textContent = Math.floor(start) + '+';
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + '+';
      }
    }

    updateCounter();
  }

  // Trigger counter animation when stats section is visible
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.stat-item h3');
          counters.forEach((counter) => {
            const target = parseInt(counter.textContent);
            animateCounter(counter, target);
          });
          statsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsSection = document.querySelector('.stats-row');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  // Mobile menu improvements
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggler && navbarCollapse) {
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (
        !navbar.contains(e.target) &&
        navbarCollapse.classList.contains('show')
      ) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  }

  // Parallax effect for hero section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.header-video');
    if (parallax) {
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    }
  });

  // Form handling (if forms are added later)
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Add form submission logic here
      console.log('Form submitted');
    });
  });

  // Loading animation
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });

  // Back to top button
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopButton.className = 'back-to-top';
  backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #17a085, #1dcdb4);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(29, 205, 180, 0.3);
    `;

  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.opacity = '1';
      backToTopButton.style.visibility = 'visible';
    } else {
      backToTopButton.style.opacity = '0';
      backToTopButton.style.visibility = 'hidden';
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Add ripple effect styles
  const style = document.createElement('style');
  style.textContent = `
        .cta-button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        body.loaded {
            opacity: 1;
        }
        
        body {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
    `;
  document.head.appendChild(style);
});

// Utility functions
const Utils = {
  // Debounce function
  debounce: function (func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  },

  // Throttle function
  throttle: function (func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Format number with commas
  formatNumber: function (num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
};

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Utils;
}
