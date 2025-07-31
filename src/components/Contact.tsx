import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-red-light/20 via-red-light/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-red-dark bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to enhance your beauty or create something unique? Let's discuss your vision
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-red/20 bg-card shadow-[var(--shadow-soft)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-red-dark">
                    <Phone className="w-6 h-6" />
                    WhatsApp Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get in touch via WhatsApp for quick consultations and bookings
                  </p>
                  <Button 
                    variant="contact" 
                    size="lg" 
                    className="w-full"
                    onClick={() => window.open('https://wa.me/923335534871', '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    03335534871
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red/20 bg-card shadow-[var(--shadow-soft)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-red-dark">
                    <MapPin className="w-6 h-6" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Based in Islamabad, Pakistan
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Available for consultations and services in the Islamabad area
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Services Summary */}
            <div className="space-y-6">
              <Card className="border-red/20 bg-gradient-to-br from-card to-red-light/10 shadow-[var(--shadow-soft)]">
                <CardHeader>
                  <CardTitle className="text-red-dark">Why Choose Me?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-dark rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Professional Expertise</h4>
                      <p className="text-sm text-muted-foreground">Years of experience in beauty and fashion design</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-dark rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Personalized Service</h4>
                      <p className="text-sm text-muted-foreground">Tailored solutions for your unique style and needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-dark rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Quality Craftsmanship</h4>
                      <p className="text-sm text-muted-foreground">Attention to detail in every project</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-dark rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Customer Satisfaction</h4>
                      <p className="text-sm text-muted-foreground">Committed to exceeding your expectations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;