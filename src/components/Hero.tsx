import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern kitchen featuring Green Board particle board cabinets"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium">Trusted by 1000+ Architects</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Architect-Grade Boards.
            <span className="block text-primary-light">Built for Precision.</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Premium particle boards engineered for durability, moisture resistance, and flawless finishes. 
            The professional choice for modern interiors.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Moisture Resistant</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Premium Finish</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Request Samples
              <span className="text-sm opacity-75 ml-2">নমুনা চান</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Talk to Sales
              <span className="text-sm opacity-75 ml-2">বিক্রয় সাথে</span>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-4">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white font-semibold">IKEA</div>
              <div className="text-white font-semibold">Hatil</div>
              <div className="text-white font-semibold">Otobi</div>
              <div className="text-white font-semibold">Navana</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button variant="cta" size="lg" className="rounded-full shadow-2xl">
          Get Quote
        </Button>
      </div>
    </section>
  );
};

export default Hero;