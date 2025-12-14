import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 88823 73956",
    href: "tel:+918882373956",
  },
  {
    icon: Mail,
    label: "Email",
    value: "melanta08@gmail.com",
    href: "mailto:melanta08@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/rohan-melanta",
    href: "https://linkedin.com/in/rohan-melanta",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-abyss/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-subtitle mb-4">Get In Touch</p>
          <h2 className="section-title mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Seeking opportunities in luxury hospitality where I can contribute my strong front office 
            service foundation, guest personalization expertise, and team-training capabilities to 
            elevate the guest experience.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactLinks.map((link) => (
              <div key={link.label} className="card-elegant text-center group">
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    <div className="w-12 h-12 bg-gradient-abyss rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <link.icon size={24} className="text-secondary" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{link.label}</p>
                    <p className="text-secondary font-medium flex items-center justify-center gap-1">
                      {link.value}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </a>
                ) : (
                  <div>
                    <div className="w-12 h-12 bg-gradient-abyss rounded-lg flex items-center justify-center mx-auto mb-4">
                      <link.icon size={24} className="text-secondary" />
                    </div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{link.label}</p>
                    <p className="text-secondary font-medium">{link.value}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
