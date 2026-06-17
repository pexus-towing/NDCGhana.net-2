import { Search, Map, Layout, Target, FileText, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function SitemapHero() {
  return (
    <section className="bg-[#004B2B] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#006B3C] via-[#CE1126] to-[#006B3C]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-[1px] text-xs font-bold tracking-wider mb-6 border border-white/20 uppercase"
        >
          <Map className="w-4 h-4" /> Platform Directory
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-serif"
        >
          Sitemap & Navigation Directory
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Explore every section, tool, resource, and feature available across the Transparency & Civic Engagement Platform.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto relative"
        >
           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
             <Search className="w-6 h-6 text-gray-400 group-focus-within:text-[#006B3C]" />
           </div>
           <input 
             type="text" 
             placeholder="Search pages, MPs, projects, reports, resources..." 
             className="w-full pl-12 pr-6 py-5 bg-white border-none rounded-[1px] text-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/20 shadow-sm font-medium placeholder:font-normal placeholder:text-gray-400 transition-all"
           />
           <button className="absolute inset-y-2 right-2 px-6 bg-[#006B3C] hover:bg-[#004B2B] text-white font-bold rounded-[1px] transition-colors flex items-center gap-2">
             Search
           </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {[
            { label: "Browse MPs", icon: <Layout className="w-4 h-4" /> },
            { label: "Track Projects", icon: <Target className="w-4 h-4" /> },
            { label: "Explore Dashboard", icon: <Layout className="w-4 h-4" /> },
            { label: "Access Reports", icon: <FileText className="w-4 h-4" /> }
          ].map((action, i) => (
             <button key={i} className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-[1px] text-sm font-bold text-white transition-colors flex items-center gap-2">
                {action.icon} {action.label}
             </button>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
