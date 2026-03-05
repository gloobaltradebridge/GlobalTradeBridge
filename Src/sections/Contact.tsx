import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram,
  MessageCircle,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success(isRTL ? 'تم إرسال الرسالة!' : 'Message Sent!', {
      description: isRTL 
        ? 'سنقوم بالرد عليك في أقرب وقت ممكن.' 
        : 'We will get back to you as soon as possible.',
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('phone'),
      value: '01210603429',
      href: 'tel:01210603429',
      color: 'from-green-600 to-green-500',
    },
    {
      icon: Mail,
      label: t('email'),
      value: 'GloobalTradeBridge@gmail.com',
      href: 'mailto:GloobalTradeBridge@gmail.com',
      color: 'from-blue-900 to-blue-700',
    },
    {
      icon: MapPin,
      label: t('address'),
      value: isRTL ? 'القاهرة، مصر' : 'Cairo, Egypt',
      href: '#',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Clock,
      label: isRTL ? 'ساعات العمل' : 'Working Hours',
      value: isRTL ? '24/7 - على مدار الساعة' : '24/7 - Round the clock',
      href: '#',
      color: 'from-purple-600 to-purple-500',
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61585041268592', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 mb-4">
            <MessageCircle className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium">{t('contactBadge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('contactTitle')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('contactDesc')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="group bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-slate-100"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm text-slate-500 mb-1">{info.label}</h4>
                  <p className="font-semibold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {info.value}
                  </p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className={`bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-8 text-white relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
              {/* Gold accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              
              <h3 className="text-xl font-bold mb-4">{t('followUs')}</h3>
              <p className="text-blue-200 mb-6">
                {isRTL ? 'تابعنا على وسائل التواصل الاجتماعي للحصول على آخر الأخبار والتحديثات' : 'Follow us on social media for the latest news and updates'}
              </p>
              <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('sendMessage')}</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">{t('name')} *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t('email')} *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">{t('company')}</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={isRTL ? 'اسم شركتك' : 'Your company name'}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t('phone')}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={isRTL ? 'رقم الهاتف' : 'Phone number'}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">{t('message')} *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                    required
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <Button type="submit" className="w-full btn-gold btn-shine py-6">
                  <Send className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {t('send')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
