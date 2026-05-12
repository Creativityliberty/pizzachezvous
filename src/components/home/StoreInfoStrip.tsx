import { Store, MapPin, Phone, AlertCircle } from "lucide-react";
import { store } from "../../data/store";
import { motion } from "framer-motion";
import { popIn } from "../../lib/animations";

export const StoreInfoStrip = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-5 md:px-8 relative z-20 -mt-20 md:-mt-24 mb-16">
      <motion.div 
        className="paper-card rounded-[1.75rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.15)] border-2 border-white/50"
        initial="initial"
        whileInView="whileInView"
        variants={popIn(0.2)}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Decorative Tape for realism */}
        <div className="tape-corner absolute top-0 right-0 pointer-events-none opacity-80" aria-hidden="true"></div>

        <div className="flex flex-col justify-center p-6 lg:p-8 border-b md:border-b-0 md:border-r border-[#111111]/5 bg-white/40">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#E30613] flex items-center justify-center text-white shadow-lg shadow-[#E30613]/20">
              <Store size={20} />
            </div>
            <h3 className="font-black text-lg text-[#111111] uppercase tracking-tight">Retrait magasin</h3>
          </div>
          <p className="text-[#111111]/60 font-medium pl-13">Commandez et récupérez sur place</p>
        </div>

        <div className="flex flex-col justify-center p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[#111111]/5 bg-white/40">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#00843D] flex items-center justify-center text-white shadow-lg shadow-[#00843D]/20">
              <MapPin size={20} />
            </div>
            <h3 className="font-black text-lg text-[#111111] uppercase tracking-tight">Doudeville</h3>
          </div>
          <p className="text-[#111111]/60 font-medium pl-13">Votre magasin</p>
        </div>

        <div className="flex flex-col justify-center p-6 lg:p-8 border-b md:border-b-0 md:border-r border-[#111111]/5 bg-white/40">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[#FFD21A] flex items-center justify-center text-[#111111] shadow-lg shadow-[#FFD21A]/20">
              <Phone size={20} />
            </div>
            <h3 className="font-black text-lg text-[#111111] uppercase tracking-tight">Appelez-nous</h3>
          </div>
          <a href={`tel:${store.phone}`} className="text-[#111111] font-black hover:text-[#E30613] pl-13 transition-colors text-xl tracking-tight">
            {store.formattedPhone}
          </a>
        </div>

        <div className="flex flex-col justify-center p-6 lg:p-8 bg-white/40">
          <div className="flex items-center gap-3 mb-2">
            <div className={store.onlineOrderingOpen ? "w-10 h-10 rounded-full bg-[#00843D] flex items-center justify-center text-white" : "w-10 h-10 rounded-full bg-[#E30613] flex items-center justify-center text-white animate-pulse"}>
              <AlertCircle size={20} />
            </div>
            <h3 className="font-black text-lg text-[#111111] uppercase tracking-tight">Commande web</h3>
          </div>
          <div className="pl-13">
            {!store.onlineOrderingOpen ? (
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#E30613]">Fermée — appelez</span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-[#FFD21A] text-[#111111] rounded font-bold">Appel conseillé</span>
                </div>
                <div className="flex flex-col mt-1">
                  <span className="text-[11px] text-[#111111]/50 font-bold uppercase">Reprise : {store.nextOnlineOpening}</span>
                  <a href={`tel:${store.phone}`} className="red-button text-center mt-2 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">
                    Appeler
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <span className="font-bold text-[#00843D]">Ouverte pour le retrait</span>
                <span className="text-[10px] px-1.5 py-0.5 bg-[#00843D]/10 text-[#00843D] rounded font-bold w-fit mt-1">OUVERT</span>
              </div>
            )}
          </div>
        </div>

      </motion.div>
    </div>
  );
};
