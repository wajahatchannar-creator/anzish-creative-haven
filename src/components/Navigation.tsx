import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-red/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl bg-gradient-to-r from-red-dark to-red-darker bg-clip-text text-transparent">
            Anzish Fatima
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-red-dark transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="contact" 
              size="sm"
              onClick={() => window.open('https://wa.me/923335534871', '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-red/20">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-muted-foreground hover:text-red-dark transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="contact" 
              size="sm" 
              className="w-full"
              onClick={() => window.open('https://wa.me/923335534871', '_blank')}
            >
              WhatsApp Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;