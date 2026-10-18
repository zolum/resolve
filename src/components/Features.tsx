import { motion } from 'framer-motion';
import { 
  Brain, MessageSquare, Phone, Globe, Shield, 
  BarChart3, Webhook, Languages, Sparkles, Clock
} from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '10-Minute Deploy',
    description: 'Paste your website URL, upload docs → AI agent is live. No engineering team needed.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: MessageSquare,
    title: 'Omnichannel Inbox',
    description: 'Chat widget, email, SMS, voice calls, WhatsApp — unified thread per customer.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Phone,
    title: 'Voice AI Agent',
    description: 'AI answers phone calls — handles FAQs, order status, appointment booking with sub-500ms latency.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Brain,
    title: 'Knowledge Gap Detector',
    description: 'AI flags unanswered questions and generates "add this to FAQ" suggestions with one-click publish.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Shield,
    title: 'Sentiment Routing',
    description: 'Detects angry customers → priority queue → warm handoff to human with empathy briefing.',
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: Languages,
    title: 'Multi-Language Auto-Detect',
    description: 'Customer writes in Spanish/Hindi/Portuguese → AI responds natively. No translation layer.',
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-500/10',
  },
  {
    icon: BarChart3,
    title: 'CRM Sync',
    description: 'Auto-update HubSpot, Pipedrive, Zoho records from conversations. Log interactions & deal signals.',
    color: 'from-teal-500 to-cyan-500',
    bgColor: 'bg-teal-500/10',
  },
  {
    icon: Webhook,
    title: 'Custom Actions (API)',
    description: 'AI triggers order lookups, refunds, subscription cancellations, appointments via webhooks.',
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-500/10',
  },
  {
    icon: Sparkles,
    title: 'Personality Config',
    description: 'Choose agent tone — friendly, professional, witty, empathetic — via slider, not code.',
    color: 'from-pink-500 to-fuchsia-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    icon: Globe,
    title: 'Transparent AI',
    description: 'Every response shows confidence score + source citation. Humans override in 1 click.',
    color: 'from-sky-500 to-blue-500',
    bgColor: 'bg-sky-500/10',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Features</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Everything your support team needs
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            One platform replacing 5+ tools. AI that actually resolves tickets — not just deflects them.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group glass-light rounded-2xl p-5 card-hover cursor-default"
            >
              <div className={`w-10 h-10 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-5 h-5 bg-gradient-to-r ${feature.color} bg-clip-text`} style={{ color: 'inherit' }} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 glass-light rounded-full px-6 py-3">
            <span className="text-sm text-slate-400">+ Custom webhooks, API access, SSO, audit logs, and more</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
