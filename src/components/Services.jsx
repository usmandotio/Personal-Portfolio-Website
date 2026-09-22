import services from "../data/services";
import Container from "./Container";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-ink-2 py-20 sm:py-24 lg:py-28">
      <Container>
        <SectionHeading id="services-heading" title="What I Can Build" />

        <Reveal
          as="ul"
          className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <li
              key={service.title}
              className="bg-ink-2 p-6 transition hover:bg-surface/60 sm:p-8"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent/10 text-accent">
                <Icon name={service.icon} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-400">{service.description}</p>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

export default Services;
