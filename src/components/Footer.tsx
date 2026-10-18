import { Bot } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Integrations', 'API Docs', 'Changelog', 'Status'],
  Solutions: ['E-commerce', 'SaaS', 'Local Services', 'Real Estate', 'Agencies'],
  Resources: ['Blog', 'Help Center', 'Community', 'Scorecard Tool', 'Case Studies', 'Webinars'],
  Company: ['About', 'Careers', 'Press', 'Contact', 'Partners', 'Security'],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Resolve<span className="gradient-text">OS</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-4 max-w-xs">
              AI support agent for SMBs. Deploy in 10 minutes. Resolve 70%+ of inquiries. Flat $99/month.
            </p>
            <div className="flex items-center gap-3">
              {['twitter', 'linkedin', 'github', 'youtube'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                  <span className="text-xs">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-500">
            © 2026 ResolveOS. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
