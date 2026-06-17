import { Quote, ArrowRight } from "lucide-react";

export function CommunityStories() {
  const stories = [
    { title: "How a Community Borehole Changed Women's Lives in Salaga", category: "Impact Story", img: "https://images.unsplash.com/photo-1534063223067-27b9c6a7e0e7?q=80&w=1470" },
    { title: "Empowering Tamale's Youth Through the Digital Skills Initiative", category: "Education", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1470" },
    { title: "Diaspora Doctors Performing Free Surgeries in the Volta Region", category: "Diaspora", img: "https://plus.unsplash.com/premium_photo-1661766468757-36e7eecc7bd6?q=80&w=1470" }
  ];

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1.5 h-6 bg-[#CE1126]"></div>
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Community Stories</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {stories.map((story, i) => (
              <div key={i} className="bg-white rounded-[1px] overflow-hidden shadow-sm border border-gray-100 group cursor-pointer flex flex-col h-full">
                 <div className="h-48 overflow-hidden relative">
                    <img src={story.img} alt={story.title} className="w-full h-full object-cover  transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-[1px] text-xs font-bold text-gray-900">
                       {story.category}
                    </div>
                 </div>
                 <div className="p-6 flex flex-col flex-grow relative">
                    <Quote className="absolute top-4 right-4 w-6 h-6 text-gray-100 rotate-180" />
                    <h3 className="font-bold text-xl text-gray-900 mb-4 font-serif leading-tight">{story.title}</h3>
                    <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                       Real stories from the grassroots showcasing the tangible impact of effective policy and community-focused development initiatives across our constituencies.
                    </p>
                    <div className="pt-4 border-t border-gray-100 text-[#006B3C] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                       Read Story <ArrowRight className="w-4 h-4" />
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
