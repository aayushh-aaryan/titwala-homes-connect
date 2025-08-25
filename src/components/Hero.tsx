import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MapPin, Calendar, Home } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      <div className="hero-content container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                  Building Trust,
                  <span className="block text-secondary animate-float">
                    Delivering Homes
                  </span>
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-lg leading-relaxed">
                  With 17 years of experience and 4,500+ homes delivered, 
                  SS Gupta Developers brings you premium properties in Titwala 
                  with complete transparency and trust.
                </p>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-3 gap-4 max-w-lg">
                <Card className="p-4 text-center bg-card/20 backdrop-blur-sm border-primary-foreground/20">
                  <div className="text-2xl font-bold text-secondary">17+</div>
                  <div className="text-sm text-primary-foreground/80">Years Experience</div>
                </Card>
                <Card className="p-4 text-center bg-card/20 backdrop-blur-sm border-primary-foreground/20">
                  <div className="text-2xl font-bold text-secondary">4,500+</div>
                  <div className="text-sm text-primary-foreground/80">Homes Delivered</div>
                </Card>
                <Card className="p-4 text-center bg-card/20 backdrop-blur-sm border-primary-foreground/20">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-sm text-primary-foreground/80">Legal & Transparent</div>
                </Card>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="btn-premium px-8 py-4 text-lg">
                  <Link to="/properties" className="flex items-center gap-2">
                    View Properties
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="px-8 py-4 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  <Link to="/contact" className="flex items-center gap-2">
                    Book Appointment
                    <Calendar className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Current Project Highlight */}
            <div className="animate-fade-in">
              <Card className="property-card p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Home className="w-5 h-5" />
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      Ongoing Project
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gradient">Sai Darshan</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Titwala - 1.5km from Railway Station</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-foreground/80">
                    Two wings, three floors each with residential flats and commercial shops. 
                    Modern amenities with complete legal documentation.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Price Range</div>
                      <div className="text-xl font-bold text-primary">₹16-28 Lakhs</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Units Available</div>
                      <div className="text-xl font-bold text-primary">1RK, 1BHK, 2BHK</div>
                    </div>
                  </div>

                  <Button className="w-full btn-premium" asChild>
                    <Link to="/properties/sai-darshan">
                      View Project Details
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;