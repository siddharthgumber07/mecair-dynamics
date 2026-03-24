import { useState } from "react";
import { Cog, Wind, PipetteIcon, Filter, Container, Settings, ChevronRight } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const categories = [
  { key: "compressors", label: "Compressors" },
  { key: "treatment", label: "Air Treatment" },
  { key: "distribution", label: "Distribution" },
];

const products = [
  { icon: Cog, title: "Screw Compressors", desc: "Oil-injected and oil-free rotary screw compressors for continuous industrial demand.", category: "compressors" },
  { icon: Settings, title: "Reciprocating Compressors", desc: "Robust piston compressors ideal for intermittent duty and high-pressure applications.", category: "compressors" },
  { icon: Wind, title: "Air Dryers", desc: "Refrigerant and desiccant dryers to deliver clean, moisture-free compressed air.", category: "treatment" },
  { icon: Filter, title: "Line Filters", desc: "Multi-stage filtration removing particles, oil aerosols, and vapours from your air supply.", category: "treatment" },
  { icon: PipetteIcon, title: "Air Piping Systems", desc: "Modular aluminium piping for efficient, leak-free air distribution networks.", category: "distribution" },
  { icon: Container, title: "Air Receiver Tanks", desc: "Pressure-rated storage vessels that stabilize system pressure and reduce cycling.", category: "distribution" },
];

const spareParts = [
  "Air Filters", "Oil Filters", "Oil Kits", "Oil Separators", "Controllers", "Intake Valves",
  "Motor Bearings", "Solenoid Valves", "Pressure Sensors", "Lubricants",
];

const Products = () => {
  const { ref, visible } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("compressors");

  const filtered = products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-24 lg:py-32 bg-secondary">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left sidebar */}
          <div className={`lg:col-span-1 ${visible ? "animate-slide-from-left" : "opacity-0"}`}>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
              Complete Compressed Air Catalog
            </h2>
            <div className="mt-1 h-1 w-16 bg-accent rounded-full" style={visible ? { animation: "draw-line 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards", animationDelay: "200ms" } : { width: 0 }} />
            <p className="mt-5 text-muted-foreground text-[15px]">
              Every component you need for a reliable air system — sourced from trusted OEMs.
            </p>

            {/* Category tabs - vertical */}
            <nav className="mt-8 flex flex-row lg:flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all active:scale-[0.97] ${
                    activeCategory === cat.key
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground hover:bg-card"
                  }`}
                >
                  {cat.label}
                  <ChevronRight size={16} className={activeCategory === cat.key ? "opacity-100" : "opacity-0"} />
                </button>
              ))}
            </nav>
          </div>

          {/* Product cards */}
          <div className={`lg:col-span-2 ${visible ? "animate-slide-from-right" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
            <div className="grid sm:grid-cols-2 gap-5">
              {filtered.map((p, i) => (
                <div
                  key={p.title}
                  className="bg-card rounded-lg p-6 shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <p.icon className="text-primary" size={22} />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Spare parts */}
            <div className="mt-8 bg-card rounded-lg p-6 border border-border/50 shadow-sm">
              <h3 className="font-bold text-foreground text-lg mb-3">All Spare Parts</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Genuine and aftermarket spares for all major compressor brands.
              </p>
              <div className="flex flex-wrap gap-2">
                {spareParts.map((part) => (
                  <span key={part} className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-full font-medium border border-border/50 hover:border-accent/40 transition-colors cursor-default">
                    {part}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
