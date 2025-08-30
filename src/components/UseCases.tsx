import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import officeFurniture from "@/assets/office-furniture.jpg";
import retailFixtures from "@/assets/retail-fixtures.jpg";

const useCases = [
  {
    title: "Kitchen & Bath",
    description: "Moisture-resistant boards perfect for high-humidity environments. Ideal for cabinets, countertops, and storage solutions.",
    image: heroKitchen,
    features: ["Water resistant", "Easy to clean", "Durable finish", "Custom sizes"],
    projects: "2,500+ Kitchens",
    cta: "Kitchen Solutions"
  },
  {
    title: "Office Furniture",
    description: "Professional-grade boards for modern workspaces. Perfect for desks, filing cabinets, and modular office systems.",
    image: officeFurniture,
    features: ["Smooth surface", "Paint ready", "Strong structure", "Cost effective"],
    projects: "500+ Offices",
    cta: "Office Solutions"
  },
  {
    title: "Retail Fixtures",
    description: "Display-quality boards for retail environments. Ideal for shelving, displays, and custom retail installations.",
    image: retailFixtures,
    features: ["Premium finish", "Load bearing", "Easy assembly", "Customizable"],
    projects: "300+ Stores",
    cta: "Retail Solutions"
  }
];

const UseCases = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm font-medium text-primary">Applications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 accent-line">
            Versatile Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential kitchens to commercial spaces, our boards deliver 
            consistent performance across all applications.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group hover-lift bg-card border-border overflow-hidden">
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Project Count */}
                <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">{useCase.projects}</span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title and Description */}
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {useCase.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our engineering team can develop custom board specifications for your unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Download Specifications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;