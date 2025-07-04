
import { Card, CardContent } from "@/components/ui/card";

const Empowerment = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/0b2e9d3a-18e9-4d4c-85f8-2ced1fc6ddef.png" 
                alt="Strong woman, clean planet - Rutin empowerment message"
                className="w-full max-w-md object-contain"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10">
                <img 
                  src="/lovable-uploads/67c7444c-8c40-4744-b369-1a7994c3ff4c.png" 
                  alt="Decorative lines"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <img 
                src="/lovable-uploads/a9b74398-8618-466f-8237-7dbacfc692fd.png" 
                alt="Confidence starts with comfort - Rutin message"
                className="w-full max-w-sm object-contain mb-6"
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Embrace Your Power
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Rutin, we believe that confidence begins with comfort. Our natural, biodegradable pads 
                are designed to support strong women who care about their health and the planet's future.
              </p>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <img 
                    src="/lovable-uploads/7a4c1089-d3f2-43cc-8a6c-f71500458a30.png" 
                    alt="Empowered woman illustration"
                    className="w-16 h-20 object-contain flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Designed for Every Body
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Our products celebrate the diversity and strength of all women, 
                      providing reliable protection that moves with your lifestyle.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empowerment;
