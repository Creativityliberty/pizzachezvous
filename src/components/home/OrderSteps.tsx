import { motion } from "framer-motion";
import { ArrowRight, Phone, Clock, Store, ShoppingBag } from "lucide-react";
import { store } from "../../data/store";
import { fadeUp } from "../../lib/animations";

export const OrderSteps = () => {
  return (
    <section className="py-24 md:py-32 px-5 md:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left - Gradient Panel */}
        <motion.div 
          className="lg:col-span-7 bg-gradient-to-br from-[#E30613] via-[#B8000B] to-[#FFD21A] rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-2xl"
          initial="initial" whileInView="whileInView" variants={fadeUp(0)} viewport={{ once: true }}
        >
          <div className="tape-corner absolute top-0 right-0 z-20 pointer-events-none opacity-40" aria-hidden="true"></div>
          
          <h2 className="text-4xl md:text-5xl font-black font-heading text-white mb-12 tracking-tight">
            Comment commander ?
          </h2>

          <div className="flex flex-col gap-10">
            {[
              { title: "Choisissez votre envie", desc: "Pizza crème, tomate, calzone, pizzini ou menu." },
              { title: "Vérifiez le statut", desc: "Si la commande internet est fermée, appelez le magasin." },
              { title: "Commandez en retrait", desc: "Récupérez votre commande à Doudeville." }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-black text-2xl text-[#E30613] shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-black text-white tracking-tight">{step.title}</h3>
                  <p className="text-white/80 font-medium text-lg leading-snug">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href={`tel:${store.phone}`} className="yellow-button inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-xl mt-12 shadow-2xl group w-full sm:w-auto justify-center">
            <Phone size={24} />
            <span>APPELER MAINTENANT</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        {/* Right - Visual / Info */}
        <motion.div 
          className="lg:col-span-5 flex flex-col gap-6"
          initial="initial" whileInView="whileInView" variants={fadeUp(0.2)} viewport={{ once: true }}
        >
          <div className="paper-card rounded-3xl p-8 border border-[#111111]/10 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <ShoppingBag className="text-[#00843D] w-10 h-10" />
              <div className="bg-[#00843D]/10 text-[#00843D] px-3 py-1 rounded-full font-bold text-xs uppercase tracking-widest">
                Retrait uniquement
              </div>
            </div>
            
            <h3 className="text-2xl font-black font-heading mb-4 text-[#111111]">Pizza Chez Vous Doudeville</h3>
            
            <div className="flex flex-col gap-4 text-[#111111]/70 font-bold mb-8">
              <div className="flex items-center gap-3">
                <Store size={18} className="text-[#E30613]" />
                <span>Magasin de Doudeville</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#F7B500]" />
                <span>Prêt en 15-20 min</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-video bg-gray-100 border border-[#111111]/5">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fm=webp&fit=crop&q=40&w=800" 
                alt="Pizza Ready" 
                className="w-full h-full object-cover opacity-80" 
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
