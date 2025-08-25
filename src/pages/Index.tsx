import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Award, 
  MapPin, 
  Truck, 
  CheckCircle, 
  ArrowRight,
  Star,
  Home,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import teamPhoto from "@/assets/team-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <Badge className="bg-primary text-primary-foreground">About SS Gupta Developers</Badge>
                <h2 className="text-4xl font-bold text-gradient">
                  17 Years of Trust & Excellence
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Based in Titwala, SS Gupta Developers has been a trusted name in real estate for over 17 years. 
                  We have successfully delivered more than 4,500 homes to satisfied customers with complete 
                  transparency and legal compliance.
                </p>
                
                <div className="grid grid-cols-3 gap-4">
                  <Card className="text-center p-4 bg-card/50 border-primary/20">
                    <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">4,500+</div>
                    <div className="text-sm text-muted-foreground">Homes Delivered</div>
                  </Card>
                  <Card className="text-center p-4 bg-card/50 border-primary/20">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">17+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </Card>
                  <Card className="text-center p-4 bg-card/50 border-primary/20">
                    <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Legal & Transparent</div>
                  </Card>
                </div>

                <Button className="btn-premium" asChild>
                  <Link to="/project-details" className="flex items-center gap-2">
                    View Project Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="animate-fade-in">
                <Card className="property-card overflow-hidden">
                  <img 
                    src={teamPhoto} 
                    alt="SS Gupta Developers Team" 
                    className="w-full h-80 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Our Professional Team</h3>
                    <p className="text-muted-foreground">
                      Dedicated professionals committed to delivering your dream home with integrity and excellence.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Unique Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gradient mb-12">Our Unique Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="property-card text-center p-8 interactive-hover">
                <div className="w-20 h-20 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold mb-2 text-primary">1. We Buy The Land</div>
                <p className="text-muted-foreground">
                  Strategic land acquisition in prime locations with growth potential and excellent connectivity.
                </p>
              </Card>
              
              <Card className="property-card text-center p-8 interactive-hover">
                <div className="w-20 h-20 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold mb-2 text-primary">2. We Build The Project</div>
                <p className="text-muted-foreground">
                  Quality construction with modern amenities, sustainable practices, and attention to detail.
                </p>
              </Card>
              
              <Card className="property-card text-center p-8 interactive-hover">
                <div className="w-20 h-20 bg-gradient-premium rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold mb-2 text-primary">3. We Sell Directly</div>
                <p className="text-muted-foreground">
                  Direct sales to customers with complete transparency, support, and no middlemen involved.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantages */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gradient text-center mb-12">Prime Titwala Location</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <Card className="property-card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">Connectivity & Convenience</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span>1.5 km from Titwala Railway Station</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span>3.5 km from Khadwali Station</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span>5 km from Nashik Highway Road</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <span>1 km from Samruddhi Highway Road</span>
                  </div>
                </div>
              </Card>
              
              <Card className="property-card p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gradient">Nearby Amenities</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-primary" />
                    <span>Quality Schools & Educational Institutes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-primary" />
                    <span>Shopping Markets & Commercial Centers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="w-5 h-5 text-primary" />
                    <span>Temples & Religious Places</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Medical Services & Healthcare</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gradient mb-4">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">
                Ready to find your dream home? Contact us for inquiries or to book an appointment.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
