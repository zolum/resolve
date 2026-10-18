import { motion } from 'framer-motion';
import { ShoppingBag, Code2, Scissors, Building } from 'lucide-react';

const segments = [
  {
    icon: ShoppingBag,
    title: 'E-commerce SMBs',
    subtitle: 'Shopify, WooCommerce, TikTok Shop',
    stat: '2.5M+ US stores',
    description: '1-50 employees, 500-10K tickets/mo. Can\'t afford Zendesk/Intercom but drowning in repetitive questions.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Code2,
    title: 'SaaS Startups',
    subtitle: 'Seed to Series B',
    stat: '50K+ globally',
    description: '0-2 support staff, high ticket volume relative to team size. Need AI that actually understands product docs.',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Scissors,
    title: 'Local Service Businesses',
    subtitle: 'Salons, Clinics, Repair Shops',
    stat: '30M+ US small businesses',
    description: 'Phone-heavy, miss 60% of calls. Need appointment booking + FAQ automation + voice AI.',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    icon: Building,
    title: 'Real Estate & Property',
    subtitle: 'Property Managers, PropTech',
    stat: 'Growing segment',
    description: 'High inquiry volume, repetitive questions about availability, pricing, maintenance. Need 24/7 coverage.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
  },
];

export default function TargetMarket() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Who It's For</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Built for the <span className="gradient-text">99% of businesses</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Enterprise AI support costs $30K+/year. We built ResolveOS for everyone else.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-light rounded-2xl p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${segment.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <segment.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-semibold text-white">{segment.title}</h3>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">{segment.stat}</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">{segment.subtitle}</p>
                  <p className="text-sm text-slate-400">{segment.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market size callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glass-light rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-3xl font-bold gradient-text mb-2">$15.12B → $47.82B</div>
            <p className="text-sm text-slate-400">
              AI customer service market growth (2026-2030). The SMB segment is a <span className="text-white font-medium">$15B+ whitespace</span> — completely unserved by enterprise players.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
