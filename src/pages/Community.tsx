import { motion } from "motion/react";
import { HeroKPI } from "../components/Community/HeroKPI";
import { GrowthDashboard } from "../components/Community/GrowthDashboard";
import { GeographicDistribution } from "../components/Community/GeographicDistribution";
import { DiasporaDashboard } from "../components/Community/DiasporaDashboard";
import { EngagementAnalytics } from "../components/Community/EngagementAnalytics";
import { DemographicInsights } from "../components/Community/DemographicInsights";
import { ConstituencyRankings } from "../components/Community/ConstituencyRankings";
import { ImpactMetrics } from "../components/Community/ImpactMetrics";
import { CommunityEvents } from "../components/Community/CommunityEvents";
import { SuccessStories } from "../components/Community/SuccessStories";
import { ActivityFeed } from "../components/Community/ActivityFeed";
import { ReportsCenter } from "../components/Community/ReportsCenter";
import { CTABanner } from "../components/Community/CTABanner";

export default function Community() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-surface w-full"
    >
      <HeroKPI />
      <GrowthDashboard />
      <GeographicDistribution />
      <DiasporaDashboard />
      <EngagementAnalytics />
      <DemographicInsights />
      <ConstituencyRankings />
      <ImpactMetrics />
      <CommunityEvents />
      <SuccessStories />
      <ActivityFeed />
      <ReportsCenter />
      <CTABanner />
    </motion.div>
  );
}
