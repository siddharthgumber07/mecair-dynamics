import useScrollReveal from "@/hooks/useScrollReveal";

const leadership = [
  { name: "Ashish Kumar", role: "Service Head", initials: "AK", color: "bg-primary" },
  { name: "Ankit Kalshania", role: "Sales Head", initials: "AK", color: "bg-accent" },
];

const team = [
  { name: "Rajat Kumar", role: "Service Engineer", initials: "RK" },
  { name: "Viraj Singh", role: "Service Engineer", initials: "VS" },
  { name: "Ankita Aggarwal", role: "Operations", initials: "AA" },
];

const Team = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="team" className="py-20 lg:py-28 bg-secondary">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">Our Team</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            The People Behind the Machines
          </h2>
          <p className="mt-4 text-muted-foreground">
            A dedicated crew of professionals committed to keeping your operations running at peak efficiency.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5 text-center">Leadership</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {leadership.map((p, i) => (
              <div
                key={p.name}
                className={`bg-card rounded-lg p-6 shadow-sm text-center w-64 border border-border/50 ${
                  visible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-16 h-16 ${p.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-lg">{p.initials}</span>
                </div>
                <h4 className="font-semibold text-foreground text-lg">{p.name}</h4>
                <p className="text-accent text-sm font-medium mt-1">{p.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-5 text-center">Technical Team</h3>
          <div className="flex flex-wrap justify-center gap-5">
            {team.map((p, i) => (
              <div
                key={p.name}
                className={`bg-card rounded-lg p-5 shadow-sm text-center w-56 border border-border/50 ${
                  visible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(i + 2) * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-semibold text-sm">{p.initials}</span>
                </div>
                <h4 className="font-semibold text-foreground">{p.name}</h4>
                <p className="text-muted-foreground text-sm mt-1">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
