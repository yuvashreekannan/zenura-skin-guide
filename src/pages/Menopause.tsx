import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload, Flower2, Loader2, AlertCircle, CheckCircle, Home, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import menopausePanel from "@/assets/menopause-panel.jpg";

interface MenopauseDiagnosisResult {
  condition: string;
  confidence: number;
  description: string;
  ageGroup: string;
  hormoneChanges: string;
  matureCareTips: string[];
  antiAgingApproach: string[];
}

const Menopause = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<MenopauseDiagnosisResult | null>(null);
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
      const mockResults: MenopauseDiagnosisResult[] = [
        {
          condition: "Menopausal Dry Skin",
          confidence: 91,
          description: "Decreased oil production and collagen loss due to declining estrogen levels, resulting in dry, thin skin.",
          ageGroup: "Post-menopausal (typically 45+)",
          hormoneChanges: "Reduced estrogen leads to decreased sebum production and collagen synthesis.",
          matureCareTips: [
            "Use rich, ceramide-containing moisturizers twice daily",
            "Apply hyaluronic acid serums for hydration",
            "Use gentle, cream-based cleansers instead of foam",
            "Consider face oils for additional nourishment",
            "Use humidifier in bedroom during sleep"
          ],
          antiAgingApproach: [
            "Retinol products (start slowly) to boost collagen",
            "Vitamin C serum for antioxidant protection",
            "Peptide creams to support skin structure",
            "Regular gentle exfoliation to improve texture",
            "Professional treatments like chemical peels"
          ]
        },
        {
          condition: "Age Spots (Solar Lentigines)",
          confidence: 87,
          description: "Dark spots that develop from years of sun exposure, more noticeable as skin repairs itself less efficiently with age.",
          ageGroup: "Mature skin (typically 50+)",
          hormoneChanges: "Lower estrogen reduces skin's ability to repair UV damage, making existing spots more prominent.",
          matureCareTips: [
            "Use broad-spectrum SPF 30+ daily, even indoors",
            "Apply vitamin C serum in the morning",
            "Use niacinamide to even skin tone",
            "Gentle AHA products for mild exfoliation",
            "Wear protective clothing and wide-brimmed hats"
          ],
          antiAgingApproach: [
            "Professional IPL or laser treatments for spot removal",
            "Prescription tretinoin for accelerated cell turnover",
            "Chemical peels for overall skin renewal",
            "Hydroquinone spot treatments (with dermatologist guidance)",
            "Regular dermatologist check-ups for skin cancer screening"
          ]
        }
      ];

      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setResult(randomResult);
      setIsAnalyzing(false);
      
      toast({
        title: "Menopause analysis complete",
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
                <Flower2 className="w-8 h-8 text-menopause" />
                <h1 className="text-4xl font-bold text-menopause">Menopause Skin Support</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-6">
                Specialized care for mature skin addressing the unique challenges of hormonal changes 
                during menopause and beyond.
              </p>
              <div className="bg-menopause-soft p-4 rounded-lg border border-menopause/20">
                <p className="text-sm text-menopause-foreground">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Embrace your skin's wisdom with age-appropriate, effective treatments.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={menopausePanel} 
                alt="Menopause skin care"
                className="rounded-lg shadow-medium w-full"
              />
            </div>
          </div>

          {!result && (
            <Card className="mb-8 border-menopause/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-menopause">
                  <Upload className="w-5 h-5" />
                  <span>Upload Image for Menopause Skin Analysis</span>
                </CardTitle>
                <CardDescription>
                  Focused analysis for mature skin concerns including dryness, age spots, and elasticity changes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-menopause/30 bg-menopause-soft rounded-lg p-8 text-center">
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
                      <Upload className="w-12 h-12 text-menopause mx-auto" />
                      <div>
                        <p className="text-lg font-medium text-menopause">Click to upload image</p>
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
                    variant="menopause"
                    size="lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Analyzing Mature Skin...
                      </>
                    ) : (
                      <>
                        <Flower2 className="w-4 h-4" />
                        Analyze Menopause Skin
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
              <Card className="border-menopause/20 bg-menopause-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-menopause">
                    <CheckCircle className="w-5 h-5" />
                    <span>Menopause Skin Analysis Result</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-menopause">{result.condition}</h3>
                      <p className="text-sm text-muted-foreground">
                        Confidence: {result.confidence}%
                      </p>
                    </div>
                    <p className="text-foreground">{result.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-menopause/10 p-3 rounded-lg">
                        <p className="text-sm font-medium text-menopause mb-1">Age Group:</p>
                        <p className="text-sm text-menopause-foreground">{result.ageGroup}</p>
                      </div>
                      <div className="bg-menopause/10 p-3 rounded-lg">
                        <p className="text-sm font-medium text-menopause mb-1">Hormonal Changes:</p>
                        <p className="text-sm text-menopause-foreground">{result.hormoneChanges}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-menopause">
                      <Flower2 className="w-5 h-5" />
                      <span>Mature Skin Care</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.matureCareTips.map((tip, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-menopause rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-menopause">
                      <Sparkles className="w-5 h-5" />
                      <span>Advanced Anti-Aging</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.antiAgingApproach.map((approach, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-menopause rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{approach}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-purple-800 mb-1">Celebrating Mature Skin</p>
                      <p className="text-purple-700">
                        Your skin tells the story of your life experiences. With the right care and treatments, 
                        mature skin can be healthy, radiant, and beautiful at any age.
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

export default Menopause;