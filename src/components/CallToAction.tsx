
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Make the Switch?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the movement towards healthier, more sustainable feminine care. 
              Your body and the planet will thank you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8 py-6">
                Order Your First Pack
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Subscribe & Save 20%
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">Free Shipping</div>
                <div className="text-sm text-muted-foreground">On orders over $25</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">30-Day Guarantee</div>
                <div className="text-sm text-muted-foreground">Love it or return it</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">Flexible Delivery</div>
                <div className="text-sm text-muted-foreground">Cancel anytime</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
