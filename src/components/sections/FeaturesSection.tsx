import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Zap,
  Target,
  Wifi,
  Smartphone,
  Shield,
} from "lucide-react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description:
        "Advanced machine learning models analyze soil images with over 95% accuracy, identifying nutrient levels and health indicators.",
    },
    {
      icon: Zap,
      title: "Real-Time Insights",
      description:
        "Get instant results within seconds. No more waiting weeks for lab results — make timely farming decisions.",
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description:
        "Receive customized fertilizer and treatment plans based on your specific soil, crops, and local conditions.",
    },
    {
      icon: Wifi,
      title: "Works Offline",
      description:
        "Our app works in remote areas with limited connectivity. Sync your data when you're back online.",
    },
    {
      icon: Smartphone,
      title: "Easy Mobile App",
      description:
        "Simple, farmer-friendly interface designed for users of all technical backgrounds. Available on Android and iOS.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description:
        "Your farming data stays private and secure. We never share your information with third parties.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Everything You Need for{" "}
            <span className="text-gradient-primary">Smart Farming</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed with farmers in mind, our platform offers powerful tools that are simple to use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group h-full bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
