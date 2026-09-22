import { profile } from "../data/site";
import Button from "./Button";
import Container from "./Container";
import Icon from "./Icon";

// The four layers of the MERN stack shown under the profile photo
const stackLayers = [
  { name: "MongoDB", role: "Database" },
  { name: "Express", role: "API" },
  { name: "React", role: "Interface" },
  { name: "Node.js", role: "Runtime" },
];

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Intro text */}
        <div className="text-center lg:text-left">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {profile.title}
          </p>

          <h1
            id="hero-heading"
            className="animate-rise mt-5 font-display text-4xl leading-[1.1] font-semibold tracking-tight text-white [animation-delay:80ms] sm:text-5xl xl:text-6xl"
          >
            Building Modern Web Experiences <span className="lg:block">With MERN Stack</span>
          </h1>

          <p className="animate-rise mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 [animation-delay:160ms] sm:text-lg lg:mx-0">
            I'm {profile.name}, a Full MERN Stack Developer focused on building modern, scalable and
            user-friendly web applications using MongoDB, Express.js, React and Node.js.
          </p>

          <div className="animate-rise mt-9 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:justify-center lg:justify-start">
            <Button href="#projects">View My Work</Button>
            <Button href="#contact" variant="secondary">
              Let's Talk
            </Button>
            <Button href={profile.resume} variant="ghost" download>
              <Icon name="download" className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Profile photo */}
        <div className="animate-rise mx-auto w-full max-w-[19rem] [animation-delay:200ms] sm:max-w-sm lg:max-w-md">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[2.5rem] bg-accent/15 blur-3xl" />

            <figure className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface p-2 shadow-2xl shadow-black/60">
              <picture>
                <source srcSet={profile.imageWebp} type="image/webp" />
                <img
                  src={profile.image}
                  alt={`Portrait of ${profile.name}, ${profile.title}`}
                  width="800"
                  height="800"
                  fetchPriority="high"
                  className="aspect-square w-full rounded-[1.6rem] object-cover"
                />
              </picture>
            </figure>

            <div className="absolute -top-3 -right-2 rounded-lg border border-white/10 bg-ink/90 px-3 py-1.5 font-mono text-xs text-accent shadow-lg backdrop-blur sm:-right-5 sm:text-sm">
              &lt; MERN /&gt;
            </div>

            <div className="absolute -bottom-4 -left-2 flex items-center gap-2.5 rounded-lg border border-white/10 bg-ink/90 px-3.5 py-2 text-xs text-slate-200 shadow-lg backdrop-blur sm:-left-5 sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Available for projects
            </div>
          </div>

          <ul aria-label="Tech stack" className="mt-10 grid grid-cols-2 gap-2 min-[360px]:grid-cols-4">
            {stackLayers.map((layer) => (
              <li
                key={layer.name}
                className="rounded-lg border border-line bg-surface/60 px-2 py-2.5 text-center"
              >
                <span className="block text-[11px] font-semibold text-white min-[400px]:text-xs sm:text-sm">{layer.name}</span>
                <span className="mt-0.5 block text-[11px] text-slate-500">{layer.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
