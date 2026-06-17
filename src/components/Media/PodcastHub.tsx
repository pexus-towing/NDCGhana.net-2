import { Headphones, PlayCircle, Download } from "lucide-react";

export function PodcastHub() {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-6 bg-[#006B3C]"></div>
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Podcast & Audio Hub</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
           <div className="bg-[#004B2B] rounded-[1px] p-8 lg:p-12 text-white relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                 <Headphones className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                 <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-[1px] text-xs font-bold uppercase tracking-wider mb-4 inline-block">Featured Series</span>
                 <h3 className="text-3xl font-bold font-serif mb-4 leading-tight">The Civic Discourse:<br/>Ghana's Policy Future</h3>
                 <p className="text-emerald-100 mb-8 max-w-md hidden sm:block">Deep-dive interviews with policymakers, MPs, and civic leaders discussing the legislative agenda and community impact.</p>
                 
                 <div className="bg-white/10 backdrop-blur border border-white/20 p-4 rounded-[1px] flex items-center justify-between gap-4 select-none">
                    <div className="flex items-center gap-4">
                       <button className="w-12 h-12 bg-white text-[#004B2B] rounded-[1px] flex items-center justify-center  transition-transform shrink-0">
                          <PlayCircle className="w-8 h-8" />
                       </button>
                       <div>
                          <p className="text-xs font-bold text-emerald-200 uppercase tracking-widest mb-0.5">EPISODE 42 • LATEST</p>
                          <p className="font-bold text-sm line-clamp-1">Analyzing the 2026 Fiscal Framework</p>
                       </div>
                    </div>
                    <div className="hidden sm:block text-xs font-medium text-emerald-200/50 pr-4">
                       45:20
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-2 mb-4">Recent Episodes</h3>
              {[
                 { ep: "41", title: "Constituency Focus: Educational Infrastructure", date: "Oct 15", dur: "38:12" },
                 { ep: "40", title: "Diaspora Investments in Local Markets", date: "Oct 08", dur: "52:45" },
                 { ep: "39", title: "Review of the Rural Electrification Act", date: "Oct 01", dur: "41:05" },
                 { ep: "38", title: "Women in Parliament: A 2025 Retrospective", date: "Sep 24", dur: "48:30" },
              ].map((pod, i) => (
                 <div key={i} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-[1px] hover:border-[#006B3C] hover:shadow-sm transition-all group">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-gray-100 rounded-[1px] flex items-center justify-center text-gray-500 group-hover:bg-emerald-50 group-hover:text-[#006B3C] transition-colors">
                          <span className="font-bold text-sm">EP{pod.ep}</span>
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900 text-sm md:text-base group-hover:text-[#006B3C] transition-colors">{pod.title}</h4>
                          <div className="text-xs text-gray-500 font-medium flex gap-2">
                             <span>{pod.date}</span>
                             <span>•</span>
                             <span>{pod.dur}</span>
                          </div>
                       </div>
                    </div>
                    <div className="flex items-center gap-2">
                       <button className="p-2 text-gray-400 hover:text-[#006B3C]"><PlayCircle className="w-5 h-5" /></button>
                       <button className="p-2 text-gray-400 hover:text-gray-900 hidden sm:block"><Download className="w-5 h-5" /></button>
                    </div>
                 </div>
              ))}
              <button className="text-sm font-bold text-[#006B3C] hover:underline pt-2">Browse All Episodes →</button>
           </div>
        </div>
      </div>
    </section>
  );
}
