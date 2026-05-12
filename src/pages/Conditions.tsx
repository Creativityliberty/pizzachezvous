import { motion } from "framer-motion";
import { 
  Phone, 
  Pizza, 
  Store, 
  Info, 
  AlertCircle, 
  ShoppingBag, 
  Clock, 
  HeartPulse, 
  ChevronDown,
  Euro,
  Utensils,
  Leaf,
  CupSoda
} from "lucide-react";
import { store } from "../data/store";
import { infoBlocks } from "../data/infoBlocks";
import { conditionsFaq } from "../data/conditions";
import { fadeUp, popIn, staggerContainer } from "../lib/animations";

export const Conditions = () => {
  return (
    <div className="flex flex-col bg-[#F8F4EA] overflow-x-hidden">
      
      {/* SECTION 1 — INFORMATIONS HERO */}
      <section className="relative min-h-[62vh] bg-[#111111] overflow-hidden flex flex-col pt-32 md:pt-40 pb-20 px-5 md:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000" 
            alt="Pizza menu background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-[#E30613]/10 blur-[120px] rounded-full translate-x-1/4"></div>
          <div className="absolute top-1/4 left-0 w-1/4 h-1/3 bg-[#FFD21A]/5 blur-[100px] rounded-full -translate-x-1/4"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <motion.div 
              className="lg:col-span-7 flex flex-col items-start"
              initial="initial" animate="whileInView" variants={fadeUp(0)} viewport={{ once: true }}
            >
              <div className="green-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold shadow-xl border border-white/10 mb-8 bg-[#00843D] text-white">
                <Info size={14} />
                <span>Informations utiles</span>
              </div>

              <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.88] tracking-[-0.06em] font-black font-heading text-[#F8F4EA] mb-8">
                Tout savoir <span className="relative inline-block">avant<span className="absolute bottom-2 left-0 w-full h-2 bg-[#E30613]/60 -z-10 rotate-1"></span></span> de <span className="text-[#FFD21A]">commander</span>.
              </h1>

              <p className="text-lg md:text-xl text-white/70 font-medium max-w-2xl leading-relaxed mb-10">
                Retrait magasin, appel, prix à partir de, disponibilité des produits et informations alimentaires : retrouvez les points importants avant de contacter Pizza Chez Vous.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href={`tel:${store.phone}`} className="yellow-button flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl group">
                  <Phone size={22} />
                  <span>Appeler le magasin</span>
                </a>
                <a href="/menu" className="red-button flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl text-white shadow-xl">
                  <Pizza size={22} />
                  <span>Voir la carte</span>
                </a>
                <a href="/contact" className="px-8 py-4 rounded-full border-2 border-white/10 text-white font-bold text-xl hover:bg-white/5 transition-all">
                  <span>Contact</span>
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-white/40 text-xs font-bold uppercase tracking-widest">
                <span>Pizza Chez Vous</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span>Doudeville</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span className="text-[#00843D]">Retrait magasin</span>
              </div>
            </motion.div>

            <motion.div 
              className="hidden lg:flex lg:col-span-5 relative justify-end"
              initial="initial" animate="whileInView" variants={popIn(0.3)}
            >
              <div className="relative w-full max-w-[400px]">
                 <div className="paper-card p-8 rounded-[2.5rem] rotate-[-2deg] shadow-2xl flex flex-col gap-4 bg-white border-2 border-black/5 relative overflow-hidden">
                    <div className="flex flex-col gap-3">
                       <div className="bg-[#00843D] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase self-start">Retrait magasin</div>
                       <div className="bg-[#E30613] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase self-start">Commande internet fermée</div>
                       <div className="bg-[#FFD21A] text-[#111111] px-3 py-1 rounded-full text-[10px] font-black uppercase self-start">Prix à partir de</div>
                       <div className="bg-[#111111] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase self-start">Appelez le magasin</div>
                    </div>
                    <div className="mt-6 pt-6 border-t-2 border-dashed border-black/5 flex justify-center">
                       <ShoppingBag size={48} className="text-[#111111]/10" />
                    </div>
                    <div className="tape-corner absolute -top-4 -right-4 bg-black/10 w-16 h-8 rotate-45"></div>
                    <div className="tape-corner absolute -bottom-4 -left-4 bg-black/10 w-16 h-8 rotate-45"></div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — QUICK SUMMARY STRIP */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 -mt-10 relative z-20">
        <motion.div 
          className="paper-card rounded-[1.75rem] p-6 lg:p-8 bg-white shadow-2xl border border-black/5 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="initial" animate="whileInView" variants={staggerContainer}
        >
          {[
            { t: "Commande", d: "Internet fermé, appel conseillé.", i: Phone, c: "#E30613" },
            { t: "Retrait", d: "Retrait magasin à Doudeville.", i: Store, c: "#00843D" },
            { t: "Prix", d: "Certains prix sont indiqués 'à partir de'.", i: Euro, c: "#FFD21A" },
            { t: "Infos alimentaires", d: "Allergènes à vérifier auprès du magasin.", i: Info, c: "#E30613" }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp(i * 0.1)} className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm" style={{ backgroundColor: `${item.c}15`, color: item.c }}>
                  <item.i size={20} />
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#111111]/30">{item.t}</span>
                  <span className="font-bold text-[#111111]/70 text-sm leading-tight">{item.d}</span>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SECTION 3 — ONLINE ORDERING & PHONE ORDERS */}
      <section className="flour-paper-bg paper-texture py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[#E30613] font-bold uppercase tracking-widest text-sm">Commande</span>
                <h2 className="text-5xl font-black text-[#111111] tracking-tight">Commandes internet fermées ? Appelez le magasin.</h2>
                <p className="text-[#111111]/50 font-medium max-w-xl mt-4">
                  Lorsque les commandes internet sont fermées, vous pouvez contacter directement le magasin Pizza Chez Vous de Doudeville pour commander ou obtenir une information.
                </p>
              </div>

              <motion.div 
                className="paper-card rounded-[2.5rem] p-10 bg-white border border-black/5 shadow-2xl relative"
                initial="initial" whileInView="whileInView" variants={popIn(0)}
              >
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-full bg-[#E30613]/10 flex items-center justify-center text-[#E30613]">
                      <AlertCircle size={24} />
                   </div>
                   <h3 className="text-2xl font-black text-[#111111]">Statut actuel</h3>
                </div>
                <p className="text-lg font-bold text-[#111111]/70 mb-6">{store.closedMessage}</p>
                <div className="flex items-center gap-3 mb-8">
                   <span className="text-[10px] uppercase font-black tracking-widest text-[#111111]/30">Prochaine ouverture</span>
                   <span className="bg-[#FFD21A] text-[#111111] font-black px-3 py-1 rounded-lg text-sm">{store.nextOnlineOpening}</span>
                </div>
                <a href={`tel:${store.phone}`} className="red-button w-full py-5 rounded-2xl flex items-center justify-center gap-4 font-black text-xl shadow-xl transition-all hover:scale-[1.02]">
                   <Phone size={24} />
                   <span>Appeler {store.formattedPhone}</span>
                </a>
                <div className="tape-corner absolute -top-4 -right-4 bg-black/5 w-20 h-10 rotate-45"></div>
              </motion.div>
            </div>

            <motion.div 
              className="lg:col-span-6"
              initial="initial" whileInView="whileInView" variants={fadeUp(0.2)}
            >
              <div className="paper-card rounded-[2.5rem] p-10 bg-white border border-black/5 shadow-xl relative">
                <h3 className="text-2xl font-black text-[#111111] mb-8 pb-4 border-b-2 border-dashed border-black/5">Comment faire ?</h3>
                <div className="flex flex-col gap-6">
                  {[
                    "Consultez la carte",
                    "Choisissez votre pizza ou menu",
                    "Appelez le magasin",
                    "Confirmez votre retrait"
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-4"
                      variants={fadeUp(0.1 * i)}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#00843D] flex items-center justify-center text-white shrink-0 shadow-sm font-black text-xs">
                        {i + 1}
                      </div>
                      <span className="font-bold text-[#111111]/70 text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-10 pt-10 border-t-2 border-[#FFD21A]/20">
                   <p className="text-xs font-bold text-[#111111]/40 leading-relaxed italic">
                     "Le site n'envoie pas directement votre commande. L'appel au magasin est l'étape finale qui valide le prix et le retrait."
                   </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PICKUP / RETRAIT MAGASIN */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 pb-32">
        <div className="flex flex-col items-center text-center gap-2 mb-16">
          <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Retrait magasin</span>
          <h2 className="text-5xl font-black text-[#111111] tracking-tight">Le mode indiqué : retrait magasin.</h2>
          <p className="text-[#111111]/50 font-medium max-w-2xl mt-4">
            Pizza Chez Vous est présenté ici avec un mode de commande en retrait magasin. Aucune information de livraison n’a été fournie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { t: "Magasin", d: "Pizza Chez Vous · Doudeville", i: Store, c: "#00843D" },
            { t: "Commande", d: "Par téléphone si internet est fermé.", i: Phone, c: "#E30613" },
            { t: "Retrait", d: "Le retrait est confirmé avec le magasin.", i: ShoppingBag, c: "#FFD21A" }
          ].map((item, i) => (
             <motion.div 
              key={i}
              className="paper-card rounded-[2rem] p-8 flex flex-col items-center text-center group bg-white border border-black/5 hover:-translate-y-2 transition-all relative"
              initial="initial" whileInView="whileInView" variants={fadeUp(i * 0.1)}
             >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg" style={{ backgroundColor: `${item.c}15`, color: item.c }}>
                  <item.i size={28} />
                </div>
                <h4 className="text-xl font-black text-[#111111] mb-2">{item.t}</h4>
                <p className="text-[#111111]/50 font-bold text-sm leading-relaxed">{item.d}</p>
                <div className={`absolute top-0 ${i % 2 === 0 ? 'right-0' : 'left-0'} w-8 h-8 opacity-10 pointer-events-none bg-black/10 rotate-45 translate-x-4 -translate-y-4`}></div>
             </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-[#111111]/30 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
           <Info size={14} />
           <span>L’adresse exacte et les horaires complets peuvent être ajoutés dès qu’ils sont fournis.</span>
        </div>
      </section>

      {/* SECTION 5 — PRICES & “À PARTIR DE” */}
      <section className="bg-[#111111] py-28 md:py-36 px-5 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 flex flex-col items-start gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[#FFD21A] font-bold uppercase tracking-widest text-sm">Prix</span>
                <h2 className="text-5xl font-black text-white tracking-tight leading-tight">Que signifie <span className="text-[#FFD21A]">‘à partir de’</span> ?</h2>
                <p className="text-white/50 font-medium mt-6 leading-relaxed max-w-xl">
                  Certains produits de la carte affichent un prix de départ. Le prix final peut dépendre du format, de la taille, de la version choisie ou des options.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { l: "Pizza à composer", p: "7,00 €" },
                  { l: "Pizza Crousty", p: "12,00 €" },
                  { l: "Calzone Jambon", p: "9,00 €" },
                  { l: "Calzone Nutella", p: "5,00 €" }
                ].map((ex, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
                    <span className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">{ex.l}</span>
                    <span className="text-[#FFD21A] font-mono font-black text-xl tracking-tighter">À partir de {ex.p}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              className="lg:col-span-6"
              initial="initial" whileInView="whileInView" variants={fadeUp(0)}
            >
              <div className="paper-card rounded-[2.5rem] p-10 md:p-14 bg-[#F8F4EA] relative group border-4 border-white/5">
                <div className="flex flex-col items-center text-center gap-6">
                   <div className="w-20 h-20 rounded-full bg-[#FFD21A]/10 flex items-center justify-center text-[#111111]">
                      <Euro size={40} />
                   </div>
                   <h3 className="text-3xl font-black text-[#111111]">Prix final</h3>
                   <p className="text-[#111111]/60 font-bold leading-relaxed max-w-sm">
                      Le magasin confirme le prix final lors de votre commande par téléphone.
                   </p>
                   <a href="/menu" className="yellow-button px-10 py-5 rounded-2xl font-black text-xl shadow-xl w-full">
                      Voir toute la carte
                   </a>
                </div>
                <div className="tape-corner absolute -top-4 -right-10 bg-black/10 w-32 h-10 rotate-12 opacity-40"></div>
                <div className="tape-corner absolute -bottom-4 -left-10 bg-black/10 w-32 h-10 rotate-12 opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — PRODUCTS, INGREDIENTS & AVAILABILITY */}
      <section className="flour-paper-bg paper-texture py-24 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-2 mb-16 items-center text-center">
            <span className="text-[#E30613] font-bold uppercase tracking-widest text-sm">Produits</span>
            <h2 className="text-5xl font-black text-[#111111] tracking-tight">Carte, ingrédients et disponibilités.</h2>
            <p className="text-[#111111]/50 font-medium max-w-2xl mt-4">
               Pizza Chez Vous propose pizzas, calzones, pizzinis, accompagnements, desserts, glaces, boissons et menus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Carte généreuse", d: "Pizzas crème fraîche, pizzas sauce tomate, pizzas à composer, moitié-moitié, calzones et pizzinis.", i: Pizza, c: "#E30613" },
              { t: "Ingrédients", d: "Les ingrédients affichés sur le site aident à choisir, mais peuvent être confirmés lors de l’appel.", i: Utensils, c: "#FFD21A" },
              { t: "Disponibilité", d: "Certains produits peuvent dépendre du moment, du format ou de la disponibilité en magasin.", i: Clock, c: "#00843D" },
              { t: "Produits frais & locaux", d: "Pizza Chez Vous indique privilégier des produits frais et locaux ou certifiés.", i: Leaf, c: "#00843D" },
              { t: "Desserts & boissons", d: "Desserts, glaces, boissons et menus peuvent compléter votre commande.", i: CupSoda, c: "#E30613" },
              { t: "À composer", d: "Les pizzas à composer existent en base crème fraîche et base tomate, à partir de 7,00 €.", i: Plus, c: "#FFD21A" }
            ].map((card, i) => (
              <motion.div 
                key={i} 
                className="paper-card p-8 rounded-[2rem] flex flex-col bg-white border border-black/5 hover:-translate-y-3 transition-all duration-500 shadow-lg group relative"
                initial="initial" whileInView="whileInView" variants={fadeUp(i * 0.1)}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-inner" style={{ backgroundColor: `${card.c}10`, color: card.c }}>
                  <card.i size={24} />
                </div>
                <h3 className="text-xl font-black text-[#111111] mb-3">{card.t}</h3>
                <p className="text-[#111111]/40 font-bold text-sm leading-relaxed">{card.d}</p>
                <div className="tape-corner absolute top-0 -right-2 pointer-events-none opacity-10 rotate-45 scale-75"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — ALLERGENS & FOOD INFORMATION */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 pb-32">
        <motion.div 
          className="paper-card rounded-[2.5rem] p-8 md:p-14 bg-white border-l-8 border-[#FFD21A] shadow-2xl relative overflow-hidden"
          initial="initial" whileInView="whileInView" variants={fadeUp(0)}
        >
          <div className="flex flex-col gap-2 mb-10">
            <span className="text-[#FFD21A] font-black uppercase tracking-widest text-sm bg-black px-2 py-1 self-start rounded">Alimentaire</span>
            <h2 className="text-4xl font-black text-[#111111] tracking-tight mt-4">Allergènes : demandez confirmation au magasin.</h2>
            <p className="text-[#111111]/60 font-bold mt-4 max-w-3xl leading-relaxed">
              Si vous avez une allergie, une intolérance ou une contrainte alimentaire, contactez directement Pizza Chez Vous avant de commander. Les informations d’allergènes détaillées n’ont pas été fournies ici.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { t: "Allergies", d: "Signalez votre allergie ou intolérance lors de l’appel.", i: AlertCircle, c: "#E30613" },
              { t: "Ingrédients", d: "Certains produits contiennent fromage, gluten, viande, poisson ou autres.", i: Info, c: "#111111" },
              { t: "Confirmation", d: "Le magasin est le seul interlocuteur pour confirmer la composition exacte.", i: Phone, c: "#00843D" }
            ].map((card, i) => (
              <div key={i} className="flex flex-col gap-4 p-6 bg-black/5 rounded-2xl border border-black/5">
                 <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm" style={{ color: card.c }}>
                    <card.i size={20} />
                 </div>
                 <h4 className="text-lg font-black text-[#111111]">{card.t}</h4>
                 <p className="text-sm font-bold text-[#111111]/40 leading-relaxed">{card.d}</p>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 right-0 p-8 opacity-5">
             <HeartPulse size={120} />
          </div>
        </motion.div>
      </section>

      {/* SECTION 8 — HEALTH NOTE */}
      <section className="bg-[#111111] py-20 md:py-24 px-5 md:px-8 border-y-2 border-dashed border-white/5">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
           <div className="w-16 h-16 rounded-full bg-[#E30613]/10 flex items-center justify-center text-[#E30613]">
              <HeartPulse size={36} />
           </div>
           <h2 className="text-3xl font-black text-white tracking-tight uppercase">Une note santé</h2>
           <p className="text-2xl md:text-3xl font-black text-[#F8F4EA] bg-[#E30613] px-6 py-4 rotate-[-1deg] shadow-2xl">
              Pour votre santé, pratiquez une activité physique régulière — www.mangerbouger.fr
           </p>
        </div>
      </section>

      {/* SECTION 9 — FAQ INFORMATIONS UTILES */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="flex flex-col items-center gap-3 mb-16 text-center">
          <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Questions fréquentes</span>
          <h2 className="text-5xl font-black text-[#111111] tracking-tight">Avant de commander.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {conditionsFaq.map((item, i) => (
            <motion.details 
              key={i} 
              className="paper-card rounded-2xl group overflow-hidden border border-[#111111]/5 bg-white shadow-sm"
              initial="initial" whileInView="whileInView" variants={fadeUp(i * 0.05)}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h4 className="text-xl font-black text-[#111111] group-hover:text-[#E30613] transition-colors">{item.q}</h4>
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-[#111111]/20 group-hover:text-[#E30613] transition-all group-open:rotate-180">
                  <ChevronDown size={24} />
                </div>
              </summary>
              <div className="px-6 pb-6 pt-0 font-bold text-[#111111]/50 leading-relaxed max-w-2xl">
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
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00843D]/10 rounded-full blur-[150px] pointer-events-none"></div>

          <div className="lg:col-span-7 flex flex-col items-start gap-8 relative z-10 max-w-2xl text-left">
             <div className="yellow-pill flex items-center gap-1.5 px-3 py-1.5 bg-[#FFD21A] text-[#111111] rounded-full text-sm font-black shadow-xl">
               <Info size={14} />
               <span>Besoin d’une info ?</span>
             </div>
             
             <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black text-white leading-none tracking-tight">
               Un doute avant de commander ? <span className="text-[#FFD21A]">Appelez Pizza Chez Vous.</span>
             </h2>
             
             <p className="text-white/50 text-xl font-bold leading-relaxed">
               Consultez la carte, préparez votre choix, puis contactez le magasin de Doudeville pour confirmer votre commande en retrait.
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
                 <a href="/contact" className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 text-white font-black hover:bg-white/10 transition-all border border-white/10">
                   <Store size={18} />
                   <span>Contact</span>
                 </a>
               </div>
             </div>
          </div>

          <div className="lg:col-span-5 relative z-10 hidden lg:block">
             <div className="paper-card rounded-3xl p-10 rotate-[4deg] shadow-2xl flex flex-col gap-6 text-[#111111] bg-white border-2 border-black/5">
                <span className="font-black text-xs uppercase tracking-[0.2em] opacity-30">Infos à retenir</span>
                <div className="flex flex-col gap-4">
                  {[
                    "Appel magasin", "Retrait", "Doudeville", "Prix à confirmer", "Allergènes à demander"
                  ].map((chip, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 bg-black/5 rounded-xl font-black text-sm">
                       <Info size={18} className="text-[#E30613]" />
                       <span>{chip}</span>
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
