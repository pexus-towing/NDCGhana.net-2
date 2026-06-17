import { Landmark } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-deep-navy text-surface-white border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-[4px] bg-ndc-red flex items-center justify-center shrink-0 text-white">
                <Landmark className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white uppercase">
                <span className="text-ndc-red">NDC</span>GHANA.NET
              </span>
            </Link>
            <p className="text-sm text-surface-white/80 leading-relaxed mb-4">
              A premium civic-tech platform built for the Parliament of Ghana.
              Connecting citizens to leadership through transparency and
              actionable data.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/mps"
                  className="text-surface-white/80 hover:text-white transition-colors"
                >
                  MP Directory
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-surface-white/80 hover:text-white transition-colors"
                >
                  Project Tracker
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-surface-white/80 hover:text-white transition-colors"
                >
                  Accountability Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/community"
                  className="text-surface-white/80 hover:text-white transition-colors"
                >
                  Community Statistics
                </Link>
              </li>
              <li>
                <Link
                  to="/diaspora"
                  className="text-surface-white/80 hover:text-white transition-colors"
                >
                  Diaspora
                </Link>
              </li>
              <li>
                <Link
                  to="/media"
                  className="text-surface-white/80 hover:text-white transition-colors"
                >
                  Media & Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/resources/records"
                  className="text-surface-white/80 hover:text-white transition-colors"
                >
                  Parliamentary Records
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/reports"
                  className="text-surface-white/80 hover:text-white transition-colors"
                >
                  Constituency Reports
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/budget"
                  className="text-surface-white/80 hover:text-white transition-colors"
                >
                  National Budget
                </Link>
              </li>
              <li>
                <Link
                  to="/resources/guides"
                  className="text-surface-white/80 hover:text-white transition-colors"
                >
                  Citizen Guide
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-surface-white/80">
              <li className="flex items-start gap-2">
                <span>
                  Parliament House,
                  <br />
                  Osu, Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-2">info@ndcghana.net</li>
              <li className="flex items-center gap-2">+233 30 276 0000</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-surface-white/60">
          <p>© 2025 NDCGHANA.net — A Replit Civic-Tech Platform</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
