import { MapPin, Clock, ChevronUp } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container max-w-6xl mx-auto px-4 py-12 md:px-8">
      <div className="grid sm:grid-cols-3 gap-8">
        <div>
          <p className="font-heading font-extrabold text-xl mb-3">Saneamientos<br />Amador Moreno</p>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Tu tienda de fontanería, baño y cocina de confianza en el centro de Córdoba.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="h-4 w-4 text-secondary" />
            <p className="font-heading font-semibold text-sm">Dirección</p>
          </div>
          <p className="text-primary-foreground/70 text-sm">
            C. Escultor Juan de Mesa, 2<br />
            Centro, 14002 Córdoba
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-secondary" />
            <p className="font-heading font-semibold text-sm">Horario</p>
          </div>
          <p className="text-primary-foreground/70 text-sm">
            L-M-X-V: 8:30–14:00 / 17:00–20:00<br />
            J: 17:00–20:00<br />
            S: 9:00–13:00 · D: Cerrado
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/50 text-xs">
          © {new Date().getFullYear()} Saneamientos Amador Moreno. Todos los derechos reservados.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      </div>
    </div>
  </footer>
);

export default FooterSection;
