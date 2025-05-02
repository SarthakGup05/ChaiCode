import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Trophy, Users, FileCode, Code, BookOpen } from "lucide-react";

export default function CohortsBenefits() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const benefits = [
    {
      id: 1,
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Taught by Professionals",
      description: "Our cohorts are being taught by top industry experts and educators",
      code: "class Teacher extends Professional { /* ... */ }"
    },
    {
      id: 2,
      icon: <Trophy className="h-8 w-8 text-orange-500" />,
      title: "Bounties",
      description: "Earn rewards, from Cash to MacBook. Keeps you motivated to work hard",
      code: "const reward = solveChallenge(difficulty)"
    },
    {
      id: 3,
      icon: <AlertCircle className="h-8 w-8 text-orange-500" />,
      title: "Coding Hostels",
      description: "There is nothing like late night discussion with fellow learners and solving bugs",
      code: "while(night) { solveProblems(together) }"
    },
    {
      id: 4,
      icon: <FileCode className="h-8 w-8 text-orange-500" />,
      title: "Peer Code Reviews",
      description: "With our internal tools like Masterji, every code assignment gets feedback to improve your code",
      code: "// TODO: Refactor this for better performance"
    },
    {
      id: 5,
      icon: <Code className="h-8 w-8 text-orange-500" />,
      title: "Leet Lab",
      description: "Our in-house built LeetCode style platform that helps you to understand foundation of programming language",
      code: "function optimizeSolution(algorithm) { /* ... */ }"
    },
    {
      id: 6,
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      title: "Revision Classes",
      description: "We have so many peer classes by fellow learners that you get so many chances to learn that topic",
      code: "for(let i = 0; i < concepts.length; i++) { revise() }"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 mb-4">
            Key Benefits of Cohorts
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Cohorts are the best way to learn because you finish the course in a timely manner
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Animated gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300" />
              
              {/* Card Content */}
              <div className="relative flex flex-col h-full bg-gray-800/50 backdrop-blur-xl rounded-lg border border-gray-700/50 p-6 transition-all duration-300">
                <motion.div 
                  className="flex items-center mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-3 bg-gray-900/80 rounded-xl mr-4 shadow-lg shadow-orange-500/10">
                    <motion.div
                      animate={{ rotate: hoveredCard === benefit.id ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {benefit.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    {benefit.title}
                  </h3>
                </motion.div>
                
                <p className="text-gray-300 mb-4 flex-grow">{benefit.description}</p>
                
                {/* Code Block */}
                <motion.div 
                  className="relative group/code"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg blur opacity-75" />
                  <div className="relative bg-black/50 backdrop-blur-xl rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    </div>
                    <code className="text-orange-400/90">{benefit.code}</code>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button 
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg shadow-lg shadow-orange-500/25 hover:shadow-orange-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Next Cohort
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}