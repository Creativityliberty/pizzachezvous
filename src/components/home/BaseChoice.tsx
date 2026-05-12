import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeUp } from "../../lib/animations";

export const BaseChoice = () => {
  return (
    <section className="bg-[#111111] py-24 md:py-32 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#E30613] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#FFD21A] rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="initial" whileInView="whileInView" variants={fadeUp(0)} viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black tracking-tight font-heading text-white leading-[0.95]">
              Base crème ou<br/>
              <span className="text-[#E30613]">base tomate ?</span>
            </h2>
            <p className="text-white/70 text-xl font-medium max-w-xl leading-relaxed">
              Le cœur de votre pizza ! Choisissez la fondation qui sublimera vos ingrédients préférés.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link to="/menu" className="liquid-glass-food px-8 py-4 rounded-2xl font-black text-white hover:bg-white/10 border border-white/20 transition-all flex items-center gap-2">
                Voir la carte
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            initial="initial" whileInView="whileInView" variants={fadeUp(0.2)} viewport={{ once: true }}
          >
            {/* Tomate Card */}
            <div className="paper-card rounded-[2rem] p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 bg-[#E30613] border-none text-white overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 rotate-45"></div>
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 group-hover:scale-110 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1592394533824-9440e5d68530?auto=format&fm=webp&fit=crop&q=60&w=300" 
                  alt="Base Tomate" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-black font-heading mb-3 italic text-[#070707]">Tomate</h3>
              <p className="font-bold mb-6 text-sm text-[#7b7878]">L'authenticité, la fraîcheur, le classique italien revisité.</p>
              <div className="mt-auto px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-[#FFD21A] text-[#000000]">Choisir</div>
            </div>

            {/* Crème Card */}
            <div className="paper-card rounded-[2rem] p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-500 bg-[#F8F4EA] border-none text-[#111111] overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full translate-x-1/2 -translate-y-1/2 rotate-45"></div>
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl mb-6 group-hover:scale-110 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1596649725892-2900c62d1ea4?auto=format&fm=webp&fit=crop&q=60&w=300" 
                  alt="Base Crème" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-black font-heading mb-3 italic">Crème</h3>
              <p className="text-[#111111]/60 font-bold mb-6 text-sm">La douceur gourmande, l'onctuosité, le réconfort absolu.</p>
              <div className="mt-auto bg-[#FFD21A] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md">Choisir</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
