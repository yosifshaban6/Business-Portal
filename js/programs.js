// Program data
const programs = {
  1: {
    title: "عقول وأموال",
    desc: "برنامج متكامل يجمع بين تطوير العقلية الاستثمارية والمهارات المالية لتحقيق النجاح في عالم الأعمال.",
    price: "1,200 ر.س",
    image: "https://placehold.co/600x400/1dbcb4/ffffff?text=MONEY",
    features: [
      { icon: "fas fa-clock", text: "8 أسابيع" },
      { icon: "fas fa-users", text: "مجموعات صغيرة" },
      { icon: "fas fa-certificate", text: "شهادة معتمدة" },
      { icon: "fas fa-brain", text: "تطوير العقلية الاستثمارية" }
    ],
    topics: [
      "أساسيات الاستثمار الناجح",
      "تحليل الفرص الاستثمارية",
      "إدارة المحافظ الاستثمارية",
      "التخطيط المالي الشخصي",
      "استراتيجيات تنمية الثروة"
    ]
  },
  2: {
    title: "BUSINESS GROUP",
    desc: "برنامج متخصص في بناء وتطوير مجموعات العمل الفعالة لتحقيق التكامل والنجاح المؤسسي.",
    price: "950 ر.س",
    image: "https://placehold.co/600x400/1d4e91/ffffff?text=BUSINESS+GROUP",
    features: [
      { icon: "fas fa-clock", text: "6 أسابيع" },
      { icon: "fas fa-laptop", text: "أونلاين" },
      { icon: "fas fa-certificate", text: "شهادة معتمدة" },
      { icon: "fas fa-handshake", text: "بناء شبكات عمل" }
    ],
    topics: [
      "أسس بناء فرق العمل الفعالة",
      "إدارة ديناميكيات المجموعة",
      "تحسين التواصل داخل الفريق",
      "حل النزاعات داخل المجموعات",
      "قيادة المجموعات نحو النجاح"
    ]
  },
  3: {
    title: "منتجون",
    desc: "برنامج يركز على تطوير مهارات الإنتاجية وزيادة الكفاءة في بيئة العمل لتحقيق أقصى استفادة من الوقت والموارد.",
    price: "1,500 ر.س",
    image: "https://placehold.co/600x400/4caf50/ffffff?text=منتجون",
    features: [
      { icon: "fas fa-clock", text: "10 أسابيع" },
      { icon: "fas fa-chalkboard-teacher", text: "ورش عملية" },
      { icon: "fas fa-certificate", text: "شهادة معتمدة" },
      { icon: "fas fa-chart-line", text: "زيادة الإنتاجية" }
    ],
    topics: [
      "مبادئ الإدارة الفعالة للوقت",
      "أدوات زيادة الإنتاجية",
      "إدارة الأولويات والمهام",
      "تقنيات التركيز والانتباه",
      "قياس وتحسين الأداء"
    ]
  },
  4: {
    title: "الجائزة",
    desc: "برنامج تحفيزي يهدف إلى تعزيز الأداء الفردي والمؤسسي من خلال نظام المكافآت والتقدير.",
    price: "700 ر.س",
    image: "https://placehold.co/600x400/ff9800/ffffff?text=الجائزة",
    features: [
      { icon: "fas fa-clock", text: "4 أسابيع" },
      { icon: "fas fa-laptop", text: "أونلاين" },
      { icon: "fas fa-tasks", text: "تمارين عملية" },
      { icon: "fas fa-trophy", text: "نظام المكافآت" }
    ],
    topics: [
      "أنظمة الحوافز والمكافآت",
      "تأثير التقدير على الأداء",
      "تصميم برامج المكافآت الفعالة",
      "قياس فعالية أنظمة التحفيز",
      "دراسات حالة لأنظمة ناجحة"
    ]
  },
  5: {
    title: "الأمان المالي IDS-7",
    desc: "برنامج متخصص في تحقيق الاستقرار والأمان المالي من خلال استراتيجيات مدروسة وأدوات عملية.",
    price: "1,000 ر.س",
    image: "https://placehold.co/600x400/9c27b0/ffffff?text=الأمان+المالي",
    features: [
      { icon: "fas fa-clock", text: "5 أسابيع" },
      { icon: "fas fa-users", text: "مجموعات صغيرة" },
      { icon: "fas fa-certificate", text: "شهادة معتمدة" },
      { icon: "fas fa-shield-alt", text: "استراتيجيات الأمان المالي" }
    ],
    topics: [
      "أساسيات الأمان المالي",
      "إدارة المخاطر المالية",
      "التخطيط للطوارئ المالية",
      "بناء صندوق الطوارئ",
      "استراتيجيات الاستثمار الآمن"
    ]
  },
  6: {
    title: "BUSINESS FAMILY",
    desc: "برنامج فريد يدمج بين قيم العائلة واستراتيجيات العمل لبناء مؤسسات عائلية ناجحة ومستدامة.",
    price: "1,100 ر.س",
    image: "https://placehold.co/600x400/e91e63/ffffff?text=BUSINESS+FAMILY",
    features: [
      { icon: "fas fa-clock", text: "7 أسابيع" },
      { icon: "fas fa-chalkboard-teacher", text: "ورش عملية" },
      { icon: "fas fa-certificate", text: "شهادة معتمدة" },
      { icon: "fas fa-home", text: "دمج قيم العائلة" }
    ],
    topics: [
      "إدارة الأعمال العائلية",
      "تخطيط succession",
      "حل النزاعات العائلية في العمل",
      "الحفاظ على القيم العائلية",
      "استدامة الأعمال العائلية"
    ]
  },
  7: {
    title: "BUSINESS DRIVER",
    desc: "برنامج قيادة الأعمال الذي يزودك بالمهارات والأدوات اللازمة لقيادة مؤسستك نحو النجاح والتميز.",
    price: "1,300 ر.س",
    image: "https://placehold.co/600x400/607d8b/ffffff?text=BUSINESS+DRIVER",
    features: [
      { icon: "fas fa-clock", text: "6 أسابيع" },
      { icon: "fas fa-users", text: "مجموعات صغيرة" },
      { icon: "fas fa-certificate", text: "شهادة معتمدة" },
      { icon: "fas fa-car", text: "قيادة الأعمال" }
    ],
    topics: [
      "مبادئ القيادة الفعالة",
      "اتخاذ القرارات الاستراتيجية",
      "إدارة التغيير التنظيمي",
      "قيادة فرق العمل",
      "التخطيط الاستراتيجي للمؤسسات"
    ]
  },
  8: {
    title: "الخارطة - THE MAP",
    desc: "برنامج التخطيط الاستراتيجي الشخصي والمهني الذي يساعدك على رسم خارطة طريق لتحقيق أهدافك.",
    price: "1,400 ر.س",
    image: "https://placehold.co/600x400/795548/ffffff?text=الخارطة",
    features: [
      { icon: "fas fa-clock", text: "8 أسابيع" },
      { icon: "fas fa-laptop", text: "أونلاين" },
      { icon: "fas fa-certificate", text: "شهادة معتمدة" },
      { icon: "fas fa-map", text: "رسم خارطة طريق" }
    ],
    topics: [
      "التخطيط الاستراتيجي الشخصي",
      "وضع الأهداف الذكية (SMART)",
      "رسم خارطة الحياة المهنية",
      "تحديد الأولويات والمسارات",
      "متابعة وتقييم التقدم"
    ]
  },
  9: {
    title: "kards 4",
    desc: "برنامج التفكير الإبداعي وحل المشكلات باستخدام منهجية مبتكرة تعتمد على تقنيات التفكير البصري.",
    price: "900 ر.س",
    image: "https://placehold.co/600x400/3f51b5/ffffff?text=kards+4",
    features: [
      { icon: "fas fa-clock", text: "5 أسابيع" },
      { icon: "fas fa-chalkboard-teacher", text: "ورش عملية" },
      { icon: "fas fa-certificate", text: "شهادة معتمدة" },
      { icon: "fas fa-lightbulb", text: "التفكير الإبداعي" }
    ],
    topics: [
      "مبادئ التفكير الإبداعي",
      "تقنيات حل المشكلات",
      "التفكير البصري والخرائط الذهنية",
      "تطوير الأفكار المبتكرة",
      "تنفيذ الحلول الإبداعية"
    ]
  },
  10: {
    title: "البرنامج الشامل للترشيد والتنمية",
    desc: "برنامج متكامل يجمع بين ترشيد الإنكار والتنمية المالية لتحقيق التوازن المالي والنمو المستدام.",
    price: "2,000 ر.س",
    image: "https://placehold.co/600x400/009688/ffffff?text=الترشيد+والتنمية",
    features: [
      { icon: "fas fa-clock", text: "12 أسبوع" },
      { icon: "fas fa-users", text: "مجموعات صغيرة" },
      { icon: "fas fa-certificate", text: "شهادة معتمدة" },
      { icon: "fas fa-balance-scale", text: "الترشيد والتنمية" }
    ],
    topics: [
      "أساسيات الترشيد المالي",
      "استراتيجيات تقليل الإنفاق",
      "تنمية الموارد المالية",
      "التوازن بين الترشيد والاستثمار",
      "خطط التنمية المالية المستدامة"
    ]
  }
};

// Program filter functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const programItems = document.querySelectorAll('.program-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      const filterValue = this.getAttribute('data-filter');
      
      programItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Program modal functionality
  const programModal = document.getElementById('programModal');
  programModal.addEventListener('show.bs.modal', function(event) {
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
    program.features.forEach(feature => {
      const featureEl = document.createElement('div');
      featureEl.className = 'modal-feature';
      featureEl.innerHTML = `<i class="${feature.icon}"></i><span>${feature.text}</span>`;
      featuresContainer.appendChild(featureEl);
    });
    
    // Set topics
    const topicsContainer = document.getElementById('modal-program-topics');
    topicsContainer.innerHTML = '';
    program.topics.forEach(topic => {
      const topicEl = document.createElement('li');
      topicEl.className = 'list-group-item';
      topicEl.textContent = topic;
      topicsContainer.appendChild(topicEl);
    });
  });
});
