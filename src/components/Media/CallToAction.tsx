import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function MediaCTA() {
  return (
    <section className="bg-gray-900 border-t-4 border-[#CE1126] py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#004B2B] mix-blend-multiply opacity-50"></div>
        <div className="max-w-4xl mx-auto relative z-10">
           <h2 className="text-3xl md:text-5xl font-bold text-white font-serif leading-tight mb-6 mt-4">
              Stay Informed. Stay Engaged.<br />Stay Connected.
           </h2>
           <p className="text-lg text-gray-300 md:text-xl font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
              Access trusted information, parliamentary updates, project reports, and community stories that promote true transparency and accountability across Ghana.
           </p>
           
           <div className="flex flex-wrap justify-center gap-4 text-sm font-bold">
              <button className="px-8 py-3.5 bg-[#CE1126] hover:bg-[#A00D1D] text-white rounded-[1px] transition-colors shadow-sm shadow-red-900/20">
                 Explore Front Page News
              </button>
              <Link to="/sitemap" className="px-8 py-3.5 bg-white text-gray-900 hover:bg-gray-100 rounded-[1px] transition-colors shadow-sm flex items-center gap-2">
                 View Directory & Sitemap <ArrowUpRight className="w-4 h-4" />
              </Link>
           </div>
        </div>
    </section>
  );
}
