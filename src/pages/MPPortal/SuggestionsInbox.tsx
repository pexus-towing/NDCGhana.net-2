import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  MessageSquareText, 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  CheckCircle,
  Archive,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Suggestion {
  id: string;
  citizenName: string;
  subject: string;
  date: string;
  status: "New" | "In Progress" | "Resolved" | "Archived";
  priority: "High" | "Medium" | "Low";
  isRead: boolean;
}

const MOCK_SUGGESTIONS: Suggestion[] = [
  {
    id: "1",
    citizenName: "Kwame Mensah",
    subject: "Urgent need for streetlights in Mepe",
    date: "2023-10-24T10:30:00Z",
    status: "New",
    priority: "High",
    isRead: false,
  },
  {
    id: "2",
    citizenName: "Akua Osei",
    subject: "Scholarship opportunities for SHS graduates",
    date: "2023-10-23T14:15:00Z",
    status: "In Progress",
    priority: "Medium",
    isRead: true,
  },
  {
    id: "3",
    citizenName: "Kofi Owusu",
    subject: "Market toll collection issues",
    date: "2023-10-22T09:00:00Z",
    status: "New",
    priority: "Medium",
    isRead: false,
  },
  {
    id: "4",
    citizenName: "Ama Serwaa",
    subject: "Thanks for the borehole in Aveyime",
    date: "2023-10-20T16:45:00Z",
    status: "Resolved",
    priority: "Low",
    isRead: true,
  },
  {
    id: "5",
    citizenName: "Yaw Yeboah",
    subject: "Flooding around the district hospital",
    date: "2023-10-18T11:20:00Z",
    status: "In Progress",
    priority: "High",
    isRead: true,
  }
];

export default function SuggestionsInbox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const filteredSuggestions = MOCK_SUGGESTIONS.filter(suggestion => {
    const matchesSearch = suggestion.citizenName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          suggestion.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || suggestion.status === filterStatus;
    const matchesPriority = filterPriority === "All" || suggestion.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const toggleMenu = (id: string) => {
    if (activeMenu === id) setActiveMenu(null);
    else setActiveMenu(id);
  };

  const markAsRead = (id: string) => {
    // In a real app, logic to mark as read
    console.log("Marking as read", id);
    setActiveMenu(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <MessageSquareText className="w-6 h-6 text-[#006B3C]" /> Citizen Suggestions
          </h1>
          <p className="text-gray-500 mt-1 text-sm font-medium">
            Review and manage feedback and suggestions from your constituents.
          </p>
        </div>
        <Link 
          to="/mp-portal/suggestions/archived"
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
        >
          <Archive className="w-4 h-4" /> View Archived
        </Link>
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
              placeholder="Search by citizen name or subject..."
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
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Status</label>
                  <select 
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-[1px] focus:outline-none focus:border-[#006B3C] text-sm font-medium"
                  >
                    <option value="All">All Statuses</option>
                    <option value="New">New</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Priority</label>
                  <select 
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-[1px] focus:outline-none focus:border-[#006B3C] text-sm font-medium"
                  >
                    <option value="All">All Priorities</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Inbox Table */}
      <div className="bg-white border border-gray-200 shadow-sm rounded-[1px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-bold text-xs sticky left-0 bg-gray-50">Citizen & Subject</th>
                <th className="px-6 py-4 font-bold text-xs">Status</th>
                <th className="px-6 py-4 font-bold text-xs">Priority</th>
                <th className="px-6 py-4 font-bold text-xs">Date</th>
                <th className="px-6 py-4 font-bold text-xs text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-900 font-medium bg-white">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((suggestion) => (
                  <tr key={suggestion.id} className={`hover:bg-gray-50 transition-colors ${!suggestion.isRead ? 'bg-emerald-50/30' : ''}`}>
                    <td className={`px-6 py-4 sticky left-0 group-hover:bg-gray-50 ${!suggestion.isRead ? 'bg-emerald-50/30' : 'bg-white'}`}>
                      <div className="flex flex-col">
                        <span className={`font-bold ${!suggestion.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                          {suggestion.subject}
                          {!suggestion.isRead && (
                            <span className="ml-2 inline-flex w-2 h-2 rounded-full bg-[#006B3C]"></span>
                          )}
                        </span>
                        <span className="text-gray-500 text-xs mt-1">{suggestion.citizenName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-[1px] ${
                        suggestion.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/50' : 
                        suggestion.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border border-blue-200/50' : 
                        suggestion.status === 'New' ? 'bg-amber-50 text-amber-700 border border-amber-200/50' : 
                        'bg-gray-100 text-gray-700 border border-gray-300/50'
                      }`}>
                        {suggestion.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-[1px] ${
                        suggestion.priority === 'High' ? 'bg-red-50 text-red-700 border border-red-200/50' : 
                        suggestion.priority === 'Medium' ? 'bg-orange-50 text-orange-700 border border-orange-200/50' : 
                        'bg-gray-50 text-gray-600 border border-gray-200/50'
                      }`}>
                        {suggestion.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-xs">
                      {new Date(suggestion.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right relative">
                      <button 
                        onClick={() => toggleMenu(suggestion.id)}
                        className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-[1px] transition-colors"
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeMenu === suggestion.id && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setActiveMenu(null)}></div>
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="absolute right-6 top-10 mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded-[1px] z-20 py-1"
                            >
                              <Link 
                                to={`/mp-portal/suggestions/${suggestion.id}`}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#006B3C] font-medium"
                              >
                                <Eye className="w-4 h-4" /> View Details
                              </Link>
                              {!suggestion.isRead && (
                                <button 
                                  onClick={() => markAsRead(suggestion.id)}
                                  className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#006B3C] font-medium"
                                >
                                  <CheckCircle className="w-4 h-4" /> Mark as Read
                                </button>
                              )}
                              <button 
                                className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#006B3C] font-medium"
                              >
                                <Archive className="w-4 h-4" /> Archive
                              </button>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500 bg-gray-50">
                    No suggestions found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
