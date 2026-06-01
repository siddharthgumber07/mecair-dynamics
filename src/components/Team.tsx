import useScrollReveal from "@/hooks/useScrollReveal";
import { Phone } from "lucide-react";

const management = [
  {
    name: "Mr. Ankit Kalshania",
    role: "Management & Marketing",
    phone: "9761666747",
    formattedPhone: "+91 97616 66747",
    initials: "AK",
    category: "management"
  },
  {
    name: "Mr. Ashish Kumar",
    role: "Manager",
    phone: "7060535279",
    formattedPhone: "+91 70605 35279",
    initials: "AK",
    category: "management"
  }
];

const technical = [
  {
    name: "Mr. Pushpendra Kumar",
    role: "Technical & Service Head",
    phone: "7983160529",
    formattedPhone: "+91 79831 60529",
    initials: "PK",
    category: "technical"
  },
  {
    name: "Mr. Rahul Dhiman",
    role: "Senior Service Engineer",
    phone: "6396517933",
    formattedPhone: "+91 63965 17933",
    initials: "RD",
    category: "technical"
  },
  {
    name: "Mr. Rajat Singh",
    role: "Service Engineer",
    phone: "8273969841",
    formattedPhone: "+91 82739 69841",
    initials: "RS",
    category: "technical"
  },
  {
    name: "Mr. Viraj Singh",
    role: "Service Engineer",
    phone: "8650000982",
    formattedPhone: "+91 86500 00982",
    initials: "VS",
    category: "technical"
  }
];

const Team = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="team" className="py-24 lg:py-32 bg-secondary">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-xl mb-16 ${visible ? "animate-slide-from-left" : "opacity-0"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            Meet Our Team
          </h2>
          <div className="mt-1 h-1 w-16 bg-accent rounded-full" style={visible ? { animation: "draw-line 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards", animationDelay: "200ms" } : { width: 0 }} />
          <p className="text-muted-foreground text-sm mt-4">
            Our experienced team of professionals is dedicated to keeping your operations running smoothly 24/7.
          </p>
        </div>

        {/* Management & Leadership Section */}
        <div className="mb-14">
          <h3 className={`text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6 ${visible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "100ms" }}>
            Management & Marketing
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {management.map((member, i) => (
              <div 
                key={member.name}
                className={`group bg-card rounded-xl p-6 shadow-sm border border-border/60 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 ${
                  visible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${150 + i * 100}ms` }}
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg mb-4 shadow-sm group-hover:from-primary group-hover:to-primary/90 group-hover:text-white transition-all duration-300">
                    {member.initials}
                  </div>
                  <h4 className="font-bold text-foreground text-lg transition-colors group-hover:text-primary duration-300">
                    {member.name}
                  </h4>
                  <span className="inline-block px-2.5 py-0.5 mt-2 rounded-full text-xs font-semibold border bg-accent/10 text-accent border-accent/20">
                    {member.role}
                  </span>
                </div>
                
                <a 
                  href={`tel:${member.phone}`} 
                  className="mt-6 flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 group/link w-fit"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border group-hover/link:bg-accent group-hover/link:text-white transition-all duration-300 shrink-0">
                    <Phone size={14} className="transition-transform group-hover/link:scale-110" />
                  </div>
                  <span className="text-sm font-medium">{member.formattedPhone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Technical & Service Team Section */}
        <div>
          <h3 className={`text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6 ${visible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            Technical & Service Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technical.map((member, i) => (
              <div 
                key={member.name}
                className={`group bg-card rounded-xl p-6 shadow-sm border border-border/60 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 ${
                  visible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${350 + i * 100}ms` }}
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg mb-4 shadow-sm group-hover:from-primary group-hover:to-primary/90 group-hover:text-white transition-all duration-300">
                    {member.initials}
                  </div>
                  <h4 className="font-bold text-foreground text-lg transition-colors group-hover:text-primary duration-300">
                    {member.name}
                  </h4>
                  <span className="inline-block px-2.5 py-0.5 mt-2 rounded-full text-xs font-semibold border bg-primary/5 text-primary/80 border-primary/10">
                    {member.role}
                  </span>
                </div>
                
                <a 
                  href={`tel:${member.phone}`} 
                  className="mt-6 flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-300 group/link w-fit"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border group-hover/link:bg-accent group-hover/link:text-white transition-all duration-300 shrink-0">
                    <Phone size={14} className="transition-transform group-hover/link:scale-110" />
                  </div>
                  <span className="text-sm font-medium">{member.formattedPhone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
