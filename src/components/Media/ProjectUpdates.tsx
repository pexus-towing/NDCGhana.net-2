import { MapPin, Activity, CheckCircle2 } from "lucide-react";

export function ProjectUpdates() {
  const projects = [
    { title: "Tema Motorway Extension Phase 2", location: "Greater Accra Region", progress: 65, status: "Active Construction", updated: "3 days ago", type: "Infrastructure" },
    { title: "Bono East District Hospital", location: "Techiman, Bono East", progress: 90, status: "Final Finishing", updated: "1 week ago", type: "Healthcare" },
    { title: "Rural Electrification Project - Phase IV", location: "Northern Region", progress: 100, status: "Completed & Commissioned", updated: "2 weeks ago", type: "Energy" },
    { title: "Cape Coast STEM High School", location: "Central Region", progress: 25, status: "Foundation Work", updated: "4 days ago", type: "Education" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-6 bg-blue-600"></div>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Project Updates</h2>
          </div>
          <button className="text-blue-600 font-bold hover:underline text-sm hidden sm:block">View Project Tracker →</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="bg-white border text-left border-gray-200 rounded-[1px] overflow-hidden hover:shadow-sm transition-shadow flex flex-col group cursor-pointer">
               <div className="h-32 bg-gray-100 p-4 flex flex-col justify-between relative overflow-hidden group-hover:bg-blue-50 transition-colors">
                  <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
                     <Activity className="w-24 h-24" />
                  </div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-[1px] w-max border border-blue-200 uppercase tracking-wider">{proj.type}</span>
               </div>
               <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{proj.title}</h3>
                  <p className="text-xs text-gray-500 font-medium flex items-center gap-1 mb-4"><MapPin className="w-3 h-3" /> {proj.location}</p>
                  
                  <div className="mt-auto">
                     <div className="flex justify-between text-xs font-bold mb-1">
                        <span className="text-gray-700">{proj.status}</span>
                        <span className={proj.progress === 100 ? "text-emerald-600" : "text-blue-600"}>{proj.progress}%</span>
                     </div>
                     <div className="w-full bg-gray-100 h-1.5 rounded-[1px] overflow-hidden">
                        <div className={`h-full rounded-[1px] ${proj.progress === 100 ? 'bg-emerald-500' : 'bg-blue-600'}`} style={{width: `${proj.progress}%`}}></div>
                     </div>
                     <div className="mt-4 flex items-center justify-between text-xs text-gray-500 font-medium">
                        <span>Updated: {proj.updated}</span>
                        {proj.progress === 100 && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                     </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
