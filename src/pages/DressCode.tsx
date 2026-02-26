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
        <div className="flex flex-col items-center justify-center text-center gap-4 animate-fade-in-up pt-4 sm:pt-8">
          <h1 className="font-savoye text-6xl sm:text-8xl font-normal text-soft-white drop-shadow-lg">
            Dress Code
          </h1>
        </div>
      </Hero>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card p-10 rounded-2xl shadow-enchanted border border-border/50 space-y-6 text-center animate-fade-in-up">
            <p className="font-savoye text-2xl sm:text-3xl text-foreground leading-relaxed">
              Notre mariage s'inspire d'une forêt enchantée.
            </p>
            <p className="font-savoye text-2xl sm:text-3xl text-foreground leading-relaxed">
              Si vous le souhaitez, vous pouvez jouer le jeu avec des tons naturels : vert, brun, beige, terracotta.
            </p>
            <p className="font-savoye text-2xl sm:text-3xl text-foreground leading-relaxed">
              Si le temps nous le permet, la cérémonie et une partie des festivités se dérouleront à l'extérieur.
            </p>
            <p className="font-savoye text-2xl sm:text-3xl text-foreground leading-relaxed">
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
