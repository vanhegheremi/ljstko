import { useState } from "react";
import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import FireflyEffect from "@/components/FireflyEffect";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MapPin, Calendar, Users, Info, Sparkles } from "lucide-react";
import { toast } from "sonner";
import heroForest from "@/assets/hero-forest.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: "",
    presence: "",
    allergies: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pour l'instant, juste un toast. L'envoi d'email nécessitera Lovable Cloud.
    toast.success("Merci ✨ Votre présence est notée dans notre grand grimoire magique.", {
      description: "Nous avons hâte de vous retrouver !",
    });
    setFormData({ name: "", guests: "", presence: "", allergies: "" });
  };

  const scrollToForm = () => {
    document.getElementById("confirmation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <FloatingParticles count={30} />
      <FireflyEffect count={15} />

      {/* Hero Section */}
      <Hero image={heroForest}>
        <div className="flex flex-col items-center justify-center text-center gap-8 animate-fade-in-up">
          <h1 className="font-dreaming text-5xl sm:text-7xl lg:text-8xl font-bold text-soft-white drop-shadow-lg">
            Bienvenue dans notre forêt enchantée
          </h1>
          <p className="font-inter text-xl sm:text-2xl text-soft-white/90 max-w-2xl">
            Gardez précieusement cette date
          </p>
          
          <div className="flex flex-col items-center gap-6 mt-8">
            <div className="flex items-center gap-4 text-accent text-lg sm:text-xl font-semibold bg-card/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-glow">
              <Calendar className="w-6 h-6" />
              <span className="font-playfair">13 juin 2026</span>
            </div>
            <div className="flex items-center gap-4 text-soft-white text-lg sm:text-xl bg-primary/60 backdrop-blur-sm px-8 py-4 rounded-full">
              <MapPin className="w-6 h-6" />
              <span className="font-inter">Domaine des Chênes d'Or</span>
            </div>
          </div>

          <div className="mt-12">
            <Countdown targetDate="2026-06-13T00:00:00" />
          </div>

          <Button
            onClick={scrollToForm}
            size="lg"
            className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105"
          >
            Je confirme ma présence
          </Button>
        </div>
      </Hero>

      {/* Confirmation Section */}
      <section id="confirmation" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted relative">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-dreaming text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Confirmation de présence
            </h2>
            <p className="font-inter text-muted-foreground text-lg">
              Faites-nous savoir si vous pourrez nous rejoindre dans cette aventure magique
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-enchanted border border-border/50">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-semibold">
                Nom / Prénom *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background border-border focus:border-accent"
                placeholder="Votre nom complet"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests" className="text-foreground font-semibold">
                Accompagnant(s)
              </Label>
              <Input
                id="guests"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="bg-background border-border focus:border-accent"
                placeholder="Nom de vos accompagnants (facultatif)"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-foreground font-semibold">Présence *</Label>
              <RadioGroup
                value={formData.presence}
                onValueChange={(value) => setFormData({ ...formData, presence: value })}
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="oui" id="oui" />
                  <Label htmlFor="oui" className="cursor-pointer">Oui, je serai présent(e)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="non" id="non" />
                  <Label htmlFor="non" className="cursor-pointer">Non, je ne pourrai pas venir</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="peut-etre" id="peut-etre" />
                  <Label htmlFor="peut-etre" className="cursor-pointer">Peut-être</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="allergies" className="text-foreground font-semibold">
                Allergies ou restrictions alimentaires
              </Label>
              <Textarea
                id="allergies"
                value={formData.allergies}
                onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
                className="bg-background border-border focus:border-accent min-h-[100px]"
                placeholder="Informez-nous de vos éventuelles allergies (facultatif)"
              />
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-lg shadow-soft">
              Envoyer ma réponse
            </Button>
          </form>
        </div>
      </section>

      {/* Infos Pratiques */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-dreaming text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Infos pratiques
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-soft border border-border/50 space-y-4">
              <div className="flex items-center gap-3 text-accent mb-4">
                <MapPin className="w-6 h-6" />
                <h3 className="font-playfair text-2xl font-semibold text-foreground">Lieu</h3>
              </div>
              <p className="text-foreground font-semibold">Domaine des Chênes d'Or</p>
              <p className="text-muted-foreground">Point GPS : 50.347289</p>
              <Button variant="outline" className="mt-4 w-full">
                Ouvrir dans Maps
              </Button>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft border border-border/50 space-y-4">
              <div className="flex items-center gap-3 text-accent mb-4">
                <Calendar className="w-6 h-6" />
                <h3 className="font-playfair text-2xl font-semibold text-foreground">Programme</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 14h00 - Cérémonie</li>
                <li>• 16h00 - Cocktail dans les jardins</li>
                <li>• 19h00 - Dîner</li>
                <li>• 22h00 - Soirée dansante</li>
              </ul>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft border border-border/50 space-y-4">
              <div className="flex items-center gap-3 text-accent mb-4">
                <Users className="w-6 h-6" />
                <h3 className="font-playfair text-2xl font-semibold text-foreground">Hébergement</h3>
              </div>
              <p className="text-muted-foreground">
                Plusieurs options d'hébergement sont disponibles à proximité du domaine.
                Liste détaillée sur demande.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft border border-border/50 space-y-4">
              <div className="flex items-center gap-3 text-accent mb-4">
                <Info className="w-6 h-6" />
                <h3 className="font-playfair text-2xl font-semibold text-foreground">Note importante</h3>
              </div>
              <p className="text-muted-foreground italic">
                "Avec tous les petits bouts qui ont rejoint nos vies, nous formerions une joyeuse tribu un peu trop nombreuse…
                Pour que cette journée reste intime, nous la vivrons entre adultes."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-magic"></div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-accent animate-glow" />
          <h2 className="font-dreaming text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Une mission vous attend…
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            On vous en dira plus en temps voulu. Préparez-vous à une aventure magique.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            onClick={() => window.location.href = "/rallye"}
          >
            Découvrir la mission
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p className="font-playfair">Forêt Enchantée • 13 juin 2026</p>
      </footer>
    </div>
  );
};

export default Index;
