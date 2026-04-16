import { Ship, Crown, Building2, Snowflake, Anchor } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const audiences = [
  { icon: Ship, label: "Boat owners seeking long-term protection" },
  { icon: Crown, label: "Yacht and luxury vessel owners" },
  { icon: Building2, label: "Commercial marine operators" },
  { icon: Snowflake, label: "Seasonal boat owners requiring storage protection" },
  { icon: Anchor, label: "Cruise service providers" },
];

export default function CeramicAudience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 gradient-hero">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-body text-sm font-semibold text-ocean-light uppercase tracking-widest">
              Who It's For
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-5">
              Who Should Choose Ceramic Coating?
            </h2>
            <p className="font-body text-primary-foreground/70 text-lg leading-relaxed">
              A practical solution for maintaining surface quality, reducing maintenance,
              and preserving vessel value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-4 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5 backdrop-blur-sm"
              >
                <a.icon className="w-6 h-6 text-ocean-light shrink-0" />
                <span className="font-body text-sm text-primary-foreground/90">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
