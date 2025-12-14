const skillCategories = [
  {
    title: "Butler Services",
    skills: [
      "Packing/Unpacking",
      "Garment Care & Steaming",
      "St. Regis Signature Rituals",
      "Silver Service",
      "Private Dining Setup",
    ],
  },
  {
    title: "Guest Relations",
    skills: [
      "VIP & VVIP Handling",
      "Guest Profiling",
      "Service Recovery",
      "Personalization",
      "Cultural Sensitivity",
    ],
  },
  {
    title: "Operations",
    skills: [
      "Front Office Operations",
      "Cross-department Coordination",
      "Room Allocations & Billing",
      "F&B In-Room Dining",
      "Time & Task Management",
    ],
  },
  {
    title: "Excellence",
    skills: [
      "LQA Standards",
      "Forbes Service Standards",
      "Team Training & Leadership",
      "Upselling Techniques",
      "Complaint Handling",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-subtitle mb-4">Expertise</p>
          <h2 className="section-title">Professional Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="card-elegant">
              <h3 className="font-display text-xl text-secondary mb-6 pb-4 border-b border-border">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-muted-foreground text-sm group"
                    style={{ animationDelay: `${(catIndex * 5 + skillIndex) * 0.05}s` }}
                  >
                    <span className="w-2 h-2 bg-abyss rounded-full group-hover:bg-abyss-light transition-colors" />
                    <span className="group-hover:text-secondary transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
