import { Linkedin, Mail, Phone, MapPin } from "lucide-react";
import profileImage from "@/assets/rohan-profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-eclipse" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-abyss/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-abyss/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
          {/* Profile Image */}
          <div className="relative opacity-0 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-abyss glow-abyss">
              <img
                src={profileImage}
                alt="Rohan Melanta"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-2 sm:-bottom-2 sm:-right-2 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-abyss rounded-full flex flex-col items-center justify-center text-center p-3">
              <span className="font-display text-xl sm:text-2xl text-secondary leading-none">5+</span>
              <span className="text-[9px] sm:text-[10px] text-secondary/80 uppercase tracking-wide leading-tight mt-1">years of<br />experience</span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <p
              className="section-subtitle mb-4 opacity-0 animate-fade-in text-xs sm:text-sm"
              style={{ animationDelay: "0.3s" }}
            >
              Luxury Hospitality Professional
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-secondary mb-4 sm:mb-6 opacity-0 animate-fade-in tracking-tight"
              style={{ animationDelay: "0.5s" }}
            >
              Rohan<br />
              <span className="text-gradient">Melanta</span>
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-light max-w-xl opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              Front Office & Butler Operations<br />
              <span className="text-primary">Guest Experience Specialist</span>
            </p>

            {/* Contact Info */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.9s" }}
            >
              <a
                href="tel:+918882373956"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Phone size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">+91 88823 73956</span>
              </a>
              <a
                href="mailto:rmelanta08@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Mail size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">rmelanta08@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rohan-melanta-1b7295170/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors"
              >
                <Linkedin size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">LinkedIn</span>
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={14} className="sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Mumbai</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
