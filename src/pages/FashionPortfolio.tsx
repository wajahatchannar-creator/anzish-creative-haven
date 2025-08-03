import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FashionPortfolio = () => {
  const navigate = useNavigate();

  const fashionItems = [
    {
      id: 1,
      title: "Floral Embroidered Dress",
      image: "/lovable-uploads/477e4c75-9d0c-4ff7-9d39-ed6e34fd55ab.png",
      description: "White traditional dress with delicate floral embroidery and intricate border detailing"
    },
    {
      id: 2,
      title: "Floral Designer Outfit",
      image: "/lovable-uploads/37b4ff13-b8de-4af7-8751-483da78f91e4.png",
      description: "Light colored outfit with beautiful floral appliqué work and sequin embellishments"
    },
    {
      id: 3,
      title: "Light Floral Embroidered Set",
      image: "/lovable-uploads/1a597594-d6b6-4ad1-9904-c6f1998b2695.png",
      description: "Elegant beige outfit with colorful floral embroidery and gold border details"
    },
    {
      id: 4,
      title: "Blue Royal Designer Dress",
      image: "/lovable-uploads/da74cc4b-03f0-404d-8cb2-3444c640ec05.png",
      description: "Royal blue dress with stunning floral dupatta and traditional embroidered patterns"
    },
    {
      id: 5,
      title: "Floral Hand-Painted Fabric",
      image: "/lovable-uploads/4fc44108-a345-456f-b0cf-b5a3ab249395.png",
      description: "Exquisite hand-painted floral design with purple and pink flowers on silk fabric"
    },
    {
      id: 6,
      title: "Mint Green Embroidered Outfit",
      image: "/lovable-uploads/675043a4-15d7-4a31-b9db-a356245295ac.png",
      description: "Beautiful mint green dress with delicate floral embroidery and sequin work"
    },
    {
      id: 7,
      title: "White Formal Collection",
      image: "/lovable-uploads/532cc876-1e87-4ba1-bbef-eae17aac526c.png",
      description: "Elegant white formal wear collection with vibrant floral dupatta designs"
    },
    {
      id: 8,
      title: "Purple Floral Designer Set",
      image: "/lovable-uploads/d07f5027-1965-4178-bdeb-8ba5c11be570.png",
      description: "Sophisticated purple outfit with intricate floral embroidery and gold detailing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-red-light/10 to-red-light/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-red/20">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-red-dark bg-clip-text text-transparent">
              Fashion Design Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Custom dress designs featuring traditional embroidery, contemporary styling, and bespoke tailoring
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fashionItems.map((item) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 border-red/20 bg-card"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-card border border-red/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-[var(--shadow-soft)]">
              <h3 className="text-2xl font-bold text-red-dark mb-4">Custom Design Services</h3>
              <p className="text-muted-foreground mb-6">
                Looking for a unique outfit? Let's create something special tailored just for you with personalized embroidery and design.
              </p>
              <Button 
                variant="contact" 
                size="lg"
                onClick={() => window.open('https://wa.me/923335534871', '_blank')}
              >
                Contact on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FashionPortfolio;