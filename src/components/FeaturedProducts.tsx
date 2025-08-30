import { Eye, GitCompare, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import boardSamples from "@/assets/board-samples.jpg";

const products = [
  {
    id: 1,
    name: "Premium MDF",
    subtitle: "Moisture Resistant",
    thickness: "18mm",
    rating: 4.9,
    reviews: 156,
    price: "৳2,850",
    priceUnit: "per sq ft",
    image: boardSamples,
    isPopular: true,
    features: ["Water Resistant", "Smooth Finish", "Easy to Work"]
  },
  {
    id: 2,
    name: "Particle Board Pro",
    subtitle: "High Density",
    thickness: "16mm",
    rating: 4.8,
    reviews: 89,
    price: "৳2,200",
    priceUnit: "per sq ft",
    image: boardSamples,
    isPopular: false,
    features: ["Durable", "Cost Effective", "Versatile"]
  },
  {
    id: 3,
    name: "Architect Series",
    subtitle: "Premium Grade",
    thickness: "25mm",
    rating: 5.0,
    reviews: 234,
    price: "৳3,500",
    priceUnit: "per sq ft",
    image: boardSamples,
    isPopular: true,
    features: ["Superior Quality", "Fire Resistant", "Warranty"]
  }
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 accent-line">
            Premium Board Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engineered for professionals. Each board meets the highest standards for 
            commercial and residential applications.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group hover-lift bg-card border-border overflow-hidden">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isPopular && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                
                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                    <GitCompare className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-semibold text-sm">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Product Info */}
                <h3 className="font-bold text-xl mb-1">{product.name}</h3>
                <p className="text-muted-foreground mb-2">{product.subtitle}</p>
                
                {/* Thickness */}
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    {product.thickness}
                  </Badge>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground block">{product.priceUnit}</span>
                  </div>
                  <Button variant="default" size="sm">
                    Get Sample
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;