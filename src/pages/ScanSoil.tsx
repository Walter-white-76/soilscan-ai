import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, X, Camera, Upload, Leaf, Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const crops = [
  { id: "wheat", name: "Wheat", icon: Wheat },
  { id: "corn", name: "Corn", icon: Leaf },
  { id: "soybeans", name: "Soybeans", icon: Leaf },
  { id: "rice", name: "Rice", icon: Leaf },
];

const ScanSoil = () => {
  const navigate = useNavigate();
  const [selectedCrop, setSelectedCrop] = useState("wheat");
  const [soilImage, setSoilImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSoilImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTakePhoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.setAttribute("capture", "environment");
      fileInputRef.current.click();
    }
  };

  const handleUploadFromGallery = () => {
    if (fileInputRef.current) {
      fileInputRef.current.removeAttribute("capture");
      fileInputRef.current.click();
    }
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
          Scan & Data Input
        </h1>
        <button
          onClick={() => navigate("/")}
          className="p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-background rounded-t-3xl min-h-[calc(100vh-80px)] p-6"
      >
        {/* Crop Selection */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-1">
            1. SELECT CROP:
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            {crops.find((c) => c.id === selectedCrop)?.name} (selected)
          </p>

          <div className="flex gap-3 flex-wrap">
            {crops.map((crop) => {
              const Icon = crop.icon;
              return (
                <button
                  key={crop.id}
                  onClick={() => setSelectedCrop(crop.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                    selectedCrop === crop.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{crop.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Soil Image Preview */}
        <div className="mb-6">
          <div className="aspect-[4/3] rounded-2xl border-2 border-dashed border-border bg-muted/30 overflow-hidden flex items-center justify-center">
            {soilImage ? (
              <img
                src={soilImage}
                alt="Soil sample"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center p-8">
                <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">
                  Take a photo or upload an image of your soil
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <Button
            variant="outline"
            className="flex-1 py-6"
            onClick={handleTakePhoto}
          >
            <Camera className="w-5 h-5 mr-2" />
            Take Photo
          </Button>
          <Button
            variant="outline"
            className="flex-1 py-6"
            onClick={handleUploadFromGallery}
          >
            <Upload className="w-5 h-5 mr-2" />
            Upload from Gallery
          </Button>
        </div>

        {/* Analyze Button */}
        <Button
          variant="default"
          size="xl"
          className="w-full py-6 text-lg font-semibold"
          disabled={!soilImage}
        >
          ANALYZE SOIL
        </Button>
      </motion.div>
    </div>
  );
};

export default ScanSoil;
