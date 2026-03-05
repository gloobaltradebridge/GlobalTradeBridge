import { useTranslation } from 'react-i18next';
import { 
  Globe, 
  Facebook, 
  Linkedin, 
  Twitter, 
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: t('home'), href: '#home' },
    { label: t('about'), href: '#about' },
    { label: t('services'), href: '#services' },
    { label: t('portfolio'), href: '#portfolio' },
    { label: t('contact'), href: '#contact' },
  ];

  const services = [
    t('internationalMarketing'),
    t('logistics'),
    t('consulting'),
    t('digitalMarketing'),
    t('dataAnalysis'),
    t('businessDev'),
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61585041268592', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-900/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <Globe className="w-6 h-6 text-slate-900" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Global Trade Bridge</h3>
                <p className="text-slate-400 text-sm">{isRTL ? 'جسر التجارة العالمية' : 'Global Trade Bridge'}</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              {t('footerDesc')}
            </p>
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-lg font-bold mb-6 text-amber-400">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-lg font-bold mb-6 text-amber-400">{t('ourServices')}</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-lg font-bold mb-6 text-amber-400">{t('contactInfo')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:01210603429" className={`flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>01210603429</span>
                </a>
              </li>
              <li>
                <a href="mailto:GloobalTradeBridge@gmail.com" className={`flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span>GloobalTradeBridge@gmail.com</span>
                </a>
              </li>
              <li>
                <div className={`flex items-center gap-3 text-slate-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span>{isRTL ? 'القاهرة، مصر' : 'Cairo, Egypt'}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className={`flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Global Trade Bridge. {t('rights')}.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center hover:bg-amber-500 transition-colors"
              aria-label={isRTL ? 'العودة للأعلى' : 'Back to top'}
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
