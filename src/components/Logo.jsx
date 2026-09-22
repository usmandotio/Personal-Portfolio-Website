import { profile } from "../data/site";

function Logo() {
  return (
    <a
      href="#home"
      className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      aria-label={`${profile.name}, back to top`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent/40 bg-surface font-display text-sm font-bold text-accent transition group-hover:border-accent">
        {profile.initials}
      </span>
      <span className="font-display text-sm font-semibold text-white sm:text-base">{profile.name}</span>
    </a>
  );
}

export default Logo;
