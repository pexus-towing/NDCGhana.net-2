import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  BadgeCheck, 
  AlertCircle,
  BarChart2,
  Calendar,
  MessageSquareText,
  Activity,
  ThumbsUp,
  FileText
} from "lucide-react";

export default function MemberProfileView() {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);

  const [member, setMember] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    location: "",
    isVerified: true,
    participationScore: 0,
    joinDate: "",
    engagementHistory: [] as any[],
    suggestionsSubmitted: [] as any[]
  });

  useEffect(() => {
    // Mock API Fetch
    setIsLoading(true);
    setTimeout(() => {
      setMember({
        id: id || "1",
        name: "Kwame Mensah",
        email: "kwame.mensah@email.com",
        phone: "024 123 4567",
        location: "Mepe South",
        isVerified: true,
        participationScore: 85,
        joinDate: "2023-01-15",
        engagementHistory: [
          { id: "e1", type: "Town Hall", title: "Attended Mepe Youth Townhall", date: "2023-09-12" },
          { id: "e2", type: "Volunteer", title: "Volunteered at Community Cleanup", date: "2023-08-05" },
          { id: "e3", type: "Survey", title: "Completed Healthcare Needs Survey", date: "2023-04-20" }
        ],
        suggestionsSubmitted: [
          { id: "s1", subject: "Urgent need for streetlights in Mepe", status: "New", date: "2023-10-24" },
          { id: "s2", subject: "Youth entrepreneurship fund ideas", status: "Resolved", date: "2023-05-10" }
        ]
      });
      setIsLoading(false);
    }, 600);
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 text-[#006B3C]">
        <div className="text-xl font-bold animate-pulse">Loading profile data...</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div className="flex items-center gap-4">
          <Link 
            to="/mp-portal/members"
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              Member Profile
            </h1>
            <p className="text-gray-500 mt-1 text-sm font-medium">
              Detailed view of constituent engagement and history.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Contact & Basic Info */}
        <div className="space-y-6 lg:col-span-1">
          <div className="bg-white border border-gray-200 shadow-sm rounded-[1px] p-6 text-center relative overflow-hidden">
             
             {/* decorative background shape */}
             <div className="absolute top-0 left-0 right-0 h-24 bg-[#006B3C]/5"></div>

             <div className="w-24 h-24 bg-white border-4 border-white shadow-md rounded-full flex items-center justify-center text-3xl font-bold text-gray-500 mx-auto relative z-10 mb-4">
                {member.name.charAt(0)}
             </div>

             <h2 className="text-xl font-bold text-gray-900 flex items-center justify-center gap-2 relative z-10">
               {member.name}
               {member.isVerified ? (
                  <BadgeCheck className="w-5 h-5 text-emerald-600" title="Verified Constituency Member" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-amber-500" title="Unverified Member" />
                )}
             </h2>

             <p className="text-sm text-gray-500 font-medium mt-1 mb-6 flex items-center justify-center gap-1.5 relative z-10">
                <Calendar className="w-4 h-4" /> Joined {new Date(member.joinDate).toLocaleDateString()}
             </p>

             <div className="space-y-4 text-left border-t border-gray-100 pt-6">
                <div className="flex items-start gap-3">
                   <div className="p-2 bg-gray-50 rounded-[1px] text-gray-400">
                     <Mail className="w-4 h-4" />
                   </div>
                   <div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</p>
                     <a href={`mailto:${member.email}`} className="text-sm font-medium text-gray-900 hover:text-[#006B3C] truncate block mt-0.5">{member.email}</a>
                   </div>
                </div>

                <div className="flex items-start gap-3">
                   <div className="p-2 bg-gray-50 rounded-[1px] text-gray-400">
                     <Phone className="w-4 h-4" />
                   </div>
                   <div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone Number</p>
                     <a href={`tel:${member.phone}`} className="text-sm font-medium text-gray-900 hover:text-[#006B3C] block mt-0.5">{member.phone}</a>
                   </div>
                </div>

                <div className="flex items-start gap-3">
                   <div className="p-2 bg-gray-50 rounded-[1px] text-gray-400">
                     <MapPin className="w-4 h-4" />
                   </div>
                   <div>
                     <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location</p>
                     <p className="text-sm font-medium text-gray-900 mt-0.5">{member.location}</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm rounded-[1px] p-6">
             <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
               <Activity className="w-5 h-5 text-[#006B3C]" /> Community Score
             </h3>
             <div className="flex items-end gap-2 mb-3">
               <span className="text-4xl font-black text-gray-900 tracking-tighter">{member.participationScore}</span>
               <span className="text-sm text-gray-500 font-bold mb-1.5 uppercase tracking-wider">/ 100</span>
             </div>
             <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                <div 
                  className={`h-full rounded-full ${
                    member.participationScore >= 80 ? 'bg-emerald-500' :
                    member.participationScore >= 50 ? 'bg-blue-500' :
                    'bg-amber-500'
                  }`}
                  style={{ width: `${member.participationScore}%` }}
                />
             </div>
             <p className="text-xs font-medium text-gray-500 leading-relaxed">
               This score measures the constituent's engagement through town halls, surveys, and accepted suggestions.
             </p>
          </div>
        </div>

        {/* Right Column: Activity History */}
        <div className="space-y-6 lg:col-span-2">
          {/* Suggestions */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-[1px] overflow-hidden">
             <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
               <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                 <MessageSquareText className="w-5 h-5 text-emerald-600" /> Submitted Suggestions
               </h3>
               <span className="bg-white border border-gray-200 text-gray-600 text-xs font-bold px-2.5 py-0.5 rounded-[1px]">
                 {member.suggestionsSubmitted.length} Total
               </span>
             </div>
             <div className="divide-y divide-gray-100">
               {member.suggestionsSubmitted.length > 0 ? (
                 member.suggestionsSubmitted.map(suggestion => (
                   <div key={suggestion.id} className="p-4 sm:px-6 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                     <div>
                       <Link 
                         to={`/mp-portal/suggestions/${suggestion.id}`} 
                         className="text-sm font-bold text-gray-900 hover:text-[#006B3C] mb-1 inline-block"
                       >
                         {suggestion.subject}
                       </Link>
                       <p className="text-xs text-gray-500 font-medium flex items-center gap-1.5">
                         <Calendar className="w-3.5 h-3.5" /> {new Date(suggestion.date).toLocaleDateString()}
                       </p>
                     </div>
                     <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-[1px] whitespace-nowrap w-max ${
                        suggestion.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/50' : 
                        suggestion.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border border-blue-200/50' : 
                        suggestion.status === 'New' ? 'bg-amber-50 text-amber-700 border border-amber-200/50' : 
                        'bg-gray-100 text-gray-700 border border-gray-300/50'
                      }`}>
                        {suggestion.status}
                      </span>
                   </div>
                 ))
               ) : (
                 <div className="p-8 text-center text-gray-500 text-sm font-medium">
                   No suggestions submitted yet.
                 </div>
               )}
             </div>
          </div>

          {/* Engagement History */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-[1px] overflow-hidden">
             <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
               <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                 <ThumbsUp className="w-5 h-5 text-blue-600" /> Engagement History
               </h3>
             </div>
             <div className="p-6">
                <div className="relative border-l-2 border-gray-100 ml-3 space-y-6">
                  {member.engagementHistory.length > 0 ? (
                    member.engagementHistory.map((event, idx) => (
                      <div key={event.id} className="relative pl-6">
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
                           <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{event.type}</span>
                          <span className="text-sm font-bold text-gray-900 mb-1">{event.title}</span>
                          <span className="text-xs text-gray-500 flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" /> {new Date(event.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-sm font-medium pl-6">No engagement history recorded.</div>
                  )}
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
