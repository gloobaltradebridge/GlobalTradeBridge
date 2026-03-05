import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, Users, Globe2, Award, Briefcase, Clock } from 'lucide-react';

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    countries: 0,
    projects: 0,
    experience: 0,
    satisfaction: 0,
    support: 0,
  });
  const { t } = useTranslation();

  const stats = [
    { key: 'clients', icon: Users, value: 1000, suffix: '+', label: t('happyClientsStat') },
    { key: 'countries', icon: Globe2, value: 50, suffix: '+', label: t('countriesStat') },
    { key: 'projects', icon: Briefcase, value: 500, suffix: '+', label: t('projectsStat') },
    { key: 'experience', icon: Clock, value: 15, suffix: '+', label: t('experienceStat') },
    { key: 'satisfaction', icon: Award, value: 98, suffix: '%', label: t('satisfactionStat') },
    { key: 'support', icon: TrendingUp, value: 24, suffix: '/7', label: t('supportStat') },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        clients: Math.floor(1000 * easeOut),
        countries: Math.floor(50 * easeOut),
        projects: Math.floor(500 * easeOut),
        experience: Math.floor(15 * easeOut),
        satisfaction: Math.floor(98 * easeOut),
        support: Math.floor(24 * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('statsTitle')}
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            {t('statsDesc')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className={`group relative text-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="glass rounded-2xl p-6 hover:bg-white/20 transition-colors border border-amber-400/20">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-amber-400/30">
                  <stat.icon className="w-6 h-6 text-slate-900" />
                </div>

                {/* Number */}
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {counts[stat.key as keyof typeof counts]}{stat.suffix}
                </div>

                {/* Label */}
                <div className="text-blue-200 text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-blue-200 mb-4">
            {t('joinUs')}
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-3 btn-gold rounded-xl font-semibold"
          >
            {t('startJourney')}
            <TrendingUp className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
    </section>
  );
};

export default Stats;
