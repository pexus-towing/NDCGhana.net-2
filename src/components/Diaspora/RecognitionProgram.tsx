import { Award, Star, Heart, TrendingUp } from "lucide-react";

export function RecognitionProgram() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-deep-navy text-white p-8 md:p-12 rounded-[1px] shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Award className="w-48 h-48" />
           </div>
           <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                 <Star className="w-8 h-8 text-ndc-gold fill-ndc-gold" /> Recognition & Achievement
              </h2>
              <p className="text-white/80 text-lg">Celebrating the extraordinary community champions driving impact from abroad.</p>
           </div>
           <div className="relative z-10">
              <div className="flex -space-x-4 mb-4">
                 <div className="w-12 h-12 rounded-[1px] border-2 border-deep-navy bg-gray-300"></div>
                 <div className="w-12 h-12 rounded-[1px] border-2 border-deep-navy bg-gray-400"></div>
                 <div className="w-12 h-12 rounded-[1px] border-2 border-deep-navy bg-gray-500"></div>
                 <div className="w-12 h-12 rounded-[1px] border-2 border-deep-navy bg-primary flex items-center justify-center text-xs font-bold">+2k</div>
              </div>
              <p className="text-sm font-bold text-ndc-gold">Active Champions</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <div className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-ndc-gold/20 text-ndc-gold border-2 border-ndc-gold rounded-[1px] flex items-center justify-center mb-4">
                 <TrendingUp className="w-8 h-8" />
              </div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Category</p>
              <h3 className="font-bold text-lg mb-4">Development Champion</h3>
              <p className="text-sm text-on-surface-variant">Top contributors backing constituency infrastructure.</p>
           </div>
           
           <div className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-info/20 text-info border-2 border-info rounded-[1px] flex items-center justify-center mb-4">
                 <Heart className="w-8 h-8" />
              </div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Category</p>
              <h3 className="font-bold text-lg mb-4">Community Builder</h3>
              <p className="text-sm text-on-surface-variant">Leaders organizing events and uniting members.</p>
           </div>

           <div className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-primary/20 text-primary border-2 border-primary rounded-[1px] flex items-center justify-center mb-4">
                 <Star className="w-8 h-8" />
              </div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Category</p>
              <h3 className="font-bold text-lg mb-4">Civic Engagement</h3>
              <p className="text-sm text-on-surface-variant">High-volume participants in town halls and feedback.</p>
           </div>

           <div className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm text-center">
              <div className="w-16 h-16 mx-auto bg-danger/20 text-danger border-2 border-danger rounded-[1px] flex items-center justify-center mb-4">
                 <Award className="w-8 h-8" />
              </div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Category</p>
              <h3 className="font-bold text-lg mb-4">Youth Advocate</h3>
              <p className="text-sm text-on-surface-variant">Pioneers driving initiatives for the next generation.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
