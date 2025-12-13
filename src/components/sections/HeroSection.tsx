import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scan, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-soil.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Farmer holding rich fertile soil in farmland"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-6 shadow-lg">
              AI-Powered Agricultural Technology
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-tight mb-6"
          >
            Smarter Farming Starts with{" "}
            <span className="text-accent">Healthier Soil</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-background/90 mb-8 leading-relaxed max-w-2xl"
          >
            Scan your soil with your smartphone and get instant AI-powered
            fertility insights. Get personalized fertilizer recommendations to
            boost your crop yield while protecting the environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="accent" size="xl">
              <Scan className="mr-2 h-5 w-5" />
              Scan Your Soil
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="border-2 border-background/40 bg-background/10 text-background hover:bg-background/20 backdrop-blur-sm"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { number: "10K+", label: "Farmers Helped" },
              { number: "95%", label: "Accuracy Rate" },
              { number: "30%", label: "Cost Savings" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent font-display">
                  {stat.number}
                </div>
                <div className="text-sm text-background/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-background/80 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
