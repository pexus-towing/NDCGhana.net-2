import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Save, 
  Send, 
  ArrowLeft, 
  PhoneCall,
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Twitter,
  Instagram
} from "lucide-react";

export default function EditContact() {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    publicEmail: "contact@ablakwa.com",
    officialEmail: "s.ablakwa@parliament.gh",
    phone: "+233 24 123 4567",
    officeAddress: "Parliament House, Job 600, Office 412, Accra",
    constituencyAddress: "NDC Constituency Office, Mepe, North Tongu",
    website: "https://www.ablakwa.com",
    facebook: "https://facebook.com/AblakwaS",
    twitter: "https://twitter.com/S_OkudzetoAblak",
    instagram: "https://instagram.com/s_okudzeto_ablakwa"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveDraft = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Draft saved successfully.");
    }, 800);
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      navigate("/mp-portal/profile");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <PhoneCall className="w-6 h-6 text-[#006B3C]" /> Contact Information
          </h1>
          <p className="text-gray-500 mt-1 text-sm font-medium">
            Update your public contact details, office locations, and social media.
          </p>
        </div>
        <Link 
          to="/mp-portal/profile"
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Profile
        </Link>
      </div>

      <form onSubmit={handlePublish} className="bg-white border border-gray-200 shadow-sm rounded-[1px] p-6 lg:p-8 space-y-10">
        
        {/* Primary Contact Section */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
            <Mail className="w-5 h-5 text-gray-400" /> Primary Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700">Official Parliament Email</label>
              <input 
                type="email" 
                name="officialEmail"
                disabled
                value={formData.officialEmail}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-[1px] text-gray-500 font-medium cursor-not-allowed"
              />
              <p className="text-xs text-gray-400 mt-1">Official email cannot be changed here.</p>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700">Public Contact Email</label>
              <input 
                type="email" 
                name="publicEmail"
                value={formData.publicEmail}
                onChange={handleChange}
                placeholder="e.g. hello@mp.com"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
              />
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                <Phone className="w-4 h-4 text-gray-400" /> Office Phone Number
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +233 24 000 0000"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
              />
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gray-400" /> Office Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700">Parliament Office</label>
              <textarea 
                name="officeAddress"
                rows={3}
                value={formData.officeAddress}
                onChange={handleChange}
                placeholder="e.g. Job 600, Accra"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium resize-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700">Constituency Office</label>
              <textarea 
                name="constituencyAddress"
                rows={3}
                value={formData.constituencyAddress}
                onChange={handleChange}
                placeholder="e.g. Main Street, Hometown"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium resize-none"
              />
            </div>
          </div>
        </section>

        {/* Social Media & Web */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2 flex items-center gap-2">
            <Globe className="w-5 h-5 text-gray-400" /> Social Media & Web
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-bold text-gray-700">Personal Website</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Globe className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="url" 
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full pl-10 px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700">Facebook URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Facebook className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="url" 
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  placeholder="https://facebook.com/..."
                  className="w-full pl-10 px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700">Twitter / X URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Twitter className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="url" 
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  placeholder="https://twitter.com/..."
                  className="w-full pl-10 px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700">Instagram URL</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Instagram className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="url" 
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="https://instagram.com/..."
                  className="w-full pl-10 px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col-reverse sm:flex-row items-center justify-end gap-4">
          <button 
            type="button" 
            onClick={handleSaveDraft}
            disabled={isSaving}
            className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-[1px] font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Save className="w-5 h-5" /> Save Draft
          </button>
          
          <button 
            type="submit" 
            disabled={isSaving}
            className="w-full sm:w-auto px-6 py-3 bg-[#006B3C] text-white rounded-[1px] font-bold hover:bg-[#004B2B] transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <Send className="w-5 h-5" /> Publish Changes
          </button>
        </div>

      </form>
    </div>
  );
}
