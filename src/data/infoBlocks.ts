import { Phone, Store, CreditCard, Info, AlertCircle, ShoppingBag, Clock, HeartPulse, Leaf } from "lucide-react";

export const infoBlocks = [
  {
    id: "commande",
    title: "Commande internet",
    description: "Les commandes internet sont actuellement fermées. Le site permet de consulter la carte et de composer votre pizza, mais l'acte de commande se fait par téléphone.",
    icon: ShoppingBag,
    accent: "red"
  },
  {
    id: "retrait",
    title: "Retrait magasin",
    description: "Pizza Chez Vous fonctionne en retrait magasin (Pickup) à Doudeville. Pas de service de livraison annoncé pour le moment.",
    icon: Store,
    accent: "green"
  },
  {
    id: "prix",
    title: "Prix à partir de",
    description: "Certains prix sont indiqués 'à partir de'. Le tarif final peut varier selon le format choisi (ex: 29cm, 33cm, 40cm) ou les options ajoutées.",
    icon: CreditCard,
    accent: "yellow"
  },
  {
    id: "disponibilite",
    title: "Disponibilité",
    description: "La disponibilité des produits, des ingrédients et les délais de retrait sont confirmés directement par le magasin lors de votre appel.",
    icon: Clock,
    accent: "blue"
  },
  {
    id: "allergenes",
    title: "Allergènes",
    description: "Pour toute allergie ou contrainte alimentaire, demandez conseil lors de votre appel. Le magasin dispose des informations complètes sur la composition.",
    icon: Info,
    accent: "red"
  },
  {
    id: "sante",
    title: "Note santé",
    description: "Pour votre santé, pratiquez une activité physique régulière — www.mangerbouger.fr",
    icon: HeartPulse,
    accent: "green"
  }
];
