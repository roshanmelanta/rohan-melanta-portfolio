import { Award, Star, Users } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Featured Professional",
    description: "Soul of Hospitality Magazine - 'Guardians of Guest Joy'",
  },
  {
    icon: Star,
    title: "Multiple Awards",
    description: "Host of the Month at The Leela & The St. Regis",
  },
  {
    icon: Users,
    title: "VIP Expertise",
    description: "Elite Bonvoy members, VIP & VVIP guest handling",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="section-subtitle mb-4">About Me</p>
          <h2 className="section-title mb-8">
            Crafting Exceptional<br />Guest Experiences
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Driven and detail-oriented luxury hospitality professional with 5+ years of experience
              across India's most prestigious brands including{" "}
              <span className="text-secondary">The St. Regis Mumbai</span>,{" "}
              <span className="text-secondary">The Leela Kovalam</span>, and{" "}
              <span className="text-secondary">The St. Regis Goa Resort</span>.
            </p>
            <p>
              Progressively promoted from OJT to Butler, Butler Executive, and now Front Office Executive,
              consistently recognized for exceptional guest service, butler etiquette, operational excellence,
              and leadership potential.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-elegant group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-abyss rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={24} className="text-secondary" />
                </div>
                <h3 className="font-display text-xl text-secondary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
