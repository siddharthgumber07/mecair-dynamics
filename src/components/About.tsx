import useScrollReveal from "@/hooks/useScrollReveal";

const About = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-20 lg:py-28">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-3xl mx-auto text-center ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">About Us</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            The Lifeblood of Your Industrial Operations
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At MechAir Dynamics, we don't just sell air compressors—we provide the lifeblood of your industrial operations. Led by Ashish Kumar (Service Head) and Ankit Kalshania (Sales Head), our mission is to deliver high-performance compressed air solutions that minimize downtime and maximize efficiency.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With a dedicated team of engineers and a 24/7 service commitment, we have built a reputation for excellence in Screw and Reciprocating Compressors, Air Treatment, and comprehensive maintenance. From providing the highest quality materials to offering flexible rental units, we ensure your business never stops moving.
          </p>
        </div>
        <div
          className={`mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "200ms" }}
        >
          {[
            { num: "24/7", label: "Support" },
            { num: "500+", label: "Installations" },
            { num: "15+", label: "Years Combined Exp." },
            { num: "98%", label: "Client Retention" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-accent">{s.num}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
