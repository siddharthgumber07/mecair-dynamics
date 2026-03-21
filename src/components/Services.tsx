import { Wrench, Snowflake, BarChart3, Truck, FileCheck } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const services = [
  { icon: Wrench, title: "Air Compressor Services", desc: "Complete installation, commissioning, and breakdown repair for all compressor types. Our engineers carry diagnostic tools and critical spares for first-visit fixes." },
  { icon: Snowflake, title: "Refrigeration Drying", desc: "Installation and servicing of refrigerant dryers to keep dewpoints low and your air system moisture-free, protecting downstream equipment." },
  { icon: BarChart3, title: "Air Audits", desc: "Comprehensive compressed air audits that identify leaks, inefficiencies, and cost-saving opportunities — backed by detailed reporting." },
  { icon: Truck, title: "Rental Units", desc: "Temporary compressor hire during breakdowns, planned maintenance, or demand surges. Same-day deployment available across the region." },
  { icon: FileCheck, title: "Maintenance Contracts", desc: "Annual and comprehensive maintenance contracts (AMC/CMC) with scheduled visits, priority response, and genuine parts — designed to maximize uptime." },
];

const Services = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="py-24 lg:py-32">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-xl mb-16 ${visible ? "animate-slide-from-left" : "opacity-0"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            End-to-End Service & Support
          </h2>
          <div className="mt-1 h-1 w-16 bg-accent rounded-full" style={visible ? { animation: "draw-line 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards", animationDelay: "200ms" } : { width: 0 }} />
          <p className="mt-5 text-muted-foreground">
            From routine maintenance to emergency breakdowns, our service team is engineered for speed and precision.
          </p>
        </div>

        {/* Alternating layout */}
        <div className="space-y-6">
          {services.map((s, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={s.title}
                className={`flex flex-col md:flex-row items-start gap-6 md:gap-10 ${
                  !isEven ? "md:flex-row-reverse" : ""
                } ${visible ? (isEven ? "animate-slide-from-left" : "animate-slide-from-right") : "opacity-0"}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Number + icon */}
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-5xl font-extrabold text-border tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <s.icon className="text-accent" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-semibold text-foreground text-lg">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
