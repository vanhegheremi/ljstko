import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import FireflyEffect from "@/components/FireflyEffect";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import heroForest from "@/assets/hero-summer-forest.jpg";

const DressCode = () => {
  return (
    <div className="min-h-screen bg-background font-savoye">
      <Navigation />
      <FloatingParticles count={20} />
      <FireflyEffect count={10} />

      <Hero image={heroForest}>
        <div className="flex flex-col items-center justify-center text-center gap-8 animate-fade-in-up pt-4 sm:pt-8">
          <h1 className="font-savoye text-6xl sm:text-8xl font-normal text-soft-white drop-shadow-lg">
            Dress Code
          </h1>
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl px-8 py-8 max-w-2xl w-full border border-soft-white/20 space-y-6 text-center">
            <p className="font-savoye text-2xl sm:text-3xl text-soft-white leading-relaxed">
              Notre mariage s'inspire d'une forêt enchantée.
            </p>
            <p className="font-savoye text-2xl sm:text-3xl text-soft-white leading-relaxed">
              Si vous le souhaitez, vous pouvez jouer le jeu avec des tons naturels :
            </p>
            <div className="flex justify-center gap-4">
              {["#6A7147", "#BB792D", "#B05A1F", "#C38360", "#AE9173"].map((color) => (
                <div
                  key={color}
                  className="w-10 h-10 rounded-full shadow-md"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="font-savoye text-2xl sm:text-3xl text-soft-white leading-relaxed">
              Si le temps nous le permet, la cérémonie et une partie des festivités se dérouleront à l'extérieur.
            </p>
            <p className="font-savoye text-2xl sm:text-3xl text-soft-white leading-relaxed">
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
