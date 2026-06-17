import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import {
  Menu,
  X,
  Landmark,
  ChevronDown,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  {
    name: "Home",
    path: "/",
    priority: "high",
    mainClass: "flex",
    moreClass: "hidden",
  },
  {
    name: "About",
    path: "/about",
    priority: "high",
    mainClass: "flex",
    moreClass: "hidden",
  },
  {
    name: "MPs",
    path: "/mps",
    priority: "high",
    mainClass: "flex",
    moreClass: "hidden",
    megaMenu: [
      [
        { name: "MP Directory", path: "/mps" },
        { name: "MP Profiles", path: "/mps/profiles" },
        { name: "Attendance", path: "/mps/attendance" },
      ],
      [
        { name: "Parliamentary Records", path: "/mps/records" },
        { name: "Committees", path: "/mps/committees" },
        { name: "Contributions", path: "/mps/contributions" },
      ],
      [
        { name: "Top Performing MPs", path: "/mps/top" },
        { name: "Constituency Rankings", path: "/mps/rankings" },
        { name: "Reports", path: "/mps/reports" },
      ],
    ],
  },
  {
    name: "Project Tracker",
    path: "/projects",
    priority: "high",
    mainClass: "flex",
    moreClass: "hidden",
    dropdown: [
      { name: "Active Projects", path: "/projects/active" },
      { name: "Completed Projects", path: "/projects/completed" },
      { name: "Delayed Projects", path: "/projects/delayed" },
      { name: "Regional Projects", path: "/projects/regional" },
      { name: "Verification Reports", path: "/projects/verification" },
    ],
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    priority: "high",
    mainClass: "flex",
    moreClass: "hidden",
    dropdown: [
      { name: "National Dashboard", path: "/dashboard" },
      { name: "Transparency Rankings", path: "/dashboard/rankings" },
      { name: "Budget Monitoring", path: "/dashboard/budget" },
      { name: "Accountability Metrics", path: "/dashboard/metrics" },
      { name: "Development Analytics", path: "/dashboard/analytics" },
    ],
  },
  {
    name: "Community Stats",
    path: "/community",
    priority: "medium",
    mainClass: "hidden xl:flex",
    moreClass: "block xl:hidden",
    dropdown: [
      { name: "Community Growth", path: "/community/growth" },
      { name: "Regional Statistics", path: "/community/regional" },
      { name: "Participation Metrics", path: "/community/participation" },
      { name: "Community Reports", path: "/community/reports" },
      { name: "Success Stories", path: "/community/stories" },
    ],
  },
  {
    name: "Diaspora Hub",
    path: "/diaspora",
    priority: "low",
    mainClass: "hidden 2xl:flex",
    moreClass: "block 2xl:hidden",
    dropdown: [
      { name: "Global Community Map", path: "/diaspora/map" },
      { name: "Country Communities", path: "/diaspora/countries" },
      { name: "Constituency Connections", path: "/diaspora/connections" },
      { name: "Development Support", path: "/diaspora/support" },
      { name: "Diaspora Events", path: "/diaspora/events" },
    ],
  },
  {
    name: "Media Center",
    path: "/media",
    priority: "medium",
    mainClass: "hidden xl:flex",
    moreClass: "block xl:hidden",
    dropdown: [
      { name: "News", path: "/media/news" },
      { name: "Videos", path: "/media/videos" },
      { name: "Podcasts", path: "/media/podcasts" },
      { name: "Reports", path: "/media/reports" },
      { name: "Press Releases", path: "/media/press" },
      { name: "Photo Gallery", path: "/media/photos" },
    ],
  },
  {
    name: "Resources",
    path: "/resources",
    priority: "low",
    mainClass: "hidden 2xl:flex",
    moreClass: "block 2xl:hidden",
    dropdown: [
      { name: "Research Reports", path: "/resources/reports" },
      { name: "Public Documents", path: "/resources/documents" },
      { name: "Downloads", path: "/resources/downloads" },
      { name: "FAQs", path: "/resources/faqs" },
      { name: "Guides", path: "/resources/guides" },
    ],
  },
  {
    name: "Events",
    path: "/events",
    priority: "low",
    mainClass: "hidden 2xl:flex",
    moreClass: "block 2xl:hidden",
    dropdown: [
      { name: "Upcoming Events", path: "/events/upcoming" },
      { name: "Recorded Sessions", path: "/events/recorded" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    priority: "low",
    mainClass: "hidden 2xl:flex",
    moreClass: "block 2xl:hidden",
  },
];

export function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-black text-surface-white sticky top-0 z-50 w-full border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-stretch h-16">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 group mr-4 lg:mr-8"
        >
          <div className="w-8 h-8 rounded-[1px] bg-ndc-red flex items-center justify-center shrink-0 text-white">
            <Landmark className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white uppercase flex items-center">
            <span className="text-ndc-red mr-0.5">NDC</span>GHANA.NET
          </span>
        </Link>
        <div className="hidden lg:flex items-center gap-1 xl:gap-3 flex-1 justify-end">
          {NAV_ITEMS.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <div
                key={item.name}
                className={cn(
                  "group relative flex items-center h-full px-1.5 xl:px-2",
                  item.mainClass
                )}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "text-sm font-semibold flex items-center gap-1 transition-colors h-full",
                    isActive
                      ? "text-white border-b-2 border-ndc-red"
                      : "text-white/80 group-hover:text-white border-b-2 border-transparent"
                  )}
                >
                  {item.name}
                  {(item.dropdown || item.megaMenu) && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:rotate-180 transition-transform" />
                  )}
                </Link>

                {/* Standard Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-[1px] shadow-sm">
                    <div className="p-1 space-y-0.5">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-black rounded-[1px] font-medium transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega Menu */}
                {item.megaMenu && (
                  <div className="absolute top-full left-0 mt-0 w-[600px] bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-[1px] shadow-sm flex">
                    <div className="p-4 grid grid-cols-3 gap-6 w-full">
                      {item.megaMenu.map((column, colIdx) => (
                        <div key={colIdx} className="space-y-1">
                          {column.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black rounded-[1px] font-medium transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* "More" Dropdown Container */}
          <div className="group relative hidden lg:flex 2xl:hidden flex-col justify-center h-full px-2 lg:ml-2">
            <div className="text-sm font-semibold flex items-center gap-1 transition-colors text-white/80 group-hover:text-white cursor-pointer h-full border-b-2 border-transparent">
              More
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:rotate-180 transition-transform" />
            </div>
            
            <div className="absolute top-full right-0 mt-0 w-64 bg-white border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-[1px] shadow-sm">
              <div className="p-1 space-y-0.5">
                {NAV_ITEMS.filter((i) => i.moreClass !== "hidden").map((item) => (
                  <div
                    key={item.name}
                    className={cn("group/nested relative w-full", item.moreClass)}
                  >
                    <Link
                      to={item.path}
                      className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black rounded-[1px] transition-colors"
                    >
                      {item.name}
                      {(item.dropdown || item.megaMenu) && (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </Link>
                    {(item.dropdown || item.megaMenu) && (
                      <div className="absolute top-0 right-full mr-0 w-56 bg-white border border-gray-200 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50 rounded-[1px] shadow-sm">
                        <div className="p-1 space-y-0.5">
                          {item.dropdown
                            ? item.dropdown.map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black rounded-[1px] font-medium transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))
                            : item.megaMenu?.flat().map((sub) => (
                                <Link
                                  key={sub.path}
                                  to={sub.path}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black rounded-[1px] font-medium transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center ml-4 pl-4 border-l border-white/10 h-8">
             <Link to="/admin" className="text-white/60 hover:text-white text-sm flex items-center gap-1.5 transition-colors">
                <ShieldCheck className="w-4 h-4" /> Admin
             </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-current p-1.5 hover:bg-white/10 rounded-[1px] transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full h-[calc(100vh-64px)] overflow-y-auto bg-black border-b border-white/10 shadow-sm animate-in slide-in-from-top-2">
          <div className="px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              const hasSub = !!(item.dropdown || item.megaMenu);
              return (
                <div key={item.name} className="border-b border-white/10 last:border-0">
                  <div className="flex w-full items-center justify-between py-3">
                    <Link
                      to={item.path}
                      onClick={() => !hasSub && closeMenu()}
                      className="text-base font-semibold text-white/90 hover:text-white flex-1"
                    >
                      {item.name}
                    </Link>
                    {hasSub && (
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(
                            openMobileDropdown === item.name ? null : item.name
                          )
                        }
                        className="p-2 -mr-2"
                      >
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-white/60 transition-transform duration-200",
                            openMobileDropdown === item.name && "rotate-180 text-white"
                          )}
                        />
                      </button>
                    )}
                  </div>
                  {hasSub && openMobileDropdown === item.name && (
                    <div className="bg-white/5 pl-4 py-2 mb-2 rounded-[1px]">
                      {item.dropdown
                        ? item.dropdown.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={closeMenu}
                              className="block py-2.5 text-sm font-medium text-white/70 hover:text-white"
                            >
                              {sub.name}
                            </Link>
                          ))
                        : item.megaMenu?.flat().map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={closeMenu}
                              className="block py-2.5 text-sm font-medium text-white/70 hover:text-white"
                            >
                              {sub.name}
                            </Link>
                          ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-4 mt-4 border-t border-white/10">
               <Link to="/admin" onClick={closeMenu} className="flex items-center gap-2 text-base font-semibold text-white/90 hover:text-white py-3">
                  <ShieldCheck className="w-5 h-5" /> Admin Portal
               </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
