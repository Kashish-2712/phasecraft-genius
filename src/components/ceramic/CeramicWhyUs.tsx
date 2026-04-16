import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const reasons = [
  "Experienced marine detailing professionals with proven expertise",
  "Service coverage across Nova Scotia, New Brunswick, and Prince Edward Island",
  "High-quality ceramic coating solutions for long-lasting protection",
  "Use of premium-grade ceramic coating products",
  "Customized solutions for all vessel types",
  "Consistent and timely service delivery",
  "Reliable, customer-focused, and professional service",
];

export default function CeramicWhyUs() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="font-body text-sm font-semibold text-ocean uppercase tracking-widest">
              Our Promise
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-5">
              Why Choose Atlantic Boat Detailing?
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              We deliver the best ceramic coating and boat cleaning services in Atlantic Canada
              with a strong focus on quality and reliability.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            {reasons.map((r) => (
              <div
                key={r}
                className="flex items-start gap-4 bg-card rounded-xl p-5 border border-border hover:border-ocean/20 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-ocean mt-0.5 shrink-0" />
                <span className="font-body text-sm text-foreground leading-relaxed">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
