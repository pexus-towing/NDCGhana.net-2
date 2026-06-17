import { motion } from "motion/react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { growthData, userSources } from "../../data/communityData";

const COLORS = ['#006B3C', '#CE1126', '#fcd116', '#3B82F6', '#10B981'];

export function GrowthDashboard() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Community Growth Dashboard</h2>
        <p className="text-on-surface-variant text-lg">Monitor the steady expansion of our network and track new registrations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm">
          <p className="text-sm font-medium text-on-surface-variant uppercase mb-2">Total Registered</p>
          <p className="text-3xl font-bold text-primary">124,892</p>
        </div>
        <div className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm">
          <p className="text-sm font-medium text-on-surface-variant uppercase mb-2">New This Month</p>
          <p className="text-3xl font-bold text-success">+3,847</p>
        </div>
        <div className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm">
          <p className="text-sm font-medium text-on-surface-variant uppercase mb-2">Monthly Growth</p>
          <p className="text-3xl font-bold text-info">12.5%</p>
        </div>
        <div className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm">
          <p className="text-sm font-medium text-on-surface-variant uppercase mb-2">Active Communities</p>
          <p className="text-3xl font-bold text-warning">846</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface-white border border-outline-variant rounded-[1px] p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Growth Over Time</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#006B3C" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#006B3C" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#4b5563'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#4b5563'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#006B3C', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="members" stroke="#006B3C" strokeWidth={3} fillOpacity={1} fill="url(#colorMembers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-surface-white border border-outline-variant rounded-[1px] p-6 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold mb-6">Acquisition Sources</h3>
          <div className="flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userSources}
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {userSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
