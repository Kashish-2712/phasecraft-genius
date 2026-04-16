import { ShieldCheck, Droplets, Sparkles, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Protection Against Harsh Marine Conditions",
    description:
      "Operating in regions such as Halifax Bedford Basin or Saint John Marina exposes boats to extreme conditions. Ceramic coating creates a barrier that minimizes damage from salt and UV exposure.",
  },
  {
    icon: Droplets,
    title: "Hydrophobic Surface Technology",
    description:
      "Water, dirt, and contaminants are repelled effectively, reducing buildup and simplifying maintenance.",
  },
  {
    icon: Sparkles,
    title: "Superior Gloss and Finish",
    description:
      "Your vessel maintains a deep, reflective finish whether located in Mahone Bay, Chester, or Summerside.",
  },
  {
    icon: DollarSign,
    title: "Long-Term Cost Efficiency",
    description:
      "Our premier ceramic coating and boat cleaning services in Atlantic Canada reduce the need for frequent polishing and detailing, lowering long-term maintenance costs.",
  },
];

export default function CeramicBenefits() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-body text-sm font-semibold text-ocean uppercase tracking-widest">
              Why Ceramic Coating
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-5">
              Key Benefits of Ceramic Coating
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-ocean/30"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-ocean/10 flex items-center justify-center shrink-0 group-hover:bg-ocean/20 transition-colors">
                    <b.icon className="w-7 h-7 text-ocean" />
                  </div>
                  <div>
                    <span className="font-body text-xs font-bold text-ocean uppercase tracking-wider">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-1 mb-3">
                      {b.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
