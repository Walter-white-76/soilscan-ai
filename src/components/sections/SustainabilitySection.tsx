import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, TreePine, Recycle, Globe } from "lucide-react";

const SustainabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const impacts = [
    {
      icon: Droplets,
      title: "Water Conservation",
      description: "Reduce water pollution from fertilizer runoff and protect local water sources.",
    },
    {
      icon: TreePine,
      title: "Soil Health",
      description: "Maintain long-term soil fertility and prevent degradation through smart management.",
    },
    {
      icon: Recycle,
      title: "Resource Efficiency",
      description: "Use only what your soil needs, reducing waste and environmental impact.",
    },
    {
      icon: Globe,
      title: "Climate Action",
      description: "Lower carbon footprint through reduced fertilizer production and application.",
    },
  ];

  return (
    <section id="sustainability" className="py-24 bg-muted/30" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-leaf-fresh/10 text-leaf-fresh text-sm font-medium mb-4">
              Environmental Impact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Farming for a{" "}
              <span className="text-gradient-primary">Sustainable Future</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our AI-powered solution isn't just about better yields — it's about
              protecting our planet. By optimizing fertilizer use, we help farmers
              reduce their environmental footprint while maintaining productive,
              healthy farms for generations to come.
            </p>

            <div className="space-y-4">
              {[
                "Reduce unnecessary chemical use by up to 40%",
                "Protect groundwater and nearby ecosystems",
                "Support sustainable agriculture practices",
                "Contribute to global food security goals",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <impact.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {impact.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
