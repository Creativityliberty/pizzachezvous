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

export const Home = () => {
  return (
    <div className="flex flex-col bg-[#F8F4EA] overflow-x-hidden">
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
