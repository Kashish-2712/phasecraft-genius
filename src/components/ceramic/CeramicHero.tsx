import heroImg from "@/assets/ceramic-coating-hero.jpg";

export default function CeramicHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Professional marine ceramic coating application on a luxury yacht"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy-dark/60 to-navy-dark/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center max-w-4xl">
        <span className="inline-block font-body text-sm font-semibold text-ocean-light uppercase tracking-widest mb-4">
          Marine Protection Specialists
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
          Advanced Marine Ceramic Coating Solutions in Atlantic Canada
        </h1>
        <p className="font-body text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-8 leading-relaxed">
          Atlantic Boat Detailing offers the best ceramic coating and boat cleaning services
          in Atlantic Canada — delivering advanced protection and superior finishing for vessels
          in challenging marine environments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-ocean hover:bg-ocean-dark text-accent-foreground font-body font-semibold px-8 py-4 rounded-lg transition-all shadow-cta hover:shadow-lg text-base"
          >
            Get a Free Quote
          </a>
          <a
            href="#process"
            className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body font-semibold px-8 py-4 rounded-lg transition-all text-base"
          >
            Our Process
          </a>
        </div>
      </div>
    </section>
  );
}
