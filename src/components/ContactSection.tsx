import { useState } from "react";
import { Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="section-padding">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase mb-3">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ven a visitarnos
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Recibe asesoramiento personalizado sin compromiso. Cuéntanos tu proyecto y te ayudaremos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Tu nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              placeholder="Tu teléfono"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
            <Textarea
              placeholder="¿En qué podemos ayudarte?"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
              <Send className="mr-2 h-5 w-5" />
              Enviar mensaje
            </Button>
          </form>
          <div className="flex flex-col justify-center items-center text-center bg-card rounded-xl border border-border/50 p-8">
            <div className="w-16 h-16 rounded-full bg-secondary/15 flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-secondary" />
            </div>
            <p className="font-heading font-bold text-lg mb-2">¿Prefieres llamar?</p>
            <p className="text-muted-foreground text-sm mb-4">
              Estamos encantados de atenderte por teléfono
            </p>
            <Button variant="outline" size="lg" className="font-heading font-semibold" asChild>
              <a href="tel:+34957000000">
                <Phone className="mr-2 h-4 w-4" />
                Llamar ahora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
