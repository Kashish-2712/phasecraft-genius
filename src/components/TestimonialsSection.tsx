import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael R.",
    boat: "42ft Sea Ray Sundancer",
    text: "Atlantic transformed my boat. The hull hadn't been polished in 3 years and they made it look brand new. Their ceramic coating is worth every penny — water just beads right off now.",
    rating: 5,
  },
  {
    name: "Sarah & Tom W.",
    boat: "35ft Boston Whaler",
    text: "We've tried three other detailing services and Atlantic is in a completely different league. They're meticulous, professional, and the mobile service is so convenient. Highly recommend.",
    rating: 5,
  },
  {
    name: "Captain James D.",
    boat: "55ft Viking Yacht",
    text: "As a charter captain, my boat's appearance is my business. Atlantic keeps my Viking looking magazine-ready all season. They understand marine detailing at a professional level.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-body text-sm font-semibold text-ocean uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-5">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-card-hover transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold" fill="currentColor" />
                  ))}
                </div>
                <blockquote className="font-body text-sm text-foreground/80 leading-relaxed mb-4">
                  "{t.text}"
                </blockquote>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.boat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
