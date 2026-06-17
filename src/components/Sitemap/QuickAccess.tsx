import { Users, LayoutDashboard, Target, BarChart2, Globe, Radio } from "lucide-react";
import { Link } from "react-router-dom";

export function QuickAccess() {
  const cards = [
    { title: "Members of Parliament", desc: "Browse MP profiles and performance records.", icon: Users, path: "/mps", color: "text-[#006B3C]", bg: "bg-emerald-50" },
    { title: "Project Tracker", desc: "Monitor national and constituency development projects.", icon: Target, path: "/projects", color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Transparency Dashboard", desc: "View national accountability metrics and rankings.", icon: LayoutDashboard, path: "/dashboard", color: "text-indigo-600", bg: "bg-indigo-50" },
    { title: "Community Statistics", desc: "Analyze citizen participation insights and metrics.", icon: BarChart2, path: "/community", color: "text-orange-600", bg: "bg-orange-50" },
    { title: "Diaspora Hub", desc: "Global Ghanaian engagement and investment networks.", icon: Globe, path: "/diaspora", color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Media Center", desc: "Access news, publications, reports, and announcements.", icon: Radio, path: "/media", color: "text-[#CE1126]", bg: "bg-red-50" }
  ];

  return (
    <section className="py-16 bg-[#F8F9FA] relative -mt-8 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           {cards.map((card, i) => (
              <Link key={i} to={card.path} className="bg-white rounded-[1px] p-6 shadow-sm hover:shadow-sm hover:-translate-y-[1px] transition-all border border-gray-100 group flex items-start gap-4">
                 <div className={`p-4 rounded-[1px] ${card.bg} ${card.color} shrink-0  transition-transform`}>
                    <card.icon className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#006B3C] transition-colors">{card.title}</h3>
                    <p className="text-sm text-gray-600 leading-snug">{card.desc}</p>
                 </div>
              </Link>
           ))}
        </div>
      </div>
    </section>
  );
}
