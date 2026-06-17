import { 
   LayoutDashboard, LineChart, Bell, Users, FileText, 
   CheckSquare, Globe, FileSignature, Settings, ShieldCheck,
   LogOut, Building2, Megaphone
} from "lucide-react";

export function AdminSidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
   const navGroups = [
      {
         title: "Core",
         items: [
            { id: "Dashboard Overview", icon: LayoutDashboard },
            { id: "Analytics Center", icon: LineChart },
         ]
      },
      {
         title: "Management",
         items: [
            { id: "MPs", icon: Building2 },
            { id: "Project Tracker", icon: FileText },
            { id: "Transparency Score", icon: ShieldCheck },
         ]
      },
      {
         title: "Engagement",
         items: [
            { id: "Community Statistics", icon: Users },
            { id: "Diaspora Hub", icon: Globe },
            { id: "Verification Center", icon: CheckSquare },
         ]
      },
      {
         title: "Platform",
         items: [
            { id: "News & Updates", icon: Megaphone },
            { id: "Settings", icon: Settings },
         ]
      }
   ];

   return (
      <aside className="w-64 border-r border-gray-200 bg-white flex flex-col hidden lg:flex shrink-0">
         <div className="p-6 border-b border-gray-100 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#006B3C] rounded-[1px] flex items-center justify-center text-white font-bold">
               N
            </div>
            <div>
               <h1 className="font-bold text-[#004B2B] text-sm leading-none">NDC Platform</h1>
               <p className="text-[10px] text-gray-500 mt-1 uppercase font-semibold tracking-wider">Enterprise Admin</p>
            </div>
         </div>
         <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {navGroups.map((group) => (
               <div key={group.title}>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">{group.title}</p>
                  <div className="space-y-1">
                     {group.items.map(item => {
                        const Icon = item.icon;
                        const isActive = activeTab === item.id;
                        return (
                           <button 
                              key={item.id}
                              onClick={() => setActiveTab(item.id)}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-[1px] text-sm font-medium transition-colors ${
                                 isActive 
                                    ? 'bg-[#006B3C]/10 text-[#006B3C]' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }`}
                           >
                              <Icon className={`w-4 h-4 ${isActive ? 'text-[#006B3C]' : 'text-gray-400'}`} />
                              {item.id}
                           </button>
                        );
                     })}
                  </div>
               </div>
            ))}
         </div>
         <div className="p-4 border-t border-gray-100">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-[1px] text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
               <LogOut className="w-4 h-4" />
               Sign Out
            </button>
         </div>
      </aside>
   );
}
