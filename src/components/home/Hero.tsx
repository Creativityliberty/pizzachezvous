import { motion } from "framer-motion";
import { ArrowRight, Phone, Pizza, MapPin } from "lucide-react";
import { store } from "../../data/store";
import { fadeUp } from "../../lib/animations";

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col pt-28 md:pt-32 pb-20">
      
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000" 
          alt="Delicious pizza background" 
          className="w-full h-full object-cover object-center opacity-60 absolute inset-0 animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Subtle radial glows */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#E30613]/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-[#FFD21A]/10 blur-[100px] rounded-full translate-x-1/4"></div>
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-10 items-center w-full">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="lg:col-span-6 flex flex-col items-start"
            initial="initial" animate="whileInView" variants={fadeUp(0)} viewport={{ once: true }}
          >
            <motion.div 
              className="green-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold shadow-xl border border-white/10 mb-8 w-fit"
              variants={fadeUp(0.1)}
            >
              <MapPin size={14} />
              <span>3 magasins en Normandie</span>
            </motion.div>

            <motion.div className="flex flex-col gap-1 w-full relative mb-6" variants={fadeUp(0.2)}>
              <h1 className="text-[clamp(3.5rem,9vw,9rem)] leading-[0.85] tracking-[-0.065em] font-black font-heading text-[#F8F4EA]">
                PIZZA
              </h1>
              <div className="flex flex-col relative">
                <h1 className="text-[clamp(3.5rem,9vw,9rem)] leading-[0.85] tracking-[-0.065em] font-black font-accent italic text-[#FFD21A] mt-[-0.1em]">
                  Chez Vous
                </h1>
                <div className="h-2 w-48 bg-[#E30613] mt-2 rounded-full"></div>
              </div>
            </motion.div>

            <p className="text-lg md:text-2xl text-white/86 font-medium max-w-xl leading-relaxed mb-10">
              Pâte faite maison, produits <span className="text-[#FFD21A]">frais & locaux</span>, et savoir-faire unique.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#store-info" className="red-button flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl group">
                <span className="tracking-tight">COMMANDER</span>
                <Phone size={22} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a href="#carte" className="liquid-glass-food flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl text-white border border-white/20 transition-all hover:bg-white/10">
                <Pizza size={22} />
                <span>Voir la carte</span>
              </a>
            </div>
            
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-8 flex flex-wrap items-center gap-2">
              Retrait magasin <span className="w-1 h-1 rounded-full bg-white/20"></span> Plusieurs boutiques <span className="w-1 h-1 rounded-full bg-white/20"></span> Commandes par téléphone
            </p>
          </motion.div>

          {/* Right Column - Decorative Visual */}
          <motion.div 
            className="hidden lg:flex lg:col-span-6 relative justify-end"
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square max-w-[550px] flex items-center justify-center">
              {/* Background splashes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#E30613]/10 blur-[80px] rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-4 border-dashed border-[#FFD21A]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover rounded-full border-8 border-white/5 shadow-[0_32px_80px_rgba(0,0,0,0.5)] pizza-steam relative z-10"
                alt="Pizza Chez Vous special"
              />
              
              {/* Floating Cards - Paper style */}
              <motion.div 
                className="paper-card absolute top-[10%] -left-[5%] z-20 px-5 py-3 rounded-xl border border-[#111111]/10 flex items-center gap-2 rotate-[-6deg] shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-3 h-3 rounded-full bg-[#E30613]"></div>
                <span className="text-[#111111] font-bold text-lg">Base tomate</span>
              </motion.div>
              
              <motion.div 
                className="paper-card absolute bottom-[25%] -right-[8%] z-20 px-5 py-3 rounded-xl border border-[#111111]/10 flex items-center gap-2 rotate-[4deg] shadow-2xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="w-3 h-3 rounded-full bg-[#F8F4EA]"></div>
                <span className="text-[#111111] font-bold text-lg">Base crème</span>
              </motion.div>

              <motion.div 
                className="yellow-button absolute -bottom-5 left-[20%] z-20 px-6 py-2 rounded-full font-black text-xl rotate-[-2deg] shadow-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                À partir de 7€
              </motion.div>

              <div className="green-pill absolute top-[20%] -right-10 z-20 px-4 py-2 rounded-lg font-bold text-sm rotate-[12deg] shadow-xl">
                Retrait magasin
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
