import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search, Filter, MoreHorizontal, Send, Paperclip, Smile,
  Bot, User, Clock, Tag, ChevronDown, Star, Archive, Trash2
} from 'lucide-react';

const conversations = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    avatar: '🌸',
    lastMessage: 'Where is my order? It was supposed to arrive 3 days ago.',
    time: '2m ago',
    unread: true,
    status: 'ai-handling',
    channel: 'chat',
    sentiment: 'frustrated',
  },
  {
    id: 2,
    name: 'Marcus Rivera',
    email: 'marcus@company.com',
    avatar: '🦷',
    lastMessage: 'Thanks! That resolved my issue perfectly.',
    time: '15m ago',
    unread: false,
    status: 'resolved',
    channel: 'email',
    sentiment: 'happy',
  },
  {
    id: 3,
    name: 'Priya Patel',
    email: 'priya@startup.io',
    avatar: '⚡',
    lastMessage: 'I need to cancel my subscription. How do I do that?',
    time: '32m ago',
    unread: true,
    status: 'needs-human',
    channel: 'chat',
    sentiment: 'neutral',
  },
  {
    id: 4,
    name: 'Alex Thompson',
    email: 'alex@business.co',
    avatar: '🎯',
    lastMessage: 'Can I get a refund for the damaged item?',
    time: '1h ago',
    unread: true,
    status: 'ai-handling',
    channel: 'email',
    sentiment: 'frustrated',
  },
  {
    id: 5,
    name: 'Emma Wilson',
    email: 'emma@shop.com',
    avatar: '🛍️',
    lastMessage: 'What sizes do you have in stock?',
    time: '2h ago',
    unread: false,
    status: 'resolved',
    channel: 'chat',
    sentiment: 'happy',
  },
  {
    id: 6,
    name: 'David Kim',
    email: 'david@tech.co',
    avatar: '💻',
    lastMessage: 'The API integration is not working properly.',
    time: '3h ago',
    unread: false,
    status: 'needs-human',
    channel: 'chat',
    sentiment: 'frustrated',
  },
];

const activeMessages = [
  { from: 'customer', text: 'Hi, I need help with my order #7842. It was supposed to arrive 3 days ago and I still haven\'t received it.', time: '10:23 AM' },
  { from: 'ai', text: 'I\'m sorry to hear about the delay! Let me look up your order #7842 right away.', time: '10:23 AM', confidence: 96 },
  { from: 'ai', text: 'I found your order. It\'s currently at the local distribution center and is scheduled for delivery tomorrow by 5 PM. I apologize for the inconvenience.', time: '10:24 AM', confidence: 98 },
  { from: 'customer', text: 'Can I get some compensation for the delay?', time: '10:25 AM' },
  { from: 'ai', text: 'Absolutely! I\'ve applied a 15% courtesy credit to your account for the inconvenience. You\'ll see it reflected on your next purchase. Is there anything else I can help with?', time: '10:25 AM', confidence: 92 },
];

export default function Inbox() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [messages, setMessages] = useState(activeMessages);
  const [newMessage, setNewMessage] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredConversations = conversations.filter(c => {
    if (filter === 'all') return true;
    if (filter === 'unread') return c.unread;
    if (filter === 'needs-human') return c.status === 'needs-human';
    return true;
  });

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { from: 'human', text: newMessage, time: 'Now' }]);
    setNewMessage('');
  };

  return (
    <div className="flex h-[calc(100vh-7.5rem)] -m-6">
      {/* Conversation List */}
      <div className="w-80 border-r border-slate-800 flex flex-col bg-slate-900/30">
        {/* Filters */}
        <div className="p-3 border-b border-slate-800">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-9 pr-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary/50"
            />
          </div>
          <div className="flex gap-1">
            {[
              { key: 'all', label: 'All' },
              { key: 'unread', label: 'Unread' },
              { key: 'needs-human', label: 'Needs Human' },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-2.5 py-1 rounded-md text-[10px] font-medium transition-all ${
                  filter === f.key
                    ? 'bg-primary/20 text-primary-light border border-primary/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {filteredConversations.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelectedConversation(conv)}
              className={`w-full text-left p-3 border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors ${
                selectedConversation.id === conv.id ? 'bg-slate-800/50 border-l-2 border-l-primary' : ''
              }`}
            >
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm flex-shrink-0">
                  {conv.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs font-medium text-white truncate">{conv.name}</span>
                    <span className="text-[10px] text-slate-500 flex-shrink-0">{conv.time}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 truncate">{conv.lastMessage}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                      conv.status === 'ai-handling' ? 'bg-green-500/20 text-green-400' :
                      conv.status === 'resolved' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {conv.status === 'ai-handling' ? '🤖 AI' :
                       conv.status === 'resolved' ? '✓ Resolved' :
                       '👤 Needs Human'}
                    </span>
                    <span className="text-[9px] text-slate-600 capitalize">{conv.channel}</span>
                  </div>
                </div>
                {conv.unread && (
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-14 border-b border-slate-800 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-sm">
              {selectedConversation.avatar}
            </div>
            <div>
              <div className="text-sm font-medium text-white">{selectedConversation.name}</div>
              <div className="text-[10px] text-slate-500">{selectedConversation.email} • via {selectedConversation.channel}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[10px] px-2 py-1 rounded-full ${
              selectedConversation.sentiment === 'frustrated' ? 'bg-red-500/20 text-red-400' :
              selectedConversation.sentiment === 'happy' ? 'bg-green-500/20 text-green-400' :
              'bg-slate-700 text-slate-400'
            }`}>
              {selectedConversation.sentiment === 'frustrated' ? '😤 Frustrated' :
               selectedConversation.sentiment === 'happy' ? '😊 Happy' : '😐 Neutral'}
            </span>
            <button className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors">
              <Star className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors">
              <Archive className="w-4 h-4 text-slate-400" />
            </button>
            <button className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors">
              <MoreHorizontal className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex ${msg.from === 'customer' ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`max-w-md ${msg.from === 'customer' ? '' : 'text-right'}`}>
                <div className={`inline-flex items-start gap-2 px-3 py-2 rounded-xl text-sm ${
                  msg.from === 'customer'
                    ? 'bg-slate-800 text-slate-200'
                    : msg.from === 'ai'
                    ? 'bg-primary/20 border border-primary/30 text-slate-200'
                    : 'bg-green-500/20 border border-green-500/30 text-slate-200'
                }`}>
                  {msg.from === 'ai' && (
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                  )}
                  {msg.from === 'human' && (
                    <div className="w-5 h-5 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-3 h-3 text-green-400" />
                    </div>
                  )}
                  <div>
                    <p>{msg.text}</p>
                    {msg.confidence && (
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[9px] px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded-full">
                          {msg.confidence}% confidence
                        </span>
                        <span className="text-[9px] text-slate-500">📎 Source: Order API</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`text-[10px] text-slate-600 mt-1 ${msg.from === 'customer' ? '' : 'text-right'}`}>
                  {msg.from === 'ai' && '🤖 AI Agent • '}{msg.from === 'human' && '👤 You • '}{msg.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-slate-800 p-4">
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <Paperclip className="w-4 h-4 text-slate-400" />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message or let AI handle it..."
              className="flex-1 px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50"
            />
            <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <Smile className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={handleSend}
              className="p-2.5 bg-gradient-to-r from-primary to-accent rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <span className="text-[10px] text-slate-500 flex items-center gap-1">
              <Bot className="w-3 h-3" /> AI is monitoring this conversation
            </span>
            <button className="text-[10px] text-primary-light hover:underline flex items-center gap-1">
              <Tag className="w-3 h-3" /> Add tag
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel - Context */}
      <div className="w-64 border-l border-slate-800 bg-slate-900/30 p-4 overflow-y-auto hidden xl:block">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Customer Context</h3>
        
        <div className="space-y-4">
          <div className="glass-light rounded-xl p-3">
            <div className="text-xs font-medium text-white mb-2">Order History</div>
            <div className="space-y-1.5">
              {['#7842 - $89.99 (In Transit)', '#6521 - $45.00 (Delivered)', '#5102 - $120.00 (Delivered)'].map((order) => (
                <div key={order} className="text-[10px] text-slate-400 flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-slate-600" />
                  {order}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-light rounded-xl p-3">
            <div className="text-xs font-medium text-white mb-2">AI Insights</div>
            <div className="space-y-2">
              <div className="text-[10px] text-slate-400">
                <span className="text-yellow-400">⚠️</span> Customer has been waiting 3+ days
              </div>
              <div className="text-[10px] text-slate-400">
                <span className="text-green-400">✓</span> 15% credit already applied
              </div>
              <div className="text-[10px] text-slate-400">
                <span className="text-blue-400">📊</span> LTV: $1,240 • High value customer
              </div>
            </div>
          </div>

          <div className="glass-light rounded-xl p-3">
            <div className="text-xs font-medium text-white mb-2">Quick Actions</div>
            <div className="space-y-1.5">
              {['Process Refund', 'Escalate to Manager', 'Send Follow-up', 'View Full Profile'].map((action) => (
                <button key={action} className="w-full text-left text-[10px] text-slate-400 hover:text-white py-1.5 px-2 rounded hover:bg-slate-800/50 transition-colors">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
