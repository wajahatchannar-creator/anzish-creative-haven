import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Beauty & Fashion Services",
      description: "Professional makeup, skincare treatments, and custom dress designs for all occasions.",
      icon: "💄",
      features: ["Bridal Makeup", "Party Makeup", "Custom Embroidery", "Traditional Wear", "Skincare Consultation", "Personal Fitting"]
    },
    {
      title: "Craft & Wellness Services", 
      description: "Unique handcrafted items, floral arrangements, and personalized fitness consultation.",
      icon: "🎨",
      features: ["Gift Baskets", "Floral Arrangements", "Handmade Crafts", "Fitness Planning", "Wellness Guidance", "Custom Decorations"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-red-light/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-red-dark bg-clip-text text-transparent">
            Services Offered
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive beauty and design services tailored to enhance your natural elegance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 border-red/20 bg-gradient-to-br from-card to-red-light/5"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-red-dark mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-red-dark rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;