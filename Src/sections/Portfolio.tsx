import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, TrendingUp, Globe2, ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
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

  const projects = [
    {
      id: 1,
      title: isRTL ? 'توسع شركة التقنية السعودية' : 'Saudi Tech Company Expansion',
      category: isRTL ? 'التسويق الدولي' : 'International Marketing',
      description: isRTL 
        ? 'ساعدنا شركة تقنية سعودية في التوسع إلى 12 سوقاً جديداً في أوروبا وآسيا، مما أدى إلى زيادة الإيرادات بنسبة 340%.'
        : 'Helped a Saudi tech company expand to 12 new markets in Europe and Asia, resulting in a 340% revenue increase.',
      results: isRTL ? '+340% نمو الإيرادات' : '+340% Revenue Growth',
      icon: TrendingUp,
      color: 'from-blue-900 to-blue-700',
      image: 'tech',
    },
    {
      id: 2,
      title: isRTL ? 'توزيع المنتجات الغذائية المصرية' : 'Egyptian Food Products Distribution',
      category: isRTL ? 'التوزيع واللوجستيات' : 'Distribution & Logistics',
      description: isRTL
        ? 'أنشأنا شبكة توزيع شاملة للمنتجات الغذائية المصرية في دول الخليج، معالجة أكثر من 50,000 طلب شهرياً.'
        : 'Established a comprehensive distribution network for Egyptian food products in GCC countries, handling over 50,000 orders monthly.',
      results: isRTL ? '50,000+ طلب شهرياً' : '50,000+ Monthly Orders',
      icon: Globe2,
      color: 'from-amber-500 to-amber-600',
      image: 'food',
    },
    {
      id: 3,
      title: isRTL ? 'استشارات شركة الصناعات الإماراتية' : 'UAE Manufacturing Consulting',
      category: isRTL ? 'الاستشارات التجارية' : 'Business Consulting',
      description: isRTL
        ? 'قدمنا استشارات استراتيجية شاملة ساعدت شركة صناعية إماراتية في دخول 8 أسواق جديدة بشكل ناجح.'
        : 'Provided comprehensive strategic consulting that helped a UAE manufacturing company successfully enter 8 new markets.',
      results: isRTL ? '8 أسواق جديدة' : '8 New Markets',
      icon: Briefcase,
      color: 'from-green-600 to-green-500',
      image: 'manufacturing',
    },
    {
      id: 4,
      title: isRTL ? 'حملة التسويق الرقمي للأزياء' : 'Fashion Digital Marketing Campaign',
      category: isRTL ? 'التسويق الرقمي' : 'Digital Marketing',
      description: isRTL
        ? 'نفذنا حملة تسويق رقمي ناجحة لعلامة أزياء عالمية، حققت 10 مليون ظهور و500,000 تفاعل.'
        : 'Executed a successful digital marketing campaign for a global fashion brand, achieving 10 million impressions and 500,000 engagements.',
      results: isRTL ? '10M+ ظهور' : '10M+ Impressions',
      icon: TrendingUp,
      color: 'from-purple-600 to-purple-500',
      image: 'fashion',
    },
    {
      id: 5,
      title: isRTL ? 'تحليل بيانات سوق السيارات' : 'Automotive Market Data Analysis',
      category: isRTL ? 'تحليل البيانات' : 'Data Analysis',
      description: isRTL
        ? 'قدمنا تحليلاً شاملاً لسوق السيارات في منطقة الشرق الأوسط، مما ساعد عميلنا في اتخاذ قرارات استراتيجية مدروسة.'
        : 'Provided comprehensive analysis of the automotive market in the Middle East region, helping our client make informed strategic decisions.',
      results: isRTL ? 'دقة 95% في التوقعات' : '95% Forecast Accuracy',
      icon: TrendingUp,
      color: 'from-cyan-600 to-cyan-500',
      image: 'automotive',
    },
    {
      id: 6,
      title: isRTL ? 'تطوير أعمال شركة الاستيراد' : 'Import Company Business Development',
      category: isRTL ? 'تطوير الأعمال' : 'Business Development',
      description: isRTL
        ? 'ساعدنا شركة استيراد في تطوير استراتيجية نمو شاملة، مما أدى إلى زيادة حجم التداول بنسبة 280% في سنة واحدة.'
        : 'Helped an import company develop a comprehensive growth strategy, resulting in a 280% increase in trading volume in one year.',
      results: isRTL ? '+280% حجم التداول' : '+280% Trading Volume',
      icon: TrendingUp,
      color: 'from-indigo-600 to-indigo-500',
      image: 'import',
    },
  ];

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 mb-4">
            <Briefcase className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium">{t('portfolioBadge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('portfolioTitle')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('portfolioDesc')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <project.icon className="w-16 h-16 text-white/80" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className={`flex items-center gap-2 text-amber-600 font-semibold ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-sm">{project.results}</span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <Button className="btn-gold">
                  {isRTL ? 'عرض التفاصيل' : 'View Details'}
                  {isRTL ? <ArrowLeft className="w-4 h-4 mr-2" /> : <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <div className={`h-32 bg-gradient-to-br ${selectedProject?.color} rounded-xl flex items-center justify-center mb-4`}>
              {selectedProject && <selectedProject.icon className="w-16 h-16 text-white" />}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${selectedProject?.color} text-white`}>
                {selectedProject?.category}
              </span>
            </div>
            <DialogTitle className="text-2xl font-bold text-slate-900">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-slate-600 text-base leading-relaxed">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Star className="w-6 h-6 text-slate-900" />
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <p className="text-sm text-slate-500">{isRTL ? 'النتيجة:' : 'Result:'}</p>
                <p className="text-xl font-bold text-amber-600">{selectedProject?.results}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
