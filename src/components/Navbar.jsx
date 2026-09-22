import { useEffect, useState } from "react";
import { navLinks } from "../data/site";
import Button from "./Button";
import Container from "./Container";
import Icon from "./Icon";
import Logo from "./Logo";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  // Change the navbar background after scrolling and highlight the current section
  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const position = window.scrollY + window.innerHeight * 0.35;
      let current = "home";
      sections.forEach((section) => {
        if (section.offsetTop <= position) current = section.id;
      });
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu with the Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const hasBackground = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        hasBackground ? "border-b border-white/5 bg-ink/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-md px-3 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-accent ${
                      isActive ? "text-accent" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button href="#contact" className="px-4 py-2">
              Let's Work Together
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white transition hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-accent lg:hidden"
          >
            <Icon name={isMenuOpen ? "close" : "menu"} />
          </button>
        </div>
      </Container>

      {/* Mobile menu — `invisible` also removes the links from keyboard focus when closed */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`border-t border-white/5 bg-ink/95 backdrop-blur-md transition duration-200 lg:hidden ${
          isMenuOpen ? "visible translate-y-0 opacity-100" : "invisible absolute inset-x-0 -translate-y-2 opacity-0"
        }`}
      >
        <Container className="py-4">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className={`block rounded-lg px-3 py-3 text-base transition hover:bg-white/5 ${
                    activeId === link.id ? "text-accent" : "text-slate-200"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 sm:hidden">
            <Button href="#contact" onClick={closeMenu} className="w-full">
              Let's Work Together
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  );
}

export default Navbar;
