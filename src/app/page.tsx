import OfferSection from './components/homepage/OffersSection';
import CallToAction from './components/common/CallToAction';
import PoliciesPreview from './components/homepage/PoliciesSection';
import GenericHeroSection from './components/common/GenericHeroSection';
import {AboutSection} from './components/homepage/AboutSection';

const HEADING = "More Than a Residence, A Pathway to a Future.";
const BODY = "Guardian Pathways was founded on a simple belief: that every young woman deserves a safe space to grow and a clear path to a self-sufficient, fulfilling life. We are a dedicated team committed to providing the guidance, support, and skills necessary for a successful transition into independence.";
const IMAGE = "images/home-hero.webp";

export default function HomePage() {
  return (
    <>
    <GenericHeroSection
      title={HEADING}
      subtitle= {BODY}
      backgroundImage={IMAGE}
    />
      <OfferSection/>
      <AboutSection></AboutSection>
      <PoliciesPreview/>
      <CallToAction/>
    </>
  );
}
