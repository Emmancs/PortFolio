import { useRef } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Work from "./components/Work.jsx";
import usePortfolioMotion from "./hooks/usePortfolioMotion.js";

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
