// ---------------------------------------------------------------
// Replace "#" with your real GitHub and live demo URLs.
// Links left as "#" show as "coming soon" instead of broken buttons.
// Swap the images in public/images/projects/ for real screenshots.
// ---------------------------------------------------------------
const projects = [
  {
    title: "Full Stack E-Commerce",
    description:
      "An online store with product management, a shopping cart, order tracking and an admin dashboard backed by a REST API.",
    image: "/images/projects/ecommerce.svg",
    features: ["Authentication", "Shopping cart", "Orders", "Admin dashboard"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Authentication System",
    description:
      "Secure registration and login with hashed passwords, JWT authentication, protected routes and role-based access.",
    image: "/images/projects/auth.svg",
    features: ["Password hashing", "JWT", "Protected routes", "User roles"],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "#",
    live: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A blogging app where signed-in users create, edit and delete posts and discuss them in comments, all stored in MongoDB.",
    image: "/images/projects/blog.svg",
    features: ["User accounts", "Post CRUD", "Comments", "REST API"],
    technologies: ["React", "Express", "MongoDB", "Mongoose"],
    github: "#",
    live: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "A responsive dashboard with charts, user management and live data pulled from a connected API.",
    image: "/images/projects/dashboard.svg",
    features: ["Charts", "User management", "API integration", "Responsive UI"],
    technologies: ["React", "Tailwind CSS", "Node.js", "REST API"],
    github: "#",
    live: "#",
  },
];

export default projects;
