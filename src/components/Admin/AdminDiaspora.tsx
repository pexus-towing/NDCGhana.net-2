import { Globe, DollarSign, Users } from "lucide-react";

export function AdminDiaspora() {
   return (
      <div className="space-y-6">
         <div>
            <h2 className="text-2xl font-bold text-gray-900">Diaspora Operations Command</h2>
            <p className="text-gray-500">Monitor international community engagement, initiatives, and contributions.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-[1px] shadow-sm border border-gray-200">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-[1px]"><Globe className="w-5 h-5" /></div>
                  <h3 className="font-bold text-gray-900">Active Chapters</h3>
               </div>
               <p className="text-3xl font-bold text-gray-900">142</p>
               <p className="text-sm text-gray-500 mt-1">Across 45 countries</p>
            </div>
            <div className="bg-white p-6 rounded-[1px] shadow-sm border border-gray-200">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-50 text-emerald-600 rounded-[1px]"><DollarSign className="w-5 h-5" /></div>
                  <h3 className="font-bold text-gray-900">Total Commitments</h3>
               </div>
               <p className="text-3xl font-bold text-gray-900">$4.2M</p>
               <p className="text-sm text-gray-500 mt-1">YTD capital logged</p>
            </div>
            <div className="bg-white p-6 rounded-[1px] shadow-sm border border-gray-200">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-50 text-purple-600 rounded-[1px]"><Users className="w-5 h-5" /></div>
                  <h3 className="font-bold text-gray-900">Registered Expats</h3>
               </div>
               <p className="text-3xl font-bold text-gray-900">89,201</p>
               <p className="text-sm text-gray-500 mt-1">Verified identities</p>
            </div>
         </div>

         <div className="bg-white rounded-[1px] shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-6">Chapter Activity Leaderboard</h3>
            <div className="space-y-4">
               {[
                  { region: "UK Chapter (London)", score: 980, color: "bg-blue-500" },
                  { region: "USA Chapter (New York)", score: 850, color: "bg-indigo-500" },
                  { region: "USA Chapter (DMV Area)", score: 810, color: "bg-indigo-400" },
                  { region: "Canada Chapter (Toronto)", score: 720, color: "bg-red-500" },
                  { region: "Germany Chapter (Berlin)", score: 650, color: "bg-yellow-500" },
               ].map((chap, i) => (
                  <div key={i} className="flex flex-col gap-2">
                     <div className="flex justify-between text-sm font-bold text-gray-900">
                        <span>{i+1}. {chap.region}</span>
                        <span>{chap.score} pts</span>
                     </div>
                     <div className="w-full bg-gray-100 h-2 rounded-[1px] overflow-hidden">
                        <div className={`h-full ${chap.color}`} style={{width: `${(chap.score/1000)*100}%`}}></div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}
