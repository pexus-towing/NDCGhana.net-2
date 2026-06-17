import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart2, CheckCircle } from "lucide-react";

export function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
        >
          Every Voice Matters. <br className="hidden md:block"/> <span className="text-ndc-gold">Every Community Counts.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto"
        >
          Join a growing network of citizens working together to strengthen transparency, accountability, and national development across Ghana.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/diaspora" className="w-full sm:w-auto px-8 py-4 bg-ndc-red hover:bg-red-700 text-white rounded-[1px] font-bold transition-colors flex items-center justify-center gap-2">
             Join the Diaspora Hub <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-[1px] font-bold transition-colors flex items-center justify-center gap-2">
             <BarChart2 className="w-5 h-5" /> Explore Dashboard
          </Link>
          <Link to="/media" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-[1px] font-bold transition-colors flex items-center justify-center gap-2">
             <CheckCircle className="w-5 h-5" /> Media Center
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
