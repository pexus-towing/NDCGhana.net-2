import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  FolderKanban, 
  Save, 
  Upload, 
  ImageIcon, 
  FileText,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Trash2
} from "lucide-react";
import { motion } from "motion/react";

export default function EditProject() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
    budget: "",
    startDate: "",
    endDate: "",
  });

  // Mock fetching project data
  useEffect(() => {
    const fetchProject = () => {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setFormData({
          title: "Mepe ICT Center Construction",
          category: "Education",
          description: "Construction of a modern ICT center to serve over 5,000 students in the Mepe traditional area. The facility includes a 50-seater computer lab, a server room, and a library.",
          location: "Mepe, North Tongu",
          budget: "500000",
          startDate: "2023-01-15",
          endDate: "2024-06-30",
        });
        setIsLoading(false);
      }, 600);
    };
    
    if (id) {
      fetchProject();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSaveDraft = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Changes saved to draft successfully.");
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep !== 3) {
      handleNext();
      return;
    }
    
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      navigate("/mp-portal/projects");
    }, 1200);
  };

  const steps = [
    { id: 1, name: "Basic Info" },
    { id: 2, name: "Details & Timeline" },
    { id: 3, name: "Media & Documents" }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 text-[#006B3C]">
        <div className="text-xl font-bold animate-pulse">Loading project details...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
            <FolderKanban className="w-6 h-6 text-[#006B3C]" /> Edit Project
          </h1>
          <p className="text-gray-500 mt-1 text-sm font-medium">
            Update project details, timelines, budget, and media.
          </p>
        </div>
        <Link 
          to="/mp-portal/projects"
          className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-[1px] text-sm font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
        >
          <ArrowLeft className="w-4 h-4" /> Cancel Edit
        </Link>
      </div>

      <div className="bg-white border border-gray-200 shadow-sm rounded-[1px] overflow-hidden">
        {/* Progress Steps */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between max-w-2xl mx-auto relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 z-0"></div>
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#006B3C] z-0 transition-all duration-300"
              style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
            ></div>
            
            {steps.map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center gap-2 bg-gray-50 px-2">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step.id < currentStep ? 'bg-[#006B3C] text-white' : 
                    step.id === currentStep ? 'bg-[#006B3C] text-white ring-4 ring-emerald-100' : 
                    'bg-white border-2 border-gray-300 text-gray-400'
                  }`}
                >
                  {step.id < currentStep ? <CheckCircle2 className="w-5 h-5" /> : step.id}
                </div>
                <span className={`text-xs font-bold ${step.id <= currentStep ? 'text-gray-900' : 'text-gray-400'}`}>
                  {step.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 lg:p-8">
          
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">Basic Information</h2>
              
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Project Title <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Category <span className="text-red-500">*</span></label>
                <select 
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                >
                  <option value="" disabled>Select a category</option>
                  <option value="Education">Education</option>
                  <option value="Health">Health</option>
                  <option value="Infrastructure">Infrastructure</option>
                  <option value="Water & Sanitation">Water & Sanitation</option>
                  <option value="Economy">Economy</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Description <span className="text-red-500">*</span></label>
                <textarea 
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium resize-y"
                />
              </div>
            </div>
          )}

          {/* Step 2: Details & Timeline */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">Details & Timeline</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-bold text-gray-700">Location <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                  />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-bold text-gray-700">Budget (GH₵) <span className="text-red-500">*</span></label>
                  <input 
                    type="number" 
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700">Start Date <span className="text-red-500">*</span></label>
                  <input 
                    type="date" 
                    name="startDate"
                    required
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-gray-700">Estimated End Date</label>
                  <input 
                    type="date" 
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Media & Documents */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-lg font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">Media & Documents</h2>
              
              {/* Images */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5" /> Project Images
                  </label>
                  <span className="text-xs text-gray-500">Max 5 images</span>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-[1px] p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3 group-hover:text-[#006B3C] transition-colors" />
                  <p className="text-sm font-medium text-gray-900 mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-500">JPG, PNG, WebP up to 5MB</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                  <div className="relative aspect-video rounded-[1px] overflow-hidden group border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1541888081622-4a00ccdc6570?q=80&w=400&auto=format&fit=crop" alt="Project site" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button type="button" className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                    <FileText className="w-5 h-5" /> Supporting Documents
                  </label>
                  <span className="text-xs text-gray-500">Optional</span>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-[1px] p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3 group-hover:text-blue-600 transition-colors" />
                  <p className="text-sm font-medium text-gray-900 mb-1">Upload reports, contracts, or specs</p>
                  <p className="text-xs text-gray-500">PDF, DOCX up to 10MB</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <button 
              type="button" 
              onClick={handleSaveDraft}
              disabled={isSaving}
              className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-[1px] font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Save className="w-5 h-5" /> Save Changes
            </button>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {currentStep > 1 && (
                <button 
                  type="button" 
                  onClick={handlePrev}
                  className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-[1px] font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" /> Back
                </button>
              )}
              
              <button 
                type="submit" 
                disabled={isSaving}
                className="w-full sm:w-auto px-6 py-3 bg-[#006B3C] text-white rounded-[1px] font-bold hover:bg-[#004B2B] transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === 3 ? "Publish Updates" : "Next Step"} 
                {currentStep !== 3 && <ChevronRight className="w-5 h-5" />}
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
