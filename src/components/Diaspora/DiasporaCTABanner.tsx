import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Globe, Heart, ArrowRight } from "lucide-react";

export function DiasporaCTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ndc-red text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
        >
          No Matter Where You Live, <br className="hidden md:block"/> <span className="text-ndc-gold">Ghana Is Home</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
        >
          Connect with your constituency, support development projects, engage with leaders, and help build a stronger future for Ghana.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="#join" className="w-full sm:w-auto px-8 py-4 bg-white text-ndc-red hover:bg-gray-100 rounded-[1px] font-bold transition-colors flex items-center justify-center gap-2">
             <Globe className="w-5 h-5" /> Join Diaspora Hub
          </Link>
          <Link to="#constituency" className="w-full sm:w-auto px-8 py-4 bg-black/20 hover:bg-black/30 border border-white/20 text-white rounded-[1px] font-bold transition-colors flex items-center justify-center gap-2">
             <ArrowRight className="w-5 h-5" /> Connect to Constituency
          </Link>
          <Link to="#projects" className="w-full sm:w-auto px-8 py-4 bg-black/20 hover:bg-black/30 border border-white/20 text-white rounded-[1px] font-bold transition-colors flex items-center justify-center gap-2">
             <Heart className="w-5 h-5" /> Support Development
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
