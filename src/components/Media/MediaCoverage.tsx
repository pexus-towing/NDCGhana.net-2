import { RadioReceiver, Tv, Newspaper, Globe } from "lucide-react";

export function MediaCoverage() {
  const coverage = [
    { source: "Daily Graphic", type: "newspaper", title: "Minority Blocks Controversial Infrastructure Loan Over Transparency Concerns", date: "Oct 25, 2025" },
    { source: "JoyNews", type: "tv", title: "Analysis: The Impact of the Proposed Digital ID Bill", date: "Oct 24, 2025" },
    { source: "Citi FM", type: "radio", title: "Morning Series: Interview with Hon. Samuel Okudzeto Ablakwa", date: "Oct 23, 2025" },
    { source: "GhanaWeb", type: "online", title: "Fact-Check: Assessing the NDC's 100-Day Performance Record in Select Committees", date: "Oct 22, 2025" },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'newspaper': return <Newspaper className="w-5 h-5" />;
      case 'tv': return <Tv className="w-5 h-5" />;
      case 'radio': return <RadioReceiver className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  }

  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-6 bg-[#006B3C]"></div>
          <h2 className="text-3xl font-bold text-gray-900 font-serif">In The Media</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
           {coverage.map((item, i) => (
             <div key={i} className="flex flex-col sm:flex-row gap-4 p-5 bg-gray-50 border border-gray-200 rounded-[1px] hover:shadow-sm hover:bg-white transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-white rounded-[1px] border border-gray-200 flex items-center justify-center text-gray-400 shrink-0 group-hover:text-[#CE1126] transition-colors">
                   {getIcon(item.type)}
                </div>
                <div className="flex-1">
                   <div className="flex items-center justify-between mb-2">
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.source}</span>
                     <span className="text-xs font-semibold text-gray-400">{item.date}</span>
                   </div>
                   <h3 className="font-bold text-gray-900 leading-snug group-hover:text-[#006B3C] transition-colors">{item.title}</h3>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
