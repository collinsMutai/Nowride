import Hero from "../components/Hero/Hero";
import QuickBookingSection from "../components/QuickBookingSection/QuickBookingSection";
import ServiceArea from "../components/ServiceArea/ServiceArea";
import ServicesPreview from "../components/ServicesPreview/ServicesPreview";
import WhyNowRideCare from "../components/WhyNowRideCare/WhyNowRideCare";

const Home = () => {
  return (
    <>
      <Hero />
      <QuickBookingSection />
      <ServicesPreview />
      <WhyNowRideCare />
      <ServiceArea />
    </>
  );
};

export default Home;
