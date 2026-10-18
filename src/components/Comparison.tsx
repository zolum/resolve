import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const competitors = [
  {
    name: 'ResolveOS',
    highlight: true,
    deploy: '10 min',
    pricing: '$99/mo flat',
    channels: 'Chat + Email + Voice + SMS + WhatsApp',
    ai: 'Advanced RAG + Custom Actions',
    languages: '50+',
    crm: 'HubSpot, Pipedrive, Zoho',
    voice: true,
    transparent: true,
    cost5k: '$99',
  },
  {
    name: 'Intercom Fin',
    highlight: false,
    deploy: 'Weeks',
    pricing: '$0.99/resolution + $99/seat',
    channels: 'Chat + Email',
    ai: 'Basic AI agent',
    languages: 'Limited',
    crm: 'Limited integrations',
    voice: false,
    transparent: false,
    cost5k: '$4,950',
  },
  {
    name: 'Zendesk AI',
    highlight: false,
    deploy: 'Months',
    pricing: '~$1.50/resolution',
    channels: 'Chat + Email',
    ai: 'Add-on AI module',
    languages: '40+',
    crm: 'Native + integrations',
    voice: false,
    transparent: false,
    cost5k: '$7,500',
  },
  {
    name: 'Tidio',
    highlight: false,
    deploy: '30 min',
    pricing: '$29-$74/mo',
    channels: 'Chat only',
    ai: 'Basic chatbot',
    languages: '5',
    crm: 'None',
    voice: false,
    transparent: false,
    cost5k: 'N/A (chat only)',
  },
];

const comparisonFeatures = [
  { label: 'Deploy Time', key: 'deploy' },
  { label: 'Pricing Model', key: 'pricing' },
  { label: 'Channels', key: 'channels' },
  { label: 'AI Capability', key: 'ai' },
  { label: 'Languages', key: 'languages' },
  { label: 'CRM Sync', key: 'crm' },
  { label: 'Voice Agent', key: 'voice', isBool: true },
  { label: 'Transparent AI', key: 'transparent', isBool: true },
  { label: 'Cost at 5K tickets/mo', key: 'cost5k' },
];

export default function Comparison() {
  return (
    <section id="comparison" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Compare</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Why SMBs choose <span className="gradient-text">ResolveOS</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            See how we stack up against the alternatives. The numbers speak for themselves.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="min-w-[800px]">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 mb-4">
              <div className="text-sm text-slate-500 font-medium">Feature</div>
              {competitors.map((comp) => (
                <div key={comp.name} className={`text-center ${comp.highlight ? 'text-white' : 'text-slate-400'}`}>
                  <div className={`text-sm font-semibold ${comp.highlight ? 'gradient-text' : ''}`}>
                    {comp.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Table Rows */}
            <div className="space-y-2">
              {comparisonFeatures.map((feature, idx) => (
                <div
                  key={feature.label}
                  className={`grid grid-cols-5 gap-4 items-center py-3 px-4 rounded-xl ${
                    idx % 2 === 0 ? 'bg-slate-800/20' : ''
                  }`}
                >
                  <div className="text-sm text-slate-300 font-medium">{feature.label}</div>
                  {competitors.map((comp) => {
                    const value = comp[feature.key as keyof typeof comp];
                    if (feature.isBool) {
                      return (
                        <div key={comp.name} className="flex justify-center">
                          {value ? (
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              comp.highlight ? 'bg-green-500/20' : 'bg-green-500/10'
                            }`}>
                              <Check className="w-3.5 h-3.5 text-green-400" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-red-500/10">
                              <X className="w-3.5 h-3.5 text-red-400" />
                            </div>
                          )}
                        </div>
                      );
                    }
                    return (
                      <div key={comp.name} className={`text-center text-sm ${
                        comp.highlight ? 'text-white font-medium' : 'text-slate-400'
                      }`}>
                        {String(value)}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Cost Comparison Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-light rounded-2xl p-6 text-center">
            <div className="text-sm text-slate-400 mb-2">Intercom Fin (5K tickets)</div>
            <div className="text-3xl font-bold text-red-400">$4,950</div>
            <div className="text-xs text-slate-500 mt-1">/month</div>
            <div className="mt-3 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-red-500 to-red-400 rounded-full" />
            </div>
          </div>
          <div className="glass-light rounded-2xl p-6 text-center">
            <div className="text-sm text-slate-400 mb-2">Zendesk AI (5K tickets)</div>
            <div className="text-3xl font-bold text-orange-400">$7,500</div>
            <div className="text-xs text-slate-500 mt-1">/month</div>
            <div className="mt-3 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full" />
            </div>
          </div>
          <div className="relative rounded-2xl p-6 text-center bg-gradient-to-b from-primary/20 to-accent/10 border-2 border-primary/30">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-green-500 rounded-full text-[10px] font-bold text-white">
              97% SAVINGS
            </div>
            <div className="text-sm text-slate-300 mb-2">ResolveOS (5K tickets)</div>
            <div className="text-3xl font-bold gradient-text">$99</div>
            <div className="text-xs text-slate-400 mt-1">/month flat</div>
            <div className="mt-3 h-2 bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full w-[2%] bg-gradient-to-r from-primary to-accent rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
