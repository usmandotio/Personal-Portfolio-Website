import Icon from "./Icon";

// A link set to "#" in projects.js renders as a disabled "coming soon" label
function ProjectLink({ href, icon, label }) {
  const classes =
    "inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-accent";

  if (!href || href === "#") {
    return (
      <span className={`${classes} cursor-not-allowed border border-white/5 text-slate-500`}>
        <Icon name={icon} className="h-4 w-4" />
        {label} soon
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes} border border-white/10 text-slate-200 hover:border-accent/60 hover:text-accent`}
    >
      <Icon name={icon} className="h-4 w-4" />
      {label}
    </a>
  );
}

function ProjectCard({ title, description, image, features, technologies, github, live }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5">
      <div className="aspect-video overflow-hidden border-b border-line bg-ink-2">
        <img
          src={image}
          alt={`Preview of the ${title} project`}
          loading="lazy"
          decoding="async"
          width="1200"
          height="675"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 leading-relaxed text-slate-400">{description}</p>

        <ul aria-label="Key features" className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-slate-300">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1 w-1 shrink-0 rounded-full bg-accent" />
              {feature}
            </li>
          ))}
        </ul>

        <ul aria-label="Technologies used" className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-accent/20 bg-accent/5 px-2.5 py-1 text-xs text-accent"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <ProjectLink href={github} icon="github" label="GitHub" />
          <ProjectLink href={live} icon="external" label="Live Demo" />
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
