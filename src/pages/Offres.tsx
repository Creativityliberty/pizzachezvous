import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Phone, 
  Pizza, 
  Utensils, 
  Heart, 
  Users, 
  Clock, 
  Plus, 
  AlertCircle, 
  ChevronDown,
  ArrowRight,
  Flame,
  Zap
} from "lucide-react";
import { store } from "../data/store";
import { quickOffers, sharingOffers, pizzinis } from "../data/offers";
import { fadeUp, staggerContainer, popIn } from "../lib/animations";

export const Offres = () => {
  return (
    <div className="flex flex-col bg-[#F8F4EA] overflow-x-hidden">
      
      {/* SECTION 1 — HERO MENUS & OFFRES */}
      <section className="relative min-h-[68vh] bg-[#111111] overflow-hidden flex flex-col pt-32 md:pt-40 pb-20 px-5 md:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&q=80&w=2000" 
            alt="Pizza boxes and table" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent"></div>
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#E30613]/10 blur-[120px] rounded-full -translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-1/4 right-0 w-1/3 h-1/3 bg-[#FFD21A]/10 blur-[100px] rounded-full translate-x-1/4"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div 
              className="lg:col-span-7 flex flex-col items-start"
              initial="initial" animate="whileInView" variants={fadeUp(0)} viewport={{ once: true }}
            >
              <div className="green-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold shadow-xl border border-white/10 mb-8">
                <Utensils size={14} />
                <span>Menus & offres · {store.city}</span>
              </div>

              <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] tracking-[-0.06em] font-black font-heading text-[#F8F4EA] mb-8">
                Des <span className="text-[#FFD21A]">formules simples</span> pour toutes les faims.
              </h1>

              <p className="text-lg md:text-xl text-white/70 font-medium max-w-2xl leading-relaxed mb-10">
                Pizzinis, menu enfant, pizzas à composer, moitié-moitié et formats à partager : choisissez vite, appelez, récupérez en magasin.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#offres" className="red-button flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl group">
                  <ShoppingBag size={22} />
                  <span>Voir les offres</span>
                </a>
                <a href={`tel:${store.phone}`} className="liquid-glass-food flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl text-white border border-white/20 transition-all hover:bg-white/10">
                  <Phone size={22} />
                  <span>Appeler le magasin</span>
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-white/40 text-xs font-bold uppercase tracking-widest">
                <span>Retrait magasin</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span>Doudeville</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span>Prix en euros</span>
              </div>
            </motion.div>

            <motion.div 
              className="hidden lg:flex lg:col-span-5 relative justify-end"
              initial="initial" animate="whileInView" variants={popIn(0.3)}
            >
              <div className="relative w-full max-w-[450px] flex flex-col gap-4">
                <div className="bg-[#FFD21A] p-6 rounded-2xl rotate-[-3deg] shadow-2xl relative translate-x-4">
                   <span className="font-black text-[#111111] text-2xl">Menu enfant 6,90 €</span>
                   <div className="tape-corner absolute -top-4 -right-4 bg-black/10 w-12 h-6 rotate-45"></div>
                </div>
                <div className="paper-card p-6 rounded-2xl rotate-[2deg] shadow-2xl relative z-10 -translate-y-4 -translate-x-8">
                   <h3 className="font-black text-lg text-[#E30613]">Formule Pizzini + Potatoes</h3>
                   <span className="font-mono font-black text-2xl text-[#111111]">11,90 €</span>
                   <div className="tape-left absolute -bottom-4 -left-4 bg-black/10 w-12 h-6 -rotate-12"></div>
                </div>
                <div className="bg-[#00843D] p-4 rounded-full shadow-2xl absolute -bottom-10 right-0 rotate-12 text-white font-black text-sm px-6">
                   Retrait magasin
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
            <p className="text-[#111111]/60 font-medium">Pour commander une formule, un menu ou une pizza à partager, appelez directement le magasin de Doudeville.</p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 lg:justify-end">
             <div className="flex flex-col items-center sm:items-end">
                <span className="text-[10px] uppercase font-black tracking-widest text-[#111111]/30">Reprise</span>
                <span className="font-bold text-[#E30613]">{store.nextOnlineOpening}</span>
             </div>
             <a href={`tel:${store.phone}`} className="red-button flex items-center gap-2 px-6 py-3 rounded-xl font-bold group">
               <Phone size={18} />
               <span>{store.formattedPhone}</span>
             </a>
          </div>
        </motion.div>
      </div>

      {/* SECTION 3 — QUICK OFFERS SECTION */}
      <section className="flour-paper-bg paper-texture py-24 md:py-32" id="offres">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col gap-2 mb-16">
            <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Choix rapides</span>
            <h2 className="text-5xl font-black text-[#111111] tracking-tight">Les options faciles à commander.</h2>
            <p className="text-[#111111]/50 font-medium max-w-2xl mt-4">
              Pour manger vite, partager en famille ou compléter votre pizza.
            </p>
          </div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer} initial="initial" whileInView="whileInView"
          >
            {quickOffers.map((offer, i) => (
              <motion.div 
                key={offer.id}
                variants={fadeUp(i * 0.1)}
                className="paper-card rounded-[1.75rem] p-8 flex flex-col group hover:-translate-y-2 transition-all duration-300 relative border border-[#111111]/5 shadow-sm hover:shadow-xl"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-inner ${
                  offer.accent === 'red' ? 'bg-[#E30613]/10 text-[#E30613]' : 
                  offer.accent === 'yellow' ? 'bg-[#FFD21A]/30 text-[#111111]' : 'bg-[#00843D]/10 text-[#00843D]'
                }`}>
                  {offer.icon === 'Sandwich' && <Zap size={28} />}
                  {offer.icon === 'Heart' && <Heart size={28} />}
                  {offer.icon === 'Plus' && <Plus size={28} />}
                  {offer.icon === 'Users' && <Users size={28} />}
                </div>

                <div className="bg-[#FFD21A] text-[#111111] font-mono font-black px-3 py-1 rounded text-lg rotate-[-2deg] mb-6 inline-block w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {offer.price}
                </div>

                <h3 className="text-2xl font-black text-[#111111] mb-3 leading-tight">{offer.title}</h3>
                <p className="text-[#111111]/50 text-sm font-medium leading-relaxed mb-10 flex-1">{offer.description}</p>
                
                <a href={offer.id === 'pizza-composer' ? '/composer' : offer.id === 'moitie-moitie' ? '#partager' : `tel:${store.phone}`} className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-[#111111] hover:text-[#E30613] transition-colors">
                  <span>Choisir</span>
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </a>

                {i % 2 === 0 && <div className="tape-corner absolute top-0 -right-2 pointer-events-none opacity-40 scale-75"></div>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — MENUS & FORMULES SECTION */}
      <section className="py-24 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 mb-16">
            <span className="text-[#E30613] font-bold uppercase tracking-widest text-sm">Menus</span>
            <h2 className="text-5xl font-black text-[#111111] tracking-tight">Formules simples, choix rapide.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="paper-card rounded-[2.5rem] p-10 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden group shadow-xl">
               <div className="w-32 h-32 rounded-3xl bg-[#E30613]/5 flex items-center justify-center text-[#E30613] shrink-0 rotate-3 group-hover:rotate-0 transition-transform">
                  <Zap size={64} />
               </div>
               <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-black text-[#111111] leading-none">Formule Pizzini + Potatoes</h3>
                    <div className="bg-[#FFD21A] px-3 py-1 rounded-lg shadow-sm font-mono font-black text-xl rotate-3">11,90 €</div>
                  </div>
                  <p className="text-[#111111]/60 font-medium mb-8">Un pizzini chaud accompagné de potatoes pour une formule pratique et gourmande.</p>
                  <div className="flex items-center gap-4">
                    <a href={`tel:${store.phone}`} className="red-button px-6 py-3 rounded-xl font-bold">Appeler pour commander</a>
                    <span className="text-[10px] font-black text-[#00843D] uppercase tracking-widest">Retrait magasin</span>
                  </div>
               </div>
               <div className="tape-corner absolute top-4 -right-4 pointer-events-none opacity-40 scale-125"></div>
            </div>

            <div className="paper-card rounded-[2.5rem] p-10 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden group shadow-xl">
               <div className="w-32 h-32 rounded-3xl bg-[#FFD21A]/20 flex items-center justify-center text-[#111111] shrink-0 -rotate-3 group-hover:rotate-0 transition-transform">
                  <Heart size={64} fill="currentColor" />
               </div>
               <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-black text-[#111111] leading-none">Menu enfant</h3>
                    <div className="bg-[#FFD21A] px-3 py-1 rounded-lg shadow-sm font-mono font-black text-xl -rotate-3">6,90 €</div>
                  </div>
                  <p className="text-[#111111]/60 font-medium mb-8">Un menu complet spécialement pensé pour les enfants avec une pizza junior, un Pom'pot et un cookie.</p>
                  <div className="flex items-center gap-4">
                    <a href={`tel:${store.phone}`} className="red-button px-6 py-3 rounded-xl font-bold">Appeler pour commander</a>
                  </div>
               </div>
               <div className="tape-left absolute -bottom-4 -left-4 pointer-events-none opacity-40 scale-125"></div>
            </div>
          </div>
          <p className="mt-12 text-center text-[#111111]/30 font-bold text-sm">Les disponibilités et détails sont confirmés par le magasin lors de l’appel.</p>
        </div>
      </section>

      {/* SECTION 5 — MOITIÉ-MOITIÉ & FORMATS À PARTAGER SECTION */}
      <section className="bg-[#111111] py-28 md:py-36 px-5 md:px-8 relative overflow-hidden" id="partager">
         {/* Background Visuals */}
         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5"></div>
            <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/5"></div>
         </div>

         <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col items-center text-center gap-4 mb-20">
               <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">À partager</span>
               <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black text-white leading-none tracking-tight">Plusieurs envies,<br/><span className="text-[#E30613]">une grande pizza.</span></h2>
               <p className="text-white/50 font-medium max-w-2xl mt-6">
                 Les formats moitié-moitié sont pensés pour partager et varier les plaisirs avec nos pizzas Mega (33cm+), Super Mega et Maxi géantes.
               </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {sharingOffers.map((offer, idx) => (
                <motion.div 
                  key={offer.id}
                  className="paper-card rounded-[2rem] p-8 flex flex-col bg-[#F8F4EA] relative group overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-2xl"
                  initial="initial" whileInView="whileInView" variants={fadeUp(idx * 0.1)}
                >
                  <div className="flex flex-col gap-6 h-full">
                     <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#111111]/20 flex items-center justify-center text-[#111111]/30 mb-4 group-hover:rotate-180 transition-transform duration-700">
                           <Pizza size={24} />
                        </div>
                        <div className={`bg-[#FFD21A] px-3 py-1 rounded font-mono font-black rotate-[${idx % 2 === 0 ? '-3deg' : '3deg'}]`}>{offer.price}</div>
                     </div>
                     <h3 className="text-2xl font-black text-[#111111] leading-tight">{offer.title}</h3>
                     <p className="text-[#111111]/50 font-medium text-sm leading-relaxed flex-1">{offer.description}</p>
                     <a href={`tel:${store.phone}`} className="mt-4 flex items-center gap-2 font-black text-[#E30613] uppercase tracking-widest text-[10px] hover:translate-x-2 transition-transform">
                        <span>Commander</span>
                        <ArrowRight size={14} />
                     </a>
                  </div>
                  <div className={`absolute top-0 -right-2 pointer-events-none opacity-40 ${offer.accent === 'green' ? 'bg-[#00843D]/20' : 'bg-black/10'} w-12 h-20 rotate-12`}></div>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* SECTION 6 — PIZZINIS EXPRESS SECTION */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="flex flex-col gap-2 mb-16">
          <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Pizzinis</span>
          <h2 className="text-5xl font-black text-[#111111] tracking-tight">Le pain chaud tout juste sorti du four.</h2>
          <p className="text-[#111111]/50 font-medium max-w-2xl mt-4">
            Des sandwichs façon Pizza Chez Vous, chauds, généreux et faciles à emporter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pizzinis.map((pizzini, idx) => (
            <motion.div 
              key={pizzini.id}
              className="paper-card rounded-[1.75rem] p-8 flex flex-col group hover:shadow-xl transition-all border border-[#111111]/5"
              initial="initial" whileInView="whileInView" variants={fadeUp(idx * 0.1)}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${
                pizzini.accent === 'yellow' ? 'bg-[#FFD21A]/20 text-[#111111]' : 
                pizzini.accent === 'green' ? 'bg-[#00843D]/10 text-[#00843D]' : 'bg-[#E30613]/10 text-[#E30613]'
              }`}>
                {pizzini.id === 'p-bollywood' ? <Flame size={28} /> : 
                 pizzini.id === 'p-grec' ? <Utensils size={28} /> : 
                 pizzini.id === 'p-nordique' ? <ShoppingBag size={28} /> : <Heart size={28} />}
              </div>
              
              <div className="flex items-baseline gap-2 mb-4">
                <h3 className="text-xl font-black text-[#111111] group-hover:text-[#E30613] transition-colors">{pizzini.title}</h3>
                <span className="bg-[#FFD21A] text-[#111111] font-mono font-black px-2 py-0.5 rounded text-sm rotate-2 shrink-0">{pizzini.price}</span>
              </div>
              
              <p className="text-[#111111]/60 text-sm font-medium leading-relaxed mb-8 flex-1">{pizzini.description}</p>
              
              <a href={`tel:${store.phone}`} className="flex items-center gap-2 font-black text-[#111111] uppercase tracking-widest text-[10px] hover:scale-105 transition-transform group-hover:text-[#E30613]">
                <Phone size={14} />
                <span>Commander</span>
              </a>
              
              {idx % 3 === 0 && <div className="tape-corner absolute top-0 -right-2 pointer-events-none opacity-40 scale-75"></div>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — ENFANTS & PETITES FAIMS SECTION */}
      <section className="flour-paper-bg paper-texture py-24 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            className="lg:col-span-5"
            initial="initial" whileInView="whileInView" variants={popIn(0)}
          >
            <div className="paper-card rounded-[2.5rem] p-12 bg-[#FFD21A] border-none shadow-2xl relative rotate-[-2deg] flex flex-col items-center text-center group">
               <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-[#111111] mb-8 shadow-xl">
                 <Heart size={40} fill="currentColor" />
               </div>
               <h3 className="text-4xl font-black text-[#111111] mb-2 uppercase tracking-tighter italic">Menu enfant</h3>
               <div className="font-mono font-black text-3xl mb-4 text-white drop-shadow-lg">6,90 €</div>
               <p className="text-[#111111]/60 font-bold text-lg mb-10">Pizza Junior croustillante + Pom’pot fruitée + délicieux cookie.</p>
               <a href={`tel:${store.phone}`} className="red-button w-full py-4 rounded-2xl font-black text-xl shadow-xl flex items-center justify-center gap-3">
                 <Phone size={24} />
                 CMD MAGASIN
               </a>
               <div className="tape-corner absolute top-4 -right-4 bg-[#FFD21A] w-12 h-6 rotate-45 border-2 border-[#111111]/10"></div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
               <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Petites faims</span>
               <h2 className="text-5xl font-black text-[#111111] tracking-tight leading-none">Pour les petites<br/>faims aussi.</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
               <div className="paper-card p-6 rounded-2xl flex flex-col group hover:shadow-lg transition-all relative">
                  <div className="flex justify-between items-start mb-4">
                     <h4 className="text-xl font-black text-[#111111]">Pizzini Nutella</h4>
                     <span className="font-mono font-black text-lg text-[#E30613]">4,70 €</span>
                  </div>
                  <p className="text-[#111111]/50 text-sm font-medium mb-6">Le pizzini version sucrée pour une pause réconfortante.</p>
                  <a href={`tel:${store.phone}`} className="mt-auto font-black text-[10px] text-[#111111] uppercase tracking-[0.2em] flex items-center gap-2">
                    <Zap size={14} />
                    <span>Choisir</span>
                  </a>
               </div>
               <div className="paper-card p-6 rounded-2xl flex flex-col group hover:shadow-lg transition-all relative">
                  <div className="flex justify-between items-start mb-4">
                     <h4 className="text-xl font-black text-[#111111]">Calzone Nutella</h4>
                     <span className="font-mono font-black text-lg text-[#E30613]">Dès 5,00 €</span>
                  </div>
                  <p className="text-[#111111]/50 text-sm font-medium mb-6">Une douceur chaude et fondue à partager ou garder pour soi.</p>
                  <a href={`tel:${store.phone}`} className="mt-auto font-black text-[10px] text-[#111111] uppercase tracking-[0.2em] flex items-center gap-2">
                    <Pizza size={14} />
                    <span>Choisir</span>
                  </a>
                  <div className="tape-corner absolute top-0 -right-2 pointer-events-none opacity-40 scale-75"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — COMPLÉTER LE REPAS SECTION */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="flex flex-col gap-2 mb-16 text-center items-center">
          <span className="text-[#E30613] font-bold uppercase tracking-widest text-sm">À côté</span>
          <h2 className="text-5xl font-black text-[#111111] tracking-tight">Ajoutez ce qu’il faut pour compléter.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {/* Accompagnements */}
           <div className="paper-card rounded-[2rem] p-8 md:p-10 flex flex-col border-t-8 border-[#00843D] shadow-xl relative">
              <h3 className="text-2xl font-black text-[#111111] mb-8 flex items-center gap-3">
                 <Zap size={24} className="text-[#00843D]" />
                 Accompagnements
              </h3>
              <div className="flex flex-col gap-5">
                 {[
                   { name: "Camembert x12", price: "8,00 €" },
                   { name: "Camembert x24", price: "14,00 €" },
                   { name: "Mozzarella x12", price: "8,00 €" },
                   { name: "Mozzarella x24", price: "14,00 €" }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between group">
                       <span className="font-black text-sm text-[#111111]/60 group-hover:text-[#111111] transition-colors">{item.name}</span>
                       <div className="h-[1px] flex-1 mx-4 bg-black/5 border-dashed border-b group-hover:scale-x-110 transition-transform origin-left"></div>
                       <span className="font-mono font-black text-sm text-[#E30613]">{item.price}</span>
                    </div>
                 ))}
              </div>
           </div>

           {/* Desserts */}
           <div className="paper-card rounded-[2rem] p-8 md:p-10 flex flex-col border-t-8 border-[#FFD21A] shadow-xl relative rotate-1">
              <h3 className="text-2xl font-black text-[#111111] mb-8 flex items-center gap-3">
                 <Heart size={24} className="text-[#FFD21A]" />
                 Desserts & Glaces
              </h3>
              <div className="flex flex-col gap-5">
                 {[
                   { name: "Calzone Nutella", price: "Dès 5,00 €" },
                   { name: "Pizzini Nutella", price: "4,70 €" },
                   { name: "Tiramisu Spéc./Car.", price: "3,70 €" },
                   { name: "Ben & Jerry's", price: "3,50 €" }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between group">
                       <span className="font-black text-sm text-[#111111]/60 group-hover:text-[#111111] transition-colors">{item.name}</span>
                       <div className="h-[1px] flex-1 mx-4 bg-black/5 border-dashed border-b group-hover:scale-x-110 transition-transform origin-left"></div>
                       <span className="font-mono font-black text-sm text-[#E30613]">{item.price}</span>
                    </div>
                 ))}
              </div>
              <div className="tape-corner absolute top-4 -right-4 pointer-events-none opacity-40 scale-75"></div>
           </div>

           {/* Boissons */}
           <div className="paper-card rounded-[2rem] p-8 md:p-10 flex flex-col border-t-8 border-[#E30613] shadow-xl relative -rotate-1">
              <h3 className="text-2xl font-black text-[#111111] mb-8 flex items-center gap-3">
                 <ShoppingBag size={24} className="text-[#E30613]" />
                 Boissons 33cl
              </h3>
              <div className="flex flex-col gap-5">
                 {[
                   { name: "Coca Cola / Zero", price: "1,50 €" },
                   { name: "Ice Tea / Oasis", price: "1,50 €" },
                   { name: "Orangina", price: "1,50 €" },
                   { name: "Lorina citron", price: "2,90 €" }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between group">
                       <span className="font-black text-sm text-[#111111]/60 group-hover:text-[#111111] transition-colors">{item.name}</span>
                       <div className="h-[1px] flex-1 mx-4 bg-black/5 border-dashed border-b group-hover:scale-x-110 transition-transform origin-left"></div>
                       <span className="font-mono font-black text-sm text-[#E30613]">{item.price}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* SECTION 9 — RECOMMANDATIONS PAR SITUATION SECTION */}
      <section className="bg-[#111111] py-28 md:py-36 px-5 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center gap-4 mb-20">
             <span className="text-[#FFD21A] font-bold uppercase tracking-widest text-sm">Besoin d’une idée ?</span>
             <h2 className="text-5xl font-black text-white leading-tight tracking-tight">Choisissez selon votre moment.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { t: "Repas rapide", r: "Formule Pizzini + Potatoes", p: "11,90 €", i: Clock },
               { t: "Avec les enfants", r: "Menu enfant", p: "6,90 €", i: Heart },
               { t: "À partager", r: "Moitié-moitié", p: "Dès 24,00 €", i: Users },
               { t: "Envie sur mesure", r: "Pizza à composer", p: "Dès 7,00 €", i: Plus }
             ].map((rec, i) => (
                <div key={i} className="paper-card rounded-3xl p-8 flex flex-col bg-[#F8F4EA] border-none shadow-xl hover:-translate-y-2 transition-all relative group">
                   <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center text-[#E30613] mb-6 group-hover:scale-110 transition-transform">
                      <rec.i size={24} />
                   </div>
                   <h4 className="text-[#111111]/30 font-black text-[10px] uppercase tracking-widest mb-2">{rec.t}</h4>
                   <h3 className="text-xl font-black text-[#111111] mb-1">{rec.r}</h3>
                   <div className="text-[#E30613] font-mono font-black text-lg mb-8">{rec.p}</div>
                   
                   <div className="mt-auto flex items-center justify-between">
                     <div className="px-2 py-1 rounded-full bg-[#00843D]/10 text-[8px] font-black uppercase text-[#00843D]">Retrait magasin</div>
                     <ArrowRight size={16} className="text-[#111111]/20 group-hover:text-[#E30613] transition-colors" />
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — ORDER CTA SECTION */}
      <section className="px-5 md:px-8 py-24 md:py-36">
        <motion.div 
          className="max-w-7xl mx-auto rounded-[3.5rem] p-10 md:p-20 bg-[#F8F4EA] relative overflow-hidden shadow-2xl border border-[#111111]/5 flex flex-col lg:flex-row items-center gap-16"
          initial="initial" whileInView="whileInView" variants={fadeUp(0)}
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E30613]/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="lg:col-span-7 flex flex-col items-start gap-8 relative z-10 max-w-2xl">
            <div className="green-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold shadow-xl border border-black/5 bg-white">
              <Zap size={14} />
              <span>Retrait magasin · Doudeville</span>
            </div>
            
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tight font-heading text-[#111111] leading-none">
              Vous avez trouvé<br/><span className="text-[#E30613]">votre formule ?</span>
            </h2>
            
            <p className="text-[#111111]/50 text-xl font-bold leading-relaxed">
              Les commandes internet sont actuellement fermées. Appelez le magasin pour confirmer votre choix, le prix final et le retrait à Doudeville.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-4">
              <a href={`tel:${store.phone}`} className="red-button flex items-center gap-4 px-10 py-6 rounded-2xl font-black text-2xl shadow-xl group">
                <Phone size={28} />
                <span>{store.formattedPhone}</span>
              </a>
              <a href="/menu" className="flex items-center gap-2 font-black text-[#111111]/40 uppercase tracking-widest text-xs hover:text-[#111111] transition-colors">
                <Pizza size={16} />
                <span>Voir toute la carte</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative z-10 w-full max-w-[350px]">
             <div className="paper-card rounded-3xl p-8 rotate-[3deg] shadow-2xl flex flex-col gap-6 text-[#111111] bg-white">
                <span className="font-black text-xs uppercase tracking-[0.2em] opacity-40">Ma formule</span>
                <div className="flex flex-col gap-3">
                   <div className="flex items-center justify-between text-sm font-black p-2 bg-black/5 rounded-lg border border-black/5">
                      <span>Pizzini Express</span>
                      <Zap size={14} className="text-[#FFD21A]" />
                   </div>
                   <div className="flex items-center justify-between text-sm font-black p-2 bg-black/5 rounded-lg border border-black/5">
                      <span>Menu enfant</span>
                      <Heart size={14} className="text-[#E30613]" />
                   </div>
                   <div className="flex items-center justify-between text-sm font-black p-2 bg-black/5 rounded-lg border border-black/5">
                      <span>Moitié-moitié</span>
                      <Users size={14} className="text-[#00843D]" />
                   </div>
                </div>
                <div className="tape-left absolute bottom-10 -right-4 bg-[#FFD21A] w-20 h-8 rotate-[70deg] opacity-50"></div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 11 — FAQ OFFRES */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="flex flex-col items-center gap-3 mb-16 text-center">
          <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Questions fréquentes</span>
          <h2 className="text-5xl font-black text-[#111111] tracking-tight">Avant de choisir.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { q: "Quelles formules sont proposées ?", a: "La carte propose notamment une Formule Pizzini + Potatoes à 11,90 € et un Menu enfant complet à 6,90 €." },
            { q: "Puis-je commander une moitié-moitié ?", a: "Oui. Plusieurs formats moitié-moitié sont proposés en tailles Mega (33cm+), Super Mega et Maxi géante." },
            { q: "Les offres sont-elles commandables en ligne ?", a: "Les commandes internet sont actuellement fermées. Vous pouvez appeler le magasin pour commander." },
            { q: "Le retrait se fait où ?", a: `Le retrait se fait directement au magasin Pizza Chez Vous de ${store.city}.` },
            { q: "Puis-je composer ma pizza ?", a: "Oui. Nous proposons une base crème fraîche à composer et une base tomate à composer, à partir de 7,00 €." },
            { q: "Les prix sont-ils définitifs ?", a: "Les prix affichés sont ceux de la carte. Pour les produits ‘à partir de’, le prix final dépend des options ou du format choisi lors de l'appel." }
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

    </div>
  );
};
