import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Lightbulb, Heart } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: AlertTriangle,
      title: "The Problem",
      description:
        "Traditional soil testing is expensive, slow, and often inaccessible to farmers in remote areas. Many farmers use fertilizers without proper soil analysis, leading to waste and environmental damage.",
      color: "secondary",
    },
    {
      icon: Lightbulb,
      title: "Our Solution",
      description:
        "Our AI-powered soil scanner uses smartphone images to analyze soil fertility instantly. Combined with weather and crop data, it provides personalized recommendations in seconds, not weeks.",
      color: "primary",
    },
    {
      icon: Heart,
      title: "Our Mission",
      description:
        "We believe every farmer deserves access to smart farming tools. Our goal is to make soil analysis affordable, fast, and easy for farmers everywhere, promoting sustainable agriculture.",
      color: "accent",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About the Project
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Revolutionizing Soil Analysis with{" "}
            <span className="text-gradient-primary">Artificial Intelligence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Making soil testing accessible, affordable, and instant for every farmer around the world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 border border-border hover:-translate-y-1">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    card.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : card.color === "secondary"
                      ? "bg-secondary/10 text-secondary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  <card.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
