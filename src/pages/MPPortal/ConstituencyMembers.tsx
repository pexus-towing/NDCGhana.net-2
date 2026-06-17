import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Search, 
  Filter, 
  BadgeCheck,
  MapPin,
  Mail,
  Phone,
  BarChart2,
  ChevronDown,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  isVerified: boolean;
  participationScore: number;
  joinDate: string;
}

const MOCK_MEMBERS: Member[] = [
  {
    id: "1",
    name: "Kwame Mensah",
    email: "kwame.mensah@email.com",
    phone: "024 123 4567",
    location: "Mepe South",
    isVerified: true,
    participationScore: 85,
    joinDate: "2023-01-15",
  },
  {
    id: "2",
    name: "Akua Osei",
    email: "akua.o@email.com",
    phone: "020 987 6543",
    location: "Battor",
    isVerified: true,
    participationScore: 92,
    joinDate: "2022-11-04",
  },
  {
    id: "3",
    name: "Kofi Owusu",
    email: "kofi.owusu@email.com",
    phone: "027 456 7890",
    location: "Aveyime",
    isVerified: false,
    participationScore: 40,
    joinDate: "2023-08-22",
  },
  {
    id: "4",
    name: "Ama Serwaa",
    email: "ama.s@email.com",
    phone: "055 234 5678",
    location: "Juapong",
    isVerified: true,
    participationScore: 78,
    joinDate: "2023-03-10",
  },
  {
    id: "5",
    name: "Yaw Yeboah",
    email: "yaw.yeboah@email.com",
    phone: "024 876 5432",
    location: "Mepe North",
    isVerified: false,
    participationScore: 15,
    joinDate: "2023-09-05",
  },
  {
    id: "6",
    name: "Esi Cobbinah",
    email: "esi.c@email.com",
    phone: "020 111 2233",
    location: "Battor",
    isVerified: true,
    participationScore: 60,
    joinDate: "2023-05-18",
  }
];

export default function ConstituencyMembers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterVerification, setFilterVerification] = useState("All");
  const [filterLocation, setFilterLocation] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const locations = Array.from(new Set(MOCK_MEMBERS.map(m => m.location)));

  const filteredMembers = MOCK_MEMBERS.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.phone.includes(searchTerm);
                          
    const matchesVerification = filterVerification === "All" || 
                                (filterVerification === "Verified" && member.isVerified) ||
                                (filterVerification === "Unverified" && !member.isVerified);
                                
    const matchesLocation = filterLocation === "All" || member.location === filterLocation;
    
    return matchesSearch && matchesVerification && matchesLocation;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <Users className="w-6 h-6 text-[#006B3C]" /> Constituency Members
          </h1>
          <p className="text-gray-500 mt-1 text-sm font-medium">
            View and manage registered citizens in your constituency.
          </p>
        </div>
      </div>

      {/* Constraints & Filters */}
      <div className="bg-white p-4 rounded-[1px] border border-gray-200 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 px-4 py-2 bg-gray-50 border border-gray-200 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:bg-white transition-colors text-sm font-medium text-gray-900"
            />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2 border rounded-[1px] text-sm font-bold flex items-center gap-2 transition-colors w-full md:w-auto justify-center ${showFilters ? 'bg-gray-100 border-gray-300 text-gray-900' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'}`}
          >
            <Filter className="w-4 h-4" /> Filters {showFilters ? <ChevronDown className="w-4 h-4 rotate-180 transition-transform" /> : <ChevronDown className="w-4 h-4 transition-transform" />}
          </button>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Verification Status</label>
                  <select 
                    value={filterVerification}
                    onChange={(e) => setFilterVerification(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-[1px] focus:outline-none focus:border-[#006B3C] text-sm font-medium"
                  >
                    <option value="All">All Statuses</option>
                    <option value="Verified">Verified</option>
                    <option value="Unverified">Unverified</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Location</label>
                  <select 
                    value={filterLocation}
                    onChange={(e) => setFilterLocation(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-[1px] focus:outline-none focus:border-[#006B3C] text-sm font-medium"
                  >
                    <option value="All">All Locations</option>
                    {locations.map(loc => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Member Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.length > 0 ? (
          filteredMembers.map(member => (
            <div key={member.id} className="bg-white border border-gray-200 shadow-sm rounded-[1px] overflow-hidden hover:border-[#006B3C]/50 transition-colors group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                      {member.name}
                      {member.isVerified ? (
                        <BadgeCheck className="w-4 h-4 text-emerald-600" title="Verified Constituency Member" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-amber-500" title="Unverified Member" />
                      )}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {member.location}
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-lg font-bold text-gray-600 border border-gray-200">
                    {member.name.charAt(0)}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a href={`mailto:${member.email}`} className="hover:text-[#006B3C] truncate">{member.email}</a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${member.phone}`} className="hover:text-[#006B3C]">{member.phone}</a>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                      <BarChart2 className="w-3.5 h-3.5" /> Participation Score
                    </label>
                    <span className="text-xs font-bold text-gray-900">{member.participationScore}/100</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        member.participationScore >= 80 ? 'bg-emerald-500' :
                        member.participationScore >= 50 ? 'bg-blue-500' :
                        'bg-amber-500'
                      }`}
                      style={{ width: `${member.participationScore}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                <span className="text-xs text-gray-500 font-medium">Joined {new Date(member.joinDate).toLocaleDateString()}</span>
                <Link 
                  to={`/mp-portal/members/${member.id}`}
                  className="w-full sm:w-auto px-4 py-1.5 bg-white border border-gray-300 text-gray-700 rounded-[1px] text-xs font-bold hover:bg-gray-100 transition-colors text-center shadow-sm"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-gray-500 bg-gray-50 border border-gray-200 border-dashed rounded-[1px]">
            No members found matching your search and filter criteria.
          </div>
        )}
      </div>
    </div>
  );
}
