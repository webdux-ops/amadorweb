import { MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const MAPS_URL = "https://www.google.com/maps/dir//C.+Escultor+Juan+de+Mesa,+2,+Centro,+14002+C%C3%B3rdoba,+Espa%C3%B1a";
const EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5!2d-4.7793!3d37.8882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUzJzE3LjUiTiA0wrA0Nic0NS41Ilc!5e0!3m2!1ses!2ses!4v1";

const LocationSection = () => (
  <section id="ubicacion" className="section-padding section-alt">
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          Ubicación
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Encuéntranos en el centro de Córdoba
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="rounded-xl overflow-hidden border border-border/50 min-h-[320px]">
          <iframe
            title="Ubicación de Saneamientos Amador Moreno"
            src={EMBED_URL}
            className="w-full h-full min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-start gap-3 mb-6">
            <MapPin className="h-6 w-6 text-secondary mt-1 shrink-0" />
            <div>
              <p className="font-bold text-lg">Saneamientos Amador Moreno</p>
              <p className="text-muted-foreground">
                C. Escultor Juan de Mesa, 2<br />
                Centro, 14002 Córdoba, España
              </p>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold w-fit"
            asChild
          >
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Cómo llegar
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
