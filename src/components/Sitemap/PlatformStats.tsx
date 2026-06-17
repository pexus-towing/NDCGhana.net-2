import { FileText, Users, Target, Activity, Calendar, Globe } from "lucide-react";

export function PlatformStats() {
  const stats = [
    { label: "Total Pages", value: "1,240+", icon: FileText, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "MPs Listed", value: "184", icon: Users, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Projects Tracked", value: "3,850", icon: Target, color: "text-indigo-500", bg: "bg-indigo-50" },
    { label: "Reports Published", value: "450+", icon: Activity, color: "text-red-500", bg: "bg-red-50" },
    { label: "Events Hosted", value: "215", icon: Calendar, color: "text-purple-500", bg: "bg-purple-50" },
    { label: "Community Members", value: "25k+", icon: Globe, color: "text-orange-500", bg: "bg-orange-50" }
  ];

  return (
    <section className="py-16 bg-[#004B2B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white font-serif mb-4">Platform Infrastructure at a Glance</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto">Explore the scale of the Transparency & Civic Engagement Platform directory.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-[1px] p-6 border border-white/20 text-center hover:bg-white/20 transition-colors group cursor-default">
                 <div className={`w-12 h-12 mx-auto rounded-[1px] ${stat.bg} ${stat.color} flex items-center justify-center mb-4 shadow-sm  transition-transform`}>
                    <stat.icon className="w-5 h-5" />
                 </div>
                 <div className="text-2xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                 <div className="text-xs font-bold text-emerald-200 uppercase tracking-widest">{stat.label}</div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
