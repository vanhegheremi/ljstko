import { useState, useEffect, useCallback } from "react";
import Navigation from "@/components/Navigation";
import FloatingParticles from "@/components/FloatingParticles";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Camera, Upload, ArrowLeft, Image as ImageIcon, Loader2, Download, X, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const Galerie = () => {
  const [photos, setPhotos] = useState<{ url: string; id: string }[]>([]);
  const [uploading, setUploading] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const { data, error } = await supabase
      .from("photos")
      .select("id, url")
      .order("created_at", { ascending: false });

    if (error) { console.error(error); return; }
    setPhotos(data ?? []);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    let successCount = 0;

    for (const file of Array.from(files)) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          { method: "POST", body: formData }
        );

        const data = await res.json();
        if (!res.ok) throw new Error(data.error?.message ?? "Upload échoué");

        const { error } = await supabase
          .from("photos")
          .insert({ url: data.secure_url });

        if (error) throw error;

        successCount++;
      } catch (err) {
        console.error(err);
        toast.error(`Erreur pour ${file.name}`);
      }
    }

    if (successCount > 0) {
      toast.success(
        `${successCount} souvenir${successCount > 1 ? "s" : ""} ajouté${successCount > 1 ? "s" : ""} à la clairière 🌿`,
        { description: "Merci de partager ce moment magique avec nous !", duration: 6000 }
      );
    }

    setUploading(false);
    fetchPhotos();
    e.target.value = "";
  };

  const handleDownload = async (url: string, index: number) => {
    try {
      const res = await fetch(url);
      const blob = await res.blob();
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `souvenir-${index + 1}.jpg`;
      a.click();
      URL.revokeObjectURL(a.href);
    } catch {
      toast.error("Erreur lors du téléchargement");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer cette photo ?")) return;
    setDeletingId(id);
    const { error } = await supabase.from("photos").delete().eq("id", id);
    setDeletingId(null);
    if (error) {
      toast.error("Erreur lors de la suppression");
      return;
    }
    toast.success("Photo supprimée");
    setPhotos((prev) => prev.filter((p) => p.id !== id));
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length]
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <FloatingParticles count={20} />

      {/* Header */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in-up">
            <Camera className="w-20 h-20 mx-auto mb-6 text-accent animate-glow" />
            <h1 className="font-playfair text-6xl sm:text-8xl lg:text-9xl font-bold text-foreground mb-6">
              Souvenirs de la Forêt Enchantée
            </h1>
            <p className="font-inter text-3xl sm:text-4xl text-muted-foreground max-w-3xl mx-auto">
              La magie continue… Partagez vos plus beaux souvenirs du grand jour.
            </p>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card p-8 sm:p-12 rounded-2xl shadow-enchanted border-2 border-dashed border-accent/40 text-center hover:border-accent/70 transition-all">
            <Upload className="w-20 h-20 mx-auto mb-6 text-accent" />
            <h2 className="font-playfair text-3xl sm:text-5xl font-semibold text-foreground mb-4">
              Ajoutez vos photos
            </h2>
            <p className="font-inter text-muted-foreground mb-8 text-2xl">
              Merci d'ajouter vos images au grimoire collectif 🌿
            </p>
            <Button
              type="button"
              size="lg"
              disabled={uploading}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-full shadow-glow text-2xl"
              onClick={() => document.getElementById("file-upload")?.click()}
            >
              {uploading ? (
                <><Loader2 className="w-7 h-7 mr-2 animate-spin" /> Envoi en cours…</>
              ) : (
                <><Camera className="w-7 h-7 mr-2" /> Sélectionner des photos</>
              )}
            </Button>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileUpload}
              className="hidden"
            />
            <p className="font-inter text-xl text-muted-foreground mt-4">
              Formats acceptés : JPG, PNG, WEBP · Compression automatique
            </p>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-5xl sm:text-6xl font-bold text-foreground mb-4">
              Les moments partagés
            </h2>
            <p className="font-inter text-muted-foreground text-2xl">
              {photos.length > 0
                ? `${photos.length} souvenir${photos.length > 1 ? "s" : ""} magique${photos.length > 1 ? "s" : ""}`
                : "Soyez les premiers à partager vos souvenirs !"}
            </p>
          </div>

          {photos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative aspect-square rounded-xl overflow-hidden shadow-soft hover:shadow-enchanted transition-all hover:scale-105"
                >
                  <img
                    src={photo.url}
                    alt={`Souvenir ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-end p-4 gap-2">
                    <p className="font-inter text-soft-white text-xl">
                      Photo {index + 1}
                    </p>
                    <button
                      onClick={() => handleDownload(photo.url, index)}
                      className="flex items-center gap-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white text-lg font-inter px-4 py-2 rounded-full transition-all"
                    >
                      <Download className="w-5 h-5" />
                      Télécharger
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <ImageIcon className="w-32 h-32 mx-auto mb-6 text-muted-foreground/30" />
              <p className="font-playfair text-3xl text-muted-foreground">
                La galerie attend vos premiers souvenirs…
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Navigation de retour */}
      <section className="py-12 px-4 text-center bg-background">
        <Button
          variant="outline"
          size="lg"
          className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-2xl"
          onClick={() => window.location.href = "/"}
        >
          <ArrowLeft className="w-7 h-7 mr-2" />
          Retour à l'accueil
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default Galerie;
