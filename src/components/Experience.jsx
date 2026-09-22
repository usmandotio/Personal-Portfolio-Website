import experience from "../data/experience";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="bg-ink-2 py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading id="experience-heading" title="Experience" />

        <ol className="relative mt-12 space-y-8 border-l border-line pl-6 sm:ml-2 sm:pl-10">
          {experience.map((job, index) => (
            <Reveal as="li" key={`${job.role}-${index}`} delay={index * 80} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-7 -left-[31px] h-3 w-3 rounded-full border-2 border-ink-2 bg-accent ring-4 ring-accent/15 sm:-left-[47px]"
              />

              <article className="rounded-2xl border border-line bg-surface/60 p-6 sm:p-7">
                {job.isPlaceholder && (
                  <p className="mb-4 inline-block rounded-md border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-xs text-amber-200">
                    Placeholder: replace in src/data/experience.js
                  </p>
                )}

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-display text-xl font-semibold text-white">{job.role}</h3>
                  <p className="text-sm whitespace-nowrap text-accent">{job.duration}</p>
                </div>
                <p className="mt-1 text-slate-300">{job.company}</p>
                <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">{job.description}</p>

                <ul aria-label="Technologies used" className="mt-5 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <li key={tech} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default Experience;
