import { Plus, CheckSquare, Search, Filter } from "lucide-react";

export function AdminProjects() {
   const projects = [
      { name: "Kumasi Market Expansion", category: "Infrastructure", budget: "GH₵ 150M", progress: 85, status: "Ongoing", updated: "2 hrs ago" },
      { name: "Volta River Water System", category: "Utilities", budget: "GH₵ 42M", progress: 100, status: "Verification Pending", updated: "1 day ago" },
      { name: "Tamale North Clinic", category: "Healthcare", budget: "GH₵ 12M", progress: 40, status: "Delayed", updated: "3 days ago" },
      { name: "Cape Coast STEM School", category: "Education", budget: "GH₵ 25M", progress: 100, status: "Verified", updated: "1 week ago" }
   ];

   return (
      <div className="space-y-6">
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
               <h2 className="text-2xl font-bold text-gray-900">Project Management System</h2>
               <p className="text-gray-500">Track national development initiatives, budgets, and physical verification states.</p>
            </div>
            <button className="px-4 py-2 bg-[#006B3C] text-white rounded-[1px] text-sm font-semibold flex items-center gap-2 hover:bg-[#004B2B] shadow-sm transition-colors">
               <Plus className="w-4 h-4" /> Log New Project
            </button>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
               { title: "Total Tracked", val: 84 },
               { title: "Ongoing", val: 42 },
               { title: "Delayed", val: 5 },
               { title: "Verification Stack", val: 12 }
            ].map((st, i) => (
               <div key={i} className="bg-white p-5 rounded-[1px] border border-gray-200 shadow-sm">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{st.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{st.val}</p>
               </div>
            ))}
         </div>

         <div className="bg-white rounded-[1px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex gap-4 bg-gray-50">
               <div className="relative flex-1 max-w-sm">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="text" placeholder="Search projects..." className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-[1px] text-sm focus:ring-[#006B3C] focus:border-[#006B3C]" />
               </div>
               <button className="px-4 py-2 bg-white border border-gray-200 rounded-[1px] text-sm font-medium flex items-center gap-2 text-gray-700 hover:bg-gray-50">
                  <Filter className="w-4 h-4" /> Filter
               </button>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead className="bg-white text-xs text-gray-500 font-semibold uppercase tracking-wider border-b border-gray-200">
                     <tr>
                        <th className="px-6 py-4">Project Identity</th>
                        <th className="px-6 py-4">Budget Alloc.</th>
                        <th className="px-6 py-4">Progress State</th>
                        <th className="px-6 py-4">Status & Sync</th>
                        <th className="px-6 py-4 text-right">Actions</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                     {projects.map((proj, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                           <td className="px-6 py-4">
                              <p className="font-bold text-gray-900 text-sm mb-1">{proj.name}</p>
                              <p className="text-xs text-gray-500">{proj.category}</p>
                           </td>
                           <td className="px-6 py-4 text-sm font-medium text-gray-900">{proj.budget}</td>
                           <td className="px-6 py-4">
                              <div className="flex items-center justify-between text-xs font-bold mb-1">
                                 <span className="text-gray-700">{proj.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 h-1.5 rounded-[1px]">
                                 <div className="bg-[#006B3C] h-1.5 rounded-[1px]" style={{width: `${proj.progress}%`}}></div>
                              </div>
                           </td>
                           <td className="px-6 py-4">
                              <span className={`px-2 py-1 rounded-[1px] text-xs font-bold ${
                                 proj.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' :
                                 proj.status === 'Verification Pending' ? 'bg-amber-100 text-amber-800' :
                                 proj.status === 'Delayed' ? 'bg-red-100 text-red-800' :
                                 'bg-emerald-100 text-emerald-800'
                              }`}>{proj.status}</span>
                              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">{proj.updated}</p>
                           </td>
                           <td className="px-6 py-4 text-right">
                              <button className="px-3 py-1.5 border border-gray-200 rounded-[1px] shadow-sm text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                                 Manage
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
}
