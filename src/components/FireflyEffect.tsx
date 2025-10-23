import { useEffect, useState } from "react";

interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  glowIntensity: number;
}

const FireflyEffect = ({ count = 15 }: { count?: number }) => {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);

  useEffect(() => {
    const newFireflies = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 5,
      glowIntensity: Math.random() * 0.5 + 0.5,
    }));
    setFireflies(newFireflies);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Fireflies */}
      {fireflies.map((firefly) => (
        <div
          key={firefly.id}
          className="absolute rounded-full bg-white animate-float"
          style={{
            left: `${firefly.x}%`,
            top: `${firefly.y}%`,
            width: `${firefly.size}px`,
            height: `${firefly.size}px`,
            animationDuration: `${firefly.duration}s`,
            animationDelay: `${firefly.delay}s`,
            opacity: firefly.glowIntensity,
            boxShadow: `0 0 ${firefly.size * 4}px ${firefly.size * 2}px rgba(255, 255, 255, ${firefly.glowIntensity})`,
            filter: "blur(0.5px)",
          }}
        />
      ))}
      
      {/* Mist effect */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary/10 to-transparent animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div 
          className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/10 to-transparent animate-pulse"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
      </div>
    </div>
  );
};

export default FireflyEffect;
