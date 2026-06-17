import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  ChevronDown,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building,
  Users,
  Activity,
  TrendingUp,
  Filter,
  Map,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  BarChart3,
  Home,
  Camera,
  FileText,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts";

// --- MOCK DATA ---
const PROJECTS = [
  {
    id: 1,
    title: "Accra Ring Road Phase 2",
    desc: "Major expansion of the inner ring road to ease traffic congestion in the central business district.",
    location: "Accra Central",
    region: "Greater Accra",
    mp: "Abena Osei-Asante",
    category: "Roads & Transport",
    status: "Ongoing",
    completion: 65,
    budget: "GHC 45M",
    date: "Dec 2026",
    contractor: "GHA Contractors",
    source: "Government",
  },
  {
    id: 2,
    title: "Kumasi Market Complex",
    desc: "Modernization of the central market with improved drainage, fire safety, and 500 new stalls.",
    location: "Kumasi Central",
    region: "Ashanti",
    mp: "John Mahama Ayisi",
    category: "Community Infrastructure",
    status: "Completed",
    completion: 100,
    budget: "GHC 12M",
    date: "Jan 2025",
    contractor: "AshBuild",
    source: "Public-Private",
  },
  {
    id: 3,
    title: "Tamale Hospital Renovation",
    desc: "Upgrading maternity and emergency wards with modern medical equipment.",
    location: "Tamale North",
    region: "Northern",
    mp: "Kwame Boateng",
    category: "Healthcare",
    status: "Ongoing",
    completion: 40,
    budget: "GHC 28M",
    date: "Mar 2026",
    contractor: "MediBuild Gh",
    source: "Donor Funded",
  },
  {
    id: 4,
    title: "Cape Coast STEM School",
    desc: "State-of-the-art science and technology high school for gifted students.",
    location: "Cape Coast",
    region: "Central",
    mp: "Akosua Frimpong",
    category: "Education",
    status: "Completed",
    completion: 100,
    budget: "GHC 8M",
    date: "Aug 2025",
    contractor: "EduStruct",
    source: "Government",
  },
  {
    id: 5,
    title: "Volta River Community Water",
    desc: "Installation of mechanized boreholes and purification systems for 5 riverine communities.",
    location: "North Tongu",
    region: "Volta",
    mp: "Samuel Okudzeto Ablakwa",
    category: "Water & Sanitation",
    status: "Upcoming",
    completion: 0,
    budget: "GHC 6M",
    date: "Sep 2026",
    contractor: "Volta Hydro",
    source: "Constituency Fund",
  },
  {
    id: 6,
    title: "Accra Youth Tech Hub",
    desc: "Tech incubator providing high-speed internet, mentorship, and workspace.",
    location: "Klottey-Korle",
    region: "Greater Accra",
    mp: "Zanetor Agyeman-Rawlings",
    category: "Youth Development",
    status: "Delayed",
    completion: 75,
    budget: "GHC 15M",
    date: "Jul 2025",
    contractor: "TechBuild",
    source: "Public-Private",
  },
];

const ANALYTICS_DATA = [
  { month: "Jan", completed: 12, started: 5 },
  { month: "Feb", completed: 19, started: 8 },
  { month: "Mar", completed: 15, started: 12 },
  { month: "Apr", completed: 22, started: 14 },
  { month: "May", completed: 30, started: 18 },
  { month: "Jun", completed: 28, started: 24 },
];

const REGIONAL_RANKINGS = [
  {
    region: "Greater Accra",
    projects: 124,
    rate: 85,
    budget: "GHC 450M",
    satisfaction: 90,
  },
  {
    region: "Ashanti",
    projects: 98,
    rate: 82,
    budget: "GHC 320M",
    satisfaction: 88,
  },
  {
    region: "Northern",
    projects: 76,
    rate: 75,
    budget: "GHC 210M",
    satisfaction: 74,
  },
  {
    region: "Central",
    projects: 65,
    rate: 79,
    budget: "GHC 180M",
    satisfaction: 81,
  },
  {
    region: "Volta",
    projects: 54,
    rate: 71,
    budget: "GHC 150M",
    satisfaction: 76,
  },
];

// --- HELPER FUNCTIONS ---
const getStatusColors = (status: string) => {
  switch (status) {
    case "Completed":
      return {
        text: "text-[#006B3C]",
        bg: "bg-[#006B3C]/10",
        bar: "bg-[#006B3C]",
      };
    case "Ongoing":
      return {
        text: "text-blue-600",
        bg: "bg-blue-600/10",
        bar: "bg-blue-600",
      };
    case "Upcoming":
      return {
        text: "text-amber-600",
        bg: "bg-amber-600/10",
        bar: "bg-amber-600",
      };
    case "Delayed":
      return {
        text: "text-[#CE1126]",
        bg: "bg-[#CE1126]/10",
        bar: "bg-[#CE1126]",
      };
    default:
      return { text: "text-gray-600", bg: "bg-gray-100", bar: "bg-gray-600" };
  }
};

export default function ProjectTracker() {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("All Regions");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.mp.toLowerCase().includes(search.toLowerCase());
      const matchRegion =
        regionFilter === "All Regions" || p.region === regionFilter;
      const matchCategory =
        categoryFilter === "All Categories" || p.category === categoryFilter;
      const matchStatus =
        statusFilter === "All Status" || p.status === statusFilter;
      return matchSearch && matchRegion && matchCategory && matchStatus;
    });
  }, [search, regionFilter, categoryFilter, statusFilter]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans text-gray-800">
      {/* SECTION 1: HERO */}
      <section className="relative pt-20 pb-40 overflow-hidden bg-gradient-to-br from-[#006B3C] to-[#004B2B] text-white">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888081699-28f09d84f475?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F8F9FA] to-transparent z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-4xl">
            Track Development Projects Across Ghana
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12">
            Monitor constituency projects, development initiatives, funding
            utilization, progress updates, and completion status in real time.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#directory"
              className="bg-white text-[#006B3C] px-8 py-4 rounded-[1px] font-bold hover:bg-gray-100 transition shadow-sm shadow-black/10"
            >
              Explore Projects
            </a>
            <Link 
              to="/dashboard"
              className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-[1px] font-bold hover:bg-white/10 transition backdrop-blur-sm"
            >
              View Transparency Dashboard
            </Link>
          </div>

          {/* STATS DASHBOARD */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { l: "Total Projects", v: "1,245" },
              { l: "Completed", v: "830" },
              { l: "Ongoing", v: "312" },
              { l: "Upcoming", v: "103" },
              { l: "Total Budget", v: "GHC 4.2B" },
              { l: "Constituencies", v: "275" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[1px] p-4 md:p-6 text-center transform hover:-translate-y-[1px] transition-transform"
              >
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {stat.v}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-white/70">
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30 pb-20 space-y-16 lg:space-y-24 w-full">
        {/* SECTION 2: ADVANCED FILTERS */}
        <section
          id="directory"
          className="bg-white rounded-[1px] shadow-sm shadow-black/5 p-4 md:p-6 border border-gray-200 sticky top-4 z-40"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by project name, MP, or constituency..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-[1px] focus:outline-none focus:ring-2 focus:ring-[#006B3C] focus:border-transparent font-medium"
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  val: regionFilter,
                  set: setRegionFilter,
                  opts: [
                    "All Regions",
                    "Greater Accra",
                    "Ashanti",
                    "Northern",
                    "Central",
                    "Volta",
                  ],
                },
                {
                  val: categoryFilter,
                  set: setCategoryFilter,
                  opts: [
                    "All Categories",
                    "Roads & Transport",
                    "Healthcare",
                    "Education",
                    "Water & Sanitation",
                    "Youth Development",
                    "Community Infrastructure",
                  ],
                },
                {
                  val: statusFilter,
                  set: setStatusFilter,
                  opts: [
                    "All Status",
                    "Completed",
                    "Ongoing",
                    "Upcoming",
                    "Delayed",
                  ],
                },
              ].map((filter, i) => (
                <div key={i} className="relative">
                  <select
                    value={filter.val}
                    onChange={(e) => filter.set(e.target.value)}
                    className="w-full appearance-none pl-4 pr-10 py-4 bg-gray-50 border border-gray-200 rounded-[1px] font-medium focus:ring-2 focus:ring-[#006B3C] outline-none"
                  >
                    {filter.opts.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              ))}
              <button className="bg-gray-100 text-gray-700 font-bold py-4 rounded-[1px] hover:bg-gray-200 transition flex items-center justify-center gap-2">
                <Filter className="w-5 h-5" /> More
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 3: INTERACTIVE PROJECT MAP */}
        <section className="mt-8 mb-16">
          <div className="bg-white rounded-[1px] shadow-sm border border-gray-200 overflow-hidden">
             <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                   <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                     <Map className="w-6 h-6 text-[#006B3C]" /> Interactive Tracking Map
                   </h2>
                   <p className="text-gray-500 text-sm mt-1">Explore constituency projects across all 16 regions of Ghana.</p>
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                  <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-[1px] bg-[#006B3C]"></div> Completed</span>
                  <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-[1px] bg-blue-500"></div> Ongoing</span>
                  <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-[1px] bg-amber-500"></div> Upcoming</span>
                  <span className="flex items-center gap-1"><div className="w-3 h-3 rounded-[1px] bg-[#CE1126]"></div> Delayed</span>
                </div>
             </div>
             <div className="h-[400px] md:h-[500px] w-full bg-gray-100 relative group overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity brightness-110"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                   <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-[1px] flex items-center justify-center text-[#006B3C] shadow-sm mb-4  transition-transform cursor-pointer border border-white/50">
                      <MapPin className="w-8 h-8" />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 shadow-white drop-shadow-sm">Nationwide Map View</h3>
                   <p className="text-gray-700 font-medium text-sm">Interactive map visualization is loading map data...</p>
                   <button className="mt-6 bg-[#006B3C] text-white px-6 py-3 rounded-[1px] font-bold hover:bg-[#004B2B] transition-colors shadow-sm shadow-[#006B3C]/20">
                     Open Fullscreen Map
                   </button>
                </div>
             </div>
          </div>
        </section>

        {/* SECTION 4: FEATURED PROJECTS */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#006B3C]" /> Featured
              Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {PROJECTS.filter(
              (p) => p.budget === "GHC 45M" || p.budget === "GHC 28M",
            ).map((project) => {
              const colors = getStatusColors(project.status);
              return (
                <div
                  key={`feat-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white rounded-[1px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="h-48 bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`px-3 py-1 rounded-[1px] text-xs font-bold ${colors.bg} ${colors.text} bg-white shadow-sm`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <img
                      src={`https://images.unsplash.com/photo-${project.id === 1 ? "1541888081699-28f09d84f475" : "1584400720456-4c7dbb0fb60a"}?w=800&q=80`}
                      alt={project.title}
                      className="w-full h-full object-cover  transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h3 className="text-white font-bold text-xl mb-1 leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                        <MapPin className="w-4 h-4" /> {project.location},{" "}
                        {project.region}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between text-sm mb-6">
                      <div>
                        <p className="text-gray-500 uppercase text-[10px] font-bold tracking-wider">
                          Budget
                        </p>
                        <p className="font-bold text-gray-900">
                          {project.budget}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 uppercase text-[10px] font-bold tracking-wider">
                          Est. Completion
                        </p>
                        <p className="font-bold text-gray-900">
                          {project.date}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 uppercase text-[10px] font-bold tracking-wider">
                          Progress
                        </p>
                        <p className={`font-bold ${colors.text}`}>
                          {project.completion}%
                        </p>
                      </div>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-[1px] overflow-hidden">
                      <div
                        className={`h-full ${colors.bar} rounded-[1px] transition-all duration-1000`}
                        style={{ width: `${project.completion}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: PROJECT DIRECTORY GRID */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Building className="w-6 h-6 text-[#006B3C]" /> Explore All
              Projects
            </h2>
            <div className="text-sm font-bold text-gray-500">
              Showing {filteredProjects.length} results
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const colors = getStatusColors(project.status);
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-white rounded-[1px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-sm transition-all group cursor-pointer flex flex-col"
                >
                  <div className="p-6 pb-4 border-b border-gray-100 flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-1 rounded-[1px]">
                        {project.category}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-[1px] ${colors.bg} ${colors.text}`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-[#006B3C] transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-sm text-gray-500 mb-4 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-4 h-4 shrink-0" />{" "}
                      <span className="truncate">
                        {project.location}, {project.region}
                      </span>
                    </div>

                    <div className="mt-auto pt-2">
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-gray-500 uppercase tracking-wider">
                          Progress
                        </span>
                        <span className={colors.text}>
                          {project.completion}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-[1px] overflow-hidden">
                        <div
                          className={`h-full ${colors.bar} rounded-[1px] transition-all duration-1000`}
                          style={{ width: `${project.completion}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50/50 flex flex-wrap items-center justify-between gap-4 shrink-0">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                        Budget
                      </p>
                      <p className="font-bold text-gray-900 text-sm">
                        {project.budget}
                      </p>
                    </div>
                    <button className="text-[#006B3C] font-semibold text-sm hover:underline flex items-center gap-1">
                      Details <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-24 bg-white rounded-[1px] border border-gray-200 border-dashed">
              <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </section>

        {/* SECTION 7 & 10: ANALYTICS & REGIONAL RANKINGS */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-[1px] p-6 md:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Performance Analytics
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Monthly project completion vs initiation trends.
            </p>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={ANALYTICS_DATA}
                  margin={{ top: 5, right: 20, bottom: 5, left: -20 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f3f4f6"
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6b7280" }}
                  />
                  <RechartsTooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="completed"
                    stroke="#006B3C"
                    strokeWidth={3}
                    dot={{ r: 4, strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                    name="Completed Projects"
                  />
                  <Line
                    type="monotone"
                    dataKey="started"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ r: 4, strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                    name="Started Projects"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white rounded-[1px] p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Regional Development Rankings
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Top performing regions by completion rate.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-bold bg-gray-50">
                    <th className="p-4 rounded-[1px]-tl-lg">Region</th>
                    <th className="p-4">Projects</th>
                    <th className="p-4">Completion</th>
                    <th className="p-4 rounded-[1px]-tr-lg text-right">Budget</th>
                  </tr>
                </thead>
                <tbody>
                  {REGIONAL_RANKINGS.map((reg, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="p-4 font-bold text-gray-900">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-[1px] bg-[#006B3C]/10 text-[#006B3C] flex items-center justify-center text-xs">
                            {i + 1}
                          </div>
                          {reg.region}
                        </div>
                      </td>
                      <td className="p-4 text-sm font-medium text-gray-600">
                        {reg.projects}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-100 rounded-[1px] overflow-hidden">
                            <div
                              className="h-full bg-[#006B3C]"
                              style={{ width: `${reg.rate}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-gray-900">
                            {reg.rate}%
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-right font-bold text-gray-900 text-sm">
                        {reg.budget}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="mt-4 w-full py-3 bg-gray-50 text-[#006B3C] font-bold rounded-[1px] hover:bg-gray-100 transition-colors text-sm">
              View Full Rankings
            </button>
          </div>
        </section>

        {/* SECTION 11: RECENT PROJECT UPDATES */}
        <section className="mb-16 mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
               <Clock className="w-6 h-6 text-[#006B3C]" /> Recent Project Updates
            </h2>
            <button className="text-[#006B3C] font-semibold text-sm hover:underline">View All Timeline &rarr;</button>
          </div>
          <div className="bg-white rounded-[1px] p-6 md:p-8 border border-gray-200 shadow-sm relative">
             <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[27px] before:w-0.5 before:bg-gray-100">
               {[
                 { date: "Oct 20, 2025", type: "Milestone Completed", title: "Accra Ring Road Phase 2", text: "Asphalt laying completed on the northern segment of the interchange.", icon: <CheckCircle2 className="w-4 h-4" />, color: "text-[#006B3C]", bg: "bg-[#006B3C]/10 border-[#006B3C]" },
                 { date: "Oct 18, 2025", type: "Budget Update", title: "Tamale Hospital Renovation", text: "Additional GHC 5M released from the Consolidated Fund for medical equipment procurement.", icon: <TrendingUp className="w-4 h-4" />, color: "text-blue-600", bg: "bg-blue-600/10 border-blue-600" },
                 { date: "Oct 15, 2025", type: "New Project Added", title: "Hohoe Central Market Upgrade", text: "Project officially added to the transparency tracker following parliamentary approval.", icon: <Activity className="w-4 h-4" />, color: "text-amber-500", bg: "bg-amber-500/10 border-amber-500" },
                 { date: "Oct 12, 2025", type: "Verification Report", title: "Volta River Community Water", text: "Site inspection by the Accountability Board verifies boreholes are functional in 3 communities.", icon: <ShieldCheck className="w-4 h-4" />, color: "text-[#006B3C]", bg: "bg-[#006B3C]/10 border-[#006B3C]" },
                 { date: "Oct 10, 2025", type: "Citizen Report", title: "Accra Youth Tech Hub", text: "Delay reported by local constituents. Contractor attributes delay to unseasonal rainfall.", icon: <AlertCircle className="w-4 h-4" />, color: "text-[#CE1126]", bg: "bg-[#CE1126]/10 border-[#CE1126]" },
               ].map((update, i) => (
                 <div key={i} className="relative pl-16">
                    <div className={`absolute left-0 top-1 w-14 h-14 rounded-[1px] flex items-center justify-center border ${update.bg} ${update.color}`}>
                       {update.icon}
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-[1px] p-5 hover:shadow-sm transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                           <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-[1px] bg-white ${update.color} border border-gray-100 shadow-sm`}>{update.type}</span>
                           <h4 className="font-bold text-gray-900">{update.title}</h4>
                        </div>
                        <span className="text-xs font-bold text-gray-500 mt-2 sm:mt-0">{update.date}</span>
                      </div>
                      <p className="text-sm text-gray-600 font-medium">{update.text}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* SECTION 12: SUCCESS STORIES */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#006B3C]" /> Impact &
              Success Stories
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Transforming Healthcare in Tamale",
                desc: "How the newly renovated maternity ward has reduced infant mortality by 40%.",
                impact: "20,000+ citizens served",
                img: "1598449356475-b9f71db7d847",
              },
              {
                title: "Juaben Girls ICT Center Launch",
                desc: "Bridging the digital divide for over 1,500 students in the Ashanti Region.",
                impact: "1,500+ students connected",
                img: "1516321492422-734ed0e1b6f6",
              },
            ].map((story, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row bg-white rounded-[1px] overflow-hidden border border-gray-200 shadow-sm group"
              >
                <div className="w-full md:w-2/5 h-48 md:h-auto bg-gray-200 relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${story.img}?w=500&q=80`}
                    alt={story.title}
                    className="w-full h-full object-cover  transition-transform duration-700"
                  />
                </div>
                <div className="p-6 md:w-3/5 flex flex-col">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#006B3C] mb-2">
                    Success Story
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2 leading-tight group-hover:text-[#006B3C] transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {story.desc}
                  </p>
                  <div className="mt-auto">
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-[1px] text-xs font-bold mb-4">
                      <Activity className="w-4 h-4" /> IMPACT: {story.impact}
                    </div>
                    <button className="block font-bold text-[#006B3C] hover:underline text-sm">
                      Read Full Story &rarr;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* SECTION 13: CALL TO ACTION */}
      <section className="bg-gradient-to-br from-[#1F2937] to-[#111827] py-20 px-4 sm:px-6 lg:px-8 mt-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#006B3C]/20 rounded-[1px] blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <div className="w-16 h-16 bg-[#006B3C] rounded-[1px] flex items-center justify-center mx-auto mb-6 transform rotate-12 shadow-sm">
            <ShieldCheck className="w-8 h-8 text-white transform -rotate-12" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Every Project. Every Budget. Fully Transparent.
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-medium">
            Track development projects, verify progress with evidence, and help
            ensure accountability across every community in Ghana.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-[#006B3C] text-white px-8 py-4 rounded-[1px] font-bold hover:bg-[#004B2B] transition shadow-sm w-full sm:w-auto"
            >
              Track Projects
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-[1px] font-bold hover:bg-white/20 transition w-full sm:w-auto backdrop-blur-sm">
              Submit Project Report
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6, 8, 9: PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              className="bg-white rounded-[1px] shadow-sm w-full max-w-5xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col"
            >
              <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 p-6 flex items-center justify-between z-20">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </h2>
                  <div className="text-sm font-medium text-gray-500 flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4" /> {selectedProject.location},{" "}
                    {selectedProject.region}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-gray-100 rounded-[1px] hover:bg-gray-200 transition text-gray-600"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 md:p-8 grid lg:grid-cols-3 gap-8">
                {/* Left Col: Overview & Finances */}
                <div className="lg:col-span-2 space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">
                      Overview
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.desc}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      <div className="bg-gray-50 p-4 rounded-[1px] border border-gray-100">
                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1">
                          Status
                        </p>
                        <p
                          className={`font-bold ${getStatusColors(selectedProject.status).text}`}
                        >
                          {selectedProject.status}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-[1px] border border-gray-100">
                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1">
                          Budget
                        </p>
                        <p className="font-bold text-gray-900">
                          {selectedProject.budget}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-[1px] border border-gray-100 col-span-2">
                        <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-1">
                          Contractor
                        </p>
                        <p className="font-bold text-gray-900">
                          {selectedProject.contractor}
                        </p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" /> Financial Utilization
                    </h3>
                    <div className="bg-blue-50 border border-blue-100 rounded-[1px] p-6">
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span className="text-blue-900">
                          Total Budget: {selectedProject.budget}
                        </span>
                        <span className="text-blue-700">
                          Funds Released: 45%
                        </span>
                      </div>
                      <div className="h-3 bg-blue-100 rounded-[1px] overflow-hidden mb-4">
                        <div
                          className="h-full bg-blue-600 rounded-[1px]"
                          style={{ width: "45%" }}
                        />
                      </div>
                      <div className="flex justify-between text-xs font-semibold text-blue-800">
                        <span>Funding Source: {selectedProject.source}</span>
                        <span>Remaining Balance: GHC --</span>
                      </div>
                    </div>
                  </section>

                  {/* Section 8: Verification Evidence */}
                  <section>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2 flex items-center gap-2">
                      <Camera className="w-5 h-5" /> Progress Evidence
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="aspect-square bg-gray-200 rounded-[1px] overflow-hidden relative group"
                        >
                          <img
                            src={`https://images.unsplash.com/photo-1541888081699-28f09d84f475?w=200&q=80`}
                            alt="Site Pic"
                            className="w-full h-full object-cover  transition-transform"
                          />
                          <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-[1px]">
                            Week {i * 2}
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Right Col: Timeline & Actions */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="bg-gray-50 border border-gray-100 rounded-[1px] p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-gray-900">
                        Progress Tracker
                      </h4>
                      <span
                        className={`font-black text-2xl ${getStatusColors(selectedProject.status).text}`}
                      >
                        {selectedProject.completion}%
                      </span>
                    </div>
                    <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-gray-200">
                      {[
                        "Contract Awarded",
                        "Site Mobilization",
                        "Foundation Phase",
                        "Superstructure",
                        "Finishing",
                        "Commissioning",
                      ].map((step, idx) => {
                        const isCompleted =
                          idx * 20 <= selectedProject.completion;
                        const isCurrent =
                          idx * 20 > selectedProject.completion &&
                          (idx - 1) * 20 <= selectedProject.completion;
                        return (
                          <div key={idx} className="relative pl-8">
                            <div
                              className={`absolute left-0 top-1 w-6 h-6 rounded-[1px] border-4 border-white shadow-sm flex items-center justify-center ${isCompleted ? "bg-[#006B3C]" : isCurrent ? "bg-blue-500" : "bg-gray-200"}`}
                            >
                              {isCompleted && (
                                <CheckCircle2 className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <p
                              className={`text-sm font-bold ${isCompleted ? "text-gray-900" : isCurrent ? "text-blue-600" : "text-gray-400"}`}
                            >
                              {step}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 9: Citizen Feedback CTA */}
                  <div className="bg-[#006B3C]/10 border border-[#006B3C]/20 rounded-[1px] p-6 text-center">
                    <div className="w-12 h-12 bg-white rounded-[1px] flex items-center justify-center mx-auto mb-3 text-[#006B3C] shadow-sm">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Notice an issue?
                    </h4>
                    <p className="text-xs text-gray-600 mb-4">
                      Upload site photos or report delays directly to the
                      accountability board.
                    </p>
                    <button className="w-full bg-[#006B3C] text-white font-bold py-3 rounded-[1px] hover:bg-[#004B2B] transition-colors shadow-sm">
                      Submit Feedback Report
                    </button>
                    <p className="text-[10px] text-gray-500 mt-3 font-medium uppercase tracking-wider">
                      All reports are publicly tracked.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
