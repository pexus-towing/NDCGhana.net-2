import { Play, Clock } from "lucide-react";

export function VideoCenter() {
  const videos = [
    { title: "Minority Press Briefing on Electoral Reforms", duration: "45:20", views: "12k", date: "Oct 24, 2025" },
    { title: "Townhall Meeting: Techiman North", duration: "1:20:00", views: "5.4k", date: "Oct 22, 2025" },
    { title: "Highlights: State of the Economy Debate", duration: "15:40", views: "34k", date: "Oct 18, 2025" },
    { title: "Documentary: Voices of the Diaspora", duration: "28:15", views: "8.9k", date: "Oct 10, 2025" }
  ];

  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-6 bg-[#CE1126]"></div>
          <h2 className="text-3xl font-bold font-serif">Video Center</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 group cursor-pointer relative rounded-[1px] overflow-hidden bg-black/50 aspect-video lg:aspect-auto border border-zinc-700/50">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#CE1126] rounded-[1px] flex items-center justify-center pl-1  transition-transform">
                   <Play className="w-8 h-8 text-white" />
                </div>
             </div>
             <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-[1px] mb-3 inline-block uppercase tracking-wider">Live Stream Archive</span>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight font-serif mb-2">National Townhall: The Future of Ghana's Digital Economy</h3>
                <div className="flex items-center gap-4 text-sm text-zinc-400 font-medium font-sans">
                   <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 2:45:00</span>
                   <span>•</span>
                   <span>145k views</span>
                   <span>•</span>
                   <span>Streamed 2 days ago</span>
                </div>
             </div>
          </div>

          <div className="space-y-4 flex flex-col">
             <h3 className="font-bold text-lg text-zinc-100 mb-2 uppercase tracking-wider text-sm">Up Next</h3>
             <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                {videos.map((vid, i) => (
                   <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-32 aspect-video bg-zinc-800 rounded-[1px] relative overflow-hidden shrink-0 border border-zinc-700/50">
                         <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                            <Play className="w-6 h-6 text-white" />
                         </div>
                         <div className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 rounded-[1px] text-[10px] font-bold">
                            {vid.duration}
                         </div>
                      </div>
                      <div className="flex flex-col py-1">
                         <h4 className="font-bold text-sm text-zinc-200 group-hover:text-white line-clamp-2 leading-tight mb-1">{vid.title}</h4>
                         <div className="text-xs text-zinc-500 font-medium mt-auto">
                            {vid.views} views • {vid.date}
                         </div>
                      </div>
                   </div>
                ))}
             </div>
             <button className="w-full mt-4 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-[1px] transition-colors border border-zinc-700">
                View All Videos
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
