import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function usePortfolioMotion(rootRef) {
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
