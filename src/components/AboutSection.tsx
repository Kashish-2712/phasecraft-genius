import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { CheckCircle, Anchor } from "lucide-react";
import yachtAerial from "@/assets/yacht-aerial.jpg";

const reasons = [
  "Certified marine detailing professionals",
  "Premium eco-friendly marine products",
  "Mobile service — we come to your dock",
  "100% satisfaction guarantee on every job",
  "Fully licensed and insured",
  "Flexible scheduling, 7 days a week",
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 lg:py-28 gradient-dark">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={yachtAerial}
                alt="Aerial view of pristine yacht cruising through crystal clear turquoise ocean"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
                width={1920}
                height={800}
              />
              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-card-hover">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ocean/20 flex items-center justify-center">
                    <Anchor className="w-5 h-5 text-ocean" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">10+</p>
                    <p className="font-body text-xs text-muted-foreground">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="font-body text-sm font-semibold text-ocean-light uppercase tracking-widest">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-5">
                The Atlantic Difference
              </h2>
              <p className="font-body text-primary-foreground/70 text-lg leading-relaxed mb-8">
                Atlantic Boat Detailing combines decades of marine expertise with a commitment to perfection. We treat every vessel like our own — because your boat is more than property, it's your passion.
              </p>
              <ul className="space-y-4 mb-8">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ocean-light flex-shrink-0 mt-0.5" />
                    <span className="font-body text-primary-foreground/80 text-sm">
                      {reason}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-ocean hover:bg-ocean-dark text-accent-foreground font-body font-semibold text-sm px-8 py-3.5 rounded-lg transition-all shadow-cta"
              >
                Schedule Your Detail Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
