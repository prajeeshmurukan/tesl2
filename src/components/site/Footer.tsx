import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 bg-muted/30 border-t">

      <div className="border-t">
        <div className="container py-4 text-xs text-muted-foreground">© {year} Travancore Energy Solutions Private Limited. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
