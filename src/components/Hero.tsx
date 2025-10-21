import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  image: string;
  children: ReactNode;
  className?: string;
  overlay?: boolean;
}

const Hero = ({ image, children, className, overlay = true }: HeroProps) => {
  return (
    <section className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", className)}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {children}
      </div>
    </section>
  );
};

export default Hero;
