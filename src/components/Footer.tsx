import { Anchor } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="w-6 h-6 text-ocean" />
              <span className="font-display text-lg font-bold text-primary-foreground">
                Atlantic Boat Detailing
              </span>
            </div>
            <p className="font-body text-sm text-primary-foreground/50 leading-relaxed">
              Professional mobile boat detailing service. We bring the shine to your dock.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Services", "About", "Results", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm text-primary-foreground/50 hover:text-ocean-light transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {["Exterior Wash & Wax", "Hull Restoration", "Interior Deep Clean", "Ceramic Coating", "Seasonal Protection"].map((s) => (
                <li key={s}>
                  <a href="#services" className="font-body text-sm text-primary-foreground/50 hover:text-ocean-light transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Atlantic Boat Detailing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-ocean-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-ocean-light transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
