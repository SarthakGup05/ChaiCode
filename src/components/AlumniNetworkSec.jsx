import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Network, Briefcase, ArrowRight, Code2, Database, Cloud, Cpu, Server } from "lucide-react";

const AnimatedBeam = () => {
  const [beamPosition, setBeamPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBeamPosition((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute h-1.5 bg-gradient-to-r from-orange-500 to-blue-500"
        style={{
          width: "300px",
          top: `${Math.sin(beamPosition * 0.1) * 200 + 250}px`,
          left: `${beamPosition}%`,
          transform: "translateX(-50%) rotate(30deg)",
          filter: "blur(8px)",
          opacity: 0.5
        }}
      />
      <div
        className="absolute h-1.5 bg-gradient-to-r from-blue-500 to-orange-500"
        style={{
          width: "250px",
          top: `${Math.cos(beamPosition * 0.1) * 180 + 200}px`,
          left: `${(beamPosition + 30) % 100}%`,
          transform: "translateX(-50%) rotate(-20deg)",
          filter: "blur(6px)",
          opacity: 0.4
        }}
      />
      <div
        className="absolute h-1 bg-gradient-to-r from-orange-400 to-blue-400"
        style={{
          width: "200px",
          top: `${Math.sin(beamPosition * 0.15) * 150 + 300}px`,
          left: `${(beamPosition + 60) % 100}%`,
          transform: "translateX(-50%) rotate(15deg)",
          filter: "blur(4px)",
          opacity: 0.3
        }}
      />
    </div>
  );
};

const CircleConnector = ({ circles }) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {circles.map((circle1, i) =>
        circles.slice(i + 1).map((circle2, j) => {
          const distance = Math.hypot(
            (circle1.left - circle2.left) * 4,
            (circle1.top - circle2.top) * 2.5
          );
          return distance < 250 ? (
            <line
              key={`${i}-${j}`}
              x1={`${circle1.left}%`}
              y1={`${circle1.top}%`}
              x2={`${circle2.left}%`}
              y2={`${circle2.top}%`}
              stroke={`url(#gradient-${i}-${j})`}
              strokeWidth="1"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.4;0.7;0.4"
                dur="4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="strokeWidth"
                values="1;1.5;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </line>
          ) : null;
        })
      )}
      <defs>
        {circles.map((_, i) =>
          circles.slice(i + 1).map((_, j) => (
            <linearGradient
              key={`gradient-${i}-${j}`}
              id={`gradient-${i}-${j}`}
            >
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
          ))
        )}
      </defs>
    </svg>
  );
};

const StudentCircle = ({ size, color, top, left, delay, icon }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: [0, Math.random() * 20 - 10], // Reduced movement range
      y: [0, Math.random() * 20 - 10], // Reduced movement range
      scale: [1, 1.03, 1], // Subtler scale animation
      transition: {
        duration: 3, // Slightly faster animation
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: Math.random() * 1.5,
      },
    });
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className={`absolute rounded-full overflow-hidden transition-all duration-300 border ${
        color === "orange" ? "border-orange-500/60" : "border-blue-500/60"
      } backdrop-blur-sm`}
      style={{
        width: `clamp(${size * 0.6}px, ${size * 0.8}px, ${size}px)`,
        height: `clamp(${size * 0.6}px, ${size * 0.8}px, ${size}px)`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: 1,
        boxShadow: `0 0 20px ${  // Reduced shadow size
          color === "orange"
            ? "rgba(249, 115, 22, 0.3)"
            : "rgba(59, 130, 246, 0.3)"
        }`,
        background: `radial-gradient(circle at center, ${
          color === "orange"
            ? "rgba(249, 115, 22, 0.12)"
            : "rgba(59, 130, 246, 0.12)"
        } 0%, transparent 70%)`,
      }}
    >
      <div 
        className={`w-full h-full backdrop-blur-sm bg-gray-800/30 flex items-center justify-center ${
          color === "orange" ? "text-orange-500" : "text-blue-500"
        } relative`}
      >
        <div className="absolute inset-0 animate-pulse opacity-20 bg-gradient-to-r from-transparent via-current to-transparent" />
        <div className="sm:scale-100 scale-75">
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

export default function AlumniNetworkSection() {
  const circles = [
    { size: 80, color: "orange", top: 15, left: 20, delay: 0, icon: <Code2 className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
    { size: 90, color: "blue", top: 35, left: 55, delay: 0.2, icon: <Database className="w-7 h-7 sm:w-12 sm:h-12 md:w-14 md:h-14" /> },
    { size: 85, color: "orange", top: 60, left: 25, delay: 0.4, icon: <Cloud className="w-6 h-6 sm:w-11 sm:h-11 md:w-13 md:h-13" /> },
    { size: 75, color: "blue", top: 70, left: 65, delay: 0.6, icon: <Cpu className="w-5 h-5 sm:w-9 sm:h-9 md:w-11 md:h-11" /> },
    { size: 80, color: "blue", top: 85, left: 85, delay: 1.4, icon: <Server className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  ];

  return (
    <div className="bg-gray-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="relative min-h-[400px] sm:min-h-[700px] bg-gray-850 rounded-2xl overflow-hidden border border-gray-800">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5" />
              <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-orange-500/3 via-transparent to-blue-500/3" />
            </div>
            <AnimatedBeam />
            <CircleConnector circles={circles} />
            {circles.map((circle, index) => (
              <StudentCircle key={index} {...circle} />
            ))}
          </div>
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
              <Network className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Alumni Network and Job Listings
              </h2>
            </div>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
            <p className="text-gray-300 text-base sm:text-lg">
              The alumni Network that you always wished for in your college. We
              have a dedicated platform where students get to know each other,
              do projects, make agencies and join Hackathons.
            </p>
            <p className="text-gray-300 text-base sm:text-lg">
              Our HR team also post regular job updates that you can apply
              directly whenever you are ready
            </p>
            <div className="bg-gray-800 rounded-lg p-2 sm:p-3 font-mono text-xs sm:text-sm text-orange-400 border-l-4 border-orange-500 mt-2 sm:mt-4">
              <code>/* connect.alumni.network() */</code>
            </div>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:translate-y-[-2px]">
                <span>Join Network</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="px-4 sm:px-6 py-2.5 sm:py-3 bg-transparent hover:bg-gray-800 text-orange-500 border border-orange-500 font-medium rounded-md transition-all duration-300 flex items-center justify-center space-x-2">
                <Briefcase className="h-4 w-4" />
                <span>View Jobs</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}