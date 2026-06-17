import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  FolderKanban, 
  Activity, 
  MessageSquareText, 
  Users, 
  MapPin, 
  Bell, 
  Plus, 
  Upload, 
  CalendarPlus, 
  ArrowRight,
  TrendingUp
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from "recharts";

const STATS = [
  { label: "Total Projects", value: "24", icon: FolderKanban, trend: "+3 this month", color: "bg-blue-50 text-blue-600" },
  { label: "Active Projects", value: "11", icon: Activity, trend: "4 behind schedule", color: "bg-emerald-50 text-emerald-600" },
  { label: "Pending Suggestions", value: "89", icon: MessageSquareText, trend: "12 unread", color: "bg-amber-50 text-amber-600" },
  { label: "Engagement Score", value: "8.4", icon: TrendingUp, trend: "Top 10% nationally", color: "bg-purple-50 text-purple-600" },
  { label: "Constituency Population", value: "124.5k", icon: Users, trend: "+1.2% year/year", color: "bg-indigo-50 text-indigo-600" },
];

const ENGAGEMENT_DATA = [
  { name: 'Jan', engagement: 4000, interactions: 2400 },
  { name: 'Feb', engagement: 3000, interactions: 1398 },
  { name: 'Mar', engagement: 2000, interactions: 9800 },
  { name: 'Apr', engagement: 2780, interactions: 3908 },
  { name: 'May', engagement: 1890, interactions: 4800 },
  { name: 'Jun', engagement: 2390, interactions: 3800 },
  { name: 'Jul', engagement: 3490, interactions: 4300 },
];

const PROJECT_COMPLETION_DATA = [
  { name: 'Education', completed: 4, ongoing: 2 },
  { name: 'Health', completed: 3, ongoing: 1 },
  { name: 'Infrastructure', completed: 2, ongoing: 5 },
  { name: 'Water', completed: 5, ongoing: 0 },
];

const RECENT_SUGGESTIONS = [
  { id: 1, title: "Repair Market Road", author: "Kwame A.", date: "2 hours ago", status: "New" },
  { id: 2, title: "More desktop computers for High School", author: "Sarah O.", date: "5 hours ago", status: "Reviewed" },
  { id: 3, title: "Streetlights in Area 4", author: "Emmanuel D.", date: "1 day ago", status: "In Consideration" },
];

const RECENT_NOTIFICATIONS = [
  { id: 1, text: "National transparency ranking updated", time: "1 hour ago", unread: true },
  { id: 2, text: "Your project 'Water Borehole' was approved", time: "3 hours ago", unread: true },
  { id: 3, text: "Admin left a comment on your profile", time: "Yesterday", unread: false },
  { id: 4, text: "Monthly attendance report generated", time: "2 days ago", unread: false },
];

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      {/* Welcome & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome back, Hon. Doe</h1>
          <p className="text-gray-500 mt-1 flex items-center gap-1.5 text-sm font-medium">
            <MapPin className="w-4 h-4" /> Ayawaso West Constituency
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link to="/mp-portal/projects/new" className="px-4 py-2 bg-[#006B3C] text-white rounded-[1px] text-sm font-bold hover:bg-[#004B2B] transition-colors flex items-center gap-2 shadow-sm">
            <Plus className="w-4 h-4" /> Add Project
          </Link>
          <Link to="/mp-portal/media/upload" className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm">
            <Upload className="w-4 h-4" /> Upload Media
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900 tracking-tight">{stat.value}</span>
                </div>
              </div>
              <div className={`p-3 rounded-[1px] ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4 text-xs font-medium text-gray-500">
              {stat.trend}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">Citizen Engagement Trend</h2>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ENGAGEMENT_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorEngage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#006B3C" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#006B3C" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '1px', border: '1px solid #E5E7EB', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}
                />
                <Area type="monotone" dataKey="engagement" stroke="#006B3C" strokeWidth={2} fillOpacity={1} fill="url(#colorEngage)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">Projects by Sector</h2>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PROJECT_COMPLETION_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <Tooltip 
                  cursor={{ fill: '#F3F4F6' }}
                  contentStyle={{ borderRadius: '1px', border: '1px solid #E5E7EB', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                <Bar dataKey="completed" name="Completed" fill="#006B3C" radius={[1, 1, 0, 0]} maxBarSize={40} />
                <Bar dataKey="ongoing" name="Ongoing" fill="#CE1126" radius={[1, 1, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Quick Actions & Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 tracking-tight mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/mp-portal/projects/new" className="p-4 border border-gray-200 rounded-[1px] hover:border-[#006B3C] hover:shadow-sm transition-all group flex flex-col items-center justify-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-gray-900">Add Project</span>
            </Link>
            <Link to="/mp-portal/media" className="p-4 border border-gray-200 rounded-[1px] hover:border-blue-600 hover:shadow-sm transition-all group flex flex-col items-center justify-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Upload className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-gray-900">Upload Media</span>
            </Link>
            <Link to="/mp-portal/events/new" className="p-4 border border-gray-200 rounded-[1px] hover:border-purple-600 hover:shadow-sm transition-all group flex flex-col items-center justify-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <CalendarPlus className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-gray-900">Add Event</span>
            </Link>
            <Link to="/mp-portal/suggestions" className="p-4 border border-gray-200 rounded-[1px] hover:border-amber-600 hover:shadow-sm transition-all group flex flex-col items-center justify-center text-center gap-2">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquareText className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold text-gray-900">View Suggestions</span>
            </Link>
          </div>
        </div>

        {/* Upcoming Events & Project Updates */}
        <div className="bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm flex flex-col">
          <h2 className="text-lg font-bold text-gray-900 tracking-tight mb-4">Upcoming Events & Updates</h2>
          <div className="flex-1 space-y-4">
            <div className="flex gap-4 p-3 rounded-[1px] hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
              <div className="w-12 h-12 rounded-[1px] bg-emerald-50 text-emerald-700 flex flex-col items-center justify-center shrink-0">
                <span className="text-xs font-bold uppercase">Oct</span>
                <span className="text-lg font-bold leading-none">12</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Town Hall Meeting</h3>
                <p className="text-xs text-gray-500 mt-0.5">Community Center • 10:00 AM</p>
              </div>
            </div>
            <div className="flex gap-4 p-3 rounded-[1px] hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
              <div className="w-12 h-12 rounded-[1px] bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <FolderKanban className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Road Resurfacing - 80%</h3>
                <p className="text-xs text-gray-500 mt-0.5">Project update submitted yesterday</p>
              </div>
            </div>
            <div className="flex gap-4 p-3 rounded-[1px] hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
              <div className="w-12 h-12 rounded-[1px] bg-emerald-50 text-emerald-700 flex flex-col items-center justify-center shrink-0">
                <span className="text-xs font-bold uppercase">Oct</span>
                <span className="text-lg font-bold leading-none">15</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Youth Skills Workshop</h3>
                <p className="text-xs text-gray-500 mt-0.5">Main Library • 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Suggestions */}
        <div className="bg-white rounded-[1px] border border-gray-200 shadow-sm lg:col-span-2 flex flex-col">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight">Recent Citizen Suggestions</h2>
            <Link to="/mp-portal/suggestions" className="text-sm font-medium text-[#006B3C] hover:text-[#004B2B] flex items-center gap-1 transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="p-0 flex-1">
            <div className="divide-y divide-gray-100">
              {RECENT_SUGGESTIONS.map((suggestion) => (
                <div key={suggestion.id} className="p-4 sm:px-6 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{suggestion.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                      <span className="font-medium text-gray-700">{suggestion.author}</span>
                      <span>•</span>
                      <span>{suggestion.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-[1px] ${
                      suggestion.status === 'New' ? 'bg-blue-50 text-blue-700' :
                      suggestion.status === 'Reviewed' ? 'bg-emerald-50 text-emerald-700' :
                      'bg-amber-50 text-amber-700'
                    }`}>
                      {suggestion.status}
                    </span>
                    <button className="text-gray-400 hover:text-[#006B3C] transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications Sidebar */}
        <div className="bg-white rounded-[1px] border border-gray-200 shadow-sm flex flex-col">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <Bell className="w-5 h-5 text-gray-400" /> Notifications
            </h2>
          </div>
          <div className="p-0 flex-1">
            <div className="divide-y divide-gray-100">
              {RECENT_NOTIFICATIONS.map((notification) => (
                <div key={notification.id} className={`p-4 sm:px-6 hover:bg-gray-50 transition-colors ${notification.unread ? 'bg-blue-50/30' : ''}`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${notification.unread ? 'bg-[#CE1126]' : 'bg-gray-300'}`} />
                    <div>
                      <p className={`text-sm ${notification.unread ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                        {notification.text}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 border-t border-gray-200">
            <button className="w-full text-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Mark all as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
