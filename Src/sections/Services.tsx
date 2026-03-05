import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Globe2, 
  TrendingUp, 
  Truck, 
  Megaphone, 
  Handshake, 
  BarChart3, 
  ArrowLeft,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
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

  const services = [
    {
      icon: Globe2,
      title: t('internationalMarketing'),
      shortDesc: t('marketingShort'),
      fullDesc: t('marketingFull'),
      features: isRTL ? 
        ['بحث سوقي شامل', 'تحليل المنافسين', 'استراتيجية المحتوى', 'إدارة الحملات الإعلانية'] :
        ['Comprehensive Market Research', 'Competitor Analysis', 'Content Strategy', 'Advertising Campaign Management'],
      color: 'from-blue-900 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
    },
    {
      icon: Truck,
      title: t('logistics'),
      shortDesc: t('logisticsShort'),
      fullDesc: t('logisticsFull'),
      features: isRTL ?
        ['تخزين آمن', 'تغليف احترافي', 'شحن دولي', 'تتبع الشحنات'] :
        ['Secure Storage', 'Professional Packaging', 'International Shipping', 'Shipment Tracking'],
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-400',
    },
    {
      icon: Handshake,
      title: t('consulting'),
      shortDesc: t('consultingShort'),
      fullDesc: t('consultingFull'),
      features: isRTL ?
        ['الاستشارات القانونية', 'التحليل المالي', 'التخطيط الاستراتيجي', 'إدارة المخاطر'] :
        ['Legal Consulting', 'Financial Analysis', 'Strategic Planning', 'Risk Management'],
      color: 'from-green-600 to-green-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-400',
    },
    {
      icon: Megaphone,
      title: t('digitalMarketing'),
      shortDesc: t('digitalShort'),
      fullDesc: t('digitalFull'),
      features: isRTL ?
        ['SEO و SEM', 'التسويق عبر السوشيال ميديا', 'التسويق بالمحتوى', 'تحليل الأداء'] :
        ['SEO & SEM', 'Social Media Marketing', 'Content Marketing', 'Performance Analysis'],
      color: 'from-purple-600 to-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-400',
    },
    {
      icon: BarChart3,
      title: t('dataAnalysis'),
      shortDesc: t('dataShort'),
      fullDesc: t('dataFull'),
      features: isRTL ?
        ['تحليل سلوك العملاء', 'توقعات السوق', 'تقارير الأداء', 'لوحات المعلومات'] :
        ['Customer Behavior Analysis', 'Market Forecasts', 'Performance Reports', 'Dashboards'],
      color: 'from-cyan-600 to-cyan-500',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-400',
    },
    {
      icon: TrendingUp,
      title: t('businessDev'),
      shortDesc: t('devShort'),
      fullDesc: t('devFull'),
      features: isRTL ?
        ['تحديد الفرص', 'التخطيط للتوسع', 'بناء الشراكات', 'إدارة النمو'] :
        ['Opportunity Identification', 'Expansion Planning', 'Partnership Building', 'Growth Management'],
      color: 'from-indigo-600 to-indigo-500',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-400',
    },
  ];

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border border-slate-400 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-slate-400 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-slate-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 mb-4">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium">{t('servicesBadge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('servicesDesc')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border-t-4 ${service.borderColor} overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.shortDesc}
              </p>

              {/* Button */}
              <Button
                variant="ghost"
                className="group/btn text-blue-900 hover:text-amber-600 hover:bg-amber-50 p-0"
                onClick={() => setSelectedService(service)}
              >
                {t('discoverMore')}
                {isRTL ? 
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:-translate-x-1 transition-transform" /> :
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                }
              </Button>

              {/* Decorative Element */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${service.bgColor} opacity-50 group-hover:scale-150 transition-transform duration-500`} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Gold accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t('customSolution')}
            </h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              {t('customDesc')}
            </p>
            <Button
              size="lg"
              className="btn-gold px-8"
              onClick={scrollToContact}
            >
              {t('contact')}
            </Button>
          </div>
        </div>
      </div>

      {/* Service Detail Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService?.color} flex items-center justify-center mb-4`}>
              {selectedService && <selectedService.icon className="w-8 h-8 text-white" />}
            </div>
            <DialogTitle className="text-2xl font-bold text-slate-900">
              {selectedService?.title}
            </DialogTitle>
            <DialogDescription className="text-slate-600 text-base leading-relaxed">
              {selectedService?.fullDesc}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <h4 className="font-semibold text-slate-900 mb-3">{isRTL ? 'المميزات:' : 'Features:'}</h4>
            <ul className="space-y-2">
              {selectedService?.features.map((feature, index) => (
                <li key={index} className={`flex items-center gap-2 text-slate-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedService?.color}`} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
