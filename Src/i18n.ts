import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      // Navbar
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      tools: 'الأدوات',
      team: 'فريقنا',
      contact: 'تواصل معنا',
      getQuote: 'احصل على عرض',
      
      // Hero
      heroBadge: 'نحن نبني جسور النجاح',
      heroTitle1: 'جسر التجارة',
      heroTitle2: 'العالمية',
      heroSubtitle: 'نربط الشركات بالعالم. نساعد الشركات على الوصول إلى أسواق جديدة والنمو عالمياً. متخصصون في التسويق والتوزيع الدولي للمنتجات.',
      startNow: 'ابدأ معنا الآن',
      learnMore: 'تعرف علينا',
      salesGrowth: 'نمو المبيعات',
      happyClients: 'عميل سعيد',
      countries: 'دولة',
      
      // About
      aboutBadge: 'تعرف علينا',
      aboutTitle: 'من نحن؟',
      aboutDesc: 'Global Trade Bridge هي شركة رائدة في مجال التجارة الدولية، نساعد الشركات على بناء جسور النجاح والوصول إلى الأسواق العالمية بكفاءة واحترافية',
      mission: 'رسالتنا',
      missionDesc: 'تمكين الشركات من التوسع عالمياً من خلال حلول تجارية مبتكرة وشراكات استراتيجية',
      vision: 'رؤيتنا',
      visionDesc: 'أن نكون الشريك المفضل للشركات التي تسعى للنمو الدولي والتميز في الأسواق العالمية',
      values: 'قيمنا',
      valuesDesc: 'النزاهة، الاحترافية، الابتكار، والالتزام بتحقيق النتائج المتميزة لعملائنا',
      whyChooseUs: 'لماذا تختار Global Trade Bridge؟',
      whyChooseDesc: 'نحن نفهم تحديات التوسع الدولي ونوفر لك الحلول الشاملة لتحقيق أهدافك. فريقنا من الخبراء يعمل معك في كل خطوة لضمان نجاحك في الأسواق العالمية.',
      
      // Services
      servicesBadge: 'خدماتنا المتميزة',
      servicesTitle: 'حلول شاملة لنجاحك',
      servicesDesc: 'نقدم مجموعة متكاملة من الخدمات المصممة خصيصاً لمساعدة شركتك على النمو والتوسع في الأسواق العالمية',
      internationalMarketing: 'التسويق الدولي',
      marketingShort: 'استراتيجيات تسويقية مخصصة للأسواق العالمية',
      marketingFull: 'نقدم استراتيجيات تسويقية شاملة ومخصصة لكل سوق مستهدف. تشمل خدماتنا البحث السوقي، تحليل المنافسين، وضع استراتيجية المحتوى، وإدارة الحملات الإعلانية على المنصات العالمية.',
      logistics: 'التوزيع واللوجستيات',
      logisticsShort: 'حلول لوجستية متكاملة لتوصيل منتجاتك',
      logisticsFull: 'نوفر حلول لوجستية متكاملة تشمل التخزين، التغليف، الشحن، والتوصيل إلى أكثر من 50 دولة حول العالم. نضمن وصول منتجاتك بأمان وفي الوقت المحدد.',
      consulting: 'الاستشارات التجارية',
      consultingShort: 'استشارات احترافية للتوسع الدولي',
      consultingFull: 'فريق من الخبراء يقدم استشارات شاملة للتوسع الدولي. نساعدك في فهم المتطلبات القانونية، الضريبية، والتجارية لكل سوق.',
      digitalMarketing: 'التسويق الرقمي',
      digitalShort: 'حملات تسويقية رقمية مؤثرة',
      digitalFull: 'نصمم وننفذ حملات تسويق رقمي فعالة على جميع المنصات. تشمل SEO، SEM، التسويق عبر وسائل التواصل الاجتماعي، والتسويق بالمحتوى.',
      dataAnalysis: 'تحليل البيانات',
      dataShort: 'رؤى عميقة لاتخاذ قرارات مدروسة',
      dataFull: 'نستخدم أحدث أدوات تحليل البيانات لتقديم رؤى عميقة عن أداء أعمالك. نساعدك في فهم سلوك العملاء وتحديد الفرص الجديدة.',
      businessDev: 'تطوير الأعمال',
      devShort: 'استراتيجيات نمو مستدامة',
      devFull: 'نساعدك في تطوير استراتيجيات نمو مستدامة لأعمالك. من تحديد الفرص الجديدة إلى تنفيذ خطط التوسع بكفاءة.',
      discoverMore: 'اكتشف المزيد',
      customSolution: 'هل تحتاج إلى حل مخصص؟',
      customDesc: 'فريقنا جاهز لمساعدتك في إيجاد الحل المثلى لاحتياجات عملك الخاصة',
      
      // Stats
      statsTitle: 'أرقام تتحدث عن نجاحنا',
      statsDesc: 'نفخر بإنجازاتنا وثقة عملائنا فينا',
      happyClientsStat: 'عميل سعيد',
      countriesStat: 'دولة',
      projectsStat: 'مشروع ناجح',
      experienceStat: 'سنة خبرة',
      satisfactionStat: 'نسبة الرضا',
      supportStat: 'دعم مستمر',
      joinUs: 'انضم إلى قائمة عملائنا الناجحين اليوم',
      startJourney: 'ابدأ رحلتك معنا',
      
      // Portfolio
      portfolioBadge: 'أعمالنا',
      portfolioTitle: 'قصص نجاح عملائنا',
      portfolioDesc: 'استعرض بعض المشاريع الناجحة التي قمنا بتنفيذها لعملائنا في مختلف الصناعات والأسواق',
      viewAll: 'عرض الكل',
      
      // Tools
      toolsBadge: 'أدواتنا الذكية',
      toolsTitle: 'أدوات احترافية لمساعدتك',
      toolsDesc: 'استخدم أدواتنا المتقدمة للحصول على تحليلات دقيقة ومساعدة في اتخاذ القرارات',
      currencyConverter: 'محول العملات',
      currencyDesc: 'حول العملات بأسعار الصرف المباشرة',
      shippingCalculator: 'حاسبة الشحن',
      shippingDesc: 'احسب تكلفة الشحن الدولي',
      marketAnalyzer: 'محلل السوق',
      marketDesc: 'تحليل اتجاهات السوق العالمية',
      businessPlanner: 'مخطط الأعمال',
      plannerDesc: 'خطط استراتيجية توسعك الدولي',
      
      // Team
      teamBadge: 'فريقنا',
      teamTitle: 'تعرف على خبرائنا',
      teamDesc: 'فريق من المحترفين ذوي الخبرة الواسعة في التجارة الدولية',
      
      // Testimonials
      testimonialsBadge: 'آراء العملاء',
      testimonialsTitle: 'ماذا يقول عملاؤنا؟',
      testimonialsDesc: 'نفخر بثقة عملائنا ونجاحاتهم التي حققناها معاً',
      
      // Contact
      contactBadge: 'تواصل معنا',
      contactTitle: 'دعنا نبدأ معاً',
      contactDesc: 'تواصل معنا اليوم ودعنا نساعدك في تحقيق أهدافك التجارية',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      address: 'العنوان',
      followUs: 'تابعنا',
      sendMessage: 'أرسل رسالتك',
      name: 'الاسم',
      company: 'الشركة',
      message: 'الرسالة',
      send: 'إرسال',
      
      // Footer
      footerDesc: 'نربط الشركات بالعالم ونساعدها على النمو والتوسع في الأسواق الدولية',
      quickLinks: 'روابط سريعة',
      ourServices: 'خدماتنا',
      contactInfo: 'معلومات التواصل',
      rights: 'جميع الحقوق محفوظة',
      
      // Chat
      chatTitle: 'المساعد الذكي',
      chatPlaceholder: 'اكتب رسالتك هنا...',
      chatWelcome: 'مرحباً! أنا مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟',
    }
  },
  en: {
    translation: {
      // Navbar
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio',
      tools: 'Tools',
      team: 'Our Team',
      contact: 'Contact Us',
      getQuote: 'Get a Quote',
      
      // Hero
      heroBadge: 'We Build Success Bridges',
      heroTitle1: 'Global Trade',
      heroTitle2: 'Bridge',
      heroSubtitle: 'We connect businesses to the world. We help companies reach new markets and grow globally. Specialized in international marketing and product distribution.',
      startNow: 'Start With Us',
      learnMore: 'Learn More',
      salesGrowth: 'Sales Growth',
      happyClients: 'Happy Clients',
      countries: 'Countries',
      
      // About
      aboutBadge: 'About Us',
      aboutTitle: 'Who We Are?',
      aboutDesc: 'Global Trade Bridge is a leading international trade company, helping businesses build success bridges and reach global markets efficiently and professionally',
      mission: 'Our Mission',
      missionDesc: 'Empowering businesses to expand globally through innovative business solutions and strategic partnerships',
      vision: 'Our Vision',
      visionDesc: 'To be the preferred partner for companies seeking international growth and excellence in global markets',
      values: 'Our Values',
      valuesDesc: 'Integrity, professionalism, innovation, and commitment to achieving outstanding results for our clients',
      whyChooseUs: 'Why Choose Global Trade Bridge?',
      whyChooseDesc: 'We understand the challenges of international expansion and provide comprehensive solutions to achieve your goals. Our team of experts works with you every step to ensure your success in global markets.',
      
      // Services
      servicesBadge: 'Our Premium Services',
      servicesTitle: 'Comprehensive Solutions for Your Success',
      servicesDesc: 'We offer a complete range of services designed specifically to help your business grow and expand in global markets',
      internationalMarketing: 'International Marketing',
      marketingShort: 'Custom marketing strategies for global markets',
      marketingFull: 'We provide comprehensive and customized marketing strategies for each target market. Our services include market research, competitor analysis, content strategy development, and advertising campaign management on global platforms.',
      logistics: 'Distribution & Logistics',
      logisticsShort: 'Integrated logistics solutions for delivering your products',
      logisticsFull: 'We provide integrated logistics solutions including storage, packaging, shipping, and delivery to over 50 countries worldwide. We ensure your products arrive safely and on time.',
      consulting: 'Business Consulting',
      consultingShort: 'Professional consulting for international expansion',
      consultingFull: 'A team of experts provides comprehensive consulting for international expansion. We help you understand the legal, tax, and business requirements of each market.',
      digitalMarketing: 'Digital Marketing',
      digitalShort: 'Effective digital marketing campaigns',
      digitalFull: 'We design and execute effective digital marketing campaigns on all platforms. Includes SEO, SEM, social media marketing, and content marketing.',
      dataAnalysis: 'Data Analysis',
      dataShort: 'Deep insights for informed decisions',
      dataFull: 'We use the latest data analysis tools to provide deep insights into your business performance. We help you understand customer behavior and identify new opportunities.',
      businessDev: 'Business Development',
      devShort: 'Sustainable growth strategies',
      devFull: 'We help you develop sustainable growth strategies for your business. From identifying new opportunities to efficiently implementing expansion plans.',
      discoverMore: 'Discover More',
      customSolution: 'Need a Custom Solution?',
      customDesc: 'Our team is ready to help you find the optimal solution for your specific business needs',
      
      // Stats
      statsTitle: 'Numbers That Speak Our Success',
      statsDesc: 'We are proud of our achievements and our clients trust in us',
      happyClientsStat: 'Happy Clients',
      countriesStat: 'Countries',
      projectsStat: 'Successful Projects',
      experienceStat: 'Years Experience',
      satisfactionStat: 'Satisfaction Rate',
      supportStat: 'Support',
      joinUs: 'Join our list of successful clients today',
      startJourney: 'Start Your Journey',
      
      // Portfolio
      portfolioBadge: 'Our Portfolio',
      portfolioTitle: 'Our Clients Success Stories',
      portfolioDesc: 'Browse some of the successful projects we have implemented for our clients in various industries and markets',
      viewAll: 'View All',
      
      // Tools
      toolsBadge: 'Our Smart Tools',
      toolsTitle: 'Professional Tools to Help You',
      toolsDesc: 'Use our advanced tools to get accurate analysis and decision-making assistance',
      currencyConverter: 'Currency Converter',
      currencyDesc: 'Convert currencies with live exchange rates',
      shippingCalculator: 'Shipping Calculator',
      shippingDesc: 'Calculate international shipping costs',
      marketAnalyzer: 'Market Analyzer',
      marketDesc: 'Analyze global market trends',
      businessPlanner: 'Business Planner',
      plannerDesc: 'Plan your international expansion strategy',
      
      // Team
      teamBadge: 'Our Team',
      teamTitle: 'Meet Our Experts',
      teamDesc: 'A team of professionals with extensive experience in international trade',
      
      // Testimonials
      testimonialsBadge: 'Client Testimonials',
      testimonialsTitle: 'What Our Clients Say?',
      testimonialsDesc: 'We are proud of our clients trust and the successes we have achieved together',
      
      // Contact
      contactBadge: 'Contact Us',
      contactTitle: "Let's Start Together",
      contactDesc: 'Contact us today and let us help you achieve your business goals',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      followUs: 'Follow Us',
      sendMessage: 'Send Your Message',
      name: 'Name',
      company: 'Company',
      message: 'Message',
      send: 'Send',
      
      // Footer
      footerDesc: 'We connect businesses to the world and help them grow and expand in international markets',
      quickLinks: 'Quick Links',
      ourServices: 'Our Services',
      contactInfo: 'Contact Info',
      rights: 'All Rights Reserved',
      
      // Chat
      chatTitle: 'AI Assistant',
      chatPlaceholder: 'Type your message here...',
      chatWelcome: 'Hello! I am your AI assistant. How can I help you today?',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
