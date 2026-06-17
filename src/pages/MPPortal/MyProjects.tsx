import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FolderKanban, 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Eye, 
  Edit, 
  TrendingUp,
  MapPin,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Project {
  id: string;
  name: string;
  category: string;
  status: "Completed" | "Ongoing" | "Planned" | "Delayed";
  budget: string;
  progress: number;
  lastUpdated: string;
  location: string;
}

const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    name: "Mepe ICT Center Construction",
    category: "Education",
    status: "Ongoing",
    budget: "GH₵ 500,000",
    progress: 65,
    lastUpdated: "2023-10-15",
    location: "Mepe",
  },
  {
    id: "2",
    name: "District Hospital Ward Expansion",
    category: "Health",
    status: "Completed",
    budget: "GH₵ 1,200,000",
    progress: 100,
    lastUpdated: "2023-09-01",
    location: "Battor",
  },
  {
    id: "3",
    name: "Aveyime Road Resurfacing",
    category: "Infrastructure",
    status: "Delayed",
    budget: "GH₵ 850,000",
    progress: 30,
    lastUpdated: "2023-10-10",
    location: "Aveyime",
  },
  {
    id: "4",
    name: "Rural Borehole Initiative",
    category: "Water",
    status: "Planned",
    budget: "GH₵ 300,000",
    progress: 0,
    lastUpdated: "2023-10-20",
    location: "Multiple locations",
  },
  {
    id: "5",
    name: "Juapong Market Stalls Update",
    category: "Economy",
    status: "Ongoing",
    budget: "GH₵ 420,000",
    progress: 80,
    lastUpdated: "2023-10-18",
    location: "Juapong",
  }
];

export default function MyProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const filteredProjects = MOCK_PROJECTS.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || project.status === filterStatus;
    const matchesCategory = filterCategory === "All" || project.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const toggleMenu = (id: string) => {
    if (activeMenu === id) setActiveMenu(null);
    else setActiveMenu(id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <FolderKanban className="w-6 h-6 text-[#006B3C]" /> My Projects
          </h1>
          <p className="text-gray-500 mt-1 text-sm font-medium">
            Manage, track, and update all your constituency development projects.
          </p>
        </div>
        <Link 
          to="/mp-portal/projects/new" 
          className="px-4 py-2 bg-[#006B3C] text-white rounded-[1px] text-sm font-bold hover:bg-[#004B2B] transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
        >
          <Plus className="w-4 h-4" /> Add Project
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
              placeholder="Search projects by name or location..."
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
                    <option value="Completed">Completed</option>
                    <option value="Ongoing">Ongoing</option>
                    <option value="Planned">Planned</option>
                    <option value="Delayed">Delayed</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Category</label>
                  <select 
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-[1px] focus:outline-none focus:border-[#006B3C] text-sm font-medium"
                  >
                    <option value="All">All Categories</option>
                    <option value="Education">Education</option>
                    <option value="Health">Health</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Water">Water</option>
                    <option value="Economy">Economy</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Budget Range</label>
                  <select 
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-[1px] focus:outline-none focus:border-[#006B3C] text-sm font-medium"
                  >
                    <option value="All">Any Budget</option>
                    <option value="low">Under GH₵ 100,000</option>
                    <option value="med">GH₵ 100,000 - 500,000</option>
                    <option value="high">Over GH₵ 500,000</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Projects Table */}
      <div className="bg-white border text-left border-gray-200 shadow-sm rounded-[1px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-bold text-xs sticky left-0 bg-gray-50">Project Name</th>
                <th className="px-6 py-4 font-bold text-xs">Status</th>
                <th className="px-6 py-4 font-bold text-xs">Budget</th>
                <th className="px-6 py-4 font-bold text-xs">Progress</th>
                <th className="px-6 py-4 font-bold text-xs">Last Updated</th>
                <th className="px-6 py-4 font-bold text-xs text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-900 font-medium bg-white">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 sticky left-0 bg-white group-hover:bg-gray-50">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900">{project.name}</span>
                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                          <span className="flex items-center gap-1"><FolderKanban className="w-3 h-3" /> {project.category}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {project.location}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-[1px] ${
                        project.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/50' : 
                        project.status === 'Ongoing' ? 'bg-blue-50 text-blue-700 border border-blue-200/50' : 
                        project.status === 'Planned' ? 'bg-gray-100 text-gray-700 border border-gray-300/50' : 
                        'bg-red-50 text-red-700 border border-red-200/50'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {project.budget}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${project.progress === 100 ? 'bg-emerald-500' : 'bg-[#006B3C]'}`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-gray-700">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-xs">
                      {new Date(project.lastUpdated).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right relative">
                      <button 
                        onClick={() => toggleMenu(project.id)}
                        className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-[1px] transition-colors"
                      >
                        <MoreVertical className="w-5 h-5" />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeMenu === project.id && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setActiveMenu(null)}></div>
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="absolute right-6 top-10 mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded-[1px] z-20 py-1"
                            >
                              <Link 
                                to={`/mp-portal/projects/${project.id}`}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#006B3C] font-medium"
                              >
                                <Eye className="w-4 h-4" /> View Details
                              </Link>
                              <Link 
                                to={`/mp-portal/projects/${project.id}/edit`}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#006B3C] font-medium"
                              >
                                <Edit className="w-4 h-4" /> Edit Project
                              </Link>
                              <Link 
                                to={`/mp-portal/projects/${project.id}/update`}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#006B3C] font-medium"
                              >
                                <TrendingUp className="w-4 h-4" /> Update Progress
                              </Link>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500 bg-gray-50">
                    No projects found matching your criteria.
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
