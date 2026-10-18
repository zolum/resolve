import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Bot, ArrowRight, Eye, EyeOff, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    website: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(form);
    navigate('/deploy');
  };

  const benefits = [
    'Deploy AI agent in 10 minutes',
    '14-day free trial, no credit card',
    'Resolve 70%+ of tickets automatically',
    'Cancel anytime',
  ];

  return (
    <div className="min-h-screen bg-[#020617] flex">
      {/* Left: Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Resolve<span className="gradient-text">OS</span>
            </span>
          </Link>

          <h1 className="text-2xl font-bold text-white mb-2">Create your account</h1>
          <p className="text-sm text-slate-400 mb-8">
            Deploy your AI support agent in 10 minutes. Start free.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-slate-300 mb-1.5 block">Full Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Jane Smith"
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 mb-1.5 block">Work Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="jane@company.com"
                className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Min 8 characters"
                  className="w-full px-4 py-2.5 pr-10 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-medium text-slate-300 mb-1.5 block">Company</label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Acme Inc"
                  className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300 mb-1.5 block">Website URL</label>
                <input
                  type="text"
                  required
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  placeholder="acme.com"
                  className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-medium text-sm text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-6"
            >
              Create Account & Deploy Agent
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-xs text-slate-500 text-center mt-6">
            Already have an account?{' '}
            <Link to="/signin" className="text-primary-light hover:underline">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right: Benefits */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-12 bg-gradient-to-br from-primary/10 via-transparent to-accent/10">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start resolving tickets in <span className="gradient-text">10 minutes</span>
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-green-400" />
                </div>
                <span className="text-sm text-slate-300">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 glass-light rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex -space-x-2">
                {['🌸', '🦷', '⚡', '🎯'].map((emoji, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm border-2 border-slate-900">
                    {emoji}
                  </div>
                ))}
              </div>
              <span className="text-xs text-slate-400">2,400+ SMBs deployed</span>
            </div>
            <p className="text-xs text-slate-400 italic">
              "We went from 4 agents to 1 + ResolveOS. Resolution rate jumped from 45% to 82%."
            </p>
            <p className="text-xs text-slate-500 mt-1">— Sarah Chen, BloomBox</p>
          </div>
        </div>
      </div>
    </div>
  );
}
