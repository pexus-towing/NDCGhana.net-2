import { motion } from "motion/react";
import { demographicsAge, demographicsOccupation } from "../../data/communityData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

export function DemographicInsights() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
       <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Demographic Insights</h2>
        <p className="text-on-surface-variant text-lg">Understanding the diverse composition of our civic community.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bg-surface-white border border-outline-variant rounded-[1px] p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Age Distribution</h3>
          <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demographicsAge} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="ageGroup" axisLine={false} tickLine={false} tick={{fill: '#4b5563'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#4b5563'}} />
                <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="percentage" fill="#006B3C" radius={[4, 4, 0, 0]} name="% of Members" />
              </BarChart>
            </ResponsiveContainer>
          </div>
         </div>

         <div className="bg-surface-white border border-outline-variant rounded-[1px] p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Occupation Breakdown</h3>
           <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demographicsOccupation} layout="vertical" margin={{ top: 20, right: 30, left: 30, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#4b5563'}} hide />
                <YAxis dataKey="occupation" type="category" axisLine={false} tickLine={false} tick={{fill: '#111827', fontSize: 13, fontWeight: 500}} />
                <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="value" fill="#fcd116" radius={[0, 4, 4, 0]} name="% of Members">
                   {demographicsOccupation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#006B3C' : index === 1 ? '#3B82F6' : index === 2 ? '#fcd116' : '#9ca3af'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
         </div>
      </div>
      <div className="mt-8 bg-black text-white p-6 rounded-[1px] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
           <h4 className="text-xl font-bold text-ndc-gold mb-1">Gender Distribution</h4>
           <p className="text-white/80 text-sm">A balanced representation of civic participation.</p>
        </div>
        <div className="flex w-full md:w-2/3 items-center gap-4">
          <div className="flex-1 bg-surface-dim/20 rounded-[1px] h-8 overflow-hidden flex relative">
            <div className="bg-info h-full flex items-center px-4 text-xs font-bold" style={{ width: '52%'}}>52% Male</div>
            <div className="bg-primary h-full flex items-center justify-end px-4 text-xs font-bold" style={{ width: '48%'}}>48% Female</div>
          </div>
        </div>
      </div>
    </section>
  );
}
