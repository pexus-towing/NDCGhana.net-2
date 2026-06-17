import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Save, 
  Send, 
  ArrowLeft, 
  BookOpen,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  AlignLeft,
  Eye,
  Edit
} from "lucide-react";

export default function EditBiography() {
  const navigate = useNavigate();
  const [isSaving, setIsSaving] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  
  const [formData, setFormData] = useState({
    careerHistory: "Samuel Okudzeto Ablakwa is a Ghanaian politician who has served in various capacities. Prior to entering Parliament, he was...",
    politicalJourney: "Joined Parliament representing the North Tongu constituency in 2013. Has served on various committees and championed numerous policies.",
    achievements: "• Championed education reforms\n• Brought significant infrastructure development to North Tongu\n• Consistently rated among top performing MPs",
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  // Mock Toolbar Component
  const Toolbar = () => (
    <div className="flex items-center gap-1 p-2 border-b border-gray-200 bg-gray-50 flex-wrap">
      <button type="button" className="p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-[1px] transition-colors" title="Bold"><Bold className="w-4 h-4" /></button>
      <button type="button" className="p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-[1px] transition-colors" title="Italic"><Italic className="w-4 h-4" /></button>
      <button type="button" className="p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-[1px] transition-colors" title="Link"><LinkIcon className="w-4 h-4" /></button>
      <div className="w-px h-4 bg-gray-300 mx-1 hidden sm:block"></div>
      <button type="button" className="p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-[1px] transition-colors" title="Bullet List"><List className="w-4 h-4" /></button>
      <button type="button" className="p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 rounded-[1px] transition-colors" title="Align Left"><AlignLeft className="w-4 h-4" /></button>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#006B3C]" /> Edit Biography
          </h1>
          <p className="text-gray-500 mt-1 text-sm font-medium">
            Update your career history, political journey, and achievements.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
            <button 
                onClick={() => setIsPreview(!isPreview)}
                className="px-4 py-2 bg-gray-100 border border-gray-200 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
            >
                {isPreview ? <><Edit className="w-4 h-4" /> <span className="hidden sm:inline">Edit Mode</span></> : <><Eye className="w-4 h-4" /> <span className="hidden sm:inline">Preview Mode</span></>}
            </button>
            <Link 
              to="/mp-portal/profile"
              className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
            >
              <ArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Back</span>
            </Link>
        </div>
      </div>

      <form onSubmit={handlePublish} className="bg-white border border-gray-200 shadow-sm rounded-[1px] p-6 lg:p-8">
        
        {isPreview ? (
            <div className="space-y-8 prose prose-emerald max-w-none">
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 tracking-tight">Career History</h2>
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{formData.careerHistory}</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 tracking-tight">Political Journey</h2>
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{formData.politicalJourney}</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 tracking-tight">Key Achievements</h2>
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{formData.achievements}</p>
                </div>
            </div>
        ) : (
            <div className="space-y-8">
                {/* Career History Section */}
                <div className="space-y-2">
                    <label className="text-base font-bold text-gray-900">Career History</label>
                    <p className="text-sm text-gray-500 pb-2">Describe your professional background before entering or alongside politics.</p>
                    <div className="border border-gray-300 rounded-[1px] overflow-hidden focus-within:border-[#006B3C] focus-within:ring-1 focus-within:ring-[#006B3C] transition-all">
                        <Toolbar />
                        <textarea 
                            name="careerHistory"
                            rows={6}
                            value={formData.careerHistory}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white focus:outline-none text-gray-900 font-medium resize-y"
                            placeholder="Enter your career history..."
                        />
                    </div>
                </div>

                {/* Political Journey Section */}
                <div className="space-y-2">
                    <label className="text-base font-bold text-gray-900">Political Journey</label>
                    <p className="text-sm text-gray-500 pb-2">Outline your political career progression and major positions held.</p>
                    <div className="border border-gray-300 rounded-[1px] overflow-hidden focus-within:border-[#006B3C] focus-within:ring-1 focus-within:ring-[#006B3C] transition-all">
                        <Toolbar />
                        <textarea 
                            name="politicalJourney"
                            rows={6}
                            value={formData.politicalJourney}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white focus:outline-none text-gray-900 font-medium resize-y"
                            placeholder="Enter your political journey..."
                        />
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="space-y-2">
                    <label className="text-base font-bold text-gray-900">Key Achievements</label>
                    <p className="text-sm text-gray-500 pb-2">Highlight major policy, development, or personal milestones.</p>
                    <div className="border border-gray-300 rounded-[1px] overflow-hidden focus-within:border-[#006B3C] focus-within:ring-1 focus-within:ring-[#006B3C] transition-all">
                        <Toolbar />
                        <textarea 
                            name="achievements"
                            rows={6}
                            value={formData.achievements}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white focus:outline-none text-gray-900 font-medium resize-y"
                            placeholder="Enter your key achievements..."
                        />
                    </div>
                </div>
            </div>
        )}

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
            <Send className="w-5 h-5" /> Publish Biography
          </button>
        </div>

      </form>
    </div>
  );
}
