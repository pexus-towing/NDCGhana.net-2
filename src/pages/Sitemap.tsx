import { SitemapHero } from "../components/Sitemap/SitemapHero";
import { QuickAccess } from "../components/Sitemap/QuickAccess";
import { ArchitectureMap } from "../components/Sitemap/ArchitectureMap";
import { PopularPages } from "../components/Sitemap/PopularPages";
import { DiscoveryCenter } from "../components/Sitemap/DiscoveryCenter";
import { PlatformStats } from "../components/Sitemap/PlatformStats";
import { SupportNav } from "../components/Sitemap/SupportNav";
import { MegaFooterDirectory } from "../components/Sitemap/MegaFooterDirectory";

export default function Sitemap() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SitemapHero />
      <QuickAccess />
      <ArchitectureMap />
      <PopularPages />
      <DiscoveryCenter />
      <PlatformStats />
      <SupportNav />
      <MegaFooterDirectory />
    </div>
  );
}
