import { Phone } from "lucide-react";

export default function CeramicCTA() {
  return (
    <section className="py-20 lg:py-28 gradient-ocean">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground mb-5">
            Contact Us for the Best Boat Buffing, Coating & Polishing Services!
          </h2>
          <p className="font-body text-accent-foreground/80 text-lg mb-8 leading-relaxed">
            Ready to give your vessel the ultimate protection? Get in touch with
            Atlantic Boat Detailing for a free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-primary-foreground text-foreground font-body font-semibold px-8 py-4 rounded-lg hover:bg-primary-foreground/90 transition-all text-base"
            >
              Request a Free Quote
            </a>
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-2 border border-accent-foreground/30 text-accent-foreground font-body font-semibold px-8 py-4 rounded-lg hover:bg-accent-foreground/10 transition-all text-base"
            >
              <Phone className="w-4 h-4" />
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
