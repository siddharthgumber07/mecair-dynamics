import heroImg from "@/assets/hero-compressor.jpg";
import { ArrowRight, Headphones } from "lucide-react";

const stats = [
  { value: "500+", label: "Installations" },
  { value: "24/7", label: "Support" },
  { value: "98%", label: "Uptime" },
];

const Hero = () => (
  <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
    <img
      src={heroImg}
      alt="Industrial air compressor facility"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[hsl(var(--industrial-dark))] opacity-60" />
    {/* Subtle noise texture */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

    <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
      <div className="max-w-2xl">
        <div
          className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 opacity-0 animate-slide-from-left"
        >
          <Headphones size={15} className="text-accent" />
          <span className="text-accent text-sm font-medium tracking-wide">24/7 Emergency Support</span>
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight text-balance opacity-0 animate-slide-from-left"
          style={{ animationDelay: "120ms", lineHeight: "1.1" }}
        >
          Reliable Compressed Air Solutions & Expert Service
        </h1>

        <p
          className="mt-6 text-lg text-white/65 max-w-lg leading-relaxed opacity-0 animate-slide-from-left"
          style={{ animationDelay: "240ms" }}
        >
          High-performance compressors, air treatment systems, and round-the-clock maintenance — engineered for your uptime.
        </p>

        <div
          className="mt-9 flex flex-col sm:flex-row gap-3 opacity-0 animate-slide-from-left"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="bg-accent hover:bg-[hsl(var(--orange-hover))] text-accent-foreground px-7 py-3.5 rounded-md font-semibold transition-all active:scale-[0.97] shadow-lg text-base inline-flex items-center gap-2"
          >
            Get a Free Quote
            <ArrowRight size={18} />
          </a>
          <a
            href="#products"
            onClick={(e) => { e.preventDefault(); document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }); }}
            className="border border-white/20 text-white hover:bg-white/10 px-7 py-3.5 rounded-md font-semibold transition-all active:scale-[0.97] text-base"
          >
            Explore Products
          </a>
        </div>
      </div>

      {/* Bottom stat bar */}
      <div
        className="mt-16 lg:mt-24 flex gap-8 md:gap-14 opacity-0 animate-fade-up"
        style={{ animationDelay: "600ms" }}
      >
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            {i > 0 && <div className="w-px h-10 bg-white/15" />}
            <div className={i > 0 ? "pl-3 md:pl-6" : ""}>
              <div className="text-2xl md:text-3xl font-extrabold text-white">{s.value}</div>
              <div className="text-xs text-white/50 uppercase tracking-wider mt-0.5">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
