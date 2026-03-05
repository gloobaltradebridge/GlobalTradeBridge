import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Quote, Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: isRTL ? 'خالد العتيبي' : 'Khaled Al-Otaibi',
      company: isRTL ? 'شركة التقنية المتقدمة' : 'Advanced Tech Co.',
      role: isRTL ? 'المدير التنفيذي' : 'CEO',
      content: isRTL
        ? 'Global Trade Bridge ساعدتنا في التوسع إلى 5 أسواق جديدة في أقل من سنة. فريقهم محترف وملتزم، والنتائج كانت مذهلة. أنصح بهم بشدة!'
        : 'Global Trade Bridge helped us expand to 5 new markets in less than a year. Their team is professional and committed, and the results were amazing. Highly recommended!',
      rating: 5,
      color: 'from-blue-900 to-blue-700',
    },
    {
      id: 2,
      name: isRTL ? 'نورة السبيعي' : 'Noura Al-Subaie',
      company: isRTL ? 'مجموعة الأغذية العالمية' : 'Global Food Group',
      role: isRTL ? 'مديرة التسويق' : 'Marketing Director',
      content: isRTL
        ? 'خدمات اللوجستيات التي قدمتها الشركة كانت استثنائية. تمكنوا من توصيل منتجاتنا إلى أكثر من 20 دولة بكفاءة عالية. شريك موثوق حقاً!'
        : 'The logistics services provided by the company were exceptional. They managed to deliver our products to over 20 countries with high efficiency. A truly reliable partner!',
      rating: 5,
      color: 'from-amber-500 to-amber-600',
    },
    {
      id: 3,
      name: isRTL ? 'عبدالله الحربي' : 'Abdullah Al-Harbi',
      company: isRTL ? 'مصانع النسيج الحديثة' : 'Modern Textile Factories',
      role: isRTL ? 'مدير التصدير' : 'Export Manager',
      content: isRTL
        ? 'الاستشارات الاستراتيجية التي تلقيناها ساعدتنا في فهم الأسواق الجديدة وتجنب المخاطر. نمو مبيعاتنا زاد بنسبة 200% بفضل جهودهم.'
        : 'The strategic consulting we received helped us understand new markets and avoid risks. Our sales growth increased by 200% thanks to their efforts.',
      rating: 5,
      color: 'from-green-600 to-green-500',
    },
    {
      id: 4,
      name: isRTL ? 'ليلى المالكي' : 'Laila Al-Malki',
      company: isRTL ? 'دار الأزياء الفاخرة' : 'Luxury Fashion House',
      role: isRTL ? 'المؤسسة والمديرة الإبداعية' : 'Founder & Creative Director',
      content: isRTL
        ? 'حملة التسويق الرقمي التي نفذوها لعلامتنا التجارية حققت نتائج خيالية. وصلنا إلى جمهور عالمي وحققنا مبيعات قياسية.'
        : 'The digital marketing campaign they executed for our brand achieved fantastic results. We reached a global audience and achieved record sales.',
      rating: 5,
      color: 'from-purple-600 to-purple-500',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 mb-4">
            <MessageSquare className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium">{t('testimonialsBadge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('testimonialsTitle')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('testimonialsDesc')}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                <Quote className="w-8 h-8 text-amber-500" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className={`flex gap-1 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center`}>
                    <span className="text-xl font-bold text-white">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h4 className="font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-slate-500 text-sm">{testimonials[currentIndex].role}</p>
                    <p className="text-blue-600 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-50" />
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-amber-50" />
            </div>

            {/* Navigation Buttons */}
            <div className={`flex justify-center gap-4 mt-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {isRTL ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-blue-600 w-8' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {isRTL ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
