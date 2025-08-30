import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <Logo size="lg" variant="white" />
              <div>
                <h3 className="font-bold text-xl text-background">Green Board</h3>
                <p className="text-sm text-background/75">Architect-Grade Boards</p>
              </div>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Leading manufacturer of premium particle boards in Bangladesh. 
              Trusted by architects and designers for over 25 years.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-6">Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">MDF Boards</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Particle Boards</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Melamine Boards</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Moisture Resistant</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Fire Retardant</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Custom Sizes</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Kitchen Cabinets</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Office Furniture</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Retail Fixtures</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Wall Paneling</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Flooring</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Technical Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-background/80">Green Board & Fibre Mills Ltd</p>
                  <p className="text-background/80">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80">+880-2-8851970</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80">info@greenboardbd.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80 text-sm">
              © 2024 Green Board & Fibre Mills Ltd. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/80 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-background/80 hover:text-primary transition-colors">Quality Guarantee</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;