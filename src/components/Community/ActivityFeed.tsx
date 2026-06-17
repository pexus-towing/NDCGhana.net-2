import { activityFeed } from "../../data/communityData";
import { UserPlus, MessageSquare, RefreshCw, Calendar, Award } from "lucide-react";

export function ActivityFeed() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'join': return <UserPlus className="w-5 h-5 text-success" />;
      case 'feedback': return <MessageSquare className="w-5 h-5 text-info" />;
      case 'update': return <RefreshCw className="w-5 h-5 text-primary" />;
      case 'event': return <Calendar className="w-5 h-5 text-warning" />;
      case 'achievement': return <Award className="w-5 h-5 text-danger" />;
      default: return <MessageSquare className="w-5 h-5 text-gray-500" />;
    }
  };

  const getBg = (type: string) => {
    switch (type) {
      case 'join': return 'bg-success/10';
      case 'feedback': return 'bg-info/10';
      case 'update': return 'bg-primary/10';
      case 'event': return 'bg-warning/10';
      case 'achievement': return 'bg-danger/10';
      default: return 'bg-gray-100';
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-dim">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Real-Time Activity Feed</h2>
          <p className="text-on-surface-variant text-lg">Live updates from communities across the nation.</p>
        </div>

        <div className="bg-surface-white border border-outline-variant rounded-[1px] shadow-sm p-6 md:p-8">
           <div className="flex justify-between items-center mb-8 border-b border-outline-variant pb-4">
              <h3 className="font-bold text-lg">Latest Actions</h3>
              <div className="flex gap-2">
                 <button className="px-3 py-1 bg-surface-dim rounded-[1px] text-xs font-medium hover:bg-outline-variant transition-colors">All</button>
                 <button className="px-3 py-1 bg-transparent rounded-[1px] text-xs font-medium text-on-surface-variant hover:bg-surface-dim transition-colors">Feedback</button>
                 <button className="px-3 py-1 bg-transparent rounded-[1px] text-xs font-medium text-on-surface-variant hover:bg-surface-dim transition-colors">Updates</button>
              </div>
           </div>

           <div className="space-y-6">
             {activityFeed.map((activity, index) => (
                <div key={activity.id} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                     <div className={`w-10 h-10 rounded-[1px] flex items-center justify-center ${getBg(activity.type)} shrink-0`}>
                        {getIcon(activity.type)}
                     </div>
                     {index !== activityFeed.length - 1 && (
                        <div className="w-0.5 h-full bg-outline-variant/50 mt-2 group-hover:bg-primary/30 transition-colors"></div>
                     )}
                  </div>
                  <div className="pb-6">
                     <p className="text-base">
                        <span className="font-bold text-on-surface">{activity.user}</span>{' '}
                        <span className="text-on-surface-variant">{activity.action}</span>
                     </p>
                     <div className="flex items-center gap-3 mt-1 text-sm text-on-surface-variant font-medium">
                        <span>{activity.time}</span>
                        <span>•</span>
                        <span>{activity.location}</span>
                     </div>
                  </div>
                </div>
             ))}
           </div>
           
           <button className="w-full mt-4 py-3 bg-surface-dim hover:bg-outline-variant rounded-[1px] font-bold text-sm transition-colors text-primary border border-outline-variant/50">
             Load More Activity
           </button>
        </div>
      </div>
    </section>
  );
}
