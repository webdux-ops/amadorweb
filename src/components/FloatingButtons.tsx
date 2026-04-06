import { MapPin, Phone } from "lucide-react";

const MAPS_URL = "https://www.google.com/maps/dir//C.+Escultor+Juan+de+Mesa,+2,+Centro,+14002+C%C3%B3rdoba,+Espa%C3%B1a";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <a
      href="tel:+34957000000"
      className="w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform md:hidden"
      aria-label="Llamar"
    >
      <Phone className="h-6 w-6" />
    </a>
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Cómo llegar"
    >
      <MapPin className="h-6 w-6" />
    </a>
  </div>
);

export default FloatingButtons;
