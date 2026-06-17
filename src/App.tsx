import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import MPDirectory from "./pages/MPDirectory";
import MPProfile from "./pages/MPProfile";
import ProjectTracker from "./pages/ProjectTracker";
import Dashboard from "./pages/Dashboard";
import MediaCenter from "./pages/MediaCenter";
import Admin from "./pages/Admin";
import Diaspora from "./pages/Diaspora";
import Sitemap from "./pages/Sitemap";
import Community from "./pages/Community";
import ComingSoon from "./pages/ComingSoon";
import MPLogin from "./pages/MPLogin";

import MPForgotPassword from "./pages/MPForgotPassword";
import MPPortalLayout from "./pages/MPPortalLayout";
import DashboardHome from "./pages/MPPortal/DashboardHome";
import ProfilePreview from "./pages/MPPortal/ProfilePreview";
import EditProfile from "./pages/MPPortal/EditProfile";
import EditBiography from "./pages/MPPortal/EditBiography";
import EditCommittees from "./pages/MPPortal/EditCommittees";
import EditContact from "./pages/MPPortal/EditContact";
import MyProjects from "./pages/MPPortal/MyProjects";
import AddProject from "./pages/MPPortal/AddProject";
import EditProject from "./pages/MPPortal/EditProject";
import SuggestionsInbox from "./pages/MPPortal/SuggestionsInbox";
import SuggestionDetail from "./pages/MPPortal/SuggestionDetail";
import ArchivedSuggestions from "./pages/MPPortal/ArchivedSuggestions";
import ConstituencyMembers from "./pages/MPPortal/ConstituencyMembers";
import MemberProfileView from "./pages/MPPortal/MemberProfileView";
import MediaLibrary from "./pages/MPPortal/MediaLibrary";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mps" element={<MPDirectory />} />
          <Route path="mps/:id" element={<MPProfile />} />
          <Route path="projects" element={<ProjectTracker />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="community" element={<Community />} />
          <Route path="media" element={<MediaCenter />} />
          <Route path="diaspora" element={<Diaspora />} />
          <Route path="sitemap" element={<Sitemap />} />
          
          <Route path="resources/*" element={<ComingSoon />} />
          <Route path="events/*" element={<ComingSoon />} />
          <Route path="contact" element={<ComingSoon />} />
          <Route path="mps/*" element={<ComingSoon />} />
          <Route path="projects/*" element={<ComingSoon />} />
          <Route path="dashboard/*" element={<ComingSoon />} />
          <Route path="community/*" element={<ComingSoon />} />
          <Route path="diaspora/*" element={<ComingSoon />} />
          <Route path="media/*" element={<ComingSoon />} />

          {/* Catch all other unknown routes mapped to layout */}
          <Route path="*" element={<ComingSoon />} />
        </Route>
        
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/mp-login" element={<MPLogin />} />
        <Route path="/mp-login/forgot-password" element={<MPForgotPassword />} />
        
        <Route path="/mp-portal" element={<MPPortalLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<ProfilePreview />} />
          <Route path="profile/edit" element={<EditProfile />} />
          <Route path="profile/biography" element={<EditBiography />} />
          <Route path="profile/committees" element={<EditCommittees />} />
          <Route path="profile/contact" element={<EditContact />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="projects/new" element={<AddProject />} />
          <Route path="projects/:id/edit" element={<EditProject />} />
          <Route path="suggestions" element={<SuggestionsInbox />} />
          <Route path="suggestions/archived" element={<ArchivedSuggestions />} />
          <Route path="suggestions/:id" element={<SuggestionDetail />} />
          <Route path="members" element={<ConstituencyMembers />} />
          <Route path="members/:id" element={<MemberProfileView />} />
          <Route path="media" element={<MediaLibrary />} />
          <Route path="*" element={<ComingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
