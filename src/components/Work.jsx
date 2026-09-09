import { projects } from "../data/portfolio.js";

export default function Work() {
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
