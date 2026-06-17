import { motion } from "motion/react";
import { diasporaData } from "../../data/communityData";
import { Globe } from "lucide-react";

export function DiasporaDashboard() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Globe className="w-8 h-8 text-primary" /> Global Ghanaian Community Impact
          </h2>
          <p className="text-on-surface-variant text-lg">Tracking the involvement and contributions of the diaspora.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-surface-dim px-4 py-2 border border-outline-variant rounded-[1px]">
             <div className="text-xs text-on-surface-variant font-medium">Total Diaspora</div>
             <div className="text-xl font-bold text-primary">26,452</div>
          </div>
          <div className="bg-surface-dim px-4 py-2 border border-outline-variant rounded-[1px]">
             <div className="text-xs text-on-surface-variant font-medium">Countries Ref.</div>
             <div className="text-xl font-bold text-primary">42</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-surface-white border border-outline-variant rounded-[1px] p-6 shadow-sm overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain opacity-20 pointer-events-none"></div>
          <h3 className="text-xl font-bold mb-6 relative z-10">Diaspora Member Distribution</h3>
          <div className="space-y-6 relative z-10 mt-12 mb-8">
            {diasporaData.map((d, index) => (
              <div key={d.country}>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span>{d.country}</span>
                  <span>{d.members.toLocaleString()} members</span>
                </div>
                <div className="w-full bg-surface-dim rounded-[1px] h-2">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(d.members / 12500) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-primary h-2 rounded-[1px]"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-surface-white border border-outline-variant rounded-[1px] p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Country Leaderboard</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-outline-variant text-on-surface-variant">
                    <th className="pb-3 font-medium">Country</th>
                    <th className="pb-3 text-right font-medium">Members</th>
                    <th className="pb-3 text-right font-medium">Part. Rate</th>
                    <th className="pb-3 text-right font-medium">Contrib.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/50">
                  {diasporaData.map((d, index) => (
                    <tr key={d.country} className="hover:bg-surface-dim transition-colors group">
                      <td className="py-4 font-medium flex items-center gap-3">
                        <div className="w-6 h-6 rounded-[1px] bg-surface-dim flex items-center justify-center text-xs font-bold text-on-surface-variant group-hover:bg-primary group-hover:text-white transition-colors">{index + 1}</div>
                        {d.country}
                      </td>
                      <td className="py-4 text-right">{d.members.toLocaleString()}</td>
                      <td className="py-4 text-right">
                        <span className="bg-success/10 text-success px-2 py-1 rounded-[1px] text-xs font-bold">{d.participation}%</span>
                      </td>
                      <td className="py-4 text-right font-medium">{d.contributions}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
