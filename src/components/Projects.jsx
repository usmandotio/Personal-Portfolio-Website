import projects from "../data/projects";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          id="projects-heading"
          title="Featured Projects"
          intro="Full stack applications that show how I work across the MERN stack, from API to interface."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 80}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
