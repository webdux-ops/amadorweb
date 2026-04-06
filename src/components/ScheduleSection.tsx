import { Clock } from "lucide-react";

const schedule = [
  { day: "Lunes", hours: "8:30–14:00 / 17:00–20:00" },
  { day: "Martes", hours: "8:30–14:00 / 17:00–20:00" },
  { day: "Miércoles", hours: "8:30–14:00 / 17:00–20:00" },
  { day: "Jueves", hours: "17:00–20:00" },
  { day: "Viernes", hours: "8:30–14:00 / 17:00–20:00" },
  { day: "Sábado", hours: "9:00–13:00" },
  { day: "Domingo", hours: "Cerrado" },
];

const ScheduleSection = () => (
  <section id="horario" className="section-padding">
    <div className="container max-w-2xl mx-auto text-center">
      <div className="flex items-center justify-center gap-3 mb-3">
        <Clock className="h-6 w-6 text-secondary" />
        <p className="text-secondary font-heading font-semibold text-sm tracking-widest uppercase">
          Horario
        </p>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
        ¿Cuándo puedes visitarnos?
      </h2>
      <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
        {schedule.map((s, i) => (
          <div
            key={s.day}
            className={`flex justify-between items-center px-6 py-3.5 text-sm ${
              i % 2 === 0 ? "bg-card" : "section-alt"
            } ${s.day === "Domingo" ? "text-muted-foreground" : ""}`}
          >
            <span className="font-semibold">{s.day}</span>
            <span className={s.day === "Domingo" ? "italic" : "text-muted-foreground"}>
              {s.hours}
            </span>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4 italic">
        * Los horarios pueden variar en festivos
      </p>
    </div>
  </section>
);

export default ScheduleSection;
