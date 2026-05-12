import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEO } from "../components/layout/SEO";
import { 
  Search, 
  ShoppingBag, 
  Phone, 
  Plus, 
  AlertCircle, 
  Pizza, 
  Store, 
  Filter, 
  Clock, 
  CheckCircle2, 
  X,
  ChevronDown,
  Info
} from "lucide-react";
import { allProducts, Product } from "../data/products";
import { store } from "../data/store";
import { fadeUp, staggerContainer, popIn } from "../lib/animations";

export const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");
  
  const categories = [
    "Tous",
    "Composez votre pizza",
    "Moitié Moitié",
    "Pizzas crème fraîche",
    "Pizzas sauce tomate",
    "Calzones",
    "Pizzinis",
    "Accompagnements",
    "Desserts",
    "Glaces",
    "Boissons",
    "Menus"
  ];

  const featuredProductsList = allProducts.filter(p => p.featured);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.ingredients?.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = activeCategory === "Tous" || product.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const groupedProducts = useMemo(() => {
    const groups: { [key: string]: Product[] } = {};
    const catsToDisplay = activeCategory === "Tous" 
      ? categories.filter(c => c !== "Tous")
      : [activeCategory];

    catsToDisplay.forEach(cat => {
      const products = filteredProducts.filter(p => p.category === cat);
      if (products.length > 0) {
        groups[cat] = products;
      }
    });
    return groups;
  }, [filteredProducts, activeCategory]);

  const scrollToCategory = (cat: string) => {
    setActiveCategory(cat);
    const element = document.getElementById("menu-grid");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col bg-[#F8F4EA] overflow-x-hidden">
      <SEO 
        title="Menu & Carte" 
        description="Découvrez la carte complète de Pizza Chez Vous : Pizzas base crème, base tomate, Calzones, Pizzinis et menus gourmands à Doudeville."
      />
      
      {/* SECTION 1 — MENU HERO */}
      <section className="relative min-h-[65vh] bg-[#111111] overflow-hidden flex flex-col pt-32 md:pt-40 pb-20 px-5 md:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=2000" 
            alt="Pizza background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#E30613]/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-[#FFD21A]/10 blur-[100px] rounded-full translate-x-1/4"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-10 items-center w-full">
            <motion.div 
              className="lg:col-span-7 flex flex-col items-start"
              initial="initial" animate="whileInView" variants={fadeUp(0)} viewport={{ once: true }}
            >
              <div className="green-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold shadow-xl border border-white/10 mb-8">
                <Pizza size={14} />
                <span>Notre carte · {store.city}</span>
              </div>

              <div className="flex flex-col gap-1 w-full relative mb-8">
                <h1 className="text-[clamp(3rem,7vw,7rem)] leading-[0.85] tracking-[-0.06em] font-black font-heading text-[#F8F4EA]">
                  Une carte <span className="text-[#FFD21A]">généreuse</span>,
                </h1>
                <h1 className="text-[clamp(3rem,7vw,7rem)] leading-[0.85] tracking-[-0.06em] font-black font-heading text-[#F8F4EA]">
                  à composer selon <span className="text-[#E30613] relative">vos envies<span className="absolute bottom-0 left-0 w-full h-2 bg-[#E30613]/30 rounded-full -z-10"></span></span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-white/70 font-medium max-w-2xl leading-relaxed mb-10">
                Pizzas base crème, pizzas sauce tomate, moitié-moitié, calzones, pizzinis, accompagnements, desserts, glaces, boissons et menus.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="#menu-grid" onClick={() => scrollToCategory("Tous")} className="red-button flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl group">
                  <ShoppingBag size={22} />
                  <span>Commander en retrait</span>
                </a>
                <a href={`tel:${store.phone}`} className="liquid-glass-food flex items-center gap-3 px-8 py-4 rounded-full font-bold text-xl text-white border border-white/20 transition-all hover:bg-white/10">
                  <Phone size={22} />
                  <span>Appeler le magasin</span>
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="hidden lg:flex lg:col-span-5 relative justify-end"
              initial="initial" animate="whileInView" variants={popIn(0.3)}
            >
              <div className="relative w-full max-w-[450px] aspect-square flex flex-col gap-4">
                {/* Paper Stack Visual */}
                <div className="paper-card p-6 rounded-2xl rotate-[-3deg] shadow-2xl relative translate-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#E30613] flex items-center justify-center text-white mb-4">
                    <Pizza size={20} />
                  </div>
                  <h3 className="font-black text-xl text-[#111111]">Sauce Tomate</h3>
                  <div className="tape-corner absolute -top-4 -right-4 bg-black/10 w-12 h-6 rotate-45"></div>
                </div>
                <div className="paper-card p-6 rounded-2xl rotate-[2deg] shadow-2xl relative z-10 -translate-y-12 -translate-x-8">
                  <div className="w-10 h-10 rounded-full bg-[#FFD21A] flex items-center justify-center text-[#111111] mb-4">
                    <Pizza size={20} />
                  </div>
                  <h3 className="font-black text-xl text-[#111111]">Crème Fraîche</h3>
                  <div className="tape-left absolute -bottom-4 -left-4 bg-black/10 w-12 h-6 -rotate-12"></div>
                </div>
                <div className="paper-card p-6 rounded-2xl rotate-[-1deg] shadow-2xl relative z-20 -translate-y-20 translate-x-6">
                  <div className="w-10 h-10 rounded-full bg-[#00843D] flex items-center justify-center text-white mb-4">
                    <ShoppingBag size={20} />
                  </div>
                  <h3 className="font-black text-xl text-[#111111]">Calzones</h3>
                  <div className="bg-[#FFD21A] absolute top-2 right-2 px-2 py-1 rounded text-[10px] font-black uppercase rotate-6">Dès 7€</div>
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
            <p className="text-[#111111]/60 font-medium">Veuillez appeler le magasin de {store.city} pour commander ou obtenir une information.</p>
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

      {/* SECTION 3 — SEARCH & QUICK FILTERS */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24" id="menu-grid">
        <div className="paper-card rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-[#111111]/5">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-[#E30613] font-bold uppercase tracking-widest text-sm block mb-2">Recherche rapide</span>
              <h2 className="text-4xl font-black text-[#111111] tracking-tight">Trouvez votre pizza en quelques secondes.</h2>
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none group-focus-within:text-[#E30613] transition-colors">
                <Search size={24} className="text-[#111111]/30" />
              </div>
              <input 
                type="text"
                placeholder="Rechercher une pizza, une base, un ingrédient..."
                className="w-full bg-[#F8F4EA] border-2 border-transparent focus:border-[#E30613]/20 rounded-2xl py-6 pl-16 pr-6 text-xl font-medium outline-none shadow-inner transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute inset-0 rounded-2xl pointer-events-none group-focus-within:ring-4 ring-[#E30613]/5 transition-all"></div>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "Tout", cat: "Tous" },
                { name: "Crème fraîche", cat: "Pizzas crème fraîche" },
                { name: "Sauce tomate", cat: "Pizzas sauce tomate" },
                { name: "Calzones", cat: "Calzones" },
                { name: "Pizzinis", cat: "Pizzinis" },
                { name: "Accompagnements", cat: "Accompagnements" },
                { name: "Desserts", cat: "Desserts" },
                { name: "Boissons", cat: "Boissons" },
                { name: "Menus", cat: "Menus" }
              ].map((filter) => (
                <button
                  key={filter.name}
                  onClick={() => setActiveCategory(filter.cat)}
                  className={`px-6 py-3 rounded-full font-bold text-sm tracking-tight transition-all ${
                    activeCategory === filter.cat 
                      ? "bg-[#E30613] text-white shadow-lg" 
                      : "bg-white text-[#111111]/60 hover:bg-[#FFD21A] hover:text-[#111111] shadow-sm"
                  }`}
                  aria-pressed={activeCategory === filter.cat}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — STICKY CATEGORY NAVIGATION */}
      <div className="sticky top-20 z-40 py-4 pointer-events-none">
        <div className="max-w-7xl mx-auto px-5 md:px-8 pointer-events-auto">
          <div className="liquid-glass-food backdrop-blur-xl bg-white/40 border border-white/20 p-2 rounded-2xl md:rounded-full flex gap-2 overflow-x-auto no-scrollbar shadow-2xl">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-widest whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? "bg-[#FFD21A] text-[#111111] shadow-md scale-105" 
                    : "text-[#111111]/50 hover:bg-white/50 hover:text-[#111111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 5 — FEATURED PRODUCTS */}
      {activeCategory === "Tous" && searchQuery === "" && (
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Produits vedettes</span>
            <h2 className="text-5xl font-black text-[#111111] tracking-tight">Les choix qui donnent faim.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProductsList.map((product, idx) => (
              <motion.div 
                key={product.id}
                variants={fadeUp(idx * 0.1)} initial="initial" whileInView="whileInView"
                className="paper-card rounded-[2rem] p-4 flex flex-col group hover:-translate-y-3 transition-all duration-500 shadow-xl relative border-2 border-transparent hover:border-[#FFD21A]"
              >
                <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-black mb-6 relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-[#FFD21A] text-[#111111] font-black text-sm px-3 py-1 rounded shadow-lg rotate-3">
                    {product.price}
                  </div>
                </div>
                <div className="flex flex-col flex-1 px-2">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black text-[#E30613] uppercase tracking-widest">{product.category}</span>
                    {product.tags?.includes("Spéciale") && <span className="w-2 h-2 rounded-full bg-[#E30613]"></span>}
                  </div>
                  <h3 className="text-2xl font-black text-[#111111] mb-3 group-hover:text-[#00843D] transition-colors leading-tight">{product.name}</h3>
                  <p className="text-[#111111]/60 text-sm font-medium leading-relaxed mb-6 flex-1">
                    {product.ingredients?.join(", ") || product.description}
                  </p>
                  <a href={`tel:${store.phone}`} className="w-full py-4 rounded-xl bg-[#111111] text-white font-bold text-center text-sm hover:bg-[#E30613] transition-colors shadow-lg">
                    Appeler
                  </a>
                </div>
                <div className="tape-corner absolute top-0 -right-2 pointer-events-none opacity-40"></div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 6 — FULL MENU GRID */}
      <section className="flour-paper-bg paper-texture py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          
          <div className="flex flex-col gap-3 mb-20 text-center items-center">
            <span className="text-[#E30613] font-bold uppercase tracking-widest text-sm">Carte complète</span>
            <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-black text-[#111111] tracking-tight leading-none">Tout le menu<br/><span className="text-[#00843D]">Pizza Chez Vous.</span></h2>
            <p className="text-[#111111]/50 font-bold max-w-xl text-lg mt-4">
              Les prix sont affichés en euros. Certains produits sont indiqués “à partir de” selon le format.
            </p>
          </div>

          {Object.keys(groupedProducts).length === 0 ? (
            <div className="paper-card p-20 rounded-[3rem] text-center flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-black/5 flex items-center justify-center text-[#111111]/20">
                <Filter size={40} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-black text-[#111111]">Aucun produit trouvé</h3>
                <p className="text-[#111111]/50 font-bold text-lg">Essayez une autre recherche ou appelez le magasin au {store.formattedPhone}.</p>
              </div>
              <button 
                onClick={() => {setSearchQuery(""); setActiveCategory("Tous");}}
                className="red-button px-8 py-4 rounded-2xl font-black text-xl shadow-xl"
              >
                Réinitialiser la recherche
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-32">
              {Object.entries(groupedProducts).map(([category, products]) => (
                <div key={category} id={category.replace(/\s+/g, '-').toLowerCase()} className="scroll-mt-40">
                  <div className="flex items-end gap-4 mb-12 border-b-4 border-[#111111]/5 pb-6">
                    <div className="w-16 h-16 rounded-3xl bg-white border border-[#111111]/5 shadow-sm flex items-center justify-center text-[#E30613]">
                      <Pizza size={32} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tighter uppercase">{category}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-[#00843D] uppercase tracking-[0.2em]">{products.length} Produits</span>
                        <div className="w-24 h-1.5 bg-[#E30613] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                      <motion.div 
                        key={product.id}
                        className="paper-card p-6 md:p-8 rounded-[2rem] flex flex-col group hover:-translate-y-2 transition-all duration-300 relative border border-[#111111]/5 bg-white/60 shadow-sm"
                        initial="initial" whileInView="whileInView" variants={fadeUp(idx % 3 * 0.1)}
                      >
                        {idx % 5 === 0 && <div className="tape-corner absolute -top-4 -right-4 pointer-events-none opacity-40 scale-75"></div>}
                        
                        <div className="flex flex-col h-full gap-6">
                          <div className="flex flex-col gap-1">
                             <div className="flex items-center gap-2 mb-2">
                               <span className={`px-2 py-1 rounded text-[10px] font-black uppercase tracking-widest ${
                                 product.category.includes('tomate') ? 'bg-[#E30613]/10 text-[#E30613]' : 
                                 product.category.includes('crème') ? 'bg-[#FFD21A]/30 text-[#111111]' : 
                                 'bg-[#00843D]/10 text-[#00843D]'
                               }`}>
                                 {product.category}
                               </span>
                             </div>
                             <h4 className="text-2xl font-black text-[#111111] group-hover:text-[#E30613] transition-colors leading-none">{product.name}</h4>
                          </div>

                          <p className="text-[#111111]/60 font-medium text-sm leading-relaxed flex-1">
                            {product.ingredients?.join(", ") || product.description || "Recette artisanale préparée sur place."}
                          </p>

                          <div className="flex items-end justify-between gap-4 pt-4 border-t border-[#111111]/5">
                            <div className="flex flex-col">
                               <span className="text-[10px] font-black text-[#111111]/30 uppercase tracking-widest">{product.pricePrefix}</span>
                               <div className="bg-[#FFD21A] px-3 py-1 rounded font-mono font-black text-xl text-[#111111] shadow-sm rotate-[-2deg]">
                                 {product.price}
                               </div>
                            </div>
                            <a href={`tel:${store.phone}`} className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-[#111111]/40 hover:text-[#E30613] transition-colors">
                               <Phone size={14} />
                               <span>Commander</span>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECTION 7 — BADGE LEGEND */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="paper-card rounded-[2.5rem] p-8 md:p-12 border border-[#111111]/10 shadow-xl bg-white/40 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
            <h3 className="text-3xl font-black text-[#111111] tracking-tight shrink-0">Légende de la carte</h3>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#00843D]"></div>
                <span className="font-bold text-[#111111]/60 text-sm">Végétarien / Formules fraîches</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#E30613]"></div>
                <span className="font-bold text-[#111111]/60 text-sm">Sauce Tomate / Épicé / Avec porc</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-[#FFD21A]"></div>
                <span className="font-bold text-[#111111]/60 text-sm">Crème Fraîche / Fromage</span>
              </div>
              <div className="flex items-center gap-3">
                <Info size={16} className="text-[#111111]/30" />
                <span className="font-bold text-[#111111]/30 text-xs">“À partir de” : selon format/taille</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — BASE CRÈME OR BASE TOMATE CTA */}
      <section className="bg-[#111111] py-24 md:py-32 px-5 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
           <img src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=40&w=2000" className="w-full h-full object-cover" alt="texture" aria-hidden="true" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
               className="paper-card rounded-[2.5rem] p-10 md:p-14 flex flex-col gap-6 bg-[#F8F4EA] border-none text-[#111111] rotate-[-1deg] shadow-2xl relative"
               initial="initial" whileInView="whileInView" variants={fadeUp(0)}
            >
               <div className="w-16 h-16 rounded-full bg-[#FFD21A] flex items-center justify-center text-[#111111] mb-4 shadow-xl">
                 <Pizza size={32} />
               </div>
               <h3 className="text-4xl font-black font-heading tracking-tight italic">Team crème fraîche</h3>
               <p className="text-lg font-bold text-[#111111]/60 leading-relaxed">
                 Des recettes généreuses, fondantes et gourmandes. Crousty, British, Savoyarde ou Normande...
               </p>
               <button 
                onClick={() => scrollToCategory("Pizzas crème fraîche")}
                className="mt-4 font-black text-[#E30613] uppercase tracking-widest text-sm flex items-center gap-2 hover:translate-x-2 transition-transform"
               >
                 <span>Voir les pizzas crème</span>
                 <ShoppingBag size={18} />
               </button>
               <div className="tape-corner absolute top-4 -right-4 pointer-events-none"></div>
            </motion.div>

            <motion.div 
               className="paper-card rounded-[2.5rem] p-10 md:p-14 flex flex-col gap-6 bg-[#E30613] border-none text-white rotate-[1deg] shadow-2xl relative"
               initial="initial" whileInView="whileInView" variants={fadeUp(0.1)}
            >
               <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#E30613] mb-4 shadow-xl">
                 <Pizza size={32} />
               </div>
               <h3 className="text-4xl font-black font-heading tracking-tight italic">Team sauce tomate</h3>
               <p className="text-lg font-bold text-white/70 leading-relaxed">
                 Des classiques, des recettes épicées et des pizzas à composer. Margherita, Reine, Barbecue...
               </p>
               <button 
                onClick={() => scrollToCategory("Pizzas sauce tomate")}
                className="mt-4 font-black text-[#FFD21A] uppercase tracking-widest text-sm flex items-center gap-2 hover:translate-x-2 transition-transform"
               >
                 <span>Voir les pizzas tomate</span>
                 <ShoppingBag size={18} />
               </button>
               <div className="tape-left absolute -bottom-4 -left-4 pointer-events-none bg-white/20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — ORDER CTA */}
      <section className="px-5 md:px-8 py-24 md:py-36">
        <motion.div 
          className="max-w-7xl mx-auto rounded-[3rem] p-10 md:p-20 bg-[#111111] relative overflow-hidden shadow-[0_48px_80px_rgba(0,0,0,0.5)]"
          initial="initial" whileInView="whileInView" variants={fadeUp(0)}
        >
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E30613] rounded-full blur-[200px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-8">
              <div className="green-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold shadow-xl border border-white/10">
                <Store size={14} />
                <span>Retrait magasin · {store.city}</span>
              </div>
              
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tight font-heading text-white leading-[0.95]">
                Vous avez choisi ?<br/>
                Appelez <span className="text-[#E30613]">Pizza Chez Vous.</span>
              </h2>
              
              <p className="text-white/50 text-xl font-medium leading-relaxed max-w-2xl">
                Les commandes internet sont actuellement fermées. Pour commander, contactez directement le magasin de Doudeville.
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-4">
                <a href={`tel:${store.phone}`} className="yellow-button flex items-center gap-4 px-10 py-6 rounded-2xl font-black text-2xl shadow-2xl group">
                  <Phone size={28} />
                  <span>{store.formattedPhone}</span>
                </a>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 font-black text-white/40 uppercase tracking-widest text-xs hover:text-white transition-colors"
                >
                  <Pizza size={16} />
                  <span>Retour en haut</span>
                </button>
              </div>
            </div>

            <div className="hidden lg:flex lg:col-span-5 relative justify-end">
               <div className="paper-card rounded-3xl p-8 rotate-[2deg] shadow-2xl flex flex-col gap-4 text-[#111111] w-full max-w-[350px]">
                  <span className="font-black text-xs uppercase tracking-[0.2em] opacity-40">Ma commande</span>
                  <div className="flex flex-col gap-3">
                     <div className="flex items-center gap-2 px-3 py-2 bg-black/5 rounded-lg border border-black/5 font-black text-sm">
                        <CheckCircle2 size={16} className="text-[#00843D]" />
                        <span>Pizzas fraîches</span>
                     </div>
                     <div className="flex items-center gap-2 px-3 py-2 bg-black/5 rounded-lg border border-black/5 font-black text-sm">
                        <CheckCircle2 size={16} className="text-[#00843D]" />
                        <span>Retrait Doudeville</span>
                     </div>
                     <div className="flex items-center gap-2 px-3 py-2 bg-black/5 rounded-lg border border-black/5 font-black text-sm animate-pulse">
                        <Phone size={16} className="text-[#E30613]" />
                        <span>Appel magasin</span>
                     </div>
                  </div>
                  <div className="mt-4 pt-4 border-t-2 border-dashed border-black/10 flex items-center justify-between font-black text-xl">
                    <span>TOTAL</span>
                    <span className="text-[#E30613]">€€€</span>
                  </div>
                  <div className="tape-left absolute bottom-10 -right-4 bg-[#FFD21A]/50 w-20 h-8 rotate-[70deg]"></div>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 10 — FAQ MENU */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="flex flex-col items-center gap-3 mb-16 text-center">
          <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Questions fréquentes</span>
          <h2 className="text-5xl font-black text-[#111111] tracking-tight">Avant de commander.</h2>
        </div>

        <div className="flex flex-col gap-4">
          {[
            { q: "Puis-je commander en ligne ?", a: "Les commandes internet sont actuellement fermées. Vous pouvez appeler le magasin pour commander ou obtenir une information." },
            { q: "Le retrait se fait où ?", a: `Le retrait se fait au magasin Pizza Chez Vous de ${store.city} (Doudeville).` },
            { q: "Que signifie ‘à partir de’ ?", a: "Le prix peut varier selon le format, la taille (Moyenne, Mega, Maxi) ou les options choisies." },
            { q: "Puis-je composer ma pizza ?", a: "Oui. La carte propose une pizza base crème fraîche à composer et une pizza base tomate à composer, à partir de 7,00 €." },
            { q: "Proposez-vous des pizzas moitié-moitié ?", a: "Oui. Plusieurs formats moitié-moitié sont proposés, dont Mega (24€), Super Mega (29€) et Maxi géante (36€)." },
            { q: "Y a-t-il autre chose que des pizzas ?", a: "Oui. La carte propose aussi des calzones, pizzinis, accompagnements (mozzarella sticks, camembert bites), desserts, glaces, boissons et menus." },
            { q: "Les produits sont-ils locaux ?", a: "Pizza Chez Vous privilégie des marchandises fraîches et locales ou certifiées, selon la promesse communiquée par notre magasin de Doudeville." }
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

