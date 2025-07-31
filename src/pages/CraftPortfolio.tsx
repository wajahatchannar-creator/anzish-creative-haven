import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CraftPortfolio = () => {
  const navigate = useNavigate();

  const craftItems = [
    {
      id: 1,
      title: "Luxury Gift Basket",
      image: "/lovable-uploads/df39882f-bc89-4cde-b97d-79a38279c382.png",
      description: "Thoughtfully curated gift basket with teddy bear, chocolates, and premium treats"
    },
    {
      id: 2,
      title: "Premium Gift Collection",
      image: "/lovable-uploads/ddc59104-e863-45e7-8080-47b0b46b1fae.png",
      description: "Elegant gift basket arrangement with chocolates, surprises, and decorative netting"
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
              Craft Design Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handcrafted gift baskets, custom arrangements, and unique decorative pieces for special occasions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {craftItems.map((item) => (
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
              <h3 className="text-2xl font-bold text-red-dark mb-4">Custom Craft Orders</h3>
              <p className="text-muted-foreground mb-6">
                Need a special gift basket or custom craft piece? I create personalized arrangements for any occasion.
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

export default CraftPortfolio;