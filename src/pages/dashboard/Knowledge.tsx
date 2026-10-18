import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Plus, FileText, Globe, BookOpen, AlertTriangle,
  Check, Edit3, Trash2, ChevronRight, Tag, Clock, Brain
} from 'lucide-react';

const knowledgeItems = [
  {
    id: 1,
    title: 'Return & Refund Policy',
    type: 'faq',
    source: 'Manual',
    status: 'active',
    questions: 12,
    lastUpdated: '2 hours ago',
    confidence: 96,
  },
  {
    id: 2,
    title: 'Shipping Information',
    type: 'faq',
    source: 'Website',
    status: 'active',
    questions: 8,
    lastUpdated: '1 day ago',
    confidence: 94,
  },
  {
    id: 3,
    title: 'Product Size Guide',
    type: 'doc',
    source: 'Upload',
    status: 'active',
    questions: 15,
    lastUpdated: '3 days ago',
    confidence: 91,
  },
  {
    id: 4,
    title: 'Order Tracking FAQ',
    type: 'faq',
    source: 'Website',
    status: 'active',
    questions: 6,
    lastUpdated: '5 hours ago',
    confidence: 97,
  },
  {
    id: 5,
    title: 'Warranty & Repairs',
    type: 'doc',
    source: 'Upload',
    status: 'active',
    questions: 9,
    lastUpdated: '1 week ago',
    confidence: 88,
  },
  {
    id: 6,
    title: 'Payment Methods',
    type: 'faq',
    source: 'Website',
    status: 'active',
    questions: 4,
    lastUpdated: '2 days ago',
    confidence: 99,
  },
];

const knowledgeGaps = [
  { question: 'Do you offer international shipping to Brazil?', frequency: 23, priority: 'high' },
  { question: 'Can I exchange an item for a different size?', frequency: 18, priority: 'high' },
  { question: 'What is your Black Friday return policy?', frequency: 12, priority: 'medium' },
  { question: 'Do you have a loyalty program?', frequency: 9, priority: 'medium' },
  { question: 'Can I modify my order after placing it?', frequency: 7, priority: 'low' },
];

export default function Knowledge() {
  const [tab, setTab] = useState<'knowledge' | 'gaps' | 'sources'>('knowledge');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Knowledge Base</h1>
          <p className="text-sm text-slate-400 mt-1">Manage what your AI agent knows</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          Add Knowledge
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Items', value: '47', icon: FileText, color: 'text-blue-400' },
          { label: 'Avg Confidence', value: '94%', icon: Brain, color: 'text-green-400' },
          { label: 'Knowledge Gaps', value: '5', icon: AlertTriangle, color: 'text-orange-400' },
          { label: 'Questions Covered', value: '54', icon: BookOpen, color: 'text-purple-400' },
        ].map((stat) => (
          <div key={stat.label} className="glass-light rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
              <span className="text-xs text-slate-400">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-slate-800/50 rounded-lg p-1 w-fit">
        {[
          { key: 'knowledge', label: 'Knowledge Items' },
          { key: 'gaps', label: 'Knowledge Gaps', badge: '5' },
          { key: 'sources', label: 'Sources' },
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
            {t.label}
            {t.badge && (
              <span className="px-1.5 py-0.5 bg-orange-500/20 text-orange-400 text-[9px] rounded-full">{t.badge}</span>
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === 'knowledge' && (
        <div className="space-y-2">
          {/* Search */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search knowledge items..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50"
            />
          </div>

          {/* Items */}
          {knowledgeItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-light rounded-xl p-4 hover:bg-slate-800/50 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  item.type === 'faq' ? 'bg-blue-500/10' : 'bg-purple-500/10'
                }`}>
                  {item.type === 'faq' ? (
                    <BookOpen className="w-5 h-5 text-blue-400" />
                  ) : (
                    <FileText className="w-5 h-5 text-purple-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-medium text-white">{item.title}</h3>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                      item.source === 'Manual' ? 'bg-green-500/20 text-green-400' :
                      item.source === 'Website' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {item.source}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-slate-500">
                    <span className="flex items-center gap-1"><Tag className="w-3 h-3" />{item.questions} questions</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{item.lastUpdated}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className={`text-sm font-bold ${
                      item.confidence >= 95 ? 'text-green-400' :
                      item.confidence >= 90 ? 'text-yellow-400' : 'text-orange-400'
                    }`}>
                      {item.confidence}%
                    </div>
                    <div className="text-[9px] text-slate-500">confidence</div>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 hover:bg-slate-700 rounded-lg">
                      <Edit3 className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button className="p-1.5 hover:bg-slate-700 rounded-lg">
                      <Trash2 className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {tab === 'gaps' && (
        <div className="space-y-3">
          <div className="glass-light rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-white">Knowledge Gaps Detected</span>
            </div>
            <p className="text-xs text-slate-400">
              These questions were asked by customers but your AI couldn't answer confidently. 
              Add answers to improve your resolution rate.
            </p>
          </div>

          {knowledgeGaps.map((gap, index) => (
            <motion.div
              key={gap.question}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-light rounded-xl p-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${
                      gap.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                      gap.priority === 'medium' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-slate-700 text-slate-400'
                    }`}>
                      {gap.priority.toUpperCase()} PRIORITY
                    </span>
                    <span className="text-[10px] text-slate-500">Asked {gap.frequency} times</span>
                  </div>
                  <p className="text-sm text-white mb-3">"{gap.question}"</p>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 bg-primary/20 border border-primary/30 rounded-lg text-xs text-primary-light hover:bg-primary/30 transition-colors flex items-center gap-1.5">
                      <Plus className="w-3 h-3" />
                      Add Answer
                    </button>
                    <button className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-xs text-slate-400 hover:text-white transition-colors">
                      Auto-generate with AI
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {tab === 'sources' && (
        <div className="space-y-3">
          {[
            { name: 'Website Crawl', url: 'bloombox.com', pages: 47, status: 'synced', lastSync: '2 hours ago', icon: Globe },
            { name: 'Help Documentation', url: 'docs/bloombox-help.pdf', pages: 12, status: 'synced', lastSync: '1 day ago', icon: FileText },
            { name: 'Past Tickets Import', url: '2,400 tickets', pages: 2400, status: 'synced', lastSync: '3 days ago', icon: BookOpen },
          ].map((source) => (
            <div key={source.name} className="glass-light rounded-xl p-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <source.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{source.name}</div>
                  <div className="text-[10px] text-slate-500">{source.url}</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-400">Synced</span>
                  </div>
                  <div className="text-[10px] text-slate-500">{source.pages} pages • {source.lastSync}</div>
                </div>
              </div>
            </div>
          ))}

          <button className="w-full glass-light rounded-xl p-4 border-2 border-dashed border-slate-700 hover:border-primary/50 transition-colors flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-white">
            <Plus className="w-4 h-4" />
            Add New Source
          </button>
        </div>
      )}
    </div>
  );
}
