import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import Sustainability from "@/components/Sustainability";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <UseCases />
      <Sustainability />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
