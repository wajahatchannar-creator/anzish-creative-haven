import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  // Featured portfolio categories with representative images
  const portfolioCategories = [
    {
      id: "beauty",
      title: "Beauty & Makeup",
      image: "/lovable-uploads/e2c8fd55-f9c1-425c-b963-39ae423563ee.png",
      description: "Professional bridal makeup and beauty transformations",
      route: "/beauty-portfolio"
    },
    {
      id: "fashion", 
      title: "Fashion Design",
      image: "/lovable-uploads/477e4c75-9d0c-4ff7-9d39-ed6e34fd55ab.png",
      description: "Custom dress designs with traditional embroidery",
      route: "/fashion-portfolio"
    },
    {
      id: "crafts",
      title: "Craft Design", 
      image: "/lovable-uploads/df39882f-bc89-4cde-b97d-79a38279c382.png",
      description: "Handcrafted gift baskets and unique arrangements",
      route: "/craft-portfolio"
    },
    {
      id: "floral",
      title: "Floral Arrangements",
      image: "/lovable-uploads/2e67bc71-270e-4afc-8806-c2fc1d3deaea.png", 
      description: "Exquisite floral bouquets and arrangements",
      route: "/floral-portfolio"
    }
  ];

  const handleCategoryClick = (route: string) => {
    navigate(route);
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-background via-red-light/10 to-red-light/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-red-dark bg-clip-text text-transparent">
            Portfolio Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Click on any category to explore detailed portfolio galleries
          </p>
        </div>
        
        {/* Portfolio Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioCategories.map((category) => (
            <Card 
              key={category.id} 
              className="group overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 border-border bg-card cursor-pointer"
              onClick={() => handleCategoryClick(category.route)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                      <div className="mt-3 inline-block">
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                          Click to explore →
                        </span>
                      </div>
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