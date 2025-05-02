import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import VideoEmbaded from './ui/HeroUi';

const HeroSection = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 mt-24 overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-orange-50"></div>
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ff8a00' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating dots decorations */}
      <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-orange-500 opacity-10 blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-orange-400 opacity-10 blur-xl"></div>
      <div className="absolute top-40 right-40 w-16 h-16 rounded-full bg-orange-300 opacity-20 blur-lg"></div>
      
      {/* Moving gradient blob */}
      <div 
        className="absolute opacity-30 blur-3xl transition-all duration-500 ease-in-out"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(255,125,0,0.8) 0%, rgba(255,255,255,0) 70%)',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          left: '40%',
          top: '30%',
          pointerEvents: 'none'
        }}
      ></div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        {/* Center content */}
        <div className="md:col-span-10 md:col-start-2 flex flex-col items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <Badge variant="outline" className="mb-4 px-3 py-1 bg-orange-100 text-orange-600 border-orange-200 font-medium hover:bg-orange-200 transition-all duration-300">
              Trusted by 1.5M Code Learners
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400"
            initial="hidden"
            animate="visible"
            variants={{
              ...textVariants,
              visible: { 
                ...textVariants.visible, 
                transition: { duration: 0.8, delay: 0.2 } 
              }
            }}
          >
            Consistency and Community Learning for coding courses.
          </motion.h1>
          
          <motion.p 
            className="text-base text-gray-600 text-center mb-8 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={{
              ...textVariants,
              visible: { 
                ...textVariants.visible, 
                transition: { duration: 0.8, delay: 0.4 } 
              }
            }}
          >
            Content is everywhere, we provide a learning experience that is unmatched. Bounties, peer learning, peer code reviews, Virtual hostel, Alumni Network, Doubt sessions, Group projects and so many other activities to keep you on track.
          </motion.p>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              ...textVariants,
              visible: { 
                ...textVariants.visible, 
                transition: { duration: 0.6, delay: 0.6 } 
              }
            }}
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Button 
              className={`bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-8 py-6 h-auto flex items-center space-x-3 shadow-lg hover:shadow-orange-300/40 transition-all duration-300 ${isHovering ? 'translate-y-[-2px]' : ''}`}
            >
              <span className="font-medium text-lg">Check all Live Cohorts</span>
              <span className="h-3 w-3 rounded-full bg-white animate-pulse"></span>
            </Button>
            {isHovering && (
              <div className="absolute -inset-1 rounded-full bg-orange-300 blur opacity-30 z-[-1] animate-pulse"></div>
            )}
          </motion.div>
          
       {/* video embbaded section */}
       
          
          <motion.div 
            className="mt-12 w-full pt-6 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              ...textVariants,
              visible: { 
                ...textVariants.visible, 
                transition: { duration: 0.6, delay: 1 } 
              }
            }}
          >
            <p className="text-sm text-orange-500 font-medium flex items-center space-x-2">
              <span>Let's learn coding as a community</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </p>
          </motion.div>
        </div>       
      </div>
    </div>
  );
};

export default HeroSection;