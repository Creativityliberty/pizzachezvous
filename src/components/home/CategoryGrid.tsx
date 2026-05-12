import { motion } from "framer-motion";
import { Pizza, Utensils, Flame, PackageCheck, Sandwich, ChefHat, IceCream, CupSoda } from "lucide-react";
import { categories } from "../../data/categories";
import { staggerContainer, popIn } from "../../lib/animations";

export const CategoryGrid = () => {
  // Mapping categories to specific icons from instructions
  const getIcon = (cat: string) => {
    switch(cat) {
      case "Composez votre pizza": return <Pizza className="w-8 h-8 text-[#E30613]" />;
      case "Pizzas crème fraîche": return <Utensils className="w-8 h-8 text-[#FFD21A]" />;
      case "Pizzas sauce tomate": return <Flame className="w-8 h-8 text-[#E30613]" />;
      case "Calzones": return <PackageCheck className="w-8 h-8 text-[#00843D]" />;
      case "Pizzinis": return <Sandwich className="w-8 h-8 text-[#FFD21A]" />;
      case "Accompagnements": return <ChefHat className="w-8 h-8 text-[#00843D]" />;
      case "Desserts": case "Glaces": return <IceCream className="w-8 h-8 text-[#E30613]" />;
      case "Boissons": return <CupSoda className="w-8 h-8 text-[#00843D]" />;
      default: return <Pizza className="w-8 h-8 text-[#FFD21A]" />;
    }
  };

  const menuCategories = [
    "Composez votre pizza",
    "Pizzas crème fraîche",
    "Pizzas sauce tomate",
    "Calzones",
    "Pizzinis",
    "Accompagnements",
    "Desserts",
    "Boissons"
  ];

  return (
    <section className="flour-paper-bg paper-texture py-24 md:py-32" id="carte">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[#E30613] font-bold uppercase tracking-widest text-sm mb-4">Notre carte</span>
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-black tracking-tight font-heading text-[#111111] mb-4">
            Découvrez nos envies à partager.
          </h2>
          <p className="text-[#111111]/70 font-medium max-w-2xl text-lg lg:text-xl">
            Pizzas base crème, pizzas sauce tomate, calzones, pizzinis, accompagnements, desserts, boissons et menus.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {menuCategories.map((cat, idx) => (
            <motion.div 
              key={idx}
              variants={popIn(0)}
              className="paper-card rounded-[1.4rem] p-5 flex flex-col items-center justify-center text-center gap-4 cursor-pointer hover:-translate-y-2 transition-all duration-300 group border border-transparent hover:border-[#E30613]/20 min-h-[160px] relative"
            >
              {idx % 3 === 0 && <div className="tape-corner absolute -top-2 -right-2 pointer-events-none scale-75 opacity-60" aria-hidden="true"></div>}
              
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                {getIcon(cat)}
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-bold text-[#111111] text-sm leading-tight group-hover:text-[#E30613] transition-colors">
                  {cat}
                </span>
                <span className="text-[10px] text-[#111111]/40 font-bold uppercase tracking-widest hidden group-hover:block animate-in fade-in slide-in-from-bottom-1">Voir</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
