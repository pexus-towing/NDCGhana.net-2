import { Link } from "react-router-dom";
import MPProfile from "../MPProfile";
import { Eye, ExternalLink } from "lucide-react";

export default function ProfilePreview() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <Eye className="w-6 h-6 text-[#006B3C]" /> Public Profile Preview
          </h1>
          <p className="text-gray-500 mt-1 text-sm font-medium">
            This is exactly how citizens and the public see your official profile.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            to="/mp-portal/profile/edit"
            className="px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
          >
            Edit Info
          </Link>
          <Link 
            to="/mp-portal/profile/biography"
            className="px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap hidden sm:flex"
          >
            Edit Bio
          </Link>
          <Link 
            to="/mp-portal/profile/committees"
            className="px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap hidden sm:flex"
          >
            Committees
          </Link>
          <Link 
            to="/mp-portal/profile/contact"
            className="px-4 py-2 bg-[#006B3C] text-white rounded-[1px] text-sm font-bold hover:bg-[#004B2B] transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
          >
            Contact Info
          </Link>
          <a 
            href="/mps/1" 
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap hidden sm:flex"
          >
            Live Preview <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="bg-white border text-left border-gray-200 shadow-sm rounded-[1px] overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none border-4 border-emerald-500/20 z-50"></div>
        
        {/* We wrap MPProfile in a div that handles its full-page styles, but limits its height or scales it if needed, or just lets it render naturally. Since MPProfile has min-h-screen, we can just render it. */}
        <div className="w-full relative bg-surface-white pointer-events-none">
           <MPProfile />
        </div>
      </div>
    </div>
  );
}
