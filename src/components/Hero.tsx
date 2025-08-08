import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-red-light/20 to-red-light/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-dark rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-red-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
        <img src="/lovable-uploads/6f96db5b-2f7e-4b25-9a80-1e2cc544678e.png" alt="Awan Collections profile" className="w-48 h-48 rounded-full object-cover border-4 border-red/30 shadow-[var(--shadow-elegant)] mx-auto mb-8" />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-red-dark bg-clip-text text-transparent">
            Awan Collections
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Beauty Expert | Fashion Designer | Craft Artist
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="contact" 
              size="lg" 
              onClick={() => window.open('https://wa.me/923335534871', '_blank')}
            >
              Contact on WhatsApp
            </Button>
            <Button 
              variant="elegant" 
              size="lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;