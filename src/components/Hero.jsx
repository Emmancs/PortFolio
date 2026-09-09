import SplitLine from "./SplitLine.jsx";

export default function Hero() {
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
          I design and engineer polished digital products with resilient architecture,
          expressive interfaces, and a bias for details users can feel.
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
