const resumeData = {
  summaryKey: "resume.summary",
  skills: {
    languages: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "C#",
      "C",
      "SQL",
      "HTML",
      "CSS",
      "PowerShell",
    ],
    frameworks: [
      "React",
      "Angular",
      "AngularJS",
      "Node.js",
      "NestJS",
      "Spring",
      "Hibernate",
      ".NET Entity Framework",
    ],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
    devops: [
      "Azure DevOps",
      "Git",
      "Linux",
      "Windows Server",
      "IIS",
      "Docker",
      "CI/CD",
    ],
    other: ["Scrum/Agile", "OOP", "Design Patterns", "System Administration"],
  },
  experience: [
    {
      companyKey: "resume.experience.onecity.company",
      roleKey: "resume.experience.onecity.role",
      periodKey: "resume.experience.onecity.period",
      descriptionKeys: [
        "resume.experience.onecity.0",
        "resume.experience.onecity.1",
        "resume.experience.onecity.2",
        "resume.experience.onecity.3",
        "resume.experience.onecity.4",
        "resume.experience.onecity.5",
        "resume.experience.onecity.6",
      ],
    },
    {
      companyKey: "resume.experience.rafael.company",
      roleKey: "resume.experience.rafael.role",
      periodKey: "resume.experience.rafael.period",
      descriptionKeys: [
        "resume.experience.rafael.0",
        "resume.experience.rafael.1",
        "resume.experience.rafael.2",
        "resume.experience.rafael.3",
        "resume.experience.rafael.4",
        "resume.experience.rafael.5",
      ],
    },
    {
      companyKey: "resume.experience.sigma.company",
      roleKey: "resume.experience.sigma.role",
      periodKey: "resume.experience.sigma.period",
      descriptionKeys: [
        "resume.experience.sigma.0",
        "resume.experience.sigma.1",
        "resume.experience.sigma.2",
      ],
    },
    {
      companyKey: "resume.experience.rafael2.company",
      roleKey: "resume.experience.rafael2.role",
      periodKey: "resume.experience.rafael2.period",
      descriptionKeys: ["resume.experience.rafael2.0"],
    },
  ],
  projects: [
    {
      titleKey: "resume.projects.0.title",
      descriptionKey: "resume.projects.0.desc",
    },
  ],
  education: [
    {
      degreeKey: "resume.edu.bsc.degree",
      institutionKey: "resume.edu.bsc.institution",
      periodKey: "resume.edu.bsc.period",
    },
    {
      degreeKey: "resume.edu.fullstack.degree",
      institutionKey: "resume.edu.fullstack.institution",
      periodKey: "resume.edu.fullstack.period",
    },
    {
      degreeKey: "resume.edu.preacad.degree",
      institutionKey: "resume.edu.preacad.institution",
      periodKey: "resume.edu.preacad.period",
    },
    {
      degreeKey: "resume.edu.engineer.degree",
      institutionKey: "resume.edu.engineer.institution",
      periodKey: "resume.edu.engineer.period",
    },
    {
      degreeKey: "resume.edu.scrum.degree",
      institutionKey: "resume.edu.scrum.institution",
      periodKey: "resume.edu.scrum.period",
    },
  ],
  languages: [
    {
      labelKey: "resume.languages.hebrew",
      levelKey: "resume.languages.native",
    },
    {
      labelKey: "resume.languages.english",
      levelKey: "resume.languages.fluent",
    },
  ],
  skillsSoft: [
    "resume.soft.rapidLearning",
    "resume.soft.multitasking",
    "resume.soft.leadership",
    "resume.soft.adaptability",
    "resume.soft.communication",
  ],
};
export default resumeData;
