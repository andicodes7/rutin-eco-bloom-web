
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "20 Billion",
    label: "Disposable pads in landfills yearly",
    impact: "Traditional pads take 500-800 years to decompose"
  },
  {
    number: "6 Months",
    label: "Time for our pads to biodegrade",
    impact: "Leaving zero trace on the environment"
  },
  {
    number: "45%",
    label: "Reduction in plastic waste",
    impact: "When you switch to Rutin products"
  }
];

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Protecting Your Health &
              <span className="block text-primary">Our Planet</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Every month, women worldwide contribute to a growing environmental crisis with conventional menstrual products. 
              Rutin offers a solution that doesn't compromise on comfort or protection while dramatically reducing environmental impact.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">Made from renewable bamboo fiber and organic cotton</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">Packaging made from recycled and recyclable materials</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p className="text-muted-foreground">Carbon-neutral shipping and manufacturing process</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {stat.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.impact}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
