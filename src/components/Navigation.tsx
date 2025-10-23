import { Link } from "react-router-dom";
import { Sparkles, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const isMobile = useIsMobile();

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Infos", path: "/", scrollTo: "infos" },
    { name: "Surprise", path: "#", disabled: true },
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
        {isMobile ? (
          // Mobile Navigation
          <div className="flex items-center justify-center h-16 relative">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="absolute left-0">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={(e) => {
                        if (link.disabled) {
                          e.preventDefault();
                        } else {
                          handleNavClick(e, link.scrollTo);
                        }
                      }}
                      className={`font-fiancee text-xl font-normal transition-all duration-300 ${
                        link.disabled 
                          ? 'text-muted-foreground/50 cursor-not-allowed' 
                          : 'text-foreground hover:text-accent'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <button
                    onClick={scrollToForm}
                    className="font-inter text-sm font-medium text-muted-foreground hover:text-accent transition-all duration-300 border border-border/50 hover:border-accent/50 px-4 py-2 rounded-full text-left"
                  >
                    Confirmer
                  </button>
                </div>
              </SheetContent>
            </Sheet>

            <Link to="/" className="group">
              <span className="font-fiancee text-3xl font-normal text-foreground group-hover:text-accent transition-colors">
                Mariage de Lucie et Julien
              </span>
            </Link>
          </div>
        ) : (
          // Desktop Navigation
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <Sparkles className="w-6 h-6 text-accent animate-glow" />
              <span className="font-fiancee text-3xl font-normal text-foreground group-hover:text-accent transition-colors">
                Mariage de Lucie et Julien
              </span>
            </Link>

            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    if (link.disabled) {
                      e.preventDefault();
                    } else {
                      handleNavClick(e, link.scrollTo);
                    }
                  }}
                  className={`font-fiancee text-xl font-normal transition-all duration-300 ${
                    link.disabled 
                      ? 'text-muted-foreground/50 cursor-not-allowed' 
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={scrollToForm}
                className="font-inter text-sm font-medium text-muted-foreground hover:text-accent transition-all duration-300 border border-border/50 hover:border-accent/50 px-3 py-1.5 rounded-full"
              >
                Confirmer
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
