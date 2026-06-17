import { motion } from "motion/react";
import { constituencyRankings } from "../../data/communityData";
import { Trophy, Search, Filter } from "lucide-react";

export function ConstituencyRankings() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-dim">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Trophy className="w-8 h-8 text-warning" /> Constituency Participation Rankings
            </h2>
            <p className="text-on-surface-variant text-lg">Top highly engaged constituencies driving community action.</p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
              <input type="text" placeholder="Search constituency..." className="pl-9 pr-4 py-2 border border-outline-variant bg-surface-white rounded-[1px] text-sm focus:outline-none focus:border-primary" />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant bg-surface-white rounded-[1px] text-sm hover:bg-surface-dim transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
          </div>
        </div>

        <div className="bg-surface-white border border-outline-variant rounded-[1px] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-surface-dim border-b border-outline-variant text-sm text-on-surface-variant uppercase font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Rank</th>
                  <th className="px-6 py-4">Constituency</th>
                  <th className="px-6 py-4">Region</th>
                  <th className="px-6 py-4 text-right">Members</th>
                  <th className="px-6 py-4 text-right">Part. Score</th>
                  <th className="px-6 py-4 text-right">Growth Flow</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant whitespace-nowrap">
                {constituencyRankings.map((c, index) => (
                  <tr key={c.id} className="hover:bg-surface-dim/50 transition-colors">
                    <td className="px-6 py-5">
                      <div className={`w-8 h-8 rounded-[1px] flex items-center justify-center font-bold text-sm ${index < 3 ? 'bg-warning/10 text-warning' : 'bg-surface-dim text-on-surface-variant'}`}>
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-6 py-5 font-bold text-base">{c.name}</td>
                    <td className="px-6 py-5 text-on-surface-variant">{c.region}</td>
                    <td className="px-6 py-5 text-right font-medium">{c.members.toLocaleString()}</td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                         <div className="w-16 h-2 bg-surface-dim rounded-[1px] overflow-hidden">
                           <div className="bg-success h-full" style={{ width: `${c.score}%`}}></div>
                         </div>
                         <span className="font-bold text-success">{c.score}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right font-bold text-info">{c.growth}</td>
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
