import React from 'react';
import { motion } from 'framer-motion';
import { Code, Star, MessageSquare, Share2, ThumbsUp, Bookmark, Award, Laptop, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';


const STATIC_TWEETS = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      username: "alexcodes",
      profile_image_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    tweet: {
      text: "Just completed my first week at #ChaiCode's JavaScript bootcamp! The community support is amazing, and the peer learning approach makes such a difference. Can't wait to build my first full-stack project! 🚀",
      created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      public_metrics: {
        like_count: 427,
        reply_count: 23,
        retweet_count: 56,
      }
    }
  },
  {
    id: 2,
    user: {
      name: "Sarah Dev",
      username: "sarahcodes",
      profile_image_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    tweet: {
      text: "Month 2 of #ChaiCode's Data Science program! From basic Python to advanced ML concepts - the learning curve is real but the mentorship is incredible. Building my portfolio one project at a time! 📊💻",
      created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      public_metrics: {
        like_count: 312,
        reply_count: 18,
        retweet_count: 42,
      }
    }
  },
  {
    id: 3,
    user: {
      name: "Mike Chen",
      username: "mikebuilds",
      profile_image_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    tweet: {
      text: "WOW! Just deployed my first React app thanks to #ChaiCode! The way they break down complex concepts and provide real-world projects is genius. Plus, the Discord community is always there to help! 🔥",
      created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      public_metrics: {
        like_count: 586,
        reply_count: 34,
        retweet_count: 89,
      }
    }
  },
  {
    id: 4,
    user: {
      name: "Priya Kumar",
      username: "priyatech",
      profile_image_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    tweet: {
      text: "6 months ago I was struggling with basic coding. Today, I'm building full-stack applications! The structured learning path at #ChaiCode made all the difference. If you're serious about coding, this is the way! 💪",
      created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      public_metrics: {
        like_count: 834,
        reply_count: 45,
        retweet_count: 156,
      }
    }
  },
  {
    id: 5,
    user: {
      name: "David Wilson",
      username: "davidwdev",
      profile_image_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    tweet: {
      text: "The projects at #ChaiCode are next level! Just finished building an AI-powered chat application. The best part? We did it step by step, with clear explanations and great documentation. Time to update that portfolio! 🎯",
      created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      public_metrics: {
        like_count: 721,
        reply_count: 38,
        retweet_count: 112,
      }
    }
  },
  {
    id: 6,
    user: {
      name: "Emma Zhang",
      username: "emmathedev",
      profile_image_url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    tweet: {
      text: "Just earned my #ChaiCode certification in DevOps! The hands-on labs and real-world scenarios made learning Docker and Kubernetes actually fun. Ready to automate all the things! 🚀",
      created_at: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      public_metrics: {
        like_count: 456,
        reply_count: 28,
        retweet_count: 67,
      }
    }
  }
];

const TweetCard = ({ tweet, user }) => {
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return `${seconds}s ago`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="border border-gray-800 shadow-lg hover:shadow-orange-500/10 transition-all duration-300 bg-gradient-to-br from-gray-900 to-black overflow-hidden backdrop-blur-sm">
        <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-orange-600"></div>
        
        <CardHeader className="flex flex-row items-center gap-4 pb-3">
          <Avatar className="h-12 w-12 ring-2 ring-orange-500/20 shadow-md">
            <AvatarImage src={user.profile_image_url} alt={user.name} />
            <AvatarFallback className="bg-orange-500 text-white">
              {user.name?.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="font-bold text-gray-100">{user.name}</div>
            <div className="text-sm text-orange-400 flex items-center gap-1">
              <Laptop size={12} />
              @{user.username}
            </div>
          </div>
          <div className="ml-auto">
            <div className="text-xs text-gray-400">{timeAgo(tweet.created_at)}</div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0 pb-4">
          <div className="relative mb-4 px-4 py-3 bg-gray-900/50 rounded-lg border-l-4 border-orange-500">
            <Quote size={18} className="absolute text-orange-500/30 opacity-50 -left-1 -top-2" />
            <p className="text-gray-300 relative z-10">{tweet.text}</p>
            <Quote size={18} className="absolute text-orange-500/30 opacity-50 rotate-180 -right-1 -bottom-2" />
          </div>
        </CardContent>
        
        <CardFooter className="border-t border-gray-800 pt-3 pb-3 px-6 bg-gradient-to-r from-gray-900 to-black">
          <div className="flex justify-between w-full text-gray-400">
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs hover:text-orange-400 hover:bg-orange-500/10">
              <ThumbsUp size={16} className="text-orange-500" />
              <span>{formatNumber(tweet.public_metrics?.like_count || 0)}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs hover:text-orange-400 hover:bg-orange-500/10">
              <MessageSquare size={16} className="text-orange-500" />
              <span>{formatNumber(tweet.public_metrics?.reply_count || 0)}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs hover:text-orange-400 hover:bg-orange-500/10">
              <Share2 size={16} className="text-orange-500" />
              <span>{formatNumber(tweet.public_metrics?.retweet_count || 0)}</span>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-1 text-xs hover:text-orange-400 hover:bg-orange-500/10"
              onClick={() => window.open('https://twitter.com/hashtag/chaicode', '_blank')}
            >
              <Bookmark size={16} className="text-orange-500" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const SectionHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-3">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full text-white shadow-lg shadow-orange-500/20"
        >
          <Quote size={30} className="text-white" />
        </motion.div>
      </div>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
      >
        Community Success Stories
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-400 mt-2 max-w-lg mx-auto"
      >
        Hear from our community members who transformed their careers through ChaiCode
      </motion.p>
    </div>
  );
};

const TwitterSection = () => {
  return (
    <div className="p-8 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.15),transparent_50%)]"></div>
      
      <div className="relative z-10">
        <SectionHeader />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STATIC_TWEETS.map(({ tweet, user }) => (
            <TweetCard key={tweet.id} tweet={tweet} user={user} />
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            className={`
              relative overflow-hidden bg-black/80
              text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400
              hover:from-orange-400 hover:to-orange-500 rounded-full 
              px-8 py-4 h-auto flex items-center space-x-4
              shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 
              transition-all duration-500 border border-orange-500/20
              backdrop-blur-sm group
              before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite]
              before:bg-gradient-to-r before:from-transparent before:via-orange-500/10 before:to-transparent
              hover:scale-105
            `}
            onClick={() => window.open('https://twitter.com/hashtag/chaicode', '_blank')}
          >
            <span className="font-medium text-lg relative z-10 flex items-center bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Join the Community
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 stroke-orange-500" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default TwitterSection;