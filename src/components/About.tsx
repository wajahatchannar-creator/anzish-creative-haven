const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-red-light/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-red-dark bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in the beautiful city of Islamabad, I am a passionate professional specializing in beauty, fashion, and craft design. My journey began with a strong educational foundation and has evolved into a creative career dedicated to enhancing beauty and creating stunning designs.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-card rounded-lg border border-red/20 shadow-[var(--shadow-soft)]">
                  <h3 className="font-semibold text-red-dark mb-2">Education</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• BSc in Sociology - University of Haripur</li>
                    <li>• Matriculation - HiTech School</li>
                    <li>• Currently pursuing CSS Studies</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-card rounded-lg border border-red/20 shadow-[var(--shadow-soft)]">
                  <h3 className="font-semibold text-red-dark mb-2">My Approach</h3>
                  <p className="text-muted-foreground">
                    I believe in enhancing natural beauty while creating unique, personalized designs that reflect each client's individual style and personality.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-red-light/30 to-red/20 rounded-2xl shadow-[var(--shadow-elegant)] flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 mx-auto mb-4 bg-red/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <p className="font-medium">Creating Beauty & Elegance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;