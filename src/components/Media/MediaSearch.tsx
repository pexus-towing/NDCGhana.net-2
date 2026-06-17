import { Search, Hash, History } from "lucide-react";

export function MediaSearch() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 font-serif mb-4">Deep Archive Search</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">Explore thousands of indexed articles, videos, documents, and statements from our centralized intelligence repository.</p>
        
        <div className="relative group max-w-2xl mx-auto">
           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
             <Search className="w-6 h-6 text-gray-400 group-focus-within:text-[#006B3C] transition-colors" />
           </div>
           <input 
             type="text" 
             placeholder="Search by keyword, MP name, topic or date..." 
             className="w-full pl-12 pr-32 py-4 bg-gray-50 border-2 border-gray-200 rounded-[1px] text-lg focus:outline-none focus:bg-white focus:border-[#006B3C] focus:ring-4 focus:ring-[#006B3C]/10 transition-all font-medium placeholder:font-normal placeholder:text-gray-400"
           />
           <div className="absolute inset-y-2 right-2 flex">
             <button className="px-6 py-2 bg-[#006B3C] text-white font-bold rounded-[1px] shadow-sm hover:bg-[#004B2B] transition-colors">
               Search
             </button>
           </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
           <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center mr-2">
                 <History className="w-4 h-4 mr-1" /> Recent Searches:
              </span>
              {['2025 Budget', 'Education Reforms', 'Healthcare Subsidies'].map((s, i) => (
                 <span key={i} className="text-xs font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-[1px] cursor-pointer hover:bg-gray-200">{s}</span>
              ))}
           </div>
           <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center mr-2">
                 <Hash className="w-4 h-4 mr-1" /> Trending Topics:
              </span>
              {['#Infrastructure', '#YouthEmpowerment', '#DigitalID'].map((s, i) => (
                 <span key={i} className="text-xs font-bold text-[#CE1126] bg-red-50 px-2 py-1 rounded-[1px] cursor-pointer hover:bg-red-100">{s}</span>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
