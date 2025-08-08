import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="instagram" aria-labelledby="instagram-heading">
          <div className="container mx-auto px-6 py-16">
            <h2 id="instagram-heading" className="text-3xl md:text-4xl font-semibold mb-6">Follow Awan Collections on Instagram</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl">See our latest designs, behind-the-scenes, and customer highlights.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.instagram.com/awan._.collections?igsh=cnQzYzVyNHF6cWZr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                aria-label="Open Awan Collections on Instagram"
              >
                Visit Instagram
              </a>
            </div>
          </div>
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-foreground text-background text-center">
        <div className="container mx-auto px-6">
          <p className="text-sm opacity-80">
            © 2024 Salman Channar (salmanchannar222@gmail.com). All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
