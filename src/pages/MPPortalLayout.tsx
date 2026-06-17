import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  UserCircle,
  FolderKanban, 
  MessageSquareText, 
  Calendar, 
  FileImage, 
  Bell, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Landmark
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const SIDEBAR_LINKS = [
  { name: "Dashboard", path: "/mp-portal", icon: LayoutDashboard, exact: true },
  { name: "My Profile", path: "/mp-portal/profile", icon: UserCircle },
  { name: "Projects", path: "/mp-portal/projects", icon: FolderKanban },
  { name: "Suggestions", path: "/mp-portal/suggestions", icon: MessageSquareText },
  { name: "Events", path: "/mp-portal/events", icon: Calendar },
  { name: "Media", path: "/mp-portal/media", icon: FileImage },
  { name: "Settings", path: "/mp-portal/settings", icon: Settings },
];

export default function MPPortalLayout() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobile}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#004B2B] text-white flex flex-col transition-transform duration-300 lg:translate-x-0 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
          <Link to="/mp-portal" className="flex items-center gap-2 group flex-1" onClick={closeMobile}>
            <div className="w-8 h-8 rounded-[1px] bg-ndc-red flex items-center justify-center shrink-0 text-white">
              <Landmark className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight uppercase flex items-center">
              <span className="text-ndc-red mr-0.5">MP</span>PORTAL
            </span>
          </Link>
          <button onClick={closeMobile} className="lg:hidden p-1 hover:bg-white/10 rounded-[1px] transition-colors">
            <X className="w-5 h-5 text-white/80" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {SIDEBAR_LINKS.map(link => {
            const isActive = link.exact ? location.pathname === link.path : location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMobile}
                className={`flex items-center gap-3 px-4 py-3 rounded-[1px] transition-colors font-medium text-sm ${isActive ? 'bg-white/10 text-white' : 'text-emerald-100/70 hover:bg-white/5 hover:text-white'}`}
              >
                <link.icon className={`w-5 h-5 ${isActive ? 'text-ndc-gold' : ''}`} />
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 mb-2 rounded-[1px] bg-black/20">
            <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-sm font-bold text-white border border-emerald-500 overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=100&h=100&q=80" alt="MP" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">Hon. John Doe</p>
              <p className="text-xs text-emerald-200/70 truncate">Ayawaso West</p>
            </div>
          </div>
          <Link
            to="/mp-login"
            className="flex items-center gap-3 px-4 py-2.5 rounded-[1px] text-emerald-100/70 hover:bg-white/5 hover:text-white transition-colors font-medium text-sm w-full"
          >
            <LogOut className="w-5 h-5" /> Sign Out
          </Link>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-64 w-full">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 z-30 shrink-0 sticky top-0">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="lg:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-[1px] transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-end w-full gap-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-[1px] transition-colors group">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#CE1126] border border-white group-hover:border-gray-100 transition-colors"></span>
            </button>
            <Link to="/" className="text-sm font-medium text-[#006B3C] hover:text-[#004B2B] transition-colors">
              Return to Website
            </Link>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
