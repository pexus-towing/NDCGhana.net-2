import { motion } from "motion/react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { engagementTrends } from "../../data/communityData";

const PIE_COLORS = ['#006B3C', '#fcd116', '#3B82F6', '#CE1126'];

export function EngagementAnalytics() {
  const pieData = [
    { name: 'Discussions', value: 45 },
    { name: 'Feedback', value: 25 },
    { name: 'Project Monitoring', value: 15 },
    { name: 'Community Events', value: 15 },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-dim">
      <div className="max-w-7xl mx-auto">
         <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Community Engagement Analytics</h2>
          <p className="text-on-surface-variant text-lg">Measuring active participation and civic interactions across the platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Comments Submitted', value: '45,210', increase: '+15%' },
            { label: 'Feedback Reports', value: '12,840', increase: '+8%' },
            { label: 'Event Participation', value: '8,450', increase: '+22%' },
            { label: 'Project Reports', value: '3,120', increase: '+5%' },
          ].map((stat) => (
             <div key={stat.label} className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm text-center">
               <p className="text-sm font-medium text-on-surface-variant uppercase mb-2">{stat.label}</p>
               <p className="text-3xl font-bold text-on-surface mb-2">{stat.value}</p>
               <span className="text-xs font-bold text-success bg-success/10 px-2 py-1 rounded-[1px]">{stat.increase} this month</span>
             </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-surface-white border border-outline-variant rounded-[1px] p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Engagement Trends</h3>
            <div className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={engagementTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontSize: 12}} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  <Area type="monotone" dataKey="discussions" stackId="1" stroke="#006B3C" fill="#006B3C" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="feedback" stackId="1" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
           </div>

           <div className="bg-surface-white border border-outline-variant rounded-[1px] p-6 shadow-sm flex flex-col justify-between">
            <h3 className="text-xl font-bold mb-2">Activity Breakdown</h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-4">
              {pieData.map((item, i) => (
                <div key={item.name} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-[1px]" style={{ backgroundColor: PIE_COLORS[i % PIE_COLORS.length]}}></div>
                    <span className="font-medium text-on-surface-variant">{item.name}</span>
                  </div>
                  <span className="font-bold">{item.value}%</span>
                </div>
              ))}
            </div>
           </div>
        </div>
      </div>
    </section>
  );
}
