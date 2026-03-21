import { Shield, Truck, Users, Clock, Zap, Wrench } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const features = [
  { icon: Shield, title: "Best Quality Material", desc: "Premium components sourced from leading global manufacturers for maximum durability.", featured: true },
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock support ensures your compressed air systems never skip a beat.", featured: true },
  { icon: Truck, title: "Rental Compressors", desc: "Flexible rental units available to keep your operations running during downtime.", featured: false },
  { icon: Users, title: "Trained Engineers", desc: "Factory-certified technicians with deep expertise across all compressor brands.", featured: false },
  { icon: Zap, title: "Quick Response", desc: "Rapid on-site response times to minimize disruption to your production.", featured: false },
  { icon: Wrench, title: "Service Availability", desc: "Comprehensive AMC & CMC contracts with scheduled preventive maintenance.", featured: false },
];

const WhyChooseUs = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`max-w-xl mb-14 ${visible ? "animate-slide-from-left" : "opacity-0"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            Engineered for Reliability
          </h2>
          <div className="mt-1 h-1 w-16 bg-accent rounded-full" style={visible ? { animation: "draw-line 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards", animationDelay: "300ms" } : { width: 0 }} />
          <p className="mt-5 text-muted-foreground">
            Industry-leading products paired with a service culture built on trust, speed, and deep technical know-how.
          </p>
        </div>

        {/* Featured cards - wider */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {features.filter(f => f.featured).map((f, i) => (
            <div
              key={f.title}
              className={`bg-card rounded-lg p-7 shadow-sm border-l-4 border-accent hover:shadow-md hover:-translate-y-1 transition-all duration-300 group ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <f.icon className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{f.title}</h3>
                  <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Regular cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.filter(f => !f.featured).map((f, i) => (
            <div
              key={f.title}
              className={`bg-card rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i + 2) * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <f.icon className="text-primary" size={20} />
              </div>
              <h3 className="font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
