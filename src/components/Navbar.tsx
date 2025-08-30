import { useState } from "react";
import { Search, Globe, Menu, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+880-2-8851970</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span>info@greenboardbd.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-primary transition-colors">
              <Globe className="h-4 w-4" />
              <span>EN | বাংলা</span>
            </button>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Logo size="md" />
            <div>
              <h1 className="font-bold text-xl text-foreground">Green Board</h1>
              <p className="text-xs text-muted-foreground">Architect-Grade Boards</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">Products</a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors font-medium">Solutions</a>
            <a href="#sustainability" className="text-foreground hover:text-primary transition-colors font-medium">Sustainability</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>

          {/* Search and CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 w-64 bg-background border-border"
                />
              </div>
            </div>
            
            <Button variant="cta" size="lg" className="hidden md:flex">
              Get a Quote
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium py-2">Products</a>
              <a href="#solutions" className="text-foreground hover:text-primary transition-colors font-medium py-2">Solutions</a>
              <a href="#sustainability" className="text-foreground hover:text-primary transition-colors font-medium py-2">Sustainability</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium py-2">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium py-2">Contact</a>
              <div className="pt-4 border-t border-border/50">
                <Button variant="cta" className="w-full">
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;