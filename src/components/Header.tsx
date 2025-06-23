
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/73c4eab8-6cd9-4983-ae43-8a6a257b131e.png" 
              alt="Rutin Logo"
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Products
            </a>
            <a href="#sustainability" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Sustainability
            </a>
            <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              About
            </a>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6">
              Shop Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#products" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Products
              </a>
              <a href="#sustainability" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Sustainability
              </a>
              <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                About
              </a>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white rounded-full">
                Shop Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
