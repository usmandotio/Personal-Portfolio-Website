const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variantStyles = {
  primary: "bg-accent text-ink hover:bg-accent-strong shadow-lg shadow-accent/20",
  secondary: "border border-white/15 text-white hover:border-accent/60 hover:bg-white/5",
  ghost: "px-3 text-slate-300 hover:text-accent",
};

// Renders a link when `href` is given, otherwise a <button>
function Button({ href, variant = "primary", type = "button", className = "", children, ...props }) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
