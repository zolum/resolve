import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Zap, TrendingUp, Building2, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small businesses getting started with AI support.',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    popular: false,
    features: [
      '1,000 resolutions/month',
      'Chat + Email channels',
      '1 language',
      'Knowledge base ingestion',
      'Basic analytics',
      'Email support',
      'Widget customization',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Growth',
    price: '$249',
    period: '/month',
    description: 'For growing businesses that need omnichannel AI support.',
    icon: TrendingUp,
    color: 'from-primary to-accent',
    popular: true,
    features: [
      '5,000 resolutions/month',
      'Chat + Email + Voice + SMS',
      '5 languages',
      'CRM sync (HubSpot, Pipedrive)',
      'Advanced analytics & reports',
      'Priority support',
      'Custom agent personality',
      'Sentiment routing',
      'Knowledge gap detection',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Scale',
    price: '$499',
    period: '/month',
    description: 'For high-volume businesses needing full platform power.',
    icon: Building2,
    color: 'from-purple-500 to-pink-500',
    popular: false,
    features: [
      '20,000 resolutions/month',
      'All channels + WhatsApp',
      'Unlimited languages',
      'Custom actions & API access',
      'Dedicated model tuning',
      'White-label option',
      'SSO & audit logs',
      'Dedicated success manager',
      'SLA guarantee',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
  },
];

const addOns = [
  { name: 'Overage resolutions', price: '$0.05', unit: '/resolution' },
  { name: 'Voice minutes (beyond 500)', price: '$0.06', unit: '/minute' },
  { name: 'White-label for agencies', price: '$999', unit: '/month (20 clients)' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Flat pricing. <span className="gradient-text">No per-resolution traps.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            While Intercom charges $0.99/resolution ($4,950/mo at 5K tickets), 
            ResolveOS is a flat $99. That's a <span className="text-white font-semibold">97% cost reduction</span>.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 card-hover ${
                plan.popular 
                  ? 'bg-gradient-to-b from-primary/20 to-accent/10 border-2 border-primary/50' 
                  : 'glass-light'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-medium text-white">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                  <plan.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400">{plan.description}</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-slate-400">{plan.period}</span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/signup" className={`w-full py-3 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                plan.popular
                  ? 'bg-gradient-to-r from-primary to-accent text-white hover:opacity-90'
                  : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}>
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-light rounded-2xl p-6"
        >
          <h3 className="text-sm font-semibold text-white mb-4">Add-ons & Overage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {addOns.map((addon) => (
              <div key={addon.name} className="flex items-center justify-between bg-slate-800/50 rounded-xl px-4 py-3">
                <span className="text-sm text-slate-300">{addon.name}</span>
                <span className="text-sm font-medium text-accent">{addon.price}<span className="text-xs text-slate-500">{addon.unit}</span></span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ROI Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-4 glass-light rounded-full px-6 py-3">
            <span className="text-sm text-slate-400">💰 Avg customer saves</span>
            <span className="text-lg font-bold gradient-text">$2,100/month</span>
            <span className="text-sm text-slate-400">vs. legacy tools</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
