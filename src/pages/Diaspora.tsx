import { motion } from "motion/react";
import { DiasporaHero } from "../components/Diaspora/DiasporaHero";
import { GlobalNetwork } from "../components/Diaspora/GlobalNetwork";
import { ConstituencyConnect } from "../components/Diaspora/ConstituencyConnect";
import { ImpactDashboard } from "../components/Diaspora/ImpactDashboard";
import { ProjectShowcase } from "../components/Diaspora/ProjectShowcase";
import { InvestmentOpportunities } from "../components/Diaspora/InvestmentOpportunities";
import { MPEngagement } from "../components/Diaspora/MPEngagement";
import { CommunityGroups } from "../components/Diaspora/CommunityGroups";
import { EventCenter } from "../components/Diaspora/EventCenter";
import { SuccessStoriesSection } from "../components/Diaspora/SuccessStoriesSection";
import { GlobalRankings } from "../components/Diaspora/GlobalRankings";
import { NewsCenter } from "../components/Diaspora/NewsCenter";
import { ResourceCenter } from "../components/Diaspora/ResourceCenter";
import { RecognitionProgram } from "../components/Diaspora/RecognitionProgram";
import { DiasporaCTABanner } from "../components/Diaspora/DiasporaCTABanner";

export default function Diaspora() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-surface w-full min-h-screen"
    >
      <DiasporaHero />
      <GlobalNetwork />
      <ConstituencyConnect />
      <ImpactDashboard />
      <ProjectShowcase />
      <InvestmentOpportunities />
      <MPEngagement />
      <CommunityGroups />
      <EventCenter />
      <SuccessStoriesSection />
      <GlobalRankings />
      <NewsCenter />
      <ResourceCenter />
      <RecognitionProgram />
      <DiasporaCTABanner />
    </motion.div>
  );
}
