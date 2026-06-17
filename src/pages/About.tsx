import { motion } from "motion/react";
import {
  CheckCircle2,
  Shield,
  Target,
  Users,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Banner */}
      <section className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541872703864-f971f11293a6?auto=format&fit=crop&q=80&w=2000')",
          }}
        />
        {/* Deep Green Overlay */}
        <div className="absolute inset-0 z-10 bg-deep-navy/90 mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-deep-navy via-deep-navy/80 to-transparent" />

        <div className="relative z-20 max-w-5xl mx-auto w-full pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block"
          >
            <span className="text-ndc-red font-bold tracking-wider text-xs uppercase px-3 py-1.5 bg-white/10 rounded-[1px] border border-white/20 backdrop-blur-sm">
              About This Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight max-w-4xl"
          >
            Building Ghana's Most Transparent Parliamentary Record
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-surface-white/90 max-w-2xl leading-relaxed"
          >
            NDCGhana.net is a civic-tech platform that connects every Ghanaian
            citizen to their Member of Parliament — tracking development
            projects, measuring accountability, and amplifying citizen voices.
          </motion.p>
        </div>
      </section>

      {/* 2. Mission Statement */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-white relative z-30 -mt-16 rounded-[1px]-t-[40px]">
        <div className="max-w-7xl mx-auto pt-4">
          <div className="bg-surface-white rounded-[1px] border border-outline-variant/30 shadow-sm shadow-black/5 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-6"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant bg-surface-dim px-3 py-1.5 rounded-[1px] w-fit">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-navy leading-tight pb-2">
                Connecting Citizens to Leadership Through Transparency
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                We believe that informed citizens are the foundation of a strong
                democracy. NDCGhana.net was built to give every Ghanaian —
                regardless of where they live — equal access to information
                about their elected representatives and the development projects
                being undertaken in their name.
              </p>
              <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
                By aggregating parliamentary records, project updates, and MP
                performance data in one accessible platform, we empower
                constituents to hold their representatives accountable and
                engage meaningfully with the democratic process.
              </p>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex flex-col justify-center"
            >
              <ul className="space-y-3">
                {[
                  "All 275 NDC constituencies covered",
                  "Real-time project tracking & updates",
                  "Independent verification of project data",
                  "Direct citizen-to-MP suggestion channels",
                  "Open data — accessible to every Ghanaian",
                  "Parliamentary speeches and voting records",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-4 p-3 rounded-[1px] hover:bg-surface-dim/50 transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-deep-navy shrink-0" />
                    <span className="font-medium text-on-surface text-base">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Four Pillars */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-dim text-center">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-4">
              Our Principles
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              Four Pillars of Democratic Accountability
            </h2>
            <p className="text-lg text-on-surface-variant">
              Everything we build is guided by these core principles of
              democratic governance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Transparency",
                desc: "Every project, every vote, every speech — publicly documented and independently verified.",
              },
              {
                icon: Target,
                title: "Accountability",
                desc: "Performance scores hold MPs accountable to the citizens they represent.",
              },
              {
                icon: Users,
                title: "Citizen Engagement",
                desc: "Direct channels for constituents to submit suggestions and feedback to their MP.",
              },
              {
                icon: Globe,
                title: "National Coverage",
                desc: "276 constituencies across all 16 regions of Ghana, fully represented on one platform.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-surface-white p-8 rounded-[1px] shadow-sm border border-outline-variant/40 hover:shadow-sm hover:shadow-black/5 transition-all text-left flex flex-col"
              >
                <div className="w-14 h-14 rounded-[1px] bg-surface-dim/80 flex items-center justify-center text-deep-navy mb-6">
                  <pillar.icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-3">
                  {pillar.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-on-surface-variant bg-surface-dim px-3 py-1.5 rounded-[1px] w-fit mx-auto mb-4">
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              From Parliament to Your Screen
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative max-w-5xl mx-auto">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-outline-variant/50 -z-10" />

            {[
              {
                step: "01",
                title: "Data Collection",
                desc: "Our research team monitors every parliamentary sitting, constituency report, and project update across Ghana's 275 constituencies.",
              },
              {
                step: "02",
                title: "Verification",
                desc: "Field officers independently verify project data, progress, and completion on the ground before publishing to the platform.",
              },
              {
                step: "03",
                title: "Public Access",
                desc: "Verified data is published in real-time for every Ghanaian citizen to access, search, filter, and act upon.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-[1px] bg-deep-navy text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-sm shadow-deep-navy/10 relative z-10 border-4 border-surface-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-deep-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed px-4 text-sm font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team Section & CTA */}
      <section className="pt-24 pb-32 px-4 sm:px-6 lg:px-8 bg-deep-navy text-center border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-ndc-red border border-ndc-red/30 bg-ndc-red/10 px-3 py-1.5 rounded-[1px] w-fit mx-auto mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The People Behind the Platform
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Civic Tech Team",
                subtitle: "Platform Development",
                desc: "Engineers and designers committed to transparent governance technology.",
              },
              {
                title: "Data & Research",
                subtitle: "Parliamentary Monitoring",
                desc: "Dedicated researchers tracking every parliamentary sitting and constituency project.",
              },
              {
                title: "Field Officers",
                subtitle: "Constituency Verification",
                desc: "On-the-ground officers verifying project data directly in constituencies.",
              },
            ].map((team, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                className="bg-white/5 border border-white/10 rounded-[1px] p-8 backdrop-blur-sm text-left transition-all h-full"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {team.title}
                </h3>
                <p className="text-[10px] font-bold text-ndc-red uppercase tracking-wider mb-4">
                  {team.subtitle}
                </p>
                <p className="text-surface-white/80 leading-relaxed text-sm">
                  {team.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/mps"
              className="inline-flex items-center gap-2 bg-ndc-red text-white py-3.5 px-8 rounded-[1px] hover:bg-white hover:text-ndc-red transition-all shadow-sm hover:-translate-y-0.5 text-sm font-bold tracking-wide"
            >
              Explore MP Directory
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
