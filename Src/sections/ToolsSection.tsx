import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Ship, 
  TrendingUp, 
  Calendar, 
  Wrench,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const ToolsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Currency Converter State
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EGP');
  const [convertedAmount, setConvertedAmount] = useState('');

  // Shipping Calculator State
  const [weight, setWeight] = useState('');
  const [destination, setDestination] = useState('');
  const [shippingCost, setShippingCost] = useState('');

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

  const tools = [
    {
      id: 'currency',
      icon: DollarSign,
      title: t('currencyConverter'),
      description: t('currencyDesc'),
      color: 'from-green-600 to-green-500',
    },
    {
      id: 'shipping',
      icon: Ship,
      title: t('shippingCalculator'),
      description: t('shippingDesc'),
      color: 'from-blue-900 to-blue-700',
    },
    {
      id: 'market',
      icon: TrendingUp,
      title: t('marketAnalyzer'),
      description: t('marketDesc'),
      color: 'from-amber-500 to-amber-600',
    },
    {
      id: 'planner',
      icon: Calendar,
      title: t('businessPlanner'),
      description: t('plannerDesc'),
      color: 'from-purple-600 to-purple-500',
    },
  ];

  const handleCurrencyConvert = () => {
    const rates: Record<string, number> = {
      'USD_EGP': 50.5,
      'USD_EUR': 0.92,
      'USD_GBP': 0.79,
      'EUR_EGP': 54.8,
      'GBP_EGP': 63.9,
      'EGP_USD': 0.02,
      'EUR_USD': 1.09,
      'GBP_USD': 1.27,
    };
    
    const key = `${fromCurrency}_${toCurrency}`;
    const rate = rates[key] || 1;
    const result = parseFloat(amount) * rate;
    setConvertedAmount(result.toFixed(2));
  };

  const handleShippingCalculate = () => {
    const baseRate = 25;
    const weightRate = parseFloat(weight) * 5;
    const destinationMultiplier = destination === 'europe' ? 1.2 : destination === 'asia' ? 1.5 : 1;
    const total = (baseRate + weightRate) * destinationMultiplier;
    setShippingCost(total.toFixed(2));
  };

  const renderToolContent = () => {
    switch (activeTool) {
      case 'currency':
        return (
          <div className="space-y-4">
            <div>
              <Label>{isRTL ? 'المبلغ' : 'Amount'}</Label>
              <Input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)}
                placeholder={isRTL ? 'أدخل المبلغ' : 'Enter amount'}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>{isRTL ? 'من' : 'From'}</Label>
                <select 
                  value={fromCurrency} 
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="EGP">EGP</option>
                </select>
              </div>
              <div>
                <Label>{isRTL ? 'إلى' : 'To'}</Label>
                <select 
                  value={toCurrency} 
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="EGP">EGP</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>
            </div>
            <Button onClick={handleCurrencyConvert} className="w-full btn-gold">
              {isRTL ? 'تحويل' : 'Convert'}
            </Button>
            {convertedAmount && (
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600">{convertedAmount} {toCurrency}</p>
              </div>
            )}
          </div>
        );
      
      case 'shipping':
        return (
          <div className="space-y-4">
            <div>
              <Label>{isRTL ? 'الوزن (كجم)' : 'Weight (kg)'}</Label>
              <Input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(e.target.value)}
                placeholder={isRTL ? 'أدخل الوزن' : 'Enter weight'}
              />
            </div>
            <div>
              <Label>{isRTL ? 'الوجهة' : 'Destination'}</Label>
              <select 
                value={destination} 
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">{isRTL ? 'اختر الوجهة' : 'Select destination'}</option>
                <option value="gcc">{isRTL ? 'دول الخليج' : 'GCC Countries'}</option>
                <option value="europe">{isRTL ? 'أوروبا' : 'Europe'}</option>
                <option value="asia">{isRTL ? 'آسيا' : 'Asia'}</option>
                <option value="africa">{isRTL ? 'أفريقيا' : 'Africa'}</option>
              </select>
            </div>
            <Button onClick={handleShippingCalculate} className="w-full btn-gold">
              {isRTL ? 'احسب التكلفة' : 'Calculate Cost'}
            </Button>
            {shippingCost && (
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <p className="text-lg text-slate-600">{isRTL ? 'التكلفة التقديرية:' : 'Estimated Cost:'}</p>
                <p className="text-2xl font-bold text-blue-600">${shippingCost}</p>
              </div>
            )}
          </div>
        );
      
      case 'market':
        return (
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
              <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <TrendingUp className="w-8 h-8 text-amber-600" />
                <h4 className="font-bold text-slate-900">{isRTL ? 'اتجاهات السوق' : 'Market Trends'}</h4>
              </div>
              <div className="space-y-3">
                <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-slate-600">{isRTL ? 'التجارة الإلكترونية' : 'E-commerce'}</span>
                  <span className="text-green-600 font-bold">+24%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-slate-600">{isRTL ? 'اللوجستيات' : 'Logistics'}</span>
                  <span className="text-green-600 font-bold">+18%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className={`flex justify-between items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span className="text-slate-600">{isRTL ? 'التصدير' : 'Export'}</span>
                  <span className="text-green-600 font-bold">+32%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'planner':
        return (
          <div className="space-y-4">
            <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Calendar className="w-8 h-8 text-purple-600" />
                <h4 className="font-bold text-slate-900">{isRTL ? 'خطة التوسع' : 'Expansion Plan'}</h4>
              </div>
              <div className="space-y-3">
                <div className={`flex items-center gap-3 p-3 bg-white rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">1</div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="font-medium text-slate-900">{isRTL ? 'دراسة السوق' : 'Market Research'}</p>
                    <p className="text-sm text-slate-500">{isRTL ? '2-4 أسابيع' : '2-4 weeks'}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-3 p-3 bg-white rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">2</div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="font-medium text-slate-900">{isRTL ? 'التخطيط الاستراتيجي' : 'Strategic Planning'}</p>
                    <p className="text-sm text-slate-500">{isRTL ? '4-6 أسابيع' : '4-6 weeks'}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-3 p-3 bg-white rounded-lg ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">3</div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <p className="font-medium text-slate-900">{isRTL ? 'التنفيذ والإطلاق' : 'Implementation & Launch'}</p>
                    <p className="text-sm text-slate-500">{isRTL ? '8-12 أسبوع' : '8-12 weeks'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section id="tools" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 mb-4">
            <Wrench className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium">{t('toolsBadge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('toolsTitle')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('toolsDesc')}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.id}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover cursor-pointer border-t-4 border-transparent hover:border-amber-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => setActiveTool(tool.id)}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <tool.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                {tool.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {tool.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-amber-600 text-sm font-medium">
                  {isRTL ? 'انقر للاستخدام ←' : 'Click to use →'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tool Dialog */}
      <Dialog open={!!activeTool} onOpenChange={() => setActiveTool(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {activeTool && (
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tools.find(t => t.id === activeTool)?.color} flex items-center justify-center`}>
                  {(() => {
                    const ToolIcon = tools.find(t => t.id === activeTool)?.icon;
                    return ToolIcon ? <ToolIcon className="w-6 h-6 text-white" /> : null;
                  })()}
                </div>
              )}
              <DialogTitle className="text-xl font-bold text-slate-900">
                {tools.find(t => t.id === activeTool)?.title}
              </DialogTitle>
            </div>
          </DialogHeader>
          {renderToolContent()}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ToolsSection;
