import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote:
        "This technology has changed how I farm. I used to guess how much fertilizer to use — now I know exactly what my soil needs. My costs went down and my yields went up!",
      name: "Raju Sharma",
      role: "Rice Farmer, Punjab",
      rating: 5,
    },
    {
      quote:
        "As a woman farmer with limited resources, this app has been a blessing. It's so easy to use and the recommendations are spot-on. My neighbors are now asking me to scan their fields too!",
      name: "Lakshmi Devi",
      role: "Vegetable Farmer, Karnataka",
      rating: 5,
    },
    {
      quote:
        "We've been looking for a solution that works in remote areas. This AI scanner works offline and gives us reliable results. It's exactly what small-scale farmers need.",
      name: "Ahmed Hassan",
      role: "Agricultural Extension Officer",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-muted/50" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Farmer Voices
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            What Farmers Are <span className="text-gradient-primary">Saying</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from farmers who have transformed their farming practices with our solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="h-full bg-background rounded-2xl p-8 shadow-card border border-border relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-display font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

export default TestimonialsSection;
