import { Clock, User, ArrowRight, Bookmark } from "lucide-react";

export function FeaturedStory() {
  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-6 bg-[#CE1126]"></div>
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Editor's Spotlight</h2>
        </div>

        <div className="bg-white rounded-[1px] overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row h-full lg:h-[480px]">
          <div className="lg:w-3/5 relative h-64 lg:h-full group overflow-hidden cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1541872526-791833501a34?q=80&w=1470" 
              alt="Parliamentary session" 
              className="w-full h-full object-cover  transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden flex items-end p-6">
              <div>
                <span className="px-3 py-1 bg-[#CE1126] text-white text-xs font-bold rounded-[1px] mb-3 inline-block">Special Report</span>
                <h3 className="text-white font-bold text-2xl font-serif">The Comprehensive Audit of the 2025 National Infrastructure Budget</h3>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative">
            <div className="absolute top-8 right-8">
               <button className="text-gray-400 hover:text-[#006B3C] transition-colors"><Bookmark className="w-6 h-6" /></button>
            </div>
            <span className="px-3 py-1 bg-[#CE1126]/10 text-[#CE1126] text-xs font-bold rounded-[1px] mb-4 w-max hidden lg:inline-block">Special Report</span>
            <h3 className="text-gray-900 font-bold text-3xl mb-4 font-serif leading-tight hidden lg:block">The Comprehensive Audit of the 2025 National Infrastructure Budget</h3>
            
            <p className="text-gray-600 mb-6 line-clamp-4 leading-relaxed">
              Following intensive parliamentary committee reviews, a new 120-page transparency report details the reallocation of GH₵ 4.2 billion towards sustainable rural infrastructure and healthcare modernization across the northern sector.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-500 font-medium mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Dr. E. Afriyie</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
              <div className="hidden sm:block text-xs uppercase tracking-wider">
                Oct 24, 2025
              </div>
            </div>
            
            <div className="mt-auto">
              <button className="flex items-center gap-2 text-[#006B3C] font-bold hover:gap-3 transition-all">
                Read Full Story <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
