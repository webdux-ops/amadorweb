import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ScheduleSection from "@/components/ScheduleSection";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ValueProps />
      <AboutSection />
      <ProductsSection />
      <TestimonialsSection />
      <ScheduleSection />
      <LocationSection />
      <ContactSection />
    </main>
    <FooterSection />
    <FloatingButtons />
  </>
);

export default Index;
