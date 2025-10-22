import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Rallye", path: "/rallye" },
    { name: "Photos", path: "/galerie" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="w-6 h-6 text-accent animate-glow" />
            <span className="font-playfair text-xl sm:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
              Forêt Enchantée
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 sm:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-inter text-sm sm:text-base font-medium transition-all duration-300",
                  "hover:scale-120",
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
