import { investments } from "../../data/diasporaData";
import { Briefcase, TrendingUp, Calendar, MapPin, ArrowRight } from "lucide-react";

export function InvestmentOpportunities() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-deep-navy text-surface-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
             <Briefcase className="w-8 h-8 text-ndc-gold" /> Premium Investment Opportunities
          </h2>
          <p className="text-white/80 text-lg max-w-2xl">High-impact civic and commercial investment vehicles designed for diaspora capital to catalyze local economies.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {investments.map((inv) => (
             <div key={inv.title} className="bg-white/5 border border-white/20 backdrop-blur-md rounded-[1px] p-8 hover:bg-white/10 transition-colors group">
                <div className="flex justify-between items-start mb-6">
                   <h3 className="text-2xl font-bold text-ndc-gold">{inv.title}</h3>
                   <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-[1px] text-xs font-bold uppercase tracking-wider text-white">
                      {inv.status}
                   </span>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                   <div>
                      <p className="text-xs font-bold uppercase text-white/50 tracking-wider mb-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Target Goal</p>
                      <p className="text-xl font-bold">{inv.goal}</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold uppercase text-white/50 tracking-wider mb-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> Focus Area</p>
                      <p className="text-xl font-bold">{inv.constituency}</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold uppercase text-white/50 tracking-wider mb-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> Timeline</p>
                      <p className="text-xl font-bold">{inv.timeline}</p>
                   </div>
                   <div>
                      <p className="text-xs font-bold uppercase text-ndc-gold tracking-wider mb-1">Expected Impact</p>
                      <p className="text-lg font-bold text-white leading-tight">{inv.impact}</p>
                   </div>
                </div>

                <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                   <p className="text-sm text-white/60">Minimum investment applies. Terms and conditions available.</p>
                   <button className="bg-surface-white text-deep-navy px-6 py-2 rounded-[1px] font-bold hover:bg-ndc-gold transition-colors flex items-center gap-2">
                      Review Prospectus <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
