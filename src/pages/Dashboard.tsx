import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Users,
  Building,
  Target,
  FileText,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Map,
  BarChart3,
  Activity,
  Download,
  FilePlus,
  ChevronRight,
  Award,
  ShieldCheck,
  PieChart as PieChartIcon,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
  AreaChart,
  Area,
} from "recharts";

// --- MOCK DATA ---
const REGIONAL_PROJECTS = [
  { name: "Ashanti", completed: 120, ongoing: 45, delayed: 10 },
  { name: "Greater Accra", completed: 110, ongoing: 50, delayed: 15 },
  { name: "Eastern", completed: 85, ongoing: 30, delayed: 5 },
  { name: "Central", completed: 75, ongoing: 25, delayed: 8 },
  { name: "Northern", completed: 60, ongoing: 35, delayed: 12 },
  { name: "Western", completed: 55, ongoing: 20, delayed: 4 },
  { name: "Volta", completed: 45, ongoing: 25, delayed: 6 },
  { name: "Upper East", completed: 30, ongoing: 15, delayed: 3 },
];

const PROJECT_STATUS = [
  { name: "Completed", value: 580, color: "#006B3C" },
  { name: "Ongoing", value: 245, color: "#3B82F6" },
  { name: "Upcoming", value: 110, color: "#F59E0B" },
  { name: "Delayed", value: 65, color: "#CE1126" },
];

const TREND_DATA = [
  { month: "Jan", transparency: 72, projects: 45, engagement: 81 },
  { month: "Feb", transparency: 74, projects: 50, engagement: 83 },
  { month: "Mar", transparency: 77, projects: 58, engagement: 82 },
  { month: "Apr", transparency: 81, projects: 65, engagement: 86 },
  { month: "May", transparency: 84, projects: 70, engagement: 88 },
  { month: "Jun", transparency: 87, projects: 85, engagement: 92 },
];

const TOP_CONSTITUENCIES = [
  {
    rank: 1,
    name: "Tamale South",
    mp: "Haruna Iddrisu",
    region: "Northern",
    score: 96,
    devScore: 94,
  },
  {
    rank: 2,
    name: "North Tongu",
    mp: "Samuel Okudzeto Ablakwa",
    region: "Volta",
    score: 95,
    devScore: 98,
  },
  {
    rank: 3,
    name: "Asawase",
    mp: "Ibrahim Muntaka",
    region: "Ashanti",
    score: 94,
    devScore: 91,
  },
  {
    rank: 4,
    name: "Ellembelle",
    mp: "Emmanuel Armah-Kofi Buah",
    region: "Western",
    score: 92,
    devScore: 90,
  },
  {
    rank: 5,
    name: "Klottey-Korle",
    mp: "Zanetor Agyeman-Rawlings",
    region: "Greater Accra",
    score: 90,
    devScore: 88,
  },
];

const ALERTS_FEED = [
  {
    type: "Success",
    text: "New Community Water Project completed in North Tongu.",
    time: "10 mins ago",
    color: "text-[#006B3C]",
    bg: "bg-[#006B3C]/10",
  },
  {
    type: "Alert",
    text: "Budget utilization report released for Q2 2026.",
    time: "1 hour ago",
    color: "text-blue-600",
    bg: "bg-blue-600/10",
  },
  {
    type: "Warning",
    text: "Accra Ring Road project flagged as delayed by citizens.",
    time: "3 hours ago",
    color: "text-[#CE1126]",
    bg: "bg-[#CE1126]/10",
  },
  {
    type: "Info",
    text: "Parliamentary attendance records updated for June.",
    time: "5 hours ago",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

// --- MOCK DATA FOR NEW SECTIONS ---
const PARLIAMENT_PERFORMANCE = [
  { metric: "Average Attendance", score: 85, ideal: 95 },
  { metric: "Legislative Contributions", score: 62, ideal: 80 },
  { metric: "Committee Participation", score: 78, ideal: 90 },
  { metric: "Constituency Engagement", score: 55, ideal: 85 },
];

const BUDGET_DATA = [
  { name: "Health", allocated: 800, utilized: 650 },
  { name: "Education", allocated: 1200, utilized: 1100 },
  { name: "Roads", allocated: 1500, utilized: 900 },
  { name: "Water", allocated: 400, utilized: 350 },
  { name: "Energy", allocated: 900, utilized: 600 },
];

const TOP_MPS = [
  {
    name: "Samuel Okudzeto Ablakwa",
    constituency: "North Tongu",
    score: 98,
    dev: 96,
    image: "1507003211169-0a1dd7228f2d",
  },
  {
    name: "Haruna Iddrisu",
    constituency: "Tamale South",
    score: 96,
    dev: 95,
    image: "1506794778202-cad84cf45f1d",
  },
  {
    name: "Emmanuel Armah-Kofi Buah",
    constituency: "Ellembelle",
    score: 94,
    dev: 92,
    image: "1554151228176-b4b3b246a482",
  },
];

const CITIZEN_PARTICIPATION = [
  { month: "Jan", reports: 1200, verified: 950 },
  { month: "Feb", reports: 1500, verified: 1100 },
  { month: "Mar", reports: 1100, verified: 900 },
  { month: "Apr", reports: 1800, verified: 1500 },
  { month: "May", reports: 2200, verified: 1850 },
  { month: "Jun", reports: 2500, verified: 2100 },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA] font-sans text-gray-800">
      {/* SECTION 1: HERO */}
      <section className="bg-gradient-to-br from-[#006B3C] to-[#004B2B] pt-24 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081699-28f09d84f475?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-[1px] blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[1px] border border-white/20 bg-white/10 backdrop-blur-md text-white font-bold text-sm mb-8 shadow-sm">
            <ShieldCheck className="w-5 h-5" /> Public Accountability Portal
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            National Transparency Dashboard
          </h1>

          <p className="text-lg md:text-2xl text-white/80 max-w-3xl mb-16 font-medium">
            Real-time insights into parliamentary performance, constituency
            development, project delivery, and public accountability across
            Ghana.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
            {[
              { label: "MPs Tracked", value: "275", icon: Users },
              { label: "Constituencies", value: "275", icon: Map },
              { label: "Active Projects", value: "1,000+", icon: Building },
              { label: "Completed", value: "580", icon: CheckCircle2 },
              { label: "Citizen Reports", value: "24.5k", icon: FileText },
              { label: "National Score", value: "87%", icon: ShieldCheck },
            ].map((kpi, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[1px] p-5 text-center flex flex-col items-center hover:bg-white/20 transition-colors shadow-sm"
              >
                <kpi.icon className="w-6 h-6 mb-3 text-white/80" />
                <div className="text-2xl md:text-3xl font-bold mb-1">
                  {kpi.value}
                </div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-white/70">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-24 space-y-16 lg:space-y-24 w-full">
        {/* SECTION 2 & 3: SCORE & REAL-TIME METRICS */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Section 2: National Transparency Score */}
          <section className="bg-white rounded-[1px] p-8 border border-gray-200 shadow-sm shadow-black/5 flex flex-col items-center justify-center text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-[#006B3C]/5 to-transparent pointer-events-none"></div>
            <h2 className="text-xl font-bold text-gray-900 mb-8 relative z-10">
              National Transparency Score
            </h2>

            <div className="relative w-48 h-48 mb-8">
              <svg
                className="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#006B3C"
                  strokeWidth="8"
                  strokeDasharray="283"
                  strokeDashoffset="36.79"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-[#006B3C]">87%</span>
                <span className="text-sm font-bold text-[#10B981] flex items-center gap-1 mt-1">
                  <TrendingUp className="w-4 h-4" /> +3%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full text-left relative z-10">
              <div className="bg-gray-50 p-4 rounded-[1px] border border-gray-100">
                <div className="text-xs font-bold text-gray-500 uppercase">
                  Dev Delivery
                </div>
                <div className="font-bold text-gray-900">82%</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-[1px] border border-gray-100">
                <div className="text-xs font-bold text-gray-500 uppercase">
                  Citizens
                </div>
                <div className="font-bold text-gray-900">91%</div>
              </div>
            </div>
          </section>

          {/* Section 3: Real-Time Metrics */}
          <section className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Parliamentary Metrics",
                color: "text-[#006B3C]",
                bg: "bg-[#006B3C]/10",
                data: [
                  { label: "Avg Attendance", value: "85%" },
                  { label: "Debates Conducted", value: "342" },
                  { label: "Bills Reviewed", value: "56" },
                ],
              },
              {
                title: "Development Metrics",
                color: "text-blue-600",
                bg: "bg-blue-600/10",
                data: [
                  { label: "Projects Completed", value: "580" },
                  { label: "Active Projects", value: "245" },
                  { label: "Delayed Projects", value: "65" },
                ],
              },
              {
                title: "Citizen Metrics",
                color: "text-amber-500",
                bg: "bg-amber-500/10",
                data: [
                  { label: "Feedback Verified", value: "18.2k" },
                  { label: "Reports Ignored", value: "1.1k" },
                  { label: "Community Meetings", value: "890" },
                ],
              },
              {
                title: "Budget Metrics",
                color: "text-[#CE1126]",
                bg: "bg-[#CE1126]/10",
                data: [
                  { label: "Funds Released", value: "GHC 3.2B" },
                  { label: "Funds Utilized", value: "GHC 2.8B" },
                  { label: "Budget Efficiency", value: "88%" },
                ],
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[1px] p-6 border border-gray-200 shadow-sm hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-lg">
                  <div
                    className={`w-3 h-3 rounded-[1px] ${category.bg} border border-current ${category.color}`}
                  ></div>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.data.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-end border-b border-gray-100 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-sm font-semibold text-gray-500">
                        {item.label}
                      </span>
                      <span className="font-black text-gray-900">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* SECTION 4: GHANA TRANSPARENCY HEAT MAP */}
        <section className="bg-white rounded-[1px] p-6 md:p-10 border border-gray-200 shadow-sm shadow-black/5">
          <div className="flex flex-col md:flex-row items-start justify-between mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Map className="w-8 h-8 text-[#006B3C]" /> Ghana Transparency
                Heat Map
              </h2>
              <p className="text-gray-500 font-medium">
                Constituency performance visualization based on real-time
                accountability scores.
              </p>
            </div>
            <div className="flex bg-gray-50 p-2 rounded-[1px] border border-gray-100 divide-x divide-gray-200 text-xs font-bold w-full md:w-auto">
              <button className="px-4 py-2 hover:bg-gray-100 transition whitespace-nowrap">
                <span className="inline-block w-2 h-2 rounded-[1px] bg-[#004B2B] mr-2"></span>
                Excellent
              </button>
              <button className="px-4 py-2 hover:bg-gray-100 transition whitespace-nowrap">
                <span className="inline-block w-2 h-2 rounded-[1px] bg-[#006B3C] mr-2"></span>
                Good
              </button>
              <button className="px-4 py-2 hover:bg-gray-100 transition whitespace-nowrap">
                <span className="inline-block w-2 h-2 rounded-[1px] bg-[#F59E0B] mr-2"></span>
                Moderate
              </button>
              <button className="px-4 py-2 hover:bg-gray-100 transition whitespace-nowrap">
                <span className="inline-block w-2 h-2 rounded-[1px] bg-[#CE1126] mr-2"></span>
                Critical
              </button>
            </div>
          </div>

          <div className="h-[400px] md:h-[500px] bg-gray-50 rounded-[1px] border border-gray-200 relative overflow-hidden flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity brightness-110"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 transition-transform  duration-500">
              <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-[1px] shadow-sm flex items-center justify-center mb-6">
                <Activity className="w-10 h-10 text-[#006B3C]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Interactive Map Loading
              </h3>
              <p className="text-gray-600 max-w-sm mb-6">
                Explore the full geographic distribution of transparency scores
                across all 275 constituencies.
              </p>
              <button className="bg-[#006B3C] text-white px-8 py-4 rounded-[1px] font-bold hover:bg-[#004B2B] shadow-sm transition-transform">
                Launch Interactive Map
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5 & 9: PARLIAMENT & BUDGET ANALYTICS */}
        <section className="grid lg:grid-cols-2 gap-8">
          {/* Section 5: Parliamentary Performance Dashboard */}
          <div className="bg-white rounded-[1px] p-6 md:p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Users className="w-6 h-6 text-[#006B3C]" /> Parliamentary
              Performance
            </h2>
            <p className="text-gray-500 text-sm mb-8 font-medium">
              National average performance across key legislative duties.
            </p>

            <div className="space-y-6">
              {PARLIAMENT_PERFORMANCE.map((item, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-bold text-gray-700 text-sm">
                      {item.metric}
                    </span>
                    <span className="font-black text-[#006B3C]">
                      {item.score}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-[1px] overflow-hidden relative">
                    <div
                      className="absolute top-0 bottom-0 bg-[#006B3C] rounded-[1px] transition-all duration-1000"
                      style={{ width: `${item.score}%` }}
                    ></div>
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-gray-300 z-10"
                      style={{ left: `${item.ideal}%` }}
                      title={`Ideal target: ${item.ideal}%`}
                    ></div>
                  </div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1 text-right">
                    Target: {item.ideal}%
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-[#006B3C]/10 text-[#006B3C] font-bold rounded-[1px] hover:bg-[#006B3C]/20 transition-colors text-sm">
              Compare All MPs
            </button>
          </div>

          {/* Section 9: Budget Transparency Center */}
          <div className="bg-white rounded-[1px] p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <PieChartIcon className="w-6 h-6 text-[#006B3C]" /> Budget
              Transparency Center
            </h2>
            <p className="text-gray-500 text-sm mb-8 font-medium">
              Allocation vs. Utilization across key sectors (GHC Millions).
            </p>

            <div className="h-[250px] w-full flex-grow">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={BUDGET_DATA}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#E5E7EB"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                  />
                  <Tooltip
                    cursor={{ fill: "#F3F4F6" }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Legend
                    iconType="circle"
                    wrapperStyle={{
                      paddingTop: "10px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  />
                  <Bar
                    dataKey="allocated"
                    fill="#E5E7EB"
                    radius={[4, 4, 0, 0]}
                    name="Allocated"
                  />
                  <Bar
                    dataKey="utilized"
                    fill="#006B3C"
                    radius={[4, 4, 0, 0]}
                    name="Utilized"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <button className="w-full mt-4 py-3 bg-gray-50 text-gray-600 font-bold rounded-[1px] hover:bg-gray-100 transition-colors text-sm border border-gray-200">
              Explore Detailed Spend
            </button>
          </div>
        </section>

        {/* SECTION 6: DEVELOPMENT PROJECT ANALYTICS */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-[#006B3C]" /> National
            Development Analytics
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Regional Project Delivery */}
            <div className="lg:col-span-2 bg-white rounded-[1px] p-6 md:p-8 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-gray-900 mb-6">
                Regional Project Delivery
              </h3>
              <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={REGIONAL_PROJECTS}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#E5E7EB"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6B7280" }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#6B7280" }}
                    />
                    <Tooltip
                      cursor={{ fill: "#F3F4F6" }}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Legend
                      iconType="circle"
                      wrapperStyle={{
                        paddingTop: "20px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    />
                    <Bar
                      dataKey="completed"
                      stackId="a"
                      fill="#006B3C"
                      radius={[0, 0, 4, 4]}
                      name="Completed"
                    />
                    <Bar
                      dataKey="ongoing"
                      stackId="a"
                      fill="#3B82F6"
                      name="Ongoing"
                    />
                    <Bar
                      dataKey="delayed"
                      stackId="a"
                      fill="#CE1126"
                      radius={[4, 4, 0, 0]}
                      name="Delayed"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Project Status Distribution */}
            <div className="bg-white rounded-[1px] p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col justify-center">
              <h3 className="font-bold text-lg text-gray-900 mb-6 flex-shrink-0 text-center">
                Project Status Distribution
              </h3>
              <div className="h-[250px] relative w-full mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={PROJECT_STATUS}
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={4}
                      dataKey="value"
                      stroke="none"
                    >
                      {PROJECT_STATUS.map((item, index) => (
                        <Cell key={`cell-${index}`} fill={item.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                  <span className="text-3xl font-black text-gray-900">
                    1,000+
                  </span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Total
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {PROJECT_STATUS.map((stat) => (
                  <div
                    key={stat.name}
                    className="flex flex-col items-center p-2 bg-gray-50 rounded-[1px] border border-gray-100"
                  >
                    <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-gray-500 mb-1">
                      <div
                        className="w-2 h-2 rounded-[1px]"
                        style={{ backgroundColor: stat.color }}
                      ></div>
                      {stat.name}
                    </div>
                    <div className="font-bold text-lg text-gray-900">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: TOP PERFORMING MPs */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#006B3C]" /> Top Performing MPs
            </h2>
            <Link
              to="/mps"
              className="text-[#006B3C] font-semibold text-sm hover:underline hidden sm:block"
            >
              Explore All MPs &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TOP_MPS.map((mp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[1px] border border-gray-200 overflow-hidden shadow-sm hover:shadow-sm transition-all group relative"
              >
                {idx === 0 && (
                  <div className="absolute top-4 right-4 z-20 bg-[#F59E0B] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-[1px] shadow-sm">
                    #1 Nationally
                  </div>
                )}
                <div className="h-48 bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <img
                    src={`https://images.unsplash.com/photo-${mp.image}?w=500&q=80`}
                    alt={mp.name}
                    className="w-full h-full object-cover  transition-transform duration-700 object-top"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                    <h3 className="font-bold text-xl leading-tight">
                      {mp.name}
                    </h3>
                    <p className="text-white/80 text-sm font-medium">
                      {mp.constituency}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                        Overall Score
                      </p>
                      <p className="text-2xl font-black text-[#006B3C]">
                        {mp.score}%
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-500 tracking-wider text-right">
                        Dev Rating
                      </p>
                      <p className="text-2xl font-black text-gray-900 text-right">
                        {mp.dev}%
                      </p>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-gray-50 text-[#006B3C] font-bold rounded-[1px] hover:bg-gray-100 border border-gray-100 transition-colors text-sm">
                    View Full Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 10: CITIZEN PARTICIPATION DASHBOARD */}
        <section className="bg-[#006B3C] rounded-[1px] p-6 md:p-10 text-white shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-[1px] blur-[80px] pointer-events-none"></div>

          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Users className="w-8 h-8 text-white" /> Citizen Engagement
              </h2>
              <p className="text-white/80 font-medium mb-8">
                Direct public participation metrics across local communities,
                holding leadership accountable.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white/10 backdrop-blur-md rounded-[1px] p-4 border border-white/20">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                    Total Reports Submitted
                  </div>
                  <div className="text-3xl font-black">24,500+</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-[1px] p-4 border border-white/20">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-white/70 mb-1">
                    Feedback Verified
                  </div>
                  <div className="text-3xl font-black text-[#10B981]">
                    18,200
                  </div>
                </div>
              </div>

              <button className="w-full bg-white text-[#006B3C] px-6 py-4 rounded-[1px] font-bold hover:bg-gray-100 shadow-sm transition-transform">
                Submit Community Feedback
              </button>
            </div>

            <div className="md:w-2/3 h-[400px] bg-white/5 rounded-[1px] border border-white/10 p-6 backdrop-blur-sm">
              <h3 className="font-bold mb-6 text-xl">Participation Trends</h3>
              <ResponsiveContainer width="100%" height="90%">
                <BarChart
                  data={CITIZEN_PARTICIPATION}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="rgba(255,255,255,0.1)"
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "rgba(255,255,255,0.7)" }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "rgba(255,255,255,0.7)" }}
                  />
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.1)" }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.3)",
                      backgroundColor: "#1F2937",
                      color: "#fff",
                    }}
                  />
                  <Legend
                    iconType="circle"
                    wrapperStyle={{
                      paddingTop: "10px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  />
                  <Bar
                    dataKey="reports"
                    fill="rgba(255,255,255,0.7)"
                    radius={[4, 4, 0, 0]}
                    name="Reports Submitted"
                    barSize={12}
                  />
                  <Bar
                    dataKey="verified"
                    fill="#10B981"
                    radius={[4, 4, 0, 0]}
                    name="Reports Verified"
                    barSize={12}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* SECTION 7 & 11: RANKINGS & ALERTS */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Section 7: Constituency Performance Rankings */}
          <section className="lg:col-span-2 bg-white rounded-[1px] p-6 md:p-8 border border-gray-200 shadow-sm">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  Top Constituencies
                </h2>
                <p className="text-sm font-medium text-gray-500">
                  Ranked by combined transparency and development scores.
                </p>
              </div>
              <button className="text-[#006B3C] font-semibold text-sm hover:underline hidden sm:block">
                View Full Leaderboard
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-50">
                    <th className="p-4 rounded-[1px]-tl-xl w-16 text-center">Rank</th>
                    <th className="p-4">Constituency</th>
                    <th className="p-4">MP</th>
                    <th className="p-4 text-center">Transparency</th>
                    <th className="p-4 rounded-[1px]-tr-xl text-center">Dev Score</th>
                  </tr>
                </thead>
                <tbody>
                  {TOP_CONSTITUENCIES.map((c) => (
                    <tr
                      key={c.rank}
                      className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="p-4 text-center">
                        <span
                          className={`inline-flex items-center justify-center w-8 h-8 rounded-[1px] font-bold text-sm ${c.rank <= 3 ? "bg-amber-100 text-amber-600" : "bg-gray-100 text-gray-600"}`}
                        >
                          {c.rank}
                        </span>
                      </td>
                      <td className="p-4 font-bold text-gray-900">{c.name}</td>
                      <td className="p-4 text-sm font-medium text-gray-600">
                        {c.mp}
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-block px-3 py-1 bg-[#006B3C]/10 text-[#006B3C] font-bold rounded-[1px]">
                          {c.score}%
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-bold rounded-[1px]">
                          {c.devScore}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 11: Transparency Alerts */}
          <section className="bg-white rounded-[1px] p-6 md:p-8 border border-gray-200 shadow-sm flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Activity Feed
            </h2>
            <div className="flex-grow space-y-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-gray-100">
              {ALERTS_FEED.map((alert, i) => (
                <div key={i} className="relative pl-8">
                  <div
                    className={`absolute left-0 top-1 w-6 h-6 rounded-[1px] border-4 border-white ${alert.bg} flex items-center justify-center`}
                  >
                    <div
                      className={`w-2 h-2 rounded-[1px] bg-current ${alert.color}`}
                    ></div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-[1px] border border-gray-100 hover:shadow-sm transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <span
                        className={`text-[10px] uppercase font-bold tracking-wider ${alert.color}`}
                      >
                        {alert.type}
                      </span>
                      <span className="text-[10px] font-bold text-gray-400">
                        {alert.time}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 leading-snug">
                      {alert.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-gray-50 text-gray-600 font-bold rounded-[1px] hover:bg-gray-100 transition-colors text-sm border border-gray-200">
              View All Notifications
            </button>
          </section>
        </div>

        {/* SECTION 13: TRANSPARENCY TRENDS */}
        <section className="bg-white rounded-[1px] p-6 md:p-8 border border-gray-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-6 border-b border-gray-100">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#006B3C]" /> Historical
                Trends
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                Tracking national growth across key accountability indicators
                over 6 months.
              </p>
            </div>
            <select className="mt-4 md:mt-0 bg-gray-50 border border-gray-200 text-gray-700 font-bold py-2 px-4 rounded-[1px] outline-none focus:ring-2 focus:ring-[#006B3C]">
              <option>Last 6 Months</option>
              <option>Year to Date</option>
              <option>All Time</option>
            </select>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={TREND_DATA}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTrans" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#006B3C" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#006B3C" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorEngs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#E5E7EB"
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280", fontWeight: "bold" }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6B7280", fontWeight: "bold" }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    fontWeight: "bold",
                  }}
                />
                <Legend
                  iconType="circle"
                  wrapperStyle={{
                    paddingTop: "20px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="transparency"
                  stroke="#006B3C"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorTrans)"
                  name="Transparency Score"
                />
                <Area
                  type="monotone"
                  dataKey="engagement"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorEngs)"
                  name="Citizen Engagement"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* SECTION 12: DATA INSIGHTS & REPORTS */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="sm:col-span-2 lg:col-span-4 mb-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <FilePlus className="w-6 h-6 text-[#006B3C]" /> Data Insights &
              Reports
            </h2>
          </div>
          {[
            { title: "Parliamentary Performance Report", type: "PDF Document" },
            {
              title: "Constituency Development Assessment",
              type: "CSV Export",
            },
            { title: "National Budget Transparency", type: "PDF Document" },
            { title: "Citizen Engagement Analytics", type: "Raw Data File" },
          ].map((report, i) => (
            <div
              key={i}
              className="bg-white rounded-[1px] p-6 border border-gray-200 shadow-sm hover:shadow-sm transition-all group flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 bg-gray-50 rounded-[1px] flex items-center justify-center mb-4 group-hover:bg-[#006B3C]/10 transition-colors">
                  <Download className="w-6 h-6 text-gray-400 group-hover:text-[#006B3C]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug">
                  {report.title}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-6">
                  {report.type}
                </p>
              </div>
              <div className="flex items-center text-[#006B3C] font-bold text-sm hover:underline">
                Download Report <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* SECTION 14: CTA BANNER */}
      <section className="bg-gradient-to-r from-[#1F2937] to-[#111827] py-24 px-4 sm:px-6 lg:px-8 mt-12 relative overflow-hidden text-center z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#006B3C]/10 rounded-[1px] blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Award className="w-16 h-16 text-[#006B3C] mx-auto mb-6 drop-shadow-sm" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            A More Transparent Ghana Starts With Informed Citizens
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-medium mb-12 max-w-2xl mx-auto">
            Monitor parliamentary performance, track development projects,
            analyze public spending, and participate in building accountable
            leadership.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/mps"
              className="bg-[#006B3C] text-white px-8 py-4 rounded-[1px] font-bold hover:bg-[#004B2B] shadow-sm transition-transform  w-full sm:w-auto"
            >
              Explore MPs
            </Link>
            <Link
              to="/projects"
              className="bg-white text-gray-900 px-8 py-4 rounded-[1px] font-bold hover:bg-gray-100 shadow-sm transition-transform  w-full sm:w-auto"
            >
              Track Projects
            </Link>
            <Link
              to="/community"
              className="bg-transparent text-white border border-gray-600 px-8 py-4 rounded-[1px] font-bold hover:bg-gray-800 transition-colors w-full sm:w-auto"
            >
              View Community Stats
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
