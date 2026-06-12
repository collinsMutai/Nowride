import Hero from "../components/Hero/Hero";
import HomeFooterCta from "../components/HomeFooterCta/HomeFooterCta";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import QuickBookingSection from "../components/QuickBookingSection/QuickBookingSection";
import ServiceArea from "../components/ServiceArea/ServiceArea";
import ServicesPreview from "../components/ServicesPreview/ServicesPreview";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyNowRideCare from "../components/WhyNowRideCare/WhyNowRideCare";

const Home = () => {
  return (
    <>
      <Hero />
      <QuickBookingSection />
      <ServicesPreview />
      <WhyNowRideCare />
      <ServiceArea />
      <Testimonials />
      <HowItWorks />
      <HomeFooterCta />
    </>
  );
};

export default Home;
