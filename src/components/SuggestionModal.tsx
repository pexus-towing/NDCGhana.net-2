import {
  X,
  ShieldCheck,
  UploadCloud,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import React, { useState } from "react";

export const ALL_MPS = [
  {
    name: "Hon. Rockson-Nelson Dafeamekpor",
    constituency: "South Dayi",
    region: "Volta",
  },
  {
    name: "Hon. Fiifi Ato Forson",
    constituency: "Ajumako Enyan Essiam",
    region: "Central",
  },
  {
    name: "Hon. Abena Osei-Asante",
    constituency: "Accra Central",
    region: "Greater Accra",
  },
  {
    name: "Hon. Kwame Boateng",
    constituency: "Tamale North",
    region: "Northern",
  },
  {
    name: "Hon. Zanetor Agyeman-Rawlings",
    constituency: "Klottey-Korle",
    region: "Greater Accra",
  },
  { name: "Hon. Ibrahim Muntaka", constituency: "Asawase", region: "Ashanti" },
  {
    name: "Hon. Samuel Okudzeto Ablakwa",
    constituency: "North Tongu",
    region: "Volta",
  },
  {
    name: "Hon. Emmanuel Armah-Kofi Buah",
    constituency: "Ellembelle",
    region: "Western",
  },
  {
    name: "Hon. Haruna Iddrisu",
    constituency: "Tamale South",
    region: "Northern",
  },
];

interface SuggestionModalProps {
  onClose: () => void;
  prepopulatedMp?: string;
}

export default function SuggestionModal({
  onClose,
  prepopulatedMp,
}: SuggestionModalProps) {
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Normalize prepopulated MP name if it doesn't match perfectly
  const initialMp = prepopulatedMp
    ? ALL_MPS.find(
        (m) =>
          m.name.toLowerCase().includes(prepopulatedMp.toLowerCase()) ||
          prepopulatedMp.toLowerCase().includes(m.name.toLowerCase()),
      )?.name || prepopulatedMp
    : "";

  const [selectedMpName, setSelectedMpName] = useState(initialMp);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMpName) {
      alert("Please select a target Member of Parliament.");
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const selectedMpObj = ALL_MPS.find((m) => m.name === selectedMpName);

  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-surface-white rounded-[16px] shadow-sm w-full max-w-[550px] relative flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-outline hover:text-on-surface transition-colors z-10 p-2 rounded-[1px] hover:bg-surface"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <>
            <div className="px-6 pt-6 pb-4 border-b border-outline-variant/30 shrink-0 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-blue-50 rounded-[1px] opacity-50 pointer-events-none"></div>
              <div className="flex items-center space-x-2 text-ndc-gold text-sm font-semibold mb-2 uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4" />
                <span>Secure & Official</span>
              </div>
              <h2 className="text-[28px] leading-tight font-bold text-on-surface mb-1">
                Submit Suggestion to MP
              </h2>
              <p className="text-sm text-on-surface-variant">
                Direct your feedback privately and securely to your elected
                representative.
              </p>
            </div>

            <div className="px-6 py-4 overflow-y-auto scrollbar-hide grow">
              <form
                id="suggestion-form"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="bg-amber-50 border border-amber-200 rounded-[1px] p-3.5 space-y-3">
                  <div>
                    <label
                      className="block text-xs font-bold text-deep-navy uppercase tracking-wider mb-1"
                      htmlFor="mpSelect"
                    >
                      Target Member of Parliament{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      id="mpSelect"
                      value={selectedMpName}
                      onChange={(e) => setSelectedMpName(e.target.value)}
                      disabled={!!prepopulatedMp}
                      className="w-full rounded-[1px] border-outline-variant/60 shadow-sm focus:border-royal-blue focus:ring focus:ring-royal-blue/20 transition-colors px-3 py-2 text-sm text-on-surface bg-surface-white disabled:opacity-85 disabled:bg-surface"
                    >
                      <option value="" disabled>
                        Select MP to receive your suggestion
                      </option>
                      {ALL_MPS.map((mp) => (
                        <option key={mp.name} value={mp.name}>
                          {mp.name} ({mp.constituency})
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedMpObj ? (
                    <div className="text-xs text-[#006b3a] font-semibold flex flex-col gap-0.5">
                      <span>✓ Selected MP: {selectedMpObj.name}</span>
                      <span>
                        ✓ Office: {selectedMpObj.constituency} Constituency,{" "}
                        {selectedMpObj.region} Region
                      </span>
                    </div>
                  ) : (
                    <div className="text-xs text-amber-800 font-semibold">
                      ⚠ Please select or confirm an MP to direct your
                      submission.
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-on-surface mb-1"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="fullName"
                      className="w-full rounded-[1px] border-outline-variant/60 shadow-sm focus:border-royal-blue focus:ring focus:ring-royal-blue/20 transition-colors px-3 py-2 text-sm text-on-surface bg-surface-white"
                      defaultValue="Kwasi Mensah"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-on-surface mb-1"
                      htmlFor="phoneNumber"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      placeholder="024 XXX XXXX"
                      className="w-full rounded-[1px] border-outline-variant/60 shadow-sm focus:border-royal-blue focus:ring focus:ring-royal-blue/20 transition-colors px-3 py-2 text-sm text-on-surface bg-surface-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-on-surface mb-1"
                    htmlFor="constituency"
                  >
                    Your Home Constituency
                  </label>
                  <select
                    defaultValue=""
                    required
                    id="constituency"
                    className="w-full rounded-[1px] border-outline-variant/60 shadow-sm focus:border-royal-blue focus:ring focus:ring-royal-blue/20 transition-colors px-3 py-2 text-sm text-on-surface bg-surface-white"
                  >
                    <option value="" disabled>
                      Select your constituency
                    </option>
                    <option value="keta">Keta</option>
                    <option value="south-dayi">South Dayi</option>
                    <option value="wa-central">Wa Central</option>
                    <option value="accra-central">Accra Central</option>
                    <option value="tamale-north">Tamale North</option>
                    <option value="asawase">Asawase</option>
                    <option value="north-tongu">North Tongu</option>
                    <option value="ellembelle">Ellembelle</option>
                    <option value="tamale-south">Tamale South</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-on-surface mb-1"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <select
                    defaultValue=""
                    required
                    id="category"
                    className="w-full rounded-[1px] border-outline-variant/60 shadow-sm focus:border-royal-blue focus:ring focus:ring-royal-blue/20 transition-colors px-3 py-2 text-sm text-on-surface bg-surface-white"
                  >
                    <option value="" disabled>
                      Select topic category
                    </option>
                    <option value="education">Education</option>
                    <option value="health">Healthcare</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="economy">Economy</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-on-surface mb-1"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    id="subject"
                    maxLength={120}
                    placeholder="Brief title of your suggestion"
                    className="w-full rounded-[1px] border-outline-variant/60 shadow-sm focus:border-royal-blue focus:ring focus:ring-royal-blue/20 transition-colors px-3 py-2 text-sm text-on-surface bg-surface-white"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-on-surface mb-1"
                    htmlFor="detailedMessage"
                  >
                    Detailed Message
                  </label>
                  <div className="relative">
                    <textarea
                      required
                      id="detailedMessage"
                      rows={5}
                      placeholder="Please describe the issue or suggestion in detail..."
                      onChange={(e) => setCharCount(e.target.value.length)}
                      className="w-full rounded-[1px] border-outline-variant/60 shadow-sm focus:border-royal-blue focus:ring focus:ring-royal-blue/20 transition-colors px-3 py-2 text-sm resize-y min-h-[120px] max-h-[250px] text-on-surface bg-surface-white"
                    ></textarea>
                    <div
                      className={`absolute bottom-2 right-2 text-xs ${charCount > 900 ? "text-red-500" : "text-outline"}`}
                    >
                      <span>{charCount}</span> / 1000
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-on-surface mb-1">
                    Supporting Documents (Optional)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-outline-variant/60 border-dashed rounded-[1px] hover:border-outline-variant transition-colors bg-surface cursor-pointer">
                    <div className="space-y-1 text-center">
                      <UploadCloud className="mx-auto h-8 w-8 text-outline" />
                      <div className="flex text-sm text-on-surface-variant justify-center">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-transparent rounded-[1px] font-medium text-royal-blue hover:text-deep-navy focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-royal-blue"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-outline">
                        PDF, PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start bg-blue-50 p-3 rounded-[1px] border border-blue-100">
                  <div className="flex items-center h-5">
                    <input
                      required
                      id="consent"
                      type="checkbox"
                      className="focus:ring-royal-blue h-4 w-4 text-royal-blue border-outline-variant/60 rounded-[1px]"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="consent"
                      className="font-medium text-on-surface"
                    >
                      Information Accuracy & Privacy
                    </label>
                    <p className="text-on-surface-variant text-xs mt-0.5">
                      I confirm that the information provided is accurate and
                      intended specifically for the selected MP's database.
                    </p>
                  </div>
                </div>
              </form>
            </div>

            <div className="px-6 py-4 border-t border-outline-variant/30 bg-surface rounded-[1px]-b-[16px] flex justify-end space-x-3 shrink-0">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-4 py-2 border border-outline-variant shadow-sm text-sm font-medium rounded-[1px] text-on-surface bg-surface-white hover:bg-surface focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-blue transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="suggestion-form"
                disabled={isSubmitting || !selectedMpName}
                className="inline-flex justify-center items-center px-5 py-2 border border-transparent shadow-sm text-sm font-medium rounded-[1px] text-surface-white bg-deep-navy hover:bg-royal-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-navy transition-colors min-w-[150px] disabled:opacity-80"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                    Submitting...
                  </>
                ) : (
                  <span>
                    Submit to{" "}
                    {selectedMpObj ? selectedMpObj.constituency : "MP"}
                  </span>
                )}
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[400px]">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-[1px] bg-green-100 mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">
              Suggestion Submitted Successfully
            </h3>
            <p className="text-sm text-on-surface-variant mb-6">
              Your feedback was successfully routed directly and exclusively to{" "}
              <strong className="text-deep-navy">{selectedMpName}</strong>.
              Thank you for your civic participation!
            </p>
            <div className="bg-surface px-4 py-2 rounded-[1px] text-lg font-mono font-semibold text-on-surface tracking-wider border border-outline-variant/30 mb-8">
              SG-2026-082491
            </div>
            <button
              onClick={onClose}
              className="w-full inline-flex justify-center rounded-[1px] border border-transparent shadow-sm px-4 py-2 bg-deep-navy text-base font-medium text-surface-white hover:bg-royal-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-navy sm:w-auto sm:text-sm transition-colors"
            >
              Return to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
