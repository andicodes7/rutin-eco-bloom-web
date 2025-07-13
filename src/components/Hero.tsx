
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <div className="flex items-center">
                  <img 
                    src="/lovable-uploads/55a78285-3c89-4129-97eb-421f1f45fc9b.png" 
                    alt="R Logo"
                    className="w-12 h-16 md:w-16 md:h-20 lg:w-20 lg:h-24 object-contain mr-1"
                  />
                  edefining
                </div>
                <span className="block text-primary">Feminine Care</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience the comfort of biodegradable, chemical-free sanitary pads made from natural materials. 
                Gentle on your body, kind to the planet.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Biodegradable</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Chemicals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Natural</div>
                <div className="text-sm text-muted-foreground">Materials</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center space-x-4">
            <img 
              src="/lovable-uploads/7a4c1089-d3f2-43cc-8a6c-f71500458a30.png" 
              alt="Empowered woman illustration"
              className="w-64 h-80 object-contain opacity-80"
            />
            <img 
              src="/lovable-uploads/e0a15b27-8ed8-431d-867f-cd7267371c57.png" 
              alt="Woman figure logo"
              className="w-32 h-40 object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
