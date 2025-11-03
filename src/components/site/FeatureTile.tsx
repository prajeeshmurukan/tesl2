import React from "react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureTileProps {
  Icon?: LucideIcon;
  title: string;
  description: string;
}

const FeatureTile: React.FC<FeatureTileProps> = ({ Icon, title, description }) => {
  const FallbackIcon = Icon;
  return (
    <Card className="group relative overflow-hidden border border-primary/10 bg-card/60 backdrop-blur hover:shadow-md transition-all hover:-translate-y-0.5 animate-fade-up">
      <CardContent className="flex items-start gap-4 p-6">
        <div className="rounded-xl bg-gradient-primary p-3 text-primary-foreground shadow-sm">
          {FallbackIcon ? <FallbackIcon className="h-5 w-5" aria-hidden /> : null}
        </div>
        <div>
          <h3 className="text-base md:text-lg font-semibold leading-tight">{title}</h3>
          <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        </div>
      </CardContent>
      <div className="pointer-events-none absolute -top-6 -right-6 h-16 w-16 rounded-full bg-primary/10 blur-2xl" />
    </Card>
  );
};

export default FeatureTile;
