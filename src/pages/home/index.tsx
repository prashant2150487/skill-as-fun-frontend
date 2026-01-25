import DefaultLayout from "../../components/layouts/DefaultLayout";
import SEO from "@/components/SEO/SEO";
import CtaSection from "./CtaSection";
import FAQ from "./Faq";
import Features from "./Features";
import Hero from "./Hero";
import QuoteScroll from "./MovingContainer";
import OurCourse from "./OurCourse";
import HeroSection from "./RegistrationForm";
import TeacherTestimonials from "./TeacherTestimonial";
import TestimonialCards from "./TestimonialCard";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <>
      <SEO
        title="Skill as Fun - Learn Gamified Courses | Interactive Learning Platform"
        description="Learn skills through fun and interactive gamified courses. Engage with quizzes, competitions, and leaderboards. Start your journey with Skill as Fun today!"
        keywords="gamified learning, interactive courses, skill development, online education, quizzes, leaderboards"
        url="https://skill-as-fun.com"
      />
      <DefaultLayout>
        <HeroSection />
        <Hero />
        <Features />
        <WhyChooseUs />
        <TeacherTestimonials/>
        <TestimonialCards />
        <OurCourse/>
        <FAQ />
        <QuoteScroll />
        <CtaSection />
      </DefaultLayout>
    </>
  );
};

export default Home;
