import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-purple-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-light rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300">No credit card required • 14-day free trial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to resolve <span className="gradient-text">70%+ of tickets</span> on autopilot?
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Join 2,400+ SMBs saving $2,100/month on average. Deploy your AI agent in 10 minutes — 
            see it resolve your first 10 tickets free.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link to="/signup" className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-xl font-semibold text-white hover:opacity-90 transition-all shadow-lg shadow-primary/25 animate-pulse-glow">
              Deploy Your Agent Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#scorecard" className="flex items-center gap-2 px-8 py-4 glass-light rounded-xl font-medium text-white hover:bg-slate-800/50 transition-all">
              <Zap className="w-4 h-4 text-yellow-400" />
              Try the Scorecard Tool
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-green-400" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>10-min setup</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Performance guarantee</span>
            </div>
          </div>

          {/* Performance guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 glass-light rounded-2xl p-6 max-w-lg mx-auto"
          >
            <div className="text-sm font-medium text-white mb-2">🛡️ AI Performance Guarantee</div>
            <p className="text-xs text-slate-400">
              If your resolution rate is below 60% in the first 30 days, we'll refund you in full. 
              No questions asked. We're that confident.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
