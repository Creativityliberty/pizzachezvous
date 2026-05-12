import { motion } from "framer-motion";
import { Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { store } from "../../data/store";
import { fadeUp } from "../../lib/animations";

export const ContactCTA = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full">
        <motion.div 
          className="bg-black rounded-[3rem] p-10 md:p-20 relative overflow-hidden flex flex-col items-center text-center shadow-[0_48px_80px_rgba(0,0,0,0.4)]"
          initial="initial" whileInView="whileInView" variants={fadeUp(0)} viewport={{ once: true }}
        >
          {/* Background visuals */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E30613] rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00843D] rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-3xl">
            <div className="w-16 h-16 rounded-full bg-[#FFD21A] flex items-center justify-center text-[#111111] mb-8 shadow-2xl">
              <Phone size={32} />
            </div>
            
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tight font-heading text-white leading-[0.95] mb-8">
              Une envie de pizza ?<br/>
              <span className="text-[#E30613]">On vous attend.</span>
            </h2>
            
            <p className="text-white/60 text-xl font-medium mb-12 leading-relaxed">
              Passez votre commande maintenant et venez la retirer tout juste sortie du four à Doudeville.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a href={`tel:${store.phone}`} className="red-button flex items-center gap-4 px-10 py-6 rounded-2xl font-black text-2xl shadow-2xl group active:scale-95 transition-transform">
                <Phone size={28} />
                <span>{store.formattedPhone}</span>
                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </a>
              
              <div className="flex flex-col gap-4">
                 <div className="flex items-center gap-3 text-white/80 font-bold text-lg justify-center sm:justify-start">
                   <div className="p-2 bg-white/5 rounded-lg border border-white/10 uppercase text-[10px]">Lieu</div>
                   <span>{store.city}, Normandie</span>
                 </div>
                 <div className="flex items-center gap-3 text-white/80 font-bold text-lg justify-center sm:justify-start">
                   <div className="p-2 bg-white/5 rounded-lg border border-white/10 uppercase text-[10px]">Web</div>
                   <span className={store.onlineOrderingOpen ? "text-[#00843D]" : "text-[#E30613]"}>
                     {store.onlineOrderingOpen ? "Ouverte" : "Appel conseillé"}
                   </span>
                 </div>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#00843D] animate-pulse"></div>
              <span className="text-white/40 font-black uppercase tracking-[0.2em] text-[10px]">Pizza Chez Vous &copy; Est. 2021</span>
            </div>
          </div>

          <div className="tape-corner absolute top-10 right-[-30px] rotate-[25deg] scale-150 opacity-40" aria-hidden="true"></div>
          <div className="tape-left absolute bottom-10 left-[-30px] rotate-[-15deg] scale-150 opacity-40" aria-hidden="true"></div>
        </motion.div>
      </div>
    </section>
  );
};
