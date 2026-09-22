import skillGroups from "../data/skills";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading
          id="skills-heading"
          title="My Tech Stack"
          intro="The languages, frameworks and tools I use to build full stack applications."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 60}
              className="rounded-2xl border border-line bg-surface/50 p-5 sm:p-6"
            >
              <h3 className="mb-3 px-3 font-display text-lg font-semibold text-white">{group.title}</h3>
              <ul className="grid gap-1">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
