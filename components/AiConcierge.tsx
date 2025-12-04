import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { generateWellnessAdvice } from '../services/geminiService';
import { Message } from '../types';

interface AiConciergeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiConcierge: React.FC<AiConciergeProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to Josh's Gym. I am here to guide you through our exclusive membership privileges. How may I assist you in joining us today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      
      const response = await generateWellnessAdvice(userMsg, history);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I apologize, connection to the sanctuary is weak." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div 
      className={`fixed inset-y-0 right-0 w-full md:w-[450px] bg-[#0a0a0a] border-l border-white/10 z-[60] transform transition-transform duration-500 ease-in-out shadow-2xl flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0F1110]">
        <div>
          <h2 className="text-brand-gold font-serif text-xl tracking-widest">CONCIERGE</h2>
          <p className="text-white/40 text-xs tracking-widest mt-1">MEMBERSHIP SERVICES</p>
        </div>
        <button onClick={onClose} className="text-white/60 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-[#0F1110] to-[#151515]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-white/5 text-white border border-white/10' 
                  : 'bg-transparent text-brand-gold border-l-2 border-brand-gold pl-4'
              }`}
            >
              <p className="font-sans font-light tracking-wide">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="text-brand-gold/50 flex gap-2 items-center text-xs tracking-widest animate-pulse pl-4">
              <Sparkles className="w-4 h-4" /> CONSULTING MEMBERSHIP ROLLS...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 bg-[#0F1110] border-t border-white/10">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Inquire about joining..."
            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 pr-12 focus:outline-none focus:border-brand-gold/50 transition-colors font-sans font-light"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-3 top-3 text-brand-gold hover:text-white disabled:opacity-50 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};