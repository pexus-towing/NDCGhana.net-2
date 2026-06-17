import { motion } from "motion/react";
import { regionsData } from "../../data/communityData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function GeographicDistribution() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-dim">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Geographic Community Distribution</h2>
          <p className="text-on-surface-variant text-lg">Platform representation across the 16 regions of Ghana.</p>
        </div>

        <div className="bg-surface-white border border-outline-variant rounded-[1px] p-6 shadow-sm">
          <div className="h-[500px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={regionsData}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#4b5563'}} />
                <YAxis dataKey="region" type="category" axisLine={false} tickLine={false} tick={{fill: '#111827', fontWeight: 500}} />
                <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
                <Bar dataKey="members" fill="#006B3C" radius={[0, 4, 4, 0]} name="Total Members" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-surface-dim p-5 rounded-[1px] border border-outline-variant/50">
              <div className="text-sm text-on-surface-variant mb-1 font-medium">Highest Engagement</div>
              <div className="text-2xl font-bold flex items-center justify-between">
                <span>Greater Accra</span>
                <span className="text-primary text-lg font-medium">78%</span>
              </div>
            </div>
             <div className="bg-surface-dim p-5 rounded-[1px] border border-outline-variant/50">
              <div className="text-sm text-on-surface-variant mb-1 font-medium">Highest Growth</div>
              <div className="text-2xl font-bold flex items-center justify-between">
                <span>Ashanti</span>
                <span className="text-success text-lg font-medium">+15%</span>
              </div>
            </div>
             <div className="bg-surface-dim p-5 rounded-[1px] border border-outline-variant/50">
              <div className="text-sm text-on-surface-variant mb-1 font-medium">Emerging Region</div>
              <div className="text-2xl font-bold flex items-center justify-between">
                <span>Western North</span>
                <span className="text-info text-lg font-medium">+22%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
