import { Award, Gem, Heart, MapPin } from "lucide-react";

const items = [
  { icon: Award, title: "Asesoramiento experto", desc: "Décadas de experiencia a tu servicio" },
  { icon: Gem, title: "Materiales de calidad", desc: "Las mejores marcas del mercado" },
  { icon: Heart, title: "Atención cercana", desc: "Trato personalizado y profesional" },
  { icon: MapPin, title: "Ubicación céntrica", desc: "En pleno centro de Córdoba" },
];

const ValueProps = () => (
  <section className="section-padding">
    <div className="container max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="hover-lift flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border/50"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mb-4">
              <item.icon className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-sm md:text-base font-bold mb-1">{item.title}</h3>
            <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProps;
