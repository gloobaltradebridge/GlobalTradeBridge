import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDown, Play, Sparkles, TrendingUp, Users, Globe2, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ['#d4af37', '#f4d03f', '#ffffff', '#60a5fa'];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationId: number;
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      if (frameCount % 2 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle, i) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          ctx.fill();

          if (i % 5 === 0) {
            particles.slice(i + 1, i + 8).forEach((other) => {
              const dx = particle.x - other.x;
              const dy = particle.y - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 120) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(other.x, other.y);
                ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - distance / 120)})`;
                ctx.stroke();
              }
            });
          }
        });
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-amber-400/30 rounded-lg animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-20 w-16 h-16 border border-blue-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-amber-400/30 rotate-45 animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'rtl-flip' : ''}`}>
          {/* Left Content */}
          <div className={`text-center lg:text-left ${isRTL ? 'lg:text-right' : ''}`}>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-amber-400/30 mb-6 animate-slide-up`}>
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-white/90 text-sm">{t('heroBadge')}</span>
            </div>

            {/* Main Title */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up`} style={{ animationDelay: '0.1s' }}>
              <span className="block">{t('heroTitle1')}</span>
              <span className="gradient-text-gold">{t('heroTitle2')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-blue-100/80 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {t('heroSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up ${isRTL ? 'sm:flex-row-reverse' : ''}`} style={{ animationDelay: '0.3s' }}>
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="btn-gold btn-shine px-8 py-6 text-lg rounded-xl"
              >
                {t('startNow')}
                <ArrowDown className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </Button>
              <Button
                onClick={() => scrollToSection('#about')}
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                <Play className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
                {t('learnMore')}
              </Button>
            </div>

            {/* Stats Row */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-6 animate-slide-up ${isRTL ? 'flex-row-reverse' : ''}`} style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <p className="text-white font-bold text-lg">+500%</p>
                  <p className="text-white/60 text-xs">{t('salesGrowth')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/30 flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <p className="text-white font-bold text-lg">+1000</p>
                  <p className="text-white/60 text-xs">{t('happyClients')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/30 flex items-center justify-center">
                  <Globe2 className="w-5 h-5 text-amber-400" />
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <p className="text-white font-bold text-lg">+50</p>
                  <p className="text-white/60 text-xs">{t('countries')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Card */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-96 h-96 animate-float">
              {/* Main Card */}
              <div className="absolute inset-0 glass rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-amber-400/20">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 animate-pulse-glow">
                  <Globe2 className="w-12 h-12 text-slate-900" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Global Trade Bridge</h3>
                <p className="text-amber-200 mb-6">{isRTL ? 'شريكك الموثوق في التجارة الدولية' : 'Your Trusted Partner in International Trade'}</p>
                <div className={`flex gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="flex flex-col items-center">
                    <Shield className="w-8 h-8 text-green-400 mb-1" />
                    <span className="text-white/80 text-xs">{isRTL ? 'موثوق' : 'Trusted'}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <TrendingUp className="w-8 h-8 text-amber-400 mb-1" />
                    <span className="text-white/80 text-xs">{isRTL ? 'ناجح' : 'Successful'}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="w-8 h-8 text-blue-400 mb-1" />
                    <span className="text-white/80 text-xs">{isRTL ? 'محترف' : 'Professional'}</span>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center animate-spin-slow shadow-lg shadow-amber-400/30">
                <TrendingUp className="w-8 h-8 text-slate-900" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center animate-spin-slow shadow-lg shadow-blue-500/30" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
                <Globe2 className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center animate-bounce shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
