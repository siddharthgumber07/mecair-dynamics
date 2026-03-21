import { useState, type FormEvent } from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";
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
    <section id="contact" className="py-24 lg:py-32">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className={`grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto ${visible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Dark info panel */}
          <div className="lg:col-span-2 bg-primary text-primary-foreground rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Let's Get in Touch</h2>
            <p className="text-primary-foreground/60 text-sm mb-8">
              Ready to optimize your compressed air system? Our team responds within hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-accent" size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-primary-foreground/80">Email</h4>
                  <a href="mailto:mechairdynamics@gmail.com" className="text-primary-foreground text-sm hover:text-accent transition-colors">
                    mechairdynamics@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-accent" size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-primary-foreground/80">Ashish Kumar — Service</h4>
                  <a href="tel:+919999999999" className="text-primary-foreground text-sm hover:text-accent transition-colors">
                    +91 99999 99999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-accent" size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-primary-foreground/80">Ankit Kalshania — Sales</h4>
                  <a href="tel:+919999999998" className="text-primary-foreground text-sm hover:text-accent transition-colors">
                    +91 99999 99998
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-accent" size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-sm text-primary-foreground/80">Location</h4>
                  <p className="text-primary-foreground/70 text-sm">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 bg-card rounded-lg p-7 shadow-sm border border-border/50 space-y-5">
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
