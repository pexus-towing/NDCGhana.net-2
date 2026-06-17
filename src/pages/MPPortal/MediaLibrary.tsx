import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Image as ImageIcon, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Upload, 
  MoreVertical,
  FileText,
  Video,
  File,
  ChevronDown,
  Trash2,
  Download,
  Eye
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MediaItem {
  id: string;
  name: string;
  type: "Image" | "Video" | "Document";
  url: string;
  size: string;
  uploadDate: string;
  category: string;
}

const MOCK_MEDIA: MediaItem[] = [
  {
    id: "1",
    name: "Mepe_Hospital_Construction.jpg",
    type: "Image",
    url: "https://images.unsplash.com/photo-1541888081622-4a00ccdc6570?q=80&w=400&auto=format&fit=crop",
    size: "2.4 MB",
    uploadDate: "2023-10-20",
    category: "Projects",
  },
  {
    id: "2",
    name: "Town_Hall_Meeting_Video.mp4",
    type: "Video",
    url: "#",
    size: "45.2 MB",
    uploadDate: "2023-10-15",
    category: "Events",
  },
  {
    id: "3",
    name: "2023_Constituency_Report.pdf",
    type: "Document",
    url: "#",
    size: "5.1 MB",
    uploadDate: "2023-09-30",
    category: "Reports",
  },
  {
    id: "4",
    name: "Aveyime_Road_Inspection.jpg",
    type: "Image",
    url: "https://images.unsplash.com/photo-1541888081622-4a00ccdc6570?q=80&w=400&auto=format&fit=crop",
    size: "3.1 MB",
    uploadDate: "2023-10-10",
    category: "Projects",
  },
  {
    id: "5",
    name: "School_Feeding_Program_Launch.jpg",
    type: "Image",
    url: "https://images.unsplash.com/photo-1541888081622-4a00ccdc6570?q=80&w=400&auto=format&fit=crop",
    size: "1.8 MB",
    uploadDate: "2023-10-05",
    category: "Events",
  },
  {
    id: "6",
    name: "Project_Proposal_Guidelines.docx",
    type: "Document",
    url: "#",
    size: "800 KB",
    uploadDate: "2023-08-22",
    category: "Official",
  }
];

export default function MediaLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const categories = Array.from(new Set(MOCK_MEDIA.map(m => m.category)));

  const filteredMedia = MOCK_MEDIA.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || item.type === filterType;
    const matchesCategory = filterCategory === "All" || item.category === filterCategory;
    return matchesSearch && matchesType && matchesCategory;
  });

  const toggleMenu = (id: string) => {
    if (activeMenu === id) setActiveMenu(null);
    else setActiveMenu(id);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "Image": return <ImageIcon className="w-5 h-5 text-emerald-500" />;
      case "Video": return <Video className="w-5 h-5 text-blue-500" />;
      case "Document": return <FileText className="w-5 h-5 text-amber-500" />;
      default: return <File className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <ImageIcon className="w-6 h-6 text-[#006B3C]" /> Media Library
          </h1>
          <p className="text-gray-500 mt-1 text-sm font-medium">
            Manage your project images, event videos, and official documents.
          </p>
        </div>
        <button 
          className="px-4 py-2 bg-[#006B3C] text-white rounded-[1px] text-sm font-bold hover:bg-[#004B2B] transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
        >
          <Upload className="w-4 h-4" /> Upload Files
        </button>
      </div>

      {/* Constraints & Filters */}
      <div className="bg-white p-4 rounded-[1px] border border-gray-200 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 w-full md:w-auto flex flex-col md:flex-row gap-4">
             <div className="relative flex-1 w-full max-w-md">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <Search className="h-4 w-4 text-gray-400" />
               </div>
               <input
                 type="text"
                 placeholder="Search files..."
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
          
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-[1px] p-1 self-start md:self-auto w-full md:w-auto">
             <button 
               onClick={() => setViewMode('grid')}
               className={`flex-1 md:flex-none p-1.5 rounded-[1px] flex items-center justify-center transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-gray-900 border border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
               title="Grid View"
             >
               <Grid className="w-4 h-4" />
             </button>
             <button 
               onClick={() => setViewMode('list')}
               className={`flex-1 md:flex-none p-1.5 rounded-[1px] flex items-center justify-center transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-gray-900 border border-gray-200' : 'text-gray-500 hover:text-gray-700'}`}
               title="List View"
             >
               <List className="w-4 h-4" />
             </button>
          </div>
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
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">File Type</label>
                  <select 
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded-[1px] focus:outline-none focus:border-[#006B3C] text-sm font-medium"
                  >
                    <option value="All">All Types</option>
                    <option value="Image">Images</option>
                    <option value="Video">Videos</option>
                    <option value="Document">Documents</option>
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
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredMedia.length > 0 ? (
            filteredMedia.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-[1px] shadow-sm overflow-hidden group hover:border-[#006B3C]/50 transition-colors">
                <div className="aspect-video bg-gray-100 relative border-b border-gray-100">
                  {item.type === 'Image' ? (
                    <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full text-gray-400">
                       {item.type === 'Video' ? <Video className="w-12 h-12 opacity-50" /> : <FileText className="w-12 h-12 opacity-50" />}
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-[1px] text-[10px] font-bold uppercase tracking-wider text-gray-700 shadow-sm">
                    {item.type}
                  </div>
                </div>
                <div className="p-4 relative">
                  <div className="pr-6">
                    <h3 className="text-sm font-bold text-gray-900 truncate" title={item.name}>{item.name}</h3>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500 font-medium">
                      <span>{item.size}</span>
                      <span>{new Date(item.uploadDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-2">
                     <button 
                        onClick={() => toggleMenu(item.id)}
                        className="p-1 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-[1px] transition-colors"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                      <AnimatePresence>
                        {activeMenu === item.id && (
                          <>
                            <div className="fixed inset-0 z-10" onClick={() => setActiveMenu(null)}></div>
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.95 }}
                              className="absolute right-0 top-8 w-40 bg-white border border-gray-200 shadow-lg rounded-[1px] z-20 py-1"
                            >
                              <button className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#006B3C] font-medium">
                                <Eye className="w-4 h-4" /> View
                              </button>
                              <button className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#006B3C] font-medium">
                                <Download className="w-4 h-4" /> Download
                              </button>
                              <button className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium">
                                <Trash2 className="w-4 h-4" /> Delete
                              </button>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded-[1px]">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500 bg-gray-50 border border-gray-200 border-dashed rounded-[1px]">
              No media files found matching your search and filter criteria.
            </div>
          )}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="bg-white border border-gray-200 shadow-sm rounded-[1px] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-bold text-xs sticky left-0 bg-gray-50">File Name</th>
                  <th className="px-6 py-4 font-bold text-xs">Category</th>
                  <th className="px-6 py-4 font-bold text-xs">Size</th>
                  <th className="px-6 py-4 font-bold text-xs">Date Uploaded</th>
                  <th className="px-6 py-4 font-bold text-xs text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-gray-900 font-medium bg-white">
                {filteredMedia.length > 0 ? (
                  filteredMedia.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 sticky left-0 group-hover:bg-gray-50 bg-white">
                        <div className="flex items-center gap-3">
                          {getIcon(item.type)}
                          <div className="flex flex-col">
                            <span className="font-bold text-gray-900 truncate max-w-xs">{item.name}</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-1">{item.type}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider rounded-[1px]">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-xs">
                        {item.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-xs">
                        {new Date(item.uploadDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right relative">
                        <button 
                          onClick={() => toggleMenu(item.id)}
                          className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-[1px] transition-colors"
                        >
                          <MoreVertical className="w-5 h-5" />
                        </button>

                        <AnimatePresence>
                          {activeMenu === item.id && (
                            <>
                              <div className="fixed inset-0 z-10" onClick={() => setActiveMenu(null)}></div>
                              <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="absolute right-6 top-10 mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded-[1px] z-20 py-1"
                              >
                                <button className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#006B3C] font-medium">
                                  <Eye className="w-4 h-4" /> View Details
                                </button>
                                <button className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#006B3C] font-medium">
                                  <Download className="w-4 h-4" /> Download File
                                </button>
                                <button className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-medium">
                                  <Trash2 className="w-4 h-4" /> Delete Permanently
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
                      No media files found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
