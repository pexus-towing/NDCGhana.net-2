import { Search, Plus, MoreHorizontal } from "lucide-react";

export function AdminMPs() {
   const mps = [
      { name: "Hon. Samuel Okudzeto Ablakwa", constituency: "North Tongu", region: "Volta", attendance: "98%", score: "99", status: "Active" },
      { name: "Hon. Cassiel Ato Forson", constituency: "Ajumako Enyan Essiam", region: "Central", attendance: "95%", score: "94", status: "Active" },
      { name: "Hon. Haruna Iddrisu", constituency: "Tamale South", region: "Northern", attendance: "88%", score: "89", status: "Active" },
   ];

   return (
      <div className="space-y-6">
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
               <h2 className="text-2xl font-bold text-gray-900">MP Management Center</h2>
               <p className="text-gray-500">Oversee parliamentary profiles, attendance, and committee assignments.</p>
            </div>
            <button className="px-4 py-2 bg-[#006B3C] text-white rounded-[1px] text-sm font-semibold flex items-center gap-2 hover:bg-[#004B2B] shadow-sm transition-colors">
               <Plus className="w-4 h-4" /> Add MP Record
            </button>
         </div>

         <div className="bg-white rounded-[1px] border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
               <div className="relative w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <Search className="w-4 h-4 text-gray-400" />
                  </div>
                  <input type="text" placeholder="Search MPs..." className="w-full pl-9 pr-4 py-1.5 bg-white border border-gray-200 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/50" />
               </div>
               <button className="text-sm font-semibold text-gray-600 hover:text-gray-900">Filter</button>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead className="bg-white text-xs text-gray-500 font-semibold uppercase tracking-wider border-b border-gray-200">
                     <tr>
                        <th className="px-6 py-4">Representative</th>
                        <th className="px-6 py-4">Constituency</th>
                        <th className="px-6 py-4">Attendance</th>
                        <th className="px-6 py-4">Transparency Score</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4"></th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                     {mps.map((mp, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                           <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                 <div className="w-8 h-8 rounded-[1px] bg-gray-200"></div>
                                 <span className="font-bold text-gray-900 text-sm">{mp.name}</span>
                              </div>
                           </td>
                           <td className="px-6 py-4 text-sm text-gray-600">
                              {mp.constituency}<br/>
                              <span className="text-xs text-gray-400">{mp.region} Region</span>
                           </td>
                           <td className="px-6 py-4 text-sm font-medium text-gray-900">{mp.attendance}</td>
                           <td className="px-6 py-4 text-sm font-bold text-[#006B3C]">{mp.score}/100</td>
                           <td className="px-6 py-4 text-sm">
                              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-[1px] text-xs font-bold">{mp.status}</span>
                           </td>
                           <td className="px-6 py-4 text-right">
                              <button className="p-2 text-gray-400 hover:text-gray-900 rounded-[1px] hover:bg-gray-100 transition-colors">
                                 <MoreHorizontal className="w-5 h-5" />
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
