import { motion } from "motion/react";
import { Users, UserCheck, Globe, MapPin, Activity, Shield } from "lucide-react";

export function HeroKPI() {
  const kpis = [
    { label: "Total Community Members", value: "124,892", icon: Users, color: "text-info" },
    { label: "Active Citizens", value: "45,210", icon: UserCheck, color: "text-success" },
    { label: "Diaspora Members", value: "26,452", icon: Globe, color: "text-warning" },
    { label: "Constituencies Rep.", value: "275", icon: MapPin, color: "text-danger" },
    { label: "Monthly Engagements", value: "1.2M", icon: Activity, color: "text-info" },
    { label: "Civic Participation Score", value: "85/100", icon: Shield, color: "text-success" },
  ];

  return (
    <section className="relative px-4 py-16 sm:px-6 lg:px-8 bg-black overflow-hidden hero-gradient text-white border-b border-white/10">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          Community Statistics & <br className="hidden md:block"/> Civic Engagement Insights
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-white/80"
        >
          Explore real-time community growth, citizen participation, diaspora involvement, constituency engagement, and the collective impact of civic action across Ghana.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                key={kpi.label}
                className="glass-card p-6 rounded-[1px] flex flex-col items-center text-center justify-center hover:bg-white/10 transition-colors"
              >
                <div className={`p-3 rounded-[1px] bg-surface-white/10 ${kpi.color} mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-2">{kpi.value}</h3>
                <p className="text-sm font-medium text-white/70 uppercase tracking-wider">{kpi.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
