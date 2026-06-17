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
      </Routes>
    </BrowserRouter>
  );
}
