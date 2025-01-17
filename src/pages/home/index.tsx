import DefaultLayout from "../../components/layouts/DefaultLayout";
import CtaSection from "./CtaSection";
import FAQ from "./Faq";
import QuoteScroll from "./MovingContainer";
import HeroSection from "./RegistrationForm";
import TestimonialCards from "./TestimonialCard";

const Home = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <QuoteScroll />
      <TestimonialCards />
      <FAQ />
      <CtaSection />
    </DefaultLayout>
  );
};

export default Home;
