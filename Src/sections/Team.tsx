import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Linkedin, Mail, Award } from 'lucide-react';

const Team = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: isRTL ? 'أحمد محمد' : 'Ahmed Mohamed',
      role: isRTL ? 'المدير التنفيذي' : 'CEO',
      bio: isRTL 
        ? 'خبرة 20 عاماً في التجارة الدولية والتوسع الدولي'
        : '20 years of experience in international trade and global expansion',
      color: 'from-blue-900 to-blue-700',
    },
    {
      name: isRTL ? 'سارة أحمد' : 'Sara Ahmed',
      role: isRTL ? 'مديرة التسويق' : 'Marketing Director',
      bio: isRTL
        ? 'خبيرة في التسويق الدولي والعلامات التجارية العالمية'
        : 'Expert in international marketing and global branding',
      color: 'from-amber-500 to-amber-600',
    },
    {
      name: isRTL ? 'محمد علي' : 'Mohamed Ali',
      role: isRTL ? 'مدير اللوجستيات' : 'Logistics Director',
      bio: isRTL
        ? 'متخصص في سلاسل الإمداد العالمية والشحن الدولي'
        : 'Specialist in global supply chains and international shipping',
      color: 'from-green-600 to-green-500',
    },
    {
      name: isRTL ? 'فاطمة حسن' : 'Fatima Hassan',
      role: isRTL ? 'مديرة الاستشارات' : 'Consulting Director',
      bio: isRTL
        ? 'خبيرة في الاستشارات الاستراتيجية وتطوير الأعمال'
        : 'Expert in strategic consulting and business development',
      color: 'from-purple-600 to-purple-500',
    },
  ];

  return (
    <section id="team" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 mb-4">
            <Users className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium">{t('teamBadge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('teamTitle')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('teamDesc')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Avatar Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${member.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30">
                  <span className="text-3xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/10" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className={`text-sm font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className={`flex justify-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-amber-100 hover:text-amber-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Hover Badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <Award className="w-4 h-4 text-amber-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
