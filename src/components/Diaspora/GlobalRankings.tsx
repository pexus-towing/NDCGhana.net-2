import { Trophy, Medal, Globe } from "lucide-react";
import { globalNetwork } from "../../data/diasporaData";

export function GlobalRankings() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-dim">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
             <Trophy className="w-8 h-8 text-ndc-gold" /> Global Rankings & Participation
          </h2>
          <p className="text-on-surface-variant text-lg">Recognizing the most active and supportive diaspora communities worldwide.</p>
        </div>

        <div className="bg-surface-white border border-outline-variant rounded-[1px] shadow-sm overflow-hidden">
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead className="bg-surface-dim border-b border-outline-variant text-xs text-on-surface-variant uppercase font-bold tracking-wider">
                    <tr>
                       <th className="px-6 py-4">Rank</th>
                       <th className="px-6 py-4">Country</th>
                       <th className="px-6 py-4 text-right">Members</th>
                       <th className="px-6 py-4 text-right">Contributions</th>
                       <th className="px-6 py-4 text-right">Projects Tracked</th>
                       <th className="px-6 py-4 text-center">Engagement Score</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-outline-variant whitespace-nowrap">
                    {globalNetwork.map((region, index) => (
                       <tr key={region.country} className="hover:bg-surface-dim/50 transition-colors">
                          <td className="px-6 py-5">
                             <div className={`w-8 h-8 rounded-[1px] flex items-center justify-center font-bold text-sm ${index === 0 ? 'bg-ndc-gold text-deep-navy' : index === 1 ? 'bg-gray-300 text-gray-800' : index === 2 ? 'bg-amber-700/20 text-amber-800' : 'bg-surface-dim text-on-surface-variant'}`}>
                                {index + 1}
                             </div>
                          </td>
                          <td className="px-6 py-5 font-bold flex items-center gap-2">
                             <Globe className="w-4 h-4 text-primary" /> {region.country}
                          </td>
                          <td className="px-6 py-5 text-right font-medium">{region.members}</td>
                          <td className="px-6 py-5 text-right font-bold text-success">{region.contributions}</td>
                          <td className="px-6 py-5 text-right font-medium">{region.constituencies}</td>
                          <td className="px-6 py-5 text-center">
                             <span className="bg-primary/10 text-primary px-3 py-1 rounded-[1px] text-xs font-bold tracking-wider">{region.active} Activity</span>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </div>
    </section>
  );
}
