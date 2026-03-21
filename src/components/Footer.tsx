import { Linkedin, Instagram, Facebook } from "lucide-react";

const sections = [
  { title: "Company", links: ["About Us", "Our Team", "Contact"] },
  { title: "Products", links: ["Screw Compressors", "Air Dryers", "Air Piping", "Spare Parts"] },
  { title: "Services", links: ["Maintenance", "Air Audits", "Rentals", "AMC/CMC"] },
];

const Footer = () => {
  const handleClick = (label: string) => {
    const map: Record<string, string> = {
      "About Us": "#about", "Our Team": "#team", "Contact": "#contact",
      "Screw Compressors": "#products", "Air Dryers": "#products", "Air Piping": "#products", "Spare Parts": "#products",
      "Maintenance": "#services", "Air Audits": "#services", "Rentals": "#services", "AMC/CMC": "#services",
    };
    document.querySelector(map[label] || "#home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-accent flex items-center justify-center font-black text-accent-foreground text-base">M</div>
              <span className="font-bold text-lg">MechAir Dynamics</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your trusted partner for industrial compressed air solutions, service, and support.
            </p>
            <div className="flex gap-3 mt-5">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-md bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/80">{s.title}</h4>
              <ul className="space-y-2.5">
                {s.links.map((link) => (
                  <li key={link}>
                    <button onClick={() => handleClick(link)} className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-primary-foreground/40 text-sm">
          <p>© {new Date().getFullYear()} MechAir Dynamics. All rights reserved.</p>
          <p>New Delhi, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
