import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Coins, Leaf, BarChart3 } from "lucide-react";

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Crop Yield",
      stat: "25%",
      statLabel: "Average Increase",
      description:
        "Farmers using our system report significantly higher crop yields through optimized soil management and precise fertilization.",
    },
    {
      icon: Coins,
      title: "Reduced Costs",
      stat: "30%",
      statLabel: "Cost Savings",
      description:
        "Save money by using only the fertilizers your soil actually needs. No more guesswork or wasteful over-application.",
    },
    {
      icon: Leaf,
      title: "Environmental Protection",
      stat: "40%",
      statLabel: "Less Runoff",
      description:
        "Reduce chemical runoff and soil pollution. Protect local water sources and contribute to a healthier ecosystem.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      stat: "100%",
      statLabel: "Informed Choices",
      description:
        "Make every farming decision based on real data. Track your soil health over time and see continuous improvement.",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-hero text-primary-foreground" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-4 border border-primary-foreground/20">
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Benefits That <span className="text-accent">Matter</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Our AI-powered solution delivers tangible improvements to your farming operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="h-full bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-accent flex items-center justify-center shadow-lg">
                    <benefit.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-display font-bold text-accent">
                        {benefit.stat}
                      </span>
                      <span className="text-sm text-primary-foreground/70">
                        {benefit.statLabel}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-primary-foreground/70 leading-relaxed">
                      {benefit.description}
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

export default BenefitsSection;
