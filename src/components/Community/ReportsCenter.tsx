import { FileText, Download, BarChart2, Users, Map, ShieldCheck } from "lucide-react";

export function ReportsCenter() {
  const reports = [
    { title: "Community Growth Report", desc: "Detailed breakdown of monthly registrations and demographics.", icon: Users },
    { title: "Engagement Analytics", desc: "Data on platform interactions, feedback, and participation.", icon: BarChart2 },
    { title: "Diaspora Participation", desc: "Insights into global contributions and engagement levels.", icon: Map },
    { title: "Civic Impact Report", desc: "Actionable outcomes, accountability tracking, and resolutions.", icon: ShieldCheck },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Data Insights & Reports Center</h2>
        <p className="text-on-surface-variant text-lg">Export data, analyze trends, and generate custom community reports.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {reports.map((report) => {
          const Icon = report.icon;
          return (
            <div key={report.title} className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm hover:border-primary/50 transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-surface-dim rounded-[1px] flex items-center justify-center mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors text-on-surface-variant">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{report.title}</h3>
              <p className="text-sm text-on-surface-variant mb-6">{report.desc}</p>
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                 <Download className="w-4 h-4" /> Download PDF
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-surface-dim p-8 rounded-[1px] border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-bold text-xl mb-2 flex items-center gap-2"><FileText className="w-5 h-5 text-primary" /> Generate Custom Report</h3>
          <p className="text-on-surface-variant text-sm">Select specific date ranges, regions, and metrics to compile a tailored analysis.</p>
        </div>
        <button className="whitespace-nowrap px-6 py-3 bg-primary hover:bg-royal-blue text-white font-bold rounded-[1px] transition-colors shadow-sm">
          Generate Report
        </button>
      </div>
    </section>
  );
}
