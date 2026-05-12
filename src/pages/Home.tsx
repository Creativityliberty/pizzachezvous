import { Hero } from "../components/home/Hero";
import { StoreInfoStrip } from "../components/home/StoreInfoStrip";
import { CategoryGrid } from "../components/home/CategoryGrid";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { StoryBlock } from "../components/home/StoryBlock";
import { BaseChoice } from "../components/home/BaseChoice";
import { MenuPreview } from "../components/home/MenuPreview";
import { OrderSteps } from "../components/home/OrderSteps";
import { QuickOffers } from "../components/home/QuickOffers";
import { ContactCTA } from "../components/home/ContactCTA";
import { SEO } from "../components/layout/SEO";

export const Home = () => {
  return (
    <div className="flex flex-col bg-[#F8F4EA] overflow-x-hidden">
      <SEO 
        title="Accueil" 
        description="Bienvenue chez Pizza Chez Vous. Pizzeria artisanale en Normandie à Doudeville, Yerville et Octeville-sur-Mer. Pâte faite Maison et produits frais."
      />
      <Hero />
      <StoreInfoStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <StoryBlock />
      <BaseChoice />
      <MenuPreview />
      <OrderSteps />
      <QuickOffers />
      <ContactCTA />
    </div>
  );
};
