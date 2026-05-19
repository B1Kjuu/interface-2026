"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 0,
  blurStrength = 10,
  className = "",
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) {
  const containerRef = useRef(null);
  const isStringContent = typeof children === "string";

  const splitText = useMemo(() => {
    if (!isStringContent) return null;
    return children.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) return word;
      return (
        <span className="scroll-reveal-word inline-block" key={index}>
          {word}
        </span>
      );
    });
  }, [children, isStringContent]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ?? window;
    const ctx = gsap.context(() => {
      if (!isStringContent) {
        const textElements = el.querySelectorAll(
          "h1, h2, h3, h4, h5, h6, p, li, .scroll-reveal-text"
        );

        gsap.fromTo(
          el,
          {
            transformOrigin: "0% 50%",
            rotate: baseRotation,
            opacity: 1,
          },
          {
            rotate: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top bottom",
              end: rotationEnd,
              scrub: true,
            },
          }
        );

        if (textElements.length) {
          gsap.fromTo(
            textElements,
            {
              opacity: baseOpacity,
              filter: enableBlur ? `blur(${blurStrength}px)` : "none",
              y: 8,
            },
            {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              stagger: 0.02,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                scroller,
                start: "top bottom",
                end: "top center",
                scrub: true,
              },
            }
          );
        }
        return;
      }

      gsap.fromTo(
        el,
        {
          transformOrigin: "0% 50%",
          rotate: baseRotation,
          opacity: 1,
        },
        {
          rotate: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom",
            end: rotationEnd,
            scrub: true,
          },
        }
      );

      const wordElements = el.querySelectorAll(".scroll-reveal-word");
      if (wordElements.length) {
        gsap.fromTo(
          wordElements,
          {
            opacity: baseOpacity,
            filter: enableBlur ? `blur(${blurStrength}px)` : "none",
            willChange: "opacity, filter",
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            ease: "none",
            stagger: 0.05,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top bottom-=20%",
              end: wordAnimationEnd,
              scrub: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [baseOpacity, baseRotation, blurStrength, enableBlur, rotationEnd, scrollContainerRef, wordAnimationEnd]);

  return (
    <div ref={containerRef} className={`${className} ${containerClassName}`.trim()}>
      {isStringContent ? (
        <p className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold ${textClassName}`.trim()}>
          {splitText}
        </p>
      ) : (
        children
      )}
    </div>
  );
}