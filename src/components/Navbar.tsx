import { useState, useEffect } from "react";
import { Menu, X, Phone, Anchor } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" aria-label="Atlantic Boat Detailing Home">
          <Anchor className="w-8 h-8 text-ocean transition-transform group-hover:rotate-12" />
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold text-primary-foreground leading-tight">
              Atlantic
            </span>
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-ocean-light">
              Boat Detailing
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-primary-foreground/80 hover:text-ocean-light transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-ocean after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Phone */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+15551234567" className="flex items-center gap-2 text-primary-foreground/80 hover:text-ocean-light transition-colors font-body text-sm">
            <Phone className="w-4 h-4" />
            (555) 123-4567
          </a>
          <a
            href="#contact"
            className="bg-ocean hover:bg-ocean-dark text-accent-foreground font-body font-semibold text-sm px-6 py-2.5 rounded-lg transition-all shadow-cta hover:shadow-lg"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-ocean/20 animate-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-body text-base text-primary-foreground/90 hover:text-ocean-light py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+15551234567" className="flex items-center gap-2 text-primary-foreground/80 font-body text-sm py-2">
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-ocean text-accent-foreground font-body font-semibold text-center py-3 rounded-lg mt-2"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
