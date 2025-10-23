import { useState } from "react";
import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import FireflyEffect from "@/components/FireflyEffect";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollText, Sparkles, Trophy, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import missionForest from "@/assets/mission-forest.jpg";

const Rallye = () => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Votre réponse s'est envolée dans la forêt… 🌿", {
      description: "Nous vous recontacterons si la magie opère.",
      duration: 6000,
    });
    setAnswer("");
  };

  const scrollToSteps = () => {
    document.getElementById("steps")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <FloatingParticles count={25} />
      <FireflyEffect count={12} />

      {/* Hero Section */}
      <Hero image={missionForest}>
        <div className="flex flex-col items-center justify-center text-center gap-8 animate-fade-in-up">
          <Sparkles className="w-20 h-20 text-accent animate-glow" />
          <h1 className="font-dreaming text-5xl sm:text-7xl lg:text-8xl font-bold text-soft-white drop-shadow-lg">
            Une mission vous attend…
          </h1>
          <p className="font-playfair text-2xl sm:text-3xl text-accent max-w-2xl">
            Le secret du Domaine des Chênes d'Or
          </p>
          <p className="font-inter text-lg sm:text-xl text-soft-white/90 max-w-3xl leading-relaxed">
            Au cœur de la forêt, une énigme sommeille…<br />
            Vous devrez faire preuve de curiosité, d'esprit d'équipe et d'un brin de magie pour la résoudre.
          </p>
          <Button
            onClick={scrollToSteps}
            size="lg"
            className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105"
          >
            Commencer la quête
          </Button>
        </div>
      </Hero>

      {/* Déroulement du rallye */}
      <section id="steps" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <ScrollText className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h2 className="font-dreaming text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Comment participer ?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { step: "1", title: "Lisez les indices", desc: "Observez attentivement chaque détail" },
              { step: "2", title: "Résolvez les énigmes", desc: "Utilisez votre perspicacité" },
              { step: "3", title: "Trouvez les mots magiques", desc: "Ils sont cachés partout" },
              { step: "4", title: "Déposez vos réponses", desc: "Avant minuit le jour J" },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-card p-8 rounded-xl shadow-soft border border-border/50 hover:shadow-enchanted transition-all hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-playfair text-2xl font-bold shadow-glow">
                    {item.step}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premier Indice */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-dreaming text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Premier indice
            </h2>
            <p className="text-muted-foreground text-lg">
              La quête commence ici… Ouvrez l'œil.
            </p>
          </div>

          <div className="bg-card p-12 rounded-2xl shadow-enchanted border-2 border-accent/30 text-center">
            <div className="mb-6">
              <Sparkles className="w-16 h-16 mx-auto text-accent animate-glow" />
            </div>
            <p className="font-playfair text-2xl text-foreground italic leading-relaxed">
              "Dans l'ombre des chênes dorés,<br />
              Trois mots se cachent, enchantés.<br />
              Cherchez dans la mousse et les feuilles,<br />
              Là où la lumière s'agenouille."
            </p>
            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <p className="text-muted-foreground text-sm">
                💡 Les indices suivants seront révélés progressivement…
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de réponse */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-dreaming text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Votre réponse
            </h2>
            <p className="text-muted-foreground text-lg">
              Partagez votre solution à l'énigme
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-enchanted border border-border/50">
            <Textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="bg-background border-border focus:border-accent min-h-[200px] font-inter"
              placeholder="Écrivez votre réponse ici… Soyez aussi créatif et détaillé que possible !"
              required
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg shadow-soft"
            >
              Envoyer ma réponse
            </Button>
          </form>
        </div>
      </section>

      {/* Classement / Remerciement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-3xl text-center">
          <Trophy className="w-16 h-16 mx-auto mb-6 text-accent animate-glow" />
          <h2 className="font-dreaming text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Les aventuriers du Domaine
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Les résultats seront dévoilés après la grande quête…
          </p>
          <div className="bg-card p-12 rounded-2xl shadow-soft border border-border/50">
            <p className="text-2xl font-playfair text-accent">
              À suivre… ✨
            </p>
          </div>
        </div>
      </section>

      {/* Navigation de retour */}
      <section className="py-12 px-4 text-center">
        <Button
          variant="outline"
          size="lg"
          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          onClick={() => window.location.href = "/"}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à la clairière
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default Rallye;
