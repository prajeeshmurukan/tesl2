import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 bg-muted/30 border-t">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">Travancore Energy Solutions Private Limited.</p>
          <p className="text-muted-foreground">Strategic Energy & Power Consulting</p>
        </div>
        <nav className="grid content-start gap-2">
          <a href="#about" className="text-sm text-foreground/90 story-link">About</a>
          <a href="#solutions" className="text-sm text-foreground/90 story-link">Key Solutions</a>
          <a href="#services" className="text-sm text-foreground/90 story-link">Services</a>
          <a href="#sectors" className="text-sm text-foreground/90 story-link">Sectors</a>
          <a href="#contact" className="text-sm text-foreground/90 story-link">Contact</a>
        </nav>
        <div className="text-sm text-muted-foreground">
          <p>contact@tesl.com • trading@tesl.com</p>
          <p>+91 (471) 123-4567 • +91 (471) 987-6543</p>
          <p>123 Tech Park, Trivandrum, Kerala, India</p>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-xs text-muted-foreground">© {year} Travancore Energy Solutions Private Limited. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
