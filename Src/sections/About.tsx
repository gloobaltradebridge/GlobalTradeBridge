import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Award, CheckCircle2, TrendingUp, Users, Globe2, Lightbulb } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Target,
      title: t('mission'),
      description: t('missionDesc'),
      color: 'from-blue-900 to-blue-700',
      borderColor: 'border-blue-500',
    },
    {
      icon: Eye,
      title: t('vision'),
      description: t('visionDesc'),
      color: 'from-amber-500 to-amber-600',
      borderColor: 'border-amber-400',
    },
    {
      icon: Award,
      title: t('values'),
      description: t('valuesDesc'),
      color: 'from-green-600 to-green-500',
      borderColor: 'border-green-400',
    },
  ];

  const advantages = [
    isRTL ? 'فريق متخصص ذو خبرة عالمية' : 'Specialized team with global experience',
    isRTL ? 'شبكة علاقات واسعة في أكثر من 50 دولة' : 'Extensive network in over 50 countries',
    isRTL ? 'حلول مخصصة لكل عميل' : 'Customized solutions for each client',
    isRTL ? 'دعم مستمر على مدار الساعة' : '24/7 continuous support',
    isRTL ? 'أسعار تنافسية وشفافة' : 'Competitive and transparent pricing',
    isRTL ? 'نتائج مضمونة وقابلة للقياس' : 'Guaranteed and measurable results',
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 mb-4">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium">{t('aboutBadge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('aboutTitle')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('aboutDesc')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border-t-4 ${feature.borderColor} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-900 via-blue-800 to-amber-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <Globe2 className="w-24 h-24 mx-auto mb-6 animate-pulse text-amber-400" />
                  <h3 className="text-3xl font-bold mb-2">Global Trade Bridge</h3>
                  <p className="text-blue-100">{isRTL ? 'نبني جسور النجاح العالمي' : 'Building Global Success Bridges'}</p>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <div className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-amber-200`}>
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-amber-600" />
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <p className="text-2xl font-bold text-slate-900">+500%</p>
                <p className="text-sm text-slate-500">{isRTL ? 'معدل نمو العملاء' : 'Client Growth Rate'}</p>
              </div>
            </div>

            <div className={`absolute -top-6 ${isRTL ? '-right-6' : '-left-6'} bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 border border-blue-200`}>
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <p className="text-2xl font-bold text-slate-900">+1000</p>
                <p className="text-sm text-slate-500">{isRTL ? 'عميل ناجح' : 'Successful Clients'}</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              {t('whyChooseUs')}
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {t('whyChooseDesc')}
            </p>

            {/* Advantages List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-slate-700">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
