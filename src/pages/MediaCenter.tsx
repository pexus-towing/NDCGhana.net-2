import { MediaHero } from "../components/Media/MediaHero";
import { FeaturedStory } from "../components/Media/FeaturedStory";
import { LatestNews } from "../components/Media/LatestNews";
import { ParliamentaryNews } from "../components/Media/ParliamentaryNews";
import { ProjectUpdates } from "../components/Media/ProjectUpdates";
import { VideoCenter } from "../components/Media/VideoCenter";
import { PodcastHub } from "../components/Media/PodcastHub";
import { PressReleases } from "../components/Media/PressReleases";
import { ReportsLibrary } from "../components/Media/ReportsLibrary";
import { PhotoGallery } from "../components/Media/PhotoGallery";
import { MediaCoverage } from "../components/Media/MediaCoverage";
import { CommunityStories } from "../components/Media/CommunityStories";
import { LiveEvents } from "../components/Media/LiveEvents";
import { NewsletterSignup } from "../components/Media/NewsletterSignup";
import { MediaSearch } from "../components/Media/MediaSearch";
import { MediaCTA } from "../components/Media/CallToAction";

export default function MediaCenter() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MediaHero />
      <FeaturedStory />
      <LatestNews />
      <ParliamentaryNews />
      <ProjectUpdates />
      <VideoCenter />
      <PodcastHub />
      <PressReleases />
      <ReportsLibrary />
      <PhotoGallery />
      <MediaCoverage />
      <CommunityStories />
      <LiveEvents />
      <MediaSearch />
      <NewsletterSignup />
      <MediaCTA />
    </div>
  );
}
