import { createFileRoute } from "@tanstack/react-router";
import PageShell from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { Mail, Globe, MapPin, MessageCircle } from "lucide-react";
import { useState, useRef, forwardRef } from "react";
import hqImg from "@/assets/photos/contact-hq.jpg.asset.json";

const WA_NUMBER = "255765658595";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — iLink Global" },
      {
        name: "description",
        content:
          "Get in touch with iLink Global Holdings. Email info@ilinkbiz.com or visit our headquarters at Vision Arcade Executive Suites, Kigali, Rwanda.",
      },
      { property: "og:url", content: "https://global.ilinkbiz.com/contact" },
      { property: "og:title", content: "Contact — iLink Global" },
      {
        property: "og:description",
        content: "Reach iLink Global Holdings — info@ilinkbiz.com · Kigali, Rwanda.",
      },
      { name: "twitter:title", content: "Contact — iLink Global" },
      {
        name: "twitter:description",
        content: "Reach iLink Global Holdings — info@ilinkbiz.com · Kigali, Rwanda.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://global.ilinkbiz.com/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const orgRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const org = orgRef.current?.value || "";
    const subject = subjectRef.current?.value || "";
    const message = messageRef.current?.value || "";

    const text = [
      `*New iLink Global Inquiry*`,
      ``,
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      org ? `*Organization:* ${org}` : null,
      `*Subject:* ${subject}`,
      ``,
      `*Message:*`,
      message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSent(true);
  }

  return (
    <PageShell>
      <section className="px-4">
        <div className="mx-auto w-[min(1100px,94%)] py-12 md:py-20">
          <div className="reveal max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-cyan">
              Contact
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl md:text-6xl">
              Let's <span className="text-gradient">build the ecosystem</span> together.
            </h1>
            <p className="mt-5 text-muted-foreground">
              Whether you're an investor, partner, government or future
              operator — reach out and a member of our international team will
              respond within two business days.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <GlassCard strong className="overflow-hidden !p-0">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={hqImg.url}
                    alt="iLink Global headquarters in Kigali"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  
                </div>
                <div className="flex items-start gap-3 p-6">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-cyan/15 text-accent-cyan ring-1 ring-accent-cyan/30">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-accent-cyan">
                      Headquarters
                    </div>
                    <div className="mt-1 font-display text-base font-semibold">
                      Vision Arcade Executive Suites
                    </div>
                    <div className="text-sm text-muted-foreground">Kigali, Rwanda</div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-cyan/15 text-accent-cyan ring-1 ring-accent-cyan/30">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-accent-cyan">
                      Email
                    </div>
                    <a
                      href="mailto:info@ilinkbiz.com"
                      className="mt-1 block font-display text-base font-semibold hover:text-accent-cyan"
                    >
                      info@ilinkbiz.com
                    </a>
                  </div>
                </div>
              </GlassCard>

              <GlassCard>
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-cyan/15 text-accent-cyan ring-1 ring-accent-cyan/30">
                    <Globe size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-accent-cyan">
                      Web
                    </div>
                    <a
                      href="https://global.ilinkbiz.com"
                      className="mt-1 block font-display text-base font-semibold hover:text-accent-cyan"
                    >
                      global.ilinkbiz.com
                    </a>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Form */}
            <GlassCard strong hover={false}>
              {sent ? (
                <div className="grid place-items-center py-16 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-blue text-primary-foreground shadow-[0_0_30px_var(--accent-cyan)]">
                    <MessageCircle size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold">WhatsApp opened!</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Your prefilled message has been opened in WhatsApp. Just hit send!
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm text-accent-cyan hover:text-foreground"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" name="name" ref={nameRef} required />
                    <Field label="Email" name="email" type="email" ref={emailRef} required />
                  </div>
                  <Field label="Organization" name="org" ref={orgRef} />
                  <Field label="Subject" name="subject" ref={subjectRef} required />
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      ref={messageRef}
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-accent-cyan/40 transition focus-visible:border-accent-cyan focus-visible:ring-2"
                      placeholder="Tell us about your interest in the iLink Global ecosystem…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-accent-blue/30 transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
                  >
                    Send via WhatsApp <MessageCircle size={16} />
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

const Field = forwardRef<
  HTMLInputElement,
  { label: string; name: string; type?: string; required?: boolean }
>(function Field({ label, name, type = "text", required }, ref) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        ref={ref}
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-accent-cyan/40 transition focus-visible:border-accent-cyan focus-visible:ring-2"
      />
    </div>
  );
});
