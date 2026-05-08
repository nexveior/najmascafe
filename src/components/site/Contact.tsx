import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs">
            Visit us
          </div>
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
            Find your way to <span className="text-gradient-primary">Najmas</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Walk in for a fresh juice or call ahead for takeaway.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden glass-strong min-h-[420px]">
            <iframe
              title="Najmas Juice World location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.8321203583005!2d76.07499167413759!3d10.670135661147132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bfdb5a2f6e1f%3A0xb56cd618131d80c6!2sNajmas%20juice%20world!5e0!3m2!1sen!2sin!4v1778157743842!5m2!1sen!2sin"
              className="h-full w-full min-h-[420px] border-0 grayscale-[0.4] contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-2 grid gap-4">
            <div className="glass-strong rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Address</div>
                  <div className="font-semibold">Parempadam, Thrissur, Kerala</div>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-3xl p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-lime/20 text-lime">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Opening hours</div>
                  <div className="font-semibold">Mon — Sun · 10:30 AM — 10:00 PM</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground px-5 py-4 font-semibold btn-glow"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Chowwannur+Kerala"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl glass-strong px-5 py-4 font-semibold hover:bg-white/5"
              >
                <Navigation className="h-4 w-4" /> Directions
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-lime text-lime-foreground px-5 py-4 font-semibold hover:shadow-lime-glow transition-shadow"
              >
                <MessageCircle className="h-4 w-4" /> Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
