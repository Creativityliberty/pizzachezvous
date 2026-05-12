export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  pricePrefix?: "À partir de" | "";
  description?: string;
  ingredients?: string[];
  tags?: Array<"Végétarien" | "Sans porc" | "Avec porc" | "Spéciale">;
  featured?: boolean;
  image?: string;
};

export const featuredProducts: Product[] = [
  {
    id: "pizza-crousty",
    name: "Pizza Crousty",
    category: "Pizzas crème fraîche",
    price: "12,00 €",
    pricePrefix: "À partir de",
    ingredients: ["Crème fraîche", "tenders", "sauce Crousty", "sauce Sriracha", "sésame", "persil"],
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=600&h=600",
    featured: true,
    tags: ["Spéciale"]
  },
  {
    id: "alaska",
    name: "Alaska",
    category: "Pizzas crème fraîche",
    price: "11,00 €",
    pricePrefix: "À partir de",
    ingredients: ["Crème fraîche", "Tranches de saumon fumé", "citron de Sicile"],
    image: "https://images.unsplash.com/photo-1548369937-47519962c11a?auto=format&fit=crop&q=80&w=600&h=600",
    featured: true
  },
  {
    id: "margherita",
    name: "Margherita",
    category: "Pizzas sauce tomate",
    price: "7,00 €",
    pricePrefix: "À partir de",
    ingredients: ["Sauce tomate", "Mozzarella", "olives noires naturelles"],
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600&h=600",
    featured: true,
    tags: ["Végétarien"]
  },
  {
    id: "calzone-jambon",
    name: "Calzone Jambon",
    category: "Calzones",
    price: "9,00 €",
    pricePrefix: "À partir de",
    ingredients: ["Sauce tomate", "jambon", "champignons de Paris", "jaune d’œuf"],
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600&h=600",
    featured: true,
    tags: ["Avec porc"]
  }
];

export const allProducts: Product[] = [
  ...featuredProducts,
  /* Composez votre pizza */
  { id: "compose-fraiche", name: "PIZZA BASE FRAICHE A COMPOSER", category: "Composez votre pizza", price: "7,00 €", pricePrefix: "À partir de", description: "Choisissez votre base crème fraîche et composez selon vos envies." },
  { id: "compose-tomate", name: "PIZZA BASE TOMATE A COMPOSER", category: "Composez votre pizza", price: "7,00 €", pricePrefix: "À partir de", description: "Choisissez votre base tomate et ajoutez vos ingrédients préférés." },

  /* Moitié Moitié */
  { id: "moitie-maxi", name: "PIZZA Maxi géante moitié moitié", category: "Moitié Moitié", price: "36,00 €" },
  { id: "moitie-tiers", name: "Pizza MAXI GEANTE tiers", category: "Moitié Moitié", price: "39,00 €" },
  { id: "moitie-mega", name: "Pizza MEGA moitié moitié", category: "Moitié Moitié", price: "24,00 €" },
  { id: "moitie-super-mega", name: "Pizza SUPER MEGA moitié moitié", category: "Moitié Moitié", price: "29,00 €" },

  /* Pizzas crème fraîche */
  { id: "alpine", name: "Alpine", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de", ingredients: ["Crème fraîche", "Pommes de terre", "Lardons", "Oignons", "Reblochon"] },
  { id: "amazone", name: "Amazone", category: "Pizzas crème fraîche", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "british", name: "British", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "brunch", name: "Brunch", category: "Pizzas crème fraîche", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "campagnarde", name: "Campagnarde", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "cauchoise", name: "Cauchoise", category: "Pizzas crème fraîche", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "chevre-miel", name: "Chèvre miel", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de", tags: ["Végétarien"] },
  { id: "chicken-tikka", name: "Chicken tikka", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "chilli", name: "Chilli", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "festive", name: "Festive", category: "Pizzas crème fraîche", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "figue-chevre", name: "Figue chèvre", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de", tags: ["Végétarien"] },
  { id: "fromagere", name: "Fromagère", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de", tags: ["Végétarien"] },
  { id: "grecque", name: "Grecque", category: "Pizzas crème fraîche", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "hawaienne", name: "Hawaïenne", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "indienne", name: "Indienne", category: "Pizzas crème fraîche", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "mediterranee", name: "Méditerranée", category: "Pizzas crème fraîche", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "normande", name: "Normande", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "norvegienne", name: "Norvégienne", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "oceane", name: "Océane", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "paysanne", name: "Paysanne", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "savoyarde", name: "Savoyarde", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "supreme", name: "Suprême", category: "Pizzas crème fraîche", price: "11,00 €", pricePrefix: "À partir de" },

  /* Pizzas sauce tomate */
  { id: "barbecue", name: "Barbecue", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de", ingredients: ["Sauce tomate", "Vigande hachée", "Oignons", "Sauce BBQ"] },
  { id: "bolognaise", name: "Bolognaise", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "burger", name: "Burger", category: "Pizzas sauce tomate", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "california", name: "California", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "chef", name: "Chef", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "chorizo", name: "Chorizo", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de", tags: ["Avec porc"] },
  { id: "classique", name: "Classique", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "country", name: "Country", category: "Pizzas sauce tomate", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "extreme", name: "Extrême", category: "Pizzas sauce tomate", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "fondue", name: "Fondue", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "gourmande", name: "Gourmande", category: "Pizzas sauce tomate", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "kebab", name: "Kebab", category: "Pizzas sauce tomate", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "mac-ken", name: "Mac Ken", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "mexicaine", name: "Mexicaine", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "montagnarde", name: "Montagnarde", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "napolitaine", name: "Napolitaine", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "neptune", name: "Neptune", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "orientale", name: "Orientale", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "provencale", name: "Provençale", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "raclette", name: "Raclette", category: "Pizzas sauce tomate", price: "12,00 €", pricePrefix: "À partir de" },
  { id: "reggina", name: "Reggina", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "reine", name: "Reine", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "texane", name: "Texane", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de" },
  { id: "trois-fromages", name: "Trois fromages", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de", tags: ["Végétarien"] },
  { id: "vegetarienne", name: "Végétarienne", category: "Pizzas sauce tomate", price: "11,00 €", pricePrefix: "À partir de", tags: ["Végétarien"] },

  /* Calzones */
  { id: "calzone-bouchee-reine", name: "Calzone Bouchée à la reine", category: "Calzones", price: "9,00 €", pricePrefix: "À partir de" },
  { id: "calzone-burger", name: "Calzone Burger", category: "Calzones", price: "9,00 €", pricePrefix: "À partir de" },
  { id: "calzone-burrito", name: "Calzone Burrito", category: "Calzones", price: "9,00 €", pricePrefix: "À partir de" },
  { id: "calzone-catalane", name: "Calzone Catalane", category: "Calzones", price: "9,00 €", pricePrefix: "À partir de" },
  { id: "calzone-fromage", name: "Calzone Chausson au fromage", category: "Calzones", price: "9,00 €", pricePrefix: "À partir de" },
  { id: "calzone-raclette", name: "Calzone Raclette", category: "Calzones", price: "9,00 €", pricePrefix: "À partir de" },
  { id: "calzone-viande-hachee", name: "Calzone viande hachée", category: "Calzones", price: "9,00 €", pricePrefix: "À partir de" },
  { id: "calzone-viking", name: "Calzone Viking", category: "Calzones", price: "9,00 €", pricePrefix: "À partir de" },

  /* Pizzinis */
  { id: "pizzini-bollywood", name: "Pizzini Bollywood", category: "Pizzinis", price: "6,90 €" },
  { id: "pizzini-grecque", name: "Pizzini Grecque", category: "Pizzinis", price: "7,90 €" },
  { id: "pizzini-nordique", name: "Pizzini Nordique", category: "Pizzinis", price: "7,90 €" },
  { id: "pizzini-parisien", name: "Pizzini Parisien", category: "Pizzinis", price: "6,90 €" },

  /* Accompagnements */
  { id: "camembert-12", name: "Bouchées de Camembert x12", category: "Accompagnements", price: "8,00 €" },
  { id: "camembert-24", name: "Bouchées de Camembert x24", category: "Accompagnements", price: "14,00 €" },
  { id: "mozzarella-12", name: "Bouchées de Mozzarella x12", category: "Accompagnements", price: "8,00 €" },
  { id: "mozzarella-24", name: "Bouchées de Mozzarella x24", category: "Accompagnements", price: "14,00 €" },

  /* Desserts */
  { id: "calzone-nutella", name: "Calzone Nutella", category: "Desserts", price: "5,00 €", pricePrefix: "À partir de" },
  { id: "pizzini-nutella", name: "Pizzini Nutella", category: "Desserts", price: "4,70 €" },
  { id: "tiramisu", name: "Tiramisu spéculoos caramel", category: "Desserts", price: "3,70 €" },

  /* Glaces */
  { id: "ben-jerrys", name: "Ben & Jerry's 100 ml", category: "Glaces", price: "3,50 €" },

  /* Boissons */
  { id: "cola-cherry", name: "Coca cherry 33cl", category: "Boissons", price: "1,50 €" },
  { id: "cola-15l", name: "Coca cola 1,5l", category: "Boissons", price: "3,00 €" },
  { id: "cola-33cl", name: "Coca cola 33cl", category: "Boissons", price: "1,50 €" },
  { id: "cola-zero-33cl", name: "Coca zero 33cl", category: "Boissons", price: "1,50 €" },
  { id: "ice-tea-15l", name: "Ice tea 1,5l", category: "Boissons", price: "3,00 €" },
  { id: "ice-tea-33cl", name: "Ice tea 33cl", category: "Boissons", price: "1,50 €" },
  { id: "lorina", name: "Lorina citron 33cl", category: "Boissons", price: "2,90 €" },
  { id: "oasis-2l", name: "Oasis 2l", category: "Boissons", price: "3,50 €" },
  { id: "oasis-33cl", name: "Oasis tropical 33cl", category: "Boissons", price: "1,50 €" },
  { id: "orangina-15l", name: "Orangina 1,5l", category: "Boissons", price: "3,00 €" },
  { id: "orangina-33cl", name: "Orangina 33cl", category: "Boissons", price: "1,50 €" },

  /* Menus */
  { id: "formule-pizzini", name: "Formule Pizzini + Potatoes", category: "Menus", price: "11,90 €" },
  { id: "menu-enfant", name: "Menu enfant + Pom’pot + cookie", category: "Menus", price: "6,90 €" }
];

