import { ArrowRight, Play, FileText, Activity } from "lucide-react";
import { motion } from "motion/react";

export function MediaHero() {
  return (
    <section className="bg-[#004B2B] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#006B3C] via-[#CE1126] to-[#006B3C]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-[1px] text-xs font-bold tracking-wider mb-6 border border-white/20 uppercase"
          >
            Official Media Center
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-serif"
          >
            Media Center & Public Information Hub
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl mb-8 max-w-xl"
          >
            Stay informed with the latest parliamentary updates, constituency developments, project reports, official announcements, and community stories from across Ghana.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-6 py-3 bg-[#CE1126] hover:bg-[#A00D1D] text-white rounded-[1px] font-bold transition-colors flex items-center gap-2">
              Latest News <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-[1px] font-bold transition-colors flex items-center gap-2">
              <Play className="w-4 h-4" /> Watch Videos
            </button>
            <button className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-[1px] font-bold transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" /> Download Reports
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1px] p-6"
        >
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#CE1126]" /> Breaking Update
            </h3>
            <span className="text-xs font-bold px-2 py-1 bg-[#CE1126] rounded-[1px] text-white animate-pulse">LIVE</span>
          </div>
          <div className="aspect-video bg-black/40 rounded-[1px] mb-4 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <p className="font-bold text-lg leading-tight">Parliament Passes Historic Digital Identity Bill 2026</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
              <div className="w-12 h-12 bg-[#CE1126] rounded-[1px] flex items-center justify-center pl-1">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <div className="bg-black/20 rounded-[1px] p-3 overflow-hidden whitespace-nowrap">
            <div className="animate-[marquee_20s_linear_infinite] inline-block text-sm font-medium text-white/80">
              <span className="text-[#CE1126] font-bold mx-2">TICKER »</span> Minority leader addresses the press on economic reform <span className="text-[#CE1126] font-bold mx-2">»</span> Kumasi infrastructure project reaches 80% completion <span className="text-[#CE1126] font-bold mx-2">»</span> National Health Scheme budget increased by 15%
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Articles Published", value: "8,401" },
          { label: "Videos Uploaded", value: "1,240" },
          { label: "Reports Available", value: "352" },
          { label: "Monthly Readers", value: "1.2M+" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-xs font-medium text-white/60 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
