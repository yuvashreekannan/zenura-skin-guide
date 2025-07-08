import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload, Baby, Loader2, AlertCircle, CheckCircle, Home, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import pregnancyPanel from "@/assets/pregnancy-panel.jpg";

interface PregnancyDiagnosisResult {
  condition: string;
  confidence: number;
  description: string;
  trimesterInfo: string;
  safeRemedies: string[];
  avoidDuring: string[];
}

const Pregnancy = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<PregnancyDiagnosisResult | null>(null);
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
      const mockResults: PregnancyDiagnosisResult[] = [
        {
          condition: "Melasma (Pregnancy Mask)",
          confidence: 89,
          description: "A common skin condition during pregnancy causing dark patches on the face due to hormonal changes.",
          trimesterInfo: "Most common in 2nd and 3rd trimester. Often improves after delivery but may persist.",
          safeRemedies: [
            "Use broad-spectrum SPF 30+ sunscreen daily",
            "Wear wide-brimmed hats when outdoors",
            "Apply vitamin C serum (pregnancy-safe formulation)",
            "Use gentle, fragrance-free moisturizers",
            "Consider makeup for coverage if desired"
          ],
          avoidDuring: [
            "Hydroquinone-based products",
            "Retinoids and retinol",
            "Chemical peels",
            "Excessive sun exposure"
          ]
        },
        {
          condition: "Pregnancy Acne",
          confidence: 85,
          description: "Hormonal acne that can occur during pregnancy due to increased androgen levels.",
          trimesterInfo: "Often appears in 1st trimester, may improve in 2nd and 3rd trimester.",
          safeRemedies: [
            "Gentle cleansing with pregnancy-safe salicylic acid (low concentration)",
            "Apply benzoyl peroxide spot treatments (2.5%)",
            "Use oil-free, non-comedogenic moisturizers",
            "Apply clay masks once weekly",
            "Maintain clean pillowcases and phone screens"
          ],
          avoidDuring: [
            "Oral retinoids (isotretinoin)",
            "Topical retinoids",
            "High-dose salicylic acid",
            "Tetracycline antibiotics"
          ]
        }
      ];

      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setResult(randomResult);
      setIsAnalyzing(false);
      
      toast({
        title: "Pregnancy analysis complete",
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
                <Baby className="w-8 h-8 text-pregnancy" />
                <h1 className="text-4xl font-bold text-pregnancy">Pregnancy Skin Care</h1>
              </div>
              <p className="text-xl text-muted-foreground mb-6">
                Specialized AI analysis for pregnancy-related skin conditions with safe, 
                pregnancy-appropriate recommendations.
              </p>
              <div className="bg-pregnancy-soft p-4 rounded-lg border border-pregnancy/20">
                <p className="text-sm text-pregnancy-foreground">
                  <Heart className="w-4 h-4 inline mr-2" />
                  All recommendations are reviewed for safety during pregnancy and breastfeeding.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={pregnancyPanel} 
                alt="Pregnancy skin care"
                className="rounded-lg shadow-medium w-full"
              />
            </div>
          </div>

          {!result && (
            <Card className="mb-8 border-pregnancy/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-pregnancy">
                  <Upload className="w-5 h-5" />
                  <span>Upload Skin Image for Pregnancy Analysis</span>
                </CardTitle>
                <CardDescription>
                  Our AI specializes in pregnancy-related skin conditions like melasma, PUPPP, and hormonal acne
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-pregnancy/30 bg-pregnancy-soft rounded-lg p-8 text-center">
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
                      <Upload className="w-12 h-12 text-pregnancy mx-auto" />
                      <div>
                        <p className="text-lg font-medium text-pregnancy">Click to upload image</p>
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
                    variant="pregnancy"
                    size="lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Analyzing for Pregnancy...
                      </>
                    ) : (
                      <>
                        <Baby className="w-4 h-4" />
                        Analyze Pregnancy Skin
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
              <Card className="border-pregnancy/20 bg-pregnancy-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-pregnancy">
                    <CheckCircle className="w-5 h-5" />
                    <span>Pregnancy Diagnosis Result</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-pregnancy">{result.condition}</h3>
                      <p className="text-sm text-muted-foreground">
                        Confidence: {result.confidence}%
                      </p>
                    </div>
                    <p className="text-foreground">{result.description}</p>
                    <div className="bg-pregnancy/10 p-3 rounded-lg">
                      <p className="text-sm font-medium text-pregnancy mb-1">Pregnancy Information:</p>
                      <p className="text-sm text-pregnancy-foreground">{result.trimesterInfo}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-emerald-200 bg-emerald-50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-emerald-700">
                      <CheckCircle className="w-5 h-5" />
                      <span>Safe During Pregnancy</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.safeRemedies.map((remedy, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-emerald-800">{remedy}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-red-700">
                      <AlertCircle className="w-5 h-5" />
                      <span>Avoid During Pregnancy</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.avoidDuring.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-red-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-pregnancy/20 bg-pregnancy/5">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-pregnancy flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-pregnancy mb-1">Pregnancy Safety Note</p>
                      <p className="text-muted-foreground">
                        Always consult your healthcare provider or dermatologist before starting any new skincare treatments during pregnancy or while breastfeeding. 
                        Every pregnancy is unique, and professional guidance is recommended.
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

export default Pregnancy;