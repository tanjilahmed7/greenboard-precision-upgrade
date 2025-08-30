import { Shield, Droplets, Sparkles, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Durability",
    description: "Engineered to withstand heavy use and maintain structural integrity for decades.",
    features: ["High density core", "Impact resistant", "Long-lasting finish"]
  },
  {
    icon: Droplets,
    title: "Moisture Resistance",
    description: "Advanced water-resistant technology protects against humidity and moisture damage.",
    features: ["Waterproof coating", "Humidity resistant", "Kitchen & bathroom safe"]
  },
  {
    icon: Sparkles,
    title: "Smooth Finish",
    description: "Perfect surface quality ready for any finish - paint, veneer, or laminate.",
    features: ["Zero surface defects", "Paint-ready", "Professional grade"]
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainably sourced materials with minimal environmental impact and carbon footprint.",
    features: ["Recycled content", "Low emissions", "Sustainable forestry"]
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Why Choose Green Board</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 accent-line">
            Built for Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every Green Board product is engineered to exceed industry standards and 
            deliver exceptional performance in real-world applications.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-border rounded-xl p-8 hover-lift h-full">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 wood-texture rounded-2xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50M+</div>
              <div className="text-muted-foreground">Sq Ft Produced</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-muted-foreground">Quality Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;