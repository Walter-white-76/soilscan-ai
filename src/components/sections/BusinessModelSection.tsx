import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const BusinessModelSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "",
      description: "Perfect for small farms getting started",
      features: [
        "5 soil scans per month",
        "Basic fertility reports",
        "Mobile app access",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹499",
      period: "/month",
      description: "Ideal for growing farms",
      features: [
        "Unlimited soil scans",
        "Detailed fertility analysis",
        "Fertilizer recommendations",
        "Weather integration",
        "Historical tracking",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large operations & partners",
      features: [
        "Everything in Pro",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
        "Training & onboarding",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

  const partnerships = [
    "Agricultural Equipment Companies",
    "Government Agricultural Bodies",
    "NGOs & Development Organizations",
    "Seed & Fertilizer Manufacturers",
  ];

  return (
    <section id="pricing" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Affordable Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Simple, <span className="text-gradient-accent">Fair Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose a plan that fits your farm's needs. Start free and upgrade as you grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}
              <div
                className={`h-full rounded-2xl p-8 border-2 transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground border-primary shadow-glow"
                    : "bg-card text-foreground border-border hover:border-primary/30 shadow-card"
                }`}
              >
                <h3 className="text-xl font-display font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-display font-bold">{plan.price}</span>
                  <span
                    className={plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          plan.popular ? "bg-accent" : "bg-primary"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.popular ? "text-accent-foreground" : "text-primary-foreground"
                          }`}
                        />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "accent" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-muted/50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold text-foreground mb-3">
              Partnership Opportunities
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with organizations committed to improving agriculture and supporting farmers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {partnerships.map((partner, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-background rounded-full text-foreground font-medium shadow-soft border border-border"
              >
                {partner}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
