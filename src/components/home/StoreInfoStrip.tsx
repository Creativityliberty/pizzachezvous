import { Store, MapPin, Phone, AlertCircle } from "lucide-react";
import { store } from "../../data/store";
import { motion } from "framer-motion";
import { popIn } from "../../lib/animations";

export const StoreInfoStrip = () => {
  return (
    <div id="store-info" className="w-full max-w-7xl mx-auto px-5 md:px-8 relative z-20 -mt-20 md:-mt-24 mb-16 scroll-mt-32">
      <motion.div 
        className="paper-card rounded-[1.75rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.15)] border-2 border-white/50"
        initial="initial"
        whileInView="whileInView"
        variants={popIn(0.2)}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Decorative Tape for realism */}
        <div className="tape-corner absolute top-0 right-0 pointer-events-none opacity-80" aria-hidden="true"></div>

        <div className="flex flex-col justify-center p-6 lg:p-8 border-b lg:border-b-0 md:border-r border-[#111111]/5 bg-white/40">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#E30613] flex items-center justify-center text-white shadow-lg shadow-[#E30613]/20">
              <Store size={20} />
            </div>
            <h3 className="font-black text-[1rem] leading-tight text-[#111111] uppercase tracking-tight">Retrait magasin</h3>
          </div>
          <p className="text-[#111111]/60 font-medium pl-13 text-sm">Commandez par téléphone et récupérez sur place.</p>
        </div>

        {store.locations?.map((loc, i) => (
          <div key={loc.city} className={`flex flex-col justify-center p-6 lg:p-8 bg-white/40 border-[#111111]/5 ${
            i === 0 ? 'border-b lg:border-b-0 lg:border-r' : 
            i === 1 ? 'border-b md:border-b-0 md:border-r' : 
            ''
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#00843D] flex items-center justify-center text-white shadow-lg shadow-[#00843D]/20">
                <MapPin size={20} />
              </div>
              <h3 className="font-black text-lg text-[#111111] uppercase tracking-tight line-clamp-1">{loc.city}</h3>
            </div>
            <div className="pl-13 flex flex-col items-start gap-2">
              <a href={`tel:${loc.phone}`} className="flex items-center gap-2 text-[#111111] font-black hover:text-[#E30613] transition-colors text-lg tracking-tight group">
                <Phone size={16} className="text-[#FFD21A] group-hover:text-[#E30613] transition-colors" />
                {loc.formattedPhone}
              </a>
              <a href={`tel:${loc.phone}`} className="red-button px-3 py-1.5 rounded text-[10px] font-black uppercase tracking-widest text-[#111111] hover:text-white mt-1 w-full text-center group">
                 <span>Appeler</span>
              </a>
            </div>
          </div>
        ))}

      </motion.div>
    </div>
  );
};
