import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Youtube, Instagram, Github, Twitter, Linkedin, Twitch } from 'lucide-react';
import gsap from 'gsap';

export default function ChaiCodeFooter() {
  const [footerRef, footerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const bigLogoRef = useRef(null);
  
  // GSAP animation for big logo
  useEffect(() => {
    if (footerInView && bigLogoRef.current) {
      gsap.fromTo(
        bigLogoRef.current,
        { 
          opacity: 0,
          scale: 0.9
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out"
        }
      );
    }
  }, [footerInView]);

  // Animation variants
  const footerItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };
  
  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: { 
        delay: 0.3 + (i * 0.1),
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    })
  };

  // Product links
  const products = [
    { name: "Courses", href: "#" },
    { name: "Cohort", href: "#" },
    { name: "Coding Hero", href: "#" },
    { name: "FreeAPI", href: "#" },
    { name: "Masterji", href: "#" }
  ];
  
  // Resource links
  const resources = [
    { name: "Docs", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Pricing Policy", href: "#" },
    { name: "Refund Policy", href: "#" }
  ];
  
  // Social icons
  const socialIcons = [
    { icon: <Youtube size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Github size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Twitch size={20} />, href: "#" }
  ];

  const socialLinks = [
    { name: "Youtube", href: "#", icon: Youtube },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Github", href: "#", icon: Github },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Linkedin", href: "#", icon: Linkedin },
    { name: "Twitch", href: "#", icon: Twitch }
  ];

  const footerLinks = [
    {
      title: "Products",
      links: products
    },
    {
      title: "Resources",
      links: resources
    }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Pricing Policy", href: "#" },
    { name: "Refund Policy", href: "#" }
  ];

  return (
    <div ref={footerRef} className="bg-black text-white overflow-hidden">
      {/* Main Footer Content */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="space-y-4">
              <img src="/assets/chaicode-white.svg" alt="ChaiCode" className="h-8 w-auto" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Building the future of tech education through community-driven learning and real-world projects.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="sr-only">{social.name}</span>
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-white font-medium">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center group"
                      >
                        {link.name}
                        <svg
                          className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ChaiCode. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Big Logo */}
      <div ref={bigLogoRef} className="relative py-24 overflow-hidden bg-black">
        {/* Background gradients and effects */}
        <div className="absolute inset-0">
          {/* Background text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <h1 className="text-[180px] md:text-[280px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-400/30 via-orange-500/30 to-orange-600/30 tracking-tighter leading-none">
              CHAICODE
            </h1>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.15),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          
          {/* Animated gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] animate-slow-spin">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent,rgba(251,146,60,0.05)_90deg,transparent_180deg)] blur-xl"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={footerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Main logo */}
            <motion.img 
              src="/assets/chaicode-white.svg" 
              alt="ChaiCode"
              className="h-24 md:h-32 w-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            
            {/* Decorative elements */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16">
              <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping"></div>
              <div className="relative w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-lg shadow-orange-500/30">
                <div className="absolute inset-1 bg-orange-200 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-xl text-gray-400 font-light tracking-wide text-center"
          >
            Brewing Excellence in Code
          </motion.p>
        </div>
      </div>
    </div>
  );
}