import { ShieldCheck, TrendingUp, AlertCircle } from "lucide-react";

export function AdminTransparency() {
   return (
      <div className="space-y-6">
         <div>
            <h2 className="text-2xl font-bold text-gray-900">Transparency Monitoring Center</h2>
            <p className="text-gray-500">Analytics and accountability metrics across government functions.</p>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#006B3C] text-white p-6 rounded-[1px] shadow-sm border border-[#004B2B]">
               <ShieldCheck className="w-8 h-8 text-emerald-300 mb-4" />
               <p className="text-xs font-bold text-emerald-100 uppercase tracking-widest mb-1">National Avg Index</p>
               <p className="text-4xl font-bold">88.4</p>
            </div>
            
            <div className="bg-white p-6 rounded-[1px] shadow-sm border border-gray-200">
               <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Constituency Reporting</p>
               <p className="text-3xl font-bold text-gray-900 mb-2">92%</p>
               <p className="text-xs font-medium text-emerald-600 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +4% this quarter</p>
            </div>

            <div className="bg-white p-6 rounded-[1px] shadow-sm border border-gray-200">
               <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Project Audits Done</p>
               <p className="text-3xl font-bold text-gray-900 mb-2">412</p>
               <p className="text-xs font-medium text-gray-500">Last 30 days</p>
            </div>

            <div className="bg-white p-6 rounded-[1px] shadow-sm border border-red-200">
               <div className="flex items-center gap-2 mb-4 text-red-600">
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-bold text-sm">System Alerts</span>
               </div>
               <p className="text-lg font-bold text-gray-900 mb-1">14 Missing Reports</p>
               <button className="text-xs font-bold text-red-600 hover:underline">View Offending Profiles →</button>
            </div>
         </div>

         <div className="bg-white rounded-[1px] border border-gray-200 shadow-sm p-6">
            <h3 className="font-bold text-gray-900 mb-4">Accountability Heatmap (Simulated)</h3>
            <div className="h-48 border-2 border-dashed border-gray-200 rounded-[1px] flex items-center justify-center bg-gray-50">
               <p className="text-gray-500 font-medium font-mono text-sm">TRANSPARENCY_HEATMAP_VIZ</p>
            </div>
         </div>
      </div>
   );
}
