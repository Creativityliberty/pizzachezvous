import { Link } from "react-router-dom";
import { store } from "../../data/store";

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#F8F4EA] pt-24 pb-12 px-5 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start gap-4 lg:col-span-2">
          <Link to="/" className="flex flex-col leading-none">
            <img src="https://www.pizzachezvous.fr/images/logo/pizzachezvous_logo.png" alt="Pizza Chez Vous" className="h-12 md:h-16 w-auto" />
          </Link>
          <p className="text-white/60 font-medium max-w-sm">
            Pâte faite maison, produits frais & locaux, et savoir-faire unique.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-white/40 text-sm font-bold uppercase tracking-widest">Suivez-nous !</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold text-white mb-2">Navigation</h4>
          <Link to="/" className="text-white/70 hover:text-white transition-colors">Accueil</Link>
          <Link to="/menu" className="text-white/70 hover:text-white transition-colors">Notre carte</Link>
          <Link to="/composer" className="text-white/70 hover:text-white transition-colors">Composer</Link>
          <Link to="/offres" className="text-white/70 hover:text-white transition-colors">Menus</Link>
          <Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
          <Link to="/informations" className="text-white/70 hover:text-white transition-colors">Infos utiles</Link>
        </div>

        {/* Menu Shortcuts */}
        <div className="flex flex-col gap-3">
          <h4 className="text-lg font-bold text-white mb-2">Notre carte</h4>
          <Link to="/menu" className="text-white/70 hover:text-white transition-colors">Composez votre pizza</Link>
          <Link to="/menu" className="text-white/70 hover:text-white transition-colors">Pizzas crème fraîche</Link>
          <Link to="/menu" className="text-white/70 hover:text-white transition-colors">Pizzas sauce tomate</Link>
          <Link to="/menu" className="text-white/70 hover:text-white transition-colors">Calzones</Link>
          <Link to="/menu" className="text-white/70 hover:text-white transition-colors">Pizzinis</Link>
          <Link to="/menu" className="text-white/70 hover:text-white transition-colors">Desserts & Boissons</Link>
        </div>

        {/* Infos Commandes / Magasins */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">Nos magasins <span className="text-[10px] bg-[#00843D] text-white px-2 py-0.5 rounded font-black uppercase">Retrait</span></h4>
            {store.locations?.map((loc) => (
              <div key={loc.city} className="text-white/70 flex flex-col gap-1">
                <strong className={loc.city === "Doudeville" ? "text-[#E30613]" : "text-[#FFD21A]"}>{loc.city}</strong>
                <a href={`tel:${loc.phone}`} className="hover:text-white transition-colors font-mono font-bold text-sm">{loc.formattedPhone}</a>
                {loc.address && <span className="text-xs text-white/40">{loc.address}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-sm text-white/50">&copy; {new Date().getFullYear()} Pizza Chez Vous.</p>
        <p className="text-xs text-white/40 uppercase tracking-widest text-center">
          Pour votre santé, pratiquez une activité physique régulière — <a href="https://www.mangerbouger.fr" target="_blank" rel="noreferrer" className="hover:text-white uppercase p-1">mangerbouger.fr</a>
        </p>
      </div>
    </footer>
  );
};
