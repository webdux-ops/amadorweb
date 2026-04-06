import { Bath, ChefHat, Wrench, Award } from "lucide-react";

const categories = [
  {
    icon: Bath,
    title: "Baño",
    items: ["Grifería", "Duchas y columnas", "Termos eléctricos", "Accesorios de baño"],
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: ChefHat,
    title: "Cocina",
    items: ["Grifos de cocina", "Desagües", "Accesorios", "Complementos"],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Wrench,
    title: "Fontanería general",
    items: ["Tuberías y conexiones", "Válvulas", "Racores", "Repuestos"],
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Award,
    title: "Marcas destacadas",
    items: ["Grifería Tres", "Primeras marcas", "Calidad certificada", "Garantía oficial"],
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const ProductsSection = () => (
  <section id="productos" className="section-padding">
    <div className="container max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
          Nuestros productos
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Todo para tu baño, cocina y reforma
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Disponemos de una amplia gama de materiales y accesorios de las mejores marcas del sector
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div key={cat.title} className="hover-lift bg-card rounded-xl border border-border/50 p-6">
            <div className={`w-12 h-12 rounded-lg ${cat.bg} flex items-center justify-center mb-4`}>
              <cat.icon className={`h-6 w-6 ${cat.color}`} />
            </div>
            <h3 className="font-bold text-lg mb-3">{cat.title}</h3>
            <ul className="space-y-2">
              {cat.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
