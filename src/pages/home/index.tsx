import DefaultLayout from "../../components/layouts/DefaultLayout";
import CtaSection from "./CtaSection";
import FAQ from "./Faq";
import Features from "./Features";
import Hero from "./Hero";
import QuoteScroll from "./MovingContainer";
import HeroSection from "./RegistrationForm";
import TeacherTestimonials from "./TeacherTestimonial";
import TestimonialCards from "./TestimonialCard";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <DefaultLayout>
      <HeroSection />
      <Hero />
      <Features />
      <WhyChooseUs />
      <TeacherTestimonials/>
      <TestimonialCards />
      
      <FAQ />
      <QuoteScroll />
      <CtaSection />
    </DefaultLayout>
  );
};

export default Home;
