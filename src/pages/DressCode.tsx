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
        <div className="flex flex-col items-center justify-center text-center gap-4 animate-fade-in-up">
          <h1 className="font-fiancee text-7xl sm:text-9xl font-normal text-soft-white drop-shadow-lg">
            Dress Code
          </h1>
          <p className="font-inter text-base sm:text-lg text-soft-white/80 tracking-widest uppercase">
            Forêt Enchantée
          </p>
        </div>
      </Hero>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-xl">

          {/* Inspiration */}
          <div className="text-center mb-12 animate-fade-in-up">
            <p className="font-fiancee text-5xl sm:text-6xl text-foreground leading-snug">
              Notre mariage s'inspire<br />d'une forêt enchantée.
            </p>
          </div>

          {/* Palette */}
          <div className="bg-card rounded-2xl shadow-enchanted border border-border/50 p-8 mb-8 text-center animate-fade-in-up">
            <p className="font-inter text-sm uppercase tracking-widest text-muted-foreground mb-5">
              Palette suggérée
            </p>
            <div className="flex justify-center gap-4 mb-5">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-700 shadow-md" />
                <span className="font-inter text-xs text-muted-foreground">Vert</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-800 shadow-md" />
                <span className="font-inter text-xs text-muted-foreground">Brun</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 border border-border shadow-md" />
                <span className="font-inter text-xs text-muted-foreground">Beige</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-orange-600 shadow-md" />
                <span className="font-inter text-xs text-muted-foreground">Terracotta</span>
              </div>
            </div>
            <p className="font-inter text-sm text-muted-foreground leading-relaxed">
              Si vous le souhaitez, vous pouvez jouer le jeu avec ces tons naturels.
            </p>
          </div>

          {/* Pratique */}
          <div className="bg-card rounded-2xl shadow-soft border border-border/50 p-8 text-center animate-fade-in-up">
            <p className="font-inter text-sm uppercase tracking-widest text-muted-foreground mb-4">
              À noter
            </p>
            <p className="font-inter text-base text-foreground leading-relaxed mb-4">
              La cérémonie et une partie des festivités se dérouleront à l'extérieur si le temps le permet.
            </p>
            <p className="font-inter text-base text-foreground leading-relaxed">
              Vous pouvez porter des talons, mais veillez à rester à l'aise pour profiter pleinement de cette belle journée.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DressCode;
