import { Camera, Maximize2 } from "lucide-react";

export function PhotoGallery() {
  const photos = [
    { span: "col-span-2 row-span-2", img: "https://images.unsplash.com/photo-1575320297371-bd2ff6109919?q=80&w=1469", title: "National Delegates Congress 2025" },
    { span: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1541872526-791833501a34?q=80&w=1470", title: "Parliamentary Session" },
    { span: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1520109780879-a722880c8fd8?q=80&w=1470", title: "Community Water Project" },
    { span: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1374", title: "Youth Townhall" },
    { span: "col-span-1 row-span-1", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470", title: "Education Grant Launch" },
  ];

  return (
    <section className="py-16 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
           <div className="flex items-center gap-4">
             <div className="w-1.5 h-6 bg-[#CE1126]"></div>
             <h2 className="text-3xl font-bold font-serif">Visual Storytelling</h2>
           </div>
           <button className="flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors py-2">
              <Camera className="w-4 h-4" /> View Full Gallery Archive
           </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
           {photos.map((item, i) => (
             <div key={i} className={`relative rounded-[1px] overflow-hidden group cursor-pointer ${item.span}`}>
                <img src={item.img} alt={item.title} className="w-full h-full object-cover  transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 lg:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <Maximize2 className="w-5 h-5 text-white absolute top-4 right-4" />
                   <h3 className="font-bold text-sm lg:text-lg">{item.title}</h3>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
