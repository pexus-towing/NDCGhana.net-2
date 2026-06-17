import { TrendingUp, Users, Target, FileText, ChevronRight } from "lucide-react";

export function PopularPages() {
  const pages = [
    { title: "Top MP Profiles", icon: Users, rank: 1, type: "Directory" },
    { title: "Most Viewed Projects", icon: Target, rank: 2, type: "Projects" },
    { title: "Popular Reports", icon: FileText, rank: 3, type: "Resources" },
    { title: "Trending News", icon: TrendingUp, rank: 4, type: "Media Hub" },
    { title: "Community Highlights", icon: Users, rank: 5, type: "Community" }
  ];

  return (
    <section className="py-16 bg-[#F8F9FA] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div>
             <div className="flex items-center gap-4 mb-2">
               <div className="w-1.5 h-6 bg-[#CE1126]"></div>
               <h2 className="text-3xl font-bold text-gray-900 font-serif">Most Visited Pages</h2>
             </div>
             <p className="text-gray-600 max-w-2xl text-sm md:pl-5">Trending content and popular destinations across the platform, updated weekly based on user activity.</p>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-red-50 text-[#CE1126] rounded-[1px] text-xs font-bold border border-red-100 uppercase tracking-wider">
             <TrendingUp className="w-3.5 h-3.5" /> Dynamic Ranking
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
           {pages.map((page, i) => (
             <div key={i} className="bg-white p-5 rounded-[1px] border border-gray-100 hover:border-red-200 hover:shadow-sm transition-all group flex flex-col items-center text-center cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-5 font-bold text-6xl italic pointer-events-none  transition-transform">
                   #{page.rank}
                </div>
                <div className="w-12 h-12 bg-gray-50 rounded-[1px] flex items-center justify-center text-gray-400 group-hover:bg-red-50 group-hover:text-[#CE1126] transition-colors mb-4 border border-gray-100">
                   <page.icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">{page.type}</span>
                <h3 className="font-bold text-gray-900 group-hover:text-[#CE1126] transition-colors">{page.title}</h3>
                
                <div className="mt-4 pt-4 border-t border-gray-50 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-xs font-bold text-[#CE1126] flex items-center gap-1">Explore <ChevronRight className="w-3 h-3" /></span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
