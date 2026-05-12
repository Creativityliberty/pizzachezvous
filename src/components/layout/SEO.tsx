import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SEO = ({ 
  title = "Pizza Chez Vous | Pizzeria Artisanale en Normandie", 
  description = "Pâte faite maison, produits frais et locaux. Commandez vos pizzas à Doudeville, Yerville et Octeville-sur-Mer. Retrait magasin uniquement.",
  image = "https://www.pizzachezvous.fr/images/logo/pizzachezvous_logo.png",
  url = "https://pizza-chez-vous.vercel.app"
}: SEOProps) => {
  const fullTitle = title.includes("Pizza Chez Vous") ? title : `${title} | Pizza Chez Vous`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};
