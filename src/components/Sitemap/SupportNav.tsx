import { HelpCircle, Accessibility, BookOpen, MessageSquare, Monitor, Keyboard, Languages, Smartphone } from "lucide-react";

export function SupportNav() {
  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-6 bg-gray-900"></div>
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Accessibility & User Support</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-gray-50 rounded-[1px] p-8 border border-gray-200">
              <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-3">
                 <HelpCircle className="w-6 h-6 text-[#006B3C]" /> Help Resources
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                 {[
                    { label: "FAQs", icon: HelpCircle },
                    { label: "User Guides", icon: BookOpen },
                    { label: "Contact Support", icon: MessageSquare },
                    { label: "Platform Tutorials", icon: Monitor }
                 ].map((link, i) => (
                    <button key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-[1px] hover:border-[#006B3C] hover:shadow-sm transition-all text-left group">
                       <div className="text-gray-400 group-hover:text-[#006B3C] transition-colors"><link.icon className="w-5 h-5" /></div>
                       <span className="font-bold text-sm text-gray-700 group-hover:text-gray-900">{link.label}</span>
                    </button>
                 ))}
              </div>
           </div>

           <div className="bg-emerald-50/50 rounded-[1px] p-8 border border-emerald-100">
              <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-3">
                 <Accessibility className="w-6 h-6 text-[#006B3C]" /> Accessibility Features
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                 {[
                    { label: "Screen Reader Support", icon: Monitor },
                    { label: "Keyboard Navigation", icon: Keyboard },
                    { label: "Language Support", icon: Languages },
                    { label: "Mobile Accessibility", icon: Smartphone }
                 ].map((link, i) => (
                    <button key={i} className="flex items-center gap-3 p-4 bg-white border border-emerald-100 rounded-[1px] hover:border-[#006B3C] hover:shadow-sm transition-all text-left group">
                       <div className="text-[#006B3C]"><link.icon className="w-5 h-5" /></div>
                       <span className="font-bold text-sm text-gray-700 group-hover:text-gray-900">{link.label}</span>
                    </button>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
