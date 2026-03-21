import { Shield, Truck, Users, Clock, Zap, Wrench } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";

const features = [
  { icon: Shield, title: "Best Quality Material", desc: "Premium components sourced from leading global manufacturers for maximum durability." },
  { icon: Truck, title: "Rental Compressors", desc: "Flexible rental units available to keep your operations running during downtime." },
  { icon: Users, title: "Trained Engineers", desc: "Factory-certified technicians with deep expertise across all compressor brands." },
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock support ensures your compressed air systems never skip a beat." },
  { icon: Zap, title: "Quick Response", desc: "Rapid on-site response times to minimize disruption to your production." },
  { icon: Wrench, title: "Service Availability", desc: "Comprehensive AMC & CMC contracts with scheduled preventive maintenance." },
];

const WhyChooseUs = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">Why Choose Us</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            Engineered for Reliability
          </h2>
          <p className="mt-4 text-muted-foreground">
            We combine industry-leading products with a service culture built on trust, speed, and deep technical expertise.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group ${
                visible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <f.icon className="text-accent" size={22} />
              </div>
              <h3 className="font-semibold text-foreground text-lg">{f.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
