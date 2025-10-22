import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Navigation = () => {

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Infos", path: "/", scrollTo: "infos" },
    { name: "Rallye", path: "/rallye" },
    { name: "Photos", path: "/galerie" },
  ];

  const handleNavClick = (e: React.MouseEvent, scrollTo?: string) => {
    if (scrollTo) {
      e.preventDefault();
      const element = document.getElementById(scrollTo);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToForm = () => {
    const element = document.getElementById("confirmation");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-accent animate-glow" />
            <span className="font-dreaming text-xl sm:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
              Forêt Enchantée
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.scrollTo)}
                className="font-dreaming text-sm sm:text-base font-medium text-foreground hover:text-accent transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={scrollToForm}
              className="font-inter text-xs sm:text-sm font-medium text-muted-foreground hover:text-accent transition-all duration-300 border border-border/50 hover:border-accent/50 px-3 py-1.5 rounded-full"
            >
              Confirmer
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
