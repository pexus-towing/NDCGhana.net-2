import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  MessageSquareText, 
  User, 
  Calendar, 
  Paperclip, 
  CheckCircle,
  AlertTriangle,
  Send,
  StickyNote
} from "lucide-react";

export default function SuggestionDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"reply" | "notes">("reply");
  const [replyText, setReplyText] = useState("");
  const [noteText, setNoteText] = useState("");

  const [suggestion, setSuggestion] = useState({
    id: "",
    citizenName: "",
    citizenEmail: "",
    citizenPhone: "",
    subject: "",
    message: "",
    date: "",
    status: "New" as "New" | "In Progress" | "Resolved" | "Archived",
    priority: "Medium" as "High" | "Medium" | "Low",
    attachments: [] as { name: string, url: string, size: string }[],
    notes: [] as { id: string, text: string, date: string }[]
  });

  useEffect(() => {
    // Mock API call
    setIsLoading(true);
    setTimeout(() => {
      setSuggestion({
        id: id || "1",
        citizenName: "Kwame Mensah",
        citizenEmail: "kwame.mensah@email.com",
        citizenPhone: "024 123 4567",
        subject: "Urgent need for streetlights in Mepe",
        message: "Honourable, I hope this message finds you well. I am writing on behalf of the residents of Mepe South. Over the past three months, the main road leading to the central market has been completely dark due to faulty streetlights. This has led to a spike in petty theft and accidents during the evening hours. We urgently request your intervention to help fix or replace these streetlights to restore safety to our community. Thank you for your continued dedication to North Tongu.",
        date: "2023-10-24T10:30:00Z",
        status: "New",
        priority: "High",
        attachments: [
          { name: "IMG_8842_dark_street.jpg", url: "#", size: "2.4 MB" },
          { name: "Petition_Signatures.pdf", url: "#", size: "1.1 MB" }
        ],
        notes: [
          { id: "n1", text: "Checked with the district assembly engineer. We have 10 spare bulbs in stock.", date: "2023-10-25T09:15:00Z" }
        ]
      });
      setIsLoading(false);
    }, 600);
  }, [id]);

  const handleStatusChange = (newStatus: "New" | "In Progress" | "Resolved" | "Archived") => {
    setSuggestion(prev => ({ ...prev, status: newStatus }));
    // API call to update status
  };

  const handlePriorityChange = (newPriority: "High" | "Medium" | "Low") => {
    setSuggestion(prev => ({ ...prev, priority: newPriority }));
    // API call to update priority
  };

  const handleSendReply = () => {
    if (!replyText.trim()) return;
    alert("Reply sent to citizen.");
    setReplyText("");
    handleStatusChange("In Progress");
  };

  const handleAddNote = () => {
    if (!noteText.trim()) return;
    setSuggestion(prev => ({
      ...prev,
      notes: [...prev.notes, { id: Date.now().toString(), text: noteText, date: new Date().toISOString() }]
    }));
    setNoteText("");
  };

  const handleEscalate = () => {
    handlePriorityChange("High");
    alert("Suggestion escalated to High priority.");
  };

  const handleResolve = () => {
    handleStatusChange("Resolved");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 text-[#006B3C]">
        <div className="text-xl font-bold animate-pulse">Loading suggestion details...</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-[1px] border border-gray-200 shadow-sm">
        <div className="flex items-center gap-4">
          <Link 
            to="/mp-portal/suggestions"
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
               Suggestion Details
            </h1>
            <p className="text-gray-500 mt-1 text-sm font-medium">
              Review and act upon citizen feedback.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
           <button 
             onClick={handleEscalate}
             className="px-4 py-2 bg-red-50 text-red-700 border border-red-200 rounded-[1px] text-sm font-bold hover:bg-red-100 transition-colors flex items-center gap-2 shadow-sm"
           >
             <AlertTriangle className="w-4 h-4" /> Escalate
           </button>
           <button 
             onClick={handleResolve}
             className={`px-4 py-2 border rounded-[1px] text-sm font-bold flex items-center gap-2 shadow-sm transition-colors ${
               suggestion.status === 'Resolved' 
                 ? 'bg-emerald-100 border-emerald-300 text-emerald-800' 
                 : 'bg-[#006B3C] text-white border-transparent hover:bg-[#004B2B]'
             }`}
           >
             <CheckCircle className="w-4 h-4" /> {suggestion.status === 'Resolved' ? 'Resolved' : 'Mark as Resolved'}
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 shadow-sm rounded-[1px] p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{suggestion.subject}</h2>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                   <span className="flex items-center gap-1.5 font-medium"><User className="w-4 h-4" /> {suggestion.citizenName}</span>
                   <span className="flex items-center gap-1.5 font-medium"><Calendar className="w-4 h-4" /> {new Date(suggestion.date).toLocaleString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                 <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-[1px] ${
                    suggestion.priority === 'High' ? 'bg-red-50 text-red-700 border border-red-200/50' : 
                    suggestion.priority === 'Medium' ? 'bg-orange-50 text-orange-700 border border-orange-200/50' : 
                    'bg-gray-50 text-gray-600 border border-gray-200/50'
                  }`}>
                    {suggestion.priority} Priority
                  </span>
                  <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-[1px] ${
                    suggestion.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/50' : 
                    suggestion.status === 'In Progress' ? 'bg-blue-50 text-blue-700 border border-blue-200/50' : 
                    suggestion.status === 'New' ? 'bg-amber-50 text-amber-700 border border-amber-200/50' : 
                    'bg-gray-100 text-gray-700 border border-gray-300/50'
                  }`}>
                    {suggestion.status}
                  </span>
              </div>
            </div>

            <div className="prose prose-emerald max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{suggestion.message}</p>
            </div>

            {suggestion.attachments.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Paperclip className="w-4 h-4" /> Attachments ({suggestion.attachments.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {suggestion.attachments.map((file, idx) => (
                    <a key={idx} href={file.url} className="flex items-center justify-between p-3 border border-gray-200 rounded-[1px] hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-3 overflow-hidden">
                        <div className="p-2 bg-gray-100 rounded-[1px] text-gray-500 group-hover:text-[#006B3C] transition-colors">
                          <Paperclip className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 truncate">{file.name}</span>
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{file.size}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Area (Reply/Notes) */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-[1px] overflow-hidden">
             <div className="flex border-b border-gray-200 bg-gray-50">
                <button 
                  onClick={() => setActiveTab('reply')}
                  className={`flex-1 py-3 px-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === 'reply' ? 'bg-white border-b-2 border-b-[#006B3C] text-[#006B3C]' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <MessageSquareText className="w-4 h-4" /> Reply to Citizen
                </button>
                <button 
                  onClick={() => setActiveTab('notes')}
                  className={`flex-1 py-3 px-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === 'notes' ? 'bg-white border-b-2 border-b-[#006B3C] text-[#006B3C]' : 'text-gray-500 hover:bg-gray-100'}`}
                >
                  <StickyNote className="w-4 h-4" /> Internal Notes
                </button>
             </div>

             <div className="p-6">
                {activeTab === 'reply' ? (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500 font-medium">Your reply will be sent to <strong>{suggestion.citizenEmail}</strong>.</p>
                    <textarea 
                      rows={5}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write your response here..."
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-[1px] focus:outline-none focus:border-[#006B3C] focus:ring-1 focus:ring-[#006B3C] transition-all text-gray-900 font-medium resize-y"
                    />
                    <div className="flex justify-end">
                      <button 
                        onClick={handleSendReply}
                        disabled={!replyText.trim()}
                        className="px-6 py-2.5 bg-[#006B3C] text-white rounded-[1px] font-bold hover:bg-[#004B2B] transition-colors flex items-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4" /> Send Reply
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                       {suggestion.notes.length === 0 ? (
                         <div className="text-center py-6 text-gray-400 text-sm italic">No internal notes added yet.</div>
                       ) : (
                         suggestion.notes.map(note => (
                           <div key={note.id} className="bg-amber-50 border border-amber-100 rounded-[1px] p-4 relative">
                             <div className="absolute top-0 right-0 w-4 h-4 bg-amber-100/50 border-b border-l border-amber-100 rounded-bl-[1px]"></div>
                             <p className="text-amber-900 text-sm whitespace-pre-wrap">{note.text}</p>
                             <span className="text-amber-600/70 text-xs mt-2 block font-medium">{new Date(note.date).toLocaleString()}</span>
                           </div>
                         ))
                       )}
                    </div>
                    <div className="border-t border-gray-100 pt-4">
                      <textarea 
                        rows={3}
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        placeholder="Add a private note (not visible to citizen)..."
                        className="w-full px-4 py-3 bg-amber-50/50 border border-amber-200 rounded-[1px] focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all text-amber-900 font-medium resize-y placeholder:text-amber-700/40"
                      />
                      <div className="flex justify-end mt-3">
                        <button 
                          onClick={handleAddNote}
                          disabled={!noteText.trim()}
                          className="px-6 py-2.5 bg-amber-100 text-amber-800 border border-amber-200 rounded-[1px] font-bold hover:bg-amber-200 transition-colors flex items-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                          <StickyNote className="w-4 h-4" /> Save Note
                        </button>
                      </div>
                    </div>
                  </div>
                )}
             </div>
          </div>
        </div>

        {/* Right Column: Citizen Details */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 shadow-sm rounded-[1px] p-6">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Citizen Profile</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 font-bold uppercase tracking-wider">Name</label>
                <div className="text-gray-900 font-medium">{suggestion.citizenName}</div>
              </div>
              <div>
                <label className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email</label>
                <div className="text-gray-900 font-medium">{suggestion.citizenEmail || 'Not provided'}</div>
              </div>
              <div>
                <label className="text-xs text-gray-500 font-bold uppercase tracking-wider">Phone</label>
                <div className="text-gray-900 font-medium">{suggestion.citizenPhone || 'Not provided'}</div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
               <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Management</h3>
               <div className="space-y-4">
                 <div>
                    <label className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1.5">Update Status</label>
                    <select 
                      value={suggestion.status}
                      onChange={(e) => handleStatusChange(e.target.value as any)}
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-[1px] focus:outline-none focus:border-[#006B3C] text-sm font-medium"
                    >
                      <option value="New">New</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Archived">Archived</option>
                    </select>
                 </div>
                 <div>
                    <label className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1.5">Priority</label>
                    <select 
                      value={suggestion.priority}
                      onChange={(e) => handlePriorityChange(e.target.value as any)}
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-[1px] focus:outline-none focus:border-[#006B3C] text-sm font-medium flex-1 text-gray-900"
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
