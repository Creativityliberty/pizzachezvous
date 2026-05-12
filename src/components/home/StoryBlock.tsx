import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp } from "../../lib/animations";

export const StoryBlock = () => {
  return (
    <section className="bg-transparent py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-5 relative"
            initial="initial" whileInView="whileInView" variants={fadeUp(0)} viewport={{ once: true }}
          >
            <div className="tape-left absolute -top-4 -left-4 z-20"></div>
            <div className="paper-card rounded-[2.5rem] p-4 shadow-2xl relative rotate-[-2deg]">
              <div className="rounded-[2rem] overflow-hidden aspect-[4/5] relative bg-[#111111] flex flex-col items-center justify-center p-8 text-center text-white">
                <img 
                  src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fm=webp&fit=crop&q=80&w=800" 
                  alt="Préparation de pâte à pizza artisanale" 
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 flex flex-col items-center gap-6 mt-auto mb-6">
                  <h3 className="font-heading font-black text-4xl">Charles et Louis Fairier</h3>
                  <span className="bg-[#FFD21A] text-[#111111] px-4 py-2 rounded-xl font-black uppercase tracking-widest text-sm shadow-xl">
                    Fondateurs
                  </span>
                </div>
              </div>
            </div>
            <div className="tape-corner absolute -bottom-4 -right-4 z-20 rotate-12"></div>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 flex flex-col gap-6"
            initial="initial" whileInView="whileInView" variants={fadeUp(0.1)} viewport={{ once: true }}
          >
            <div className="flex flex-col gap-3 mb-4">
              <span className="text-[#00843D] font-bold uppercase tracking-widest text-sm">Bienvenue</span>
              <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-black tracking-tight font-heading text-[#111111] leading-[1.1]">
                Pâte faite Maison, produits frais & locaux, et savoir-faire <span className="text-[#E30613]">unique.</span>
              </h2>
            </div>
            
            <div className="flex flex-col gap-4 text-[#111111]/70 text-lg leading-relaxed font-medium">
              <p>
                Depuis l'ouverture de notre première pizzeria en 2016 à Doudeville, village de notre enfance, nous proposons des pizzas à mi-chemin entre tradition française et italienne, une farine de qualité supérieure venue de l'autre côté des Alpes, couplée à des techniques de boulangerie traditionnelle française.
              </p>
              <p>
                C'est avec le plus grand soin que nous préparons chaque jour une pâte au goût unique, moelleuse en son cœur, et craquante à l'extérieur. Nous sommes très attachés à notre terroir et à la qualité de ses produits. C'est donc avec beaucoup de rigueur que nous les sélectionnons, en privilégiant des produits frais et locaux, afin de vous faire voyager des rives de la Méditerranée aux plaines verdoyantes de notre belle Normandie.
              </p>
              <p>
                Il vous sera également possible de déguster nos Pizzinis, sandwichs au pain chaud faits maison tout juste sortis du four, nos calzones, chaussons renfermant de délicieuses saveurs, ou encore nos délicieux desserts fait maison, dont nos incontournables Tiramisus.
              </p>
              <p>
                Fidèles à l'esprit local, nous participons régulièrement à la vie de nos villages. Vous l'aurez compris, Pizza Chez Vous, c'est la volonté de faire vivre ce qu'il y a de meilleur dans l'artisanat et la vie locale, avec pour seul et unique objectif, la satisfaction de nos clients.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white border border-black/5 rounded-2xl shadow-sm italic font-black text-2xl text-[#111111] border-l-4 border-l-[#FFD21A]">
              "Alors, base crème fermière, ou coulis de tomate ?"
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
