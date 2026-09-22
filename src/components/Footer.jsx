import { profile, socialLinks } from "../data/site";
import Container from "./Container";
import Icon from "./Icon";

const footerLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-white">
              <span className="text-accent">{profile.initials}</span> • {profile.name}
            </p>
            <p className="mt-1 text-sm text-slate-400">{profile.title}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-slate-400 transition hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-line text-slate-300 transition hover:border-accent/60 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <Icon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-sm text-slate-500">
          © {year} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
