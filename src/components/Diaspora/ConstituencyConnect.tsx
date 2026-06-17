import { Search, MapPin, Building, Flag, ArrowRight } from "lucide-react";

export function ConstituencyConnect() {
  return (
    <section id="constituency" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-primary to-royal-blue rounded-[1px] p-8 md:p-12 text-white shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
           <MapPin className="w-64 h-64" />
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Your Constituency</h2>
          <p className="text-lg text-white/80 mb-8">Follow development updates, engage with your local representatives, and participate in grassroots initiatives directly from abroad.</p>
          
          <div className="bg-surface-white p-4 rounded-[1px] flex flex-col md:flex-row gap-4 shadow-sm mb-8">
            <div className="flex-1 relative">
               <MapPin className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
               <input type="text" placeholder="Constituency Name..." className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant rounded-[1px] text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
            </div>
            <div className="flex-1 relative">
               <Flag className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
               <select className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant rounded-[1px] text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
                  <option value="" disabled selected>Select Region</option>
                  <option value="greater-accra">Greater Accra</option>
                  <option value="ashanti">Ashanti</option>
                  <option value="volta">Volta</option>
               </select>
            </div>
            <div className="flex-1 relative">
               <Building className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
               <input type="text" placeholder="MP Name..." className="w-full pl-10 pr-4 py-3 bg-surface border border-outline-variant rounded-[1px] text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
            </div>
            <button className="px-8 py-3 bg-ndc-gold hover:bg-yellow-500 text-deep-navy font-bold rounded-[1px] transition-colors flex items-center justify-center gap-2">
               <Search className="w-5 h-5" /> Search
            </button>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-medium">
             <span className="text-white/60">Popular Searches:</span>
             <button className="text-white hover:text-ndc-gold transition-colors underline decoration-white/30">Ayawaso West Wuogon</button>
             <button className="text-white hover:text-ndc-gold transition-colors underline decoration-white/30">Ketu South</button>
             <button className="text-white hover:text-ndc-gold transition-colors underline decoration-white/30">Tamale Central</button>
          </div>
        </div>
      </div>
    </section>
  );
}
