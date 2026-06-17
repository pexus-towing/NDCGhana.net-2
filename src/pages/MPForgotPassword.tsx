import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, Loader2, Landmark, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function MPForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your official email.");
      return;
    }

    if (!email.toLowerCase().endsWith("@parliament.gh") && !email.toLowerCase().endsWith("@ndcghana.net")) {
      setError("Unauthorized email domain. Use your official MP credentials.");
      return;
    }

    setIsLoading(true);

    // Simulate sending reset link
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
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
              <ShieldCheck className="w-4 h-4" /> Secure Recovery
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-serif">
              Account Recovery <br/>Portal
            </h1>
            <p className="text-emerald-50 text-lg max-w-md leading-relaxed border-l-2 border-ndc-red pl-4">
              Enter your official parliamentary email address to receive password reset instructions securely.
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

      {/* Right Section - Reset Form */}
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
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif tracking-tight">Recovery Link Sent</h2>
              <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                We've sent a secure password reset link to <span className="font-bold text-gray-900">{email}</span>. Please check your inbox and spam folder.
              </p>
              <Link 
                to="/mp-login" 
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3.5 px-4 rounded-[1px] font-bold tracking-wide transition-colors flex items-center justify-center gap-2 group border border-gray-300"
              >
                Return to MP Login
              </Link>
            </motion.div>
          ) : (
            <>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif tracking-tight">Reset Password</h2>
                <p className="text-gray-500 font-medium tracking-tight">Enter your official email to recover your account.</p>
              </div>

              <form onSubmit={handleReset} className="space-y-5">
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

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-4 bg-[#006B3C] hover:bg-[#004B2B] text-white py-3.5 px-4 rounded-[1px] font-bold tracking-wide transition-all shadow-sm flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Send Reset Link <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <Link to="/mp-login" className="text-[#006B3C] hover:text-[#004B2B] transition-colors font-medium text-sm flex items-center justify-center gap-2">
                  <ArrowRight className="w-4 h-4 rotate-180" /> Back to MP Login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
