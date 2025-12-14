import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Front Office Executive",
    company: "The St. Regis Goa Resort",
    period: "Aug 2025 – Present",
    points: [
      "Managed check-ins, check-outs, and billing for Bonvoy elite members and VIP guests",
      "Coordinated across departments to deliver seamless guest experiences and service recovery",
      "Consistently maintained high Guest Satisfaction Scores and positive guest feedback",
    ],
  },
  {
    title: "Butler Executive",
    company: "The St. Regis Goa Resort",
    period: "Mar 2025 – Jul 2025",
    points: [
      "Led butler team ensuring St. Regis signature rituals and luxury service standards",
      "Managed VIP Manor guests with personalized itineraries and discreet service",
      "Trained team on silver service, garment care, and guest preference management",
    ],
  },
  {
    title: "Butler",
    company: "The St. Regis Goa Resort",
    period: "Feb 2024 – Feb 2025",
    points: [
      "Delivered signature St. Regis Butler Service including unpacking, garment care, and itinerary planning",
      "Anticipated guest needs through preference tracking for proactive, personalized service",
      "Maintained Forbes and Marriott LQA grooming and service standards",
    ],
  },
  {
    title: "Butler Development Programme",
    company: "The Leela Kovalam, A Raviz Hotel",
    period: "Sep 2022 – Oct 2023",
    points: [
      "Managed 64 club rooms with focus on personalized guest experiences and leisure itineraries",
      "Executed luxury in-room dining, turndown services, and exclusive amenities",
      "Developed strong guest-handling and cultural sensitivity skills",
    ],
  },
  {
    title: "Work-Integrated Training",
    company: "The St. Regis Mumbai",
    period: "Sep 2019 – Jul 2022",
    points: [
      "Rotated through finance, sales, and marketing departments",
      "Built foundation in luxury hospitality standards and guest engagement",
      "Recognized for discipline, quick learning, and communication skills",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-eclipse-light/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Career Journey</p>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-abyss via-abyss-light to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={`${exp.title}-${exp.company}`}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-abyss rounded-full border-2 border-secondary transform md:-translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                <div className="card-elegant">
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                    <div className="w-10 h-10 bg-gradient-abyss rounded-lg flex items-center justify-center">
                      <Briefcase size={18} className="text-secondary" />
                    </div>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>
                  <h3 className="font-display text-2xl text-secondary mb-1">{exp.title}</h3>
                  <p className="text-muted-foreground mb-4">{exp.company}</p>
                  <ul className={`space-y-2 ${index % 2 === 0 ? "" : "md:text-left"}`}>
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
