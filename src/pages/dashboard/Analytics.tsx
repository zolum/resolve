import { motion } from 'framer-motion';
import {
  TrendingUp, TrendingDown, Users, MessageSquare, Clock,
  DollarSign, BarChart3, PieChart, Activity, ArrowUpRight
} from 'lucide-react';

const resolutionData = [
  { day: 'Mon', resolved: 142, total: 185 },
  { day: 'Tue', resolved: 156, total: 198 },
  { day: 'Wed', resolved: 178, total: 220 },
  { day: 'Thu', resolved: 165, total: 210 },
  { day: 'Fri', resolved: 189, total: 235 },
  { day: 'Sat', resolved: 98, total: 125 },
  { day: 'Sun', resolved: 76, total: 100 },
];

const channelData = [
  { name: 'Chat', value: 62, color: 'bg-blue-500' },
  { name: 'Email', value: 24, color: 'bg-purple-500' },
  { name: 'Voice', value: 9, color: 'bg-green-500' },
  { name: 'SMS', value: 5, color: 'bg-orange-500' },
];

const topTopics = [
  { topic: 'Order Status', count: 342, pct: 28 },
  { topic: 'Returns & Refunds', count: 256, pct: 21 },
  { topic: 'Shipping Info', count: 198, pct: 16 },
  { topic: 'Product Questions', count: 167, pct: 14 },
  { topic: 'Account Issues', count: 134, pct: 11 },
  { topic: 'Other', count: 123, pct: 10 },
];

export default function Analytics() {
  const maxResolved = Math.max(...resolutionData.map(d => d.resolved));

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Analytics</h1>
          <p className="text-sm text-slate-400 mt-1">Monitor your AI agent's performance</p>
        </div>
        <div className="flex items-center gap-2">
          {['7D', '30D', '90D', 'All'].map((period) => (
            <button
              key={period}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                period === '7D'
                  ? 'bg-primary/20 text-primary-light border border-primary/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Resolution Rate', value: '78.3%', change: '+4.2%', up: true, icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
          { label: 'Tickets Resolved', value: '1,004', change: '+12%', up: true, icon: MessageSquare, color: 'from-blue-500 to-cyan-500' },
          { label: 'Avg Response Time', value: '1.2s', change: '-0.3s', up: true, icon: Clock, color: 'from-purple-500 to-violet-500' },
          { label: 'Cost Savings', value: '$2,140', change: '+$340', up: true, icon: DollarSign, color: 'from-yellow-500 to-orange-500' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-light rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center opacity-80`}>
                <stat.icon className="w-4 h-4 text-white" />
              </div>
              <span className={`text-[10px] font-medium flex items-center gap-0.5 ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                {stat.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-[10px] text-slate-500 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Resolution Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 glass-light rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-sm font-semibold text-white">Resolution Trend</h3>
              <p className="text-[10px] text-slate-500 mt-0.5">Tickets resolved vs total this week</p>
            </div>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-primary" /> Resolved</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-slate-600" /> Total</span>
            </div>
          </div>
          
          {/* Bar Chart */}
          <div className="flex items-end gap-3 h-48">
            {resolutionData.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col items-center gap-0.5 flex-1 justify-end">
                  <div
                    className="w-full bg-slate-700/50 rounded-t-sm relative"
                    style={{ height: `${(d.total / 250) * 100}%` }}
                  >
                    <div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-accent rounded-t-sm"
                      style={{ height: `${(d.resolved / d.total) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-[10px] text-slate-500">{d.day}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Channel Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-light rounded-xl p-5"
        >
          <h3 className="text-sm font-semibold text-white mb-1">Channel Distribution</h3>
          <p className="text-[10px] text-slate-500 mb-6">Where conversations happen</p>

          <div className="space-y-3">
            {channelData.map((channel) => (
              <div key={channel.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-300">{channel.name}</span>
                  <span className="text-xs font-medium text-white">{channel.value}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${channel.value}%` }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className={`h-full ${channel.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-700">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Total conversations</span>
              <span className="text-white font-medium">1,280</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Top Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-light rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">Top Topics</h3>
            <button className="text-[10px] text-primary-light hover:underline flex items-center gap-1">
              View all <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-3">
            {topTopics.map((topic, i) => (
              <div key={topic.topic} className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-4">{i + 1}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-300">{topic.topic}</span>
                    <span className="text-[10px] text-slate-500">{topic.count}</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${topic.pct}%` }}
                      transition={{ duration: 0.6, delay: 0.4 + i * 0.05 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-light rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-white">AI Performance</h3>
            <Activity className="w-4 h-4 text-green-400" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Accuracy Rate</span>
              <span className="text-sm font-bold text-green-400">96.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Hallucination Rate</span>
              <span className="text-sm font-bold text-green-400">0.3%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Escalation Rate</span>
              <span className="text-sm font-bold text-yellow-400">21.7%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Customer Satisfaction</span>
              <span className="text-sm font-bold text-green-400">4.8/5.0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Avg Tokens/Response</span>
              <span className="text-sm font-bold text-slate-300">284</span>
            </div>

            <div className="pt-3 border-t border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-green-400">All systems operational</span>
              </div>
              <p className="text-[10px] text-slate-500">
                Last accuracy audit: 2 hours ago • Next scheduled: tomorrow at 3 AM
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
