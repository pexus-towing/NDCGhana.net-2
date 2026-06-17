import { newsReports } from "../../data/diasporaData";
import { Newspaper, Bell, BookmarkPlus } from "lucide-react";

export function NewsCenter() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        
        <div className="lg:w-2/3">
           <div className="mb-8 flex items-center gap-3">
              <Newspaper className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">News & Updates From Home</h2>
           </div>
           
           <div className="space-y-6">
              {newsReports.map((news) => (
                 <div key={news.title} className="bg-surface-white border border-outline-variant p-6 rounded-[1px] hover:border-primary/40 transition-colors shadow-sm flex items-start justify-between group">
                    <div>
                       <div className="flex items-center gap-3 mb-2 text-xs font-bold uppercase tracking-wider">
                          <span className="text-ndc-red">{news.category}</span>
                          <span className="text-outline">|</span>
                          <span className="text-on-surface-variant">{news.date}</span>
                       </div>
                       <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">{news.title}</h3>
                    </div>
                    <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/10 rounded-[1px] transition-colors">
                       <BookmarkPlus className="w-5 h-5" />
                    </button>
                 </div>
              ))}
              <button className="w-full py-3 bg-surface-dim hover:bg-outline-variant text-on-surface font-bold rounded-[1px] transition-colors border border-outline-variant text-sm flex items-center justify-center gap-2">
                 Load More Updates
              </button>
           </div>
        </div>

        <div className="lg:w-1/3">
           <div className="bg-surface-white border border-outline-variant rounded-[1px] p-8 shadow-sm">
              <div className="w-12 h-12 bg-ndc-gold/20 text-ndc-gold rounded-[1px] flex items-center justify-center mb-6">
                 <Bell className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Feed</h3>
              <p className="text-sm text-on-surface-variant mb-6">Subscribe to receive targeted updates regarding your constituency, national policy changes, or specific project milestones.</p>
              
              <div className="space-y-3 mb-8">
                 {['My Constituency News', 'Parliamentary Updates', 'Investment Alerts', 'Diaspora Events'].map(pref => (
                    <label key={pref} className="flex items-center gap-3 p-3 border border-outline-variant rounded-[1px] cursor-pointer hover:bg-surface-dim transition-colors">
                       <input type="checkbox" className="w-4 h-4 text-primary focus:ring-primary rounded-[1px] border-outline-variant" defaultChecked />
                       <span className="text-sm font-medium">{pref}</span>
                    </label>
                 ))}
              </div>
              
              <button className="w-full bg-primary hover:bg-royal-blue text-white font-bold py-3 rounded-[1px] transition-colors">
                 Save Preferences
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}
