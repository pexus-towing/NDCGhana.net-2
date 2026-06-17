import { Search, Hash, Clock } from "lucide-react";

export function DiscoveryCenter() {
  const categories = ["MPs", "Constituencies", "Projects", "News", "Reports", "Events"];
  const trends = ["#Infrastructure", "#DigitalID", "#EducationReform", "#YouthEmpowerment", "#DiasporaFund"];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-6 bg-[#006B3C]"></div>
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Search & Discovery Center</h2>
        </div>

        <div className="bg-gray-50 rounded-[1px] border border-gray-200 p-8 lg:p-12">
           <div className="max-w-3xl mx-auto mb-10">
              <div className="relative group">
                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                   <Search className="w-6 h-6 text-gray-400 group-focus-within:text-[#006B3C] transition-colors" />
                 </div>
                 <input 
                   type="text" 
                   placeholder="Discover content across all categories..." 
                   className="w-full pl-12 pr-6 py-4 bg-white border border-gray-300 rounded-[1px] text-lg focus:outline-none focus:border-[#006B3C] focus:ring-4 focus:ring-[#006B3C]/10 transition-all font-medium placeholder:font-normal placeholder:text-gray-400 shadow-sm"
                 />
              </div>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              <div>
                 <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Search className="w-4 h-4 text-gray-400" /> Categories
                 </h3>
                 <div className="flex flex-wrap gap-2">
                    {categories.map((cat, i) => (
                       <button key={i} className="px-3 py-1.5 bg-white border border-gray-200 rounded-[1px] text-sm font-medium text-gray-700 hover:border-[#006B3C] hover:text-[#006B3C] transition-colors shadow-sm">
                          {cat}
                       </button>
                    ))}
                 </div>
              </div>

              <div>
                 <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" /> Recent Searches
                 </h3>
                 <ul className="space-y-2">
                    {['2025 National Budget Report', 'Top performing constituencies', 'Eastern region water projects'].map((item, i) => (
                       <li key={i} className="text-sm text-gray-600 hover:text-[#006B3C] cursor-pointer flex items-center gap-2">
                          <span className="w-1 h-1 bg-gray-300 rounded-[1px]"></span> {item}
                       </li>
                    ))}
                 </ul>
              </div>

              <div>
                 <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Hash className="w-4 h-4 text-[#CE1126]" /> Trending Topics
                 </h3>
                 <div className="flex flex-wrap gap-2">
                    {trends.map((tag, i) => (
                       <span key={i} className="px-2 py-1 bg-red-50 text-[#CE1126] text-xs font-bold rounded-[1px] cursor-pointer hover:bg-red-100 transition-colors">
                          {tag}
                       </span>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
