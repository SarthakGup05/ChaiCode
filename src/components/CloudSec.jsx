import { useState } from "react";
import {
  Code, Server, Database, Box, Monitor,
  Layers, CircuitBoard, Cpu, Globe,
  Cloud, Search, Youtube, Play, ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeDecoration } from '@/components/ui/CodeDecoration';

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden opacity-[0.07]">
    {/* Orange Circuit Pattern */}
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M10 10h80v80h-80z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-orange-500"/>
        <circle cx="50" cy="50" r="3" className="fill-orange-500"/>
        <path d="M50 10v30M50 60v30M10 50h30M60 50h30" stroke="currentColor" strokeWidth="0.5" className="text-orange-500"/>
        <circle cx="10" cy="50" r="2" className="fill-orange-500"/>
        <circle cx="90" cy="50" r="2" className="fill-orange-500"/>
        <circle cx="50" cy="10" r="2" className="fill-orange-500"/>
        <circle cx="50" cy="90" r="2" className="fill-orange-500"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#circuit-pattern)"/>
    </svg>

    {/* Hexagon Grid Pattern */}
    <svg className="absolute w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
      <pattern id="hexagon-pattern" x="0" y="0" width="50" height="87" patternUnits="userSpaceOnUse">
        <path d="M25 3.5L45 15.5V39.5L25 51.5L5 39.5V15.5L25 3.5Z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              className="text-orange-500/30"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#hexagon-pattern)"/>
    </svg>

    {/* Dots Pattern */}
    <svg className="absolute w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
      <pattern id="dots-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" className="fill-orange-500/20"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#dots-pattern)"/>
    </svg>
  </div>
);

export default function TopicsCloudSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'database', name: 'Database' }
  ];

  const techCards = [
    {
      id: 1,
      icon: <Server className="h-6 w-6" />,
      title: "Docker",
      category: "cloud",
      videoCount: 45,
      difficulty: "Intermediate",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      id: 2,
      icon: <Database className="h-6 w-6" />,
      title: "MCP Server",
      category: "backend",
      videoCount: 32,
      difficulty: "Advanced",
      gradient: "from-orange-600 to-red-500"
    },
    {
      id: 3,
      icon: <Box className="h-6 w-6" />,
      title: "Kubernetes",
      category: "cloud",
      videoCount: 38,
      difficulty: "Advanced",
      gradient: "from-orange-400 to-amber-500"
    },
    {
      id: 4,
      icon: <Code className="h-6 w-6" />,
      title: "Python",
      category: "backend",
      videoCount: 120,
      difficulty: "Beginner",
      gradient: "from-orange-500 to-amber-400"
    },
    {
      id: 5,
      icon: <Monitor className="h-6 w-6" />,
      title: "React Native",
      category: "frontend",
      videoCount: 85,
      difficulty: "Intermediate",
      gradient: "from-orange-600 to-amber-500"
    },
    {
      id: 6,
      icon: <Layers className="h-6 w-6" />,
      title: "Django",
      category: "backend",
      videoCount: 65,
      difficulty: "Intermediate",
      gradient: "from-orange-500 to-red-400"
    },
    {
      id: 7,
      icon: <CircuitBoard className="h-6 w-6" />,
      title: "NextJS",
      category: "frontend",
      videoCount: 72,
      difficulty: "Intermediate",
      gradient: "from-orange-400 to-amber-600"
    },
    {
      id: 8,
      icon: <Cpu className="h-6 w-6" />,
      title: "Vue.js",
      category: "frontend",
      videoCount: 54,
      difficulty: "Intermediate",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: 9,
      icon: <Globe className="h-6 w-6" />,
      title: "GraphQL",
      category: "backend",
      videoCount: 42,
      difficulty: "Advanced",
      gradient: "from-orange-600 to-red-400"
    },
    {
      id: 10,
      icon: <Cloud className="h-6 w-6" />,
      title: "AWS",
      category: "cloud",
      videoCount: 95,
      difficulty: "Advanced",
      gradient: "from-orange-400 to-amber-500"
    },
    {
      id: 11,
      icon: <Database className="h-6 w-6" />,
      title: "MongoDB",
      category: "database",
      videoCount: 48,
      difficulty: "Intermediate",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      id: 12,
      icon: <Code className="h-6 w-6" />,
      title: "TypeScript",
      category: "frontend",
      videoCount: 68,
      difficulty: "Intermediate",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const filteredCards = techCards.filter(card => {
    const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
    const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative w-full bg-black">
      <CodeDecoration variant="hash" className="opacity-40" />
      <div className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <BackgroundPattern />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Topics
              <span className="text-orange-500"></span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Dive into our comprehensive collection of tech tutorials and courses
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search topics..."
                  className="w-full bg-gray-800/50 backdrop-blur-sm text-white rounded-xl py-4 px-6 pl-14 border border-gray-700/50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-gray-400">
                  <span className="text-sm">Press</span>
                  <kbd className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                    /
                  </kbd>
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Topics Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredCards.map((card) => (
                <motion.div
                  key={card.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    <div className="p-6">
                      {/* Icon and Title */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${card.gradient}`}>
                          {card.icon}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Youtube size={16} className="text-red-500" />
                          <span className="text-sm text-gray-400">{card.videoCount}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50 text-gray-300">
                          {card.difficulty}
                        </span>
                        <span className="px-2 py-1 text-xs rounded-md bg-gray-700/50 text-gray-300">
                          {card.category}
                        </span>
                      </div>

                      {/* Action Button */}
                      <button className="w-full mt-2 px-4 py-2 rounded-lg bg-gray-700/50 text-white flex items-center justify-center gap-2 group-hover:bg-orange-500 transition-all duration-300">
                        <Play size={16} />
                        <span>Watch Tutorials</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Button */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
              <span>View All Topics</span>
              <ExternalLink size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}