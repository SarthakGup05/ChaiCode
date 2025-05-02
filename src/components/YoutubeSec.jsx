import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Youtube, Users, Play } from 'lucide-react';
import gsap from 'gsap';
import { CodeDecoration } from '@/components/ui/CodeDecoration';

export default function YoutubeSec() {
  const [activeChannel, setActiveChannel] = useState(0);
  const heroRef = useRef(null);
  
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [channelsRef, channelsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // GSAP animation for title and code background effects
  useEffect(() => {
    if (titleInView) {
      gsap.fromTo(
        ".code-line",
        { 
          opacity: 0,
          x: -20
        },
        { 
          opacity: 0.7,
          x: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power2.out"
        }
      );
      
      gsap.fromTo(
        ".title-text",
        { 
          opacity: 0,
          y: 30
        },
        { 
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [titleInView]);
  
  // YouTube channels data
  const channels = [
    {
      name: "Chai aur Code",
      handle: "@chaiaurcode",
      image: "/assets/chai-white.png",
      subscribers: "600K",
      videos: "545",
      language: "हिंदी",
      colorClass: "orange",
      bgClass: "bg-orange-500",
      featured: true
    },
    {
      name: "Hitesh Choudhary",
      handle: "@HiteshCodeLab",
      image: "/assets/hitesh.jpeg",
      subscribers: "987K",
      videos: "1.6K",
      language: "English",
      colorClass: "blue",
      bgClass: "bg-blue-500",
      featured: false
    },
    {
      name: "Code Snippets",
      handle: "@CodeSnippets",
      image: "/assets/chaicode-white.png",
      subscribers: "320K",
      videos: "412",
      language: "English/Hindi",
      colorClass: "green",
      bgClass: "bg-green-500",
      featured: false
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.3
      }
    }
  };

  // Featured video details
  const featuredVideoDetails = [
    {
      title: "Complete JavaScript Course 2023",
      thumbnail: "/assets/hc.png",
      duration: "2:45:18",
      views: "1.2M views",
      date: "3 months ago"
    },
    {
      title: "React.js Ultimate Guide",
      thumbnail:"/assets/hc.png",
      duration: "3:12:45",
      views: "850K views",
      date: "5 months ago"
    },
    {
      title: "Web Development Roadmap",
      thumbnail: "/assets/hc.png",
      duration: "1:45:32",
      views: "2.1M views",
      date: "1 month ago"
    }
  ];

  return (
    <div className="relative w-full bg-black py-20">
      <CodeDecoration variant="bracket" className="opacity-30" />
      <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
     
        {/* Hero Section with Code Background */}
        <div className="relative pt-12 pb-24" ref={heroRef}>
          {/* Code background */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="code-line absolute top-20 left-4 text-orange-500 opacity-70 font-mono text-sm">
              {'// void jsx.renderThis.app({channel}) => {'}
            </div>
            <div className="code-line absolute top-36 left-16 text-blue-400 opacity-70 font-mono text-sm">
              {'import React from "react";'}
            </div>
            <div className="code-line absolute top-48 right-8 text-green-400 opacity-70 font-mono text-sm">
              {'const YouTubeChannel = () => {'}
            </div>
            <div className="code-line absolute bottom-32 left-10 text-yellow-400 opacity-70 font-mono text-sm">
              {'return <Channel />;'}
            </div>
            <div className="code-line absolute bottom-16 right-24 text-orange-500 opacity-70 font-mono text-sm">
              {'// }'}
            </div>
          </div>
          
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-orange-900/30"></div>
          
          {/* Main content */}
          <div className="container mx-auto px-4 relative z-10">
            {/* Title section */}
            <div ref={titleRef} className="text-center mb-16">
              <div className="title-wrapper">
                <motion.h1 
                  className="title-text text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent inline-block"
                >
                  Explore Our Engaging YouTube Channels
                </motion.h1>
              </div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-300 max-w-2xl mx-auto"
              >
                Follow our channels for free learning resources with high-quality coding tutorials in Hindi and English.
              </motion.p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Featured Channel/Video */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={channelsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.7 }}
                className="w-[500px] lg:w-1/2 bg-gradient-to-br from-gray-800/50 to-gray-900/90 rounded-2xl overflow-hidden shadow-lg shadow-orange-500/10 border border-gray-800"
              >
                <div className="relative w-[610px] h-[407px]">
                  <img 
                    src={featuredVideoDetails[activeChannel].thumbnail} 
                    alt="Featured Video" 
                    className="w-[500px] h-full object-cover bg-gray-800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{featuredVideoDetails[activeChannel].title}</h3>
                      <div className="flex items-center text-sm text-gray-300">
                        <span className="flex items-center mr-4"><Play size={14} className="mr-1" /> {featuredVideoDetails[activeChannel].duration}</span>
                        <span className="mr-4">{featuredVideoDetails[activeChannel].views}</span>
                        <span>{featuredVideoDetails[activeChannel].date}</span>
                      </div>
                    </div>
                  </div>
                  <motion.div 
                    className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-lg shadow-lg flex items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Youtube size={20} className="mr-1" />
                    <span className="font-medium">Watch Now</span>
                  </motion.div>
                </div>
                
                {/* Channel Info */}
                <div className="p-6 flex items-center space-x-4">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full ${channels[activeChannel].bgClass} flex items-center justify-center`}>
                      <img 
                        src={channels[activeChannel].image} 
                        alt={channels[activeChannel].name}
                        className="w-12 h-12 rounded-full object-cover bg-gray-800"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-red-600 text-white p-1 rounded-full">
                      <Youtube size={14} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{channels[activeChannel].name}</h3>
                    <p className="text-gray-400 text-sm">{channels[activeChannel].handle}</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Channel List */}
              <motion.div 
                ref={channelsRef}
                variants={containerVariants}
                initial="hidden"
                animate={channelsInView ? "visible" : "hidden"}
                className="w-full lg:w-1/2 space-y-4"
              >
                {channels.map((channel, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-gray-800/60 backdrop-blur-sm rounded-xl p-5 border border-gray-700 shadow-lg cursor-pointer ${activeChannel === index ? 'ring-2 ring-orange-500' : ''}`}
                    onClick={() => setActiveChannel(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full ${channel.bgClass} flex items-center justify-center relative overflow-hidden`}>
                          <img 
                            src={channel.image} 
                            alt={channel.name}
                            className="w-10 h-10 rounded-full object-cover bg-gray-800"
                          />
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-lg flex items-center">
                            {channel.name}
                            {channel.featured && (
                              <span className="ml-2 text-xs bg-gradient-to-r from-orange-400 to-red-500 px-2 py-0.5 rounded-full">
                                Featured
                              </span>
                            )}
                          </h3>
                          <p className="text-gray-400 text-sm">{channel.handle}</p>
                        </div>
                      </div>
                      
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded flex items-center text-sm"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Visit Channel
                      </motion.button>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-700 grid grid-cols-3 gap-4">
                      <motion.div 
                        variants={counterVariants}
                        className="text-center"
                      >
                        <div className="text-lg font-bold text-orange-400">{channel.subscribers}</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center">
                          <Users size={12} className="mr-1" /> Subscribers
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        variants={counterVariants}
                        className="text-center"
                      >
                        <div className="text-lg font-bold text-orange-400">{channel.videos}</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center">
                          <Play size={12} className="mr-1" /> Videos
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        variants={counterVariants}
                        className="text-center"
                      >
                        <div className="text-lg font-bold">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                            channel.language === "हिंदी" ? "bg-orange-500/20 text-orange-300" : 
                            channel.language === "English" ? "bg-blue-500/20 text-blue-300" : 
                            "bg-green-500/20 text-green-300"
                          }`}>
                            {channel.language}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1">Language</div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={channelsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mt-8 text-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-orange-500/20 flex items-center mx-auto"
                  >
                    <Youtube size={20} className="mr-2" />
                    Explore All Channels
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}