import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const SoilResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { crop, soilImage } = location.state || {};

  const nitrogenLevels = [
    { label: "Low", value: 25, color: "bg-red-400" },
    { label: "Medium", value: 60, color: "bg-yellow-400" },
    { label: "High", value: 85, color: "bg-primary" },
  ];

  const soilMetrics = [
    { name: "Nitrogen (N)", level: 65, status: "medium" },
    { name: "Phosphorus (P)", level: 45, status: "low" },
    { name: "Potassium (K)", level: 78, status: "good" },
    { name: "pH Level", level: 70, status: "good" },
    { name: "Organic Matter", level: 55, status: "medium" },
  ];

  const recommendations = [
    "Apply organic compost and mulch to improve soil structure.",
    "Add nitrogen-rich fertilizers to boost plant growth.",
    "Retest soil in 90 days to monitor improvements.",
    "Consider cover crops during off-season.",
  ];

  const handleSaveReport = () => {
    toast({
      title: "Report Saved",
      description: "Your soil analysis report has been saved successfully.",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share Report",
      description: "Sharing options will be available soon.",
    });
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-primary-foreground">
          Soil Analysis Results
        </h1>
        <button
          onClick={handleShare}
          className="p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
        >
          <Share2 className="w-6 h-6" />
        </button>
      </header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background rounded-t-3xl min-h-[calc(100vh-80px)] p-6"
      >
        {/* Soil Health Summary */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-foreground mb-2 text-center">
            SOIL ANALYSIS & RECOMMENDATIONS
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-lg font-semibold text-foreground">Soil Health:</span>
            <span className="text-lg font-bold text-primary">Good</span>
          </div>

          {/* Health Bar Chart */}
          <div className="flex items-end justify-center gap-2 h-24 mb-4">
            {[40, 70, 85, 60, 75, 90, 55, 80].map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-6 bg-primary rounded-t-sm"
              />
            ))}
          </div>

          {/* Nitrogen Level Indicators */}
          <div className="flex items-center justify-between px-4 mb-6">
            {nitrogenLevels.map((level) => (
              <div key={level.label} className="flex flex-col items-center">
                <span className="text-xs text-muted-foreground mb-1">{level.label}</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map((dot) => (
                    <div
                      key={dot}
                      className={`w-3 h-3 rounded-full ${
                        dot <= Math.ceil(level.value / 33)
                          ? level.color
                          : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Detailed Analysis
          </h3>
          <div className="space-y-4">
            {soilMetrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <Leaf className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-foreground">
                      {metric.name}
                    </span>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        metric.status === "good"
                          ? "bg-primary/20 text-primary"
                          : metric.status === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {metric.status}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.level}%` }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className={`h-full rounded-full ${
                        metric.status === "good"
                          ? "bg-primary"
                          : metric.status === "medium"
                          ? "bg-yellow-400"
                          : "bg-red-400"
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-foreground mb-4">
            RECOMMENDATIONS:
          </h3>
          <ul className="space-y-3">
            {recommendations.map((rec, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{rec}</p>
              </motion.li>
            ))}
          </ul>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="mt-4 text-sm font-medium text-primary"
          >
            Expected Yield Increase: 10%
          </motion.p>
        </div>

        {/* Save Report Button */}
        <Button
          variant="default"
          size="xl"
          className="w-full py-6 text-lg font-semibold"
          onClick={handleSaveReport}
        >
          <Download className="w-5 h-5 mr-2" />
          SAVE REPORT
        </Button>
      </motion.div>
    </div>
  );
};

export default SoilResults;
