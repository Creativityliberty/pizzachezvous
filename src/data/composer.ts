export type PizzaBase = {
  id: "creme" | "tomate";
  label: string;
  productName: string;
  price: string;
  description: string;
  accent: string;
};

export type PizzaSize = {
  id: string;
  label: string;
  note: string;
};

export type IngredientGroup = {
  id: string;
  title: string;
  accent: "red" | "yellow" | "green";
  ingredients: string[];
};

export const bases: PizzaBase[] = [
  {
    id: "creme",
    label: "Base crème fraîche",
    productName: "PIZZA BASE FRAICHE A COMPOSER",
    price: "7,00 €",
    description: "Douce, généreuse et fondante, parfaite pour les recettes gourmandes.",
    accent: "#FFD21A"
  },
  {
    id: "tomate",
    label: "Base sauce tomate",
    productName: "PIZZA BASE TOMATE A COMPOSER",
    price: "7,00 €",
    description: "Classique, vive et parfumée, idéale pour les envies traditionnelles.",
    accent: "#E30613"
  }
];

export const sizes: PizzaSize[] = [
  { id: "junior", label: "Junior", note: "Format enfant / petit appétit" },
  { id: "classique", label: "Classique", note: "Taille standard 33cm" },
  { id: "mega", label: "Mega", note: "Pour les grands gourmands" },
  { id: "super-mega", label: "Super Mega", note: "Format familial" },
  { id: "maxi", label: "Maxi géante", note: "Le format XXL ultime" },
  { id: "confirm", label: "À confirmer", note: "Décider avec le magasin" }
];

export const ingredientGroups: IngredientGroup[] = [
  {
    id: "cheese",
    title: "Fromages",
    accent: "yellow",
    ingredients: [
      "Mozzarella", "Chèvre frais", "Camembert de Normandie", 
      "Reblochon de Savoie AOP", "Raclette", "Bleu d’Auvergne", 
      "Boursin", "Cheddar anglais", "Feta grecque AOP", "Parmesan râpé"
    ]
  },
  {
    id: "meat",
    title: "Viandes",
    accent: "red",
    ingredients: [
      "Jambon", "Poulet mariné maison", "Tenders", "Bacon", 
      "Viande hachée pur bœuf", "Merguez", "Lardinettes", "Kebab", "Chorizo"
    ]
  },
  {
    id: "veg",
    title: "Légumes & extras",
    accent: "green",
    ingredients: [
      "Champignons de Paris", "Oignons rouges", "Oignons blancs", 
      "Poivrons", "Tomates fraîches", "Pommes de terre normandes", 
      "Olives noires naturelles", "Cornichons marinés", "Ananas"
    ]
  },
  {
    id: "sauce",
    title: "Sauces & touches",
    accent: "yellow",
    ingredients: [
      "Sauce Crousty", "Sauce Sriracha", "Sauce barbecue", 
      "Sauce curry", "Sauce blanche", "Sauce burger", 
      "Sauce miel moutarde", "Sauce tartare", "Sauce au poivre", 
      "Coulis de miel d’apiculteur"
    ]
  },
  {
    id: "sea",
    title: "Mer & spécialités",
    accent: "green",
    ingredients: [
      "Saumon fumé", "Thon", "Noix de Saint-Jacques", 
      "Citron de Sicile", "Anchois de Sicile", "Câpres de Sicile"
    ]
  }
];
