import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "../components/layout/SEO";
import { 
  Pizza, 
  Plus, 
  Phone, 
  AlertCircle, 
  CheckCircle2, 
  Copy, 
  Utensils, 
  Flame, 
  ChevronDown, 
  ArrowRight,
  Info
} from "lucide-react";
import { store } from "../data/store";
import { bases, sizes, ingredientGroups, PizzaBase, PizzaSize } from "../data/composer";
import { createPizzaSummary, ComposerState } from "../lib/createPizzaSummary";
import { fadeUp, popIn, staggerContainer } from "../lib/animations";

export const Composer = () => {
  const [selectedBase, setSelectedBase] = useState<PizzaBase | undefined>(undefined);
  const [selectedSize, setSelectedSize] = useState<PizzaSize | undefined>(sizes[1]); // Default to Classique
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [remarks, setRemarks] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredient) 
        ? prev.filter(i => i !== ingredient) 
        : [...prev, ingredient]
    );
  };

  const composerState: ComposerState = {
    base: selectedBase,
    size: selectedSize,
    ingredients: selectedIngredients,
    remarks
  };

  const summary = useMemo(() => createPizzaSummary(composerState), [composerState]);

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const applyRecipe = (baseId: "creme" | "tomate", ingredients: string[]) => {
    const base = bases.find(b => b.id === baseId);
    setSelectedBase(base);
    setSelectedIngredients(ingredients);
    const element = document.getElementById("composer");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col bg-[#F8F4EA] overflow-x-hidden">
      <SEO 
        title="Composez votre pizza" 
        description="Créez votre pizza sur mesure : base tomate ou crème, choisissez vos ingrédients préférés et commandez par téléphone à Pizza Chez Vous Doudeville."
      />
      
      {/* SECTION 1 — COMPOSER HERO */}
      <section className="relative min-h-[70vh] bg-[#111111] overflow-hidden flex flex-col pt-32 md:pt-40 pb-20 px-5 md:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fm=webp&fit=crop&q=80&w=2000" 
            alt="Pizza dough" 
            className="w-full h-full object-cover opacity-30"
            fetchPriority="high"
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
                <Pizza size={14} />
                <span>Composez votre pizza · {store.city}</span>
              </div>

              <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.85] tracking-[-0.06em] font-black font-heading text-[#F8F4EA] mb-8">
                Base <span className="text-[#FFD21A]">crème</span> ou base <span className="text-[#E30613]">tomate</span>, composez votre envie.
              </h1>

              <p className="text-lg md:text-xl text-white/70 font-medium max-w-2xl leading-relaxed mb-10">
                Choisissez votre base, préparez votre composition, puis appelez le magasin pour commander en retrait à Doudeville.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#composer" className="red-button flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl group">
                  <Plus size={22} />
                  <span>Commencer ma pizza</span>
                </a>
                <a href="/menu" className="liquid-glass-food flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl text-white border border-white/20 transition-all hover:bg-white/10">
                  <ArrowRight size={22} />
                  <span>Voir la carte</span>
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-white/40 text-xs font-bold uppercase tracking-widest">
                <span>Dès 7,00 €</span>
                <span className="w-1 h-1 rounded-full bg-white/20"></span>
                <span>Retrait Doudeville</span>
              </div>
            </motion.div>

            <motion.div 
              className="hidden lg:flex lg:col-span-5 relative justify-end"
              initial="initial" animate="whileInView" variants={popIn(0.3)}
            >
              <div className="relative w-full max-w-[450px] aspect-square">
                 <div className="absolute inset-0 bg-white/5 rounded-full border border-white/10 animate-pulse"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1613564834361-9436948817d1?auto=format&fm=webp&fit=crop&q=80&w=800" 
                   alt="Pizza preview" 
                   className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(227,6,19,0.3)] rotate-12" 
                   loading="eager"
                 />
                 
                 <div className="paper-card p-4 absolute top-0 -left-10 rotate-[-12deg] shadow-xl">
                   <span className="font-black text-[#111111]">Base crème</span>
                 </div>
                 <div className="paper-card p-4 absolute bottom-20 -right-10 rotate-[8deg] shadow-xl">
                   <span className="font-black text-[#E30613]">Sauce tomate</span>
                 </div>
                 <div className="absolute top-1/2 -right-4 bg-[#FFD21A] p-4 rounded-xl shadow-2xl rotate-[15deg] font-mono font-black text-2xl">
                   Dès 7€
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
            <h3 className="text-2xl font-black text-[#111111] tracking-tight">Commandes internet fermées</h3>
            <p className="text-[#111111]/60 font-medium">Vous pouvez préparer votre composition ici, puis appeler le magasin de {store.city} pour commander.</p>
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

      {/* SECTION 3 — PIZZA BUILDER SECTION */}
      <section className="flour-paper-bg paper-texture py-24 md:py-32" id="composer">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Controls */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              <div className="flex flex-col gap-2">
                <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Votre pizza</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tight">Préparez votre composition avant d’appeler.</h2>
                <p className="text-[#111111]/50 font-medium max-w-2xl mt-4">
                  Choisissez une base, un format et vos ingrédients. Le résumé vous aidera à passer commande plus facilement. Les prix exacts sont confirmés par le magasin.
                </p>
              </div>

              {/* 4. BASE SELECTION */}
              <div className="paper-card rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#111111]/5 bg-white/60">
                <h3 className="text-2xl font-black text-[#111111] mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">1</span>
                  Choisissez votre base
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {bases.map((base) => (
                    <button
                      key={base.id}
                      onClick={() => setSelectedBase(base)}
                      className={`relative flex flex-col gap-4 p-6 rounded-2xl text-left transition-all group overflow-hidden border-4 ${
                        selectedBase?.id === base.id 
                          ? `border-[${base.accent}] shadow-xl scale-[1.02] bg-white` 
                          : "border-transparent bg-[#F8F4EA] grayscale hover:grayscale-0 hover:border-[#111111]/10"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2`} style={{ backgroundColor: base.accent }}>
                        {base.id === 'creme' ? <Utensils size={24} className="text-[#111111]" /> : <Flame size={24} className="text-white" />}
                      </div>
                      <h4 className="text-xl font-black text-[#111111]">{base.label}</h4>
                      <p className="text-sm text-[#111111]/60 font-medium leading-relaxed">{base.description}</p>
                      
                      <div className="mt-4 flex items-center justify-between">
                         <span className="font-mono font-black text-lg">{base.price}</span>
                         {selectedBase?.id === base.id && <CheckCircle2 size={24} style={{ color: base.accent }} />}
                      </div>

                      {selectedBase?.id === base.id && (
                        <div className="tape-corner absolute top-0 -right-2 pointer-events-none opacity-40"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. SIZE / FORMAT SELECTION */}
              <div className="paper-card rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#111111]/5 bg-white/60">
                <h3 className="text-2xl font-black text-[#111111] mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">2</span>
                  Choisissez votre format
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`flex flex-col items-center text-center p-4 rounded-xl transition-all ${
                        selectedSize?.id === size.id 
                          ? "bg-[#E30613] text-white shadow-lg scale-105" 
                          : "bg-[#F8F4EA] text-[#111111]/60 hover:bg-[#FFD21A] hover:text-[#111111]"
                      }`}
                    >
                      <span className="font-black text-xs uppercase tracking-tighter mb-1">{size.label}</span>
                      <Info size={12} className="opacity-40" />
                    </button>
                  ))}
                </div>
                <p className="mt-6 text-xs font-black text-[#111111]/30 uppercase tracking-[0.2em] text-center">Le format exact sera confirmé lors de l’appel.</p>
              </div>

              {/* 6. INGREDIENT SELECTION */}
              <div className="paper-card rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#111111]/5 bg-white/60">
                <h3 className="text-2xl font-black text-[#111111] mb-2 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">3</span>
                  Ajoutez vos envies
                </h3>
                <p className="text-[#111111]/50 font-medium mb-10 pl-13">Sélectionnez les ingrédients souhaités. La disponibilité et le prix final sont confirmés par le magasin.</p>
                
                <div className="flex flex-col gap-12">
                  {ingredientGroups.map((group) => (
                    <div key={group.id} className="flex flex-col gap-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-6 rounded-full ${
                          group.accent === 'red' ? 'bg-[#E30613]' : 
                          group.accent === 'yellow' ? 'bg-[#FFD21A]' : 'bg-[#00843D]'
                        }`}></div>
                        <h4 className="text-xl font-black text-[#111111]">{group.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.ingredients.map((ingredient) => (
                          <button
                            key={ingredient}
                            onClick={() => toggleIngredient(ingredient)}
                            className={`px-4 py-2 rounded-full font-bold text-sm transition-all border-2 ${
                              selectedIngredients.includes(ingredient)
                                ? group.accent === 'red' ? 'bg-[#E30613] border-[#E30613] text-white' : 
                                  group.accent === 'yellow' ? 'bg-[#FFD21A] border-[#FFD21A] text-[#111111]' : 
                                  'bg-[#00843D] border-[#00843D] text-white'
                                : "bg-white border-[#111111]/5 text-[#111111]/60 hover:bg-[#F8F4EA]"
                            }`}
                          >
                            {ingredient}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Summary Sticky */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex flex-col gap-8">
                
                {/* 7. LIVE PIZZA PREVIEW */}
                <div className="paper-card rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden bg-white">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#E30613]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  
                  <h3 className="text-2xl font-black text-[#111111] mb-8">Votre composition</h3>
                  
                  <div className="flex flex-col items-center gap-8 mb-10">
                    <div className="relative w-48 h-48">
                      <div className={`absolute inset-0 rounded-full border-8 border-[#111111]/10 ${
                        selectedBase?.id === 'creme' ? 'bg-[#FFD21A]/20' : 
                        selectedBase?.id === 'tomate' ? 'bg-[#E30613]/20' : 'bg-black/5'
                      } transition-colors duration-500`}></div>
                      
                      <AnimatePresence mode="wait">
                         {selectedBase ? (
                           <motion.div 
                            key={selectedBase.id}
                            initial={{ scale: 0, rotate: -45 }} animate={{ scale: 0.85, rotate: 0 }}
                            className="w-full h-full flex items-center justify-center"
                           >
                             <Pizza size={140} className={selectedBase.id === 'creme' ? 'text-[#FFD21A]' : 'text-[#E30613]'} />
                           </motion.div>
                         ) : (
                           <div className="w-full h-full flex items-center justify-center text-[#111111]/10">
                             <Plus size={40} />
                           </div>
                         )}
                      </AnimatePresence>

                      <div className="absolute inset-0 flex flex-wrap justify-center content-center gap-1 p-8 pointer-events-none">
                        {selectedIngredients.slice(0, 8).map((ing, i) => (
                           <motion.div 
                            key={i} initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className="w-3 h-3 rounded-full bg-black/10"
                           ></motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                       <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${selectedBase ? 'bg-black text-white' : 'bg-black/5 text-[#111111]/30'}`}>
                         {selectedBase?.label || "Sans base"}
                       </span>
                       <span className="px-2 py-1 rounded bg-[#00843D] text-white text-[10px] font-black uppercase">
                         {selectedSize?.label}
                       </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 border-t-2 border-dashed border-[#111111]/10 pt-6">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#111111]/40">Prix de départ</span>
                      <span className="font-mono font-black text-2xl text-[#E30613]">7,00 €</span>
                    </div>
                    <p className="text-[10px] font-bold text-[#111111]/30 uppercase text-center">Prix final confirmé par téléphone.</p>
                  </div>
                </div>

                {/* 8. ORDER SUMMARY / COPY MESSAGE */}
                <div className="paper-card rounded-[2.5rem] p-8 shadow-2xl bg-[#111111] text-white relative">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-black">Résumé à communiquer</h3>
                    <div className="w-2 h-2 rounded-full bg-[#00843D] animate-pulse"></div>
                  </div>

                  <div className="bg-[#F8F4EA] rounded-2xl p-6 border border-[#F8F4EA]/10 mb-8 font-mono text-sm text-[#111111] font-bold leading-relaxed max-h-[250px] overflow-y-auto">
                    {summary.split('\n').map((line, i) => (
                      <div key={i}>{line || '\u00A0'}</div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={handleCopy}
                      className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 font-black transition-all ${
                        copySuccess ? "bg-[#00843D] text-white" : "bg-[#FFD21A] text-[#111111] hover:scale-105"
                      }`}
                    >
                      {copySuccess ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                      <span>{copySuccess ? "Résumé copié !" : "Copier le résumé"}</span>
                    </button>
                    <a href={`tel:${store.phone}`} className="w-full py-4 rounded-xl bg-[#E30613] flex items-center justify-center gap-3 font-black text-white hover:scale-105 transition-all">
                      <Phone size={20} />
                      <span>Appeler le magasin</span>
                    </a>
                  </div>
                  
                  <div className="tape-corner absolute top-4 -right-4 bg-white/20 w-16 h-8 rotate-45"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 9 — SUGGESTED RECIPES SECTION */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24">
        <div className="flex flex-col gap-2 mb-12">
          <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Inspiration</span>
          <h2 className="text-5xl font-black text-[#111111] tracking-tight">Pas d’idée ?</h2>
          <p className="text-[#111111]/50 font-bold max-w-xl">Partez d’une recette existante et adaptez-la selon vos envies.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: "creme", val: "creme", name: "Inspiration Crousty", ingredients: ["Tenders", "Sauce Crousty", "Sriracha", "Sésame"], color: "#FFD21A" },
            { id: "tomate", val: "tomate", name: "Inspiration Margherita", ingredients: ["Mozzarella", "Olives noires", "Basilic"], color: "#E30613" },
            { id: "normande", val: "creme", name: "Inspiration Normande", ingredients: ["Jambon", "Champignons", "Camembert"], color: "#00843D" },
            { id: "veg", val: "tomate", name: "Inspiration Veggie", ingredients: ["Champignons", "Poivrons", "Oignons", "Olives"], color: "#111111" }
          ].map((recipe) => (
            <button 
              key={recipe.id}
              onClick={() => applyRecipe(recipe.val as any, recipe.ingredients)}
              className="paper-card rounded-[2rem] p-8 flex flex-col text-left group hover:-translate-y-3 transition-all duration-500 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-white" style={{ backgroundColor: recipe.color }}>
                <Pizza size={24} />
              </div>
              <h3 className="text-2xl font-black text-[#111111] mb-2 leading-tight">{recipe.name}</h3>
              <p className="text-xs text-[#111111]/40 font-black uppercase tracking-widest mb-6">Base {recipe.val}</p>
              <div className="flex flex-wrap gap-1 mb-8">
                {recipe.ingredients.map(ing => (
                  <span key={ing} className="px-2 py-1 bg-black/5 rounded text-[10px] font-bold">{ing}</span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-2 font-black text-[#E30613] text-sm group-hover:gap-4 transition-all">
                <span>Choisir cette base</span>
                <ArrowRight size={18} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 10 — HOW TO ORDER SECTION */}
      <section className="bg-[#111111] py-24 md:py-32 px-5 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
          <div className="text-center mb-20">
            <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm block mb-4">Commander</span>
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-black text-white leading-none tracking-tight">Préparez, appelez, récupérez.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12 w-full">
            {[
              { n: "01", t: "Composez votre pizza", d: "Choisissez votre base, format et ingrédients." },
              { n: "02", t: "Copiez le résumé", d: "Gardez votre composition prête pour l’appel." },
              { n: "03", t: "Appelez le magasin", d: "Le magasin confirme le prix et la disponibilité." },
              { n: "04", t: "Retirez à Doudeville", d: "Votre commande est récupérée en retrait magasin." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-start gap-6 relative">
                 <div className="text-6xl font-black text-white/10 italic leading-none">{step.n}</div>
                 <h4 className="text-2xl font-black text-white">{step.t}</h4>
                 <p className="text-white/40 font-medium">{step.d}</p>
                 {i < 3 && <div className="hidden md:block absolute top-[2.5rem] -right-6 w-12 h-0.5 bg-white/5"></div>}
              </div>
            ))}
          </div>

          <a href={`tel:${store.phone}`} className="mt-20 yellow-button flex items-center gap-4 px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl">
            <Phone size={28} />
            <span>Appeler le magasin</span>
          </a>
        </div>
      </section>

      {/* SECTION 11 — FAQ COMPOSER */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="flex flex-col items-center gap-3 mb-16 text-center">
          <span className="text-[#E30613] font-bold uppercase tracking-widest text-sm">Questions fréquentes</span>
          <h2 className="text-5xl font-black text-[#111111] tracking-tight">Avant de composer.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { q: "Puis-je vraiment composer ma pizza ?", a: "Oui. La carte propose une pizza base crème fraîche à composer et une pizza base tomate à composer, à partir de 7,00 €." },
            { q: "Le prix final est-il calculé sur le site ?", a: "Non. Le site prépare votre composition. Le prix final est confirmé par le magasin lors de l’appel selon les ingrédients choisis." },
            { q: "Puis-je commander directement en ligne ?", a: "Les commandes internet sont actuellement fermées. Vous pouvez appeler le magasin pour passer commande." },
            { q: "Puis-je choisir une pizza existante et la modifier ?", a: "Vous pouvez vous inspirer d’une recette existante et demander une adaptation au magasin, selon faisabilité." },
            { q: "Le retrait se fait où ?", a: `Le retrait se fait au magasin Pizza Chez Vous de ${store.city} (Doudeville).` },
            { q: "Puis-je choisir moitié-moitié ?", a: "La carte propose déjà des formats moitié-moitié. Consultez la page carte ou demandez directement au magasin." }
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

      {/* SECTION 12 — FINAL CTA */}
      <section className="px-5 md:px-8 pt-12 pb-36">
        <motion.div 
          className="max-w-7xl mx-auto rounded-[3.5rem] p-10 md:p-20 bg-black relative overflow-hidden shadow-2xl flex flex-col items-center text-center"
          initial="initial" whileInView="whileInView" variants={fadeUp(0)}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00843D] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E30613] rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 max-w-3xl">
            <div className="w-16 h-16 rounded-full bg-[#FFD21A] flex items-center justify-center text-black mb-4">
              <Plus size={32} />
            </div>
            <h2 className="text-white text-[clamp(2.5rem,6vw,5rem)] font-black font-heading leading-tight tracking-tight">
              Votre pizza est prête à être commandée ?
            </h2>
            <p className="text-white/60 text-xl font-medium leading-relaxed">
              Copiez votre résumé, appelez le magasin, et confirmez votre commande en retrait à Doudeville.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mt-4 w-full sm:w-auto">
              <a href={`tel:${store.phone}`} className="yellow-button flex items-center justify-center gap-4 px-10 py-6 rounded-2xl font-black text-2xl shadow-xl w-full sm:w-auto">
                <Phone size={28} />
                <span>Appeler le magasin</span>
              </a>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center justify-center gap-3 px-8 py-6 rounded-2xl border-2 border-white/10 text-white font-black hover:bg-white/5 transition-all w-full sm:w-auto"
              >
                <Pizza size={24} />
                <span>Recommencer</span>
              </button>
            </div>
          </div>
          
          <div className="tape-left absolute bottom-10 right-[-30px] rotate-[15deg] scale-150 opacity-40" aria-hidden="true"></div>
        </motion.div>
      </section>

    </div>
  );
};
