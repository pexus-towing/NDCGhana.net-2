import { Save, UserCog, Lock, Database, Globe } from "lucide-react";

export function AdminSettings() {
   return (
      <div className="space-y-6">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
               <h2 className="text-2xl font-bold text-gray-900">Platform Configuration</h2>
               <p className="text-gray-500">Manage deep system parameters, security protocols, and platform identity.</p>
            </div>
            <button className="px-6 py-2 bg-[#006B3C] text-white rounded-[1px] text-sm font-bold flex items-center gap-2 hover:bg-[#004B2B] shadow-sm transition-colors">
               <Save className="w-4 h-4" /> Save Configuration
            </button>
         </div>

         <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-1 space-y-2">
               {[
                  { name: "General Setup", icon: Globe, active: true },
                  { name: "Security & Access", icon: Lock, active: false },
                  { name: "Role Management", icon: UserCog, active: false },
                  { name: "Database & Backups", icon: Database, active: false },
               ].map((tab, i) => {
                  const Icon = tab.icon;
                  return (
                     <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-[1px] text-sm font-semibold transition-colors ${tab.active ? 'bg-white shadow-sm border border-gray-200 text-[#006B3C]' : 'text-gray-600 hover:bg-white/50'}`}>
                        <Icon className="w-4 h-4" /> {tab.name}
                     </button>
                  )
               })}
            </div>

            <div className="md:col-span-3 space-y-6">
               <div className="bg-white rounded-[1px] shadow-sm border border-gray-200">
                  <div className="p-6 border-b border-gray-100">
                     <h3 className="font-bold text-gray-900">Global Information</h3>
                  </div>
                  <div className="p-6 space-y-4">
                     <div className="grid md:grid-cols-2 gap-4">
                        <div>
                           <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Platform Name</label>
                           <input type="text" defaultValue="NDC Civic Intelligence Hub" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[1px] text-sm focus:ring-[#006B3C] focus:border-[#006B3C]" />
                        </div>
                        <div>
                           <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Support Email</label>
                           <input type="email" defaultValue="admin@ndc.org.gh" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[1px] text-sm focus:ring-[#006B3C] focus:border-[#006B3C]" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Platform Status</label>
                        <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-[1px] text-sm focus:ring-[#006B3C] focus:border-[#006B3C]">
                           <option>Online - Fully Operational</option>
                           <option>Maintenance Mode</option>
                           <option>Restricted Access</option>
                        </select>
                     </div>
                  </div>
               </div>

               <div className="bg-white rounded-[1px] shadow-sm border border-red-200">
                  <div className="p-6 border-b border-red-100 bg-red-50 text-red-900 rounded-[1px]">
                     <h3 className="font-bold">Danger Zone</h3>
                  </div>
                  <div className="p-6 flex justify-between items-center">
                     <div>
                        <p className="font-bold text-gray-900 text-sm">Purge Cache & Analytics</p>
                        <p className="text-xs text-gray-500">This will clear all non-critical temporary data.</p>
                     </div>
                     <button className="px-4 py-2 border border-red-200 text-red-600 rounded-[1px] text-sm font-bold hover:bg-red-50 transition-colors">Execute Purge</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
