import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload, Heart, Baby, Flower2, Sparkles, Camera, MessageCircle, Shield, Users, GraduationCap, Globe } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import pregnancyPanel from "@/assets/pregnancy-panel.jpg";
import menstruationPanel from "@/assets/menstruation-panel.jpg";
import menopausePanel from "@/assets/menopause-panel.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground">
                AI-Powered 
                <span className="text-primary block">Skin Health</span> 
                for Every Stage
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get instant, personalized skin condition analysis with our advanced Vision Transformer AI. 
                Specialized care for pregnancy, menstruation, and menopause.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" asChild>
                  <Link to="/diagnosis">
                    <Camera className="w-5 h-5" />
                    Start Diagnosis
                  </Link>
                </Button>
                <Button variant="medical" size="xl">
                  <MessageCircle className="w-5 h-5" />
                  Ask AI Assistant
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-secondary" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>AI Powered</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="ZENURA AI Skin Health Platform"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Life Stage Panels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Specialized Care for Every Life Stage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI understands that skin health changes throughout life. Get personalized insights for your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pregnancy Panel */}
            <Card className="group hover:shadow-strong transition-medical overflow-hidden">
              <div className="relative h-48 bg-gradient-pregnancy">
                <img 
                  src={pregnancyPanel} 
                  alt="Pregnancy Skin Care"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-pregnancy" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Baby className="w-6 h-6 text-pregnancy" />
                  <CardTitle className="text-pregnancy">Pregnancy Care</CardTitle>
                </div>
                <CardDescription>
                  Specialized diagnosis for pregnancy-related skin changes like melasma, stretch marks, and PUPPP.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="pregnancy" className="w-full" asChild>
                  <Link to="/pregnancy">
                    Pregnancy Diagnosis
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Menstruation Panel */}
            <Card className="group hover:shadow-strong transition-medical overflow-hidden">
              <div className="relative h-48 bg-gradient-menstruation">
                <img 
                  src={menstruationPanel} 
                  alt="Menstruation Skin Care"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-menstruation" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Heart className="w-6 h-6 text-menstruation" />
                  <CardTitle className="text-menstruation">Menstrual Health</CardTitle>
                </div>
                <CardDescription>
                  Understand hormonal skin changes during your cycle with targeted care recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="menstruation" className="w-full" asChild>
                  <Link to="/menstruation">
                    Menstrual Diagnosis
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Menopause Panel */}
            <Card className="group hover:shadow-strong transition-medical overflow-hidden">
              <div className="relative h-48 bg-gradient-menopause">
                <img 
                  src={menopausePanel} 
                  alt="Menopause Skin Care"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-menopause" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Flower2 className="w-6 h-6 text-menopause" />
                  <CardTitle className="text-menopause">Menopause Support</CardTitle>
                </div>
                <CardDescription>
                  Age-appropriate care for mature skin, addressing dryness, wrinkles, and age spots.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="menopause" className="w-full" asChild>
                  <Link to="/menopause">
                    Menopause Diagnosis
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How ZENURA Works</h2>
            <p className="text-xl text-muted-foreground">Advanced AI technology meets personalized care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                <Upload className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Upload Photo</h3>
              <p className="text-muted-foreground">
                Securely upload a clear photo of your skin condition using our encrypted platform.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our Vision Transformer AI analyzes your image using medical-grade algorithms.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Get Results</h3>
              <p className="text-muted-foreground">
                Receive detailed insights, causes, and personalized home remedy recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NGO Collaboration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Bridging the Digital Divide</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ZENURA collaborates with NGOs to educate and empower communities with limited tech access, 
              bringing skin health awareness to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-medium transition-medical">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>
                <CardTitle>Community Outreach</CardTitle>
                <CardDescription>
                  Partnering with local NGOs to conduct skin health awareness workshops in rural and underserved communities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-medium transition-medical">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>Educational Programs</CardTitle>
                <CardDescription>
                  Training community health workers to identify common skin conditions and provide basic guidance using our resources.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-medium transition-medical">
              <CardHeader>
                <div className="w-16 h-16 bg-pregnancy rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-pregnancy-foreground" />
                </div>
                <CardTitle>Global Impact</CardTitle>
                <CardDescription>
                  Making skin health knowledge accessible across language and technology barriers through simplified guides and visual aids.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-secondary-soft p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Our Mission: Healthcare for All</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that everyone deserves access to quality skin health information, regardless of their 
                technological resources or geographical location. Through our NGO partnerships, we're creating 
                offline educational materials, conducting community workshops, and training local health advocates 
                to spread awareness about skin conditions, their prevention, and safe home remedies.
              </p>
              <div className="mt-6">
                <Button variant="secondary" size="lg">
                  Learn About Our NGO Partnerships
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
