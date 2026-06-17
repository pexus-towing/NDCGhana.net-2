import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function SuccessStories() {
  const stories = [
    {
      title: "Citizens Secure New Water Borehole App",
      category: "Project Monitoring",
      impact: "1,200 residents impacted",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
      desc: "Through active tracking and reporting on the platform, the community of Ketu South fast-tracked their delayed project."
    },
    {
      title: "Diaspora Fund Raises $20K for School",
      category: "Diaspora Initiative",
      impact: "3 schools renovated",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
      desc: "Community members in the UK and Canada collaborated to support educational infrastructure in the Ashanti region."
    },
    {
      title: "Town Hall Feedback Drives Policy Change",
      category: "Civic Engagement",
      impact: "Policy review initiated",
      image: "https://images.unsplash.com/photo-1541872522137-b643a6d71ec9?q=80&w=600&auto=format&fit=crop",
      desc: "Over 500 citizens participated in a virtual town hall, providing crucial feedback that led to actionable policy reviews."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Success Stories & Highlights</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">Discover how community action translates into real-world impact.</p>
        </div>
        <button className="whitespace-nowrap px-6 py-2 bg-transparent text-primary hover:bg-surface-dim font-bold border border-primary/20 rounded-[1px] transition-colors flex items-center gap-2">
          View All Stories <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={story.title} 
            className="bg-surface-white border border-outline-variant rounded-[1px] overflow-hidden shadow-sm group cursor-pointer hover:shadow-sm transition-shadow flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>
              <img src={story.image} alt={story.title} className="w-full h-full object-cover  transition-transform duration-500" />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-2 py-1 bg-primary text-white text-xs font-bold rounded-[1px] uppercase tracking-wider">{story.category}</span>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">{story.title}</h3>
              <p className="text-on-surface-variant text-sm mb-4 flex-grow">{story.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                 <div className="text-sm font-bold text-success bg-success/10 px-3 py-1 rounded-[1px]">{story.impact}</div>
                 <ArrowRight className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
