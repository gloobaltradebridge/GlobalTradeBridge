import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Stats from './sections/Stats';
import Portfolio from './sections/Portfolio';
import ToolsSection from './sections/ToolsSection';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ChatWidget from './sections/ChatWidget';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'ar');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-4 border-4 border-white border-b-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Global Trade Bridge</h2>
          <p className="text-amber-400">{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar scrollY={scrollY} language={language} toggleLanguage={toggleLanguage} />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <Portfolio />
        <ToolsSection />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
