import { Users, Mail, MessageSquare } from "lucide-react";

export function AdminCommunity() {
   return (
      <div className="space-y-6">
         <div>
            <h2 className="text-2xl font-bold text-gray-900">Community Management</h2>
            <p className="text-gray-500">Oversight of citizen feedback, groups, and demographics.</p>
         </div>

         <div className="bg-white rounded-[1px] shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
               <h3 className="font-bold text-gray-900">Recent Citizen Feedback</h3>
               <button className="text-sm font-semibold text-[#006B3C] hover:underline">View All</button>
            </div>
            <div className="divide-y divide-gray-100">
               {[
                  { from: "Akwasi M. (Osu)", topic: "Streetlight outage on Oxford St.", status: "Pending Fix" },
                  { from: "Fatima S. (Tamale)", topic: "Scholarship application portal down", status: "Resolved" },
                  { from: "Kwame (Techiman)", topic: "Market stall allocations dispute", status: "Under Review" }
               ].map((msg, i) => (
                  <div key={i} className="p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors cursor-pointer">
                     <div className="w-10 h-10 rounded-[1px] bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-4 h-4" />
                     </div>
                     <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                           <p className="font-bold text-gray-900 text-sm">{msg.from}</p>
                           <span className={`text-xs font-bold px-2 py-0.5 rounded-[1px] ${msg.status==='Resolved'?'bg-emerald-100 text-emerald-700':'bg-gray-100 text-gray-700'}`}>{msg.status}</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">{msg.topic}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
