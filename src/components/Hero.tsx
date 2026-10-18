import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Shield, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient noise-bg overflow-hidden pt-16">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">Now in Public Beta — 2,400+ SMBs deployed</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">AI Support Agent</span>
            <br />
            <span className="gradient-text">Deployed in 10 Minutes</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            ResolveOS trains an AI agent on your help docs, past tickets, and product data — 
            resolving <span className="text-white font-semibold">70%+ of inquiries</span> autonomously across chat, email, and voice. 
            Flat <span className="text-accent font-semibold">$99/month</span>. Zero per-resolution fees.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/signup" className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-xl font-semibold text-white hover:opacity-90 transition-all shadow-lg shadow-primary/25 animate-pulse-glow">
              Deploy Your Agent Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 glass-light rounded-xl font-medium text-white hover:bg-slate-800/50 transition-all">
              <Play className="w-4 h-4" />
              Watch 2-min Demo
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
          >
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>10-min deploy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-green-400" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-400" />
              <span>50+ Languages</span>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto max-w-5xl">
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-purple-500/20 blur-3xl rounded-full" />
              
              {/* Dashboard mockup */}
              <div className="relative glass rounded-2xl border border-slate-700/50 p-1 shadow-2xl">
                <div className="bg-slate-900/80 rounded-xl overflow-hidden">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-4 py-1 bg-slate-800 rounded-md text-xs text-slate-400">
                        app.resolveos.ai/dashboard
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard content */}
                  <div className="p-6 grid grid-cols-12 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-3 space-y-3">
                      <div className="h-8 bg-slate-800 rounded-lg flex items-center px-3 gap-2">
                        <div className="w-5 h-5 rounded bg-gradient-to-br from-primary to-accent" />
                        <div className="h-3 w-16 bg-slate-700 rounded" />
                      </div>
                      {['Inbox', 'Knowledge', 'Analytics', 'Channels', 'Settings'].map((item, i) => (
                        <div key={item} className={`h-7 rounded-lg flex items-center px-3 gap-2 ${i === 0 ? 'bg-primary/20 border border-primary/30' : ''}`}>
                          <div className="w-4 h-4 rounded bg-slate-700" />
                          <div className="h-2.5 w-12 bg-slate-700 rounded" />
                        </div>
                      ))}
                    </div>
                    
                    {/* Main content */}
                    <div className="col-span-9 space-y-4">
                      {/* Stats row */}
                      <div className="grid grid-cols-4 gap-3">
                        {[
                          { label: 'Resolved Today', value: '847', color: 'from-green-500 to-emerald-500' },
                          { label: 'Resolution Rate', value: '78.3%', color: 'from-primary to-accent' },
                          { label: 'Avg Response', value: '1.2s', color: 'from-purple-500 to-pink-500' },
                          { label: 'CSAT Score', value: '4.8/5', color: 'from-yellow-500 to-orange-500' },
                        ].map((stat) => (
                          <div key={stat.label} className="bg-slate-800/50 rounded-lg p-3">
                            <div className="text-[10px] text-slate-500 mb-1">{stat.label}</div>
                            <div className={`text-lg font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                              {stat.value}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Chat preview */}
                      <div className="bg-slate-800/30 rounded-lg p-4 space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-500/30 flex-shrink-0" />
                          <div className="bg-slate-700/50 rounded-lg px-3 py-2 text-xs text-slate-300 max-w-xs">
                            Hi, I need to return my order #4521. It arrived damaged.
                          </div>
                        </div>
                        <div className="flex items-start gap-2 justify-end">
                          <div className="bg-primary/20 border border-primary/30 rounded-lg px-3 py-2 text-xs text-slate-200 max-w-xs">
                            I'm sorry to hear that! I found your order #4521. I can process a return right now — would you like a refund or replacement?
                            <div className="mt-1.5 flex items-center gap-2">
                              <span className="text-[9px] px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded">98% confidence</span>
                              <span className="text-[9px] text-slate-500">Source: Return Policy</span>
                            </div>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
