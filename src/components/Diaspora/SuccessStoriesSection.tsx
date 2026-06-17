import { motion } from "motion/react";
import { successStories } from "../../data/diasporaData";
import { Quote } from "lucide-react";

export function SuccessStoriesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-navy">Diaspora Success Stories</h2>
          <p className="text-on-surface-variant text-lg">Real examples of how global contributions are transforming communities on the ground.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {successStories.map((story, idx) => (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               key={story.title} 
               className="group cursor-pointer"
             >
                <div className="relative h-64 md:h-80 rounded-[1px] overflow-hidden shadow-sm mb-6">
                   <img src={story.image} alt={story.title} className="w-full h-full object-cover  transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                   <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="px-3 py-1 bg-ndc-red rounded-[1px] text-xs font-bold uppercase tracking-wider mb-3 inline-block">Impact Realized</span>
                      <h3 className="text-2xl font-bold leading-tight">{story.title}</h3>
                   </div>
                </div>
                
                <div className="bg-surface-white border border-outline-variant p-6 rounded-[1px] relative shadow-sm">
                   <div className="absolute -top-4 right-6 w-8 h-8 bg-ndc-gold rounded-[1px] flex items-center justify-center text-deep-navy">
                      <Quote className="w-4 h-4" />
                   </div>
                   <p className="font-bold text-lg text-primary mb-2">{story.impact}</p>
                   <p className="text-sm font-medium text-on-surface-variant uppercase tracking-wider">Funded By: {story.contributor}</p>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
