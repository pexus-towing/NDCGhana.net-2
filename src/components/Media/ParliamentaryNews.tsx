import { BookOpen, Users, FileText, Download } from "lucide-react";

export function ParliamentaryNews() {
  const sessions = [
    { date: "Oct 25, 2025", type: "Plenary Sitting", topic: "Energy Sector Levies Amendment Bill", outcome: "Passed 2nd Reading", icon: BookOpen },
    { date: "Oct 23, 2025", type: "Committee Meeting", topic: "Public Accounts Committee Review", outcome: "Auditor General Report Assessed", icon: Users },
    { date: "Oct 20, 2025", type: "Ministerial Query", topic: "Minister of Roads Questioned", outcome: "Pledges attached for Northern Roads", icon: FileText },
  ];

  return (
    <section className="py-16 bg-[#F8F9FA] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-6 bg-[#004B2B]"></div>
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Parliamentary Activities</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-white rounded-[1px] shadow-sm border border-gray-200 p-6 md:p-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm border-b border-gray-100 pb-4">Recent Session Timeline</h3>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                 {sessions.map((sess, i) => {
                    const Icon = sess.icon;
                    return (
                       <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                          <div className="flex items-center justify-center w-10 h-10 rounded-[1px] border-4 border-white bg-[#006B3C] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                             <Icon className="w-4 h-4" />
                          </div>
                          
                          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-[1px] border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all">
                             <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-[#006B3C] bg-emerald-50 px-2 py-0.5 rounded-[1px] uppercase tracking-wider">{sess.type}</span>
                                <span className="text-xs font-medium text-gray-500">{sess.date}</span>
                             </div>
                             <h4 className="font-bold text-gray-900 mb-1">{sess.topic}</h4>
                             <p className="text-sm text-gray-600 font-medium">Outcome: <span className="text-gray-900">{sess.outcome}</span></p>
                          </div>
                       </div>
                    );
                 })}
              </div>
           </div>

           <div className="space-y-6">
              <div className="bg-[#004B2B] rounded-[1px] text-white p-6 shadow-sm">
                 <h3 className="font-bold text-lg mb-2">Legislative Tracker</h3>
                 <p className="text-white/70 text-sm mb-6">Follow the progress of key bills and motions through the House.</p>
                 <div className="space-y-4">
                    <div className="bg-white/10 p-3 rounded-[1px] border border-white/10">
                       <p className="font-bold text-sm mb-1">Right to Information (Amendment) Bill</p>
                       <p className="text-xs text-emerald-300 font-bold uppercase tracking-wider">At Committee Stage</p>
                    </div>
                    <div className="bg-white/10 p-3 rounded-[1px] border border-white/10">
                       <p className="font-bold text-sm mb-1">Electoral Commission Reforms Bill</p>
                       <p className="text-xs text-yellow-300 font-bold uppercase tracking-wider">First Reading</p>
                    </div>
                 </div>
                 <button className="w-full mt-6 bg-white text-[#004B2B] font-bold text-sm py-2 rounded-[1px] hover:bg-gray-100 transition-colors">
                    View Full Tracker
                 </button>
              </div>

              <div className="bg-white rounded-[1px] border border-gray-200 p-6 shadow-sm">
                 <h3 className="font-bold text-gray-900 mb-4">Official Documents</h3>
                 <div className="space-y-3">
                    {['Hansard - Oct 25 Sitting', 'Order Paper - Oct 26', 'Votes & Proceedings - Oct 24'].map((doc, i) => (
                       <div key={i} className="flex items-center justify-between p-3 border border-gray-100 rounded-[1px] hover:bg-gray-50 group cursor-pointer transition-colors">
                          <span className="text-sm font-medium text-gray-700 group-hover:text-[#006B3C]">{doc}</span>
                          <Download className="w-4 h-4 text-gray-400 group-hover:text-[#006B3C]" />
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
