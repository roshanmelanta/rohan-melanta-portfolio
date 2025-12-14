import { GraduationCap, Lightbulb } from "lucide-react";

const education = [
  {
    degree: "MBA - Operations and Data Science",
    institution: "Narsee Monjee Institute of Management Studies",
    period: "July 2025 - July 2027",
    current: true,
  },
  {
    degree: "B.Voc in Hotel Management",
    institution: "Tata Institute of Social Science",
    period: "July 2019 - Aug 2022",
    current: false,
  },
];

const projects = [
  {
    title: "Deep Dive – Core Committee Member",
    description: "AI support integration into daily luxury operations and guest management workflows. Introduced platforms for guest hyper-personalization, butler allocation and creating chat agents for daily workflows.",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 lg:py-32 bg-eclipse-light/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Academic Background</p>
            <h2 className="section-title">Education & Projects</h2>
          </div>

          {/* Education */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {education.map((edu) => (
              <div key={edu.degree} className="card-elegant relative overflow-hidden group">
                {edu.current && (
                  <span className="absolute top-4 right-4 text-xs bg-gradient-abyss px-3 py-1 rounded-full text-secondary">
                    Current
                  </span>
                )}
                <div className="w-12 h-12 bg-gradient-abyss rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap size={24} className="text-secondary" />
                </div>
                <h3 className="font-display text-xl text-secondary mb-2">{edu.degree}</h3>
                <p className="text-muted-foreground mb-2">{edu.institution}</p>
                <p className="text-sm text-primary">{edu.period}</p>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-display text-2xl text-secondary mb-6 text-center">Notable Projects</h3>
            {projects.map((project) => (
              <div key={project.title} className="card-elegant">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-abyss rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-secondary mb-2">{project.title}</h4>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
