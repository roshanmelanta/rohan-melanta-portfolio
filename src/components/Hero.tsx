import { ArrowDown, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import profileImage from "@/assets/rohan-profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-eclipse" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-abyss/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-abyss/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative opacity-0 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-abyss glow-abyss">
              <img
                src={profileImage}
                alt="Rohan Melanta"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-abyss rounded-full flex items-center justify-center">
              <span className="font-display text-2xl text-secondary">5+</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <p
              className="section-subtitle mb-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Luxury Hospitality Professional
            </p>
            <h1
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-secondary mb-6 opacity-0 animate-fade-in tracking-tight"
              style={{ animationDelay: "0.5s" }}
            >
              Rohan<br />
              <span className="text-gradient">Melanta</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              Front Office & Butler Operations<br />
              <span className="text-primary">Guest Experience Specialist</span>
            </p>

            {/* Contact Info */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
              <a
                href="tel:+918882373956"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm">+91 88823 73956</span>
              </a>
              <a
                href="mailto:melanta08@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">melanta08@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/rohan-melanta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Linkedin size={16} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span className="text-sm">Mumbai</span>
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-secondary transition-colors opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
