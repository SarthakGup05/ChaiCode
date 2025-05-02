import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  MessageCircle, 
  Hash, 
  Mic, 
  Video, 
  Crown, 
  Bot,
  Heart,
  ArrowRight
} from "lucide-react";

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(value * progress));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return <span>{count.toLocaleString()}+</span>;
};

const DiscordChannel = ({ name, icon, memberCount, isActive }) => (
  <motion.div
    whileHover={{ x: 4 }}
    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
      isActive 
        ? 'bg-orange-500/10 text-orange-500' 
        : 'hover:bg-text-orange-500/10 text-gray-400'
    }`}
  >
    {icon}
    <span className="flex-1"># {name}</span>
    <span className="text-sm text-gray-400">{memberCount}</span>
  </motion.div>
);

export default function CommunitySection() {
  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Discord Community
            <span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connect with fellow developers, share your progress, and get help from our supportive community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Discord Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden"
          >
            {/* Server Header */}
            <div className="p-4 border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/chaicode-white.png" 
                  alt="ChaiCode" 
                  className="w-24  h-8"
                />
                <h3 className="text-lg font-semibold text-white">ChaiCode Community</h3>
              </div>
            </div>

            {/* Channels List */}
            <div className="p-4 space-y-1">
              <DiscordChannel 
                name="welcome" 
                icon={<Crown size={18} />} 
                memberCount="2.1k" 
                isActive={true}
              />
              <DiscordChannel 
                name="introductions" 
                icon={<MessageCircle size={18} />} 
                memberCount="1.8k"
              />
              <DiscordChannel 
                name="general" 
                icon={<Hash size={18} />} 
                memberCount="3.2k"
              />
              <DiscordChannel 
                name="voice-chat" 
                icon={<Mic size={18} />} 
                memberCount="42"
              />
              <DiscordChannel 
                name="study-room" 
                icon={<Video size={18} />} 
                memberCount="156"
              />
              <DiscordChannel 
                name="chai-bot" 
                icon={<Bot size={18} />} 
                memberCount="1.4k"
              />
            </div>
          </motion.div>

          {/* Stats and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Active Members Counter */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 mb-4">
                <Users size={20} />
                <span>Active Community</span>
              </div>
              <h3 className="text-5xl md:text-6xl font-bold text-white mb-4">
                <AnimatedCounter value={80000} /> 
                <span className="text-2xl text-gray-400 ml-2">Students</span>
              </h3>
              <p className="text-gray-400">
                Join the largest community of chai-loving coders
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <Heart className="w-8 h-8 text-orange-500 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Supportive Community</h4>
                <p className="text-gray-400 text-sm">Get help from fellow developers and mentors</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <Users className="w-8 h-8 text-orange-500 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Real-time Interaction</h4>
                <p className="text-gray-400 text-sm">Connect with peers in voice and video channels</p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-colors duration-300 group"
            >
              Join Discord Community
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 text-center">
            <div className="text-2xl font-bold text-white mb-1">24/7</div>
            <div className="text-gray-400 text-sm">Active Support</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 text-center">
            <div className="text-2xl font-bold text-white mb-1">50+</div>
            <div className="text-gray-400 text-sm">Study Groups</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 text-center">
            <div className="text-2xl font-bold text-white mb-1">100+</div>
            <div className="text-gray-400 text-sm">Daily Events</div>
          </div>
          <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 text-center">
            <div className="text-2xl font-bold text-white mb-1">10k+</div>
            <div className="text-gray-400 text-sm">Daily Messages</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}