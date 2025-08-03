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
    },
    {
      id: 3,
      title: "Beauty & Wellness Basket",
      image: "/lovable-uploads/bfbaa2e4-2c80-434c-a5f3-84a657670f36.png",
      description: "Comprehensive beauty basket with cosmetics, skincare products, and colorful bangles"
    },
    {
      id: 4,
      title: "Money & Chocolate Bouquet",
      image: "/lovable-uploads/1fb71e2a-1ff4-4192-add8-e16a36b0a4b9.png",
      description: "Creative money bouquet arrangement with chocolates and elegant pink wrapping"
    },
    {
      id: 5,
      title: "Kids Snack Basket",
      image: "/lovable-uploads/657edf50-6a0e-4b70-91b6-09715c5893bb.png",
      description: "Fun snack basket with children's favorite treats and colorful packaging"
    },
    {
      id: 6,
      title: "Luxury Beauty Box",
      image: "/lovable-uploads/b09c72f6-ec21-4848-9fc3-d57a48038d36.png",
      description: "Premium beauty gift box with Coco perfume, jewelry, and skincare essentials"
    },
    {
      id: 7,
      title: "Feminine Care Package",
      image: "/lovable-uploads/f372d90c-a996-4f51-9278-cba420664166.png",
      description: "Thoughtful care package with makeup brushes, beauty accessories, and jewelry"
    },
    {
      id: 8,
      title: "Elegant Gift Boxes",
      image: "/lovable-uploads/82974b8b-ef82-4992-ac35-a14fbe2742ad.png",
      description: "Beautiful transparent gift boxes with roses and premium product arrangements"
    },
    {
      id: 9,
      title: "Luxurious Beauty Set",
      image: "/lovable-uploads/22af4a9c-b58d-4839-82cf-ca9dd3cf32ff.png",
      description: "Sophisticated beauty gift set with premium perfumes and elegant presentation"
    },
    {
      id: 10,
      title: "Elite Gift Collection",
      image: "/lovable-uploads/29026ea5-b0f0-4995-8cca-a61271d5fdc5.png",
      description: "Premium black and gold gift arrangement with luxury beauty products and accessories"
    },
    {
      id: 11,
      title: "Sweet Surprise Basket",
      image: "/lovable-uploads/3a48deba-bffe-460d-b83c-271d78383eea.png",
      description: "Adorable gift basket with teddy bear, chocolates, and festive treats"
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