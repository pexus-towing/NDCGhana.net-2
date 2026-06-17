import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const PHRASES = [
  "Leadership Through Transparency",
  "Good Governance and Patriotism",
  "Accountable Leadership and Progress",
  "National Development Through Participation",
  "Community Growth and Civic Action",
  "Democratic Engagement and Impact",
  "Responsible Leadership and Service",
  "Citizen Voices and National Progress",
  "Transparency, Trust, and Accountability",
  "Strong Communities and Shared Prosperity",
];

export default function RotatingHeadline() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <h1
      className="text-3xl sm:text-4xl lg:text-5xl leading-[1.4] font-bold tracking-tight min-h-[120px] sm:min-h-[100px] md:min-h-[140px] w-full pr-0 md:pr-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="text-white mr-2 lg:mr-3">Connecting Citizens to</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-white inline"
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </h1>
  );
}
