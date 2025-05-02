import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LaptopYoutubeEmbed = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Transform values based on scroll position
  const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  
  const handlePlayClick = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-20 px-4">
      {/* Laptop Frame */}
      <motion.div 
        className="max-w-4xl w-full"
        style={{ scale, opacity }}
      >
        {/* Laptop Body */}
        <div className="bg-gray-800 rounded-t-xl pt-2 px-2">
          <div className="bg-black rounded-t-lg overflow-hidden">
            {/* YouTube Video */}
            <div className="aspect-video relative">
              <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                {isVideoLoaded ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg cursor-pointer hover:bg-red-600"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handlePlayClick}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                      </svg>
                    </motion.div>
                    <p className="text-white mt-4 font-medium">Click to Play Video</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Base */}
        <div className="bg-gray-700 rounded-b-lg h-4"></div>
        <div className="bg-gray-800 h-2 mx-auto rounded-b-xl w-1/3"></div>
      </motion.div>
    </div>
  );
};

export default LaptopYoutubeEmbed;