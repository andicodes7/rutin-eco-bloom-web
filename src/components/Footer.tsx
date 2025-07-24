
import { Heart, Mail, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Rutin</h3>
            <p className="text-primary-foreground/80">
              Redefining feminine hygiene with natural, biodegradable products that care for your body and the planet.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 hover:text-primary-foreground/80 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-primary-foreground/80 cursor-pointer" />
              <Mail className="w-5 h-5 hover:text-primary-foreground/80 cursor-pointer" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Products</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground">Day Pads</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Night Pads</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Starter Pack</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Subscription</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Learn</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Sustainability</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Health Benefits</a></li>
              <li><a href="#" className="hover:text-primary-foreground">FAQs</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Returns</a></li>
              <li><a href="#" className="hover:text-primary-foreground">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80">
            © 2024 Rutin. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-primary-foreground/80">
            <img 
              src="/lovable-uploads/27515060-e2ff-461c-834f-d53b51254f72.png" 
              alt="Strong woman, clean planet"
              className="w-8 h-8 object-contain"
            />
            <span>Strong woman, clean planet</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
