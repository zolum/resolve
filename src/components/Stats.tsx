import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const stats = [
  { icon: Users, value: '2,400+', label: 'SMBs Deployed', color: 'text-blue-400' },
  { icon: TrendingUp, value: '78%', label: 'Avg Resolution Rate', color: 'text-green-400' },
  { icon: Clock, value: '1.2s', label: 'Avg Response Time', color: 'text-purple-400' },
  { icon: DollarSign, value: '$2.1K', label: 'Avg Monthly Savings', color: 'text-yellow-400' },
];

const testimonials = [
  {
    quote: "We went from 4 support agents to 1 + ResolveOS. Our resolution rate jumped from 45% to 82% in the first month. And we're paying $99 instead of $4,000.",
    author: 'Sarah Chen',
    role: 'Founder, BloomBox (Shopify)',
    avatar: '🌸',
  },
  {
    quote: "The voice agent is a game-changer. We used to miss 60% of calls. Now ResolveOS handles appointment bookings and FAQs 24/7. Our booking rate doubled.",
    author: 'Marcus Rivera',
    role: 'Owner, Rivera Dental Clinic',
    avatar: '🦷',
  },
  {
    quote: "I tried Tidio, Intercom, Zendesk — nothing worked for our scale. ResolveOS deployed in 8 minutes and resolved 70% of tickets on day one. Unreal.",
    author: 'Priya Patel',
    role: 'Head of CX, NovaTech SaaS',
    avatar: '⚡',
  },
];

const logos = ['Shopify', 'WooCommerce', 'HubSpot', 'Pipedrive', 'Stripe', 'Twilio'];

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-light rounded-2xl p-6 text-center card-hover"
            >
              <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-3`} />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm text-slate-500 mb-6">Integrates with your existing stack</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo) => (
              <div key={logo} className="px-4 py-2 glass-light rounded-lg">
                <span className="text-sm font-medium text-slate-400">{logo}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Loved by <span className="gradient-text">2,400+ SMBs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-light rounded-2xl p-6 card-hover"
            >
              <div className="text-2xl mb-4">{testimonial.avatar}</div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-white">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{testimonial.author}</div>
                  <div className="text-xs text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
