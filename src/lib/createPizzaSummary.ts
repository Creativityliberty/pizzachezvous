import { PizzaBase, PizzaSize } from "../data/composer";

export type ComposerState = {
  base?: PizzaBase;
  size?: PizzaSize;
  ingredients: string[];
  remarks?: string;
};

export function createPizzaSummary(state: ComposerState): string {
  const { base, size, ingredients, remarks } = state;
  
  let summary = "Bonjour Pizza Chez Vous, je souhaite commander une pizza à composer en retrait magasin à Doudeville.\n\n";
  
  summary += `Base : ${base ? base.label : "Non sélectionnée"}\n`;
  summary += `Format : ${size ? size.label : "Non sélectionné"}\n`;
  summary += `Ingrédients : ${ingredients.length > 0 ? ingredients.join(", ") : "Aucun"}\n`;
  
  if (remarks) {
    summary += `Remarques : ${remarks}\n`;
  }
  
  summary += "\nPouvez-vous me confirmer le prix et la disponibilité ?";
  
  return summary;
}
