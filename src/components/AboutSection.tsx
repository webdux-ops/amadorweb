import { CheckCircle } from "lucide-react";

const highlights = [
  "Negocio tradicional con décadas de experiencia",
  "Referentes en fontanería y saneamientos en Córdoba",
  "Asesoramiento técnico personalizado por Rafa y su equipo",
  "Materiales de primeras marcas y calidad garantizada",
];

const AboutSection = () => (
  <section id="nosotros" className="section-padding section-alt">
    <div className="container max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Quiénes somos
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            Más que una tienda, <br className="hidden md:block" />
            <span className="text-secondary">tu fontanero de confianza</span>
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            En <strong className="text-foreground">Saneamientos Amador Moreno</strong> llevamos años siendo el punto
            de referencia en Córdoba para todo lo relacionado con fontanería, baño y cocina.
            Nuestro compromiso es ofrecerte los mejores materiales junto con un asesoramiento
            técnico cercano y honesto.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            <strong className="text-foreground">Rafa</strong>, nuestro experto, te guiará para
            encontrar la solución perfecta para tu proyecto, ya sea una reforma completa o una
            pequeña reparación. Aquí cada cliente es importante.
          </p>
          <ul className="space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-sm">{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-primary/5 flex items-center justify-center border border-border">
          <div className="text-center p-8">
            <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-heading font-extrabold text-secondary">AM</span>
            </div>
            <p className="font-heading font-bold text-lg">Saneamientos Amador Moreno</p>
            <p className="text-muted-foreground text-sm mt-1">Fontanería de confianza en Córdoba</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
