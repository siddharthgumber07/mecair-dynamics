import { useState, type FormEvent } from "react";
import { Mail, Phone, Send } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { toast } from "sonner";

const Contact = () => {
  const { ref, visible } = useScrollReveal();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm tracking-wide uppercase">Contact Us</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground tracking-tight text-balance">
            Let's Get in Touch
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ready to optimize your compressed air system? Reach out and our team will respond within hours.
          </p>
        </div>

        <div className={`grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                <Mail className="text-accent" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <a href="mailto:mechairdynamics@gmail.com" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                  mechairdynamics@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="text-accent" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Ashish Kumar</h4>
                <p className="text-muted-foreground text-sm">Service Head</p>
                <a href="tel:+919999999999" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                  +91 99999 99999
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                <Phone className="text-accent" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Ankit Kalshania</h4>
                <p className="text-muted-foreground text-sm">Sales Head</p>
                <a href="tel:+919999999998" className="text-muted-foreground text-sm hover:text-accent transition-colors">
                  +91 99999 99998
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card rounded-lg p-6 shadow-sm border border-border/50 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input required type="text" placeholder="Your name" className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input required type="email" placeholder="you@company.com" className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
              <input type="text" placeholder="How can we help?" className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
              <textarea required rows={4} placeholder="Tell us about your requirements..." className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow resize-none" />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="bg-accent hover:bg-[hsl(var(--orange-hover))] text-accent-foreground px-6 py-2.5 rounded-md font-semibold text-sm transition-all active:scale-[0.97] disabled:opacity-60 flex items-center gap-2"
            >
              <Send size={16} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
