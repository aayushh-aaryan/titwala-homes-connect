import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Bed, Bath, Car, Wifi, Shield, Zap, Droplets, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import saiDarshanFront from "@/assets/sai-darshan-front.png";
import saiDarshanCorner from "@/assets/sai-darshan-corner.png";

const ProjectDetails = () => {
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

  const nearbyLocations = [
    { name: "Titwala Station", distance: "1.5 km" },
    { name: "Khadwali Station", distance: "3.5 km" },
    { name: "Nashik Highway Road", distance: "5 km" },
    { name: "Samruddhi Highway Road", distance: "1 km" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="hero-content container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary text-primary-foreground">Ongoing Project</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Sai Darshan
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Premium residential and commercial complex in Titwala with modern amenities and excellent connectivity.
          </p>
        </div>
      </section>

      {/* Project Images */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gradient text-center mb-12">Project Gallery</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="property-card overflow-hidden interactive-hover">
                <div className="relative">
                  <img 
                    src={saiDarshanFront} 
                    alt="Sai Darshan Front View - Modern residential and commercial complex"
                    className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gradient mb-2">Front Elevation View</h3>
                  <p className="text-muted-foreground">Complete view showing both wings with commercial shops on ground floor</p>
                </CardContent>
              </Card>

              <Card className="property-card overflow-hidden interactive-hover">
                <div className="relative">
                  <img 
                    src={saiDarshanCorner} 
                    alt="Sai Darshan Corner View - Architectural perspective of the complex"
                    className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gradient mb-2">Corner Perspective View</h3>
                  <p className="text-muted-foreground">Architectural perspective showing the modern design and layout</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Project Overview */}
              <Card className="property-card lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-gradient text-2xl">Project Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Titwala - 1.5km from Railway Station</span>
                  </div>
                  
                  <p className="text-foreground/80 text-lg">
                    Sai Darshan is a premium residential and commercial complex featuring two wings 
                    with three floors each. The project combines modern living spaces with commercial 
                    opportunities, all designed with contemporary architecture and quality construction.
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-primary">2</div>
                      <div className="text-sm text-muted-foreground">Wings</div>
                    </div>
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-3xl font-bold text-primary">3</div>
                      <div className="text-sm text-muted-foreground">Floors Each</div>
                    </div>
                  </div>

                  {/* Available Units */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Available Units & Pricing</h3>
                    <div className="grid gap-3">
                      <div className="flex justify-between items-center p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
                        <div className="flex items-center gap-3">
                          <Home className="w-5 h-5 text-primary" />
                          <span className="font-medium">1RK Flats</span>
                        </div>
                        <span className="font-bold text-primary text-lg">₹16-18 Lakhs</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
                        <div className="flex items-center gap-3">
                          <Bed className="w-5 h-5 text-primary" />
                          <span className="font-medium">1BHK Flats</span>
                        </div>
                        <span className="font-bold text-primary text-lg">₹20-24 Lakhs</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
                        <div className="flex items-center gap-3">
                          <Home className="w-5 h-5 text-primary" />
                          <span className="font-medium">2BHK Flats</span>
                        </div>
                        <span className="font-bold text-primary text-lg">₹24-28 Lakhs</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-accent rounded-lg hover:bg-accent/80 transition-colors">
                        <div className="flex items-center gap-3">
                          <Home className="w-5 h-5 text-primary" />
                          <span className="font-medium">Commercial Shops</span>
                        </div>
                        <span className="font-bold text-primary text-lg">Price on Request</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Possession Timeline */}
              <Card className="property-card">
                <CardHeader>
                  <CardTitle className="text-gradient">Possession Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border-l-4 border-primary bg-primary/5 rounded-r-lg">
                    <div className="font-semibold text-primary">Wing A</div>
                    <div className="text-sm text-muted-foreground">Bookings Open</div>
                    <div className="text-sm font-medium">Possession: March 2025</div>
                  </div>
                  <div className="p-4 border-l-4 border-secondary bg-secondary/5 rounded-r-lg">
                    <div className="font-semibold text-secondary">Wing B</div>
                    <div className="text-sm text-muted-foreground">Bookings Closed</div>
                    <div className="text-sm font-medium">Possession: September 2024</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Amenities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gradient text-center mb-12">Premium Facilities & Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {facilities.map((facility, index) => (
                <Card key={index} className="property-card text-center p-6 interactive-hover">
                  <facility.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold">{facility.name}</h3>
                </Card>
              ))}
            </div>

            {/* Location Connectivity */}
            <Card className="property-card">
              <CardHeader>
                <CardTitle className="text-gradient text-2xl text-center">Location & Connectivity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {nearbyLocations.map((location, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-accent rounded-lg">
                      <span className="font-medium">{location.name}</span>
                      <Badge variant="outline">{location.distance}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Action Section */}
      <section className="py-20 bg-hero">
        <div className="hero-content container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Ready to Make This Your Home?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a site visit and get detailed information about available units.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-premium text-lg py-3 px-8" asChild>
              <Link to="/contact">
                Book Site Visit
              </Link>
            </Button>
            <Button variant="outline" className="text-lg py-3 px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:9702685666">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;