import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ShieldCheck, ArrowRight, Loader2, Landmark } from "lucide-react";
import { motion } from "motion/react";

export default function MPLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (!email.toLowerCase().endsWith("@parliament.gh") && !email.toLowerCase().endsWith("@ndcghana.net")) {
      setError("Unauthorized email domain. Use your official MP credentials.");
      return;
    }

    setIsLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      navigate("/mp-portal");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left Section - Branding & Context */}
      <div className="md:w-5/12 lg:w-1/2 bg-[#004B2B] relative overflow-hidden flex flex-col justify-between hidden md:flex">
        {/* Background Texture/Image Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-0"></div>
        
        <div className="relative z-10 p-10 lg:p-16">
          <Link to="/" className="flex items-center gap-2 group mb-12 inline-flex">
            <div className="w-10 h-10 rounded-[1px] bg-ndc-red flex items-center justify-center shrink-0 text-white shadow-sm">
              <Landmark className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white uppercase flex items-center">
              <span className="text-ndc-red mr-0.5">NDC</span>GHANA.NET
            </span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-[1px] text-xs font-bold tracking-wider mb-6 border border-white/20 uppercase text-emerald-100">
              <ShieldCheck className="w-4 h-4" /> Secure MP Portal
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-serif">
              Parliamentary <br/>Member Access
            </h1>
            <p className="text-emerald-50 text-lg max-w-md leading-relaxed border-l-2 border-ndc-red pl-4">
              Access your official dashboard to manage constituency projects, update your profile, monitor attendance records, and review policy documentation.
            </p>
          </motion.div>
        </div>

        <div className="relative z-10 p-10 lg:p-16 border-t border-white/10">
          <div className="flex items-center justify-between text-emerald-200 text-sm font-medium">
            <span>© 2026 NDCGhana.net</span>
            <Link to="/contact" className="hover:text-white transition-colors">Need IT Support?</Link>
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-10 lg:p-16 relative bg-white">
        {/* Mobile Logo */}
        <Link to="/" className="flex md:hidden items-center gap-2 mb-12 absolute top-6 left-6">
            <div className="w-8 h-8 rounded-[1px] bg-ndc-red flex items-center justify-center shrink-0 text-white">
              <Landmark className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900 uppercase flex items-center">
              <span className="text-ndc-red mr-0.5">NDC</span>GHANA.NET
            </span>
        </Link>

        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif tracking-tight">MP Sign In</h2>
            <p className="text-gray-500 font-medium tracking-tight">Enter your official parliamentary credentials.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: 'auto' }} 
                className="bg-red-50 border border-red-200 text-[#CE1126] px-4 py-3 rounded-[1px] text-sm font-medium flex items-start gap-2"
              >
                <div className="mt-0.5">⚠️</div>
                <p>{error}</p>
              </motion.div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700 tracking-tight flex justify-between">
                Official Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mp.name@parliament.gh"
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 placeholder:text-gray-400 font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm font-bold text-gray-700 tracking-tight">
                <label>Password</label>
                <Link to="/mp-login/forgot-password" className="text-[#006B3C] hover:text-[#004B2B] text-xs transition-colors">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your secure password"
                  disabled={isLoading}
                  className="w-full px-4 py-3 pr-12 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 placeholder:text-gray-400 font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-3 top-1/2 -translate-y-[1px] -mt-[11px] text-gray-400 hover:text-gray-600 transition-colors pt-0.5"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                disabled={isLoading}
                className="w-4 h-4 text-[#006B3C] border-gray-300 rounded-[1px] focus:ring-[#006B3C]"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm font-medium text-gray-600 cursor-pointer">
                Remember my device
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 bg-[#006B3C] hover:bg-[#004B2B] text-white py-3.5 px-4 rounded-[1px] font-bold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Authenticating...
                </>
              ) : (
                <>
                  Access Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-sm font-medium text-gray-500 text-center">
              Are you an administrator? <Link to="/admin" className="text-[#006B3C] hover:text-[#004B2B] transition-colors font-bold">Access Admin Portal</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
