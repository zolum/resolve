import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import {
  Bot, Sliders, Shield, Globe, Palette, Bell,
  Save, Check, AlertTriangle
} from 'lucide-react';

export default function Settings() {
  const { user } = useAuth();
  const [tab, setTab] = useState<'personality' | 'routing' | 'safety' | 'account'>('personality');
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    personality: 'friendly',
    confidence: 85,
    maxTokens: 500,
    temperature: 0.7,
    escalateOnSentiment: true,
    sentimentThreshold: 'frustrated',
    autoTranslate: true,
    piiRedaction: true,
    sourceCitations: true,
    responseGuardrails: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const personalities = [
    { id: 'friendly', emoji: '😊', label: 'Friendly', desc: 'Warm, approachable, uses casual language' },
    { id: 'professional', emoji: '💼', label: 'Professional', desc: 'Formal, precise, business-appropriate' },
    { id: 'witty', emoji: '😄', label: 'Witty', desc: 'Humorous, playful, memorable interactions' },
    { id: 'empathetic', emoji: '💝', label: 'Empathetic', desc: 'Understanding, patient, emotionally aware' },
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Agent Settings</h1>
          <p className="text-sm text-slate-400 mt-1">Configure how your AI agent behaves</p>
        </div>
        <button
          onClick={handleSave}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            saved
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-gradient-to-r from-primary to-accent text-white hover:opacity-90'
          }`}
        >
          {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-slate-800/50 rounded-lg p-1 w-fit">
        {[
          { key: 'personality', label: 'Personality', icon: Palette },
          { key: 'routing', label: 'Routing', icon: Sliders },
          { key: 'safety', label: 'Safety', icon: Shield },
          { key: 'account', label: 'Account', icon: Globe },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key as typeof tab)}
            className={`px-4 py-2 rounded-md text-xs font-medium transition-all flex items-center gap-2 ${
              tab === t.key
                ? 'bg-primary/20 text-white border border-primary/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <t.icon className="w-3.5 h-3.5" />
            {t.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Personality Tab */}
          {tab === 'personality' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="glass-light rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Agent Personality</h3>
                <div className="grid grid-cols-2 gap-3">
                  {personalities.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSettings({ ...settings, personality: p.id })}
                      className={`p-4 rounded-xl text-left transition-all ${
                        settings.personality === p.id
                          ? 'bg-primary/20 border-2 border-primary/50'
                          : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="text-2xl mb-2">{p.emoji}</div>
                      <div className="text-sm font-medium text-white">{p.label}</div>
                      <div className="text-[10px] text-slate-400 mt-1">{p.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="glass-light rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Response Parameters</h3>
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-medium text-slate-300">Temperature (Creativity)</label>
                      <span className="text-xs text-primary-light">{settings.temperature}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={settings.temperature}
                      onChange={(e) => setSettings({ ...settings, temperature: Number(e.target.value) })}
                      className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-[9px] text-slate-600 mt-1">
                      <span>Precise</span>
                      <span>Creative</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-medium text-slate-300">Max Response Length</label>
                      <span className="text-xs text-primary-light">{settings.maxTokens} tokens</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="1000"
                      step="50"
                      value={settings.maxTokens}
                      onChange={(e) => setSettings({ ...settings, maxTokens: Number(e.target.value) })}
                      className="w-full accent-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="glass-light rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Custom Instructions</h3>
                <textarea
                  defaultValue="You are a helpful support agent for BloomBox. Always be polite and try to resolve issues quickly. If unsure, escalate to a human."
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 resize-none h-28"
                />
                <p className="text-[10px] text-slate-500 mt-2">
                  These instructions guide the AI's behavior. Be specific about your brand voice and policies.
                </p>
              </div>
            </motion.div>
          )}

          {/* Routing Tab */}
          {tab === 'routing' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="glass-light rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Confidence Threshold</h3>
                <div className="flex items-center gap-4 mb-4">
                  <input
                    type="range"
                    min="50"
                    max="99"
                    value={settings.confidence}
                    onChange={(e) => setSettings({ ...settings, confidence: Number(e.target.value) })}
                    className="flex-1 accent-primary"
                  />
                  <span className="text-lg font-bold text-primary-light w-12 text-right">{settings.confidence}%</span>
                </div>
                <p className="text-xs text-slate-400">
                  Conversations below this confidence are routed to humans. Higher = more escalations but safer.
                </p>
              </div>

              <div className="glass-light rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Sentiment Routing</h3>
                <div className="space-y-3">
                  <label className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg cursor-pointer">
                    <div>
                      <div className="text-xs font-medium text-white">Auto-escalate on negative sentiment</div>
                      <div className="text-[10px] text-slate-500">Route frustrated/angry customers to humans immediately</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.escalateOnSentiment}
                      onChange={(e) => setSettings({ ...settings, escalateOnSentiment: e.target.checked })}
                      className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-primary"
                    />
                  </label>
                </div>
              </div>

              <div className="glass-light rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Language Settings</h3>
                <label className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg cursor-pointer">
                  <div>
                    <div className="text-xs font-medium text-white">Auto-detect & respond in customer's language</div>
                    <div className="text-[10px] text-slate-500">AI responds natively in 50+ languages</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.autoTranslate}
                    onChange={(e) => setSettings({ ...settings, autoTranslate: e.target.checked })}
                    className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-primary"
                  />
                </label>
              </div>
            </motion.div>
          )}

          {/* Safety Tab */}
          {tab === 'safety' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="glass-light rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Safety & Compliance</h3>
                <div className="space-y-3">
                  {[
                    { key: 'piiRedaction', label: 'Auto-redact PII', desc: 'Automatically remove personal info from AI responses' },
                    { key: 'sourceCitations', label: 'Source citations', desc: 'Show knowledge source on every AI response' },
                    { key: 'responseGuardrails', label: 'Response guardrails', desc: 'Block harmful, off-topic, or hallucinated responses' },
                  ].map((setting) => (
                    <label key={setting.key} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg cursor-pointer">
                      <div>
                        <div className="text-xs font-medium text-white">{setting.label}</div>
                        <div className="text-[10px] text-slate-500">{setting.desc}</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={settings[setting.key as keyof typeof settings] as boolean}
                        onChange={(e) => setSettings({ ...settings, [setting.key]: e.target.checked })}
                        className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-primary"
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="glass-light rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4 h-4 text-green-400" />
                  <h3 className="text-sm font-semibold text-white">Compliance Status</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['SOC 2 Type II', 'GDPR', 'CCPA', 'HIPAA Ready'].map((badge) => (
                    <div key={badge} className="flex items-center gap-2 p-2 bg-green-500/10 rounded-lg">
                      <Check className="w-3 h-3 text-green-400" />
                      <span className="text-[10px] text-green-400">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Account Tab */}
          {tab === 'account' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
              <div className="glass-light rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Account Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-slate-300 mb-1.5 block">Company Name</label>
                    <input
                      type="text"
                      defaultValue={user?.company}
                      className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 mb-1.5 block">Website</label>
                    <input
                      type="text"
                      defaultValue={user?.website}
                      className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-primary/50"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-300 mb-1.5 block">Email</label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-primary/50"
                    />
                  </div>
                </div>
              </div>

              <div className="glass-light rounded-xl p-6">
                <h3 className="text-sm font-semibold text-white mb-4">Plan & Billing</h3>
                <div className="flex items-center justify-between p-4 bg-primary/10 border border-primary/30 rounded-xl mb-4">
                  <div>
                    <div className="text-sm font-medium text-white">Starter Plan</div>
                    <div className="text-[10px] text-slate-400">$99/month • 1,000 resolutions included</div>
                  </div>
                  <button className="px-3 py-1.5 bg-gradient-to-r from-primary to-accent rounded-lg text-xs font-medium text-white">
                    Upgrade
                  </button>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Resolutions used</span>
                    <span className="text-white">647 / 1,000</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Billing cycle</span>
                    <span className="text-white">Renews Jan 15, 2026</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right sidebar - Preview */}
        <div className="space-y-4">
          <div className="glass-light rounded-xl p-5">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Live Preview</h4>
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-800">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Bot className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-medium text-white">ResolveOS Agent</span>
                <span className="text-[9px] text-green-400 ml-auto">● Online</span>
              </div>
              <div className="space-y-2">
                <div className="bg-slate-800 rounded-lg rounded-tl-none px-3 py-2 text-[10px] text-slate-300 max-w-[80%]">
                  Hi! How can I help you today?
                </div>
              </div>
            </div>
            <p className="text-[10px] text-slate-500 mt-3 text-center">
              Personality: <span className="text-white capitalize">{settings.personality}</span>
            </p>
          </div>

          <div className="glass-light rounded-xl p-5">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Quick Tips</h4>
            <div className="space-y-3">
              {[
                'Lower confidence = more autonomous but riskier',
                'Use empathetic tone for service businesses',
                'Enable PII redaction for compliance',
                'Test changes in sandbox before going live',
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span className="text-[10px] text-slate-400">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
