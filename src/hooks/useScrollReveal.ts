import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right";

const useScrollReveal = (direction: Direction = "up") => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animClass = visible
    ? direction === "left"
      ? "animate-slide-from-left"
      : direction === "right"
        ? "animate-slide-from-right"
        : "animate-fade-up"
    : "opacity-0";

  return { ref, visible, animClass };
};

export default useScrollReveal;
