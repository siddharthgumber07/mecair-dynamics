import useScrollReveal from "@/hooks/useScrollReveal";
import aashishImg from "@/assets/profile/aashish.jpeg";
import ankitImg from "@/assets/profile/ankit.jpeg";

const leadership = [
  { name: "Ashish Kumar", role: "Director", initials: "AK", image: aashishImg, desc: "Leads our 24/7 service operations with 10+ years of compressor expertise." },
  { name: "Ankit Kalshania", role: "Director", initials: "AK", image: ankitImg, desc: "Drives client partnerships and ensures optimal compressed air solutions." },
];

const team = [
  { name: "Rajat Kumar", role: "Service Engineer", initials: "RK" },
  { name: "Viraj Singh", role: "Service Engineer", initials: "VS" },
  { name: "Shalini Baraswal", role: "Operations", initials: "SB" },
];

const Team = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="team" className="py-24 lg:py-32 bg-secondary">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-xl mb-14 ${visible ? "animate-slide-from-left" : "opacity-0"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            The People Behind the Machines
          </h2>
          <div className="mt-1 h-1 w-16 bg-accent rounded-full" style={visible ? { animation: "draw-line 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards", animationDelay: "200ms" } : { width: 0 }} />
        </div>

        {/* Leadership - horizontal cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {leadership.map((p, i) => (
            <div
              key={p.name}
              className={`bg-card rounded-lg shadow-sm border border-border/50 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="flex flex-row items-stretch h-full">
                <div className={`w-[35%] sm:w-40 shrink-0 overflow-hidden ${i === 0 ? "bg-primary" : "bg-accent"}`}>
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover object-top min-h-[160px]" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center min-h-[160px]">
                      <span className="text-white font-bold text-3xl">{p.initials}</span>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center">
                  <h4 className="font-semibold text-foreground text-lg sm:text-xl">{p.name}</h4>
                  <p className="text-secondary-foreground text-xs sm:text-sm font-medium mt-1">{p.role}</p>
                  <p className="text-muted-foreground text-sm mt-2 sm:mt-3 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical team - compact inline */}
        <div className={`${visible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Technical Team</h3>
          <div className="flex flex-wrap gap-4">
            {team.map((p) => (
              <div key={p.name} className="flex items-center gap-3 bg-card rounded-lg px-5 py-3 shadow-sm border border-border/50">
                <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold text-xs">{p.initials}</span>
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{p.name}</h4>
                  <p className="text-muted-foreground text-xs">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
