import { motion } from "motion/react";
import { projects } from "../../data/diasporaData";
import { ArrowRight, MapPin, Target, LayoutGrid } from "lucide-react";

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-deep-navy">Development Projects for Diaspora Support</h2>
            <p className="text-on-surface-variant text-lg">Directly fund and monitor community infrastructure and social projects.</p>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:underline">
             View All Needs <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
           {['All', 'Education', 'Healthcare', 'Water Projects', 'Youth Development', 'Agriculture', 'Community Infrastructure', 'Technology'].map((cat, i) => (
             <button key={cat} className={`px-4 py-2 rounded-[1px] whitespace-nowrap font-bold text-sm border transition-colors ${i === 0 ? 'bg-primary text-white border-primary' : 'bg-surface-white text-on-surface-variant border-outline-variant hover:border-primary/50'}`}>
                {cat}
             </button>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={project.name}
              className="bg-surface-white border border-outline-variant rounded-[1px] overflow-hidden shadow-sm group hover:shadow-sm transition-shadow flex flex-col"
            >
              <div className="h-48 relative overflow-hidden">
                 <img src={project.image} alt={project.name} className="w-full h-full object-cover  transition-transform duration-500" />
                 <div className="absolute top-4 right-4 bg-surface-white/90 backdrop-blur-sm px-3 py-1 rounded-[1px] text-xs font-bold text-primary shadow-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-[1px] bg-success"></span> {project.status}
                 </div>
                 <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-[1px] text-xs font-bold text-white uppercase tracking-wider">
                    {project.category}
                 </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                 <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                 <div className="flex items-center gap-1 text-sm text-on-surface-variant font-medium mb-6">
                    <MapPin className="w-4 h-4" /> {project.constituency}
                 </div>

                 <div className="mt-auto">
                    <div className="flex justify-between items-end mb-2">
                       <span className="text-sm font-bold text-on-surface">Funding Progress</span>
                       <span className="text-sm font-bold text-primary">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-surface-dim rounded-[1px] h-2 mb-4">
                       <div className="bg-primary h-2 rounded-[1px]" style={{ width: `${project.progress}%` }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center bg-surface-dim p-3 rounded-[1px] border border-outline-variant/50 mb-6">
                       <div className="flex items-center gap-2">
                          <Target className="w-5 h-5 text-ndc-gold" />
                          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Impact Score</span>
                       </div>
                       <span className="font-bold text-lg">{project.impactScore}</span>
                    </div>

                    <div className="flex gap-3">
                       <button className="flex-1 bg-ndc-red hover:bg-red-700 text-white font-bold py-2.5 rounded-[1px] transition-colors text-sm">
                          Support
                       </button>
                       <button className="flex-1 bg-surface-dim hover:bg-outline-variant text-on-surface font-bold py-2.5 rounded-[1px] border border-outline-variant transition-colors text-sm">
                          Details
                       </button>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
