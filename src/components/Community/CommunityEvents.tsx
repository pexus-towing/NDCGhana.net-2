import { CalendarDays, Video, MapPin, Users } from "lucide-react";

export function CommunityEvents() {
  // Mock calendar heatmap data
  const weeks = Array.from({ length: 52 }, (_, i) => i);
  const days = Array.from({ length: 7 }, (_, i) => i);
  
  const getActivityLevel = () => {
     const rand = Math.random();
     if (rand > 0.8) return 'bg-primary';
     if (rand > 0.5) return 'bg-primary/60';
     if (rand > 0.3) return 'bg-primary/30';
     return 'bg-surface-dim border border-outline-variant/30';
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Community Events & Participation</h2>
        <p className="text-on-surface-variant text-lg">Tracking civic gatherings, virtual town halls, and local forums.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
         <div className="space-y-4">
            <div className="bg-surface-white border border-outline-variant p-5 rounded-[1px] shadow-sm">
               <div className="flex items-center gap-3 mb-2 text-on-surface-variant">
                  <CalendarDays className="w-5 h-5 text-warning" />
                  <span className="font-bold">Events Hosted</span>
               </div>
               <p className="text-3xl font-bold">142</p>
            </div>
            <div className="bg-surface-white border border-outline-variant p-5 rounded-[1px] shadow-sm">
               <div className="flex items-center gap-3 mb-2 text-on-surface-variant">
                  <Users className="w-5 h-5 text-info" />
                  <span className="font-bold">Event Attendance</span>
               </div>
               <p className="text-3xl font-bold">24,500</p>
            </div>
            <div className="bg-surface-white border border-outline-variant p-5 rounded-[1px] shadow-sm">
               <div className="flex items-center gap-3 mb-2 text-on-surface-variant">
                  <Video className="w-5 h-5 text-danger" />
                  <span className="font-bold">Virtual Part.</span>
               </div>
               <p className="text-3xl font-bold">65%</p>
            </div>
            <div className="bg-surface-white border border-outline-variant p-5 rounded-[1px] shadow-sm">
               <div className="flex items-center gap-3 mb-2 text-on-surface-variant">
                  <MapPin className="w-5 h-5 text-success" />
                  <span className="font-bold">Regional Part.</span>
               </div>
               <p className="text-3xl font-bold">12 Regions</p>
            </div>
         </div>

         <div className="lg:col-span-3 space-y-6">
            <div className="bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm overflow-x-auto">
               <h3 className="font-bold text-lg mb-6">Activity Heatmap</h3>
               <div className="min-w-[700px]">
                  <div className="flex gap-1 mb-2 text-xs text-on-surface-variant justify-between px-6 px-1">
                     <span>Jan</span>
                     <span>Feb</span>
                     <span>Mar</span>
                     <span>Apr</span>
                     <span>May</span>
                     <span>Jun</span>
                     <span>Jul</span>
                     <span>Aug</span>
                     <span>Sep</span>
                     <span>Oct</span>
                     <span>Nov</span>
                     <span>Dec</span>
                  </div>
                  <div className="flex gap-1">
                     <div className="flex flex-col gap-1 text-xs text-on-surface-variant justify-between py-1 pr-2">
                        <span>Mon</span>
                        <span>Wed</span>
                        <span>Fri</span>
                     </div>
                     {weeks.map((week) => (
                        <div key={week} className="flex flex-col gap-1">
                           {days.map((day) => (
                              <div key={`${week}-${day}`} className={`w-3 h-3 rounded-[1px] ${getActivityLevel()}`} title={`Activity level`}></div>
                           ))}
                        </div>
                     ))}
                  </div>
                  <div className="flex items-center justify-end gap-2 mt-4 text-xs text-on-surface-variant">
                     <span>Less</span>
                     <div className="w-3 h-3 rounded-[1px] bg-surface-dim border border-outline-variant/30"></div>
                     <div className="w-3 h-3 rounded-[1px] bg-primary/30"></div>
                     <div className="w-3 h-3 rounded-[1px] bg-primary/60"></div>
                     <div className="w-3 h-3 rounded-[1px] bg-primary"></div>
                     <span>More</span>
                  </div>
               </div>
            </div>

            <div className="bg-surface-dim border border-outline-variant p-6 rounded-[1px] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
               <div>
                  <p className="text-xl font-bold text-primary mb-1">45</p>
                  <p className="text-xs font-bold text-on-surface-variant uppercase">Town Halls</p>
               </div>
               <div>
                  <p className="text-xl font-bold text-info mb-1">62</p>
                  <p className="text-xs font-bold text-on-surface-variant uppercase">Comm. Meetings</p>
               </div>
               <div>
                  <p className="text-xl font-bold text-danger mb-1">15</p>
                  <p className="text-xs font-bold text-on-surface-variant uppercase">Parl. Forums</p>
               </div>
               <div>
                  <p className="text-xl font-bold text-warning mb-1">20</p>
                  <p className="text-xs font-bold text-on-surface-variant uppercase">Edu Programs</p>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
