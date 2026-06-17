import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export function MegaFooterDirectory() {
  const columns = [
    {
       title: "Platform",
       links: ["Home", "About", "Dashboard", "MPs", "Transparency", "Projects", "Reports", "Statistics"]
    },
    {
       title: "Community",
       links: ["Events", "Discussions", "Feedback", "Diaspora", "Global Community", "Opportunities"]
    },
    {
       title: "Media",
       links: ["News", "Videos", "Publications", "Support", "Contact", "Help Center", "FAQs"]
    }
  ];

  return (
    <footer className="bg-[#004B2B] text-white py-16">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
             <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="w-8 h-8 text-emerald-400" />
                  <span className="text-2xl font-bold font-serif tracking-tight">NDCGhana.net</span>
                </div>
                <p className="text-emerald-100 text-sm mb-8 max-w-sm leading-relaxed">
                   A premium civic-tech platform built for the Parliament of Ghana. Connecting citizens to leadership through transparency and actionable data.
                </p>
                <div className="space-y-3 text-sm text-emerald-200">
                   <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Parliament House, Osu, Accra</p>
                   <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@ndcghana.net</p>
                   <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +233 30 276 0000</p>
                </div>
             </div>

             {columns.map((col, i) => (
                <div key={i}>
                   <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{col.title}</h4>
                   <ul className="space-y-3">
                      {col.links.map((link, j) => (
                         <li key={j}>
                            <Link to={`/${link.toLowerCase().replace(/ /g, '-')}`} className="text-emerald-100 hover:text-white text-sm hover:underline transition-colors">{link}</Link>
                         </li>
                      ))}
                   </ul>
                </div>
             ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-emerald-200">
             <p>© 2026 NDCGhana.net — A Civic-Tech Platform</p>
             <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility Statement</Link>
             </div>
          </div>
       </div>
    </footer>
  );
}
