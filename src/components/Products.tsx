
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Ultra Thin Pads",
      description: "Maximum comfort with biodegradable materials",
      price: "$12.99",
      image: "/lovable-uploads/9d4d7926-666d-4299-9493-df2a17047020.png",
      features: ["100% Biodegradable", "Chemical-Free", "Ultra Absorbent"]
    },
    {
      id: 2,
      name: "Night Pads",
      description: "Extended protection for peaceful nights",
      price: "$14.99", 
      image: "/lovable-uploads/9d4d7926-666d-4299-9493-df2a17047020.png",
      features: ["Extra Length", "Leak Protection", "Organic Cotton"]
    },
    {
      id: 3,
      name: "Panty Liners",
      description: "Everyday freshness and comfort",
      price: "$8.99",
      image: "/lovable-uploads/9d4d7926-666d-4299-9493-df2a17047020.png", 
      features: ["Breathable", "Hypoallergenic", "Natural Materials"]
    }
  ];

  return (
    <section id="products" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our range of natural, biodegradable feminine care products 
            designed with your comfort and the planet in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/10 p-8 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-w-48 h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Button className="group-hover:bg-primary/90">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
