import { ShieldAlert, CheckCircle, XCircle, Search } from "lucide-react";

export function AdminVerification() {
   const reports = [
      { id: "REP-492", type: "Citizen Media", subject: "Borehole Construction Photo", status: "Pending", user: "KwasiD_99" },
      { id: "REP-491", type: "Official Doc", subject: "Q3 Expenditure Report", status: "Pending", user: "MP_Office_Ashanti" },
      { id: "REP-490", type: "Identity", subject: "Diaspora Membership ID", status: "Verified", user: "Abena.O" },
      { id: "REP-489", type: "Citizen Alert", subject: "Stalled Project Report", status: "Rejected", user: "CitizenJ" },
   ];

   return (
      <div className="space-y-6">
         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
               <h2 className="text-2xl font-bold text-gray-900">Verification Center</h2>
               <p className="text-gray-500">Queue for citizen reports, document validation, and identity checks.</p>
            </div>
            <div className="flex bg-white rounded-[1px] border border-gray-200 p-1">
               <button className="px-3 py-1 bg-gray-100 rounded-[1px] shadow-sm text-xs font-bold text-gray-900">Queue (12)</button>
               <button className="px-3 py-1 text-gray-500 text-xs font-bold">Processed</button>
            </div>
         </div>

         <div className="bg-white rounded-[1px] shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50 flex gap-4">
               <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="text" placeholder="Search report ID..." className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-[1px] text-sm focus:ring-[#006B3C] focus:border-[#006B3C]" />
               </div>
            </div>
            <table className="w-full text-left">
               <thead className="bg-white text-xs text-gray-500 font-semibold uppercase tracking-wider border-b border-gray-200">
                  <tr>
                     <th className="px-6 py-4">Report ID</th>
                     <th className="px-6 py-4">Entity Type</th>
                     <th className="px-6 py-4">Subject</th>
                     <th className="px-6 py-4">Submitted By</th>
                     <th className="px-6 py-4 text-center">Action</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                  {reports.map((r, i) => (
                     <tr key={i} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-bold text-gray-900">{r.id}</td>
                        <td className="px-6 py-4 text-sm text-gray-600 font-medium">{r.type}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{r.subject}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">@{r.user}</td>
                        <td className="px-6 py-4 flex justify-center gap-2">
                           {r.status === 'Pending' ? (
                              <>
                                 <button title="Approve" className="p-1.5 bg-emerald-50 text-emerald-600 rounded-[1px] hover:bg-emerald-100 transition-colors">
                                    <CheckCircle className="w-5 h-5" />
                                 </button>
                                 <button title="Reject" className="p-1.5 bg-red-50 text-red-600 rounded-[1px] hover:bg-red-100 transition-colors">
                                    <XCircle className="w-5 h-5" />
                                 </button>
                              </>
                           ) : (
                              <span className={`text-xs font-bold px-2 py-1 rounded-[1px] ${r.status==='Verified'?'bg-emerald-100 text-emerald-700':'bg-red-100 text-red-700'}`}>
                                 {r.status}
                              </span>
                           )}
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
