import { useState } from "react";
import { contact, profile } from "../data/site";
import Button from "./Button";
import Container from "./Container";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const contactItems = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: "mail" },
  { label: "GitHub", value: contact.github.replace("https://", ""), href: contact.github, icon: "github" },
  { label: "LinkedIn", value: contact.linkedin.replace("https://", ""), href: contact.linkedin, icon: "linkedin" },
  { label: "Location", value: profile.location, icon: "mapPin" },
];

const inputStyles =
  "w-full rounded-lg border border-line bg-ink px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-accent focus:ring-2 focus:ring-accent/30 focus:outline-none";

function Contact() {
  const [status, setStatus] = useState("");

  // No backend needed: the form opens the visitor's email app with the message filled in.
  // To use a form service (Formspree, EmailJS, your own Express API) replace this function.
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const subject = encodeURIComponent(data.get("subject"));
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-ink-2 py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="contact-heading"
              title="Let's Build Something Together"
              intro="Have a project, startup idea or opportunity? Let's discuss how I can help turn it into a modern web experience."
            />

            <Reveal as="ul" delay={80} className="mt-10 space-y-3">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                      <Icon name={item.icon} className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-500">{item.label}</span>
                      <span className="block truncate text-slate-200">{item.value}</span>
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 rounded-xl border border-transparent p-2 transition hover:border-line hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-2">{content}</div>
                    )}
                  </li>
                );
              })}
            </Reveal>
          </div>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
              aria-describedby={status ? "form-status" : undefined}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputStyles} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={inputStyles} />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-200">
                  Subject
                </label>
                <input id="subject" name="subject" type="text" required placeholder="What's it about?" className={inputStyles} />
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your project or opportunity"
                  className={`${inputStyles} resize-y`}
                />
              </div>

              <Button type="submit" className="mt-6 w-full sm:w-auto">
                <Icon name="mail" className="h-4 w-4" />
                Send Message
              </Button>

              {status && (
                <p id="form-status" role="status" className="mt-4 text-sm text-emerald-300">
                  {status}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
