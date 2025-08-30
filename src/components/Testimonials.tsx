import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Architect Rahman Ahmed",
    title: "Principal Architect, Urban Design Ltd",
    company: "Dhaka",
    content: "Green Board's quality is unmatched. We've used their products in over 200 residential projects with zero complaints from clients. The moisture resistance is exceptional.",
    rating: 5,
    project: "Gulshan Residence Complex"
  },
  {
    name: "Sarah Khan",
    title: "Interior Designer",
    company: "Elite Interiors",
    content: "The smooth finish and consistent quality make Green Board our first choice for premium furniture projects. Their boards take paint and veneer beautifully.",
    rating: 5,
    project: "Banani Corporate Office"
  },
  {
    name: "Manufacturer Karim Hassan",
    title: "Production Manager",
    company: "Navana Furniture",
    content: "We've been using Green Board for 8 years. Their particle boards are incredibly reliable for mass production. Quality is consistent batch after batch.",
    rating: 5,
    project: "1000+ Furniture Units"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 accent-line">
            Trusted by Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from architects, designers, and manufacturers who choose Green Board 
            for their most demanding projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover-lift">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Project */}
                <div className="text-sm text-primary font-medium mb-4">
                  Project: {testimonial.project}
                </div>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-bold text-lg">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                  <div className="text-primary text-sm font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center">
          <div className="inline-flex items-center gap-8 bg-card border border-border rounded-xl p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Reviews</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;