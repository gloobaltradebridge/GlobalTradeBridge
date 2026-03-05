import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Phone, Mail, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  scrollY: number;
  language: string;
  toggleLanguage: () => void;
}

const Navbar = ({ scrollY, language, toggleLanguage }: NavbarProps) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isScrolled = scrollY > 50;
  const isRTL = language === 'ar';

  const navLinks = [
    { id: 'home', label: t('home'), href: '#home' },
    { id: 'about', label: t('about'), href: '#about' },
    { id: 'services', label: t('services'), href: '#services' },
    { id: 'portfolio', label: t('portfolio'), href: '#portfolio' },
    { id: 'tools', label: t('tools'), href: '#tools' },
    { id: 'team', label: t('team'), href: '#team' },
    { id: 'contact', label: t('contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navLinks[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}>
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center text-sm">
            <div className={`flex items-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a href="tel:01210603429" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>01210603429</span>
              </a>
              <a href="mailto:GloobalTradeBridge@gmail.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">GloobalTradeBridge@gmail.com</span>
              </a>
            </div>
            <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Globe className="w-4 h-4 text-amber-400" />
              <span>{isRTL ? 'نربط الشركات بالعالم' : 'Connecting Businesses Worldwide'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'top-0 bg-white/95 backdrop-blur-lg shadow-lg' : 'top-10 bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" onClick={() => scrollToSection('#home')} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isScrolled ? 'bg-gradient-to-br from-blue-900 to-blue-700' : 'bg-white/20 backdrop-blur-sm border border-amber-400/30'}`}>
                <Globe className="w-6 h-6 text-amber-400" />
              </div>
              <div className={`hidden sm:block ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
                <h1 className="font-bold text-lg leading-tight">Global Trade Bridge</h1>
                <p className={`text-xs ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>
                  {isRTL ? 'جسر التجارة العالمية' : 'Global Trade Bridge'}
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.id
                      ? isScrolled
                        ? 'bg-blue-900 text-white'
                        : 'bg-white/20 text-white'
                      : isScrolled
                      ? 'text-slate-600 hover:text-blue-900 hover:bg-blue-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Side - Language & CTA */}
            <div className={`hidden lg:flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`lang-toggle px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                <Languages className="w-4 h-4" />
                <span>{language === 'ar' ? 'English' : 'العربية'}</span>
              </button>

              {/* CTA Button */}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="btn-gold btn-shine"
              >
                {t('getQuote')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className={`lg:hidden flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              >
                <Languages className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="container mx-auto px-4 py-4">
            <div className={`flex flex-col gap-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all ${
                    activeSection === link.id
                      ? 'bg-blue-900 text-white'
                      : 'text-slate-600 hover:bg-blue-50 hover:text-blue-900'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="mt-2 btn-gold w-full"
              >
                {t('getQuote')}
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
