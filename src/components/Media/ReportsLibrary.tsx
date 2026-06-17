import { FileIcon, Download, Info } from "lucide-react";

export function ReportsLibrary() {
  const reports = [
    { title: "2025 Mid-Year Transparency Index", size: "4.2 MB", type: "PDF", date: "Sep 2025" },
    { title: "National Auditor General Review Brief", size: "2.1 MB", type: "PDF", date: "Aug 2025" },
    { title: "Constituency Development Fund Usage Report Q2", size: "8.5 MB", type: "PDF", date: "Jul 2025" },
    { title: "Parliamentary Attendance & Scorecard 2024", size: "12.4 MB", type: "PDF", date: "Jan 2025" },
  ];

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
          <div>
             <div className="flex items-center gap-4 mb-2">
                <div className="w-1.5 h-6 bg-[#004B2B]"></div>
                <h2 className="text-3xl font-bold text-gray-900 font-serif">Reports & Publications</h2>
             </div>
             <p className="text-gray-600 max-w-2xl text-sm md:pl-5">Access official transparency metrics, audit documents, and legislative reports published by the party and parliamentary teams.</p>
          </div>
          <button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 font-bold rounded-[1px] hover:bg-gray-50 transition-colors shadow-sm text-sm whitespace-nowrap">
             Search Library
          </button>
        </div>

        <div className="bg-white rounded-[1px] border border-gray-200 overflow-hidden shadow-sm">
           <div className="grid md:grid-cols-4 border-b border-gray-100 bg-gray-50 text-xs text-gray-500 font-bold uppercase tracking-wider p-4 hidden md:grid">
              <div className="md:col-span-2">Document Title</div>
              <div className="text-center">Published</div>
              <div className="text-right">Action</div>
           </div>
           
           <div className="divide-y divide-gray-100">
              {reports.map((doc, i) => (
                 <div key={i} className="grid md:grid-cols-4 items-center p-4 hover:bg-emerald-50/50 transition-colors group">
                    <div className="md:col-span-2 flex items-center gap-4 mb-3 md:mb-0">
                       <div className="w-10 h-10 rounded-[1px] bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                          <FileIcon className="w-5 h-5" />
                       </div>
                       <div>
                          <h4 className="font-bold text-gray-900 leading-tight group-hover:text-[#006B3C] transition-colors">{doc.title}</h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium mt-1">
                             <span className="uppercase">{doc.type}</span>
                             <span>•</span>
                             <span>{doc.size}</span>
                          </div>
                       </div>
                    </div>
                    <div className="hidden md:block text-center text-sm font-medium text-gray-600">
                       {doc.date}
                    </div>
                    <div className="flex items-center md:justify-end gap-2">
                       <button className="flex-1 md:flex-none flex justify-center items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 font-bold rounded-[1px] hover:border-[#006B3C] hover:text-[#006B3C] transition-colors text-xs">
                          <Info className="w-3.5 h-3.5" /> Details
                       </button>
                       <button className="flex-1 md:flex-none flex justify-center items-center gap-2 px-4 py-2 bg-[#006B3C] text-white font-bold rounded-[1px] hover:bg-[#004B2B] transition-colors shadow-sm text-xs">
                          <Download className="w-3.5 h-3.5" /> Download
                       </button>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
