import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-premium rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">SS</span>
              </div>
              <div>
                <h3 className="font-bold text-gradient">SS Gupta Developers</h3>
                <p className="text-sm text-muted-foreground">Building Trust, Delivering Homes</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              With 17 years of experience in real estate, we have delivered over 4,500 homes 
              with complete transparency and legal compliance.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/properties" className="block text-muted-foreground hover:text-primary transition-colors">
                Properties
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/faq" className="block text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Residential Flats (1RK, 1BHK, 2BHK)</p>
              <p>• Commercial Shops</p>
              <p>• Private Land Plots</p>
              <p>• Open Plots for Bungalows</p>
              <p>• Finance & Loan Assistance</p>
              <p>• Legal Documentation</p>
              <p>• Property Management</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:9702685666" className="text-muted-foreground hover:text-primary transition-colors block">
                    +91 97026 85666
                  </a>
                  <a href="tel:9137922481" className="text-muted-foreground hover:text-primary transition-colors block">
                    +91 91379 22481
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  Titwala, Maharashtra<br />
                  1.5 km from Titwala Railway Station
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  Mon - Sun: 9:00 AM - 7:00 PM
                </div>
              </div>
            </div>
            
            <Button className="w-full btn-premium" asChild>
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 SS Gupta Developers. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/sitemap" className="text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;