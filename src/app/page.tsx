import BlogSection from "@/components/homepage/BlogSection";
import HeroSection from "@/components/homepage/HeroSection";
import ServicesSection from "@/components/homepage/ServiceSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BlogSection />
      <Footer />
    </>
  );
}
