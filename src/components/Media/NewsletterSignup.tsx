import { Mail, CheckCircle2 } from "lucide-react";

export function NewsletterSignup() {
  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[1px] border border-gray-200 overflow-hidden lg:grid lg:grid-cols-2 relative">
           
           <div className="p-8 lg:p-16 flex justify-center flex-col">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-[1px] shadow-sm border border-gray-100 text-[#006B3C] mb-6">
                 <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif leading-tight mb-4">
                 Don't miss a beat. Get the Official Bulletin.
              </h2>
              <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
                 Subscribe to receive direct alerts on parliamentary actions, vetted project reports, and official press releases tailored to your interests.
              </p>

              <form className="flex flex-col sm:flex-row gap-3">
                 <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-[#006B3C] font-medium placeholder:font-normal"
                    required
                 />
                 <button type="submit" className="px-6 py-3 bg-[#006B3C] hover:bg-[#004B2B] text-white font-bold rounded-[1px] transition-colors whitespace-nowrap shadow-sm">
                    Subscribe Free
                 </button>
              </form>
              <p className="text-xs text-gray-400 font-medium mt-4">We respect your privacy. Unsubscribe at any time.</p>
           </div>

           <div className="bg-[#F8F9FA] p-8 lg:p-16 border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col justify-center">
              <p className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Customize Your Alerts:</p>
              <div className="space-y-4">
                 {[
                    { label: "Parliamentary Bulletins", desc: "Weekly summaries of house sittings, bills passed, and committee activities." },
                    { label: "Constituency Project Updates", desc: "Real-time alerts when infrastructure works start or complete in your region." },
                    { label: "Official Press Releases", desc: "Be the first to receive unedited formal statements and party responses." },
                    { label: "Diaspora Digest", desc: "Monthly newsletter focused on international affairs and foreign branch news." }
                 ].map((opt, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer group">
                       <div className="relative flex items-center justify-center w-5 h-5 rounded-[1px] border border-gray-300 mt-0.5 bg-white group-hover:border-[#006B3C] transition-colors">
                          <input type="checkbox" className="opacity-0 absolute inset-0 cursor-pointer" defaultChecked={i < 2} />
                          <CheckCircle2 className="w-4 h-4 text-[#006B3C] opacity-0 group-[&:has(input:checked)]:opacity-100 transition-opacity absolute pointer-events-none stroke-[3]" />
                       </div>
                       <div>
                          <p className="font-bold text-gray-900 text-sm">{opt.label}</p>
                          <p className="text-xs text-gray-500 leading-snug mt-0.5">{opt.desc}</p>
                       </div>
                    </label>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
