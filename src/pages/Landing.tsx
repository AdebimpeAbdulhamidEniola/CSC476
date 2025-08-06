import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/ui/navigation";
import { 
  BookOpen, 
  Users, 
  Search, 
  MessageCircle, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import academicIcons from "@/assets/academic-icons.jpg";

const Landing = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Search",
      description: "Find research papers instantly with AI-powered search across Nigerian universities"
    },
    {
      icon: Users,
      title: "Researcher Matching",
      description: "Connect with like-minded researchers and potential collaborators in your field"
    },
    {
      icon: MessageCircle,
      title: "Real-Time Collaboration",
      description: "Chat with researchers, join discussion boards, and collaborate in real-time"
    },
    {
      icon: Shield,
      title: "Version Control",
      description: "Track changes, manage versions, and maintain research integrity effortlessly"
    },
    {
      icon: TrendingUp,
      title: "Trending Research",
      description: "Discover what's trending in Nigerian academia and stay ahead of the curve"
    },
    {
      icon: Globe,
      title: "Cross-Institution Access",
      description: "Access research from universities across Nigeria in one unified platform"
    }
  ];

  const stats = [
    { number: "50+", label: "Universities Connected" },
    { number: "10,000+", label: "Research Papers" },
    { number: "5,000+", label: "Active Researchers" },
    { number: "100+", label: "Research Fields" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-95"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Nigerian researchers collaborating" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 animate-fade-in">
              <Zap className="h-4 w-4 mr-2" />
              Nigeria's First Collaborative Research Platform
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              Revolutionizing Academic Research in 
              <span className="block text-accent bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                Nigerian Universities
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
              Connect, collaborate, and contribute to Nigeria's academic excellence with smart search, 
              real-time collaboration, and AI-powered research matching.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant" asChild>
                <Link to="/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/search">
                  Explore Research
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything You Need for Academic Excellence
            </h2>
            <p className="text-xl text-muted-foreground">
              Our platform brings together the best tools for research collaboration, 
              discovery, and knowledge sharing across Nigerian universities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth hover-glow group">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-smooth">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <BookOpen className="h-16 w-16 mx-auto mb-6 animate-float" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Research Experience?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Join thousands of Nigerian researchers already using ResearchHub to 
              accelerate their academic journey and make groundbreaking discoveries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/register">
                  Start Your Research Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/login">
                  Already have an account?
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-8 w-8" />
                <span className="text-xl font-bold">ResearchHub</span>
              </div>
              <p className="text-background/70">
                Empowering Nigerian academic excellence through collaborative research.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-background/70">
                <li><Link to="/search" className="hover:text-background transition-smooth">Search Research</Link></li>
                <li><Link to="/upload" className="hover:text-background transition-smooth">Upload Papers</Link></li>
                <li><Link to="/collaborate" className="hover:text-background transition-smooth">Find Collaborators</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/70">
                <li><Link to="/help" className="hover:text-background transition-smooth">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-background transition-smooth">Contact Us</Link></li>
                <li><Link to="/faq" className="hover:text-background transition-smooth">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-background/70">
                <li><Link to="/privacy" className="hover:text-background transition-smooth">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-background transition-smooth">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/70">
              © 2024 ResearchHub. Built for Nigerian Universities. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;