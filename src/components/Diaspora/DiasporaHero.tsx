import { motion } from "motion/react";
import { Users, Link as LinkIcon, Briefcase } from "lucide-react";
import { heroStats } from "../../data/diasporaData";
import { Link } from "react-router-dom";

export function DiasporaHero() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-black overflow-hidden hero-gradient text-white">
      <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain opacity-20 transform scale-110"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      {/* Animated connection lines simulation */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
           <path d="M 200 300 Q 400 100 600 300" stroke="#fcd116" strokeWidth="2" fill="none" opacity="0.5" />
           <path d="M 100 500 Q 500 200 800 500" stroke="#fcd116" strokeWidth="1" fill="none" opacity="0.3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
            >
              Connecting Ghanaians Worldwide to <span className="text-ndc-gold">National Development</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-xl"
            >
              Stay connected to your constituency, engage with elected representatives, support development projects, and contribute to Ghana's future from anywhere in the world.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="#join" className="px-6 py-3 bg-ndc-red hover:bg-red-700 text-white rounded-[1px] font-bold transition-colors flex items-center justify-center gap-2">
                <Users className="w-5 h-5" /> Join Diaspora Community
              </Link>
              <Link to="#constituency" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-[1px] font-bold transition-colors flex items-center justify-center gap-2">
                <LinkIcon className="w-5 h-5" /> Connect to Constituency
              </Link>
              <Link to="#projects" className="px-6 py-3 bg-transparent border border-ndc-gold text-ndc-gold hover:bg-ndc-gold/10 rounded-[1px] font-bold transition-colors flex items-center justify-center gap-2">
                 <Briefcase className="w-5 h-5" /> Explore Projects
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {heroStats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              key={stat.label}
              className="glass-card p-4 rounded-[1px] text-center hover:bg-white/10 transition-colors"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-1 text-ndc-gold">{stat.value}</h3>
              <p className="text-xs font-medium text-white/70 uppercase tracking-wider leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
