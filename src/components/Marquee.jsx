import { marqueeItems } from "../data/portfolio.js";

export default function Marquee() {
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
