import useScrollReveal from "@/hooks/useScrollReveal";
import { useEffect, useRef, useState } from "react";

const AnimatedNumber = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(target);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const num = parseInt(target);
        if (isNaN(num)) { setDisplayed(target); return; }
        const duration = 1200;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayed(Math.round(num * eased) + suffix);
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix]);

  return <span ref={ref}>{displayed}</span>;
};

const About = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text column */}
          <div className={`lg:col-span-3 ${visible ? "animate-slide-from-left" : "opacity-0"}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
              The Lifeblood of Your Industrial Operations
            </h2>
            <div className="mt-1 h-1 w-16 bg-accent rounded-full animate-draw-line" />
            <p className="mt-7 text-muted-foreground leading-relaxed text-[15px]">
              At MechAir Dynamics, we don't just sell air compressors—we provide the lifeblood of your industrial operations. Led by Ashish Kumar (Service Head) and Ankit Kalshania (Sales Head), our mission is to deliver high-performance compressed air solutions that minimize downtime and maximize efficiency.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
              With a dedicated team of engineers and a 24/7 service commitment, we have built a reputation for excellence in Screw and Reciprocating Compressors, Air Treatment, and comprehensive maintenance. From providing the highest quality materials to offering flexible rental units, we ensure your business never stops moving.
            </p>
          </div>

          {/* Stats column */}
          <div className={`lg:col-span-2 ${visible ? "animate-slide-from-right" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <div className="space-y-0 divide-y divide-border">
              {[
                { num: "500", suffix: "+", label: "Successful Installations" },
                { num: "24/7", suffix: "", label: "Emergency Support" },
                { num: "15", suffix: "+", label: "Years Combined Experience" },
                { num: "98", suffix: "%", label: "Client Retention Rate" },
              ].map((s) => (
                <div key={s.label} className="py-5 first:pt-0 last:pb-0 flex items-baseline justify-between">
                  <span className="text-muted-foreground text-sm">{s.label}</span>
                  <span className="text-2xl font-extrabold text-accent tabular-nums">
                    {s.num === "24/7" ? "24/7" : <AnimatedNumber target={s.num} suffix={s.suffix} />}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
