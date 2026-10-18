import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, TrendingDown, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

const mockResults = [
  { label: 'FAQ Coverage', score: 23, color: 'text-red-400', bg: 'bg-red-500' },
  { label: 'Response Speed', score: 45, color: 'text-orange-400', bg: 'bg-orange-500' },
  { label: 'Multi-channel', score: 12, color: 'text-red-400', bg: 'bg-red-500' },
  { label: 'Auto-resolution', score: 8, color: 'text-red-400', bg: 'bg-red-500' },
  { label: '24/7 Availability', score: 35, color: 'text-orange-400', bg: 'bg-orange-500' },
];

export default function Scorecard() {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Free Tool</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            AI Support <span className="gradient-text">Scorecard</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Enter any company's website — we'll test their current support and show you exactly what ResolveOS would do differently.
          </p>
        </motion.div>

        {/* Scorecard Tool */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-2xl p-6 sm:p-8">
            {/* Input */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter website URL (e.g., yourstore.com)"
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-xl font-medium text-sm text-white hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Analyze <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Loading State */}
            <AnimatePresence>
              {isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3"
                >
                  {['Crawling website...', 'Testing support channels...', 'Analyzing response quality...', 'Generating scorecard...'].map((step, i) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.5 }}
                      className="flex items-center gap-3 text-sm text-slate-400"
                    >
                      <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                      {step}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results */}
            <AnimatePresence>
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  {/* Overall Score */}
                  <div className="flex items-center justify-between p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      <span className="text-sm font-medium text-white">Your AI Support Score</span>
                    </div>
                    <div className="text-2xl font-bold text-red-400">23/100</div>
                  </div>

                  {/* Individual Scores */}
                  <div className="space-y-3">
                    {mockResults.map((result, i) => (
                      <motion.div
                        key={result.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4"
                      >
                        <span className="text-xs text-slate-400 w-28 flex-shrink-0">{result.label}</span>
                        <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${result.score}%` }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`h-full ${result.bg} rounded-full`}
                          />
                        </div>
                        <span className={`text-xs font-medium ${result.color} w-8`}>{result.score}%</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* What ResolveOS would do */}
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-medium text-white">With ResolveOS, you'd get:</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        '82% resolution rate',
                        '<2s response time',
                        '5-channel coverage',
                        '24/7 availability',
                        'Multi-language support',
                        'CRM auto-sync',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-green-300">
                          <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link to="/signup" className="w-full py-3 bg-gradient-to-r from-primary to-accent rounded-xl font-medium text-sm text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    See What ResolveOS Can Do For You
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-slate-500">
            📊 <span className="text-slate-400">12,400+ scorecards generated</span> — companies self-identify as prospects
          </p>
        </motion.div>
      </div>
    </section>
  );
}
