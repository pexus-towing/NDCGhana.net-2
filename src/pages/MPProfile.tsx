import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  Target,
  Mic,
  Users,
  MapPin,
  Building2,
  UserCheck,
  Presentation,
  FileText,
  CheckCircle2,
  AlertCircle,
  Share2,
  Download,
  TrendingUp,
  Award,
  Calendar,
  BookOpen,
  Clock,
  BarChart3,
  MessageSquare,
  Star,
  ArrowRight,
  ShieldCheck,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Map,
} from "lucide-react";

const MP = {
  id: "6",
  name: "Hon. Samuel Okudzeto Ablakwa",
  constituency: "North Tongu",
  region: "Volta",
  party: "NDC",
  role: "Ranking Member, Foreign Affairs Committee",
  initial: "SA",
  image: "SA",
  stats: {
    attendance: 98,
    projectsDelivered: 45,
    satisfaction: 92,
    contributions: 150,
    debates: 84,
    motions: 12,
    questions: 56,
    score: 98,
  },
  bio: "Samuel Okudzeto Ablakwa is a dedicated public servant and currently serves as the Member of Parliament for the North Tongu in the Volta Region of Ghana. He is known for his strong advocacy for education, transparency, and rural development.",
  education: [
    {
      year: "2010",
      degree: "MA Communication Studies",
      school: "University of Ghana",
    },
    {
      year: "2006",
      degree: "BA Political Science",
      school: "University of Ghana",
    },
  ],
  timeline: [
    {
      year: "2012 - Present",
      role: "Member of Parliament",
      desc: "Serving the good people of North Tongu Constituency.",
    },
    {
      year: "2013 - 2017",
      role: "Deputy Minister",
      desc: "Deputy Minister of Education in charge of Tertiary Education.",
    },
    {
      year: "2009 - 2013",
      role: "Deputy Minister",
      desc: "Deputy Minister of Information.",
    },
  ],
  projects: [
    {
      title: "North Tongu Scholarship Scheme",
      category: "Education",
      status: "Ongoing",
      progress: 85,
      budget: "GHS 500,000",
      date: "Sep 2025",
    },
    {
      title: "Mepe Health Center Upgrade",
      category: "Healthcare",
      status: "Completed",
      progress: 100,
      budget: "GHS 1.2M",
      date: "Aug 2025",
    },
    {
      title: "Juapong Market Extension",
      category: "Infrastructure",
      status: "Ongoing",
      progress: 60,
      budget: "GHS 2.5M",
      date: "Nov 2025",
    },
  ],
  impact: {
    schools: 12,
    roads: "45km",
    health: 4,
    youth: 2500,
  },
  achievements: [
    "Most Outstanding MP 2024",
    "Constructed 5 modern classroom blocks",
    "Initiated major rural electrification",
  ],
};

export default function MPProfile() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex flex-col min-h-screen bg-surface-white font-sans text-on-surface">
      {/* SECTION 1: PROFILE HERO BANNER */}
      <section className="bg-[#006B3C] text-white pt-12 pb-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#004B2B] to-transparent" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-[1px] blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            to="/mps"
            className="inline-flex items-center text-sm text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to MP Directory
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            <div className="shrink-0 relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-[1px] bg-[#004B2B] flex items-center justify-center text-6xl font-bold text-white shadow-sm shadow-black/20 border-4 border-white/10 relative overflow-hidden">
                {MP.image}
              </div>
              <div
                className="absolute -bottom-4 -right-4 bg-white text-[#006B3C] p-2 rounded-[1px] shadow-sm border border-outline-variant/20"
                title="Verified Member of Parliament"
              >
                <ShieldCheck className="w-8 h-8" />
              </div>
            </div>

            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-[#CE1126] text-white text-xs font-bold px-3 py-1 rounded-[1px]">
                  {MP.party}
                </span>
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-[1px] backdrop-blur-sm shadow-sm">
                  {MP.role}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
                {MP.name}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base font-medium mb-8">
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-white/70" />
                  {MP.constituency} Constituency
                </span>
                <span className="flex items-center gap-2">
                  <Map className="w-5 h-5 text-white/70" />
                  {MP.region} Region
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-white text-[#006B3C] hover:bg-surface-bg px-6 py-3 rounded-[1px] font-bold transition-colors shadow-sm shadow-black/10 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" /> Contact MP
                </button>
                <button className="bg-[#004B2B] text-white hover:bg-[#003B22] border border-white/20 px-6 py-3 rounded-[1px] font-bold transition-colors shadow-sm flex items-center gap-2">
                  <Target className="w-5 h-5" /> Track Projects
                </button>
                <div className="flex items-center gap-2 ml-auto">
                  <button
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-[1px] transition-colors backdrop-blur-sm"
                    title="Share Profile"
                  >
                    <Share2 className="w-5 h-5 text-white" />
                  </button>
                  <button
                    className="p-3 bg-white/10 hover:bg-white/20 rounded-[1px] transition-colors backdrop-blur-sm"
                    title="Download Report"
                  >
                    <Download className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-24 w-full space-y-12">
        {/* QUICK STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-white rounded-[1px] p-4 shadow-sm shadow-black/5 border border-outline-variant/30">
          {[
            {
              label: "Attendance Rate",
              value: `${MP.stats.attendance}%`,
              icon: UserCheck,
              color: "text-[#006B3C]",
            },
            {
              label: "Projects Delivered",
              value: MP.stats.projectsDelivered,
              icon: Building2,
              color: "text-blue-600",
            },
            {
              label: "Citizen Satisfaction",
              value: `${MP.stats.satisfaction}%`,
              icon: Star,
              color: "text-amber-500",
            },
            {
              label: "Parliamentary Contributions",
              value: MP.stats.contributions,
              icon: Mic,
              color: "text-[#CE1126]",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-4 md:p-6 text-center border-r border-outline-variant/30 last:border-0 flex flex-col items-center"
            >
              <div
                className={`p-3 bg-surface-dim rounded-[1px] mb-3 ${stat.color}`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-deep-navy mb-1">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-on-surface-variant text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* PROFILE TABS */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-outline-variant/40 mb-8 sticky top-0 bg-white/80 backdrop-blur-md z-30 pt-4">
          {["Overview", "Performance", "Projects", "Community", "Feedback"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab
                    ? "border-[#006B3C] text-[#006B3C]"
                    : "border-transparent text-on-surface-variant hover:text-deep-navy hover:bg-surface-bg/50"
                }`}
              >
                {tab}
              </button>
            ),
          )}
        </div>

        {/* TAB CONTENT OVERVIEW */}
        {activeTab === "Overview" && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* SECTION 3: BIOGRAPHY */}
              <section className="bg-white rounded-[1px] p-8 border border-outline-variant/30 shadow-sm">
                <h2 className="text-2xl font-bold text-deep-navy mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-[#006B3C]" /> Biography &
                  Journey
                </h2>
                <div className="prose prose-lg text-on-surface-variant max-w-none mb-8 leading-relaxed">
                  <p>{MP.bio}</p>
                </div>

                <h3 className="text-lg font-bold text-deep-navy mb-4">
                  Education
                </h3>
                <div className="space-y-4 mb-8">
                  {MP.education.map((edu, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="shrink-0 w-16 text-sm font-bold text-on-surface-variant/60 pt-1">
                        {edu.year}
                      </div>
                      <div className="bg-surface-bg p-4 rounded-[1px] flex-grow border border-outline-variant/20">
                        <div className="font-bold text-deep-navy">
                          {edu.degree}
                        </div>
                        <div className="text-sm text-on-surface-variant">
                          {edu.school}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-deep-navy mb-4">
                  Leadership Timeline
                </h3>
                <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-2 before:w-0.5 before:bg-outline-variant/30">
                  {MP.timeline.map((item, i) => (
                    <div key={i} className="relative pl-8">
                      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-[1px] bg-[#006B3C] border-4 border-white shadow-sm" />
                      <div className="font-bold text-sm text-[#006B3C] mb-1">
                        {item.year}
                      </div>
                      <div className="font-bold text-deep-navy text-lg mb-1">
                        {item.role}
                      </div>
                      <p className="text-on-surface-variant text-sm">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 9: RECENT ACHIEVEMENTS */}
              <section className="bg-white rounded-[1px] p-8 border border-outline-variant/30 shadow-sm">
                <h2 className="text-2xl font-bold text-deep-navy mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#006B3C]" /> Career Highlights
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {MP.achievements.map((achieve, i) => (
                    <div
                      key={i}
                      className="bg-surface-bg border border-outline-variant/40 p-4 rounded-[1px] flex items-start gap-4 hover:border-[#006B3C]/40 transition-colors"
                    >
                      <div className="p-2 bg-amber-100 text-amber-600 rounded-[1px] shrink-0">
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <div className="font-semibold text-deep-navy leading-snug">
                        {achieve}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              {/* SECTION 2: PERFORMANCE OVERVIEW MINI */}
              <section className="bg-surface-bg rounded-[1px] p-6 border border-outline-variant/40">
                <h3 className="text-xl font-bold text-deep-navy mb-6 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#006B3C]" /> Quick
                  Dashboard
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span className="text-on-surface-variant">
                        Overall Dev Score
                      </span>
                      <span className="text-[#006B3C] text-lg">
                        {MP.stats.score}%
                      </span>
                    </div>
                    <div className="h-3 bg-outline-variant/20 rounded-[1px] overflow-hidden">
                      <div
                        className="h-full bg-[#006B3C] rounded-[1px]"
                        style={{ width: `${MP.stats.score}%` }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-[1px] border border-outline-variant/30 text-center">
                      <div className="text-2xl font-bold text-deep-navy mb-1">
                        {MP.stats.debates}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">
                        Debates
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-[1px] border border-outline-variant/30 text-center">
                      <div className="text-2xl font-bold text-deep-navy mb-1">
                        {MP.stats.motions}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">
                        Motions
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 10: CONSTITUENCY INSIGHTS */}
              <section className="bg-white rounded-[1px] p-6 border border-outline-variant/30 shadow-sm">
                <h3 className="text-xl font-bold text-deep-navy mb-4 border-b border-outline-variant/20 pb-4">
                  Constituency Info
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Population</span>
                    <span className="font-bold text-deep-navy">~120,400</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">Communities</span>
                    <span className="font-bold text-deep-navy">45</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-on-surface-variant">
                      Priority Area
                    </span>
                    <span className="font-bold text-deep-navy">
                      Agriculture
                    </span>
                  </div>
                  <button className="w-full mt-4 py-3 bg-surface-bg border border-outline-variant/50 rounded-[1px] font-semibold text-deep-navy hover:bg-surface-dim transition-colors flex items-center justify-center gap-2">
                    <Map className="w-4 h-4" /> View Map
                  </button>
                </div>
              </section>

              {/* SECTION 11: CONTACT */}
              <section className="bg-deep-navy text-white rounded-[1px] p-6 border border-deep-navy shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-[1px] blur-2xl pointer-events-none" />
                <h3 className="text-xl font-bold mb-6 relative z-10">
                  Contact Office
                </h3>
                <div className="space-y-4 relative z-10">
                  <a
                    href="mailto:office@ablakwa.com"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 text-[#006B3C]" />{" "}
                    office@ablakwa.com
                  </a>
                  <div className="flex items-center gap-3 text-white/80">
                    <Phone className="w-5 h-5 text-[#006B3C]" /> +233 24 123
                    4567
                  </div>
                  <div className="flex gap-4 pt-4 border-t border-white/10 mt-4">
                    <a
                      href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-[1px] hover:bg-[#006B3C] transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-[1px] hover:bg-[#006B3C] transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-[1px] hover:bg-[#006B3C] transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* SECTION 4: PARLIAMENTARY PERFORMANCE TAB */}
        {activeTab === "Performance" && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: "Parliamentary Attendance",
                  val: "98%",
                  icon: Calendar,
                },
                {
                  label: "Questions Raised",
                  val: MP.stats.questions,
                  icon: AlertCircle,
                },
                {
                  label: "Debates Contributed",
                  val: MP.stats.debates,
                  icon: Mic,
                },
                {
                  label: "Motions Supported",
                  val: MP.stats.motions,
                  icon: FileText,
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-[1px] border border-outline-variant/30 shadow-sm flex items-start gap-4"
                >
                  <div className="p-3 bg-[#006B3C]/10 text-[#006B3C] rounded-[1px] shrink-0">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-deep-navy mb-1">
                      {s.val}
                    </div>
                    <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[1px] p-8 border border-outline-variant/30 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-deep-navy flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#006B3C]" /> Recent Debates
                  & Speeches
                </h3>
                <button className="text-sm font-semibold text-[#006B3C] hover:underline">
                  View Hansard Records
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-outline-variant/40 text-xs uppercase tracking-wider text-on-surface-variant font-bold bg-surface-bg/50">
                      <th className="p-4 rounded-[1px]-tl-lg">Date</th>
                      <th className="p-4">Topic</th>
                      <th className="p-4">Type</th>
                      <th className="p-4 rounded-[1px]-tr-lg text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        date: "Oct 15, 2025",
                        topic: "Education Infrastructure Bill",
                        type: "Debate Contribution",
                      },
                      {
                        date: "Sep 22, 2025",
                        topic: "Rural Electrification Assessment",
                        type: "Question Raised",
                      },
                      {
                        date: "Aug 10, 2025",
                        topic: "National Budget Review",
                        type: "Committee Report",
                      },
                    ].map((record, i) => (
                      <tr
                        key={i}
                        className="border-b border-outline-variant/20 hover:bg-surface-bg/50 transition-colors"
                      >
                        <td className="p-4 text-sm font-medium text-on-surface-variant whitespace-nowrap">
                          {record.date}
                        </td>
                        <td className="p-4 font-semibold text-deep-navy">
                          {record.topic}
                        </td>
                        <td className="p-4 text-sm text-on-surface-variant">
                          <span className="bg-surface-dim px-3 py-1 rounded-[1px]">
                            {record.type}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button className="inline-flex items-center gap-1 text-[#006B3C] text-sm font-semibold hover:text-[#004B2B]">
                            Read <ArrowRight className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: PROJECTS TAB */}
        {activeTab === "Projects" && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-deep-navy">
                Constituency Development
              </h2>
              <Link 
                to="/projects"
                className="bg-surface-bg border border-outline-variant/50 text-deep-navy font-semibold px-4 py-2 rounded-[1px] hover:bg-surface-dim transition-colors text-sm flex items-center gap-2"
              >
                View Project Tracker <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MP.projects.map((proj, i) => (
                <div
                  key={i}
                  className="bg-white rounded-[1px] border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-sm transition-all group flex flex-col"
                >
                  <div className="p-6 pb-4 border-b border-outline-variant/20 flex-grow">
                    <div className="flex items-center justify-between mb-4 text-xs font-bold uppercase tracking-wider">
                      <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-[1px]">
                        {proj.category}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-[1px] ${proj.status === "Completed" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
                      >
                        {proj.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-deep-navy mb-2 line-clamp-2 leading-tight group-hover:text-[#006B3C] transition-colors">
                      {proj.title}
                    </h3>
                    <div className="text-on-surface-variant text-sm flex items-center gap-2 mb-4">
                      <Clock className="w-4 h-4" /> Est. Completion: {proj.date}
                    </div>

                    <div className="mt-auto pt-4">
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-on-surface-variant uppercase">
                          Progress
                        </span>
                        <span className="text-[#006B3C]">{proj.progress}%</span>
                      </div>
                      <div className="h-2 bg-surface-dim rounded-[1px] overflow-hidden">
                        <div
                          className="h-full bg-[#006B3C] rounded-[1px] transition-all duration-1000"
                          style={{ width: `${proj.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-surface-bg/50 flex items-center justify-between shrink-0">
                    <div className="text-sm">
                      <span className="text-on-surface-variant">Budget:</span>{" "}
                      <span className="font-bold text-deep-navy">
                        {proj.budget}
                      </span>
                    </div>
                    <button className="text-[#006B3C] font-semibold text-sm hover:underline">
                      Details &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 6 & 8: COMMUNITY TAB */}
        {activeTab === "Community" && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <section className="bg-white rounded-[1px] p-8 border border-outline-variant/30 shadow-sm col-span-2 text-center text-deep-navy">
                <h3 className="text-2xl font-bold mb-8">
                  Overall Constituency Impact
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-[#006B3C] mb-2">
                      {MP.impact.schools}
                    </div>
                    <div className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">
                      Schools Built
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#CE1126] mb-2">
                      {MP.impact.roads}
                    </div>
                    <div className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">
                      Roads Paved
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {MP.impact.health}
                    </div>
                    <div className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">
                      Health Centers
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-500 mb-2">
                      {MP.impact.youth}
                    </div>
                    <div className="text-sm font-bold uppercase tracking-wider text-on-surface-variant">
                      Youth Supported
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section>
              <h3 className="text-2xl font-bold text-deep-navy mb-6">
                Recent Public Engagements
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    date: "Oct 20, 2025",
                    type: "Town Hall",
                    title: "Mepe Constituency Open Forum",
                    desc: "Discussing the upcoming education budget with chiefs and community leaders.",
                  },
                  {
                    date: "Oct 05, 2025",
                    type: "Media Interview",
                    title: "JoyNews AM Show",
                    desc: "Explaining the NDC's alternative policies on rural infrastructure.",
                  },
                  {
                    date: "Sep 15, 2025",
                    type: "Community Visit",
                    title: "Juapong Market Inspection",
                    desc: "Site visit and engagement with market women on expansion works.",
                  },
                ].map((eng, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-[1px] border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-sm transition-shadow"
                  >
                    <div className="h-32 bg-surface-dim relative border-b border-outline-variant/20">
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <Users className="w-16 h-16" />
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-[#006B3C] bg-[#006B3C]/10 px-2 py-1 rounded-[1px]">
                          {eng.type}
                        </span>
                        <span className="text-xs font-semibold text-on-surface-variant flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {eng.date}
                        </span>
                      </div>
                      <h4 className="font-bold text-deep-navy mb-2">
                        {eng.title}
                      </h4>
                      <p className="text-sm text-on-surface-variant mb-4">
                        {eng.desc}
                      </p>
                      <button className="text-sm font-bold text-[#006B3C] hover:underline">
                        Read Summary &rarr;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* SECTION 7: FEEDBACK TAB */}
        {activeTab === "Feedback" && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <section className="bg-white rounded-[1px] p-6 border border-outline-variant/30 shadow-sm text-center">
                <h3 className="text-lg font-bold text-deep-navy mb-4">
                  Citizen Approval
                </h3>
                <div className="text-6xl font-bold text-[#006B3C] mb-2">
                  {MP.stats.satisfaction}%
                </div>
                <div className="flex justify-center gap-1 mb-2 text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current opacity-50" />
                </div>
                <p className="text-sm text-on-surface-variant">
                  Based on 1,245 verified local constituent reviews
                </p>
              </section>

              <section className="bg-surface-bg rounded-[1px] p-6 border border-outline-variant/40">
                <h4 className="font-bold text-deep-navy mb-4">
                  Sentiment Breakdown
                </h4>
                <div className="space-y-3 text-sm font-semibold">
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-on-surface-variant">
                      Exceptional
                    </span>
                    <div className="flex-grow h-2 bg-surface-dim rounded-[1px] overflow-hidden">
                      <div
                        className="h-full bg-[#006B3C]"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <span className="w-8 text-right text-deep-navy">65%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-on-surface-variant">Good</span>
                    <div className="flex-grow h-2 bg-surface-dim rounded-[1px] overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: "25%" }}
                      />
                    </div>
                    <span className="w-8 text-right text-deep-navy">25%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-on-surface-variant">
                      Average
                    </span>
                    <div className="flex-grow h-2 bg-surface-dim rounded-[1px] overflow-hidden">
                      <div
                        className="h-full bg-amber-500"
                        style={{ width: "8%" }}
                      />
                    </div>
                    <span className="w-8 text-right text-deep-navy">8%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-on-surface-variant">Poor</span>
                    <div className="flex-grow h-2 bg-surface-dim rounded-[1px] overflow-hidden">
                      <div
                        className="h-full bg-[#CE1126]"
                        style={{ width: "2%" }}
                      />
                    </div>
                    <span className="w-8 text-right text-deep-navy">2%</span>
                  </div>
                </div>
              </section>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <section className="bg-white rounded-[1px] p-6 md:p-8 border border-outline-variant/30 shadow-sm">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 pb-4 border-b border-outline-variant/20 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-deep-navy mb-1">
                      Submit Public Feedback
                    </h3>
                    <p className="text-sm text-on-surface-variant">
                      Your voice forms part of the accountability metric for
                      this MP.
                    </p>
                  </div>
                  <button className="bg-[#006B3C] text-white px-6 py-2.5 rounded-[1px] font-bold shadow-sm hover:bg-[#004B2B] transition-colors shrink-0">
                    Submit Review
                  </button>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      author: "Kwame M.",
                      location: "Mepe",
                      rating: 5,
                      date: "2 days ago",
                      comment:
                        "The new community health center has completely transformed our access to healthcare. Great leadership!",
                    },
                    {
                      author: "Ama O.",
                      location: "Juapong",
                      rating: 4,
                      date: "1 week ago",
                      comment:
                        "Good progress on the market extension. We need the roads leading to it to be fixed next before the rains start.",
                    },
                    {
                      author: "Elias K.",
                      location: "Battor",
                      rating: 5,
                      date: "3 weeks ago",
                      comment:
                        "Very accessible MP. Always present at communal labor and actively listens to the youth.",
                    },
                  ].map((review, i) => (
                    <div
                      key={i}
                      className="bg-surface-bg p-5 rounded-[1px] border border-outline-variant/30"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-[1px] bg-surface-dim flex items-center justify-center font-bold text-deep-navy border border-outline-variant/50">
                            {review.author.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-deep-navy text-sm">
                              {review.author}
                            </div>
                            <div className="text-xs text-on-surface-variant flex items-center gap-1">
                              <MapPin className="w-3 h-3" /> {review.location}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex gap-0.5 text-amber-500 mb-1">
                            {[...Array(5)].map((_, idx) => (
                              <Star
                                key={idx}
                                className={`w-3.5 h-3.5 ${idx < review.rating ? "fill-current" : "opacity-30"}`}
                              />
                            ))}
                          </div>
                          <div className="text-[10px] text-on-surface-variant uppercase font-bold">
                            {review.date}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-deep-navy/80">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 bg-surface-dim/30 text-on-surface-variant font-bold text-sm hover:bg-surface-dim/50 transition-colors rounded-[1px] border border-outline-variant/50 border-dashed">
                  Load More Reviews
                </button>
              </section>
            </div>
          </div>
        )}
      </main>

      {/* SECTION 12: RELATED MPS */}
      <section className="bg-surface-bg/50 border-t border-outline-variant/30 py-16 px-4 sm:px-6 lg:px-8 mt-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-deep-navy">
              Similar MPs by Performance
            </h3>
            <Link
              to="/mps"
              className="text-[#006B3C] font-semibold hover:underline hidden sm:block"
            >
              View Directory &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Haruna Iddrisu",
                constituency: "Tamale South",
                score: 96,
                image: "HI",
                party: "NDC",
              },
              {
                name: "Emmanuel Armah-Kofi Buah",
                constituency: "Ellembelle",
                score: 92,
                image: "EA",
                party: "NDC",
              },
              {
                name: "Ibrahim Muntaka",
                constituency: "Asawase",
                score: 94,
                image: "IM",
                party: "NDC",
              },
              {
                name: "Cassiel Ato Forson",
                constituency: "Ajumako Enyan Essiam",
                score: 85,
                image: "FA",
                party: "NDC",
              },
            ].map((mp, i) => (
              <div
                key={i}
                className="bg-white rounded-[1px] border border-outline-variant/30 p-5 flex items-center gap-4 hover:shadow-sm transition-shadow group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-[1px] bg-[#006B3C] flex items-center justify-center font-bold text-white text-lg shrink-0">
                  {mp.image}
                </div>
                <div>
                  <h4 className="font-bold text-deep-navy text-sm mb-0.5 group-hover:text-[#006B3C] line-clamp-1">
                    {mp.name}
                  </h4>
                  <p className="text-xs text-on-surface-variant mb-2">
                    {mp.constituency}
                  </p>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wide text-[#006B3C] bg-[#006B3C]/10 px-1.5 py-0.5 rounded-[1px]">
                    Score: {mp.score}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="bg-gradient-to-r from-[#006B3C] to-[#004B2B] py-16 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Empowering Citizens Through Transparent Leadership
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Monitor parliamentary performance, track development projects, and
            engage directly with your elected representatives.
          </p>
          <Link
            to="/mps"
            className="bg-white text-[#006B3C] px-8 py-4 rounded-[1px] font-bold text-lg hover:bg-surface-bg transition-colors shadow-sm shadow-black/10 inline-flex items-center gap-2"
          >
            Explore More MP Profiles <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
