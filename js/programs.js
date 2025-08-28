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
    desc: 'برrogram إعلامي + تعليمي عبارة عن منهج تعليم تفاعلي في فنون إدارة المال والأعمال.',
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
    document.getElementById('modal-program-price').textContent = program.price;
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
});
