import { Leaf, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Download App", href: "#" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Sustainability", href: "#sustainability" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
    resources: [
      { label: "Help Center", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Community", href: "#" },
      { label: "API Docs", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-lg font-display font-bold text-background">
                SoilScan AI
              </span>
            </a>
            <p className="text-background/70 text-sm mb-6 max-w-xs">
              Making farming smarter and more sustainable through AI-powered
              soil analysis technology.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:info@soilscan.ai"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@soilscan.ai
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-background/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                Agricultural Innovation Hub
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-background mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60 text-center md:text-left">
            © {currentYear} SoilScan AI. All rights reserved. Making farming smarter and more sustainable.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
