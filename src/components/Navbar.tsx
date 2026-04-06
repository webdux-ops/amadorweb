import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Horario", href: "#horario" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <button onClick={() => scrollTo("#inicio")} className="font-heading font-extrabold text-primary-foreground text-lg">
          Amador Moreno
        </button>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left text-primary-foreground/80 hover:text-primary-foreground py-2.5 text-sm font-medium"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
