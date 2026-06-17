import { ArrowLeft, Construction } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function ComingSoon() {
  const location = useLocation();
  const titleMap: Record<string, string> = {
    "/features": "Features",
    "/contact": "Contact Us",
    "/resources": "Resources",
    "/events": "Events",
  };

  const pathContent = location.pathname.split('/').filter(Boolean).map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)).join(' > ');
  
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-24 px-4 bg-gray-50">
      <div className="bg-white p-8 md:p-12 rounded-[1px] shadow-sm border border-gray-200 max-w-2xl w-full text-center">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Construction className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Module Under Development
        </h1>
        <p className="text-gray-600 mb-2">
          The module for <span className="font-semibold text-gray-900">{pathContent || location.pathname}</span> is currently being built.
        </p>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We are actively working on expanding the Civic-Tech platform. This area will be available in a future release.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-[1px] hover:bg-gray-900 transition-colors font-medium border border-transparent"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
