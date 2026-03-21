import heroImg from "@/assets/hero-compressor.jpg";

const Hero = () => (
  <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Industrial air compressor facility"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[hsl(var(--industrial-dark))/88%]" />
    <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-3xl">
      <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 animate-fade-up">
        <span className="text-accent text-sm font-semibold tracking-wide">Trusted Industrial Partner</span>
      </div>
      <h1
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight text-balance animate-fade-up"
        style={{ animationDelay: "120ms" }}
      >
        Reliable Compressed Air Solutions & 24/7 Expert Service
      </h1>
      <p
        className="mt-6 text-lg text-white/70 max-w-xl mx-auto animate-fade-up"
        style={{ animationDelay: "240ms" }}
      >
        High-performance compressors, air treatment systems, and round-the-clock maintenance — so your business never stops.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center animate-fade-up" style={{ animationDelay: "360ms" }}>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          className="bg-accent hover:bg-[hsl(var(--orange-hover))] text-accent-foreground px-8 py-3.5 rounded-md font-semibold transition-all active:scale-[0.97] shadow-lg text-base"
        >
          Get a Free Quote
        </a>
        <a
          href="#products"
          onClick={(e) => { e.preventDefault(); document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" }); }}
          className="border border-white/25 text-white hover:bg-white/10 px-8 py-3.5 rounded-md font-semibold transition-all active:scale-[0.97] text-base"
        >
          Explore Products
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
