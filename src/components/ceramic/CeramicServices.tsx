import { Paintbrush, ShieldCheck, Ship, Sofa, Anchor, CalendarDays, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  { icon: Paintbrush, title: "Buffing & Polishing" },
  { icon: ShieldCheck, title: "Climate Protection" },
  { icon: Ship, title: "Exterior Detailing" },
  { icon: Sofa, title: "Interior Cleaning" },
  { icon: Anchor, title: "Maritime Cruise Support" },
  { icon: CalendarDays, title: "Seasonal Packages" },
  { icon: Wrench, title: "Specialty Services" },
];

export default function CeramicServices() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-body text-sm font-semibold text-ocean uppercase tracking-widest">
              Full-Service Solutions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-5">
              Complete Marine Detailing Solutions
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              In addition to ceramic coating, Atlantic Boat Detailing provides comprehensive
              vessel maintenance solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-card rounded-xl p-6 text-center border border-border hover:border-ocean/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-ocean/10 flex items-center justify-center mb-3 group-hover:bg-ocean/20 transition-colors">
                  <s.icon className="w-6 h-6 text-ocean" />
                </div>
                <h3 className="font-body text-sm font-semibold text-foreground">
                  {s.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
