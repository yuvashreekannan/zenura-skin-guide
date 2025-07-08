import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload, Heart, Loader2, AlertCircle, CheckCircle, Home, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import menstruationPanel from "@/assets/menstruation-panel.jpg";

interface MenstrualDiagnosisResult {
  condition: string;
  confidence: number;
  description: string;
  cyclePhase: string;
  hormoneInfo: string;
  cycleCare: string[];
  supplements: string[];
}

const Menstruation = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<MenstrualDiagnosisResult | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        setResult(null);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please select an image file (JPG, PNG, etc.)",
          variant: "destructive"
        });
      }
    }
  }, [toast]);

  const analyzeSkin = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    
    setTimeout(() => {
      const mockResults: MenstrualDiagnosisResult[] = [
        {
          condition: "Hormonal Acne (Menstrual)",
          confidence: 88,
          description: "Cyclical acne that typically appears before or during menstruation due to hormonal fluctuations.",
          cyclePhase: "Pre-menstrual phase (luteal phase)",
          hormoneInfo: "Increased progesterone and androgen levels can trigger oil production and inflammation.",
          cycleCare: [
            "Use gentle salicylic acid cleanser during breakout periods",
            "Apply spot treatments with benzoyl peroxide or tea tree oil",
            "Increase hydration during luteal phase",
            "Use oil-free moisturizers to prevent over-drying",
            "Consider hormonal tracking to predict breakouts"
          ],
          supplements: [
            "Zinc (25-30mg daily) - reduces inflammation",
            "Omega-3 fatty acids - anti-inflammatory",
            "Spearmint tea - may help with androgen levels",
            "Probiotics - support gut-skin connection"
          ]
        },
        {
          condition: "Menstrual Skin Sensitivity",
          confidence: 84,
          description: "Increased skin sensitivity and reactivity that occurs in relation to menstrual cycle hormones.",
          cyclePhase: "Pre-menstrual and menstrual phase",
          hormoneInfo: "Estrogen drops before menstruation, reducing skin barrier function and increasing sensitivity.",
          cycleCare: [
            "Switch to gentler, fragrance-free products during sensitive periods",
            "Use a simple routine with minimal actives",
            "Apply extra moisturizer to strengthen skin barrier",
            "Use lukewarm water instead of hot when cleansing",
            "Avoid trying new products during this phase"
          ],
          supplements: [
            "Evening primrose oil - supports hormone balance",
            "Magnesium - reduces inflammation and stress",
            "Vitamin E - antioxidant protection",
            "B-complex vitamins - support skin health"
          ]
        }
      ];

      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setResult(randomResult);
      setIsAnalyzing(false);
      
      toast({
        title: "Menstrual cycle analysis complete",
        description: `Detected: ${randomResult.condition} (${randomResult.confidence}% confidence)`
      });
    }, 3000);
  };

  const resetAnalysis = () => {
    setSelectedFile(null);
    setResult(null);
    setPreviewUrl(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-8 h-8 text-menstruation" />
                <h1 className="text-4xl font-bold text-menstruation">Menstrual Skin Health</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-6">
                Understanding and managing hormonal skin changes throughout your menstrual cycle 
                with personalized AI insights.
              </p>
              <div className="bg-menstruation-soft p-4 rounded-lg border border-menstruation/20">
                <p className="text-sm text-menstruation-foreground">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Track your skin changes with your cycle for better skin health management.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={menstruationPanel} 
                alt="Menstrual skin care"
                className="rounded-lg shadow-medium w-full"
              />
            </div>
          </div>

          {!result && (
            <Card className="mb-8 border-menstruation/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-menstruation">
                  <Upload className="w-5 h-5" />
                  <span>Upload Image for Menstrual Cycle Analysis</span>
                </CardTitle>
                <CardDescription>
                  Specialized analysis for hormone-related skin conditions during your menstrual cycle
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-menstruation/30 bg-menstruation-soft rounded-lg p-8 text-center">
                  {previewUrl ? (
                    <div className="space-y-4">
                      <img 
                        src={previewUrl} 
                        alt="Skin condition preview" 
                        className="max-w-md mx-auto rounded-lg shadow-medium"
                      />
                      <p className="text-sm text-muted-foreground">
                        {selectedFile?.name}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="w-12 h-12 text-menstruation mx-auto" />
                      <div>
                        <p className="text-lg font-medium text-menstruation">Click to upload image</p>
                        <p className="text-sm text-muted-foreground">
                          Supports JPG, PNG, WebP (max 10MB)
                        </p>
                      </div>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>

                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={analyzeSkin} 
                    disabled={!selectedFile || isAnalyzing}
                    variant="menstruation"
                    size="lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Analyzing Cycle Impact...
                      </>
                    ) : (
                      <>
                        <Heart className="w-4 h-4" />
                        Analyze Menstrual Skin
                      </>
                    )}
                  </Button>
                  
                  {selectedFile && (
                    <Button variant="outline" onClick={resetAnalysis} size="lg">
                      Reset
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {result && (
            <div className="space-y-6">
              <Card className="border-menstruation/20 bg-menstruation-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-menstruation">
                    <CheckCircle className="w-5 h-5" />
                    <span>Menstrual Cycle Analysis Result</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-menstruation">{result.condition}</h3>
                      <p className="text-sm text-muted-foreground">
                        Confidence: {result.confidence}%
                      </p>
                    </div>
                    <p className="text-foreground">{result.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-menstruation/10 p-3 rounded-lg">
                        <p className="text-sm font-medium text-menstruation mb-1">Cycle Phase:</p>
                        <p className="text-sm text-menstruation-foreground">{result.cyclePhase}</p>
                      </div>
                      <div className="bg-menstruation/10 p-3 rounded-lg">
                        <p className="text-sm font-medium text-menstruation mb-1">Hormone Impact:</p>
                        <p className="text-sm text-menstruation-foreground">{result.hormoneInfo}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-menstruation">
                      <Calendar className="w-5 h-5" />
                      <span>Cycle-Based Care Tips</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.cycleCare.map((tip, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-menstruation rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-menstruation">
                      <Heart className="w-5 h-5" />
                      <span>Helpful Supplements</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.supplements.map((supplement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-menstruation rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{supplement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-amber-200 bg-amber-50">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-amber-800 mb-1">Cycle Tracking Tip</p>
                      <p className="text-amber-700">
                        Consider tracking your skin changes alongside your menstrual cycle to identify patterns. 
                        This can help you anticipate and prepare for hormonal skin changes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 justify-center">
                <Button onClick={resetAnalysis} variant="outline" size="lg">
                  <Upload className="w-4 h-4" />
                  Analyze Another Image
                </Button>
                <Button asChild size="lg">
                  <a href="/">
                    <Home className="w-4 h-4" />
                    Back to Home
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menstruation;