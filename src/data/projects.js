const projects = [
  {
    id: 1,
    nameKey: "projects.Movies.title",
    descriptionKey: "projects.Movies.description",
    featuresKeys: [
      "projects.Movies.features.0",
      "projects.Movies.features.1",
      "projects.Movies.features.2",
    ],
    tags: ["Fullstack", "React", "Node.js", "MongoDB", "JWT", "MUI"],
    github: "https://github.com/Yahav-Tzukerman/Movies-FullStack",
    demo: "https://movies-full-stack.vercel.app/",
    image: "/screenshots/movies.png",
    testAccounts: [{ role: "Admin", username: "admin", password: "admin123" }],
  },
  {
    id: 2,
    nameKey: "projects.FactoryManager.title",
    descriptionKey: "projects.FactoryManager.description",
    featuresKeys: [
      "projects.FactoryManager.features.0",
      "projects.FactoryManager.features.1",
      "projects.FactoryManager.features.2",
    ],
    tags: ["Backend", "Node.js", "Express", "MongoDB", "HTML", "CSS"],
    github: "https://github.com/Yahav-Tzukerman/FactoryManager",
    demo: "https://factorymanager-6t60.onrender.com/login.html",
    image: "/screenshots/factoryManager.png",
    testAccounts: [
      { role: "User", username: "Bret", password: "Sincere@april.biz" },
    ],
  },
  {
    id: 3,
    nameKey: "projects.NextGenerationECommerce.title",
    descriptionKey: "projects.NextGenerationECommerce.description",
    featuresKeys: [
      "projects.NextGenerationECommerce.features.0",
      "projects.NextGenerationECommerce.features.1",
      "projects.NextGenerationECommerce.features.2",
    ],
    tags: ["Frontend", "Firebase", "React", "Bootstrap"],
    github: "https://github.com/Yahav-Tzukerman/React---Final-Project",
    demo: "https://react-final-project-kappa.vercel.app/",
    image: "/screenshots/nextGenECommerce.png",
    testAccounts: [
      { role: "Admin", username: "Admin", password: "Admin123!" },
      { role: "Customer", username: "Customer", password: "Customer123!" },
    ],
  },
  {
    id: 4,
    nameKey: "projects.memos.title",
    descriptionKey: "projects.memos.description",
    featuresKeys: [
      "projects.memos.features.0",
      "projects.memos.features.1",
      "projects.memos.features.2",
    ],
    tags: ["Frontend", "React"],
    github: "https://github.com/Yahav-Tzukerman/React-MidProject",
    demo: "https://react-mid-project-jrql8xlbf-yahav-tzukermans-projects.vercel.app/",
    image: "/screenshots/memos.png",
  },
];
export default projects;
