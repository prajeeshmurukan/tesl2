import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Energyoptimas home">
          <img
            src="/lovable-uploads/logo.png"
            alt="Energyoptimas renewable energy consulting logo"
            className="h-16 md:h-20 w-auto"
            loading="eager"
            decoding="async"
          />
          <span className="sr-only"></span>
        </Link>
        <nav className="hidden gap-6 md:flex" aria-label="Primary navigation">
          <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#why" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Why choose us ?</a>
          <a href="#sectors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sectors we serve</a>
          <a href="#team" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Team</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
     
        </div>
      </div>
    </header>
  );
};

export default Header;
