import logoFooter from "@/assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="py-8 px-4 text-center bg-background border-t border-border/50">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-muted-foreground">
        <p className="font-playfair text-sm sm:text-base">
          Développé par Rémi VAN HEGHE AJAX
        </p>
        <span className="hidden sm:inline">•</span>
        <div className="flex items-center gap-2">
          <span className="font-playfair text-sm sm:text-base">Logo par Lucile VAN HEGHE AJAX</span>
          <img
            src={logoFooter}
            alt="Logo L&J"
            className="w-6 h-6 object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
