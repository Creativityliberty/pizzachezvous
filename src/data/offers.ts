export type OfferCategory = "Menu" | "Enfant" | "À partager" | "Express" | "Dessert" | "Boisson";

export type Offer = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: OfferCategory;
  accent: "red" | "yellow" | "green";
  icon: string;
};

export const quickOffers: Offer[] = [
  {
    id: "menu-pizzini",
    title: "Formule Pizzini + Potatoes",
    price: "11,90 €",
    description: "Un pizzini chaud accompagné de potatoes pour une formule pratique et gourmande.",
    category: "Menu",
    accent: "red",
    icon: "Sandwich"
  },
  {
    id: "menu-enfant",
    title: "Menu enfant",
    price: "6,90 €",
    description: "Le menu complet pour les petits : Pizza Junior + Pom'pot + cookie.",
    category: "Enfant",
    accent: "yellow",
    icon: "Heart"
  },
  {
    id: "pizza-composer",
    title: "Pizza à composer",
    price: "Dès 7,00 €",
    description: "Devenez le chef : choisissez votre base et vos ingrédients préférés.",
    category: "Express",
    accent: "green",
    icon: "Plus"
  },
  {
    id: "moitie-moitie",
    title: "Moitié-moitié",
    price: "Dès 24,00 €",
    description: "Plusieurs envies dans une même pizza ? C'est possible avec nos formats géants.",
    category: "À partager",
    accent: "red",
    icon: "Users"
  }
];

export const sharingOffers: Offer[] = [
  {
    id: "mega-moitie",
    title: "Pizza MEGA moitié-moitié",
    price: "24,00 €",
    description: "Un format généreux pour deux envies différentes sur une même base.",
    category: "À partager",
    accent: "red",
    icon: "Users"
  },
  {
    id: "super-mega-moitie",
    title: "Pizza SUPER MEGA moitié-moitié",
    price: "29,00 €",
    description: "Encore plus de place pour partager vos recettes favorites entre amis.",
    category: "À partager",
    accent: "yellow",
    icon: "Users"
  },
  {
    id: "maxi-moitie",
    title: "PIZZA Maxi géante moitié-moitié",
    price: "36,00 €",
    description: "Le grand format pour les grandes tablées et les moments conviviaux.",
    category: "À partager",
    accent: "green",
    icon: "Users"
  },
  {
    id: "maxi-tiers",
    title: "Pizza MAXI GEANTE tiers",
    price: "39,00 €",
    description: "Trois envies dans une seule pizza géante. Le choix ultime pour ne rien regretter.",
    category: "À partager",
    accent: "red",
    icon: "Users"
  }
];

export const pizzinis: Offer[] = [
  {
    id: "p-bollywood",
    title: "Pizzini Bollywood",
    price: "6,90 €",
    description: "Crème & curry, poulet mariné maison, oignons rouges, mozzarella, salade fraîche.",
    category: "Express",
    accent: "yellow",
    icon: "Flame"
  },
  {
    id: "p-grec",
    title: "Pizzini Grecque",
    price: "7,90 €",
    description: "Sauce tomate, viande de kebab, tomates & oignons rouges, feta grecque, sauce blanche.",
    category: "Express",
    accent: "green",
    icon: "Utensils"
  },
  {
    id: "p-nordique",
    title: "Pizzini Nordique",
    price: "7,90 €",
    description: "Crème, saumon, persillade, citron, Boursin.",
    category: "Express",
    accent: "red",
    icon: "ShoppingBag"
  },
  {
    id: "p-parisien",
    title: "Pizzini Parisien",
    price: "6,90 €",
    description: "Crème, jambon, tomates fraîches, emmental, salade fraîche.",
    category: "Express",
    accent: "yellow",
    icon: "Heart"
  }
];
