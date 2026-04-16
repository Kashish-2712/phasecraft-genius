import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    q: "How long does ceramic coating last on a boat?",
    a: "Ceramic coating typically lasts between 6 months and 2 years depending on maintenance and environmental exposure.",
  },
  {
    q: "Is ceramic coating better than waxing?",
    a: "Yes, ceramic coating provides longer-lasting protection and superior resistance compared to traditional wax.",
  },
  {
    q: "Can ceramic coating prevent oxidation?",
    a: "It significantly reduces oxidation by protecting surfaces from UV rays and environmental contaminants.",
  },
  {
    q: "How long does the application process take?",
    a: "The process usually takes 1 to 2 days depending on vessel size and condition.",
  },
  {
    q: "Does ceramic coating require maintenance?",
    a: "Minimal maintenance is required, typically involving periodic washing.",
  },
];

export default function CeramicFAQ() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-body text-sm font-semibold text-ocean uppercase tracking-widest">
              Common Questions
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-ocean/30 transition-colors"
                >
                  <AccordionTrigger className="font-body text-sm font-semibold text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
