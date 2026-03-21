import { Cog, Wind, PipetteIcon, Filter, Container, Settings } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const products = [
  { icon: Cog, title: "Screw Compressors", desc: "Oil-injected and oil-free rotary screw compressors for continuous industrial demand." },
  { icon: Settings, title: "Reciprocating Compressors", desc: "Robust piston compressors ideal for intermittent duty and high-pressure applications." },
  { icon: Wind, title: "Air Dryers", desc: "Refrigerant and desiccant dryers to deliver clean, moisture-free compressed air." },
  { icon: PipetteIcon, title: "Air Piping Systems", desc: "Modular aluminium piping for efficient, leak-free air distribution networks." },
  { icon: Filter, title: "Line Filters", desc: "Multi-stage filtration removing particles, oil aerosols, and vapours from your air supply." },
  { icon: Container, title: "Air Receiver Tanks", desc: "Pressure-rated storage vessels that stabilize system pressure and reduce cycling." },
];

const spareParts = [
  "Air Filters", "Oil Separators", "Controllers", "Intake Valves",
  "Motor Bearings", "Solenoid Valves", "Pressure Sensors", "Lubricants",
];

const Products = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="products" className="py-20 lg:py-28 bg-secondary">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">Products</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            Complete Compressed Air Catalog
          </h2>
          <p className="mt-4 text-muted-foreground">
            From compressors to filtration, every component you need for a reliable air system — sourced from trusted OEMs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <div
              key={p.title}
              className={`bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all group border border-border/50 ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <p.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-semibold text-foreground text-lg">{p.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 bg-card rounded-lg p-8 border border-border/50 shadow-sm ${
            visible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <h3 className="font-bold text-foreground text-xl mb-4">All Spare Parts</h3>
          <p className="text-muted-foreground text-sm mb-5">
            Genuine and aftermarket spares for all major compressor brands — always in stock.
          </p>
          <div className="flex flex-wrap gap-2">
            {spareParts.map((part) => (
              <span key={part} className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-md font-medium">
                {part}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
