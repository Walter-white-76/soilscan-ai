import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Cpu, Cloud, FileText, ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Camera,
      step: "01",
      title: "Capture Soil Image",
      description:
        "Use your smartphone or a simple scanner to take a picture of your soil sample. It's as easy as taking a photo!",
    },
    {
      icon: Cpu,
      step: "02",
      title: "AI Analysis",
      description:
        "Our advanced AI instantly analyzes the soil image, identifying key nutrients, pH levels, and fertility indicators.",
    },
    {
      icon: Cloud,
      step: "03",
      title: "Weather & Crop Data",
      description:
        "The system combines soil analysis with local weather patterns and your specific crop requirements.",
    },
    {
      icon: FileText,
      step: "04",
      title: "Get Recommendations",
      description:
        "Receive personalized fertilizer recommendations and soil health insights delivered straight to your phone.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/50" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            How It <span className="text-gradient-accent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From soil photo to actionable insights in just four simple steps.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative z-10"
              >
                <div className="bg-background rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border text-center h-full">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold font-display mb-6 shadow-lg">
                    {item.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>

                  <h3 className="text-lg font-display font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
