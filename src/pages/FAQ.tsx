import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Brain, Heart } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "About ZENURA",
      icon: Brain,
      questions: [
        {
          question: "What is ZENURA?",
          answer: "ZENURA is an AI-powered platform that uses advanced Vision Transformer technology to analyze skin conditions and provide personalized insights. We specialize in skin health for different life stages including pregnancy, menstruation, and menopause."
        },
        {
          question: "How accurate is the AI diagnosis?",
          answer: "Our AI model is trained on medical-grade datasets and typically achieves 80-90% accuracy. However, it's important to note that ZENURA is a screening tool and should not replace professional medical consultation with a dermatologist."
        },
        {
          question: "Is my data secure?",
          answer: "Yes, we take privacy seriously. All images are encrypted during upload and analysis, processed securely, and automatically deleted after 24 hours. We are HIPAA compliant and never store personal health information without your explicit consent."
        }
      ]
    },
    {
      title: "Using the Platform",
      icon: MessageCircle,
      questions: [
        {
          question: "What types of skin conditions can ZENURA detect?",
          answer: "ZENURA can identify common skin conditions including acne, eczema, psoriasis, dermatitis, rosacea, fungal infections, and age-related skin changes. Our specialized panels focus on pregnancy-related conditions (melasma, PUPPP), hormonal acne, and menopause-related skin changes."
        },
        {
          question: "How should I take photos for best results?",
          answer: "For optimal analysis: 1) Use good lighting (natural light preferred), 2) Take photos from 6-12 inches away, 3) Ensure the affected area fills most of the frame, 4) Avoid using flash, 5) Clean the area before photographing."
        },
        {
          question: "Can I use ZENURA for children's skin conditions?",
          answer: "ZENURA is designed for adult use (18+). For children's skin concerns, we strongly recommend consulting with a pediatric dermatologist directly."
        }
      ]
    },
    {
      title: "Life Stage Specific Care",
      icon: Heart,
      questions: [
        {
          question: "Why do you have separate panels for pregnancy, menstruation, and menopause?",
          answer: "Hormonal changes during different life stages significantly affect skin health. Our specialized panels are trained to recognize hormone-related skin conditions and provide safe, appropriate recommendations for each life stage."
        },
        {
          question: "Are the home remedies safe during pregnancy?",
          answer: "All pregnancy panel recommendations are reviewed for safety during pregnancy and breastfeeding. However, always consult your healthcare provider before trying new treatments during pregnancy."
        },
        {
          question: "How does menstrual cycle affect my skin?",
          answer: "Hormonal fluctuations during your cycle can cause acne flares, increased oil production, or skin sensitivity. Our menstruation panel helps you understand these patterns and provides cycle-appropriate care tips."
        }
      ]
    },
    {
      title: "Medical Disclaimer",
      icon: Shield,
      questions: [
        {
          question: "When should I see a dermatologist instead of using ZENURA?",
          answer: "Consult a dermatologist immediately for: suspicious moles or growths, rapidly changing lesions, persistent wounds that won't heal, severe or worsening conditions, or if you're concerned about skin cancer. ZENURA is a screening tool, not a replacement for professional medical care."
        },
        {
          question: "Can ZENURA detect skin cancer?",
          answer: "ZENURA is not designed to detect or diagnose skin cancer. For any suspicious moles, unusual growths, or concerning skin changes, please consult a dermatologist immediately for proper evaluation."
        },
        {
          question: "What if I disagree with the AI diagnosis?",
          answer: "If you have concerns about the analysis or if your symptoms persist/worsen, please consult a healthcare professional. Our AI provides suggestions based on visual analysis, but human medical expertise is irreplaceable for complex cases."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ZENURA and AI-powered skin health
            </p>
          </div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <category.icon className="w-5 h-5 text-primary" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-primary-soft border-primary/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Our AI assistant is here to help with any additional questions about skin health.
                </p>
                <Button variant="medical">
                  <MessageCircle className="w-4 h-4" />
                  Ask AI Assistant
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;