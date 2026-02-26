import { useState } from "react";
import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import FireflyEffect from "@/components/FireflyEffect";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Info, ChevronDown } from "lucide-react";
import heroForest from "@/assets/hero-summer-forest.jpg";
import logoForest from "@/assets/logo-forest.png";

const Index = () => {
  const [dressCodeOpen, setDressCodeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <FloatingParticles count={30} />
      <FireflyEffect count={15} />

      {/* Hero Section */}
      <Hero image={heroForest}>
        <div className="flex flex-col items-center justify-center text-center gap-6 sm:gap-8 animate-fade-in-up pt-4 sm:pt-8">
          <img
            src={logoForest}
            alt="Logo Forêt Enchantée"
            className="w-44 sm:w-56 lg:w-67 h-auto object-contain"
            style={{ filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))" }}
          />

          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-3 text-soft-white text-2xl sm:text-3xl font-semibold">
              <Calendar className="w-7 h-7" />
              <span className="font-playfair">13 juin 2026</span>
            </div>
            <p className="font-inter text-lg sm:text-xl text-soft-white/90 mt-2">
              Gardez précieusement cette date
            </p>
          </div>

          <div className="mt-6">
            <Countdown targetDate="2026-06-13T00:00:00" />
          </div>

          <div className="mt-4 flex flex-col items-center gap-4 w-full max-w-xl px-4">
            <button
              onClick={() => setDressCodeOpen(!dressCodeOpen)}
              className="flex items-center gap-2 font-fiancee text-2xl text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300 px-8 py-3 rounded-full shadow-lg"
            >
              Dress Code
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${dressCodeOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`transition-all duration-500 ease-in-out w-full ${
                dressCodeOpen ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none h-0 overflow-hidden"
              }`}
            >
              <div className="bg-black/50 backdrop-blur-md rounded-2xl px-8 py-7 text-center border border-white/20 shadow-xl">
                <div className="space-y-4">
                  <p className="font-inter text-sm sm:text-base text-soft-white/95 leading-relaxed tracking-wide">
                    Notre mariage s'inspire d'une <span className="text-orange-300 font-medium">forêt enchantée</span>.
                  </p>
                  <div className="w-12 h-px bg-white/30 mx-auto" />
                  <p className="font-inter text-sm sm:text-base text-soft-white/95 leading-relaxed tracking-wide">
                    Si vous le souhaitez, jouez le jeu avec ces tons naturels :
                  </p>
                  <div className="flex justify-center gap-5">
                    {[
                      { color: "bg-green-700", label: "Vert" },
                      { color: "bg-amber-800", label: "Brun" },
                      { color: "bg-amber-100", label: "Beige" },
                      { color: "bg-orange-600", label: "Terracotta" },
                    ].map(({ color, label }) => (
                      <div key={label} className="flex flex-col items-center gap-1.5">
                        <div className={`w-8 h-8 rounded-full ${color} shadow-lg ring-2 ring-white/20`} />
                        <span className="font-inter text-xs text-white/70">{label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="w-12 h-px bg-white/30 mx-auto" />
                  <p className="font-inter text-sm sm:text-base text-soft-white/95 leading-relaxed tracking-wide">
                    La cérémonie et une partie des festivités se dérouleront à l'extérieur.
                    Vous pouvez porter des talons, mais veillez à rester à l'aise pour profiter pleinement de cette belle journée.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>

      {/* Infos Pratiques */}
      <section id="infos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-fiancee text-6xl sm:text-7xl font-normal text-foreground mb-4">
              Infos pratiques
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-soft border border-border/50 space-y-4">
              <div className="flex items-center gap-3 text-accent mb-4">
                <MapPin className="w-6 h-6" />
                <h3 className="font-playfair text-2xl font-semibold text-foreground">Lieu</h3>
              </div>
              <a
                href="https://maps.app.goo.gl/h8Vr2EXzSCJJZNZK6"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full">
                  Voir le lieu sur Google Maps
                </Button>
              </a>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft border border-border/50 space-y-4">
              <div className="flex items-center gap-3 text-accent mb-4">
                <Calendar className="w-6 h-6" />
                <h3 className="font-playfair text-2xl font-semibold text-foreground">Programme</h3>
              </div>
              <p className="text-muted-foreground">
                À partir de 15 heures, nous vous attendons pour la cérémonie.
              </p>
              <p className="text-muted-foreground">
                Nous vous retrouverons ensuite pour le vin d'honneur, avant de partager le dîner et une nuit de fête.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft border border-border/50 space-y-4">
              <div className="flex items-center gap-3 text-accent mb-4">
                <Users className="w-6 h-6" />
                <h3 className="font-playfair text-2xl font-semibold text-foreground">Hébergement</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Plusieurs options sont disponibles,
                il est également possible de camper sur place.
              </p>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open('https://www.go-wild.be/', '_blank')}
              >
                Voir les options
              </Button>
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

      <Footer />
    </div>
  );
};

export default Index;
