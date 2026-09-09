import { contactLinks } from "../data/portfolio.js";

export default function Contact() {
  return (
    <section id="contact" className="contact section-pad" aria-labelledby="contact-title">
      <div className="section-index">03 / Contact</div>
      <h2 id="contact-title">LET'S BUILD SOMETHING.</h2>
      <div className="contact-links" aria-label="Contact links">
        {contactLinks.map((link) => (
          <a
            href={link.href}
            key={link.label}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
