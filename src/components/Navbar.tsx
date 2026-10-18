import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Bot, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Resolve<span className="gradient-text">OS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-slate-300 hover:text-white transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#comparison" className="text-sm text-slate-300 hover:text-white transition-colors">Compare</a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors">
                Resources <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/signin" className="text-sm text-slate-300 hover:text-white transition-colors px-3 py-2">
              Sign In
            </Link>
            <Link to="/signup" className="text-sm font-medium text-white bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Deploy Free →
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-slate-800"
          >
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-sm text-slate-300 hover:text-white py-2">Features</a>
              <a href="#how-it-works" className="block text-sm text-slate-300 hover:text-white py-2">How It Works</a>
              <a href="#pricing" className="block text-sm text-slate-300 hover:text-white py-2">Pricing</a>
              <a href="#comparison" className="block text-sm text-slate-300 hover:text-white py-2">Compare</a>
              <Link to="/signin" className="block text-sm text-slate-300 hover:text-white py-2">Sign In</Link>
              <Link to="/signup" className="block w-full text-center text-sm font-medium text-white bg-gradient-to-r from-primary to-accent px-4 py-2.5 rounded-lg mt-3">
                Deploy Free →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
