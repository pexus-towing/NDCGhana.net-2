import { motion } from "motion/react";
import { globalNetwork } from "../../data/diasporaData";
import { Map, Users, ArrowRight } from "lucide-react";

export function GlobalNetwork() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-dim">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
             <Map className="w-8 h-8 text-primary" /> Global Ghanaian Network
          </h2>
          <p className="text-on-surface-variant text-lg max-w-2xl">Connect with thriving Ghanaian communities across the globe, track regional contributions, and discover local diaspora events.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-surface-white border border-outline-variant p-6 rounded-[1px] shadow-sm relative overflow-hidden min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain opacity-50"></div>
            
            {/* Simulated Heatmap Points */}
            <div className="absolute top-[30%] left-[20%] w-6 h-6 bg-primary/40 rounded-[1px] animate-ping"></div>
            <div className="absolute top-[30%] left-[20%] w-4 h-4 bg-primary rounded-[1px] flex items-center justify-center cursor-pointer group">
               <div className="hidden group-hover:block absolute top-full mt-2 bg-surface-white border border-outline-variant p-3 rounded-[1px] shadow-sm w-48 z-10 text-center">
                  <p className="font-bold border-b border-outline-variant pb-2 mb-2">North America</p>
                  <p className="text-sm font-medium">63,600 Members</p>
               </div>
            </div>

            <div className="absolute top-[25%] left-[45%] w-8 h-8 bg-ndc-gold/40 rounded-[1px] animate-ping"></div>
            <div className="absolute top-[26%] left-[46%] w-5 h-5 bg-ndc-gold border-2 border-white rounded-[1px] cursor-pointer group">
               <div className="hidden group-hover:block absolute top-full mt-2 bg-surface-white border border-outline-variant p-3 rounded-[1px] shadow-sm w-48 z-10 text-center">
                  <p className="font-bold border-b border-outline-variant pb-2 mb-2">Europe</p>
                  <p className="text-sm font-medium">75,200 Members</p>
               </div>
            </div>
            
             <div className="absolute top-[75%] left-[80%] w-4 h-4 bg-primary rounded-[1px] cursor-pointer group">
               <div className="hidden group-hover:block absolute top-full mt-2 bg-surface-white border border-outline-variant p-3 rounded-[1px] shadow-sm w-48 text-center -mx-24 z-10">
                  <p className="font-bold border-b border-outline-variant pb-2 mb-2">Oceania</p>
                  <p className="text-sm font-medium">5,400 Members</p>
               </div>
            </div>
          </div>

          <div className="bg-surface-white border border-outline-variant rounded-[1px] shadow-sm overflow-hidden flex flex-col">
            <div className="p-6 border-b border-outline-variant bg-surface-dim">
               <h3 className="font-bold text-xl flex items-center gap-2"><Users className="w-5 h-5 text-primary" /> Top Regions</h3>
            </div>
            <div className="divide-y divide-outline-variant/50 overflow-y-auto flex-grow">
               {globalNetwork.map((region, idx) => (
                  <div key={region.country} className="p-4 hover:bg-surface-dim/50 transition-colors group">
                     <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                           <span className="font-bold text-on-surface-variant w-4">{idx + 1}.</span>
                           <span className="font-bold text-on-surface group-hover:text-primary transition-colors">{region.country}</span>
                        </div>
                        <span className="text-sm font-medium bg-surface-dim px-2 py-1 rounded-[1px] text-on-surface-variant">{region.members}</span>
                     </div>
                     <div className="grid grid-cols-2 gap-2 text-xs font-medium text-on-surface-variant pl-7">
                        <div>Active: <span className="text-success">{region.active}</span></div>
                        <div>Const: <span className="text-primary">{region.constituencies}</span></div>
                        <div className="col-span-2">Tracked Contrib: <span className="text-ndc-gold font-bold">{region.contributions}</span></div>
                     </div>
                  </div>
               ))}
            </div>
            <div className="p-4 border-t border-outline-variant bg-surface-dim">
               <button className="w-full py-2 flex items-center justify-center gap-2 text-primary font-bold text-sm hover:underline">
                  View Full Directory <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
