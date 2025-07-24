
import { Leaf, Heart, Shield, Recycle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Leaf,
    title: "100% Natural Materials",
    description: "Made from organic cotton and plant-based materials that are gentle on your skin and free from harmful chemicals."
  },
  {
    icon: Heart,
    title: "Health Focused",
    description: "Prioritizing women's health with breathable, hypoallergenic materials that reduce irritation and infections."
  },
  {
    icon: Shield,
    title: "Chemical-Free Protection",
    description: "No bleaches, fragrances, or synthetic materials. Just pure, natural protection you can trust."
  },
  {
    icon: Recycle,
    title: "Completely Biodegradable",
    description: "Our pads decompose naturally within months, not centuries, reducing environmental impact significantly."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/2b94c035-198c-4b31-bc25-46c66fc28d45.png" 
              alt="Confidence starts with comfort"
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Rutin?
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of truly natural feminine care that respects your body and the environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
