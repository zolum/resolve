import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does the 10-minute deploy actually work?',
    answer: 'Simply paste your website URL and upload any help docs, past tickets, or product data. Our AI crawls your site, builds a knowledge graph using RAG (Retrieval-Augmented Generation), and creates a trained agent. You configure personality and confidence thresholds, then go live across all channels with one click.',
  },
  {
    question: 'What happens if the AI gives a wrong answer?',
    answer: 'Every AI response shows a confidence score and source citation. If confidence drops below 85%, the conversation is automatically routed to a human. We also run weekly accuracy audits and offer an AI Performance Guarantee — if resolution rate is below 60% in 30 days, you get a full refund.',
  },
  {
    question: 'How is this different from Intercom Fin or Zendesk AI?',
    answer: 'Three key differences: (1) Flat pricing — $99/mo vs $0.99/resolution at Intercom (that\'s $4,950/mo at 5K tickets). (2) 10-minute deploy vs weeks/months of implementation. (3) Built specifically for SMBs, not enterprise. We include voice AI, multi-language, and CRM sync that competitors charge extra for.',
  },
  {
    question: 'Can the AI actually process refunds or book appointments?',
    answer: 'Yes! With Custom Actions, the AI can trigger webhooks to process refunds, look up orders, cancel subscriptions, book appointments, and more. It goes beyond FAQ — it actually completes tasks. Setup takes just a few API endpoint configurations.',
  },
  {
    question: 'What languages does the AI support?',
    answer: '50+ languages with auto-detection. When a customer writes in Spanish, Hindi, Portuguese, or any other language, the AI responds natively in that language — no translation layer needed. This is built into the model, not bolted on.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We\'re SOC 2 Type II compliant from day one, with data residency options, automatic PII redaction, and full GDPR/CCPA compliance. Your knowledge base is encrypted at rest and in transit. We never share your data between customers.',
  },
  {
    question: 'What if I need to scale beyond my plan?',
    answer: 'Overage is just $0.05/resolution beyond your plan limit — compared to $0.99 at Intercom. You can also upgrade anytime. Most customers find they save so much money they upgrade to a higher tier for more features, not because they have to.',
  },
  {
    question: 'Do you offer a white-label option for agencies?',
    answer: 'Yes! Our Agency tier at $999/mo lets you resell ResolveOS to up to 20 clients under your own brand. Perfect for digital agencies, marketing firms, and IT service providers who want to offer AI support as a service.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className={`glass-light rounded-xl p-5 transition-all ${
                  openIndex === index ? 'border-primary/30' : ''
                }`}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm font-medium text-white pr-4">{faq.question}</h3>
                    <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} />
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
