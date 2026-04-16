import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CeramicHero from "@/components/ceramic/CeramicHero";
import CeramicIntro from "@/components/ceramic/CeramicIntro";
import CeramicBenefits from "@/components/ceramic/CeramicBenefits";
import CeramicProcess from "@/components/ceramic/CeramicProcess";
import CeramicServices from "@/components/ceramic/CeramicServices";
import CeramicCoverage from "@/components/ceramic/CeramicCoverage";
import CeramicAudience from "@/components/ceramic/CeramicAudience";
import CeramicWhyUs from "@/components/ceramic/CeramicWhyUs";
import CeramicFAQ from "@/components/ceramic/CeramicFAQ";
import CeramicCTA from "@/components/ceramic/CeramicCTA";

const CeramicCoating = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <CeramicHero />
      <CeramicIntro />
      <CeramicBenefits />
      <CeramicProcess />
      <CeramicServices />
      <CeramicCoverage />
      <CeramicAudience />
      <CeramicWhyUs />
      <CeramicFAQ />
      <CeramicCTA />
      <Footer />
    </div>
  );
};

export default CeramicCoating;
