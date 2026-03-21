import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <button onClick={() => handleClick("#home")} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-md bg-accent flex items-center justify-center font-black text-accent-foreground text-lg tracking-tight">
            M
          </div>
          <span className="text-primary-foreground font-bold text-lg tracking-tight">
            MechAir <span className="font-medium opacity-80">Dynamics</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-primary-foreground/80 hover:text-primary-foreground px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10 active:scale-[0.97]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#contact")}
            className="ml-3 bg-accent hover:bg-[hsl(var(--orange-hover))] text-accent-foreground px-5 py-2 rounded-md text-sm font-semibold transition-all active:scale-[0.97] shadow-md"
          >
            Get a Quote
          </button>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-primary-foreground/80 hover:text-primary-foreground px-3 py-3 text-sm font-medium transition-colors rounded-md hover:bg-white/10 text-left"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleClick("#contact")}
              className="mt-2 bg-accent text-accent-foreground px-5 py-3 rounded-md text-sm font-semibold"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
