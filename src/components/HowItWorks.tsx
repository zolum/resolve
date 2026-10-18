import { motion } from 'framer-motion';
import { Link, Database, Brain, Rocket, MessageCircle, BarChart3 } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Link,
    title: 'Connect Your Sources',
    description: 'Paste your website URL, upload help docs, connect your existing support channels.',
    detail: 'We crawl your site, index your knowledge base, and import past tickets automatically.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    step: '02',
    icon: Database,
    title: 'AI Learns Your Business',
    description: 'Our RAG pipeline builds a knowledge graph from your content in minutes.',
    detail: 'Hybrid search (BM25 + vector) ensures your agent finds the right answer every time.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    step: '03',
    icon: Brain,
    title: 'Configure & Test',
    description: 'Set your agent personality, confidence thresholds, and escalation rules.',
    detail: 'Test with real scenarios in our sandbox. Adjust until you\'re 100% confident.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Go Live Everywhere',
    description: 'One-click deploy to chat widget, email, voice, SMS, and WhatsApp.',
    detail: 'Your AI agent handles 70%+ of inquiries from day one, improving over time.',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            From zero to live in <span className="gradient-text">10 minutes</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            No engineering team. No 3-month implementation. Just paste, configure, and launch.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-slate-700 to-transparent z-0" />
              )}
              
              <div className="glass-light rounded-2xl p-6 card-hover relative z-10 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-slate-700">{step.step}</span>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center opacity-80`}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{step.description}</p>
                <p className="text-xs text-slate-500">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left: Chat simulation */}
          <div className="glass rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-slate-400">Live Agent Demo</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">👤</div>
                <div className="bg-slate-800 rounded-xl rounded-tl-none px-4 py-3 text-sm text-slate-300">
                  Where's my order? It was supposed to arrive 3 days ago. Order #7842
                </div>
              </div>
              
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-primary/20 border border-primary/30 rounded-xl rounded-tr-none px-4 py-3 text-sm text-slate-200 max-w-sm">
                  <p>I found your order #7842! It's currently at the local distribution center and will be delivered tomorrow by 5 PM.</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">96% confidence</span>
                    <span className="text-[10px] text-slate-500">📎 Shipping API</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs">👤</div>
                <div className="bg-slate-800 rounded-xl rounded-tl-none px-4 py-3 text-sm text-slate-300">
                  Can I get a 10% discount for the delay?
                </div>
              </div>

              <div className="flex items-start gap-3 justify-end">
                <div className="bg-primary/20 border border-primary/30 rounded-xl rounded-tr-none px-4 py-3 text-sm text-slate-200 max-w-sm">
                  <p>Absolutely! I've applied a 10% courtesy credit to your account. You'll see it reflected in your next purchase. Is there anything else I can help with?</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">92% confidence</span>
                    <span className="text-[10px] text-slate-500">📎 Refund Policy</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="space-y-4">
            <div className="glass-light rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-white">Real-time Performance</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-400">78.3%</div>
                  <div className="text-xs text-slate-400 mt-1">Resolution Rate</div>
                  <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-primary-light">1.2s</div>
                  <div className="text-xs text-slate-400 mt-1">Avg Response Time</div>
                  <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-[12%] bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-400">4.8/5</div>
                  <div className="text-xs text-slate-400 mt-1">Customer Satisfaction</div>
                  <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-[96%] bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-400">$2.1K</div>
                  <div className="text-xs text-slate-400 mt-1">Monthly Savings</div>
                  <div className="mt-2 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-light rounded-2xl p-6">
              <h4 className="text-sm font-medium text-slate-300 mb-3">🧠 Knowledge Brain Status</h4>
              <div className="space-y-2">
                {[
                  { label: 'Product Docs', status: 'Indexed', pct: 100 },
                  { label: 'Past Tickets (2.4K)', status: 'Learned', pct: 100 },
                  { label: 'FAQ (47 items)', status: 'Active', pct: 100 },
                  { label: 'Knowledge Gaps', status: '3 detected', pct: 15 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">{item.label}</span>
                    <span className={`px-2 py-0.5 rounded-full ${item.pct === 100 ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
