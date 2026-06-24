import Hero from "../components/Hero/Hero";
import HomeFooterCta from "../components/HomeFooterCta/HomeFooterCta";
import HowItWorks from "../components/HowItWorks/HowItWorks";
// import QuickBookingSection from "../components/QuickBookingSection/QuickBookingSection";
import ServiceArea from "../components/ServiceArea/ServiceArea";
import ServicesPreview from "../components/ServicesPreview/ServicesPreview";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyNowRideCare from "../components/WhyNowRideCare/WhyNowRideCare";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

useEffect(() => {
  if (location.state?.scrollTo) {
    const el = document.getElementById(location.state.scrollTo);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);
  return (
    <>
      <Hero />
      {/* <QuickBookingSection /> */}
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
