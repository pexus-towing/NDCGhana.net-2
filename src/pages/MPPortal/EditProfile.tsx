import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Camera, 
  Save, 
  Send, 
  ArrowLeft, 
  UserCircle 
} from "lucide-react";

export default function EditProfile() {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "Hon. Samuel Okudzeto Ablakwa",
    constituency: "North Tongu",
    region: "Volta Region",
    gender: "Male",
    dob: "1980-08-11",
    occupation: "Politician",
    education: "University of Ghana",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
            <UserCircle className="w-6 h-6 text-[#006B3C]" /> Edit Personal Information
          </h1>
          <p className="text-gray-500 mt-1 text-sm font-medium">
            Update your biographical details and official portrait.
          </p>
        </div>
        <Link 
          to="/mp-portal/profile"
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Profile
        </Link>
      </div>

      <form onSubmit={handlePublish} className="bg-white border border-gray-200 shadow-sm rounded-[1px] p-6 lg:p-8">
        
        {/* Photo Upload */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10 pb-10 border-b border-gray-100">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-50 bg-gray-100 relative group shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <Camera className="w-6 h-6 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-1">Official Portrait</h3>
            <p className="text-sm text-gray-500 mb-4 max-w-sm">
              Upload a clear, professional portrait. Recommended size is 500x500px or larger.
            </p>
            <div className="flex items-center gap-3">
              <button type="button" className="px-4 py-2 bg-white border border-gray-300 rounded-[1px] text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                Upload New Image
              </button>
              <button type="button" className="px-4 py-2 text-sm font-bold text-red-600 hover:text-red-800 transition-colors">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="space-y-1.5 md:col-span-2">
            <label className="text-sm font-bold text-gray-700">Full Name</label>
            <input 
              type="text" 
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-gray-700">Constituency</label>
            <input 
              type="text" 
              name="constituency"
              required
              value={formData.constituency}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-gray-700">Region</label>
            <select 
              name="region"
              required
              value={formData.region}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
            >
              <option value="Ashanti Region">Ashanti Region</option>
              <option value="Greater Accra Region">Greater Accra Region</option>
              <option value="Volta Region">Volta Region</option>
              <option value="Central Region">Central Region</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-gray-700">Gender</label>
            <select 
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-gray-700">Date of Birth</label>
            <input 
              type="date" 
              name="dob"
              required
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-gray-700">Occupation</label>
            <input 
              type="text" 
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              placeholder="e.g. Entrepreneur, Lawyer"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-gray-700">Education</label>
            <input 
              type="text" 
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="e.g. BSc Economics, UG"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
            />
          </div>
        </div>

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
