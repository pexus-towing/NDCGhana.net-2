import { FileText, Download } from "lucide-react";

export function PressReleases() {
  const releases = [
    { title: "Official Statement on the Postponement of the Infrastructure Levy Vote", dept: "National Secretariat", date: "24 Oct 2025" },
    { title: "Condemnation of Violence During Regional By-Elections", dept: "Parliamentary Caucus", date: "20 Oct 2025" },
    { title: "Announcement of the NDC Diaspora Investment Fund Launch", dept: "Diaspora Relations", date: "15 Oct 2025" },
    { title: "Rebuttal: Clarification on the Proposed Healthcare Subsidies", dept: "Communications Bureau", date: "10 Oct 2025" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-6 bg-[#CE1126]"></div>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Official Press Releases</h2>
          </div>
          <button className="text-[#006B3C] font-bold text-sm hover:underline">Media Kit & Brand Assets</button>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
           {releases.map((rel, i) => (
             <div key={i} className="p-6 bg-white border border-gray-200 rounded-[1px] flex items-start gap-4 hover:shadow-sm transition-shadow group">
                <div className="p-3 bg-red-50 text-red-600 rounded-[1px] shrink-0">
                   <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                   <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{rel.date}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-[1px]"></span>
                      <span className="text-[10px] font-bold text-[#006B3C] uppercase tracking-wider">{rel.dept}</span>
                   </div>
                   <h3 className="font-bold text-gray-900 group-hover:text-[#CE1126] transition-colors leading-snug mb-4">
                      {rel.title}
                   </h3>
                   <button className="flex items-center gap-2 text-xs font-bold text-gray-500 group-hover:text-gray-900 hover:underline">
                      <Download className="w-3.5 h-3.5" /> Download PDF Release
                   </button>
                </div>
             </div>
           ))}
        </div>
        <div className="mt-8 text-center">
           <button className="px-6 py-2 bg-gray-100 text-gray-700 font-bold rounded-[1px] hover:bg-gray-200 transition-colors text-sm">
              View Press Archive
           </button>
        </div>
      </div>
    </section>
  );
}
