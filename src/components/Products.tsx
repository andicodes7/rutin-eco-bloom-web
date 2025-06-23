
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Organic Day Pads',
      price: '$12.99',
      originalPrice: '$15.99',
      category: 'day',
      description: 'Ultra-thin, organic cotton pads for daily comfort',
      features: ['100% Organic Cotton', 'Biodegradable', 'Chemical-Free'],
      image: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Overnight Ultra Pads',
      price: '$14.99',
      originalPrice: '$17.99',
      category: 'night',
      description: 'Maximum protection for peaceful nights',
      features: ['Extended Length', 'Superior Absorption', 'Wings for Security'],
      image: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Sensitive Skin Pads',
      price: '$13.99',
      originalPrice: '$16.99',
      category: 'sensitive',
      description: 'Gentle formula for sensitive skin',
      features: ['Hypoallergenic', 'Fragrance-Free', 'Dermatologist Tested'],
      image: '/placeholder.svg'
    },
    {
      id: 4,
      name: 'Starter Bundle',
      price: '$29.99',
      originalPrice: '$39.99',
      category: 'bundle',
      description: 'Perfect introduction to natural period care',
      features: ['Mixed Sizes', 'Travel Pouch Included', '30-Day Supply'],
      image: '/placeholder.svg'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-16 px-4 bg-white" id="products">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Thoughtfully designed period products for every need and preference
          </p>
          
          <div className="max-w-xs mx-auto">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="day">Day Pads</SelectItem>
                <SelectItem value="night">Night Pads</SelectItem>
                <SelectItem value="sensitive">Sensitive Skin</SelectItem>
                <SelectItem value="bundle">Bundles</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="p-0">
                <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                
                <div className="mb-3">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="inline-block bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full mr-1 mb-1"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-pink-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Subscribe & Save 20%
            </h3>
            <p className="text-gray-600 mb-4">
              Never run out with our flexible subscription service. Cancel anytime.
            </p>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8">
              Start Subscription
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
