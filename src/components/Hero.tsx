
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Redefining
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

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full"></div>
                </div>
                <p className="text-lg font-medium text-foreground">
                  Natural • Safe • Sustainable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
