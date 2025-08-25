import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  Award, 
  Target, 
  Eye, 
  Heart,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Trust & Transparency",
      description: "We believe in complete transparency in all our dealings and building long-term trust with our customers."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Uncompromising commitment to quality in construction, materials, and customer service."
    },
    {
      icon: CheckCircle,
      title: "Legal Compliance",
      description: "100% legal processes with proper documentation and government approvals for all projects."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our customers' satisfaction and dreams come first in everything we do and deliver."
    }
  ];

  const milestones = [
    { year: "2007", event: "SS Gupta Developers Founded" },
    { year: "2010", event: "First 100 Homes Delivered" },
    { year: "2015", event: "Reached 1,000+ Happy Families" },
    { year: "2020", event: "3,000+ Homes Milestone" },
    { year: "2024", event: "4,500+ Homes & Growing" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-hero py-20">
        <div className="hero-content container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
            About SS Gupta Developers
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up">
            Building Dreams Since 2007
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto animate-fade-in">
            With 17 years of unwavering commitment to excellence, we have transformed thousands of dreams 
            into reality through quality construction and transparent business practices.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gradient">Our Story</h2>
                <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    SS Gupta Developers was founded in 2007 with a simple yet powerful vision: 
                    to create quality homes that families can trust and cherish for generations. 
                    Based in the heart of Titwala, we understood the growing need for affordable, 
                    quality housing with excellent connectivity to Mumbai.
                  </p>
                  <p>
                    Over the past 17 years, we have grown from a small local developer to a 
                    trusted name in real estate, having delivered over 4,500 homes to satisfied 
                    customers. Our success is built on three fundamental pillars: quality construction, 
                    complete transparency, and customer-first approach.
                  </p>
                  <p>
                    What sets us apart is our unique business model - we buy the land, we build 
                    the project, and we sell it directly to you. No middlemen, no hidden costs, 
                    just honest, transparent dealings that you can trust.
                  </p>
                </div>
              </div>
              
              <Card className="property-card overflow-hidden">
                <img 
                  src={teamPhoto} 
                  alt="SS Gupta Developers Team" 
                  className="w-full h-96 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Our Professional Team</h3>
                  <p className="text-muted-foreground">
                    A dedicated team of professionals with decades of combined experience in 
                    real estate development, construction, and customer service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="property-card p-8 text-center">
                <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-gradient mb-4">Our Mission</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  To provide quality, affordable homes with modern amenities while maintaining 
                  complete transparency and building lasting relationships with our customers 
                  through trust and excellence.
                </p>
              </Card>
              
              <Card className="property-card p-8 text-center">
                <Eye className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-gradient mb-4">Our Vision</h3>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  To be the most trusted real estate developer in the region, known for 
                  quality construction, customer satisfaction, and contributing to the 
                  development of sustainable communities.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gradient text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="property-card text-center p-6 interactive-hover">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gradient mb-12">Our Achievements</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="property-card p-6">
                <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">4,500+</div>
                <div className="text-muted-foreground">Homes Delivered</div>
              </Card>
              
              <Card className="property-card p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">17+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </Card>
              
              <Card className="property-card p-6">
                <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </Card>
              
              <Card className="property-card p-6">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Legal Compliance</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gradient text-center mb-12">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="w-24 h-24 bg-gradient-premium rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-lg">{milestone.year}</span>
                  </div>
                  <Card className="property-card flex-1 p-6">
                    <p className="text-lg font-semibold">{milestone.event}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero">
        <div className="hero-content container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Be Part of Our Success Story?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made their dream home a reality with SS Gupta Developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="btn-premium px-8 py-4 text-lg">
              <Link to="/properties">
                View Our Properties
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="px-8 py-4 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;