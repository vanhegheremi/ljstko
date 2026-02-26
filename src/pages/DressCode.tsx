import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import FireflyEffect from "@/components/FireflyEffect";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import heroForest from "@/assets/hero-summer-forest.jpg";

const DressCode = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <FloatingParticles count={20} />
      <FireflyEffect count={10} />

      <Hero image={heroForest}>
        <div className="flex flex-col items-center text-center gap-8 animate-fade-in-up py-8 w-full max-w-lg mx-auto">

          {/* Titre */}
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-fiancee text-7xl sm:text-8xl font-normal text-soft-white drop-shadow-lg leading-none">
              Dress Code
            </h1>
            <p className="font-inter text-xs tracking-[0.25em] uppercase text-soft-white/70">
              Forêt Enchantée
            </p>
          </div>

          {/* Palette */}
          <div className="w-full bg-black/35 backdrop-blur-md rounded-2xl px-6 py-6 border border-white/15 shadow-xl">
            <p className="font-inter text-xs uppercase tracking-widest text-white/60 mb-5">
              Palette suggérée
            </p>
            <div className="flex justify-center gap-6 mb-5">
              {[
                { color: "bg-green-700", label: "Vert" },
                { color: "bg-amber-800", label: "Brun" },
                { color: "bg-amber-100", label: "Beige" },
                { color: "bg-orange-600", label: "Terracotta" },
              ].map(({ color, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className={`w-9 h-9 rounded-full ${color} shadow-lg ring-2 ring-white/20`} />
                  <span className="font-inter text-xs text-white/70">{label}</span>
                </div>
              ))}
            </div>
            <p className="font-inter text-sm text-white/85 leading-relaxed">
              Si vous le souhaitez, jouez le jeu avec ces tons naturels.
            </p>
          </div>

          {/* À noter */}
          <div className="w-full bg-black/35 backdrop-blur-md rounded-2xl px-6 py-6 border border-white/15 shadow-xl">
            <p className="font-inter text-xs uppercase tracking-widest text-white/60 mb-4">
              À noter
            </p>
            <p className="font-inter text-sm text-white/85 leading-relaxed mb-3">
              La cérémonie et une partie des festivités se dérouleront à l'extérieur si le temps le permet.
            </p>
            <div className="w-8 h-px bg-white/25 mx-auto my-3" />
            <p className="font-inter text-sm text-white/85 leading-relaxed">
              Vous pouvez porter des talons, mais veillez à rester à l'aise pour profiter pleinement de cette belle journée.
            </p>
          </div>

        </div>
      </Hero>

      <Footer />
    </div>
  );
};

export default DressCode;
