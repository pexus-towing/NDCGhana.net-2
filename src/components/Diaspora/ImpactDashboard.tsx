import { motion } from "motion/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Target, Heart, Shield } from "lucide-react";

const trendData = [
  { month: 'Jan', contribution: 120, support: 45 },
  { month: 'Feb', contribution: 180, support: 55 },
  { month: 'Mar', contribution: 250, support: 80 },
  { month: 'Apr', contribution: 210, support: 70 },
  { month: 'May', contribution: 380, support: 110 },
  { month: 'Jun', contribution: 450, support: 140 },
];

export function ImpactDashboard() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-dim">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Diaspora Impact Dashboard</h2>
          <p className="text-on-surface-variant text-lg">Measure the real-world effect of global Ghanaian initiatives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
           {[
             { label: "Funds Contributed", value: "GH₵ 12.5M", icon: TrendingUp, color: "text-success", bg: "bg-success/10" },
             { label: "Projects Supported", value: "342", icon: Target, color: "text-info", bg: "bg-info/10" },
             { label: "Volunteer Hours", value: "18,450", icon: Heart, color: "text-ndc-gold", bg: "bg-ndc-gold/20" },
             { label: "Constituencies Engaged", value: "156", icon: Shield, color: "text-primary", bg: "bg-primary/10" },
           ].map((metric) => {
             const Icon = metric.icon;
             return (
               <div key={metric.label} className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm flex items-center gap-4">
                  <div className={`p-4 rounded-[1px] ${metric.bg} ${metric.color}`}>
                     <Icon className="w-8 h-8" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-on-surface-variant uppercase">{metric.label}</p>
                     <p className="text-2xl font-bold text-on-surface">{metric.value}</p>
                  </div>
               </div>
             )
           })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-surface-white border border-outline-variant rounded-[1px] shadow-sm p-6">
            <h3 className="font-bold text-xl mb-6">Contribution Trends</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#4b5563'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#4b5563'}} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
                  <Line type="monotone" dataKey="contribution" stroke="#006B3C" strokeWidth={3} dot={{ strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} name="Financial Contrib. (k)" />
                  <Line type="monotone" dataKey="support" stroke="#fcd116" strokeWidth={3} dot={{ strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} name="Projects Backed" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-surface-white border border-outline-variant rounded-[1px] shadow-sm p-6 flex flex-col justify-center items-center text-center">
             <div className="w-48 h-48 rounded-[1px] border-8 border-primary flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 border-8 border-surface-dim rounded-[1px]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}></div>
                <div className="relative z-10">
                   <p className="text-5xl font-bold text-primary">85</p>
                   <p className="text-sm font-bold text-on-surface-variant">IMPACT SCORE</p>
                </div>
             </div>
             <h3 className="font-bold text-xl mb-2">Excellent Engagement</h3>
             <p className="text-sm text-on-surface-variant mb-6">The diaspora community is performing well above average in connecting resources to local needs.</p>
             <button className="px-6 py-2 bg-surface-dim hover:bg-outline-variant rounded-[1px] font-bold text-sm transition-colors text-primary border border-outline-variant">
               View Full Impact Report
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
