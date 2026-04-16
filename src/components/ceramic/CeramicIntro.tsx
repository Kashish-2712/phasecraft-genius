import { Shield, Droplets, Sun, Sparkles, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  { icon: Sun, text: "Long-term UV protection against fading" },
  { icon: Shield, text: "Resistance to saltwater corrosion and oxidation" },
  { icon: Droplets, text: "Hydrophobic properties for easy cleaning" },
  { icon: Sparkles, text: "Enhanced gloss and visual clarity" },
  { icon: Wrench, text: "Reduced maintenance requirements" },
];

export default function CeramicIntro() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="max-w-4xl mx-auto">
            <span className="font-body text-sm font-semibold text-ocean uppercase tracking-widest">
              Long-Lasting Protection
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              What is Marine Ceramic Coating?
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Marine ceramic coating is a high-performance liquid polymer applied to the exterior
              surfaces of a boat. Once cured, it forms a durable and transparent protective layer
              that bonds with the gelcoat or painted surfaces.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              With our leading ceramic coating and boat cleaning services in Atlantic Canada,
              your vessel benefits from:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((b) => (
                <div
                  key={b.text}
                  className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-ocean" />
                  </div>
                  <span className="font-body text-sm text-foreground leading-relaxed">
                    {b.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-body text-muted-foreground text-base mt-8 leading-relaxed">
              This makes ceramic coating a reliable solution for maintaining both aesthetics and durability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
