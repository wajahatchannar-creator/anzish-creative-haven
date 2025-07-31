import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      category: "beauty",
      title: "Bridal Makeup Art",
      image: "/lovable-uploads/e2c8fd55-f9c1-425c-b963-39ae423563ee.png",
      description: "Elegant bridal makeup with traditional jewelry styling"
    },
    {
      id: 2,
      category: "beauty",
      title: "Traditional Bridal Look",
      image: "/lovable-uploads/7df7fb39-e72b-4646-a13c-0af682be97d8.png",
      description: "Classic bridal makeup with intricate detailing"
    },
    {
      id: 3,
      category: "fashion",
      title: "Floral Embroidered Dress",
      image: "/lovable-uploads/477e4c75-9d0c-4ff7-9d39-ed6e34fd55ab.png",
      description: "White traditional dress with delicate floral embroidery"
    },
    {
      id: 4,
      category: "fashion",
      title: "Floral Designer Outfit",
      image: "/lovable-uploads/37b4ff13-b8de-4af7-8751-483da78f91e4.png",
      description: "Light colored outfit with beautiful floral appliqué work"
    },
    {
      id: 5,
      category: "crafts",
      title: "Luxury Gift Basket",
      image: "/lovable-uploads/df39882f-bc89-4cde-b97d-79a38279c382.png",
      description: "Thoughtfully curated gift basket with teddy bear and treats"
    },
    {
      id: 6,
      category: "crafts",
      title: "Premium Gift Collection",
      image: "/lovable-uploads/ddc59104-e863-45e7-8080-47b0b46b1fae.png",
      description: "Elegant gift basket arrangement with chocolates and surprises"
    },
    {
      id: 7,
      category: "floral",
      title: "Red Rose Bouquet",
      image: "/lovable-uploads/2e67bc71-270e-4afc-8806-c2fc1d3deaea.png",
      description: "Stunning red glittery roses arrangement"
    },
    {
      id: 8,
      category: "floral",
      title: "Purple Rose Arrangement",
      image: "/lovable-uploads/5440fd24-df5b-4f9c-b575-bf0c956970f8.png",
      description: "Elegant purple glittery roses bouquet"
    }
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "beauty", label: "Beauty & Makeup" },
    { id: "fashion", label: "Fashion Design" },
    { id: "crafts", label: "Craft Design" },
    { id: "floral", label: "Floral Arrangements" }
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-background via-rose-light/10 to-cream/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-rose bg-clip-text text-transparent">
            Portfolio Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my creative work across beauty, fashion, and craft design
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 border-rose/20 bg-card"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;