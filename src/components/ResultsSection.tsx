import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import beforeAfter from "@/assets/before-after.jpg";

export default function ResultsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="results" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-body text-sm font-semibold text-ocean uppercase tracking-widest">
              Our Results
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-5">
              The Proof Is in the Polish
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              See the dramatic transformations our team delivers. Oxidized, weathered hulls restored to mirror-finish perfection.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={beforeAfter}
                alt="Before and after boat detailing showing dramatic hull restoration from oxidized to mirror finish"
                className="w-full h-auto"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="flex justify-center gap-8 mt-6">
              <div className="text-center">
                <span className="font-body text-sm font-medium text-destructive uppercase tracking-wider">← Before</span>
              </div>
              <div className="text-center">
                <span className="font-body text-sm font-medium text-ocean uppercase tracking-wider">After →</span>
              </div>
            </div>
          </div>

          {/* Process steps */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Inspect", desc: "Full vessel assessment" },
              { step: "02", title: "Prepare", desc: "Surface decontamination" },
              { step: "03", title: "Detail", desc: "Multi-stage correction" },
              { step: "04", title: "Protect", desc: "Sealant & ceramic coat" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="font-display text-4xl font-bold text-ocean/30 mb-2">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
