
import { Heart, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center">
          <div className="space-y-4 text-center">
            <h3 className="text-2xl font-bold">Rutin</h3>
            <p className="text-primary-foreground/80">
              Redefining feminine hygiene with natural, biodegradable products that care for your body and the planet.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://www.linkedin.com/company/rutin-essentials/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80">
            © 2024 Rutin. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-current" />
            <span>for women and the planet</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
