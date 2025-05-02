import { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Bell, Zap, Clock, ArrowDown } from 'lucide-react';
import { CodeDecoration } from '@/components/ui/CodeDecoration';

export default function MobileSec() {
  // For intersection observer to trigger animations
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const phoneRef = useRef(null);
  const titleRef = useRef(null);
  
  // GSAP animation for the phone
  useEffect(() => {
    if (heroInView) {
      const tl = gsap.timeline();
      
      tl.fromTo(
        phoneRef.current,
        { y: 70, opacity: 0, rotation: -5 },
        { y: 0, opacity: 1, rotation: 0, duration: 1.2, ease: "elastic.out(1, 0.8)" }
      );
      
      tl.fromTo(
        titleRef.current,
        { y: -40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.8"
      );
    }
  }, [heroInView]);

  // Phone screen animation - subtle floating effect
  const phoneAnimation = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    to: { y: -10 },
    config: { duration: 2500 },
  });

  // Courses data
  const courses = [
    { 
      tag: "TRENDING", 
      title: "React Native Masterclass", 
      rating: 4.9, 
      duration: "2.5h", 
      status: "LIVE", 
      statusColor: "bg-orange-500" 
    },
    { 
      tag: "POPULAR", 
      title: "Full Stack JavaScript", 
      rating: 4.9, 
      duration: "8h", 
      status: "ENROLLED", 
      statusColor: "bg-blue-500" 
    },
    { 
      tag: "NEW", 
      title: "AI with JavaScript", 
      rating: 5.0, 
      duration: "4h", 
      status: "ENROLL", 
      statusColor: "bg-green-500" 
    }
  ];

  // Animations for courses
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Features with subtle entrance animations
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.2,
        duration: 0.6
      }
    })
  };

  const features = [
    { icon: <Zap className="text-orange-400" size={24} />, text: "Offline course access" },
    { icon: <Bell className="text-orange-400" size={24} />, text: "Live session notifications" },
    { icon: <Clock className="text-orange-400" size={24} />, text: "Revision while commuting" }
  ];

  return (
    <div className="relative w-full bg-black py-20">
      <CodeDecoration variant="circular" className="opacity-30" />

      {/* Hero Section */}
      <div ref={heroRef} className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-orange-900 opacity-50"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-orange-500 rounded-full opacity-10"
              style={{
                width: Math.random() * 80 + 10,
                height: Math.random() * 80 + 10,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
          {/* Phone Section */}
          <animated.div 
            style={phoneAnimation}
            className="w-full lg:w-2/5 mb-12 lg:mb-0 relative"
            ref={phoneRef}
          >
            {/* Device Frame */}
            <div className="relative mx-auto max-w-[280px]">
              {/* Phone frame border */}
              <div className="bg-gray-800 rounded-[3rem] p-4 shadow-xl shadow-orange-500/10 border border-gray-700 relative">
                {/* Notch area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-7 bg-gray-900 rounded-b-3xl z-20 flex items-center justify-center">
                  <div className="w-16 h-4 bg-gray-800 rounded-full flex items-center justify-between px-2">
                    <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  </div>
                </div>

                {/* Main screen area */}
                <div className="relative bg-gray-900 rounded-[2rem] overflow-hidden shadow-inner border border-gray-700/50 aspect-[9/19.5]">
                  {/* Status bar */}
                  <div className="bg-gray-900 px-6 pt-8 pb-2 flex items-center justify-between">
                    <div className="text-xs text-gray-400">9:41</div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 relative">
                        <div className="absolute inset-0 border-2 border-gray-400 rounded-sm"></div>
                        <div className="absolute inset-1 bg-gray-400"></div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="h-2.5 w-0.5 bg-gray-400 rounded"></div>
                        <div className="h-2 w-0.5 bg-gray-400/60 rounded"></div>
                        <div className="h-1.5 w-0.5 bg-gray-400/40 rounded"></div>
                        <div className="h-1 w-0.5 bg-gray-400/20 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="px-4 py-2">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-orange-500 font-bold flex items-center text-lg">
                        <span className="bg-orange-500 text-white p-1 rounded mr-2 text-xs"></span>
                        ChaiCode
                      </div>
                      <Bell size={16} className="text-orange-500" />
                    </div>

                    {/* Course cards with enhanced styling */}
                    {courses.map((course, index) => (
                      <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate={heroInView ? "visible" : "hidden"}
                        variants={cardVariants}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl mb-3 p-3 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 font-medium">{course.tag}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${course.statusColor}/10 text-${course.statusColor.replace('bg-', '')}`}>
                            {course.status}
                          </span>
                        </div>
                        <div className="font-medium text-white text-sm mb-1">{course.title}</div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-[10px] text-gray-400">
                            <span className="text-yellow-400">★</span>
                            <span className="ml-1">{course.rating}</span>
                            <span className="mx-1">•</span>
                            <span>{course.duration}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom navigation */}
                  <div className="absolute bottom-0 inset-x-0 bg-gray-800/50 backdrop-blur-sm border-t border-gray-700/30">
                    <div className="flex justify-around py-3 px-6">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mb-1">
                          <span className="text-xs text-orange-500">📚</span>
                        </div>
                        <span className="text-[10px] text-orange-500 font-medium">Courses</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-700/30 flex items-center justify-center mb-1">
                          <span className="text-xs">🔴</span>
                        </div>
                        <span className="text-[10px] text-gray-400">Live</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-700/30 flex items-center justify-center mb-1">
                          <span className="text-xs">👤</span>
                        </div>
                        <span className="text-[10px] text-gray-400">Profile</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side buttons */}
                <div className="absolute right-[-2px] top-16 w-1 h-6 bg-gray-700 rounded-l-lg"></div>
                <div className="absolute right-[-2px] top-24 w-1 h-6 bg-gray-700 rounded-l-lg"></div>
                <div className="absolute left-[-2px] top-16 w-1 h-10 bg-gray-700 rounded-r-lg"></div>
              </div>

              {/* Reflections and highlights */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Enhanced glow effect */}
              <div className="absolute -inset-4 bg-orange-500 opacity-5 blur-2xl rounded-full -z-10"></div>
              <div className="absolute -inset-8 bg-orange-500 opacity-5 blur-3xl rounded-full -z-10 animate-pulse"></div>
            </div>
          </animated.div>
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2">
            <motion.h1 
              ref={titleRef}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
            >
              Learn on the go
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-gray-300 mb-10"
            >
              Take your coding journey anywhere with the ChaiCode mobile app. Access courses, join live sessions, and connect with the community - all from your pocket.
            </motion.p>
            
            {/* Feature list */}
            <div ref={featuresRef} className="mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={featuresInView ? "visible" : "hidden"}
                  variants={featureVariants}
                  className="flex items-center mb-4"
                >
                  <div className="mr-4 bg-gray-800 p-2 rounded-full">
                    {feature.icon}
                  </div>
                  <span className="text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Download buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-all shadow-lg shadow-orange-500/20"
              >
                <ArrowDown size={18} className="mr-2" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </motion.a>
              
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center justify-center transition-all shadow-lg shadow-orange-500/20"
              >
                <ArrowDown size={18} className="mr-2" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}