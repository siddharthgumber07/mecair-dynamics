import { Wrench, Snowflake, BarChart3, Truck, FileCheck } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const services = [
  { icon: Wrench, title: "Air Compressor Services", desc: "Complete installation, commissioning, and breakdown repair for all compressor types. Our engineers carry diagnostic tools and critical spares for first-visit fixes." },
  { icon: Snowflake, title: "Refrigeration Drying", desc: "Installation and servicing of refrigerant dryers to keep dewpoints low and your air system moisture-free, protecting downstream equipment." },
  { icon: BarChart3, title: "Air Audits", desc: "Comprehensive compressed air audits that identify leaks, inefficiencies, and cost-saving opportunities — backed by detailed reporting." },
  { icon: Truck, title: "Rental Units", desc: "Temporary compressor hire during breakdowns, planned maintenance, or demand surges. Same-day deployment available across the region." },
  { icon: FileCheck, title: "Maintenance Contracts (AMC/CMC)", desc: "Annual and comprehensive maintenance contracts with scheduled visits, priority response, and genuine parts — designed to maximize uptime." },
];

const Services = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="services" className="py-20 lg:py-28">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">Services</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            End-to-End Service & Support
          </h2>
          <p className="mt-4 text-muted-foreground">
            From routine maintenance to emergency breakdowns, our service team is engineered for speed and precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`relative bg-card rounded-lg p-6 shadow-sm border border-border/50 hover:border-accent/30 hover:shadow-md transition-all group ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <s.icon className="text-accent" size={22} />
              </div>
              <h3 className="font-semibold text-foreground text-lg">{s.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
