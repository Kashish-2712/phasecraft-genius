import { ArrowRight, Shield, Star, Clock } from "lucide-react";
import heroImg from "@/assets/hero-boat.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Pristine luxury yacht docked at marina at golden hour"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-navy/40" />
      </div>

      <div className="relative container mx-auto px-4 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-ocean/20 backdrop-blur-sm border border-ocean/30 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-4 h-4 text-gold" fill="currentColor" />
            <span className="font-body text-xs font-medium text-ocean-light uppercase tracking-wider">
              Trusted by 500+ Boat Owners
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 text-balance">
            Your Boat Deserves a{" "}
            <span className="text-ocean-light">Showroom Finish</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-primary-foreground/75 max-w-xl mb-8 leading-relaxed">
            Professional mobile boat detailing that comes to your dock. Expert hull restoration, interior cleaning, and ceramic coating — all with a 100% satisfaction guarantee.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-ocean hover:bg-ocean-dark text-accent-foreground font-body font-semibold text-base px-8 py-4 rounded-lg transition-all shadow-cta hover:shadow-lg group"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground hover:border-ocean-light hover:text-ocean-light font-body font-semibold text-base px-8 py-4 rounded-lg transition-all"
            >
              View Our Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 text-primary-foreground/60 font-body text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-ocean" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-gold" fill="currentColor" />
              <span>5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-ocean" />
              <span>Same-Week Booking</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "2,000+", label: "Boats Serviced" },
            { number: "100%", label: "Satisfaction Rate" },
            { number: "5.0", label: "Star Reviews" },
          ].map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <div className="font-display text-3xl lg:text-4xl font-bold text-ocean-light">
                {stat.number}
              </div>
              <div className="font-body text-sm text-primary-foreground/60 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
