import { Phone, PhoneCall, ShoppingBag, Menu, X, MapPin } from "lucide-react";
import { store } from "../../data/store";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl liquid-glass-food rounded-[1rem] px-5 py-3 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Fallback text logo styled strongly with logo colors */}
          <Link to="/" className="flex items-center">
            <img src="https://www.pizzachezvous.fr/images/logo/pizzachezvous_logo.png" alt="Pizza Chez Vous" className="h-10 md:h-12 w-auto" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-[#F8F4EA] font-medium hover:text-[#FFD21A] transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFD21A] hover:after:w-full after:transition-all">Accueil</Link>
          <Link to="/menu" className="text-[#F8F4EA] font-medium hover:text-[#FFD21A] transition-colors">Notre carte</Link>
          <Link to="/composer" className="text-[#F8F4EA] font-medium hover:text-[#FFD21A] transition-colors">Composer</Link>
          <Link to="/offres" className="text-[#F8F4EA] font-medium hover:text-[#FFD21A] transition-colors">Menus</Link>
          <Link to="/contact" className="text-[#F8F4EA] font-medium hover:text-[#FFD21A] transition-colors">Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${store.phone}`} className="flex items-center gap-2 text-[#FFF8E8] hover:text-[#FFD21A] transition-colors">
            <Phone size={18} />
            <span className="font-semibold">{store.formattedPhone}</span>
          </a>
          
          <div className="flex items-center gap-3">
            <div className="green-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold">
              <ShoppingBag size={14} />
              <span>Retrait magasin</span>
            </div>
            
            <a href={`tel:${store.phone}`} className="red-button flex items-center gap-2 px-5 py-2 rounded-full font-bold">
              <span>Commander</span>
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 liquid-glass-food rounded-[1rem] p-5 flex flex-col gap-4 shadow-xl border border-white/10 md:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-3 pb-4 border-b border-white/10">
            <Link to="/" className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Accueil</Link>
            <Link to="/menu" className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Notre carte</Link>
            <Link to="/composer" className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Composer</Link>
            <Link to="/offres" className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Menus</Link>
            <Link to="/contact" className="text-white text-lg font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
          
          <div className="flex flex-col gap-3 pt-2">
            <div className="green-pill flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold">
              <ShoppingBag size={16} />
              Retrait magasin
            </div>
            <a href={`tel:${store.phone}`} className="red-button flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-bold text-center">
              <PhoneCall size={18} /> Commander maintenant
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
