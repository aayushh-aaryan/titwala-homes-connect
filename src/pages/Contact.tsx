import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="hero-content container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
            Contact SS Gupta Developers
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Let's Make Your Dream Home Reality
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            Get in touch with us for property inquiries, site visits, or to book an appointment. 
            We're here to help you find the perfect home.
          </p>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gradient mb-4">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">
                Choose how you'd like to connect with us
              </p>
            </div>
            
            {/* Contact Options */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="property-card text-center p-8 interactive-hover">
                <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gradient mb-4">General Inquiry</h3>
                <p className="text-muted-foreground mb-6">
                  Have questions about our properties, services, or want to know more about SS Gupta Developers?
                </p>
                <ContactForm type="inquiry" />
              </Card>
              
              <Card className="property-card text-center p-8 interactive-hover">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gradient mb-4">Book Appointment</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to visit our properties or meet with our team? Schedule an appointment at your convenience.
                </p>
                <ContactForm type="appointment" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gradient text-center mb-12">Contact Information</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="property-card text-center p-6">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Phone Numbers</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <a href="tel:9702685666" className="hover:text-primary transition-colors">
                      +91 97026 85666
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    <a href="tel:9137922481" className="hover:text-primary transition-colors">
                      +91 91379 22481
                    </a>
                  </p>
                </div>
              </Card>

              <Card className="property-card text-center p-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Office Location</h3>
                <p className="text-muted-foreground">
                  Titwala, Maharashtra<br />
                  1.5 km from Titwala Railway Station
                </p>
                <a 
                  href="https://maps.app.goo.gl/JVnL4a8UzZ2tizHH6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm mt-2 inline-block"
                >
                  View on Google Maps
                </a>
              </Card>

              <Card className="property-card text-center p-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Office Hours</h3>
                <div className="text-muted-foreground">
                  <p>Monday to Sunday</p>
                  <p className="font-semibold text-primary">9:00 AM - 7:00 PM</p>
                </div>
              </Card>

              <Card className="property-card text-center p-6">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:info@ssguptadevelopers.com" className="hover:text-primary transition-colors">
                    info@ssguptadevelopers.com
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  We'll respond within 24 hours
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gradient text-center mb-12">Find Us</h2>
            <Card className="property-card overflow-hidden">
              <div className="h-96 bg-accent/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground mb-4">
                    Our office is conveniently located in Titwala with easy access from the railway station
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/JVnL4a8UzZ2tizHH6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium inline-flex items-center px-6 py-3 rounded-lg transition-all duration-200"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gradient text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card className="property-card">
                <CardHeader>
                  <CardTitle>What is the price range of properties?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our current Sai Darshan project offers properties ranging from ₹16 lakhs for 1RK units 
                    to ₹28 lakhs for 2BHK units. We also have commercial shops available at competitive prices.
                  </p>
                </CardContent>
              </Card>

              <Card className="property-card">
                <CardHeader>
                  <CardTitle>Do you provide loan assistance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we provide complete finance and loan assistance through our trusted banking partners. 
                    Our team helps you with documentation and processing for smooth loan approval.
                  </p>
                </CardContent>
              </Card>

              <Card className="property-card">
                <CardHeader>
                  <CardTitle>Are all properties legally compliant?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely! We maintain 100% legal compliance with all necessary approvals, 
                    proper documentation, and government clearances for all our projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="property-card">
                <CardHeader>
                  <CardTitle>What amenities are included?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our properties include CCTV security, lifts, parking, 24-hour water supply, 
                    MSEB meter connections, and 1-year maintenance-free period. Additional amenities vary by project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;