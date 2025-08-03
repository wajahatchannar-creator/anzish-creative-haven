import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FloralPortfolio = () => {
  const navigate = useNavigate();

  const floralItems = [
    {
      id: 1,
      title: "Red Rose Bouquet",
      image: "/lovable-uploads/2e67bc71-270e-4afc-8806-c2fc1d3deaea.png",
      description: "Stunning red glittery roses arrangement with elegant black wrapping"
    },
    {
      id: 2,
      title: "Purple Rose Arrangement",
      image: "/lovable-uploads/5440fd24-df5b-4f9c-b575-bf0c956970f8.png",
      description: "Elegant purple glittery roses bouquet with sophisticated black packaging"
    },
    {
      id: 3,
      title: "Classic Red Rose Bouquet",
      image: "/lovable-uploads/ea385ba8-1088-4ad2-ac47-56dcf83b41d4.png",
      description: "Beautiful red roses arranged in pristine white wrapping for elegant presentation"
    },
    {
      id: 4,
      title: "Burgundy & White Rose Mix",
      image: "/lovable-uploads/fb539cd9-84db-43e7-80e2-745ff5464996.png",
      description: "Sophisticated burgundy and white roses with pearl accents in black wrapping"
    },
    {
      id: 5,
      title: "Pink Crystal Rose Bouquet",
      image: "/lovable-uploads/69169c58-e103-4923-817f-c16729b236a8.png",
      description: "Stunning pink crystal roses in geometric clear packaging design"
    },
    {
      id: 6,
      title: "Purple Glitter Roses",
      image: "/lovable-uploads/772c5359-29f7-4a73-a594-c65f664b5227.png",
      description: "Luxurious purple glitter roses with sparkling finish in black wrapping"
    },
    {
      id: 7,
      title: "Royal Blue Rose Collection",
      image: "/lovable-uploads/6bb04db1-e9df-4652-8807-e6b930bcd981.png",
      description: "Magnificent royal blue glittery roses in elegant geometric presentation"
    },
    {
      id: 8,
      title: "Dark Red Glitter Bouquet",
      image: "/lovable-uploads/77123ffd-d5f2-4d1d-a003-12609c36abac.png",
      description: "Rich dark red glittery roses in sophisticated black star-shaped wrapping"
    },
    {
      id: 9,
      title: "Multi-Color Rose Collection",
      image: "/lovable-uploads/6c49b653-2566-4347-b882-46ea67a09441.png",
      description: "Beautiful collection of blue, pink & white, and red & white rose bouquets"
    },
    {
      id: 10,
      title: "Blue Graduation Bouquet",
      image: "/lovable-uploads/020ffbee-4fcc-4545-a321-aad4c8c886b9.png",
      description: "Special blue rose bouquet with graduation cap and butterfly decorations"
    },
    {
      id: 11,
      title: "Blue & White Mixed Bouquet",
      image: "/lovable-uploads/66bd89ac-6568-4c2c-87bf-bc927b985d99.png",
      description: "Elegant combination of blue and white roses with butterfly accents"
    },
    {
      id: 12,
      title: "Purple Birthday Bouquet",
      image: "/lovable-uploads/23616911-571c-45fe-9880-a3c8523b01e0.png",
      description: "Luxurious purple roses with crown, pearls, and happy birthday ribbon"
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
              Floral Arrangements Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exquisite floral arrangements featuring premium roses and elegant presentation for special moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {floralItems.map((item) => (
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
              <h3 className="text-2xl font-bold text-red-dark mb-4">Custom Floral Arrangements</h3>
              <p className="text-muted-foreground mb-6">
                Looking for the perfect floral arrangement? I create stunning bouquets for weddings, anniversaries, and special occasions.
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

export default FloralPortfolio;