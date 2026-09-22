import processSteps from "../data/process";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Process() {
  return (
    <section id="process" aria-labelledby="process-heading" className="py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading id="process-heading" title="How I Work" />

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 70} className="relative">
              <div className="flex items-center gap-4">
                <span className="font-display text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span aria-hidden="true" className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default Process;
