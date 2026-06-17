import { mpDirectory } from "../../data/diasporaData";
import { MessageSquare, Calendar, Send, Star } from "lucide-react";

export function MPEngagement() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-dim">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Engage With Your MP</h2>
          <p className="text-on-surface-variant text-lg">Direct communication channels for diaspora members to raise concerns, propose initiatives, and schedule virtual meetings with elected representatives.</p>
        </div>

        <div className="bg-surface-white border border-outline-variant rounded-[1px] p-6 md:p-10 shadow-sm mb-12">
           <h3 className="text-xl font-bold mb-6 border-b border-outline-variant pb-4">Direct Communication Portal</h3>
           <div className="grid md:grid-cols-2 gap-12">
             <div>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                   Use secure, verified channels to communicate directly with parliamentary offices. Messages from registered diaspora members receive priority routing for constituency matters.
                </p>
                <div className="space-y-4">
                   <button className="w-full flex items-center justify-between p-4 bg-surface-dim hover:bg-outline-variant/30 border border-outline-variant rounded-[1px] transition-colors group">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-primary/10 text-primary rounded-[1px] group-hover:bg-primary group-hover:text-white transition-colors">
                            <MessageSquare className="w-5 h-5" />
                         </div>
                         <div className="text-left">
                            <p className="font-bold">Submit Suggestion</p>
                            <p className="text-xs text-on-surface-variant">Policy feedback & community ideas</p>
                         </div>
                      </div>
                      <Send className="w-4 h-4 text-on-surface-variant" />
                   </button>
                   <button className="w-full flex items-center justify-between p-4 bg-surface-dim hover:bg-outline-variant/30 border border-outline-variant rounded-[1px] transition-colors group">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-info/10 text-info rounded-[1px] group-hover:bg-info group-hover:text-white transition-colors">
                            <Calendar className="w-5 h-5" />
                         </div>
                         <div className="text-left">
                            <p className="font-bold">Request Virtual Meeting</p>
                            <p className="text-xs text-on-surface-variant">Schedule a Zoom session with the MP's office</p>
                         </div>
                      </div>
                      <Send className="w-4 h-4 text-on-surface-variant" />
                   </button>
                </div>
             </div>
             
             <div className="bg-surface p-6 rounded-[1px] border border-outline-variant/50">
                <form className="space-y-4">
                   <div>
                      <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Subject</label>
                      <input type="text" className="w-full bg-surface-white border border-outline-variant rounded-[1px] px-4 py-2 focus:outline-none focus:border-primary text-sm" placeholder="Brief topic of discussion..." />
                   </div>
                   <div>
                      <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2">Message</label>
                      <textarea rows={4} className="w-full bg-surface-white border border-outline-variant rounded-[1px] px-4 py-2 focus:outline-none focus:border-primary text-sm resize-none" placeholder="Write your message here..."></textarea>
                   </div>
                   <button className="w-full bg-primary hover:bg-royal-blue text-white font-bold py-3 rounded-[1px] transition-colors flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" /> Send Secure Message
                   </button>
                   <p className="text-xs text-on-surface-variant text-center opacity-70">Messages undergo standard vetting before delivery to the MP's desk.</p>
                </form>
             </div>
           </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mpDirectory.map((mp) => (
             <div key={mp.name} className="flex gap-4 p-4 border border-outline-variant rounded-[1px] bg-surface-white items-center">
                <img src={mp.image} alt={mp.name} className="w-20 h-20 rounded-[1px] object-cover" />
                <div className="flex-1">
                   <h4 className="font-bold text-lg leading-tight mb-1">{mp.name}</h4>
                   <p className="text-sm text-on-surface-variant mb-2">{mp.constituency}, {mp.region} Region</p>
                   <div className="flex gap-3 text-xs font-bold">
                      <span className="flex items-center gap-1 text-success"><MessageSquare className="w-3 h-3" /> {mp.responseRate} Response Rate</span>
                      <span className="flex items-center gap-1 text-ndc-gold"><Star className="w-3 h-3" /> {mp.score} Public Score</span>
                   </div>
                </div>
                <button className="px-4 py-2 bg-surface-dim hover:bg-outline-variant rounded-[1px] text-sm font-bold border border-outline-variant transition-colors whitespace-nowrap">
                   Contact MP
                </button>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
