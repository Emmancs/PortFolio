import GradientWaves from './component/GradientWaves'

function App() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <GradientWaves />
      </div>
      <main className="min-h-screen text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 z-50 w-full px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <div className="font-display text-xl font-semibold tracking-[-0.04em]">
            EW.
          </div>

          <div className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"
              className="transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </div>

        </div>
      </nav>


      {/* HERO */}
      <section className="flex min-h-screen items-center px-6 md:px-12">

        <div className="mx-auto w-full max-w-7xl">

          <p className="
            mb-6
            font-sans
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-white/50
          ">
            Full Stack Developer
          </p>

          <h1 className="
            max-w-6xl
            font-display
            text-[clamp(4rem,10vw,10rem)]
            font-semibold
            leading-[0.85]
            tracking-[-0.07em]
          ">
            Building
            <br />
            digital
            <br />
            experiences.
          </h1>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">

            <p className="
              max-w-lg
              font-sans
              text-base
              leading-relaxed
              text-white/50
              md:text-lg
            ">
              I create modern web applications, interactive experiences
              and scalable digital products.
            </p>

            <a
              href="#projects"
              className="
                w-fit
                rounded-full
                border
                border-white/20
                px-6
                py-3
                font-sans
                text-sm
                font-medium
                transition
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              View my work →
            </a>

          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="px-6 py-32 md:px-12"
      >
        <div className="mx-auto max-w-7xl">

          <p className="
            mb-6
            font-sans
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-white/40
          ">
            01 / About
          </p>

          <h2 className="
            max-w-4xl
            font-display
            text-4xl
            font-medium
            leading-tight
            tracking-[-0.05em]
            md:text-6xl
          ">
            I turn ideas into thoughtful digital experiences.
          </h2>

          <p className="
            mt-8
            max-w-2xl
            font-sans
            text-base
            leading-8
            text-white/50
            md:text-lg
          ">
            I enjoy building products that combine clean design,
            powerful technology and meaningful user experiences.
          </p>

        </div>
      </section>


      {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 py-32 md:px-12"
      >
        <div className="mx-auto max-w-7xl">

          <p className="
            mb-6
            font-sans
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-white/40
          ">
            02 / Projects
          </p>

          <h2 className="
            font-display
            text-5xl
            font-semibold
            tracking-[-0.06em]
            md:text-7xl
          ">
            Selected work
          </h2>


          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {/* PROJECT 1 */}
            <div className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              transition
              duration-500
              hover:-translate-y-2
              hover:border-white/20
            ">

              <div className="
                aspect-video
                rounded-2xl
                bg-white/[0.05]
              " />

              <div className="mt-6">

                <p className="
                  font-sans
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                ">
                  React · Three.js
                </p>

                <h3 className="
                  mt-3
                  font-display
                  text-2xl
                  font-medium
                  tracking-[-0.04em]
                ">
                  Interactive Portfolio
                </h3>

                <p className="
                  mt-3
                  font-sans
                  leading-relaxed
                  text-white/50
                ">
                  An interactive portfolio experience built with
                  React and Three.js.
                </p>

              </div>

            </div>


            {/* PROJECT 2 */}
            <div className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              transition
              duration-500
              hover:-translate-y-2
              hover:border-white/20
            ">

              <div className="
                aspect-video
                rounded-2xl
                bg-white/[0.05]
              " />

              <div className="mt-6">

                <p className="
                  font-sans
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                ">
                  Java · SQL
                </p>

                <h3 className="
                  mt-3
                  font-display
                  text-2xl
                  font-medium
                  tracking-[-0.04em]
                ">
                  Full Stack Application
                </h3>

                <p className="
                  mt-3
                  font-sans
                  leading-relaxed
                  text-white/50
                ">
                  A full-stack application focused on performance,
                  usability and clean architecture.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 py-40 md:px-12"
      >
        <div className="mx-auto max-w-7xl">

          <p className="
            mb-6
            font-sans
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-white/40
          ">
            03 / Contact
          </p>

          <h2 className="
            max-w-5xl
            font-display
            text-5xl
            font-semibold
            leading-[0.9]
            tracking-[-0.07em]
            md:text-8xl
          ">
            Let's build
            <br />
            something.
          </h2>

          <a
            href="mailto:hello@example.com"
            className="
              mt-10
              inline-block
              rounded-full
              bg-white
              px-7
              py-4
              font-sans
              text-sm
              font-semibold
              text-black
              transition
              duration-300
              hover:scale-105
            "
          >
            Get in touch →
          </a>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="
        border-t
        border-white/10
        px-6
        py-8
        md:px-12
      ">
        <div className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-4
          text-sm
          text-white/40
          md:flex-row
          md:items-center
          md:justify-between
        ">

          <p>
            © 2026 Emmanuel Winfred
          </p>

          <p>
            Designed & built with React
          </p>

        </div>
      </footer>

    </main>
    </>
  );
}

export default App;
