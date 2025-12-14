import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Leaf, Droplets, Zap, Download } from "lucide-react";

const FertilizerRecommendations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCrop, soilData } = location.state || {};

  const fertilizers = [
    {
      name: "Urea (46-0-0)",
      nutrient: "Nitrogen",
      icon: Zap,
      quantity: "45",
      timing: "Apply in 2-3 split doses",
      application: "Broadcast before irrigation",
      color: "hsl(var(--primary))",
    },
    {
      name: "DAP (18-46-0)",
      nutrient: "Phosphorus",
      icon: Leaf,
      quantity: "30",
      timing: "Apply at sowing time",
      application: "Place near root zone",
      color: "hsl(142 76% 36%)",
    },
    {
      name: "MOP (0-0-60)",
      nutrient: "Potassium",
      icon: Droplets,
      quantity: "25",
      timing: "Apply before flowering",
      application: "Broadcast and incorporate",
      color: "hsl(221 83% 53%)",
    },
  ];

  const micronutrients = [
    { name: "Zinc Sulphate", quantity: "5", purpose: "Improves grain quality" },
    { name: "Borax", quantity: "2", purpose: "Enhances flowering" },
    { name: "Ferrous Sulphate", quantity: "3", purpose: "Prevents chlorosis" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-4 px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Fertilizer Recommendations</h1>
            <p className="text-sm opacity-90">
              For {selectedCrop || "Rice"} - Per Acre
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6 pb-24">
        {/* Summary Card */}
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Fertilizer Required</p>
                <p className="text-3xl font-bold text-primary">100 kg</p>
                <p className="text-xs text-muted-foreground">per acre</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Fertilizers */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Primary Fertilizers</h2>
          <div className="space-y-3">
            {fertilizers.map((fert, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    <div
                      className="w-2"
                      style={{ backgroundColor: fert.color }}
                    />
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${fert.color}20` }}
                          >
                            <fert.icon
                              className="w-5 h-5"
                              style={{ color: fert.color }}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{fert.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {fert.nutrient}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-foreground">
                            {fert.quantity}
                          </p>
                          <p className="text-xs text-muted-foreground">kg/acre</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-border/50">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="text-muted-foreground">Timing</p>
                            <p className="font-medium">{fert.timing}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Method</p>
                            <p className="font-medium">{fert.application}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Micronutrients */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Micronutrients</h2>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                {micronutrients.map((micro, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                  >
                    <div>
                      <p className="font-medium">{micro.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {micro.purpose}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{micro.quantity} kg</p>
                      <p className="text-xs text-muted-foreground">per acre</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application Schedule */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Application Schedule</h2>
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Basal Application</p>
                    <p className="text-sm text-muted-foreground">
                      DAP + 1/3 Urea + MOP at sowing
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    2
                  </div>
                  <div>
                    <p className="font-medium">First Top Dressing</p>
                    <p className="text-sm text-muted-foreground">
                      1/3 Urea at 25-30 days
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Second Top Dressing</p>
                    <p className="text-sm text-muted-foreground">
                      1/3 Urea at flowering stage
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border">
        <Button className="w-full" size="lg">
          <Download className="w-5 h-5 mr-2" />
          Download Recommendation
        </Button>
      </div>
    </div>
  );
};

export default FertilizerRecommendations;
