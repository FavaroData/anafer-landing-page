// useScrollReveal — attach `ref` to the element you want to animate in on scroll.
// Usage: const [ref, isVisible] = useScrollReveal();
// `isVisible` flips to true (once) via IntersectionObserver, which then unobserves.
// When the visitor prefers reduced motion, `isVisible` is already true on mount and
// no observer runs — treat isVisible as "safe to show/animate", not "in viewport".
import { useEffect, useRef, useState } from "react";

export default function useScrollReveal({ threshold = 0.2 } = {}) {
  const ref = useRef(null);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [isVisible, setIsVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion, threshold]);

  return [ref, isVisible];
}
