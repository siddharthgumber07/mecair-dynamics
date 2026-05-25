import { useState } from "react";
import { Cog, Wind, PipetteIcon, Filter, Container, Settings, ChevronRight, Handshake } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import spare1 from "@/assets/spare/spare1.jpg";
import spare2 from "@/assets/spare/spare2.jpeg";
import spare3 from "@/assets/spare/spare3.jpeg";
import fsCurtisLogo from "@/assets/clients/fs-curtis.png";
import nx160Img from "@/assets/supplier/nx-he-160.png";
import nx75Img from "@/assets/supplier/nx-75-90-rev-601x601.png";
import es04Img from "@/assets/supplier/gw04-v5.jpg";

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

const sparePartImages = [
  { src: spare1, alt: "FS-Curtis genuine air and oil filters, separators, and service components", caption: "Genuine FS-Curtis spares" },
  { src: spare2, alt: "Compressor spare parts including fans, controllers, filters, and maintenance kits", caption: "Full spare parts range" },
  { src: spare3, alt: "Industrial compressor spare parts catalog — filters, valves, belts, and air ends", caption: "Stocked for fast delivery" },
];

const fsCurtisProducts = [
  { src: nx160Img, name: "NX160 High Efficiency", desc: "Large-capacity rotary screw compressor for continuous industrial demand." },
  { src: nx75Img, name: "NX75", desc: "Mid-range rotary screw compressor with advanced controls and high efficiency." },
  { src: es04Img, name: "ECOSCROLL ES04", desc: "Oil-free scroll compressor for clean, reliable compressed air." },
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
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {sparePartImages.map((img) => (
                  <figure key={img.caption} className="overflow-hidden rounded-lg border border-border/50 bg-secondary/50">
                    <img src={img.src} alt={img.alt} className="w-full h-40 sm:h-36 object-cover object-center" loading="lazy" />
                    <figcaption className="px-3 py-2 text-xs font-medium text-muted-foreground text-center">{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FS-Curtis supplier */}
        <div className={`mt-16 lg:mt-20 ${visible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
          <div className="bg-card rounded-lg p-6 lg:p-8 border border-border/50 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              <div className="lg:w-1/3 shrink-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Handshake className="text-primary" size={22} />
                  </div>
                  <h3 className="font-bold text-foreground text-xl">Our Supplier — FS-Curtis</h3>
                </div>
                <img src={fsCurtisLogo} alt="FS-Curtis logo" className="h-14 w-auto object-contain mb-5" />
                <p className="text-muted-foreground text-sm leading-relaxed">
                  MechAir Dynamics partners with <strong className="text-foreground font-medium">FS-Curtis</strong> to supply rotary screw and oil-free scroll compressors backed by genuine spare parts — air/oil separators, filters, controllers, valves, and complete maintenance kits.
                </p>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                  We stock and source OEM parts for fast turnaround, keeping your compressed air system running with minimal downtime.
                </p>
                <a
                  href="https://www.fscurtis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium text-accent hover:underline"
                >
                  Visit fscurtis.com →
                </a>
              </div>
              <div className="lg:flex-1 grid sm:grid-cols-3 gap-4">
                {fsCurtisProducts.map((product) => (
                  <figure
                    key={product.name}
                    className="rounded-lg border border-border/50 overflow-hidden bg-secondary/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="aspect-square bg-white flex items-center justify-center p-3">
                      <img src={product.src} alt={product.name} className="max-h-full max-w-full object-contain" loading="lazy" />
                    </div>
                    <figcaption className="p-3 border-t border-border/50">
                      <h4 className="font-semibold text-foreground text-sm">{product.name}</h4>
                      <p className="mt-1 text-muted-foreground text-xs leading-relaxed">{product.desc}</p>
                    </figcaption>
                  </figure>
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
