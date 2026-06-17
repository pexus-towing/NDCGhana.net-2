import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function AdminAnalytics() {
   const data = [
      { name: 'Jan', daus: 4000, registrations: 2400 },
      { name: 'Feb', daus: 3000, registrations: 1398 },
      { name: 'Mar', daus: 2000, registrations: 9800 },
      { name: 'Apr', daus: 2780, registrations: 3908 },
      { name: 'May', daus: 1890, registrations: 4800 },
      { name: 'Jun', daus: 2390, registrations: 3800 },
      { name: 'Jul', daus: 3490, registrations: 4300 },
   ];

   return (
      <div className="space-y-6">
         <div>
            <h2 className="text-2xl font-bold text-gray-900">Analytics Center</h2>
            <p className="text-gray-500">National platform intelligence and growth metrics.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
               { title: "Daily Active Users", value: "24.5k", trend: "+12%", up: true },
               { title: "New Registrations (30d)", value: "8,201", trend: "+4.3%", up: true },
               { title: "Engagement Rate", value: "68%", trend: "-1.2%", up: false },
            ].map((stat, i) => (
               <div key={i} className="bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
                  <p className="text-sm font-semibold text-gray-500 mb-1">{stat.title}</p>
                  <div className="flex items-end gap-3">
                     <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                     <span className={`flex items-center text-sm font-medium mb-1 ${stat.up ? 'text-emerald-600' : 'text-red-600'}`}>
                        {stat.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                        {stat.trend}
                     </span>
                  </div>
               </div>
            ))}
         </div>

         <div className="bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-6">User Growth & Engagement</h3>
            <div className="h-80">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                     <defs>
                        <linearGradient id="colorDaus" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#006B3C" stopOpacity={0.1}/>
                           <stop offset="95%" stopColor="#006B3C" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                           <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                     <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                     <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }} />
                     <Area type="monotone" dataKey="daus" stroke="#006B3C" fillOpacity={1} fill="url(#colorDaus)" strokeWidth={2} name="Daily Active Users" />
                     <Area type="monotone" dataKey="registrations" stroke="#3B82F6" fillOpacity={1} fill="url(#colorReg)" strokeWidth={2} name="New Registrations" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
   );
}
