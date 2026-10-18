import { motion } from 'framer-motion';
import { Server, Cpu, Database, Cloud, Shield, Gauge } from 'lucide-react';

const techLayers = [
  {
    icon: Cpu,
    layer: 'AI / LLM',
    tech: 'Llama 3.1 70B + GPT-4o',
    detail: 'Fine-tuned open-source models + RAG pipeline with hybrid search (BM25 + vector)',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Database,
    layer: 'Vector DB',
    tech: 'Weaviate / Qdrant',
    detail: 'Knowledge graph storage with sub-50ms retrieval latency',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Server,
    layer: 'Backend',
    tech: 'Python (FastAPI) + Go',
    detail: 'Async-heavy processing with low-latency real-time routing',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Cloud,
    layer: 'Infrastructure',
    tech: 'AWS (EKS) + Cloudflare',
    detail: 'Global edge deployment for sub-100ms widget load times worldwide',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Shield,
    layer: 'Voice AI',
    tech: 'Twilio + Deepgram + ElevenLabs',
    detail: 'Sub-500ms voice latency with custom interruption handling',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Gauge,
    layer: 'Observability',
    tech: 'LangSmith + Custom Eval',
    detail: 'Real-time AI response quality monitoring with automated accuracy audits',
    color: 'from-yellow-500 to-amber-500',
  },
];

export default function TechStack() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Architecture</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Enterprise-grade <span className="gradient-text">under the hood</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Built on battle-tested infrastructure. SOC 2 compliant from day one. 
            78% gross margins that improve as model costs drop 10x/year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techLayers.map((layer, index) => (
            <motion.div
              key={layer.layer}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-light rounded-2xl p-5 card-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-lg bg-gradient-to-r ${layer.color} flex items-center justify-center`}>
                  <layer.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">{layer.layer}</div>
                  <div className="text-sm font-semibold text-white">{layer.tech}</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{layer.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Security badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {['SOC 2 Type II', 'GDPR', 'CCPA', 'HIPAA Ready', '99.99% Uptime SLA'].map((badge) => (
            <div key={badge} className="px-4 py-2 glass-light rounded-full text-xs font-medium text-slate-300">
              🛡️ {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
