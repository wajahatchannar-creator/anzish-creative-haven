import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BeautyPortfolio = () => {
  const navigate = useNavigate();

  const beautyItems = [
    {
      id: 1,
      title: "Bridal Makeup Art",
      image: "/lovable-uploads/e2c8fd55-f9c1-425c-b963-39ae423563ee.png",
      description: "Elegant bridal makeup with traditional jewelry styling and intricate eye detailing"
    },
    {
      id: 2,
      title: "Traditional Bridal Look",
      image: "/lovable-uploads/7df7fb39-e72b-4646-a13c-0af682be97d8.png",
      description: "Classic bridal makeup with intricate detailing and traditional accessories"
    },
    {
      id: 3,
      title: "Rida Fatima Bridal Beauty",
      image: "/lovable-uploads/06597b6f-9d7d-4435-a653-701643be761f.png",
      description: "Traditional red bridal makeup with gold jewelry and elegant dupatta styling"
    },
    {
      id: 4,
      title: "Glamorous Bridal Makeup",
      image: "/lovable-uploads/f206627c-3807-4e62-81a2-1a2c6f98901f.png",
      description: "Stunning bridal look with glittery eye makeup and traditional nose ring"
    },
    {
      id: 5,
      title: "Royal Bridal Style",
      image: "/lovable-uploads/48cb4155-9d06-43c1-a584-7630f3298ec2.png",
      description: "Regal bridal makeup with heavy traditional jewelry and maang tikka"
    },
    {
      id: 6,
      title: "Elegant White Bridal Look",
      image: "/lovable-uploads/20db0d20-a04f-4135-9cf3-34768f057cdc.png",
      description: "Sophisticated white outfit bridal makeup with pearl jewelry"
    },
    {
      id: 7,
      title: "Green Traditional Bridal",
      image: "/lovable-uploads/e1f02119-2a13-458d-a308-72fb12cc2893.png",
      description: "Beautiful green lehenga bridal look with emerald jewelry"
    },
    {
      id: 8,
      title: "Pink Bridal Elegance",
      image: "/lovable-uploads/46071528-d610-4cac-a14d-cd88c3183365.png",
      description: "Charming pink bridal attire with delicate makeup and jewelry"
    },
    {
      id: 9,
      title: "Maroon Bridal Perfection",
      image: "/lovable-uploads/896fc945-0c5a-4ae2-8683-078993406899.png",
      description: "Classic maroon bridal outfit with gold jewelry and bold makeup"
    },
    {
      id: 10,
      title: "Mint Green Bridal Style",
      image: "/lovable-uploads/a2c94d4c-0197-41d1-814c-fcb19dc787ea.png",
      description: "Refreshing mint green bridal look with matching jewelry set"
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
              Beauty & Makeup Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional bridal makeup and beauty transformations showcasing traditional and contemporary styles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beautyItems.map((item) => (
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
              <h3 className="text-2xl font-bold text-red-dark mb-4">Book Your Beauty Session</h3>
              <p className="text-muted-foreground mb-6">
                Ready to enhance your natural beauty? Contact me for personalized makeup services and consultations.
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

export default BeautyPortfolio;