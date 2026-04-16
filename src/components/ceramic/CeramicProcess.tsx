import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import processImg from "@/assets/ceramic-process.jpg";

const steps = [
  { num: "01", title: "Surface Cleaning", desc: "Thorough cleaning and surface decontamination" },
  { num: "02", title: "Oxidation Removal", desc: "Oxidation removal and correction" },
  { num: "03", title: "Precision Buffing", desc: "Precision buffing and polishing" },
  { num: "04", title: "Coating Application", desc: "Application of marine-grade ceramic coating" },
  { num: "05", title: "Curing & Inspection", desc: "Controlled curing and final inspection" },
];

export default function CeramicProcess() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={processImg}
                alt="Professional ceramic coating application process"
                className="w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>

            {/* Steps */}
            <div>
              <span className="font-body text-sm font-semibold text-ocean uppercase tracking-widest">
                Our Method
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-8">
                Professional Application Process
              </h2>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
                We follow a structured marine detailing process to ensure optimal results.
                Each stage is carefully executed for maximum bonding and durability.
              </p>

              <div className="space-y-4">
                {steps.map((s) => (
                  <div
                    key={s.num}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-ocean/20 transition-colors"
                  >
                    <span className="font-display text-2xl font-bold text-ocean/30">
                      {s.num}
                    </span>
                    <div>
                      <h4 className="font-body text-sm font-semibold text-foreground">
                        {s.title}
                      </h4>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
