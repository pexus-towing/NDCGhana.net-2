import {
  Search,
  ChevronDown,
  MapPin,
  ChevronRight,
  Filter,
  ChevronLeft,
  ArrowRight,
  UserCheck,
  Shield,
  CheckCircle2,
  TrendingUp,
  Presentation,
  MessageSquare,
  AlertCircle,
  FileText,
  BarChart3,
  Star,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

const FEATURED_MP = {
  id: "6",
  name: "Samuel Okudzeto Ablakwa",
  constituency: "North Tongu",
  region: "Volta Region",
  attendance: 98,
  projectsDelivered: 45,
  approvalRating: 92,
  bio: "A dedicated public servant focused on education, transparency, and rural development. Consistently ranked among the highest-performing parliamentarians with a strong focus on community engagement and infrastructure delivery.",
  achievements: [
    "Constructed 5 modern classroom blocks",
    "Initiated the North Tongu Scholarship Scheme",
    "Advocated for increased rural healthcare funding",
  ],
  image: "SA",
};

const TOP_MPS = [
  {
    id: "1",
    rank: 1,
    name: "Samuel Okudzeto Ablakwa",
    constituency: "North Tongu",
    score: 98,
    projects: 45,
  },
  {
    id: "2",
    rank: 2,
    name: "Haruna Iddrisu",
    constituency: "Tamale South",
    score: 96,
    projects: 38,
  },
  {
    id: "3",
    rank: 3,
    name: "Ibrahim Muntaka",
    constituency: "Asawase",
    score: 94,
    projects: 32,
  },
  {
    id: "4",
    rank: 4,
    name: "Emmanuel Armah-Kofi Buah",
    constituency: "Ellembelle",
    score: 92,
    projects: 29,
  },
  {
    id: "5",
    rank: 5,
    name: "Zanetor Agyeman-Rawlings",
    constituency: "Klottey-Korle",
    score: 89,
    projects: 26,
  },
];

export default function MPDirectory() {
  const allMps = [
    {
      id: "1",
      initial: "SA",
      name: "Samuel Okudzeto Ablakwa",
      party: "NDC",
      location: "North Tongu",
      region: "Volta",
      score: 98,
      projects: 32,
      speeches: 150,
      engage: 500,
      status: "Excellent",
    },
    {
      id: "2",
      initial: "HI",
      name: "Haruna Iddrisu",
      party: "NDC",
      location: "Tamale South",
      region: "Northern",
      score: 96,
      projects: 25,
      speeches: 210,
      engage: 400,
      status: "Excellent",
    },
    {
      id: "3",
      initial: "IM",
      name: "Ibrahim Muntaka",
      party: "NDC",
      location: "Asawase",
      region: "Ashanti",
      score: 94,
      projects: 22,
      speeches: 115,
      engage: 340,
      status: "Excellent",
    },
    {
      id: "4",
      initial: "AO",
      name: "Abena Osei-Asante",
      party: "NDC",
      location: "Accra Central",
      region: "Greater Accra",
      score: 92,
      projects: 18,
      speeches: 62,
      engage: 210,
      status: "Excellent",
    },
    {
      id: "5",
      initial: "EA",
      name: "Emmanuel Armah-Kofi Buah",
      party: "NDC",
      location: "Ellembelle",
      region: "Western",
      score: 91,
      projects: 16,
      speeches: 88,
      engage: 205,
      status: "Excellent",
    },
    {
      id: "6",
      initial: "ZN",
      name: "Zanetor Agyeman-Rawlings",
      party: "NDC",
      location: "Klottey-Korle",
      region: "Greater Accra",
      score: 88,
      projects: 15,
      speeches: 41,
      engage: 150,
      status: "Good",
    },
    {
      id: "7",
      initial: "FA",
      name: "Cassiel Ato Forson",
      party: "NDC",
      location: "Ajumako Enyan Essiam",
      region: "Central",
      score: 85,
      projects: 12,
      speeches: 45,
      engage: 120,
      status: "Good",
    },
    {
      id: "8",
      initial: "AP",
      name: "Ama Pomaa Boateng",
      party: "NDC",
      location: "Juaben",
      region: "Ashanti",
      score: 82,
      projects: 11,
      speeches: 39,
      engage: 110,
      status: "Good",
    },
    {
      id: "9",
      initial: "JA",
      name: "John Mahama Ayisi",
      party: "NDC",
      location: "Kumasi Central",
      region: "Ashanti",
      score: 81,
      projects: 14,
      speeches: 55,
      engage: 175,
      status: "Good",
    },
    {
      id: "10",
      initial: "LA",
      name: "Lydia Alhassan",
      party: "NDC",
      location: "Ayawaso West Wuogon",
      region: "Greater Accra",
      score: 79,
      projects: 9,
      speeches: 28,
      engage: 130,
      status: "Average",
    },
    {
      id: "11",
      initial: "KB",
      name: "Kwame Boateng",
      party: "NDC",
      location: "Tamale North",
      region: "Northern",
      score: 78,
      projects: 8,
      speeches: 34,
      engage: 95,
      status: "Average",
    },
    {
      id: "12",
      initial: "RD",
      name: "Rockson-Nelson Dafeamekpor",
      party: "NDC",
      location: "South Dayi",
      region: "Volta",
      score: 76,
      projects: 7,
      speeches: 56,
      engage: 88,
      status: "Average",
    },
  ];

  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("All Regions");
  const [partyFilter, setPartyFilter] = useState("All Parties");
  const [statusFilter, setStatusFilter] = useState("All");

  const regions = [
    "All Regions",
    "Greater Accra",
    "Ashanti",
    "Central",
    "Eastern",
    "Western",
    "Northern",
    "Volta",
    "Bono",
    "Savannah",
    "Oti",
    "North East",
    "Ahafo",
    "Western North",
    "Upper East",
    "Upper West",
  ];
  const parties = ["All Parties", "NDC"];
  const statuses = ["All", "Excellent", "Good", "Average", "Needs Improvement"];

  const mps = useMemo(() => {
    return allMps
      .filter((mp) => {
        const matchesSearch =
          mp.name.toLowerCase().includes(search.toLowerCase()) ||
          mp.location.toLowerCase().includes(search.toLowerCase());
        const matchesRegion =
          regionFilter === "All Regions" || mp.region === regionFilter;
        const matchesParty =
          partyFilter === "All Parties" || mp.party === partyFilter;
        const matchesStatus =
          statusFilter === "All" || mp.status === statusFilter;
        return matchesSearch && matchesRegion && matchesParty && matchesStatus;
      })
      .sort((a, b) => b.score - a.score);
  }, [search, regionFilter, partyFilter, statusFilter]);

  return (
    <div className="flex flex-col min-h-screen bg-surface-white font-sans text-on-surface">
      {/* SECTION 1: HERO HEADER & SECTION 2: FILTERS */}
      <section className="bg-[#006B3C] text-white pt-16 pb-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-block px-3 py-1 rounded-[1px] border border-ndc-red/50 bg-ndc-red/20 text-ndc-red text-[10px] font-bold tracking-wider mb-6 uppercase">
              Parliamentary Directory
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
              NDC Members of Parliament
            </h1>
            <p className="text-white/80 max-w-3xl text-lg lg:text-xl leading-relaxed">
              Browse all NDC MPs, explore their constituencies, track
              development scores, and connect with your representative.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative max-w-2xl"
          >
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/50" />
            </div>
            <input
              type="text"
              placeholder="Search by MP name or constituency..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 rounded-[1px] border border-white/20 bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:ring-2 focus:ring-white focus:border-transparent outline-none shadow-sm transition-all"
            />
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-8">
            {[
              { label: "Total NDC MPs", value: "137" },
              { label: "Constituencies", value: "275" },
              { label: "Active Projects", value: "842" },
              { label: "Avg Performance", value: "84%" },
            ].map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                key={i}
                className="bg-white/10 border border-white/20 rounded-[1px] p-4 backdrop-blur-md"
              >
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-white/70 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER BAR OVERLAPPING BACKGROUND */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[1px] shadow-sm shadow-black/5 p-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-outline-variant/30">
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider pl-2 mr-2">
                Filter:
              </span>

              <div className="relative">
                <select
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 text-sm bg-surface-bg border border-outline-variant/50 rounded-[1px] focus:ring-2 focus:ring-[#006B3C] focus:border-transparent cursor-pointer font-medium text-deep-navy"
                >
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
              </div>

              <div className="relative hidden sm:block">
                <select
                  value={partyFilter}
                  onChange={(e) => setPartyFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 text-sm bg-surface-bg border border-outline-variant/50 rounded-[1px] focus:ring-2 focus:ring-[#006B3C] font-medium text-deep-navy cursor-pointer"
                >
                  {parties.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
              </div>

              <div className="relative hidden sm:block">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 text-sm bg-surface-bg border border-outline-variant/50 rounded-[1px] focus:ring-2 focus:ring-[#006B3C] font-medium text-deep-navy cursor-pointer"
                >
                  {statuses.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                Sort:
              </span>
              <div className="relative w-full md:w-auto">
                <select className="appearance-none block w-full pl-4 pr-10 py-2 text-sm bg-surface-bg border border-outline-variant/50 rounded-[1px] focus:ring-2 focus:ring-[#006B3C] font-medium text-deep-navy cursor-pointer">
                  <option>Highest Score</option>
                  <option>Alphabetical (A-Z)</option>
                  <option>Most Projects</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* SECTION 3: MP DIRECTORY GRID */}
          <section>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-8 px-1">
              <span>{mps.length} MPs found</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence>
                {mps.map((mp, index) => (
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={mp.id}
                    className="bg-white rounded-[1px] border border-outline-variant/30 flex flex-col relative overflow-hidden transition-all hover:-translate-y-[1px].5 hover:shadow-sm hover:shadow-black/5 group"
                  >
                    <div className="h-2 w-full bg-[#006B3C]" />
                    <div className="p-6 pb-5 flex-grow flex flex-col">
                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-14 h-14 rounded-[1px] bg-[#006B3C] flex items-center justify-center font-bold text-xl text-white shrink-0 shadow-sm border-2 border-[#006B3C]/10">
                          {mp.initial}
                        </div>
                        <div>
                          <div className="inline-flex items-center px-1.5 py-0.5 rounded-[1px] text-[10px] font-bold tracking-wide text-[#006B3C] bg-[#006B3C]/10 mb-1 border border-[#006B3C]/20">
                            {mp.party}
                          </div>
                          <h3 className="font-bold text-deep-navy leading-tight line-clamp-1">
                            {mp.name}
                          </h3>
                          <div className="flex items-center gap-1 mt-1 text-on-surface-variant/80 text-xs">
                            <MapPin className="w-3 h-3" />
                            <span className="truncate">{mp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-6 bg-surface-bg p-3 rounded-[1px] border border-outline-variant/30 text-center">
                        <div>
                          <div className="font-bold text-deep-navy text-sm">
                            {mp.projects}
                          </div>
                          <div className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-0.5">
                            Projects
                          </div>
                        </div>
                        <div className="border-x border-outline-variant/40">
                          <div className="font-bold text-deep-navy text-sm">
                            {mp.speeches}
                          </div>
                          <div className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-0.5">
                            Speeches
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-deep-navy text-sm">
                            {mp.engage}
                          </div>
                          <div className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-0.5">
                            Engage
                          </div>
                        </div>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="inline-flex items-center gap-1 text-[#006B3C] font-bold border border-[#006B3C]/20 px-2 py-1 rounded-[1px] bg-[#006B3C]/5 text-xs">
                          <Star className="w-3.5 h-3.5 fill-[#006B3C] stroke-[#006B3C]" />
                          {mp.score}%
                        </div>
                        <Link
                          to={`/mps/${mp.id}`}
                          className="text-sm font-semibold text-[#006B3C] hover:text-[#004B2B] transition-colors flex items-center gap-1 group-hover:underline"
                        >
                          View Profile{" "}
                          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            <div className="mt-12 flex justify-center">
              <button className="bg-surface-bg border border-outline-variant/50 text-deep-navy font-semibold px-6 py-2.5 rounded-[1px] hover:bg-surface-dim transition-colors">
                Load More MPs
              </button>
            </div>
          </section>

          {/* SECTION 4: FEATURED MP SPOTLIGHT */}
          <section className="bg-surface-white rounded-[2rem] border border-outline-variant/40 p-8 lg:p-12 shadow-sm overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-surface-dim/80 to-transparent -z-10 pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-4 bg-[#006B3C]/10 rounded-[2.5rem] -z-10 rotate-3 transition-transform hover:rotate-6" />
                <div className="aspect-[4/5] bg-[#004B2B] rounded-[2rem] overflow-hidden flex items-center justify-center relative">
                  <div className="text-white text-8xl font-bold opacity-20">
                    {FEATURED_MP.image}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <span className="bg-[#006B3C] text-white text-xs font-bold px-3 py-1 rounded-[1px] uppercase tracking-wider mb-2 inline-block">
                      Featured Performance
                    </span>
                    <h3 className="text-white text-2xl font-bold">
                      {FEATURED_MP.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 text-on-surface-variant font-medium mb-2">
                    <MapPin className="w-4 h-4 text-[#006B3C]" />
                    {FEATURED_MP.constituency}, {FEATURED_MP.region}
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-deep-navy leading-tight mb-4">
                    {FEATURED_MP.name}
                  </h2>
                  <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
                    {FEATURED_MP.bio}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-[#006B3C] mb-1">
                      {FEATURED_MP.attendance}%
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Attendance
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#006B3C] mb-1">
                      {FEATURED_MP.projectsDelivered}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Projects Delivered
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#006B3C] mb-1">
                      {FEATURED_MP.approvalRating}%
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                      Approval Rating
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <h4 className="font-bold text-deep-navy mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {FEATURED_MP.achievements.map((acc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#006B3C] shrink-0 mt-0.5" />
                        <span className="text-on-surface-variant">{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-outline-variant/30 mt-2">
                  <Link
                    to={`/mps/${FEATURED_MP.id}`}
                    className="bg-[#006B3C] text-white px-6 py-3 rounded-[1px] font-bold inline-flex items-center gap-2 hover:bg-[#004B2B] transition-colors shadow-sm shadow-[#006B3C]/20"
                  >
                    View Complete Profile <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: CONSTITUENCY MAP (Static Placeholder area) */}
          <section className="bg-deep-navy text-white rounded-[2rem] p-8 lg:p-12 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-[#006B3C] font-bold text-sm tracking-wider uppercase mb-2">
                  Interactive Dashboard
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Constituency Maps
                </h2>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Visually explore constituencies across Ghana. Select a region
                  to view specific MP coverage, active project density, and
                  aggregate performance scores.
                </p>
                <button className="bg-white text-deep-navy px-6 py-3 rounded-[1px] font-bold inline-flex items-center gap-2 hover:bg-surface-bg transition-colors">
                  Open Interactive Map <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-white/5 rounded-[1px] border border-white/10 aspect-video flex flex-col items-center justify-center p-8 text-center text-white/50 backdrop-blur-sm">
                <MapPin className="w-12 h-12 mb-4 opacity-50" />
                <p>
                  Interactive Map Component <br />
                  (Mapbox/Leaflet integration)
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 6: DASHBOARD & SECTION 9: LEADERBOARD */}
          <div className="grid lg:grid-cols-2 gap-8">
            <section className="bg-surface-bg rounded-[2rem] p-8 border border-outline-variant/40 hover:shadow-sm transition-shadow">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[#006B3C]/10 rounded-[1px] text-[#006B3C]">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-deep-navy">
                  Performance Dashboard
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    label: "Avg Attendance",
                    value: "87%",
                    icon: UserCheck,
                    desc: "Parliamentary sessions attended",
                  },
                  {
                    label: "Contributions",
                    value: "3,402",
                    icon: Presentation,
                    desc: "Speeches & debates registered",
                  },
                  {
                    label: "Motions Supported",
                    value: "128",
                    icon: Target,
                    desc: "Legislative participation",
                  },
                  {
                    label: "Committees",
                    value: "42",
                    icon: Users,
                    desc: "Active committee memberships",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 rounded-[1px] border border-outline-variant/50"
                  >
                    <stat.icon className="w-5 h-5 text-[#006B3C] mb-3" />
                    <div className="text-2xl font-bold text-deep-navy mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">
                      {stat.label}
                    </div>
                    <p className="text-xs text-outline">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-surface-bg rounded-[2rem] p-8 border border-outline-variant/40 hover:shadow-sm transition-shadow overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#CE1126]/10 rounded-[1px] text-[#CE1126]">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-deep-navy">
                    Performance Leaderboard
                  </h2>
                </div>
              </div>

              <div className="flex-grow overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant/40 text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      <th className="pb-3 px-2">Rank</th>
                      <th className="pb-3 px-2">MP Name</th>
                      <th className="pb-3 px-2">Score</th>
                      <th className="pb-3 px-2">Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TOP_MPS.map((mp, i) => (
                      <tr
                        key={mp.id}
                        className="border-b border-outline-variant/20 last:border-0 hover:bg-white/50 transition-colors"
                      >
                        <td className="py-4 px-2">
                          <span
                            className={`w-6 h-6 rounded-[1px] flex items-center justify-center text-xs font-bold ${
                              mp.rank === 1
                                ? "bg-amber-400 text-amber-900"
                                : mp.rank === 2
                                  ? "bg-slate-300 text-slate-800"
                                  : mp.rank === 3
                                    ? "bg-amber-600 text-white"
                                    : "bg-surface-dim text-outline"
                            }`}
                          >
                            {mp.rank}
                          </span>
                        </td>
                        <td className="py-4 px-2">
                          <div className="font-bold text-deep-navy text-sm">
                            {mp.name}
                          </div>
                          <div className="text-xs text-on-surface-variant">
                            {mp.constituency}
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <div className="inline-flex items-center gap-1 font-bold text-[#006B3C] text-sm">
                            {mp.score}%
                          </div>
                        </td>
                        <td className="py-4 px-2 text-sm font-semibold text-deep-navy">
                          {mp.projects}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* SECTION 7: CONSTITUENCY DEVELOPMENT PROJECTS */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-deep-navy mb-2">
                  Recent Constituency Projects
                </h2>
                <p className="text-on-surface-variant text-lg">
                  Track latest developments across NDC constituencies.
                </p>
              </div>
              <Link
                to="/projects"
                className="hidden md:inline-flex items-center gap-2 text-[#006B3C] font-bold hover:text-[#004B2B] transition-colors"
              >
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Keta Sea Defense Wall Phase II",
                  location: "Keta Constituency, Volta",
                  status: "Active",
                  progress: 65,
                  date: "Oct 12, 2025",
                },
                {
                  title: "Tamale South Water Expansion",
                  location: "Tamale South, Northern",
                  status: "Completed",
                  progress: 100,
                  date: "Sep 28, 2025",
                },
                {
                  title: "Asawase Market Redevelopment",
                  location: "Asawase, Ashanti",
                  status: "Active",
                  progress: 40,
                  date: "Nov 02, 2025",
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[1px] border border-outline-variant/40 overflow-hidden hover:shadow-sm transition-shadow group flex flex-col"
                >
                  <div className="h-40 bg-surface-dim relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#006B3C]/20 to-black/40 mix-blend-multiply" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-[1px] shadow-sm text-deep-navy">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-deep-navy text-lg mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-on-surface-variant text-sm mb-6">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>

                    <div className="mt-auto">
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-on-surface-variant uppercase tracking-wider">
                          Progress
                        </span>
                        <span className="text-[#006B3C]">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="h-2 rounded-[1px] bg-surface-variant overflow-hidden mb-4">
                        <div
                          className="h-full bg-[#006B3C] rounded-[1px]"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/30">
                        <span className="text-xs text-on-surface-variant font-medium">
                          Updated: {project.date}
                        </span>
                        <button className="text-[#006B3C] font-bold text-sm hover:underline">
                          Track Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 md:hidden flex justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-[#006B3C] font-bold hover:text-[#004B2B] transition-colors border border-[#006B3C]/20 px-6 py-3 rounded-[1px] w-full justify-center"
              >
                Explore All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* SECTION 8: CITIZEN ENGAGEMENT */}
          <section className="bg-surface-white rounded-[2rem] border border-outline-variant/40 p-8 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-bold text-deep-navy mb-4">
                Connect With Your Leadership
              </h2>
              <p className="text-on-surface-variant text-lg">
                Direct channels to submit feedback, report project issues, and
                suggest community improvements to your MP.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: MessageSquare,
                  title: "Submit Feedback",
                  desc: "Share your thoughts on ongoing parliamentary discussions.",
                  color: "text-blue-600",
                  bg: "bg-blue-100",
                },
                {
                  icon: FileText,
                  title: "Suggest Projects",
                  desc: "Propose new development initiatives for your community.",
                  color: "text-[#006B3C]",
                  bg: "bg-[#006B3C]/10",
                },
                {
                  icon: AlertCircle,
                  title: "Report Issues",
                  desc: "Flag stalled projects or issues requiring immediate attention.",
                  color: "text-[#CE1126]",
                  bg: "bg-[#CE1126]/10",
                },
              ].map((action, i) => (
                <button
                  key={i}
                  className="text-left p-6 rounded-[1px] border border-outline-variant/30 hover:shadow-sm transition-all hover:-translate-y-[1px] bg-white group"
                >
                  <div
                    className={`w-12 h-12 rounded-[1px] ${action.bg} ${action.color} flex items-center justify-center mb-4  transition-transform`}
                  >
                    <action.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-deep-navy text-lg mb-2">
                    {action.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant">
                    {action.desc}
                  </p>
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* SECTION 10: CTA BANNER */}
      <section className="bg-gradient-to-r from-[#006B3C] to-[#004B2B] py-20 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Building Accountability Through Citizen Participation
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Track parliamentary performance, monitor projects, and engage
            directly with your representatives.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-white text-[#006B3C] px-8 py-4 rounded-[1px] font-bold text-lg hover:bg-surface-bg transition-colors shadow-sm shadow-black/10 inline-flex items-center gap-2"
          >
            Explore All MP Profiles <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
