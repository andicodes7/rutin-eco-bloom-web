
import { Card, CardContent } from "@/components/ui/card";

const Empowerment = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
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
