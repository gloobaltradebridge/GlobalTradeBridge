import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: t('chatWelcome'),
          isUser: false,
          timestamp: new Date(),
        },
      ]);
    }
  }, [t]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (isRTL) {
      if (lowerMessage.includes('مرحبا') || lowerMessage.includes('هلا') || lowerMessage.includes('أهلا')) {
        return 'أهلاً بك! كيف يمكنني مساعدتك اليوم؟ يمكنني الإجابة على استفساراتك حول خدماتنا.';
      }
      if (lowerMessage.includes('خدمة') || lowerMessage.includes('تسويق') || lowerMessage.includes('لوجست')) {
        return 'نقدم مجموعة متكاملة من الخدمات تشمل: التسويق الدولي، التوزيع واللوجستيات، الاستشارات التجارية، التسويق الرقمي، تحليل البيانات، وتطوير الأعمال. أي خدمة تهمك؟';
      }
      if (lowerMessage.includes('سعر') || lowerMessage.includes('تكلفة') || lowerMessage.includes('رسوم')) {
        return 'أسعارنا تختلف حسب نوع الخدمة وحجم المشروع. يمكنك التواصل معنا مباشرة عبر الهاتف 01210603429 أو البريد الإلكتروني للحصول على عرض سعر مخصص.';
      }
      if (lowerMessage.includes('تواصل') || lowerMessage.includes('هاتف') || lowerMessage.includes('إيميل')) {
        return 'يمكنك التواصل معنا عبر:\n📞 الهاتف: 01210603429\n📧 البريد: GloobalTradeBridge@gmail.com\n🌐 فيسبوك: Global Trade Bridge';
      }
      if (lowerMessage.includes('بلد') || lowerMessage.includes('دولة') || lowerMessage.includes('سوق')) {
        return 'نخدم عملاءنا في أكثر من 50 دولة حول العالم، بما في ذلك دول الخليج، أوروبا، آسيا، وأفريقيا.';
      }
      if (lowerMessage.includes('شكرا') || lowerMessage.includes('شكراً') || lowerMessage.includes('تمام')) {
        return 'العفو! إذا كان لديك أي استفسارات أخرى، أنا هنا للمساعدة. نتمنى لك يوماً موفقاً! 😊';
      }
      return 'شكراً لسؤالك! يمكنني مساعدتك في معرفة المزيد عن خدماتنا، الأسعار، أو كيفية التواصل معنا. ما الذي تود معرفته؟';
    } else {
      if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return 'Hello! Welcome to Global Trade Bridge. How can I assist you today? I can answer your questions about our services.';
      }
      if (lowerMessage.includes('service') || lowerMessage.includes('marketing') || lowerMessage.includes('logistic')) {
        return 'We offer a comprehensive range of services including: International Marketing, Distribution & Logistics, Business Consulting, Digital Marketing, Data Analysis, and Business Development. Which service interests you?';
      }
      if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee')) {
        return 'Our prices vary depending on the service type and project scope. You can contact us directly at 01210603429 or via email to get a customized quote.';
      }
      if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
        return 'You can reach us through:\n📞 Phone: 01210603429\n📧 Email: GloobalTradeBridge@gmail.com\n🌐 Facebook: Global Trade Bridge';
      }
      if (lowerMessage.includes('country') || lowerMessage.includes('market') || lowerMessage.includes('location')) {
        return 'We serve clients in over 50 countries worldwide, including GCC countries, Europe, Asia, and Africa.';
      }
      if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('ok')) {
        return 'You\'re welcome! If you have any other questions, I\'m here to help. Have a great day! 😊';
      }
      return 'Thank you for your question! I can help you learn more about our services, pricing, or how to contact us. What would you like to know?';
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: generateResponse(inputMessage),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group`}
        aria-label={isOpen ? (isRTL ? 'إغلاق الدردشة' : 'Close chat') : (isRTL ? 'فتح الدردشة' : 'Open chat')}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-pulse" />
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-24 ${isRTL ? 'left-6' : 'right-6'} z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center">
              <Bot className="w-5 h-5 text-slate-900" />
            </div>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h4 className="text-white font-bold">{t('chatTitle')}</h4>
              <p className="text-blue-200 text-xs">{isRTL ? 'متصل الآن' : 'Online now'}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-slate-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.isUser ? (isRTL ? 'justify-start' : 'justify-end') : (isRTL ? 'justify-end' : 'justify-start')}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.isUser
                      ? 'bg-gradient-to-r from-blue-900 to-blue-700 text-white'
                      : 'bg-white border border-slate-200 text-slate-700'
                  }`}
                >
                  <div className={`flex items-center gap-2 mb-1 ${message.isUser ? (isRTL ? 'flex-row-reverse' : '') : (isRTL ? '' : 'flex-row-reverse')}`}>
                    {message.isUser ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4 text-amber-500" />
                    )}
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className={`flex ${isRTL ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className="bg-white border border-slate-200 rounded-2xl p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className={`flex gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chatPlaceholder')}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                className="btn-gold px-3"
                disabled={!inputMessage.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
