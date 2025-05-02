import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Code, Video, MessageSquare, Zap, Play } from 'lucide-react';
import { CodeDecoration } from '@/components/ui/CodeDecoration';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const glowAnimation = {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const features = [
    { icon: <Users size={20} />, text: "Peer learning" },
    { icon: <Code size={20} />, text: "Code reviews" },
    { icon: <Video size={20} />, text: "Virtual hostel" },
    { icon: <MessageSquare size={20} />, text: "Doubt sessions" },
    { icon: <Zap size={20} />, text: "Bounties" }
  ];

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <CodeDecoration variant="default" className="opacity-50" />
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          style={{ 
            backgroundImage: 'radial-gradient(circle at center, rgba(255,125,0,0.15) 0%, transparent 50%)',
            backgroundSize: '100% 100%'
          }}
        ></motion.div>
      </div>

      {/* Animated floating orbs */}
      <motion.div 
        animate={floatingAnimation} 
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-2xl"
      />
      <motion.div 
        animate={{...floatingAnimation, transition: { delay: 1 }}} 
        className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-orange-400/20 to-orange-500/20 blur-2xl"
      />
      <motion.div 
        animate={{...floatingAnimation, transition: { delay: 0.5 }}} 
        className="absolute top-40 right-40 w-24 h-24 rounded-full bg-gradient-to-r from-orange-300/20 to-orange-400/20 blur-xl"
      />

      {/* Enhanced gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="max-w-7xl w-full mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          {/* Header Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full text-center mb-8"
          >
            <Badge 
              variant="outline" 
              className="mb-6 px-6 py-2 bg-black/50 text-orange-400 border-orange-500/20 font-medium 
                       hover:bg-orange-500/10 transition-all duration-300 backdrop-blur-sm inline-flex mt-18"
            >
              <motion.span 
                animate={glowAnimation}
                className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-2"
              />
              Trusted by 1.5M Code Learners
            </Badge>

            {/* Text content */}
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                Consistency and Community
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                Learning for coding courses
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              Content is everywhere, we provide a learning experience that is unmatched. 
              <span className="text-orange-400">Bounties, peer learning, peer code reviews</span>, 
              Virtual hostel, Alumni Network, Doubt sessions, Group projects and so many other activities to keep you on track.
            </motion.p>
          </motion.div>

          {/* Video Section */}
          <motion.div 
            className="relative w-full max-w-3xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-orange-500/20 shadow-2xl shadow-orange-500/10">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-50"></div>
              <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500/20 to-transparent blur"></div>
              
              {/* Video Content */}
              <div className="relative h-full bg-gray-900/90 backdrop-blur-sm">
                {isVideoLoaded ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/_CCyMWSZNU4?autoplay=1"
                    title="ChaiCode Introduction"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img 
                      src="/assets/hitesh.jpeg" 
                      alt="Video Thumbnail" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                    
                    {/* Play Button */}
                    <motion.button
                      className="absolute inset-0 w-full h-full flex items-center justify-center group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsVideoLoaded(true)}
                    >
                      <motion.div 
                        className="relative w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/50 group-hover:bg-orange-600 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 260,
                          damping: 20 
                        }}
                      >
                        <div className="absolute -inset-1 bg-orange-500/30 rounded-full blur-md"></div>
                        <Play className="w-8 h-8 text-white ml-1" />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                    </motion.button>
                  </>
                )}
              </div>
            </div>

            {/* Video Meta */}
            <motion.div 
              className="absolute -bottom-4 left-4 right-4 bg-black/90 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Video className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Getting Started with ChaiCode</h3>
                  <p className="text-gray-400 text-sm">Learn how our platform works</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Button Section */}
          <motion.div
            className="relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Button 
              className={`
                relative overflow-hidden bg-black/80
                text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400
                hover:from-orange-400 hover:to-orange-500 rounded-full 
                px-10 py-7 h-auto flex items-center space-x-6
                shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 
                transition-all duration-500 border border-orange-500/20
                backdrop-blur-sm
                before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite]
                before:bg-gradient-to-r before:from-transparent before:via-orange-500/10 before:to-transparent
                ${isHovering ? 'translate-y-[-2px] scale-105' : ''}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <span className="font-medium text-xl relative z-10 flex items-center bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Check all Live Cohorts
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 ml-3 transition-transform duration-300 group-hover:translate-x-2 stroke-orange-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={isHovering ? { x: [0, 5, 0] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
              
              <motion.span 
                className="relative z-10 h-4 w-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="absolute inset-0 rounded-full bg-orange-400 blur-sm animate-pulse"></span>
              </motion.span>
            </Button>

            {/* Enhanced hover effects */}
            {isHovering && (
              <>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 opacity-30 blur-xl transition-all duration-500"></div>
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-20 blur-2xl transition-all duration-500"></div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}