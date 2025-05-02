import { useState, useEffect } from "react";
import { 
  BookOpen, 
  Users, 
  Award, 
  MessageSquare, 
  Briefcase, 
  Trophy,
  Coffee,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import gsap from "gsap";

export default function WhyChaiCodeSection() {
  const [activeCard, setActiveCard] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const handleCardHover = (id) => {
    setActiveCard(id);
  };

  const glowAnimation = useSpring({
    from: { opacity: 0.3, scale: 1 },
    to: async (next) => {
      while (true) {
        await next({ opacity: 0.6, scale: 1.05 });
        await next({ opacity: 0.3, scale: 1 });
      }
    },
    config: { duration: 2000 }
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Easter egg handler
  const handleImageClick = () => {
    setClickCount(prev => {
      if (prev === 4) {
        setShowEasterEgg(true);
        gsap.to(".easter-egg", {
          scale: 1,
          duration: 0.5,
          ease: "back.out"
        });
        return 0;
      }
      return prev + 1;
    });
  };

  // Left side features
  const leftFeatures = [
    {
      id: "comprehensive",
      icon: <BookOpen className="h-6 w-6 text-orange-500" />,
      title: "Comprehensive Curriculum",
      description: "Master the concepts and practical skills required to excel in tech careers. We cover everything from basics to advanced concepts."
    },
    {
      id: "finish",
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: "You Finish It",
      description: "Our cohorts are a commitment-driven approach where most students finish what they start, ensuring complete learning."
    },
    {
      id: "industry",
      icon: <Briefcase className="h-6 w-6 text-orange-500" />,
      title: "Industry Guests",
      description: "Learn directly from industry experts who bring real-world use cases for coding, sharing insights with students."
    }
  ];

  // Right side features
  const rightFeatures = [
    {
      id: "codeandchill",
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Code and Chill",
      description: "Coding should be fun, not stressful. Join our night-time hangouts with fellow learners to code in a relaxed environment."
    },
    {
      id: "communication",
      icon: <MessageSquare className="h-6 w-6 text-orange-500" />,
      title: "Improve Communication",
      description: "One of the best ways to learn communication skills is through practice. Our peer reviews make it happen where we become better, sharp, and grow together."
    },
    {
      id: "bounties",
      icon: <Trophy className="h-6 w-6 text-orange-500" />,
      title: "Bounties",
      description: "Solve coding contests with exciting cash prizes. It's a fun way to test your knowledge, learn tactical problem solving and improve your skills."
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <animated.div 
        style={glowAnimation}
        className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"
      />
      
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70 absolute top-0 left-0"
      />
      
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        className="max-w-7xl mx-auto"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block group">
            But Why ChaiCode
            <span className="text-orange-500">?</span>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ChaiCode exists because we love tech and teaching
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          {/* Connector lines with enhanced animation */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {leftFeatures.map((feature, index) => (
              <motion.div 
                key={`line-left-${index}`}
                initial={{ width: 0 }}
                animate={{ 
                  width: "8%",
                  opacity: activeCard === feature.id ? 1 : 0.3
                }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  top: `${(index * 33) + 16}%`,
                  left: "33%",
                  height: "2px",
                  background: "linear-gradient(to right, rgba(249, 115, 22, 0.7), rgba(249, 115, 22, 0.3))"
                }}
              />
            ))}
            
            {rightFeatures.map((feature, index) => (
              <motion.div 
                key={`line-right-${index}`}
                initial={{ width: 0 }}
                animate={{ 
                  width: "8%",
                  opacity: activeCard === feature.id ? 1 : 0.3
                }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  top: `${(index * 33) + 16}%`,
                  right: "33%",
                  height: "2px",
                  background: "linear-gradient(to left, rgba(249, 115, 22, 0.7), rgba(249, 115, 22, 0.3))"
                }}
              />
            ))}
          </div>
          
          {/* Left side cards with stagger animation */}
          <div className="lg:col-span-3 space-y-6">
            {leftFeatures.map((feature, index) => (
              <motion.div 
                custom={index}
                variants={cardVariants}
                key={feature.id}
                className={`bg-gray-800 border rounded-lg p-5 transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                  activeCard === feature.id 
                    ? 'border-orange-500 shadow-lg shadow-orange-500/20' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                onMouseEnter={() => handleCardHover(feature.id)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center mb-3">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 rounded-md bg-gray-900 mr-3"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile frame in the middle with easter egg */}
          <motion.div 
            className="lg:col-span-6 flex justify-center items-center py-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-[2.5rem] bg-gray-800 border-4 border-gray-700 w-[300px] h-[620px] shadow-xl transform hover:scale-105 transition-transform duration-300">
              {/* Continuous corner light effects */}
              <div className="absolute -inset-1 bg-orange-500/20 blur-lg rounded-[3rem] animate-pulse"></div>
              
              <motion.div
                className="absolute -top-2 -left-2 w-24 h-24 bg-gradient-to-br from-orange-500/30 via-orange-500/5 to-transparent blur-xl rounded-full"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-bl from-orange-500/30 via-orange-500/5 to-transparent blur-xl rounded-full"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-24 h-24 bg-gradient-to-tr from-orange-500/30 via-orange-500/5 to-transparent blur-xl rounded-full"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-tl from-orange-500/30 via-orange-500/5 to-transparent blur-xl rounded-full"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              />
              
              {/* Ambient glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/10 rounded-[2.5rem]"
                animate={{
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Phone frame content */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-5 bg-black rounded-full"></div>
              
              <div className="absolute top-[4%] bottom-[4%] left-[6%] right-[6%] bg-gray-900 rounded-[2rem] overflow-hidden">
                <div className="h-full w-full flex flex-col items-center justify-center p-5 sm:p-7 text-center">
                  <motion.div 
                    className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-6 border-2 border-orange-500 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={handleImageClick}
                  >
                    <img 
                      src="/assets/hitesh.jpeg"
                      alt="Hitesh Choudhary" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  <AnimatePresence>
                    {showEasterEgg && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="easter-egg absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 flex items-center justify-center"
                      >
                        <div className="text-center p-4 bg-gray-800/90 rounded-lg">
                          <Coffee className="w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mx-auto mb-2" />
                          <p className="text-white text-xs sm:text-sm">You found the secret chai! ☕️</p>
                          <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mx-auto mt-2" />
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="text-[0.7rem] sm:text-xs text-gray-400 space-y-2 sm:space-y-3 text-left mt-4">
                    <p>• Retired from corporate and full time YouTube</p>
                    <p>• 3YT channels (Hindi & ENG), shipped into 40 countries</p>
                    <p>• Founded LCO teaching 300k+ students</p>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-2">Approach</h4>
                    <p className="text-xs sm:text-sm text-gray-300">Project based courses with peer learning and cohorts with many activities</p>
                  </div>
                  
                  <div className="flex space-x-2 mt-4">
                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-gray-700 bg-gray-800"></span>
                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-gray-700 bg-gray-800"></span>
                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded border border-gray-700 bg-gray-800"></span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-600 rounded-full"></div>
            </div>
          </motion.div>
          
          {/* Right side cards with stagger animation */}
          <div className="lg:col-span-3 space-y-6">
            {rightFeatures.map((feature, index) => (
              <motion.div 
                custom={index}
                variants={cardVariants}
                key={feature.id}
                className={`bg-gray-800 border rounded-lg p-5 transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                  activeCard === feature.id 
                    ? 'border-orange-500 shadow-lg shadow-orange-500/20' 
                    : 'border-gray-700 hover:border-gray-600'
                }`}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                onMouseEnter={() => handleCardHover(feature.id)}
                onMouseLeave={() => handleCardHover(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center mb-3">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 rounded-md bg-gray-900 mr-3"
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA Button with animation */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button 
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Join Cohorts Live Classes</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        className="w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70 absolute bottom-0 left-0"
      />
    </div>
  );
}