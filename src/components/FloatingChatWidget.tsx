import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Bot, Send, Globe, Zap } from 'lucide-react';

const autoResponses = [
  {
    trigger: 'url-detected',
    url: '/products/summer-dress',
    message: "I see you're browsing our Summer Dress! 👗 It's available in sizes XS-XL. Would you like me to check stock in your size?",
  },
  {
    trigger: 'url-detected',
    url: '/checkout',
    message: "Having trouble with checkout? I can help! We accept all major cards, PayPal, and Apple Pay. Need a discount code?",
  },
];

export default function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUrlDetection, setShowUrlDetection] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'ai', text: "Hi! 👋 I'm the ResolveOS AI agent. I can see you're browsing our site — how can I help?", time: 'now' }
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // Simulate URL detection after 3 seconds
    const timer = setTimeout(() => {
      setShowUrlDetection(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input, time: 'now' }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        from: 'ai',
        text: "I can help with that! Based on what I see on your screen, let me pull up the relevant information...",
        time: 'now'
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/25 flex items-center justify-center hover:scale-110 transition-transform"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-80 glass rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
          >
            {/* Header */}
            <div className="p-3 border-b border-slate-800 bg-slate-900/80">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white">ResolveOS Agent</div>
                  <div className="text-[9px] text-green-400 flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-green-400" />
                    Online • URL detection active
                  </div>
                </div>
              </div>
            </div>

            {/* URL Detection Banner */}
            <AnimatePresence>
              {showUrlDetection && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-3 py-2 bg-primary/5 border-b border-primary/20"
                >
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-primary-light" />
                    <span className="text-[9px] text-slate-400">Detected:</span>
                    <code className="text-[9px] text-primary-light font-mono">resolveos.ai/landing</code>
                    <Zap className="w-2.5 h-2.5 text-yellow-400 ml-auto" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            <div className="p-3 h-64 overflow-y-auto space-y-2">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] px-3 py-2 rounded-xl text-[11px] ${
                    msg.from === 'user'
                      ? 'bg-primary/20 border border-primary/30 text-white'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask anything..."
                  className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-[11px] text-white placeholder-slate-500 focus:outline-none focus:border-primary/50"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg hover:opacity-90"
                >
                  <Send className="w-3 h-3 text-white" />
                </button>
              </div>
              <div className="flex items-center gap-1 mt-1.5">
                <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[8px] text-slate-500">AI is aware of your current page context</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
