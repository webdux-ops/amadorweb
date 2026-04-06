import { Star, Quote } from "lucide-react";

const reviews = [
  { text: "Atención excelente y gran asesoramiento. Rafa te explica todo con paciencia y conocimiento. Muy recomendable.", author: "Cliente verificado" },
  { text: "Fontanería de toda la vida con gran profesionalidad. Llevan años siendo referencia en Córdoba y con razón.", author: "Cliente verificado" },
  { text: "Materiales de calidad y trato cercano. Se nota que les importa el cliente. Volveré seguro.", author: "Cliente verificado" },
];

const TestimonialsSection = () => (
  <section id="opiniones" className="section-padding section-alt">
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          Opiniones de clientes
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Lo que dicen nuestros clientes
        </h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          {[1, 2, 3].map((s) => (
            <Star key={s} className="h-6 w-6 fill-amber-400 text-amber-400" />
          ))}
          <Star className="h-6 w-6 fill-amber-400/60 text-amber-400" />
          <Star className="h-6 w-6 text-amber-300/40" />
        </div>
        <p className="text-muted-foreground text-sm">3,7 de 5 — basado en 23 reseñas</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {reviews.map((r, i) => (
          <div key={i} className="hover-lift bg-card rounded-xl border border-border/50 p-6 relative">
            <Quote className="h-8 w-8 text-secondary/20 absolute top-4 right-4" />
            <p className="text-foreground mb-4 leading-relaxed italic">"{r.text}"</p>
            <p className="text-sm font-semibold text-muted-foreground">— {r.author}</p>
          </div>
        ))}
      </div>

      <div className="text-center bg-card rounded-xl border border-border/50 p-6 max-w-lg mx-auto">
        <p className="text-muted-foreground text-sm italic">
          "Seguimos mejorando cada día para ofrecer el mejor servicio posible a todos nuestros clientes"
        </p>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
