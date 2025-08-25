import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Bed, Bath, Car, Wifi, Shield, Zap, Droplets, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Properties = () => {
  const facilities = [
    { icon: Shield, name: "CCTV" },
    { icon: Droplets, name: "Aquaguard" },
    { icon: Zap, name: "Lift" },
    { icon: Car, name: "Parking" },
    { icon: Droplets, name: "24 Hours Water" },
    { icon: Clock, name: "1 Year Maintenance Free" },
    { icon: Zap, name: "MSEB Meter" },
    { icon: Home, name: "Terrace Patra Shed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="hero-content container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Our Premium Properties
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Discover quality homes and commercial spaces in prime locations with modern amenities and excellent connectivity.
          </p>
        </div>
      </section>

      {/* Main Project - Sai Darshan */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="property-card overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Images */}
                <div className="relative h-96 lg:h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Home className="w-24 h-24 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gradient mb-2">3D Renderings</h3>
                    <p className="text-muted-foreground">Professional architectural visualizations available</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <Badge className="mb-2 bg-primary">Ongoing Project</Badge>
                      <h2 className="text-4xl font-bold text-gradient mb-4">Sai Darshan</h2>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="w-5 h-5" />
                        <span>Titwala - 1.5km from Railway Station</span>
                      </div>
                      <p className="text-lg text-foreground/80">
                        Premium residential and commercial complex with modern amenities 
                        and excellent connectivity to Mumbai.
                      </p>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-accent rounded-lg">
                        <div className="text-2xl font-bold text-primary">2</div>
                        <div className="text-sm text-muted-foreground">Wings</div>
                      </div>
                      <div className="text-center p-4 bg-accent rounded-lg">
                        <div className="text-2xl font-bold text-primary">3</div>
                        <div className="text-sm text-muted-foreground">Floors Each</div>
                      </div>
                    </div>

                    {/* Available Units */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Available Units</h3>
                      <div className="grid gap-3">
                        <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                          <div className="flex items-center gap-2">
                            <Home className="w-4 h-4 text-primary" />
                            <span>1RK Flats</span>
                          </div>
                          <span className="font-semibold text-primary">₹16-18 Lakhs</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                          <div className="flex items-center gap-2">
                            <Bed className="w-4 h-4 text-primary" />
                            <span>1BHK Flats</span>
                          </div>
                          <span className="font-semibold text-primary">₹20-24 Lakhs</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                          <div className="flex items-center gap-2">
                            <Home className="w-4 h-4 text-primary" />
                            <span>2BHK Flats</span>
                          </div>
                          <span className="font-semibold text-primary">₹24-28 Lakhs</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                          <div className="flex items-center gap-2">
                            <Home className="w-4 h-4 text-primary" />
                            <span>Commercial Shops</span>
                          </div>
                          <span className="font-semibold text-primary">Price on Request</span>
                        </div>
                      </div>
                    </div>

                    {/* Possession Timeline */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Possession Timeline</h3>
                      <div className="grid gap-3">
                        <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                          <div className="font-semibold text-primary">Wing A</div>
                          <div className="text-sm text-muted-foreground">Bookings Open • Possession: March 2025</div>
                        </div>
                        <div className="p-4 border-l-4 border-secondary bg-secondary/5 rounded-r-lg">
                          <div className="font-semibold text-secondary">Wing B</div>
                          <div className="text-sm text-muted-foreground">Bookings Closed • Possession: September 2024</div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full btn-premium text-lg py-3" asChild>
                      <Link to="/contact">
                        Book Site Visit
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gradient mb-12">Premium Facilities & Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="property-card text-center p-6 interactive-hover">
                  <facility.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold">{facility.name}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gradient text-center mb-12">Additional Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="property-card text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Finance Assistance</h3>
                <p className="text-muted-foreground">Complete loan and finance support with trusted partners</p>
              </Card>
              
              <Card className="property-card text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Legal Documentation</h3>
                <p className="text-muted-foreground">Complete legal documentation and registration support</p>
              </Card>
              
              <Card className="property-card text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">After-Sales Service</h3>
                <p className="text-muted-foreground">Dedicated after-sales service and customer support</p>
              </Card>
              
              <Card className="property-card text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Property Management</h3>
                <p className="text-muted-foreground">Professional property management services</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;