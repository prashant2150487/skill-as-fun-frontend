import DefaultLayout from "../../components/layouts/DefaultLayout";
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
    </DefaultLayout>
  );
};

export default Home;
