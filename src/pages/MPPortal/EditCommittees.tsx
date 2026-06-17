import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Calendar,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Committee {
  id: string;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
}

export default function EditCommittees() {
  const [committees, setCommittees] = useState<Committee[]>([
    {
      id: "1",
      name: "Foreign Affairs Committee",
      role: "Ranking Member",
      startDate: "2017-01-07",
      endDate: "",
      isCurrent: true,
    },
    {
      id: "2",
      name: "Appointments Committee",
      role: "Member",
      startDate: "2013-01-07",
      endDate: "2017-01-06",
      isCurrent: false,
    }
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newCommittee, setNewCommittee] = useState<Partial<Committee>>({
    name: "",
    role: "",
    startDate: "",
    endDate: "",
    isCurrent: true,
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommittee.name || !newCommittee.role || !newCommittee.startDate) return;

    setCommittees(prev => [{
      id: Date.now().toString(),
      name: newCommittee.name!,
      role: newCommittee.role!,
      startDate: newCommittee.startDate!,
      endDate: newCommittee.isCurrent ? "" : newCommittee.endDate || "",
      isCurrent: newCommittee.isCurrent || false,
    }, ...prev]);

    setIsAdding(false);
    setNewCommittee({
      name: "",
      role: "",
      startDate: "",
      endDate: "",
      isCurrent: true,
    });
  };

  const removeCommittee = (id: string) => {
    setCommittees(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <Users className="w-6 h-6 text-[#006B3C]" /> Committees
          </h1>
          <p className="text-gray-500 mt-1 text-sm font-medium">
            Manage your parliamentary committee memberships and roles.
          </p>
        </div>
        <Link 
          to="/mp-portal/profile"
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Profile
        </Link>
      </div>

      <div className="bg-white border border-gray-200 shadow-sm rounded-[1px]">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Committee History</h2>
          {!isAdding && (
            <button 
              onClick={() => setIsAdding(true)}
              className="px-4 py-2 bg-[#006B3C] text-white rounded-[1px] text-sm font-bold hover:bg-[#004B2B] transition-colors flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-4 h-4" /> Add Committee
            </button>
          )}
        </div>

        <AnimatePresence>
          {isAdding && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-b border-gray-200 bg-gray-50"
            >
              <form onSubmit={handleAddSubmit} className="p-6">
                <h3 className="text-base font-bold text-gray-900 mb-4">Add New Committee</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-sm font-bold text-gray-700">Committee Name</label>
                    <input 
                      type="text" 
                      required
                      value={newCommittee.name}
                      onChange={(e) => setNewCommittee({...newCommittee, name: e.target.value})}
                      placeholder="e.g. Foreign Affairs Committee"
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700">Your Role</label>
                    <input 
                      type="text" 
                      required
                      value={newCommittee.role}
                      onChange={(e) => setNewCommittee({...newCommittee, role: e.target.value})}
                      placeholder="e.g. Member, Chairman"
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                    />
                  </div>
                  <div className="flex items-center mt-6">
                    <input
                      id="isCurrent"
                      type="checkbox"
                      checked={newCommittee.isCurrent}
                      onChange={(e) => setNewCommittee({...newCommittee, isCurrent: e.target.checked})}
                      className="w-4 h-4 text-[#006B3C] border-gray-300 rounded focus:ring-[#006B3C]"
                    />
                    <label htmlFor="isCurrent" className="ml-2 block text-sm font-bold text-gray-700 cursor-pointer">
                      I currently serve on this committee
                    </label>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-gray-700">Start Date</label>
                    <input 
                      type="date" 
                      required
                      value={newCommittee.startDate}
                      onChange={(e) => setNewCommittee({...newCommittee, startDate: e.target.value})}
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                    />
                  </div>
                  {!newCommittee.isCurrent && (
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-gray-700">End Date</label>
                      <input 
                        type="date" 
                        required={!newCommittee.isCurrent}
                        value={newCommittee.endDate}
                        onChange={(e) => setNewCommittee({...newCommittee, endDate: e.target.value})}
                        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                      />
                    </div>
                  )}
                </div>
                <div className="mt-6 flex items-center justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsAdding(false)}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-[#006B3C] text-white rounded-[1px] text-sm font-bold hover:bg-[#004B2B] transition-colors"
                  >
                    Save Committee
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="p-6">
          {committees.length === 0 ? (
            <div className="text-center py-12 text-gray-500 bg-gray-50 border border-gray-200 border-dashed rounded-[1px]">
               No committees added yet. Click "Add Committee" to start.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {committees.map(committee => (
                <div key={committee.id} className="border border-gray-200 rounded-[1px] p-5 hover:border-emerald-500 transition-colors bg-white relative group flex flex-col justify-between">
                  <button 
                    onClick={() => removeCommittee(committee.id)}
                    className="absolute top-4 right-4 p-1.5 text-gray-400 hover:bg-red-50 hover:text-red-600 rounded-[1px] opacity-0 group-hover:opacity-100 transition-all"
                    title="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  
                  <div>
                    <div className="flex items-start justify-between mb-3 pr-8">
                       <h3 className="font-bold text-gray-900 text-base">{committee.name}</h3>
                    </div>
                    
                    <div className="space-y-2">
                       <div className="flex items-center gap-2 text-sm text-gray-700">
                         <Briefcase className="w-4 h-4 text-emerald-600" />
                         <span className="font-medium">{committee.role}</span>
                       </div>
                       
                       <div className="flex items-center gap-2 text-sm text-gray-600">
                         <Calendar className="w-4 h-4 text-emerald-600" />
                         <span>{new Date(committee.startDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })} — {committee.isCurrent ? 'Present' : new Date(committee.endDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}</span>
                       </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center">
                      <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-[1px] ${committee.isCurrent ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/50' : 'bg-gray-100 text-gray-600 border border-gray-200/50'}`}>
                        {committee.isCurrent ? "Current Member" : "Past Member"}
                      </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
