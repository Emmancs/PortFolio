export default function Header() {
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
