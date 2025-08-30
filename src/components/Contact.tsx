import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Main Contact Strip */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-6">
                Get in touch with our team for samples, quotes, or technical specifications. 
                We're here to help bring your vision to life.
              </p>
              
              {/* Quick Contact Options */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                  <span className="text-sm ml-2">তৎক্ষণাৎ চ্যাট</span>
                </Button>
                <Button variant="outline-hero" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-primary-foreground/90">+880-2-8851970</p>
                  <p className="text-primary-foreground/90">+880-1711-123456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-primary-foreground/90">info@greenboardbd.com</p>
                  <p className="text-primary-foreground/90">sales@greenboardbd.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Address</h3>
                  <p className="text-primary-foreground/90">
                    Green Board & Fibre Mills Ltd<br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Business Hours</h3>
                  <p className="text-primary-foreground/90">
                    Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Request Samples</h3>
            <p className="text-muted-foreground mb-4">
              Get free samples delivered to your location for quality testing.
            </p>
            <Button variant="outline">
              Order Samples
            </Button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Technical Support</h3>
            <p className="text-muted-foreground mb-4">
              Get expert advice on specifications and applications.
            </p>
            <Button variant="outline">
              Technical Help
            </Button>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2">Bulk Orders</h3>
            <p className="text-muted-foreground mb-4">
              Special pricing and terms for large volume purchases.
            </p>
            <Button variant="outline">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;