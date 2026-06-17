import { motion } from "motion/react";
import { impactMetrics, regionalComparison } from "../../data/communityData";
import { TrendingUp, CheckCircle, BarChart2, Check, ArrowUpRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export function ImpactMetrics() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Community Impact Metrics</h2>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Measurable outcomes of civic engagement and public accountability actions across the platform.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {impactMetrics.map((item, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={item.label} 
            className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <CheckCircle className="w-16 h-16 text-success" />
            </div>
            <p className="text-sm font-medium text-on-surface-variant uppercase mb-4 relative z-10">{item.label}</p>
            <div className="flex items-end gap-3 mb-2 relative z-10">
              <p className="text-4xl font-bold text-on-surface">{item.value}</p>
            </div>
            <div className="flex items-center gap-1 text-sm font-bold text-success relative z-10">
              <ArrowUpRight className="w-4 h-4" /> {item.trend} vs last month
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
           <BarChart2 className="w-6 h-6 text-primary" /> Regional Engagement Comparison
        </h2>
        <p className="text-on-surface-variant mb-6">Compare vital platform metrics across leading regions.</p>
        
        <div className="bg-surface-white border border-outline-variant rounded-[1px] p-6 shadow-sm">
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={regionalComparison} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="region" axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontWeight: 500}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#4b5563'}} />
                <Tooltip cursor={{fill: '#f3f4f6'}} contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="growth" name="Growth" fill="#006B3C" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="participation" name="Participation" fill="#fcd116" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="monitoring" name="Project Monitoring" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={20} />
                <Bar dataKey="feedback" name="Feedback" fill="#CE1126" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
