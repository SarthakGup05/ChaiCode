import { motion } from 'framer-motion';

export function CodeDecoration({ className, variant = "default" }) {
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const variants = {
    default: [
      { path: "M10 80 L40 80 L40 110 L10 110 Z", className: "fill-orange-500/5" },
      { path: "M15 85 L35 85 M15 90 L30 90 M15 95 L25 95", className: "stroke-orange-500/20 stroke-[1]" },
      { path: "M60 20 L90 20 L90 50 L60 50 Z", className: "fill-orange-500/5" },
      { path: "M65 25 L85 25 M65 30 L80 30 M65 35 L75 35", className: "stroke-orange-500/20 stroke-[1]" }
    ],
    angular: [
      { path: "M20 20 L50 20 L35 50 Z", className: "fill-orange-500/5" },
      { path: "M25 25 L45 25 M30 30 L40 30", className: "stroke-orange-500/20 stroke-[1]" },
      { path: "M70 70 L100 70 L85 100 Z", className: "fill-orange-500/5" },
      { path: "M75 75 L95 75 M80 80 L90 80", className: "stroke-orange-500/20 stroke-[1]" }
    ],
    circular: [
      { path: "M30 30 A20 20 0 1 0 30 70 A20 20 0 1 0 30 30", className: "fill-orange-500/5" },
      { path: "M25 40 L35 40 M25 50 L35 50", className: "stroke-orange-500/20 stroke-[1]" },
      { path: "M70 70 A15 15 0 1 0 70 100 A15 15 0 1 0 70 70", className: "fill-orange-500/5" },
      { path: "M65 80 L75 80 M65 90 L75 90", className: "stroke-orange-500/20 stroke-[1]" }
    ],
    bracket: [
      { path: "M20 20 L40 20 L40 50 L20 50", className: "fill-none stroke-orange-500/20 stroke-[1]" },
      { path: "M25 25 L35 25 M25 30 L30 30", className: "stroke-orange-500/20 stroke-[1]" },
      { path: "M60 60 L80 60 L80 90 L60 90", className: "fill-none stroke-orange-500/20 stroke-[1]" },
      { path: "M65 65 L75 65 M65 70 L70 70", className: "stroke-orange-500/20 stroke-[1]" }
    ],
    hash: [
      { path: "M30 20 L30 50 M20 30 L50 30 M40 20 L40 50 M20 40 L50 40", className: "stroke-orange-500/20 stroke-[1]" },
      { path: "M70 60 L70 90 M60 70 L90 70 M80 60 L80 90 M60 80 L90 80", className: "stroke-orange-500/20 stroke-[1]" }
    ]
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.svg
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            width="120"
            height="120"
            viewBox="0 0 120 120"
            animate={floatingAnimation}
            transition={{
              delay: i * 0.2,
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
            }}
          >
            {variants[variant].map((item, index) => (
              <path key={index} d={item.path} className={item.className} />
            ))}
          </motion.svg>
        ))}
      </motion.div>
    </div>
  );
}