import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface FireworksButtonProps {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
}

const FireworksButton = ({ onClick, type = "button", className, children }: FireworksButtonProps) => {
  const [isExploding, setIsExploding] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsExploding(true);
    onClick();
    
    // Créer des particules de feu d'artifice
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 20; i++) {
      createParticle(centerX, centerY);
    }

    setTimeout(() => setIsExploding(false), 1000);
  };

  const createParticle = (x: number, y: number) => {
    const particle = document.createElement("div");
    particle.className = "firework-particle";
    
    const angle = (Math.PI * 2 * Math.random());
    const velocity = 50 + Math.random() * 50;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity;
    
    const colors = ["#FFD700", "#FFA500", "#FF6B6B", "#4ECDC4", "#95E1D3"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 8px;
      height: 8px;
      background: ${color};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      box-shadow: 0 0 10px ${color};
    `;
    
    document.body.appendChild(particle);
    
    let posX = x;
    let posY = y;
    let velocityX = dx;
    let velocityY = dy;
    const gravity = 2;
    const friction = 0.98;
    
    const animate = () => {
      velocityY += gravity;
      velocityX *= friction;
      velocityY *= friction;
      
      posX += velocityX * 0.1;
      posY += velocityY * 0.1;
      
      particle.style.left = posX + "px";
      particle.style.top = posY + "px";
      particle.style.opacity = String(parseFloat(particle.style.opacity || "1") - 0.02);
      
      if (parseFloat(particle.style.opacity || "1") > 0) {
        requestAnimationFrame(animate);
      } else {
        particle.remove();
      }
    };
    
    requestAnimationFrame(animate);
  };

  return (
    <Button
      type={type}
      onClick={handleClick}
      className={`${className} ${isExploding ? "scale-95" : ""} transition-transform relative overflow-visible`}
    >
      {children}
      {isExploding && (
        <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-yellow-300 animate-ping" />
      )}
    </Button>
  );
};

export default FireworksButton;
