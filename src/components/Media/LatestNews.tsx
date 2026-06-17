import { Filter, Eye, Clock, Bookmark } from "lucide-react";

export function LatestNews() {
  const news = [
    { title: "Minority Leader Outlines Alternative Economic Framework", category: "Parliamentary News", date: "2 hrs ago", author: "Parliamentary Press", views: "1.2k" },
    { title: "Tamale Teaching Hospital Phase 3 Expansion Begins", category: "Development Projects", date: "5 hrs ago", author: "Northern Sector Desk", views: "3.4k" },
    { title: "Diaspora Community Launches Mentorship Fund", category: "Diaspora News", date: "12 hrs ago", author: "Expat Relations", views: "850" },
    { title: "Ashanti Region NDC Grassroots Mobilization Tour", category: "Community Engagement", date: "1 day ago", author: "Party Affairs", views: "5.1k" },
    { title: "Speaker Adjourns Sitting Over Quorum Issues", category: "Parliamentary News", date: "1 day ago", author: "Parliamentary Press", views: "2.5k" },
    { title: "National ID Enrollment Hits 18 Million Mark", category: "National Announcements", date: "2 days ago", author: "Ministry of Comms", views: "12k" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-6 bg-[#006B3C]"></div>
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Latest News</h2>
          </div>
          <div className="flex gap-2">
             <button className="flex items-center gap-2 text-sm font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-[1px] transition-colors">
                <Filter className="w-4 h-4" /> Filter Topics
             </button>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 mb-6 scrollbar-hide text-sm">
           {['All News', 'Parliamentary', 'Constituency', 'Projects', 'Community', 'Diaspora'].map((cat, i) => (
              <button key={i} className={`whitespace-nowrap px-4 py-1.5 rounded-[1px] font-bold border ${i === 0 ? 'bg-[#006B3C] text-white border-[#006B3C]' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}>
                 {cat}
              </button>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <article key={i} className="group flex flex-col bg-white border border-gray-200 rounded-[1px] overflow-hidden hover:shadow-sm transition-all duration-300">
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/10  transition-transform duration-500"></div>
                <div className="absolute top-4 left-4">
                   <span className="px-2.5 py-1 bg-white/90 backdrop-blur text-xs font-bold text-[#006B3C] rounded-[1px] shadow-sm">{item.category}</span>
                </div>
                <div className="absolute top-4 right-4 text-white hover:text-[#CE1126] cursor-pointer drop-shadow-sm">
                   <Bookmark className="w-5 h-5" />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-[#006B3C] transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                   Delivering factual, up-to-date reporting on civic activities and national development goals. Read the full brief to understand the impact.
                </p>
                <div className="mt-auto flex items-center justify-between text-xs text-gray-500 font-medium pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.date}</span>
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {item.views}</span>
                  </div>
                  <span className="font-semibold text-gray-700">{item.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
           <button className="px-8 py-3 border-2 border-gray-200 font-bold text-gray-700 rounded-[1px] hover:border-gray-300 hover:bg-gray-50 transition-colors">
              Load More News
           </button>
        </div>
      </div>
    </section>
  );
}
