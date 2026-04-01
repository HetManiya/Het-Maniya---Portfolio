
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { askAssistant } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: "Hi! I'm Het's AI assistant. Ask me anything about his skills or experience!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await askAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center group relative"
        >
          <MessageSquare size={24} />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
        </button>
      ) : (
        <div className="bg-slate-800 border border-slate-700 w-[calc(100vw-3rem)] sm:w-96 max-w-96 rounded-2xl shadow-2xl flex flex-col max-h-[500px] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-900/50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <Bot className="text-indigo-400" size={20} />
              </div>
              <div>
                <span className="font-bold text-sm block leading-none">AI Assistant</span>
                <span className="text-[10px] text-green-400 font-medium uppercase tracking-wider">Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors p-1">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-md' 
                    : 'bg-slate-700 text-slate-100 rounded-tl-none border border-slate-600/50 shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start animate-in fade-in slide-in-from-left-2 duration-300">
                <div className="bg-slate-700/40 backdrop-blur-sm p-4 rounded-2xl rounded-tl-none border border-slate-600/30 flex flex-col gap-3 shadow-lg min-w-[140px]">
                  <div className="flex items-center gap-2">
                    <Loader2 size={18} className="animate-spin text-indigo-400" />
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">AI is thinking...</span>
                  </div>
                  <div className="flex gap-1.5 ml-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 dot"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 dot"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 dot"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-slate-700 bg-slate-900/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Het..."
                className="flex-1 bg-slate-700 border border-slate-600/50 rounded-xl px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 outline-none transition-all"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-30 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[9px] text-center text-slate-500 mt-3 uppercase tracking-tighter">Powered by Gemini AI</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;
