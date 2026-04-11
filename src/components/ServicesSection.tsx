import { Sparkles, Waves, ShieldCheck, Paintbrush, Sun, Droplets } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import detailPolish from "@/assets/detail-polish.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Exterior Wash & Wax",
    description: "Thorough hand wash, oxidation removal, and premium marine wax application for lasting protection and mirror-like shine.",
    price: "From $299",
  },
  {
    icon: Paintbrush,
    title: "Hull Restoration",
    description: "Multi-stage compounding and polishing to remove oxidation, yellowing, and stains. Restore your gel coat to factory finish.",
    price: "From $599",
  },
  {
    icon: Droplets,
    title: "Interior Deep Clean",
    description: "Complete cabin detailing including upholstery cleaning, teak treatment, vinyl conditioning, and chrome polishing.",
    price: "From $399",
  },
  {
    icon: ShieldCheck,
    title: "Ceramic Coating",
    description: "Professional-grade 9H ceramic coating that provides 2+ years of UV, salt, and stain protection with hydrophobic properties.",
    price: "From $899",
  },
  {
    icon: Sun,
    title: "Seasonal Protection",
    description: "Comprehensive winterization or spring commissioning package. Protect your investment through every season.",
    price: "From $499",
  },
  {
    icon: Waves,
    title: "Bottom Paint & Anti-Fouling",
    description: "Expert bottom paint application to prevent marine growth, improve fuel efficiency, and extend hull life.",
    price: "From $799",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-body text-sm font-semibold text-ocean uppercase tracking-widest">
              Our Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-5">
              Premium Detailing for Every Vessel
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              From routine maintenance to full restorations, our certified marine detailers deliver showroom-quality results — right at your dock.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-ocean/30"
              >
                <div className="w-12 h-12 rounded-lg bg-ocean/10 flex items-center justify-center mb-4 group-hover:bg-ocean/20 transition-colors">
                  <service.icon className="w-6 h-6 text-ocean" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="font-body text-sm font-bold text-ocean">
                  {service.price}
                </span>
              </div>
            ))}
          </div>

          {/* Image row */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-card">
              <img
                src={detailPolish}
                alt="Professional detailer polishing boat hull with machine polisher"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-card">
              <img
                src={interiorDetail}
                alt="Pristine boat interior after professional detailing with polished teak"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
