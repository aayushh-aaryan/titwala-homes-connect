import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

interface ContactFormProps {
  type?: "inquiry" | "appointment";
  className?: string;
}

const ContactForm = ({ type = "inquiry", className = "" }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    budget: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: type === "appointment" ? "Appointment Requested!" : "Inquiry Sent!",
      description: type === "appointment" 
        ? "We'll contact you shortly to confirm your appointment."
        : "Thank you for your interest. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      budget: "",
      message: "",
      preferredDate: "",
      preferredTime: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className={`grid lg:grid-cols-2 gap-8 ${className}`}>
      {/* Contact Form */}
      <Card className="property-card">
        <CardHeader>
          <CardTitle className="text-2xl text-gradient flex items-center gap-2">
            <Send className="w-6 h-6" />
            {type === "appointment" ? "Book an Appointment" : "Send Inquiry"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Enter your email address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Property Type</Label>
                <Select onValueChange={(value) => handleChange("propertyType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1rk">1RK Flat</SelectItem>
                    <SelectItem value="1bhk">1BHK Flat</SelectItem>
                    <SelectItem value="2bhk">2BHK Flat</SelectItem>
                    <SelectItem value="commercial">Commercial Shop</SelectItem>
                    <SelectItem value="plot">Land Plot</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Budget Range</Label>
                <Select onValueChange={(value) => handleChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15-20">₹15-20 Lakhs</SelectItem>
                    <SelectItem value="20-25">₹20-25 Lakhs</SelectItem>
                    <SelectItem value="25-30">₹25-30 Lakhs</SelectItem>
                    <SelectItem value="30+">₹30+ Lakhs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {type === "appointment" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleChange("preferredDate", e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Preferred Time</Label>
                  <Select onValueChange={(value) => handleChange("preferredTime", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                      <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={4}
                placeholder="Tell us about your requirements or any specific questions..."
              />
            </div>

            <Button type="submit" className="w-full btn-premium text-lg py-3">
              {type === "appointment" ? "Book Appointment" : "Send Inquiry"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="property-card">
        <CardHeader>
          <CardTitle className="text-2xl text-gradient">Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Phone Numbers</h3>
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
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Office Location</h3>
                <p className="text-muted-foreground">
                  Titwala, Maharashtra<br />
                  1.5 km from Titwala Railway Station
                </p>
                <a 
                  href="https://maps.app.goo.gl/JVnL4a8UzZ2tizHH6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday to Sunday<br />
                  9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t">
            <h3 className="font-semibold mb-3">Why Choose SS Gupta Developers?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 17+ years of trusted experience</li>
              <li>• 4,500+ satisfied customers</li>
              <li>• 100% legal and transparent deals</li>
              <li>• Direct sales - no middlemen</li>
              <li>• Complete documentation support</li>
              <li>• Excellent connectivity to Mumbai</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;