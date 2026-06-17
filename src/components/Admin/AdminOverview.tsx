import { motion } from "motion/react";
import { Users, FileText, CheckCircle, Globe, Shield, AlertTriangle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";

export function AdminOverview() {
   const data = [
      { name: 'W1', value: 30 },
      { name: 'W2', value: 45 },
      { name: 'W3', value: 65 },
      { name: 'W4', value: 85 }
   ];

   return (
      <div className="space-y-6">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
               <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
               <p className="text-gray-500">Welcome back. Here is the operational state of the civic platform.</p>
            </div>
            <div className="flex gap-2">
               <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-[1px] text-sm font-semibold hover:bg-gray-50 shadow-sm transition-colors">Export PDF</button>
               <button className="px-4 py-2 bg-[#006B3C] text-white rounded-[1px] text-sm font-semibold hover:bg-[#004B2B] shadow-sm transition-colors">Generate Report</button>
            </div>
         </div>

         {/* Executive Summary Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {[
               { title: "Total MPs", value: "135", icon: Users, color: "text-[#006B3C]", bg: "bg-[#006B3C]/10" },
               { title: "Active Projects", value: "482", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
               { title: "Registered Users", value: "1.2M", icon: Globe, color: "text-indigo-600", bg: "bg-indigo-50" },
               { title: "Citizen Reports", value: "8,941", icon: AlertTriangle, color: "text-amber-600", bg: "bg-amber-50" },
               { title: "Verified Actions", value: "92%", icon: CheckCircle, color: "text-emerald-600", bg: "bg-emerald-50" },
               { title: "Transparency", value: "88/100", icon: Shield, color: "text-red-600", bg: "bg-red-50" }
            ].map((stat, i) => {
               const Icon = stat.icon;
               return (
                  <motion.div 
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.05 }}
                     key={i} 
                     className="bg-white p-5 rounded-[1px] border border-gray-200 shadow-sm"
                  >
                     <div className={`w-8 h-8 rounded-[1px] ${stat.bg} ${stat.color} flex items-center justify-center mb-3`}>
                        <Icon className="w-4 h-4" />
                     </div>
                     <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                     <p className="text-xs font-semibold uppercase text-gray-500 tracking-wider">{stat.title}</p>
                  </motion.div>
               )
            })}
         </div>

         <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-[1px] border border-gray-200 shadow-sm p-6">
               <h3 className="font-bold text-gray-900 mb-6">Platform Activity Trend</h3>
               <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                        <Tooltip cursor={{fill: '#F3F4F6'}} contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }} />
                        <Bar dataKey="value" fill="#006B3C" radius={[4, 4, 0, 0]} />
                     </BarChart>
                  </ResponsiveContainer>
               </div>
            </div>
            
            <div className="bg-white rounded-[1px] border border-gray-200 shadow-sm p-6">
               <h3 className="font-bold text-gray-900 mb-4">Urgent Actions</h3>
               <ul className="space-y-4">
                  {[
                     { desc: "Verify 12 new project submissions", time: "2 hrs ago", type: "warning" },
                     { desc: "System backup completed", time: "4 hrs ago", type: "info" },
                     { desc: "Review 5 flagged citizen reports", time: "5 hrs ago", type: "danger" },
                     { desc: "Approve MP profile updates", time: "1 day ago", type: "info" },
                  ].map((act, i) => (
                     <li key={i} className="flex gap-3">
                        <div className={`mt-1.5 w-2 h-2 rounded-[1px] shrink-0 ${act.type === 'warning' ? 'bg-amber-500' : act.type === 'danger' ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                        <div>
                           <p className="text-sm font-medium text-gray-900">{act.desc}</p>
                           <p className="text-xs text-gray-500">{act.time}</p>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
}
