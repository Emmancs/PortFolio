import { aboutStatement } from "../data/portfolio.js";

export default function About() {
  const words = aboutStatement.split(/\s+/);

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
