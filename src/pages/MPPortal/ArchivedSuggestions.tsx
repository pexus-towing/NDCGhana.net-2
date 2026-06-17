import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArchiveRestore, 
  Search, 
  Trash2, 
  Eye, 
  Archive,
  ArrowLeft
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Suggestion {
  id: string;
  citizenName: string;
  subject: string;
  date: string;
  status: "Archived";
  priority: "High" | "Medium" | "Low";
}

const MOCK_ARCHIVED: Suggestion[] = [
  {
    id: "10",
    citizenName: "Abena Ofori",
    subject: "Noise pollution complain from local bar",
    date: "2023-08-15T10:30:00Z",
    status: "Archived",
    priority: "Low",
  },
  {
    id: "11",
    citizenName: "John Appiah",
    subject: "Suggestion for a new youth center",
    date: "2023-07-20T14:15:00Z",
    status: "Archived",
    priority: "Medium",
  }
];

export default function ArchivedSuggestions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [archivedItems, setArchivedItems] = useState(MOCK_ARCHIVED);

  const filteredSuggestions = archivedItems.filter(suggestion => {
    return suggestion.citizenName.toLowerCase().includes(searchTerm.toLowerCase()) || 
           suggestion.subject.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleRestore = (id: string) => {
    setArchivedItems(prev => prev.filter(item => item.id !== id));
    // Implementation to move back to regular inbox
  };

  const handlePermanentDelete = (id: string) => {
    if (window.confirm("Are you sure you want to permanently delete this suggestion? This action cannot be undone.")) {
      setArchivedItems(prev => prev.filter(item => item.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <Archive className="w-6 h-6 text-gray-500" /> Archived Suggestions
          </h1>
          <p className="text-gray-500 mt-1 text-sm font-medium">
            View, restore, or permanently delete archived feedback.
          </p>
        </div>
        <Link 
          to="/mp-portal/suggestions"
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Inbox
        </Link>
      </div>

      <div className="bg-white p-4 rounded-[1px] border border-gray-200 shadow-sm flex flex-col gap-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search archived suggestions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 px-4 py-2 bg-gray-50 border border-gray-200 rounded-[1px] focus:outline-none focus:border-gray-400 focus:bg-white transition-colors text-sm font-medium text-gray-900"
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 shadow-sm rounded-[1px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-bold text-xs sticky left-0 bg-gray-50">Citizen & Subject</th>
                <th className="px-6 py-4 font-bold text-xs">Priority</th>
                <th className="px-6 py-4 font-bold text-xs">Date Archived</th>
                <th className="px-6 py-4 font-bold text-xs text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-900 font-medium bg-white">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((suggestion) => (
                  <tr key={suggestion.id} className="hover:bg-gray-50 transition-colors opacity-70 hover:opacity-100">
                    <td className="px-6 py-4 sticky left-0 group-hover:bg-gray-50 bg-white">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-700 line-through decoration-gray-300">
                          {suggestion.subject}
                        </span>
                        <span className="text-gray-500 text-xs mt-1">{suggestion.citizenName}</span>
                      </div>
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
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          to={`/mp-portal/suggestions/${suggestion.id}`}
                          className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-[1px] transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button 
                          onClick={() => handleRestore(suggestion.id)}
                          className="p-2 text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 rounded-[1px] transition-colors"
                          title="Restore to Inbox"
                        >
                          <ArchiveRestore className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handlePermanentDelete(suggestion.id)}
                          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-[1px] transition-colors"
                          title="Permanently Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500 bg-gray-50">
                    No archived suggestions found.
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
