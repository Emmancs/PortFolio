import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const marqueeItems = [
  "FULL STACK",
  "SOFTWARE ENGINEER",
  "WEB DEVELOPMENT",
  "CREATIVE TECHNOLOGY",
];

const projects = [
  {
    name: "Collaborative Document Platform",
    category: "Product Engineering",
    year: "2026",
    image: "/assets/project-docs.png",
    alt: "Abstract interface for a collaborative document platform",
    description:
      "A shared writing environment with structured documents, contextual comments, live cursors, and version-aware workflows.",
  },
  {
    name: "AI-Powered Web Application",
    category: "AI Product",
    year: "2026",
    image: "/assets/project-ai.png",
    alt: "Abstract interface for an AI-powered web application",
    description:
      "A responsive AI workspace that blends prompt flows, generated insights, user controls, and production-grade application logic.",
  },
  {
    name: "Real-Time Collaboration System",
    category: "Realtime Infrastructure",
    year: "2025",
    image: "/assets/project-realtime.png",
    alt: "Abstract interface for a real-time collaboration system",
    description:
      "Presence, sync, optimistic updates, and durable state handling shaped into a calm interface for distributed teams.",
  },
  {
    name: "Developer Productivity Tool",
    category: "Internal Systems",
    year: "2025",
    image: "/assets/project-devtool.png",
    alt: "Abstract interface for a developer productivity tool",
    description:
      "A focused command surface for code review, deployments, automation queues, and team engineering rituals.",
  },
];

function usePortfolioMotion(rootRef) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(".split-line > span", { yPercent: 110 });
      gsap.set(".reveal", { y: 28, opacity: 0 });
      gsap.set(".reveal-img", {
        clipPath: "inset(12% 0 0 0)",
        y: 42,
        opacity: 0,
      });

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .to(".split-line > span", {
          yPercent: 0,
          duration: 1.28,
          stagger: 0.1,
        })
        .to(".reveal", { y: 0, opacity: 1, duration: 1 }, "-=0.75")
        .to(
          ".reveal-img",
          {
            clipPath: "inset(0% 0 0 0)",
            y: 0,
            opacity: 1,
            duration: 1.35,
          },
          "-=1.05",
        );

      gsap.to(".hero-visual img", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const track = rootRef.current?.querySelector(".marquee-track");
      const marqueeWidth = track ? track.scrollWidth / 2 : 0;
      if (track && marqueeWidth) {
        gsap.to(track, {
          x: -marqueeWidth,
          duration: 18,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % -marqueeWidth),
          },
        });
      }

      gsap.from(".about-statement .word", {
        y: 36,
        opacity: 0.12,
        rotateX: 38,
        duration: 0.75,
        stagger: 0.015,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about",
          start: "top 72%",
          end: "bottom 55%",
          scrub: 0.75,
        },
      });

      gsap.utils
        .toArray(
          ".section-heading, .project-card, .contact .section-index, .contact h2, .contact-links a",
        )
        .forEach((el) => {
          gsap.from(el, {
            y: 54,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 84%",
            },
          });
        });

      gsap.utils.toArray(".project-image img").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -5, scale: 1.08 },
          {
            yPercent: 5,
            scale: 1.03,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".project-card"),
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef]);
}

function SplitLine({ as: Tag = "span", className = "", children, ...props }) {
  return (
    <Tag className={`split-line ${className}`.trim()} {...props}>
      <span>{children}</span>
    </Tag>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Emmanuel Winfred home">
        EW
      </a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-pad" aria-labelledby="hero-title">
      <div className="hero-copy">
        <SplitLine as="p" className="eyebrow">
          Hi, I'm
        </SplitLine>
        <h1 id="hero-title" className="hero-title">
          <SplitLine className="title-line">EMMANUEL</SplitLine>
          <SplitLine className="title-line">WINFRED</SplitLine>
        </h1>
        <SplitLine as="p" className="role">
          FULL STACK DEVELOPER
        </SplitLine>
        <p className="intro reveal">
          I design and engineer polished digital products with resilient
          architecture, expressive interfaces, and a bias for details users can
          feel.
        </p>
      </div>
      <div className="hero-visual reveal-img">
        <img
          src="/assets/hero-portrait.png"
          alt="Editorial abstract portrait visual for Emmanuel Winfred"
        />
      </div>
    </section>
  );
}

function Marquee() {
  return (
    <section className="marquee-section" aria-label="Developer disciplines">
      <div className="marquee">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const statement =
    "Emmanuel builds web products where engineering discipline and visual judgment carry equal weight. His work moves from product strategy to database design, API architecture, interactive UI systems, and launch polish with a clear focus on speed, maintainability, and human rhythm.";
  const words = statement.split(/\s+/);

  return (
    <section id="about" className="about section-pad">
      <div className="section-index">01 / About</div>
      <p className="about-statement">
        {words.map((word, index) => (
          <span className="word" key={`${word}-${index}`}>
            {word}
            {index === words.length - 1 ? "" : " "}
          </span>
        ))}
      </p>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="work section-pad" aria-labelledby="work-title">
      <div className="section-heading">
        <div className="section-index">02 / Selected Work</div>
        <h2 id="work-title">Digital systems with clarity, pace, and presence.</h2>
      </div>

      <div className="projects">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <a href="#" aria-label={`View ${project.name}`}>
              <div className="project-meta">
                <span>{project.name}</span>
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.alt} />
              </div>
              <div className="project-foot">
                <p>{project.description}</p>
                <span>Explore</span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section-pad" aria-labelledby="contact-title">
      <div className="section-index">03 / Contact</div>
      <h2 id="contact-title">LET'S BUILD SOMETHING.</h2>
      <div className="contact-links" aria-label="Contact links">
        <a href="mailto:emmanuel.winfred@example.com">Email</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default function App() {
  const rootRef = useRef(null);
  usePortfolioMotion(rootRef);

  return (
    <div ref={rootRef}>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
}
