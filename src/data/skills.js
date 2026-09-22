// `short` is the text shown inside each skill's badge.
const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", short: "HTML", description: "Semantic, accessible page structure" },
      { name: "CSS3", short: "CSS", description: "Responsive layouts with Flexbox and Grid" },
      { name: "JavaScript", short: "JS", description: "Modern ES6+ and asynchronous code" },
      { name: "React", short: "Re", description: "Component-based interfaces and hooks" },
      { name: "Tailwind CSS", short: "TW", description: "Utility-first, consistent styling" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", short: "Nd", description: "Server-side JavaScript runtime" },
      { name: "Express.js", short: "Ex", description: "Routing, middleware and server logic" },
      { name: "REST APIs", short: "API", description: "Structured, predictable endpoints" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", short: "Mdb", description: "Flexible document-based data storage" },
      { name: "Mongoose", short: "Mg", description: "Schemas, validation and queries" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", short: "Git", description: "Version control and branching" },
      { name: "GitHub", short: "GH", description: "Repositories and collaboration" },
      { name: "VS Code", short: "VS", description: "Daily development environment" },
      { name: "Postman", short: "PM", description: "Testing and documenting APIs" },
      { name: "npm", short: "npm", description: "Packages and project scripts" },
    ],
  },
];

export const totalSkills = skillGroups.reduce((count, group) => count + group.skills.length, 0);

export default skillGroups;
