import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare, Mail, Phone, Smartphone, Globe,
  Check, Settings, Code, Copy, ExternalLink, ToggleLeft, ToggleRight
} from 'lucide-react';

const channels = [
  {
    id: 'chat',
    name: 'Chat Widget',
    description: 'Embeddable chat widget for your website',
    icon: MessageSquare,
    color: 'from-blue-500 to-cyan-500',
    active: true,
    stats: { conversations: 794, resolution: '82%' },
    config: {
      position: 'bottom-right',
      color: '#6366f1',
      welcomeMessage: 'Hi! How can I help you today?',
    },
  },
  {
    id: 'email',
    name: 'Email',
    description: 'AI handles incoming support emails',
    icon: Mail,
    color: 'from-purple-500 to-violet-500',
    active: true,
    stats: { conversations: 307, resolution: '74%' },
    config: {
      emailAddress: 'support@bloombox.com',
      autoRespond: true,
      signature: true,
    },
  },
  {
    id: 'voice',
    name: 'Voice Calls',
    description: 'AI answers phone calls via Twilio',
    icon: Phone,
    color: 'from-green-500 to-emerald-500',
    active: false,
    stats: { conversations: 0, resolution: '0%' },
    config: {
      phoneNumber: '+1 (555) 000-0000',
      voicemail: true,
      businessHours: true,
    },
  },
  {
    id: 'sms',
    name: 'SMS',
    description: 'Text message support channel',
    icon: Smartphone,
    color: 'from-orange-500 to-amber-500',
    active: false,
    stats: { conversations: 0, resolution: '0%' },
    config: {
      phoneNumber: '+1 (555) 000-0000',
      autoReply: true,
    },
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    description: 'WhatsApp Business API integration',
    icon: Globe,
    color: 'from-teal-500 to-green-500',
    active: false,
    stats: { conversations: 0, resolution: '0%' },
    config: {
      businessAccount: 'Not connected',
      templateMessages: true,
    },
  },
];

export default function Channels() {
  const [selectedChannel, setSelectedChannel] = useState(channels[0]);
  const [channelStates, setChannelStates] = useState(
    Object.fromEntries(channels.map(c => [c.id, c.active]))
  );

  const toggleChannel = (id: string) => {
    setChannelStates({ ...channelStates, [id]: !channelStates[id] });
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-white">Channels</h1>
          <p className="text-sm text-slate-400 mt-1">Manage where your AI agent is available</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity">
          <Globe className="w-4 h-4" />
          Add Channel
        </button>
      </div>

      {/* Active Channels Summary */}
      <div className="grid grid-cols-5 gap-3 mb-6">
        {channels.map((channel) => (
          <button
            key={channel.id}
            onClick={() => setSelectedChannel(channel)}
            className={`glass-light rounded-xl p-3 text-center transition-all ${
              selectedChannel.id === channel.id ? 'border-primary/50 ring-1 ring-primary/30' : ''
            }`}
          >
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${channel.color} flex items-center justify-center mx-auto mb-2 opacity-${channelStates[channel.id] ? '100' : '40'}`}>
              <channel.icon className="w-4 h-4 text-white" />
            </div>
            <div className="text-[10px] font-medium text-white">{channel.name}</div>
            <div className={`text-[9px] mt-0.5 ${channelStates[channel.id] ? 'text-green-400' : 'text-slate-500'}`}>
              {channelStates[channel.id] ? 'Active' : 'Inactive'}
            </div>
          </button>
        ))}
      </div>

      {/* Selected Channel Detail */}
      <motion.div
        key={selectedChannel.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Channel Config */}
        <div className="lg:col-span-2 glass-light rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${selectedChannel.color} flex items-center justify-center`}>
                <selectedChannel.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">{selectedChannel.name}</h3>
                <p className="text-[10px] text-slate-500">{selectedChannel.description}</p>
              </div>
            </div>
            <button
              onClick={() => toggleChannel(selectedChannel.id)}
              className="flex items-center gap-2"
            >
              {channelStates[selectedChannel.id] ? (
                <ToggleRight className="w-8 h-8 text-green-400" />
              ) : (
                <ToggleLeft className="w-8 h-8 text-slate-600" />
              )}
            </button>
          </div>

          {/* Chat Widget Config */}
          {selectedChannel.id === 'chat' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-300 mb-2 block">Widget Position</label>
                <div className="grid grid-cols-4 gap-2">
                  {['bottom-left', 'bottom-right', 'top-left', 'top-right'].map((pos) => (
                    <button
                      key={pos}
                      className={`py-2 px-3 rounded-lg text-[10px] font-medium transition-all ${
                        pos === 'bottom-right'
                          ? 'bg-primary/20 border border-primary/50 text-white'
                          : 'bg-slate-800 border border-slate-700 text-slate-400'
                      }`}
                    >
                      {pos}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 mb-2 block">Welcome Message</label>
                <textarea
                  defaultValue="Hi! How can I help you today?"
                  className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 resize-none h-20"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 mb-2 block">Embed Code</label>
                <div className="relative">
                  <pre className="p-3 bg-slate-900 rounded-lg text-[10px] text-green-400 overflow-x-auto">
{`<script src="https://cdn.resolveos.ai/widget.js"></script>
<script>
  ResolveOS.init({
    agentId: 'agt_bloombox_2024',
    position: 'bottom-right'
  });
</script>`}
                  </pre>
                  <button className="absolute top-2 right-2 p-1.5 bg-slate-800 rounded-lg hover:bg-slate-700">
                    <Copy className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Email Config */}
          {selectedChannel.id === 'email' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-slate-300 mb-2 block">Connected Email</label>
                <div className="flex items-center gap-2 p-3 bg-slate-800/50 border border-slate-700 rounded-lg">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="text-sm text-white">support@bloombox.com</span>
                  <Check className="w-4 h-4 text-green-400 ml-auto" />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300 mb-2 block">Auto-respond Settings</label>
                <div className="space-y-2">
                  {['Respond within 30 seconds', 'Include AI confidence in replies', 'Add company signature'].map((setting) => (
                    <label key={setting} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/30 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-3.5 h-3.5 rounded border-slate-600 bg-slate-800 text-primary" />
                      <span className="text-xs text-slate-300">{setting}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Voice Config */}
          {selectedChannel.id === 'voice' && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-medium text-white">Twilio Integration</span>
                </div>
                <p className="text-[10px] text-slate-400 mb-3">
                  Connect your Twilio account to enable voice AI. Calls are answered with sub-500ms latency.
                </p>
                <button className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-xs text-green-400 hover:bg-green-500/30 transition-colors flex items-center gap-2">
                  <ExternalLink className="w-3 h-3" />
                  Connect Twilio
                </button>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-300 mb-2 block">Phone Number</label>
                <input
                  type="text"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50"
                />
              </div>
            </div>
          )}

          {/* SMS / WhatsApp */}
          {(selectedChannel.id === 'sms' || selectedChannel.id === 'whatsapp') && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-800/30 rounded-lg border border-slate-700 text-center">
                <selectedChannel.icon className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                <p className="text-sm text-slate-400 mb-3">
                  {selectedChannel.id === 'sms' ? 'SMS' : 'WhatsApp'} integration requires additional setup.
                </p>
                <button className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg text-xs text-primary-light hover:bg-primary/30 transition-colors">
                  Start Setup
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Channel Stats */}
        <div className="space-y-4">
          <div className="glass-light rounded-xl p-5">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Channel Stats</h4>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-400">Conversations</span>
                  <span className="text-sm font-bold text-white">{selectedChannel.stats.conversations}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-400">Resolution Rate</span>
                  <span className="text-sm font-bold text-green-400">{selectedChannel.stats.resolution}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-400">Avg Response</span>
                  <span className="text-sm font-bold text-white">1.2s</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-light rounded-xl p-5">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Documentation', 'API Reference', 'Webhook Setup', 'Test Channel'].map((link) => (
                <button key={link} className="w-full text-left flex items-center gap-2 py-2 px-3 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors">
                  <Code className="w-3 h-3" />
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
