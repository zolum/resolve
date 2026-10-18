import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Zap, Bot, ArrowRight, Activity } from 'lucide-react';

interface UrlEvent {
  id: number;
  url: string;
  action: string;
  time: string;
  customer: string;
  avatar: string;
  aiResponse: string;
}

const urlEvents: UrlEvent[] = [
  {
    id: 1,
    url: '/products/blue-widget-xl',
    action: 'Viewing product page',
    time: 'just now',
    customer: 'Emma W.',
    avatar: '🛍️',
    aiResponse: 'Proactively offered size guide + stock status',
  },
  {
    id: 2,
    url: '/checkout/payment',
    action: 'Payment page - stuck',
    time: '12s ago',
    customer: 'Marcus R.',
    avatar: '🦷',
    aiResponse: 'Detected cart abandonment → offered 10% discount',
  },
  {
    id: 3,
    url: '/orders/7842/tracking',
    action: 'Checking order status',
    time: '34s ago',
    customer: 'Sarah J.',
    avatar: '🌸',
    aiResponse: 'Auto-shared live tracking + delivery ETA',
  },
  {
    id: 4,
    url: '/account/subscription',
    action: 'Subscription management',
    time: '1m ago',
    customer: 'Priya P.',
    avatar: '⚡',
    aiResponse: 'Offered pause option instead of cancellation',
  },
  {
    id: 5,
    url: '/returns/initiate',
    action: 'Starting return process',
    time: '2m ago',
    customer: 'Alex T.',
    avatar: '🎯',
    aiResponse: 'Generated return label + scheduled pickup',
  },
  {
    id: 6,
    url: '/products/summer-dress/reviews',
    action: 'Reading reviews',
    time: '3m ago',
    customer: 'David K.',
    avatar: '💻',
    aiResponse: 'Answered sizing question from review context',
  },
];

export default function LiveUrlFeed() {
  const [events, setEvents] = useState(urlEvents);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <section id="live-feed" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass-light rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">Live Feed — Real-time URL Detection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            AI that <span className="gradient-text">sees what your customers see</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            ResolveOS captures the URL your customer is viewing in real-time and responds with 
            <span className="text-white font-semibold"> contextual intelligence</span> — before they even ask.
          </p>
        </motion.div>

        {/* Live Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-900/50">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-white">Live URL Capture Feed</span>
                <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">LIVE</span>
              </div>
              <div className="text-[10px] text-slate-500">
                bloombox.com • {events.length} events captured
              </div>
            </div>

            {/* Events List */}
            <div className="divide-y divide-slate-800/50">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-5 py-3 hover:bg-slate-800/30 transition-colors ${
                    index === currentIndex ? 'bg-primary/5 border-l-2 border-l-primary' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm flex-shrink-0">
                      {event.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-white">{event.customer}</span>
                        <span className="text-[10px] text-slate-500">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Globe className="w-3 h-3 text-primary-light flex-shrink-0" />
                        <code className="text-[10px] text-primary-light font-mono bg-primary/10 px-2 py-0.5 rounded truncate">
                          bloombox.com{event.url}
                        </code>
                      </div>
                      <div className="text-[10px] text-slate-500 mb-1">{event.action}</div>
                      <div className="flex items-start gap-1.5 mt-2 p-2 bg-green-500/5 border border-green-500/20 rounded-lg">
                        <Bot className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-[10px] text-green-300">{event.aiResponse}</span>
                      </div>
                    </div>
                    {index === currentIndex && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-primary/20 rounded-full flex-shrink-0">
                        <Zap className="w-3 h-3 text-primary-light" />
                        <span className="text-[9px] text-primary-light font-medium">Active</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-slate-400">AI is actively monitoring 6 customer sessions</span>
              </div>
              <Link to="/signup" className="text-[10px] text-primary-light hover:underline flex items-center gap-1">
                See it in action <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          {[
            { step: '1', title: 'URL Captured', desc: 'Widget detects the page customer is viewing in real-time', icon: Globe },
            { step: '2', title: 'Context Analyzed', desc: 'AI analyzes page content, intent, and customer history', icon: Zap },
            { step: '3', title: 'Smart Response', desc: 'Proactive help delivered before the customer even asks', icon: Bot },
          ].map((item, i) => (
            <div key={item.step} className="glass-light rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-3">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div className="text-[10px] text-slate-500 mb-1">Step {item.step}</div>
              <div className="text-sm font-medium text-white mb-1">{item.title}</div>
              <div className="text-[10px] text-slate-400">{item.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
