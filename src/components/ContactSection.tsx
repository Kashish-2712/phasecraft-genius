import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    boatType: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 gradient-dark">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left — Info */}
            <div>
              <span className="font-body text-sm font-semibold text-ocean-light uppercase tracking-widest">
                Get Started
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-5">
                Request Your Free Quote
              </h2>
              <p className="font-body text-primary-foreground/70 text-lg leading-relaxed mb-8">
                Tell us about your vessel and we'll provide a detailed estimate within 24 hours. No obligation, no pressure — just honest pricing.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-ocean/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-ocean-light" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-primary-foreground/50">Call Us</p>
                    <a href="tel:+15551234567" className="font-body text-primary-foreground font-medium hover:text-ocean-light transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-ocean/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-ocean-light" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-primary-foreground/50">Email</p>
                    <a href="mailto:info@atlanticboatdetailing.com" className="font-body text-primary-foreground font-medium hover:text-ocean-light transition-colors">
                      info@atlanticboatdetailing.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-ocean/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-ocean-light" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-primary-foreground/50">Service Area</p>
                    <p className="font-body text-primary-foreground font-medium">
                      Atlantic Coast & Surrounding Marinas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-card-hover">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <CheckCircle className="w-16 h-16 text-ocean mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Quote Request Received!</h3>
                  <p className="font-body text-muted-foreground">We'll get back to you within 24 hours with a detailed estimate.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="font-body text-sm font-medium text-foreground mb-1.5 block">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-ocean focus:border-transparent outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="font-body text-sm font-medium text-foreground mb-1.5 block">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-ocean focus:border-transparent outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="font-body text-sm font-medium text-foreground mb-1.5 block">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-ocean focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="boatType" className="font-body text-sm font-medium text-foreground mb-1.5 block">
                        Boat Type & Size
                      </label>
                      <input
                        id="boatType"
                        type="text"
                        value={formData.boatType}
                        onChange={(e) => setFormData({ ...formData, boatType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-ocean focus:border-transparent outline-none transition-all"
                        placeholder="e.g. 35ft Sea Ray"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="font-body text-sm font-medium text-foreground mb-1.5 block">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-ocean focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="wash-wax">Exterior Wash & Wax</option>
                        <option value="hull">Hull Restoration</option>
                        <option value="interior">Interior Deep Clean</option>
                        <option value="ceramic">Ceramic Coating</option>
                        <option value="seasonal">Seasonal Protection</option>
                        <option value="bottom">Bottom Paint</option>
                        <option value="full">Full Detail Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="font-body text-sm font-medium text-foreground mb-1.5 block">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground font-body text-sm focus:ring-2 focus:ring-ocean focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your boat's current condition..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-ocean hover:bg-ocean-dark text-accent-foreground font-body font-semibold text-base py-3.5 rounded-lg transition-all shadow-cta hover:shadow-lg group"
                  >
                    Send Quote Request
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="font-body text-xs text-muted-foreground text-center">
                    Free estimate • No obligation • Response within 24 hours
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
