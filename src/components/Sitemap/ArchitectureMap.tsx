import { Layers, Globe, Radio, Database, ShieldCheck, Calendar, Lock, Users, PieChart, Home, Activity } from "lucide-react";

export function ArchitectureMap() {
  const sections = [
    {
      title: "Core Platform",
      icon: Home,
      categories: [
        { name: "Homepage", links: ["Featured Content", "Quick Links"] },
        { name: "About Us", links: ["Mission & Vision", "Leadership Team", "Platform Objectives"] },
        { name: "Members of Parliament", links: ["MP Directory", "MP Profiles", "Parliamentary Records", "Attendance Reports", "Committee Memberships"] },
        { name: "Project Tracker", links: ["Active Projects", "Completed Projects", "Regional Projects", "Verification Reports"] },
        { name: "National Transparency Dashboard", links: ["Transparency Metrics", "Performance Rankings", "Budget Monitoring", "National Reports"] }
      ]
    },
    {
      title: "Community & Civic Engagement",
      icon: Users,
      categories: [
        { name: "Community", links: ["Community Statistics", "Community Reports", "Citizen Feedback", "Community Events", "Success Stories"] },
        { name: "Citizen Participation", links: ["Submit Feedback", "Suggest Projects", "Report Issues", "Community Discussions", "Volunteer Programs"] },
        { name: "Civic Education", links: ["Transparency Guides", "Parliamentary Education", "Governance Resources", "Public Participation Guides"] }
      ]
    },
    {
      title: "Diaspora Ecosystem",
      icon: Globe,
      categories: [
        { name: "Diaspora Hub", links: ["Global Community Map", "Country Networks", "Constituency Connections", "Diaspora Events"] },
        { name: "Opportunities", links: ["Development Support", "Community Projects", "Investment Opportunities", "Volunteer Programs"] },
        { name: "Resources", links: ["Constituency Information", "MP Directory", "Development Reports"] }
      ]
    },
    {
      title: "Media & Information Center",
      icon: Radio,
      categories: [
        { name: "News", links: ["Parliamentary News", "Constituency News", "Project Updates", "Community Stories"] },
        { name: "Multimedia", links: ["Videos", "Podcasts", "Photo Gallery", "Live Streams"] },
        { name: "Publications", links: ["Reports", "Research Papers", "Press Releases", "Downloads"] }
      ]
    },
    {
      title: "Resources Center",
      icon: Database,
      categories: [
        { name: "Reports & Documents", links: ["Transparency Reports", "Development Reports", "MP Performance Reports", "Budget Reports"] },
        { name: "Data & Analytics", links: ["Statistics Dashboard", "Community Analytics", "Regional Reports", "Export Center"] },
        { name: "Downloads", links: ["PDFs", "CSV Files", "Public Records", "Research Documents"] }
      ]
    },
    {
      title: "Transparency & Accountability Hub",
      icon: ShieldCheck,
      categories: [
        { name: "Accountability", links: ["MP Performance Scores", "Attendance Records", "Parliamentary Contributions"] },
        { name: "Development Monitoring", links: ["Project Tracking", "Verification Reports", "Budget Monitoring"] },
        { name: "Citizen Oversight", links: ["Community Reports", "Transparency Alerts", "Public Feedback"] }
      ]
    },
    {
      title: "Events & Engagement Directory",
      icon: Calendar,
      categories: [
        { name: "Event Types", links: ["Parliamentary Sessions", "Community Forums", "Town Halls", "Development Launches", "Diaspora Meetings"] },
        { name: "Features", links: ["Event Calendar", "Upcoming Events", "Recorded Sessions"] }
      ]
    },
    {
      title: "Administrative Pages",
      icon: Lock,
      isRestricted: true,
      categories: [
        { name: "Administration", links: ["Admin Dashboard", "User Management", "Content Management", "Reports Center", "Audit Logs", "Permissions"] }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-6 bg-[#006B3C]"></div>
          <h2 className="text-3xl font-bold text-gray-900 font-serif">Main Platform Structure</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
           {sections.map((section, idx) => (
             <div key={idx} className="relative">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-2.5 bg-gray-50 border border-gray-200 rounded-[1px] text-[#006B3C]">
                      <section.icon className="w-5 h-5" />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                     {section.title}
                     {section.isRestricted && <Lock className="w-4 h-4 text-red-500" />}
                   </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                   {section.categories.map((cat, i) => (
                     <div key={i} className="bg-gray-50/50 p-5 rounded-[1px] border border-gray-100 hover:border-gray-200 transition-colors">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                           <Layers className="w-4 h-4 text-[#006B3C]" />
                           {cat.name}
                        </h4>
                        <ul className="space-y-2.5">
                           {cat.links.map((link, j) => (
                             <li key={j} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#006B3C] cursor-pointer group">
                                <span className="w-1 h-1 bg-gray-300 rounded-[1px] group-hover:bg-[#006B3C] transition-colors"></span>
                                {link}
                             </li>
                           ))}
                        </ul>
                     </div>
                   ))}
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
