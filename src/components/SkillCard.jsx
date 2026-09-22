function SkillCard({ name, short, description }) {
  return (
    <li className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-white/[0.03]">
      <span
        aria-hidden="true"
        className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-accent/25 bg-accent/10 font-display text-xs font-semibold text-accent"
      >
        {short}
      </span>
      <div className="min-w-0">
        <h4 className="font-medium text-white">{name}</h4>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </li>
  );
}

export default SkillCard;
