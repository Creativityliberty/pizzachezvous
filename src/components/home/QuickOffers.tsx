import { motion } from "framer-motion";
import { Plus, Zap, Tag } from "lucide-react";
import { fadeUp, staggerContainer } from "../../lib/animations";

export const QuickOffers = () => {
  const offers = [
    { title: "Menu Enfant", items: "1 Pizzini + 1 Caprisun + Desserts", price: "7.00€", color: "bg-[#FFD21A]" },
    { title: "Menu Junior", items: "1 Pizza 27cm + 1 Boisson + Desserts", price: "12.00€", color: "bg-[#00843D]" },
    { title: "Offre Groupée", items: "3 Pizzas achetées = la 4ème offerte !", price: "Promo", color: "bg-[#E30613]" },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center text-white mb-6 shadow-xl">
             <Zap size={24} fill="currentColor" />
          </div>
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-black tracking-tight font-heading text-[#111111] leading-none mb-4">
            Menus & <span className="text-[#E30613]">Offres Rapides.</span>
          </h2>
          <p className="text-[#111111]/70 font-medium max-w-2xl text-lg">
            Des formules pensées pour les petits et les grands, avec le meilleur rapport goût/prix.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer} initial="initial" whileInView="whileInView"
        >
          {offers.map((offer, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp(i * 0.1)}
              className="paper-card rounded-[2.5rem] p-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 relative shadow-xl overflow-hidden border border-[#111111]/5"
            >
              <div className="absolute top-0 left-0 w-full h-2 rounded-full"></div>
              
              <div className={`w-16 h-16 rounded-full ${offer.color.replace('bg-', 'bg-opacity-10 ')} ${offer.color} flex items-center justify-center text-[#111111] mb-8 font-black text-2xl shadow-inner`}>
                <Tag size={28} />
              </div>

              <h3 className="text-3xl font-black font-heading mb-3 text-[#111111]">{offer.title}</h3>
              <p className="text-[#111111]/50 font-bold mb-8 leading-tight">{offer.items}</p>
              
              <div className={`font-mono text-3xl font-black ${offer.color} text-[#111111] px-5 py-2 rounded-xl rotate-[-2deg] shadow-lg mb-8 scale-110 group-hover:scale-125 transition-transform`}>
                {offer.price}
              </div>

              <button className="flex items-center gap-2 font-black text-[#111111] uppercase tracking-widest text-sm hover:text-[#E30613] transition-colors">
                <Plus size={18} />
                <span>Profiter de l'offre</span>
              </button>

              <div className="tape-corner absolute top-0 -mr-2 pointer-events-none opacity-40 scale-75" aria-hidden="true"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
