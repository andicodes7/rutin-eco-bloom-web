
import { Star, Award, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Finally, a product that aligns with my values. No more irritation, and I feel good about my environmental impact.",
    rating: 5
  },
  {
    name: "Emma L.",
    text: "The comfort is incredible, and knowing they're completely natural gives me such peace of mind.",
    rating: 5
  },
  {
    name: "Jessica R.",
    text: "I've been using Rutin for 6 months now. Best decision I've made for my health and the planet.",
    rating: 5
  }
];

const certifications = [
  "Certified Organic Materials",
  "Dermatologically Tested",
  "Cruelty-Free Certified",
  "ISO 14001 Environmental Standard"
];

const Trust = () => {
  return (
    <section id="about" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Women Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of women who have made the switch to healthier, more sustainable feminine care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold text-foreground">5,000+</span>
              </div>
              <span className="text-muted-foreground">Happy Customers</span>
            </div>

            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-3">"{testimonial.text}"</p>
                    <p className="font-semibold text-foreground">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Certifications & Quality</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Winner: Best Sustainable Product 2025
                </h4>
                <p className="text-muted-foreground">
                  Recognized by the Environmental Health Alliance for innovation in sustainable feminine care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
