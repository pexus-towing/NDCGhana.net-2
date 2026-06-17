import { Calendar, Video, MapPin, Users } from "lucide-react";

export function LiveEvents() {
  return (
    <section className="py-16 bg-[#004B2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
           <div className="lg:w-1/3">
              <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur rounded-[1px] text-xs font-bold tracking-wider mb-4 border border-white/20 uppercase">
                Upcoming Live Event
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold font-serif leading-tight mb-4">
                 National Policy Hackathon & Youth Townhall
              </h2>
              <p className="text-emerald-100 mb-8 leading-relaxed">
                 Join parliamentarians, policy experts, and youth leaders for a live interactive session on shaping the National Employment Framework. Live stream available.
              </p>
              
              <div className="space-y-4 mb-8 font-medium">
                 <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-emerald-400" /> Saturday, Nov 15 • 10:00 AM GMT
                 </div>
                 <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-emerald-400" /> ACCRA ICC & Virtual Stream
                 </div>
                 <div className="flex items-center gap-3 text-sm">
                    <Users className="w-5 h-5 text-emerald-400" /> 2,400+ already registered
                 </div>
              </div>

              <button className="w-full sm:w-auto px-8 py-3 bg-[#CE1126] hover:bg-[#A00D1D] text-white rounded-[1px] font-bold transition-colors shadow-sm">
                 Reserve Free Seat
              </button>
           </div>

           <div className="lg:w-2/3 w-full">
              <div className="bg-white/5 backdrop-blur-md rounded-[1px] border border-white/10 p-6 sm:p-8">
                 <div className="flex items-center gap-2 mb-6">
                    <span className="w-2 h-2 rounded-[1px] bg-emerald-500 animate-pulse"></span>
                    <h3 className="font-bold text-lg">Next Broadcast Starts In</h3>
                 </div>
                 
                 <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                    {[
                       { val: "12", label: "Days" },
                       { val: "08", label: "Hours" },
                       { val: "45", label: "Mins" },
                       { val: "22", label: "Secs" },
                    ].map((time, i) => (
                       <div key={i} className="bg-black/30 rounded-[1px] p-4 sm:p-6 backdrop-blur">
                          <div className="text-3xl sm:text-5xl font-mono font-bold text-white mb-2">{time.val}</div>
                          <div className="text-xs sm:text-sm font-bold text-emerald-300 uppercase tracking-widest">{time.label}</div>
                       </div>
                    ))}
                 </div>

                 <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-white/70">Will be broadcasted live on:</p>
                    <div className="flex gap-4">
                       <span className="flex items-center gap-1 text-sm font-bold"><Video className="w-4 h-4" /> Facebook Live</span>
                       <span className="flex items-center gap-1 text-sm font-bold"><Video className="w-4 h-4" /> YouTube</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
