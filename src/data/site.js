// ---------------------------------------------------------------
// Personal details — replace every PLACEHOLDER value with your own.
// Everything on the site reads from this file.
// ---------------------------------------------------------------

export const profile = {
  name: "Muhammad Usman",
  initials: "MU",
  title: "Full MERN Stack Developer",
  image: "/images/profile.jpg",
  imageWebp: "/images/profile.webp",
  resume: "/resume.pdf", // PLACEHOLDER: replace public/resume.pdf with your real resume
  location: "Your City, Country", // PLACEHOLDER
};

export const contact = {
  email: "your.email@example.com", // PLACEHOLDER
  github: "https://github.com/yourusername", // PLACEHOLDER
  linkedin: "https://linkedin.com/in/yourusername", // PLACEHOLDER
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const socialLinks = [
  { label: "GitHub", icon: "github", href: contact.github },
  { label: "LinkedIn", icon: "linkedin", href: contact.linkedin },
];
