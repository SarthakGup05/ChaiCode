import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Star, 
  GitFork, 
  Code2,
  PlayCircle,
  Globe,
  ServerCrash,
  Terminal,
  Check
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FreeAPI.app",
    description: "A comprehensive API Hub designed to help developers learn and master API interactions. Perfect for frontend, mobile, and backend developers to practice API integration and build portfolio projects.",
    videoId: "DxedlhTyR7Q",
    githubUrl: "https://github.com/hiteshchoudhary/apihub",
    stars: "7.7k",
    forks: "1.2k",
    techStack: ["Node.js", "MongoDB", "Docker", "Playwright", "Swagger"],
  }
];

export default function OpenSourceSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const project = projects[0];

  const handleClone = async () => {
    const cloneUrl = project.githubUrl + '.git';
    try {
      await navigator.clipboard.writeText(`git clone ${cloneUrl}`);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Base pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
        
        {/* Code brackets pattern */}
        <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="coding-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M10 15 L0 25 L10 35" stroke="currentColor" fill="none" strokeWidth="2"/>
            <path d="M40 15 L50 25 L40 35" stroke="currentColor" fill="none" strokeWidth="2"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#coding-pattern)" />
        </svg>

        {/* Floating code symbols */}
        <div className="absolute inset-0">
          <svg className="absolute top-1/4 left-1/4 w-16 h-16 text-orange-500/10" viewBox="0 0 24 24">
            <path fill="currentColor" d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z" />
          </svg>
          
          <svg className="absolute top-3/4 right-1/4 w-20 h-20 text-orange-500/10" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,6A3,3 0 0,0 9,9A3,3 0 0,0 12,12A3,3 0 0,0 15,9A3,3 0 0,0 12,6M6,8.17A2.5,2.5 0 0,0 3.5,10.67A2.5,2.5 0 0,0 6,13.17C6.88,13.17 7.65,12.71 8.09,12.03C7.42,11.18 7,10.15 7,9C7,8.8 7,8.6 7.04,8.4C6.72,8.25 6.37,8.17 6,8.17M18,8.17C17.63,8.17 17.28,8.25 16.96,8.4C17,8.6 17,8.8 17,9C17,10.15 16.58,11.18 15.91,12.03C16.35,12.71 17.12,13.17 18,13.17A2.5,2.5 0 0,0 20.5,10.67A2.5,2.5 0 0,0 18,8.17M12,14C10,14 6,15 6,17V19H18V17C18,15 14,14 12,14M4.67,14.97C3,15.26 1,16.04 1,17.33V19H4V17C4,16.22 4.29,15.53 4.67,14.97M19.33,14.97C19.71,15.53 20,16.22 20,17V19H23V17.33C23,16.04 21,15.26 19.33,14.97Z" />
          </svg>

          <svg className="absolute bottom-1/4 left-1/3 w-24 h-24 text-orange-500/10" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z" />
          </svg>
        </div>

        {/* Gradient overlay */}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 mb-4">
            <Github size={20} />
            <span>Open Source</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            FreeAPI.app
            <span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your own API Hub to learn and master API interaction. Perfect for frontend, mobile, and backend developers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
          >
            {!isVideoPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm">
                <div 
                  className="cursor-pointer group"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center">
                      <PlayCircle size={40} className="text-white" />
                    </div>
                    <div className="absolute inset-0 bg-orange-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  </div>
                  <p className="text-white mt-4 text-center">Watch Project Overview</p>
                </div>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </motion.div>

          {/* Right Side - Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Stats */}
              <div className="flex gap-4 mb-8">
                <div className="flex items-center gap-2 text-gray-400">
                  <Star className="text-orange-500" size={18} />
                  <span>{project.stars} stars</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <GitFork className="text-orange-500" size={18} />
                  <span>{project.forks} forks</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                >
                  <Github size={20} />
                  View on GitHub
                </a>
                <button 
                  onClick={handleClone}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500/10 rounded-lg transition-colors relative"
                >
                  {showCopied ? <Check size={20} /> : <Code2 size={20} />}
                  {showCopied ? 'Copied!' : 'Clone Repository'}
                  {showCopied && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap"
                    >
                      Command copied to clipboard!
                    </motion.div>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}