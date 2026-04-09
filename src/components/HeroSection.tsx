import { MapPin, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Exposición de grifería y baño en Saneamientos Amador Moreno"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-secondary font-heading font-semibold text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in">
          Saneamientos Amador Moreno
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
          Fontanería de toda la vida en Córdoba
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Materiales de primera calidad y asesoramiento profesional en pleno centro
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold text-base px-8"
            onClick={() => document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Ver productos
          </Button>
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold text-base px-8"
            onClick={() => document.getElementById("ubicacion")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MapPin className="mr-2 h-5 w-5" />
            Cómo llegar
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
