import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload, Camera, Loader2, AlertCircle, CheckCircle, Home, Lightbulb } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DiagnosisResult {
  condition: string;
  confidence: number;
  description: string;
  causes: string[];
  homeRemedies: string[];
}

const Diagnosis = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
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
    
    // Simulate AI analysis (in real app, this would call your Vision Transformer API)
    setTimeout(() => {
      const mockResults: DiagnosisResult[] = [
        {
          condition: "Acne Vulgaris",
          confidence: 87,
          description: "A common skin condition that occurs when hair follicles become plugged with oil and dead skin cells.",
          causes: [
            "Hormonal changes during puberty or menstruation",
            "Excess oil production",
            "Bacteria (Propionibacterium acnes)",
            "Genetics"
          ],
          homeRemedies: [
            "Gentle cleansing twice daily with salicylic acid",
            "Apply tea tree oil (diluted) as spot treatment",
            "Use zinc supplements (consult healthcare provider)",
            "Maintain a low-glycemic diet",
            "Apply honey mask twice weekly"
          ]
        },
        {
          condition: "Eczema (Atopic Dermatitis)",
          confidence: 82,
          description: "A chronic skin condition causing inflammation, redness, and itching.",
          causes: [
            "Genetic predisposition",
            "Environmental allergens",
            "Dry skin",
            "Stress",
            "Weather changes"
          ],
          homeRemedies: [
            "Apply fragrance-free moisturizer immediately after bathing",
            "Use lukewarm water for baths and showers",
            "Apply oatmeal baths for soothing relief",
            "Use gentle, fragrance-free soaps",
            "Consider coconut oil as natural moisturizer"
          ]
        }
      ];

      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setResult(randomResult);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis complete",
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">AI Skin Diagnosis</h1>
            <p className="text-xl text-muted-foreground">
              Upload a clear photo of your skin condition for AI-powered analysis
            </p>
          </div>

          {!result && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Camera className="w-5 h-5" />
                  <span>Upload Skin Image</span>
                </CardTitle>
                <CardDescription>
                  For best results, ensure good lighting and the affected area is clearly visible
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
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
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto" />
                      <div>
                        <p className="text-lg font-medium">Click to upload image</p>
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
                    size="lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Camera className="w-4 h-4" />
                        Analyze Skin
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
              <Card className="border-primary/20 bg-primary-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-primary">
                    <CheckCircle className="w-5 h-5" />
                    <span>Diagnosis Result</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{result.condition}</h3>
                      <p className="text-sm text-muted-foreground">
                        Confidence: {result.confidence}%
                      </p>
                    </div>
                    <p className="text-foreground">{result.description}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertCircle className="w-5 h-5 text-secondary" />
                      <span>Possible Causes</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.causes.map((cause, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      <span>Home Remedies</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.homeRemedies.map((remedy, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm">{remedy}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-destructive mb-1">Important Disclaimer</p>
                      <p className="text-muted-foreground">
                        This AI analysis is for informational purposes only and should not replace professional medical advice. 
                        Please consult a dermatologist for proper diagnosis and treatment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 justify-center">
                <Button onClick={resetAnalysis} variant="outline" size="lg">
                  <Camera className="w-4 h-4" />
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

export default Diagnosis;