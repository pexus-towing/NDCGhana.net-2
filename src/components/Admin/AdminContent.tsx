import { FileText, Image as ImageIcon, Video, Edit3 } from "lucide-react";

export function AdminContent() {
   return (
      <div className="space-y-6">
         <div>
            <h2 className="text-2xl font-bold text-gray-900">News & Updates Engine</h2>
            <p className="text-gray-500">Publish announcements, press releases, and control global platform media.</p>
         </div>

         <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
               <div className="bg-white rounded-[1px] shadow-sm border border-gray-200 p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Edit3 className="w-4 h-4" /> Quick Draft</h3>
                  <input type="text" placeholder="Article Headline..." className="w-full mb-4 px-4 py-3 bg-gray-50 border border-gray-200 rounded-[1px] text-sm font-bold placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#006B3C]/50" />
                  <textarea placeholder="Write announcement body..." rows={4} className="w-full mb-4 px-4 py-3 bg-gray-50 border border-gray-200 rounded-[1px] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#006B3C]/50"></textarea>
                  <div className="flex justify-between items-center">
                     <div className="flex gap-2 text-gray-400">
                        <button className="p-2 hover:bg-gray-100 rounded-[1px] transition-colors"><ImageIcon className="w-5 h-5" /></button>
                        <button className="p-2 hover:bg-gray-100 rounded-[1px] transition-colors"><Video className="w-5 h-5" /></button>
                     </div>
                     <button className="px-6 py-2 bg-[#006B3C] text-white rounded-[1px] text-sm font-bold shadow-sm hover:bg-[#004B2B] transition-colors">Publish Now</button>
                  </div>
               </div>

               <div className="bg-white rounded-[1px] shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                     <h3 className="font-bold text-gray-900">Recent Publications</h3>
                  </div>
                  <div className="divide-y divide-gray-100">
                     {[
                        { title: "National Manifesto Launch Highlights", date: "Oct 12, 2024", type: "Press Release" },
                        { title: "System Maintenance Scheduled for Saturday", date: "Oct 10, 2024", type: "Platform Alert" },
                        { title: "New Diaspora Investment Framework Published", date: "Oct 05, 2024", type: "Article" },
                     ].map((item, i) => (
                        <div key={i} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer">
                           <div>
                              <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                              <div className="flex gap-2 items-center text-xs text-gray-500">
                                 <span>{item.date}</span>
                                 <span>•</span>
                                 <span className="font-medium text-gray-700">{item.type}</span>
                              </div>
                           </div>
                           <button className="text-[#006B3C] font-bold text-sm hover:underline">Edit</button>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-[1px] shadow-sm border border-gray-200 p-6 flex flex-col">
               <h3 className="font-bold text-gray-900 mb-4">Media Library</h3>
               <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="aspect-square bg-gray-100 rounded-[1px] border border-gray-200 flex flex-col items-center justify-center text-gray-400">
                     <ImageIcon className="w-6 h-6 mb-2" />
                     <span className="text-[10px] font-bold uppercase">Logo.png</span>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-[1px] border border-gray-200 flex flex-col items-center justify-center text-gray-400">
                     <FileText className="w-6 h-6 mb-2" />
                     <span className="text-[10px] font-bold uppercase">Report_Q3.pdf</span>
                  </div>
                  <div className="aspect-square bg-gray-100 rounded-[1px] border border-gray-200 flex flex-col items-center justify-center text-gray-400">
                     <ImageIcon className="w-6 h-6 mb-2" />
                     <span className="text-[10px] font-bold uppercase">Hero_IMG.jpg</span>
                  </div>
                  <div className="aspect-square border-2 border-dashed border-gray-200 rounded-[1px] flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors cursor-pointer min-h-[100px]">
                     <span className="text-xs font-bold w-full text-center">+ Upload</span>
                  </div>
               </div>
               <button className="mt-auto w-full py-2 bg-gray-50 text-gray-900 font-bold text-sm rounded-[1px] border border-gray-200 hover:bg-gray-100 transition-colors">
                  Open Library Manager
               </button>
            </div>
         </div>
      </div>
   );
}
