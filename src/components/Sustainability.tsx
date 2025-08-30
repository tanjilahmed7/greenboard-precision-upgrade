import { Leaf, Factory, Recycle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import factoryImage from "@/assets/factory-production.jpg";

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Sustainability Story</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 accent-line">
              Responsible Manufacturing
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Green Board & Fibre Mills Ltd, we're committed to sustainable practices 
              that protect our environment while delivering superior quality products.
            </p>

            {/* Key Stats */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Clean Production</h3>
                  <p className="text-muted-foreground text-sm">ISO 14001 certified manufacturing processes with minimal environmental impact.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Recycled Content</h3>
                  <p className="text-muted-foreground text-sm">85% of our raw materials come from sustainably sourced and recycled wood fiber.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Carbon Neutral</h3>
                  <p className="text-muted-foreground text-sm">Our production facilities operate on 100% renewable energy sources.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Certified Quality</h3>
                  <p className="text-muted-foreground text-sm">FSC certified and compliant with international environmental standards.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg">
                View Sustainability Report
              </Button>
              <Button variant="outline" size="lg">
                Factory Tour Request
              </Button>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={factoryImage}
                alt="Green Board manufacturing facility"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating Cards */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">50M+</div>
                <div className="text-sm text-muted-foreground">Sq Ft Annually</div>
              </div>
              
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-primary">Zero</div>
                <div className="text-sm text-muted-foreground">Waste to Landfill</div>
              </div>
            </div>

            {/* Certification Badges */}
            <div className="mt-6 flex gap-4 justify-center">
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">ISO</span>
                </div>
                <div className="text-xs text-muted-foreground">ISO 14001</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">FSC</span>
                </div>
                <div className="text-xs text-muted-foreground">Certified</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div className="text-xs text-muted-foreground">Green Seal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;