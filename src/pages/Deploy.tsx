import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot, Link, Upload, Sliders, Rocket, Check, ArrowRight, ArrowLeft,
  Globe, MessageSquare, Phone, Mail, Sparkles, Brain
} from 'lucide-react';

const steps = [
  { id: 1, title: 'Connect Sources', icon: Link },
  { id: 2, title: 'Upload Knowledge', icon: Upload },
  { id: 3, title: 'Configure Agent', icon: Sliders },
  { id: 4, title: 'Deploy', icon: Rocket },
];

export default function Deploy() {
  const navigate = useNavigate();
  const { user, completeDeploy } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [sources, setSources] = useState({
    website: user?.website || '',
    helpDocs: false,
    pastTickets: false,
    faq: false,
  });
  const [personality, setPersonality] = useState({
    tone: 'friendly',
    confidence: 85,
    languages: ['English'],
    channels: { chat: true, email: true, voice: false, sms: false },
  });

  const handleNext = () => {
    if (currentStep < 4) {
      if (currentStep === 1) {
        setIsProcessing(true);
        setTimeout(() => {
          setIsProcessing(false);
          setCurrentStep(2);
        }, 1500);
      } else if (currentStep === 2) {
        setIsProcessing(true);
        setTimeout(() => {
          setIsProcessing(false);
          setCurrentStep(3);
        }, 2000);
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      // Final deploy
      setIsProcessing(true);
      setTimeout(() => {
        completeDeploy();
        navigate('/dashboard/inbox');
      }, 3000);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              Resolve<span className="gradient-text">OS</span>
            </span>
          </div>
          <div className="text-xs text-slate-400">
            Step {currentStep} of 4
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="max-w-4xl mx-auto w-full px-4 pt-8">
        <div className="flex items-center justify-between mb-12">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className={`flex items-center gap-2 ${currentStep >= step.id ? 'text-white' : 'text-slate-600'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${
                  currentStep > step.id
                    ? 'bg-green-500 text-white'
                    : currentStep === step.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white'
                    : 'bg-slate-800 text-slate-500'
                }`}>
                  {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                </div>
                <span className="text-xs font-medium hidden sm:block">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-px mx-3 ${currentStep > step.id ? 'bg-green-500' : 'bg-slate-800'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 pb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            {/* Step 1: Connect Sources */}
            {currentStep === 1 && (
              <div className="glass rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-2">Connect your sources</h2>
                <p className="text-sm text-slate-400 mb-6">
                  We'll crawl your website and build a knowledge graph from your content.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 mb-1.5 block">Website URL</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        value={sources.website}
                        onChange={(e) => setSources({ ...sources, website: e.target.value })}
                        placeholder="yourcompany.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-300">Additional sources (optional)</label>
                    {[
                      { key: 'helpDocs', label: 'Help documentation / Knowledge base', icon: '📚' },
                      { key: 'pastTickets', label: 'Past support tickets / emails', icon: '📧' },
                      { key: 'faq', label: 'FAQ page or document', icon: '❓' },
                    ].map((item) => (
                      <label
                        key={item.key}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          sources[item.key as keyof typeof sources]
                            ? 'border-primary/50 bg-primary/10'
                            : 'border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={sources[item.key as keyof typeof sources] as boolean}
                          onChange={(e) => setSources({ ...sources, [item.key]: e.target.checked })}
                          className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-primary focus:ring-primary/50"
                        />
                        <span className="text-sm">{item.icon}</span>
                        <span className="text-sm text-slate-300">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                      <span className="text-sm text-slate-300">Crawling website and indexing content...</span>
                    </div>
                    <div className="mt-3 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Step 2: Upload Knowledge */}
            {currentStep === 2 && (
              <div className="glass rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-2">Building your knowledge base</h2>
                <p className="text-sm text-slate-400 mb-6">
                  Our AI is learning from your content. This usually takes 2-3 minutes.
                </p>

                {isProcessing ? (
                  <div className="space-y-4">
                    {[
                      { label: 'Crawling website pages...', status: 'complete' },
                      { label: 'Extracting FAQ content...', status: 'complete' },
                      { label: 'Building knowledge graph...', status: 'processing' },
                      { label: 'Training AI agent...', status: 'pending' },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.4 }}
                        className="flex items-center gap-3"
                      >
                        {item.status === 'complete' && (
                          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check className="w-3 h-3 text-green-400" />
                          </div>
                        )}
                        {item.status === 'processing' && (
                          <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                        )}
                        {item.status === 'pending' && (
                          <div className="w-5 h-5 rounded-full bg-slate-800" />
                        )}
                        <span className={`text-sm ${
                          item.status === 'complete' ? 'text-green-400' :
                          item.status === 'processing' ? 'text-white' : 'text-slate-500'
                        }`}>{item.label}</span>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Pages Indexed', value: '47', icon: Globe },
                        { label: 'FAQ Items', value: '23', icon: MessageSquare },
                        { label: 'Knowledge Score', value: '94%', icon: Brain },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-slate-800/50 rounded-xl p-4 text-center">
                          <stat.icon className="w-5 h-5 text-primary-light mx-auto mb-2" />
                          <div className="text-xl font-bold text-white">{stat.value}</div>
                          <div className="text-[10px] text-slate-500 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-400 font-medium">Knowledge base ready!</span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Your AI agent has learned from 47 pages and can answer 94% of common questions.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Configure Agent */}
            {currentStep === 3 && (
              <div className="glass rounded-2xl p-8">
                <h2 className="text-xl font-bold text-white mb-2">Configure your agent</h2>
                <p className="text-sm text-slate-400 mb-6">
                  Set personality, confidence thresholds, and channels.
                </p>

                <div className="space-y-6">
                  {/* Personality */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 mb-3 block">Agent Personality</label>
                    <div className="grid grid-cols-4 gap-2">
                      {['Friendly', 'Professional', 'Witty', 'Empathetic'].map((tone) => (
                        <button
                          key={tone}
                          onClick={() => setPersonality({ ...personality, tone: tone.toLowerCase() })}
                          className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                            personality.tone === tone.toLowerCase()
                              ? 'bg-primary/20 border border-primary/50 text-white'
                              : 'bg-slate-800 border border-slate-700 text-slate-400 hover:border-slate-600'
                          }`}
                        >
                          {tone}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Confidence Threshold */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-medium text-slate-300">Confidence Threshold</label>
                      <span className="text-xs text-primary-light font-medium">{personality.confidence}%</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="99"
                      value={personality.confidence}
                      onChange={(e) => setPersonality({ ...personality, confidence: Number(e.target.value) })}
                      className="w-full accent-primary"
                    />
                    <p className="text-[10px] text-slate-500 mt-1">
                      Below this confidence, conversations route to humans.
                    </p>
                  </div>

                  {/* Channels */}
                  <div>
                    <label className="text-xs font-medium text-slate-300 mb-3 block">Channels</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { key: 'chat', label: 'Chat Widget', icon: MessageSquare },
                        { key: 'email', label: 'Email', icon: Mail },
                        { key: 'voice', label: 'Voice Calls', icon: Phone },
                        { key: 'sms', label: 'SMS', icon: MessageSquare },
                      ].map((channel) => (
                        <label
                          key={channel.key}
                          className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                            personality.channels[channel.key as keyof typeof personality.channels]
                              ? 'border-primary/50 bg-primary/10'
                              : 'border-slate-700 hover:border-slate-600'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={personality.channels[channel.key as keyof typeof personality.channels]}
                            onChange={(e) => setPersonality({
                              ...personality,
                              channels: { ...personality.channels, [channel.key]: e.target.checked }
                            })}
                            className="w-3.5 h-3.5 rounded border-slate-600 bg-slate-800 text-primary focus:ring-primary/50"
                          />
                          <channel.icon className="w-4 h-4 text-slate-400" />
                          <span className="text-xs text-slate-300">{channel.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Deploy */}
            {currentStep === 4 && (
              <div className="glass rounded-2xl p-8 text-center">
                {isProcessing ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-pulse-glow">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">Deploying your agent...</h2>
                    <p className="text-sm text-slate-400 mb-6">
                      Setting up channels and going live across all platforms.
                    </p>
                    <div className="max-w-xs mx-auto space-y-2">
                      {['Activating chat widget', 'Connecting email', 'Configuring AI model'].map((item, i) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.8 }}
                          className="flex items-center gap-2 text-xs text-slate-400"
                        >
                          <div className="w-3 h-3 border border-primary/30 border-t-primary rounded-full animate-spin" />
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-8 h-8 text-green-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">Ready to deploy!</h2>
                    <p className="text-sm text-slate-400 mb-6">
                      Your AI agent is configured and ready to resolve tickets.
                    </p>
                    <div className="glass-light rounded-xl p-4 mb-6 text-left">
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <span className="text-slate-500">Personality:</span>
                          <span className="text-white ml-2 capitalize">{personality.tone}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Confidence:</span>
                          <span className="text-white ml-2">{personality.confidence}%</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Channels:</span>
                          <span className="text-white ml-2">
                            {Object.entries(personality.channels).filter(([, v]) => v).length} active
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500">Knowledge:</span>
                          <span className="text-white ml-2">47 pages</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Navigation */}
      <div className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={isProcessing}
            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-accent rounded-lg font-medium text-sm text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            {currentStep === 4 ? (
              <>
                <Sparkles className="w-4 h-4" />
                Deploy Agent
              </>
            ) : (
              <>
                Continue
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
