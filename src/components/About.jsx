import projects from "../data/projects";
import { totalSkills } from "../data/skills";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const workingWith = [
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git & GitHub",
  "Responsive UI",
];

// Stats are derived from real data in /data so they never drift out of date
const stats = [
  { value: projects.length, label: "Projects built" },
  { value: "MERN", label: "Full stack focus" },
  { value: totalSkills, label: "Technologies" },
  { value: "Open", label: "Available for work" },
];

function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-ink-2 py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading id="about-heading" title="About Me" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            <p>
              I'm Muhammad Usman, a Full MERN Stack Developer. I build complete web applications, from
              the database and backend API through to the interface people actually use.
            </p>
            <p>
              I enjoy breaking problems into clear steps and writing clean, readable code. On the
              frontend I focus on responsive, user-friendly interfaces in React; on the backend I build
              structured REST APIs with Node.js, Express and MongoDB.
            </p>
            <p>
              I'm always learning, whether that's a new tool, a better pattern or a cleaner way to solve a
              problem I've solved before.
            </p>

            <ul aria-label="Technologies I work with" className="flex flex-wrap gap-2 pt-3">
              {workingWith.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse bg-surface p-6 sm:p-7">
                  <dt className="mt-2 text-sm text-slate-400">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-white sm:text-4xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default About;
