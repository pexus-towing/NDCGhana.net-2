import { BookOpen, Scale, FileText, Headphones, Users, Landmark } from "lucide-react";

export function ResourceCenter() {
  const resources = [
    { title: "Voting & Registration Info", desc: "Guidelines for diaspora registration and participation.", icon: FileText },
    { title: "Citizenship Services", desc: "Dual citizenship processing and consular services updates.", icon: Scale },
    { title: "Embassy Directory", desc: "Contact details for all Ghanaian high commissions worldwide.", icon: Landmark },
    { title: "Investment Frameworks", desc: "Legal guides for remitting capital for development ventures.", icon: BookOpen },
    { title: "Community Leader Directory", desc: "Find regional chapter heads and organizers.", icon: Users },
    { title: "Support & Help Desk", desc: "Direct channel for platform or connectivity issues.", icon: Headphones },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-dim">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Diaspora Resource Center</h2>
          <p className="text-on-surface-variant text-lg">Essential information, directories, and legal frameworks to help you stay engaged and compliant.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {resources.map((res) => {
             const Icon = res.icon;
             return (
                <div key={res.title} className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm hover:shadow-sm hover:border-primary/50 transition-all group">
                   <div className="w-12 h-12 bg-surface-dim group-hover:bg-primary/10 text-on-surface-variant group-hover:text-primary rounded-[1px] flex items-center justify-center mb-4 transition-colors">
                      <Icon className="w-6 h-6" />
                   </div>
                   <h3 className="font-bold text-lg mb-2">{res.title}</h3>
                   <p className="text-sm text-on-surface-variant">{res.desc}</p>
                </div>
             )
          })}
        </div>
        
        <div className="text-center">
           <button className="px-8 py-3 bg-primary hover:bg-royal-blue text-white rounded-[1px] font-bold transition-colors">
              Explore All Resources
           </button>
        </div>
      </div>
    </section>
  );
}
