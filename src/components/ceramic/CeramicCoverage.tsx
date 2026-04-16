import { MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import marinaImg from "@/assets/atlantic-canada-marina.jpg";

const regions = [
  {
    province: "Nova Scotia",
    locations:
      "Halifax Waterfront, Halifax Northwest Arm, Halifax Bedford Basin, Dartmouth Waterfront, Baddeck, Sydney, St. Peter's, Guysborough, Chester, Mahone Bay, Lunenburg, Hubbards, Shelburne, St. Margaret's Bay, South Shore",
  },
  {
    province: "New Brunswick",
    locations:
      "Bay of Fundy, Saint John Marina, Fredericton, St. Andrews Wharf, Grand Manan, Shediac, Miramichi, Shippagan",
  },
  {
    province: "Prince Edward Island",
    locations: "Charlottetown, Summerside, Souris, Rustico Harbour",
  },
  {
    province: "Cruise Service Locations",
    locations: "Port of Halifax, Port of Saint John, Sydney Marine Terminal",
  },
];

const highlights = [
  "Best Ceramic Coating and exterior detailing in Halifax Waterfront and Bedford Basin",
  "Top Ceramic Coating and buffing services in Dartmouth Waterfront and Lunenburg",
  "Leading Ceramic Coating and interior cleaning in Saint John Marina and Bay of Fundy",
  "Premier Ceramic Coating and seasonal packages in Charlottetown and Summerside",
  "Best Ceramic Coating and specialty marine services in Sydney and Baddeck",
];

export default function CeramicCoverage() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`fade-in-up ${isVisible ? "visible" : ""}`}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-body text-sm font-semibold text-ocean uppercase tracking-widest">
              Where We Serve
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-5">
              Service Coverage Across Atlantic Canada
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-12">
            {/* Regions */}
            <div className="space-y-6">
              {regions.map((r) => (
                <div key={r.province} className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-ocean" />
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {r.province}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {r.locations}
                  </p>
                </div>
              ))}
            </div>

            {/* Image + highlights */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-card mb-6">
                <img
                  src={marinaImg}
                  alt="Aerial view of an Atlantic Canada marina at golden hour"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="space-y-3">
                {highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-ocean mt-2 shrink-0" />
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {h}
                    </p>
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
