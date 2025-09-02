// Program data
const programs = {
  1: {
    title: 'عقول وأموال',
    desc: 'بيئة تفاعلية تعمل على ربط أصحاب الأفكار المتميزة بأصحاب الأموال والمستثمرين الباحثين عن الفرص الذكية.',
    price: '1,200 ر.س',
    image: 'https://placehold.co/600x400/1dbcb4/ffffff?text=MONEY+AND+MINDS',
    features: [
      { icon: 'fas fa-clock', text: '6 أشهر' },
      { icon: 'fas fa-users', text: 'مجموعات تفاعلية' },
      { icon: 'fas fa-certificate', text: 'شهادة معتمدة' },
      { icon: 'fas fa-handshake', text: 'ربط المستثمرين' },
    ],
    topics: [
      'آليات الربط بين الأفكار والتمويل',
      'تحليل الفرص الاستثمارية الواعدة',
      'صياغة عروض المشاريع بشكل جذاب',
      'تقنيات التفاوض مع المستثمرين',
      'بناء شبكات العلاقات الاستثمارية',
    ],
  },
  2: {
    title: 'BUSINESS GROUP',
    desc: 'برنامج متخصص في تأسيس المجموعات والتكتلات التجارية ذات رأس المال الصغير والمتناهي الصغر.',
    price: '950 ر.س',
    image: 'https://placehold.co/600x400/1d4e91/ffffff?text=BUSINESS+GROUP',
    features: [
      { icon: 'fas fa-clock', text: '6 أشهر' },
      { icon: 'fas fa-laptop', text: 'أونلاين' },
      { icon: 'fas fa-certificate', text: 'شهادة معتمدة' },
      { icon: 'fas fa-object-group', text: 'بناء التكتلات' },
    ],
    topics: [
      'أسس بناء المجموعات التجارية الناجحة',
      'إدارة رأس المال الصغير والمتناهي الصغر',
      'استراتيجيات النمو للتكتلات التجارية',
      'حل النزاعات داخل المجموعات',
      'نماذج ناجحة للتكتلات التجارية',
    ],
  },
  3: {
    title: 'منتجون',
    desc: 'برنامج متخصص في بناء الأفراد والعائلات المنتجة وتحويلها إلى ماركات تجارية فعالة.',
    price: '1,500 ر.س',
    image: 'https://placehold.co/600x400/4caf50/ffffff?text=PRODUCERS',
    features: [
      { icon: 'fas fa-clock', text: '10 أشهر' },
      { icon: 'fas fa-chalkboard-teacher', text: 'ورش عملية' },
      { icon: 'fas fa-certificate', text: 'شهادة معتمدة' },
      { icon: 'fas fa-industry', text: 'بناء الماركات' },
    ],
    topics: [
      'أسس تحويل الأفراد إلى منتجين',
      'بناء الماركات العائلية والتجارية',
      'استراتيجيات التسويق للمنتجات المحلية',
      'إدارة عمليات الإنتاج والتوزيع',
      'نماذج ناجحة للأسر المنتجة',
    ],
  },
  4: {
    title: 'الجائزة',
    desc: 'برنامج إعلامي ذو شقين (ترفيهي/تعليمي) يهدف إلى نشر وتعزيز ثقافة العمل الحر.',
    price: '700 ر.س',
    image: 'https://placehold.co/600x400/ff9800/ffffff?text=THE+AWARD',
    features: [
      { icon: 'fas fa-clock', text: '10 أشهر' },
      { icon: 'fas fa-laptop', text: 'أونلاين' },
      { icon: 'fas fa-tasks', text: 'تمارين عملية' },
      { icon: 'fas fa-tv', text: 'محتوى إعلامي' },
    ],
    topics: [
      'تعزيز ثقافة العمل الحر في المجتمع',
      'أساليب تقديم المحتوى الترفيهي التعليمي',
      'استراتيجيات إعلامية لنشر الوعي',
      'دراسات حالة لنجاحات العمل الحر',
      'تأثير الإعلام في تشكيل الثقافة المجتمعية',
    ],
  },
  5: {
    title: 'الأمان المالي IDS-7',
    desc: 'مخيم 3*1 (تأهيلي/سياحي/ترفيهي) يهدف إلى تخريج خبراء متخصصون في الأمان الاستثماري وفن اقتناص الفرص.',
    price: '1,000 ر.س',
    image:
      'https://placehold.co/600x400/9c27b0/ffffff?text=FINANCIAL+SECURITY+IDS-7',
    features: [
      { icon: 'fas fa-clock', text: '4 أيام' },
      { icon: 'fas fa-users', text: 'مجموعات صغيرة' },
      { icon: 'fas fa-certificate', text: 'شهادة معتمدة' },
      { icon: 'fas fa-campground', text: 'تجربة مخيم' },
    ],
    topics: [
      'أسس الأمان الاستثماري',
      'فنون اقتناص الفرص الاستثمارية',
      'إدارة المخاطر المالية',
      'التحليل السريع للفرص الاستثمارية',
      'بناء خطة الأمان المالي الشخصي',
    ],
  },
  6: {
    title: 'BUSINESS FAMILY',
    desc: 'برنامج متخصص في بناء التكتلات المالية والتجارية العائلية.',
    price: '1,100 ر.س',
    image: 'https://placehold.co/600x400/e91e63/ffffff?text=BUSINESS+FAMILY',
    features: [
      { icon: 'fas fa-clock', text: '3 أيام' },
      { icon: 'fas fa-chalkboard-teacher', text: 'ورش عملية' },
      { icon: 'fas fa-certificate', text: 'شهادة معتمدة' },
      { icon: 'fas fa-home', text: 'تكتلات عائلية' },
    ],
    topics: [
      'أسس بناء التكتلات العائلية الناجحة',
      'إدارة الشراكات العائلية في الأعمال',
      'استراتيجيات النمو للتكتلات العائلية',
      'حل النزاعات في الأعمال العائلية',
      'نماذج ناجحة للأعمال العائلية',
    ],
  },
  7: {
    title: 'BUSINESS DRIVER',
    desc: 'برنامج متخصص في فنون ومهارات قيادة الأعمال للمبتدئين.',
    price: '1,300 ر.س',
    image: 'https://placehold.co/600x400/607d8b/ffffff?text=BUSINESS+DRIVER',
    features: [
      { icon: 'fas fa-clock', text: '18 ساعة تدريبية' },
      { icon: 'fas fa-users', text: 'مجموعات صغيرة' },
      { icon: 'fas fa-certificate', text: 'شهادة معتمدة' },
      { icon: 'fas fa-car', text: 'قيادة الأعمال' },
    ],
    topics: [
      'مبادئ قيادة الأعمال للمبتدئين',
      'اتخاذ القرارات في بيئة العمل',
      'مهارات التواصل القيادية',
      'إدارة الفرق الصغيرة',
      'أساسيات التخطيط الاستراتيجي',
    ],
  },
  8: {
    title: 'الخارطة - THE MAP',
    desc: 'برنامج متخصص في معرفة خارطة المسار الصحيح في مجال المال والأعمال (من الفكرة إلى الإستدامة) وخطوات تطبيقها الذكية.',
    price: '1,400 ر.س',
    image: 'https://placehold.co/600x400/795548/ffffff?text=THE+MAP',
    features: [
      { icon: 'fas fa-clock', text: '22 ساعة تدريبية' },
      { icon: 'fas fa-laptop', text: 'أونلاين' },
      { icon: 'fas fa-certificate', text: 'شهادة معتمدة' },
      { icon: 'fas fa-map-marked-alt', text: 'خرائط الأعمال' },
    ],
    topics: [
      'رسم خارطة الطريق من الفكرة إلى التنفيذ',
      'مراحل تطوير المشاريع التجارية',
      'استراتيجيات تحقيق الاستدامة',
      'أدوات التخطيط الذكية',
      'دراسات حالة لمسارات ناجحة',
    ],
  },
  9: {
    title: 'kards 4',
    desc: 'برنامج استثماري عبارة عن أربعة كروت كل كرت يحتوي على لون متخصص في باقة خدمات مختلفة.',
    price: '900 ر.س',
    image: 'https://placehold.co/600x400/3f51b5/ffffff?text=kards+4',
    features: [
      { icon: 'fas fa-clock', text: 'مفتوح' },
      { icon: 'fas fa-chalkboard-teacher', text: 'ورش عملية' },
      { icon: 'fas fa-certificate', text: 'شهادة معتمدة' },
      { icon: 'fas fa-credit-card', text: 'كروت متخصصة' },
    ],
    topics: [
      'أنظمة الكروت الاستثمارية',
      'تصميم باقات الخدمات المتخصصة',
      'استراتيجيات التسعير للخدمات',
      'إدارة المحافظ الاستثمارية',
      'نماذج الكروت الناجحة',
    ],
  },
  10: {
    title: 'المنظار - THE SCOPE',
    desc: 'برنامج متخصص في تخريج خبراء في رصد الظواهر السلبية المجتمعية وابتكار حلول لها.',
    price: '1,200 ر.س',
    image: 'https://placehold.co/600x400/009688/ffffff?text=THE+SCOPE',
    features: [
      { icon: 'fas fa-clock', text: '12 يوم' },
      { icon: 'fas fa-users', text: 'مجموعات صغيرة' },
      { icon: 'fas fa-certificate', text: 'شهادة معتمدة' },
      { icon: 'fas fa-binoculars', text: 'رصد الظواهر' },
    ],
    topics: [
      'منهجيات رصد الظواهر المجتمعية',
      'تحليل الأسباب الجذرية للمشكلات',
      'تصميم حلول مبتكرة للتحديات',
      'آليات قياس تأثير الحلول',
      'نماذج ناجحة لمعالجة الظواهر السلبية',
    ],
  },
  11: {
    title: 'برنامج 1 + PLUS',
    desc: 'برنامج التأهيل الاستثماري للأفراد وبناء المحافظ المالية الاقتصادية.',
    price: '1,100 ر.س',
    image: 'https://placehold.co/600x400/ff5722/ffffff?text=1+PLUS',
    features: [
      { icon: 'fas fa-clock', text: '14 ساعة تدريبية' },
      { icon: 'fas fa-users', text: 'مجموعات صغيرة' },
      { icon: 'fas fa-certificate', text: 'شهادة معتمدة' },
      { icon: 'fas fa-chart-line', text: 'بناء المحافظ' },
    ],
    topics: [
      'أساسيات الاستثمار للأفراد',
      'بناء المحافظ المالية المتنوعة',
      'إدارة المخاطر في الاستثمار',
      'استراتيجيات النمو للمحافظ',
      'مراقبة وتقييم الأداء الاستثماري',
    ],
  },
  12: {
    title: 'BUSINESS ACADEMY',
    desc: 'برنامج إعلامي + تعليمي عبارة عن منهج تعليم تفاعلي في فنون إدارة المال والأعمال.',
    price: '1,800 ر.س',
    image: 'https://placehold.co/600x400/673ab7/ffffff?text=BUSINESS+ACADEMY',
    features: [
      { icon: 'fas fa-clock', text: '6 أشهر' },
      { icon: 'fas fa-laptop', text: 'أونلاين' },
      { icon: 'fas fa-certificate', text: 'شهادة معتمدة' },
      { icon: 'fas fa-graduation-cap', text: 'منهج تعليمي' },
    ],
    topics: [
      'فنون إدارة المال والأعمال',
      'منهجية التعليم التفاعلي',
      'دمج الإعلام مع التعليم',
      'استراتيجيات التسويق للمحتوى التعليمي',
      'نماذج ناجحة للأكاديميات المتخصصة',
    ],
  },
};

// Program filter functionality
document.addEventListener('DOMContentLoaded', function () {
  // Video handling
  const video = document.querySelector('.header-video');
  if (video) {
    video.addEventListener('canplay', () => {
      console.log('Video can play');
      video.playbackRate = 0.5;
    });
    video.addEventListener('error', (e) => console.error('Video error:', e));
  }

  // Program filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const programItems = document.querySelectorAll('.program-item');

  filterButtons.forEach((button) => {
    button.addEventListener('click', function () {
      filterButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.classList.remove('active-tab');
      });

      this.classList.add('active');
      this.classList.add('active-tab');

      const filterValue = this.getAttribute('data-filter');

      programItems.forEach((item) => {
        if (
          filterValue === 'all' ||
          item.getAttribute('data-category') === filterValue
        ) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Program modal functionality
  const programModal = document.getElementById('programModal');
  programModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const programId = button.getAttribute('data-program');
    const program = programs[programId];

    document.getElementById('modal-program-title').textContent = program.title;
    document.getElementById('modal-program-desc').textContent = program.desc;
    document.getElementById('modal-program-img').src = program.image;

    // Set features
    const featuresContainer = document.getElementById('modal-program-features');
    featuresContainer.innerHTML = '';
    program.features.forEach((feature) => {
      const featureEl = document.createElement('div');
      featureEl.className = 'modal-feature';
      featureEl.innerHTML = `<i class="${feature.icon}"></i><span>${feature.text}</span>`;
      featuresContainer.appendChild(featureEl);
    });

    // Set topics
    const topicsContainer = document.getElementById('modal-program-topics');
    topicsContainer.innerHTML = '';
    program.topics.forEach((topic) => {
      const topicEl = document.createElement('li');
      topicEl.className = 'list-group-item';
      topicEl.textContent = topic;
      topicsContainer.appendChild(topicEl);
    });
  });

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

        // Update URL hash
        history.pushState(null, null, this.getAttribute('href'));

        // Update active nav link
        updateActiveNavLink();
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
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Update active nav link based on scroll position
      updateActiveNavLink();
    });
  }

  // Active navigation based on scroll position
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 100) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Initialize active nav link
  updateActiveNavLink();

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
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        position: fixed;
        bottom: 50px;
        right: 20px;
        width: 55px;
        height: 55px;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
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

  // WhatsApp sticky button
  const whatsappButton = document.createElement('a');
  whatsappButton.href = 'https://wa.me/+905075203433';
  whatsappButton.target = '_blank';
  whatsappButton.rel = 'noopener noreferrer';
  whatsappButton.className = 'whatsapp-sticky';
  whatsappButton.innerHTML = `<i class="fab fa-whatsapp"></i>`;

  whatsappButton.style.cssText = `
    text-decoration: none;
    position: fixed;
    bottom: 50px;
    right: 20px;
    width: 55px;
    height: 55px;
    background: #25d366;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
    z-index: 2000;
    cursor: pointer;
    transition: background 0.2s, bottom 0.3s;
  `;
  whatsappButton.addEventListener('mouseenter', () => {
    whatsappButton.style.background = '#128c7e';
  });
  whatsappButton.addEventListener('mouseleave', () => {
    whatsappButton.style.background = '#25d366';
  });

  document.body.appendChild(whatsappButton);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
      whatsappButton.style.bottom = '120px';
    } else {
      backToTopButton.classList.remove('visible');
      whatsappButton.style.bottom = '50px';
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

        .back-to-top.visible {
          opacity: 1 !important;
          visibility: visible !important;
        }
      `;
  document.head.appendChild(style);
});
