import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { fadeUp, staggerContainer } from "../../lib/animations";
import { Link } from "react-router-dom";

export const MenuPreview = () => {
  const teasers = [
    { name: "La Savoyarde", desc: "Crème, jambon, pommes de terre, reblochon...", price: "10.00€", tag: "POPULAIRE" },
    { name: "La Calzone Royale", desc: "Tomate, jambon, œuf, champignons...", price: "9.50€", tag: "COEURS" },
    { name: "Le Pizzini Bresaola", desc: "Pain pizza, fromage, boeuf séché...", price: "7.00€", tag: "NEW" },
  ];

  return (
    <section className="py-24 md:py-32 flour-paper-bg paper-texture overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* List part */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-10"
            variants={staggerContainer} initial="initial" whileInView="whileInView"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[#E30613] font-bold uppercase tracking-widest text-sm">Best-sellers</span>
              <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-black tracking-tight font-heading text-[#111111] leading-none">
                Le menu dont on rêve<br/><span className="text-[#00843D]">chaque soir.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {teasers.map((t, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp(i * 0.1)}
                  className="paper-card p-6 flex flex-col sm:flex-row sm:items-center justify-between rounded-3xl group cursor-pointer hover:border-[#FFD21A] transition-all relative border border-[#111111]/5 shadow-sm hover:shadow-xl"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                       <h3 className="text-xl font-black text-[#111111] group-hover:text-[#E30613] transition-colors">{t.name}</h3>
                       <span className="text-[10px] px-2 py-0.5 bg-black text-white rounded-full font-black uppercase tracking-widest">{t.tag}</span>
                    </div>
                    <p className="text-[#111111]/60 font-medium text-sm sm:text-base">{t.desc}</p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex items-center gap-4">
                    <div className="font-mono text-xl font-black text-[#111111] bg-[#FFD21A] px-3 py-1 rounded rotate-[-2deg] shadow-sm">{t.price}</div>
                    <div className="w-10 h-10 rounded-full border border-[#111111]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={18} className="text-[#E30613]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Special Promo card */}
          <motion.div 
            className="lg:col-span-5"
            initial="initial" whileInView="whileInView" variants={fadeUp(0.3)} viewport={{ once: true }}
          >
            <div className="bg-[#111111] rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl rotate-[1deg]">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#E30613]/20 rounded-full blur-[60px] translate-x-1/4 -translate-y-1/4"></div>
              
              <div className="w-16 h-16 rounded-full bg-[#FFD21A] flex items-center justify-center text-[#111111] mb-8 shadow-xl rotate-[-12deg]">
                <Star size={32} fill="currentColor" />
              </div>
              
              <h3 className="text-3xl font-black font-heading mb-6 italic leading-tight">
                Envie de créer<br/>votre propre pizza ?
              </h3>
              
              <p className="text-white/60 font-medium text-lg mb-10 leading-relaxed">
                Choisissez vos ingrédients, mélangez les saveurs et devenez le chef de votre soirée.
              </p>
              
              <Link to="/menu" className="red-button flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-xl shadow-lg group">
                COMMENCER
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </Link>

              <div className="tape-left absolute bottom-10 right-[-20px] scale-125 opacity-20 rotate-[20deg]" aria-hidden="true"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
