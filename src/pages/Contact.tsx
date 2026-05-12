import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Pizza, 
  Store, 
  MapPin, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Copy, 
  Plus, 
  Utensils, 
  Star,
  ChevronDown,
  ArrowRight,
  Zap,
  Info
} from "lucide-react";
import { store } from "../data/store";
import { createContactMessage } from "../lib/createContactMessage";
import { fadeUp, popIn, staggerContainer } from "../lib/animations";

export const Contact = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(createContactMessage());
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="flex flex-col bg-[#F8F4EA] overflow-x-hidden">
      
      {/* SECTION 1 — CONTACT HERO */}
      <section className="relative min-h-[68vh] bg-[#111111] overflow-hidden flex flex-col pt-32 md:pt-40 pb-20 px-5 md:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=2000" 
            alt="Store counter" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#E30613]/15 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-[#FFD21A]/10 blur-[100px] rounded-full translate-x-1/4"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div 
              className="lg:col-span-7 flex flex-col items-start"
              initial="initial" animate="whileInView" variants={fadeUp(0)} viewport={{ once: true }}
            >
              <div className="green-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold shadow-xl border border-white/10 mb-8">
                <Store size={14} />
                <span>Contact · Retrait magasin</span>
              </div>

              <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] tracking-[-0.06em] font-black font-heading text-[#F8F4EA] mb-8">
                <span className="text-[#FFD21A]">Appelez</span> Pizza Chez Vous et récupérez en <span className="text-[#00843D]">magasin</span>.
              </h1>

              <p className="text-lg md:text-xl text-white/70 font-medium max-w-2xl leading-relaxed mb-10">
                Choisissez votre pizza, votre formule ou votre menu, puis contactez le magasin de Doudeville pour commander en retrait.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href={`tel:${store.phone}`} className="yellow-button flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl group">
                  <Phone size={22} />
                  <span>Appeler maintenant</span>
                </a>
                <a href="/menu" className="red-button flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl text-white shadow-xl">
                  <Pizza size={22} />
                  <span>Voir la carte</span>
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-white/40 text-xs font-bold uppercase tracking-widest">
                <span>Commandes internet fermées</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="text-[#FFD21A]">Appel conseillé</span>
              </div>
            </motion.div>

            <motion.div 
              className="hidden lg:flex lg:col-span-5 relative justify-end"
              initial="initial" animate="whileInView" variants={popIn(0.3)}
            >
              <div className="relative w-full max-w-[450px]">
                 <div className="paper-card p-10 rounded-[2.5rem] rotate-[-2deg] shadow-2xl flex flex-col items-center gap-6 bg-white border-2 border-black/5">
                    <div className="w-20 h-20 rounded-full bg-[#FFD21A]/10 flex items-center justify-center text-[#111111] animate-pulse">
                      <Phone size={40} />
                    </div>
                    <span className="text-3xl font-black text-[#111111] tracking-tighter">{store.formattedPhone}</span>
                    <div className="flex flex-wrap justify-center gap-2">
                       <span className="bg-[#00843D] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">Retrait magasin</span>
                       <span className="bg-[#E30613] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase">Doudeville</span>
                       <span className="bg-[#FFD21A] text-[#111111] px-3 py-1 rounded-full text-[10px] font-black uppercase">Carte disponible</span>
                    </div>
                    <div className="tape-corner absolute -top-4 -right-4 bg-black/10 w-16 h-8 rotate-45"></div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — STORE STATUS BANNER */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 -mt-10 relative z-20">
        <motion.div 
          className="paper-card rounded-[1.75rem] p-6 lg:p-8 grid lg:grid-cols-12 gap-6 items-center border-l-8 border-[#E30613] shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
             <div className="w-16 h-16 rounded-full bg-[#E30613]/10 flex items-center justify-center text-[#E30613]">
                <AlertCircle size={32} />
             </div>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-1">
            <h3 className="text-2xl font-black text-[#111111] tracking-tight">Commandes internet actuellement fermées</h3>
            <p className="text-[#111111]/60 font-medium">Pour commander, veuillez appeler directement le magasin de Doudeville.</p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 lg:justify-end">
             <div className="flex flex-col items-center sm:items-end">
                <span className="text-[10px] uppercase font-black tracking-widest text-[#111111]/30">Reprise</span>
                <span className="font-bold text-[#FFD21A] bg-black px-2 py-0.5 rounded">{store.nextOnlineOpening}</span>
             </div>
             <a href={`tel:${store.phone}`} className="red-button flex items-center gap-2 px-6 py-3 rounded-xl font-bold group">
               <Phone size={18} />
               <span>{store.formattedPhone}</span>
             </a>
          </div>
        </motion.div>
      </div>

      {/* SECTION 3 — DIRECT CALL SECTION */}
      <section className="flour-paper-bg paper-texture py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[#E30613] font-bold uppercase tracking-widest text-sm">Appel direct</span>
                <h2 className="text-5xl font-black text-[#111111] tracking-tight">Le plus rapide : appeler le magasin.</h2>
                <p className="text-[#111111]/50 font-medium max-w-xl mt-4">
                  Les commandes internet sont fermées pour le moment. Préparez votre choix depuis la carte, puis appelez Pizza Chez Vous pour confirmer votre commande en retrait magasin.
                </p>
              </div>

              <motion.div 
                className="paper-card rounded-[2.5rem] p-10 shadow-2xl relative bg-white border border-black/5 flex flex-col items-center text-center group"
                initial="initial" whileInView="whileInView" variants={popIn(0)}
              >
                 <span className="text-4xl md:text-5xl font-mono font-black text-[#111111] mb-8">{store.formattedPhone}</span>
                 <a href={`tel:${store.phone}`} className="yellow-button w-full py-6 rounded-2xl flex items-center justify-center gap-4 font-black text-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                    <Phone size={28} />
                    <span>Appeler maintenant</span>
                 </a>
                 <p className="mt-6 text-[10px] font-black text-[#111111]/30 uppercase tracking-[0.2em]">Le magasin confirme la commande, le prix final et le retrait.</p>
                 <div className="tape-corner absolute -top-4 -right-4 bg-black/5 w-20 h-10 rotate-45"></div>
              </motion.div>
            </div>

            <motion.div 
              className="lg:col-span-6"
              initial="initial" whileInView="whileInView" variants={fadeUp(0.2)}
            >
              <div className="paper-card rounded-[2.5rem] p-10 bg-white border border-black/5 shadow-xl relative overflow-hidden">
                <h3 className="text-2xl font-black text-[#111111] mb-8 pb-4 border-b-2 border-dashed border-black/5">Avant d'appeler</h3>
                <div className="flex flex-col gap-6">
                  {[
                    "Choisissez votre pizza ou formule",
                    "Notez la base crème ou tomate",
                    "Précisez le format si besoin",
                    "Indiquez les accompagnements",
                    "Confirmez le retrait magasin"
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-4"
                      variants={fadeUp(0.1 * i)}
                    >
                      <div className="w-6 h-6 rounded-full bg-[#00843D] flex items-center justify-center text-white shrink-0 shadow-sm">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="font-bold text-[#111111]/70">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E30613]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="tape-left absolute -bottom-5 -left-5 bg-black/10 w-24 h-10 -rotate-12 opacity-30"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — RETRAIT MAGASIN SECTION */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Retrait magasin</span>
          <h2 className="text-5xl font-black text-[#111111] tracking-tight">Commandez, puis récupérez à Doudeville.</h2>
          <p className="text-[#111111]/50 font-medium max-w-2xl mt-4">
            Pizza Chez Vous fonctionne en retrait magasin. L’appel permet de confirmer votre choix et les informations pratiques.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "1. Choisissez", d: "Parcourez la carte, les pizzas à composer, les menus ou les offres.", i: Pizza, c: "#E30613" },
            { t: "2. Appelez", d: "Contactez le magasin pour confirmer votre commande.", i: Phone, c: "#FFD21A" },
            { t: "3. Retirez", d: "Récupérez votre commande directement au magasin de Doudeville.", i: Store, c: "#00843D" }
          ].map((item, i) => (
             <motion.div 
              key={i}
              className="paper-card rounded-[2rem] p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300 relative bg-white border border-black/5"
              initial="initial" whileInView="whileInView" variants={fadeUp(i * 0.1)}
             >
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-xl" style={{ backgroundColor: `${item.c}15`, color: item.c }}>
                  <item.i size={36} />
                </div>
                <h4 className="text-2xl font-black text-[#111111] mb-4">{item.t}</h4>
                <p className="text-[#111111]/50 font-medium text-sm leading-relaxed">{item.d}</p>
                <div className={`absolute top-0 right-0 w-8 h-8 opacity-20 pointer-events-none ${i % 2 === 0 ? 'bg-black/10 rotate-45 translate-x-4 -translate-y-4' : ''}`}></div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — PREPARE YOUR CALL SECTION */}
      <section className="bg-[#111111] py-28 md:py-36 px-5 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-start gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[#FFD21A] font-bold uppercase tracking-widest text-sm">Préparer votre commande</span>
                <h2 className="text-5xl font-black text-white tracking-tight leading-none">Un appel plus simple avec les bonnes infos.</h2>
                <p className="text-white/50 font-medium mt-6 leading-relaxed">
                  Pour gagner du temps, préparez votre choix avant d’appeler : pizza, base, format, accompagnements et boissons.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="/menu" className="yellow-button px-8 py-4 rounded-xl font-black text-lg shadow-xl shrink-0">
                  <span>Voir toute la carte</span>
                </a>
                <a href="/composer" className="px-8 py-4 rounded-xl border-2 border-white/10 text-white font-black text-lg hover:bg-white/5 transition-all shrink-0">
                  <span>Composer ma pizza</span>
                </a>
              </div>
            </div>

            <motion.div 
              className="lg:col-span-7"
              initial="initial" whileInView="whileInView" variants={fadeUp(0)}
            >
              <div className="paper-card rounded-[2.5rem] p-8 md:p-12 bg-[#F8F4EA] relative group">
                <div className="flex items-center justify-between mb-8 border-b-2 border-dashed border-[#111111]/10 pb-6">
                  <h3 className="text-2xl font-black text-[#111111]">Ma commande à communiquer</h3>
                  <div className="bg-[#00843D]/20 text-[#00843D] px-3 py-1 rounded-full text-[10px] font-black uppercase">Modèle prêt</div>
                </div>

                <div className="flex flex-wrap gap-3 mb-10">
                  {[
                    "Pizza ou menu choisi", "Base crème ou tomate", "Format", 
                    "Accompagnements", "Desserts", "Boissons", "Nom", "Heure de retrait"
                  ].map((chip, i) => (
                    <motion.span 
                      key={chip} 
                      className="px-4 py-2 bg-black/5 rounded-lg text-xs font-bold text-[#111111]/40 border border-black/5"
                      variants={popIn(i * 0.05)}
                    >
                      {chip}
                    </motion.span>
                  ))}
                </div>

                <button 
                  onClick={handleCopy}
                  className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-black text-lg transition-all ${
                    copySuccess ? "bg-[#00843D] text-white" : "bg-[#111111] text-white hover:bg-black"
                  }`}
                >
                  {copySuccess ? <CheckCircle2 size={24} /> : <Copy size={24} />}
                  <span>{copySuccess ? "Modèle copié !" : "Copier un modèle de message"}</span>
                </button>

                <p className="mt-6 text-[10px] text-center font-black text-[#111111]/20 uppercase tracking-[0.2em] italic">
                  "Bonjour Pizza Chez Vous, je souhaite commander..."
                </p>

                <div className="tape-corner absolute top-0 -right-2 bg-black/10 w-24 h-10 rotate-12 opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — MAP / LOCATION PLACEHOLDER SECTION */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Localisation</span>
              <h2 className="text-5xl font-black text-[#111111] tracking-tight leading-none">Vos magasins Pizza Chez Vous.</h2>
              <p className="text-[#111111]/50 font-medium mt-6 leading-relaxed">
                Plusieurs magasins pour mieux vous servir. Retrait de vos pizzas, calzones et menus directement au comptoir.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {store.locations?.map((loc) => (
                <div key={loc.city} className="paper-card p-6 rounded-[2rem] bg-white border border-black/5 flex flex-col gap-4 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-4 text-[#111111]">
                    <Store className="text-[#E30613]" size={28} />
                    <div>
                      <div className="font-black text-xl leading-tight">{loc.city}</div>
                      {loc.address && <div className="text-[#111111]/40 font-bold text-xs mt-1">{loc.address}</div>}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-[#111111] pt-4 border-t border-dashed border-black/10">
                    <Phone className="text-[#FFD21A]" size={20} />
                    <div className="font-black text-lg">{loc.formattedPhone}</div>
                  </div>
                  <a href={`tel:${loc.phone}`} className="mt-2 text-center bg-[#E30613] text-white py-3 rounded-xl flex items-center justify-center gap-2 font-black text-sm hover:bg-black transition-all">
                    <Phone size={16} />
                    <span>APPELER {loc.city.toUpperCase()}</span>
                  </a>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#E30613]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            className="lg:col-span-7 h-[100%] min-h-[500px] rounded-[2.5rem] bg-[#111111] relative overflow-hidden shadow-2xl border-4 border-white/5"
            initial="initial" whileInView="whileInView" variants={fadeUp(0.2)}
          >
            {/* STYLIZED MAP PLACEHOLDER */}
            <div className="absolute inset-0 opacity-20">
               <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-0 border border-white/5">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-white/5"></div>
                  ))}
               </div>
               <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#E30613]/20 -rotate-12"></div>
               <div className="absolute top-0 left-1/3 w-[2px] h-full bg-[#FFD21A]/10 rotate-6"></div>
               <div className="absolute top-1/4 left-0 w-[4px] h-[4px] rounded-full bg-[#00843D] blur-sm translate-x-40 translate-y-20 scale-[50]"></div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-12">
               {store.locations?.map((loc, i) => (
                 <div key={loc.city} className={`flex flex-col items-center gap-4 relative ${i % 2 === 0 ? '-translate-x-12' : 'translate-x-12'}`}>
                    <div className="w-12 h-12 rounded-full bg-[#E30613] flex items-center justify-center text-white shadow-[0_0_50px_rgba(227,6,19,0.5)] relative z-10">
                       <MapPin size={24} />
                    </div>
                    <div className="bg-white px-6 py-3 rounded-2xl shadow-2xl flex flex-col items-center">
                       <span className="text-[#111111] font-black tracking-tight">{loc.city}</span>
                    </div>
                 </div>
               ))}
            </div>

            <div className="absolute bottom-6 left-6 flex flex-col gap-2">
               <div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl text-white/50 text-[10px] font-black uppercase tracking-widest">
                  Plusieurs adresses en Normandie
               </div>
            </div>
            
            <div className="tape-corner absolute top-6 -right-6 bg-white/10 w-24 h-10 rotate-45"></div>
            <div className="tape-left absolute bottom-6 -left-6 bg-white/10 w-24 h-10 rotate-45"></div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 — QUICK ACCESS MENU SECTION */}
      <section className="flour-paper-bg paper-texture py-24 md:py-32 px-5 md:px-8 border-y-2 border-dashed border-[#111111]/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 mb-16 text-center lg:text-left">
            <span className="text-[#E30613] font-bold uppercase tracking-widest text-sm">Accès rapide</span>
            <h2 className="text-5xl font-black text-[#111111] tracking-tight">Choisissez avant d’appeler.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Voir la carte complète", d: "Pizzas crème, tomate, calzones, pizzinis...", h: "/menu", i: Pizza, c: "#E30613" },
              { t: "Composer ma pizza", d: "Base crème ou tomate, à partir de 7,00 €.", h: "/composer", i: Plus, c: "#FFD21A" },
              { t: "Menus & offres", d: "Pizzinis, menu enfant, moitié-moitié.", h: "/offres", i: Utensils, c: "#00843D" },
              { t: "Produits vedettes", d: "Crousty, Margherita, Calzone Jambon...", h: "/menu#featured", i: Star, c: "#E30613" }
            ].map((card, i) => (
              <a key={i} href={card.h} className="paper-card p-8 rounded-[2rem] flex flex-col bg-white border border-black/5 hover:-translate-y-3 transition-all duration-500 shadow-lg group relative overflow-hidden">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform" style={{ backgroundColor: `${card.c}10`, color: card.c }}>
                  <card.i size={28} />
                </div>
                <h3 className="text-xl font-black text-[#111111] mb-2 leading-tight group-hover:text-[#E30613] transition-colors">{card.t}</h3>
                <p className="text-[#111111]/40 font-bold text-sm leading-relaxed mb-8 flex-1">{card.d}</p>
                <div className="h-1 w-12 bg-black/10 group-hover:w-full group-hover:bg-[#E30613] transition-all duration-500 rounded-full"></div>
                
                {i % 2 === 0 && <div className="tape-corner absolute top-0 -right-2 pointer-events-none opacity-20 scale-75"></div>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — PRACTICAL INFORMATION SECTION */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <motion.div 
          className="paper-card rounded-[2.5rem] p-10 md:p-14 bg-white border-2 border-black/5 shadow-2xl relative overflow-hidden"
          initial="initial" whileInView="whileInView" variants={fadeUp(0)}
        >
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Infos pratiques</span>
            <h2 className="text-4xl font-black text-[#111111] tracking-tight">Ce qu’il faut retenir.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Magasin", d: store.city, i: MapPin },
              { t: "Téléphone", d: store.formattedPhone, i: Phone },
              { t: "Mode de commande", d: store.orderMode, i: Store },
              { t: "Commande internet", d: "Actuellement fermée", i: AlertCircle }
            ].map((info, i) => (
              <div key={i} className="flex flex-col gap-3">
                 <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-[#E30613]">
                    <info.i size={20} />
                 </div>
                 <div className="text-[10px] uppercase font-black tracking-widest text-[#111111]/30">{info.t}</div>
                 <div className="text-lg font-black text-[#111111]">{info.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-12 border-t-2 border-dashed border-black/5 text-[#111111]/30 font-bold text-xs uppercase tracking-widest flex items-center gap-3">
            <Info size={14} />
            <span>Les horaires exacts et l’adresse complète peuvent être précisés par téléphone.</span>
          </div>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD21A]/5 rounded-full blur-[100px] pointer-events-none"></div>
        </motion.div>
      </section>

      {/* SECTION 9 — FAQ CONTACT */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 py-20 pb-32">
        <div className="flex flex-col items-center gap-3 mb-16 text-center">
          <span className="text-[#E30613] font-bold uppercase tracking-widest text-sm">Questions fréquentes</span>
          <h2 className="text-5xl font-black text-[#111111] tracking-tight">Avant d’appeler.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {[
             { q: "Comment commander actuellement ?", a: "Les commandes internet sont actuellement fermées. Vous pouvez appeler directement le magasin Pizza Chez Vous de Doudeville au +33 2 35 96 22 22." },
             { q: "Quel est le numéro du magasin ?", a: `Le numéro indiqué pour le magasin de Doudeville est ${store.formattedPhone}.` },
             { q: "Le retrait se fait où ?", a: `Le retrait de vos commandes se fait directement au magasin Pizza Chez Vous de ${store.city}.` },
             { q: "Puis-je consulter la carte avant d’appeler ?", a: "Absolument. Nous vous conseillons de consulter la page Notre carte ou de préparer votre choix sur la page Composer avant de nous contacter." },
             { q: "Puis-je me faire livrer ?", a: "Le mode de commande actuellement privilégié et indiqué est le retrait magasin (Pickup). Consultez le magasin par téléphone pour plus de détails." },
             { q: "Puis-je commander une pizza à composer ?", a: "Oui. Vous pouvez choisir entre une base crème fraîche et une base tomate, avec les ingrédients de votre choix à partir de 7,00 €." }
          ].map((item, i) => (
            <motion.details 
              key={i} 
              className="paper-card rounded-2xl group overflow-hidden border border-[#111111]/5"
              initial="initial" whileInView="whileInView" variants={fadeUp(i * 0.05)}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h4 className="text-xl font-black text-[#111111] group-hover:text-[#E30613] transition-colors">{item.q}</h4>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#111111]/20 group-hover:text-[#E30613] transition-all group-open:rotate-180">
                  <ChevronDown size={24} />
                </div>
              </summary>
              <div className="px-6 pb-6 pt-0 font-medium text-[#111111]/60 leading-relaxed max-w-2xl">
                {item.a}
              </div>
            </motion.details>
          ))}
        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="px-5 md:px-8 pt-12 pb-36">
        <motion.div 
          className="max-w-7xl mx-auto rounded-[3.5rem] p-10 md:p-20 bg-[#111111] relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-16"
          initial="initial" whileInView="whileInView" variants={fadeUp(0)}
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E30613]/10 rounded-full blur-[150px] pointer-events-none"></div>

          <div className="lg:col-span-7 flex flex-col items-start gap-8 relative z-10 max-w-2xl text-left">
             <div className="yellow-pill flex items-center gap-1.5 px-3 py-1.5 bg-[#FFD21A] text-[#111111] rounded-full text-sm font-black shadow-xl">
               <Phone size={14} />
               <span>Appel conseillé · Retrait magasin</span>
             </div>
             
             <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white leading-none tracking-tight">
               Une pizza vous fait envie ? <span className="text-[#E30613]">Appelez maintenant.</span>
             </h2>
             
             <p className="text-white/50 text-xl font-bold leading-relaxed">
               Consultez la carte, préparez votre choix, puis contactez Pizza Chez Vous pour commander en retrait à Doudeville au {store.formattedPhone}.
             </p>

             <div className="flex flex-wrap items-center gap-6 mt-4 w-full sm:w-auto">
               <a href={`tel:${store.phone}`} className="yellow-button flex items-center justify-center gap-4 px-10 py-6 rounded-2xl font-black text-2xl shadow-xl w-full sm:w-auto">
                 <Phone size={28} />
                 <span>{store.formattedPhone}</span>
               </a>
               <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                 <a href="/menu" className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 text-white font-black hover:bg-white/10 transition-all border border-white/10">
                   <Pizza size={18} />
                   <span>Carte</span>
                 </a>
                 <a href="/composer" className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 text-white font-black hover:bg-white/10 transition-all border border-white/10">
                   <Plus size={18} />
                   <span>Composer</span>
                 </a>
               </div>
             </div>
          </div>

          <div className="lg:col-span-5 relative z-10 hidden lg:block">
             <div className="paper-card rounded-3xl p-10 rotate-[5deg] shadow-2xl flex flex-col gap-6 text-[#111111] bg-white border-2 border-black/5">
                <span className="font-black text-xs uppercase tracking-[0.2em] opacity-30">Commande rapide</span>
                <div className="flex flex-col gap-4">
                  {[
                    { label: "1. Carte", icon: Pizza, color: "#E30613" },
                    { label: "2. Appel", icon: Phone, color: "#FFD21A" },
                    { label: "3. Retrait", icon: Store, color: "#00843D" },
                    { label: "Doudeville", icon: MapPin, color: "#111111" }
                  ].map((chip, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 bg-black/5 rounded-xl font-black text-sm">
                       <chip.icon size={18} style={{ color: chip.color }} />
                       <span>{chip.label}</span>
                    </div>
                  ))}
                </div>
                <div className="tape-corner absolute -bottom-5 -right-5 bg-black/10 w-24 h-10 rotate-12"></div>
             </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};
