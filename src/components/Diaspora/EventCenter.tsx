import { events } from "../../data/diasporaData";
import { Calendar as CalendarIcon, Clock, MapPin, Video, Users } from "lucide-react";

export function EventCenter() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-dim border-y border-outline-variant/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-4">Events & Virtual Town Halls</h2>
            <p className="text-on-surface-variant text-lg">Participate in policy discussions, virtual constituency meetings, and investment forums.</p>
          </div>
          <button className="px-5 py-2.5 bg-surface-white border border-outline-variant hover:bg-outline-variant text-on-surface rounded-[1px] font-bold text-sm tracking-wide flex items-center gap-2 transition-colors whitespace-nowrap shadow-sm">
            <CalendarIcon className="w-4 h-4" /> View Full Calendar
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event) => (
             <div key={event.title} className="bg-surface-white border border-outline-variant rounded-[1px] flex flex-col sm:flex-row overflow-hidden shadow-sm group">
                <div className="bg-deep-navy text-white p-6 sm:w-40 flex flex-col justify-center items-center text-center">
                   <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">{event.date.split(' ')[0]}</p>
                   <p className="text-4xl font-bold leading-none mb-1">{event.date.split(' ')[1].replace(',', '')}</p>
                   <p className="text-sm font-bold text-ndc-gold">{event.date.split(' ')[2]}</p>
                </div>
                <div className="p-6 flex-1">
                   <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">{event.type}</span>
                      <span className="flex items-center gap-1 text-xs font-bold bg-danger/10 text-danger px-2 py-1 rounded-[1px]"><Video className="w-3 h-3" /> Live Stream Available</span>
                   </div>
                   <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                   <div className="space-y-2 text-sm text-on-surface-variant font-medium mb-6">
                      <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {event.time}</p>
                      <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {event.location}</p>
                      <p className="flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Speakers: {event.speakers.join(', ')}</p>
                   </div>
                   <button className="w-full sm:w-auto px-6 py-2.5 bg-primary hover:bg-royal-blue text-white rounded-[1px] font-bold text-sm transition-colors">
                      RSVP / Register
                   </button>
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
