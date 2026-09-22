import Reveal from "./Reveal";

function SectionHeading({ id, title, intro, centered = false }) {
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span
        aria-hidden="true"
        className={`mb-5 block h-1 w-10 rounded-full bg-accent ${centered ? "mx-auto" : ""}`}
      />
      <h2 id={id} className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 leading-relaxed text-slate-400">{intro}</p>}
    </Reveal>
  );
}

export default SectionHeading;
