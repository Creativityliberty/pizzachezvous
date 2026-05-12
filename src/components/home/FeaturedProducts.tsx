import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { featuredProducts } from "../../data/products";
import { fadeUp, staggerContainer } from "../../lib/animations";
import { Link } from "react-router-dom";

export const FeaturedProducts = () => {
  return (
    <section className="bg-transparent py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Produits vedettes</span>
            <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-black tracking-tight font-heading text-[#111111] leading-none">
              Les incontournables<br/><span className="text-[#E30613]">du moment.</span>
            </h2>
          </div>
          <Link to="/menu" className="red-button px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-transform hover:-translate-y-1">
            Voir toute la carte
          </Link>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
        >
          {featuredProducts.map((product, idx) => (
            <motion.div 
              key={product.id}
              variants={fadeUp(0)}
              className="paper-card rounded-[1.6rem] flex flex-col group hover:-translate-y-3 transition-all duration-500 relative border border-[#111111]/10 bg-[#FFF8E8] shadow-xl"
            >
              <div className={idx % 2 === 0 ? "tape-corner absolute top-0 -mr-2" : "tape-left absolute top-0 -ml-2"}></div>
              
              {/* Image Polaroid Style */}
              <div className="p-4 pb-0">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black relative shadow-inner">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out h-full" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  {idx === 0 && (
                    <div className="absolute top-3 left-3 bg-[#00843D] text-white text-[10px] font-black uppercase px-2 py-1 rounded-md shadow-lg rotate-[-4deg]">
                      Meilleure vente
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="font-heading font-black text-2xl text-[#111111] leading-tight mb-2 group-hover:text-[#00843D] transition-colors">{product.name}</h3>
                  <div className="inline-flex flex-col items-start">
                    <span className="text-[10px] uppercase tracking-widest text-[#111111]/40 font-black">{product.pricePrefix}</span>
                    <div className="font-mono text-2xl font-black bg-[#FFD21A] text-[#111111] px-3 py-0.5 rounded-sm inline-block -ml-1 mt-0.5 transform -rotate-2 shadow-md">
                      {product.price}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#111111]/70 font-medium leading-relaxed flex-1">
                  {product.ingredients?.join(", ")}
                </p>

                <div className="mt-8 flex justify-between items-center border-t border-[#111111]/5 pt-4">
                  <span className="text-[10px] font-black text-[#00843D] uppercase tracking-widest bg-[#00843D]/5 px-2 py-1 rounded">{product.category}</span>
                  <button className="w-10 h-10 rounded-full bg-[#FFD21A] flex items-center justify-center text-[#111111] shadow-lg group-hover:bg-[#E30613] group-hover:text-white transition-all duration-300 transform group-hover:rotate-90">
                    <Plus size={22} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
