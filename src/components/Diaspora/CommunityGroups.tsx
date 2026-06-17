import { communityGroups } from "../../data/diasporaData";
import { Users, Filter, Plus, Activity } from "lucide-react";

export function CommunityGroups() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Diaspora Community Networks</h2>
            <p className="text-on-surface-variant text-lg">Join specialized networks based on location, profession, or passion to collaborate with like-minded Ghanaians abroad.</p>
          </div>
          <div className="flex gap-3 whitespace-nowrap">
            <button className="px-4 py-2 bg-surface-white border border-outline-variant text-on-surface hover:bg-surface-dim rounded-[1px] font-bold text-sm tracking-wide flex items-center gap-2 transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="px-4 py-2 bg-ndc-red hover:bg-red-700 text-white rounded-[1px] font-bold text-sm tracking-wide flex items-center gap-2 transition-colors">
              <Plus className="w-4 h-4" /> Start a Group
            </button>
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
           {['All Groups', 'Country-Based', 'Professional Networks', 'Youth Networks', 'Women in Diaspora', 'Entrepreneurs', 'Development Groups'].map((cat, i) => (
             <button key={cat} className={`px-5 py-2.5 rounded-[1px] whitespace-nowrap font-bold text-sm transition-colors ${i === 0 ? 'bg-deep-navy text-white' : 'bg-surface-dim text-on-surface-variant hover:bg-outline-variant/50'}`}>
                {cat}
             </button>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityGroups.map((group) => (
             <div key={group.name} className="bg-surface-white border border-outline-variant rounded-[1px] p-6 shadow-sm hover:border-primary/40 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                   <div className="w-12 h-12 rounded-[1px] bg-surface-dim border border-outline-variant flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <Users className="w-6 h-6" />
                   </div>
                   <span className="px-2.5 py-1 bg-surface-dim text-on-surface-variant text-xs font-bold rounded-[1px] uppercase tracking-wider">{group.category}</span>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{group.name}</h3>
                <div className="flex items-center gap-4 text-sm font-medium text-on-surface-variant mb-6">
                   <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {group.members} Members</span>
                   <span className="flex items-center gap-1 text-success"><Activity className="w-4 h-4" /> {group.active}</span>
                </div>
                <button className="w-full py-2.5 bg-surface-dim hover:bg-outline-variant border border-outline-variant rounded-[1px] font-bold text-sm transition-colors text-primary">
                   View Network
                </button>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
