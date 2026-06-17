import { Search, Bell, Menu } from "lucide-react";

export function AdminHeader() {
   return (
      <header className="h-16 border-b border-gray-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-4 md:px-8 shrink-0 z-10 sticky top-0">
         <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-500 hover:text-gray-900">
               <Menu className="w-5 h-5" />
            </button>
            <div className="relative hidden md:block w-64 lg:w-80">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="w-4 h-4 text-gray-400" />
               </div>
               <input 
                  type="text" 
                  placeholder="Search MPs, Projects, or Reports..." 
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-[1px] text-sm focus:outline-none focus:ring-2 focus:ring-[#006B3C]/50 focus:border-[#006B3C] transition-shadow"
               />
            </div>
         </div>
         <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-[1px] text-xs font-bold flex items-center gap-2">
               <span className="w-2 h-2 rounded-[1px] bg-emerald-500 animate-pulse"></span> System Real-time
            </div>
            <button className="relative p-2 text-gray-400 hover:text-gray-900 transition-colors">
               <Bell className="w-5 h-5" />
               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border-2 border-white rounded-[1px]"></span>
            </button>
            <div className="h-6 w-px bg-gray-200 mx-1"></div>
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-[1px] bg-gradient-to-tr from-[#006B3C] to-[#004B2B] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  AD
               </div>
               <div className="hidden md:block">
                  <p className="text-sm font-bold text-gray-900 leading-none">Super Admin</p>
                  <p className="text-xs text-gray-500">HQ Operations</p>
               </div>
            </div>
         </div>
      </header>
   );
}
