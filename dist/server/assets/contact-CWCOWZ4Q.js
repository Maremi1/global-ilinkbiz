import { jsx, jsxs } from "react/jsx-runtime";
import { P as PageShell, G as GlassCard } from "./GlassCard-BgNO7gEJ.js";
import { MapPin, Mail, Globe, MessageCircle } from "lucide-react";
import { useState, useRef, forwardRef } from "react";
import "@tanstack/react-router";
import "clsx";
import "tailwind-merge";
const url = "/__l5e/assets-v1/1b526657-d36d-4a2b-9e38-5636fa663a4d/contact-hq.jpg";
const hqImg = {
  url
};
const WA_NUMBER = "255765658595";
function ContactPage() {
  const [sent, setSent] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const orgRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const org = orgRef.current?.value || "";
    const subject = subjectRef.current?.value || "";
    const message = messageRef.current?.value || "";
    const text = [`*New iLink Global Inquiry*`, ``, `*Name:* ${name}`, `*Email:* ${email}`, org ? `*Organization:* ${org}` : null, `*Subject:* ${subject}`, ``, `*Message:*`, message].filter((l) => l !== null).join("\n");
    const url2 = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url2, "_blank");
    setSent(true);
  }
  return /* @__PURE__ */ jsx(PageShell, { children: /* @__PURE__ */ jsx("section", { className: "px-4", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-[min(1100px,94%)] py-12 md:py-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "reveal max-w-2xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-accent-cyan", children: "Contact" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-3 font-display text-4xl font-bold sm:text-5xl md:text-6xl", children: [
        "Let's ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "build the ecosystem" }),
        " together."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground", children: "Whether you're an investor, partner, government or future operator — reach out and a member of our international team will respond within two business days." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 grid gap-6 lg:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs(GlassCard, { strong: true, className: "overflow-hidden !p-0", children: [
          /* @__PURE__ */ jsx("div", { className: "relative h-44 overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: hqImg.url, alt: "iLink Global headquarters in Kigali", loading: "lazy", className: "h-full w-full object-cover" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-accent-cyan/15 text-accent-cyan ring-1 ring-accent-cyan/30", children: /* @__PURE__ */ jsx(MapPin, { size: 18 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent-cyan", children: "Headquarters" }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 font-display text-base font-semibold", children: "Vision Arcade Executive Suites" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "Kigali, Rwanda" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(GlassCard, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-accent-cyan/15 text-accent-cyan ring-1 ring-accent-cyan/30", children: /* @__PURE__ */ jsx(Mail, { size: 18 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent-cyan", children: "Email" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@ilinkbiz.com", className: "mt-1 block font-display text-base font-semibold hover:text-accent-cyan", children: "info@ilinkbiz.com" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(GlassCard, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-xl bg-accent-cyan/15 text-accent-cyan ring-1 ring-accent-cyan/30", children: /* @__PURE__ */ jsx(Globe, { size: 18 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent-cyan", children: "Web" }),
            /* @__PURE__ */ jsx("a", { href: "https://global.ilinkbiz.com", className: "mt-1 block font-display text-base font-semibold hover:text-accent-cyan", children: "global.ilinkbiz.com" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(GlassCard, { strong: true, hover: false, children: sent ? /* @__PURE__ */ jsxs("div", { className: "grid place-items-center py-16 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-blue text-primary-foreground shadow-[0_0_30px_var(--accent-cyan)]", children: /* @__PURE__ */ jsx(MessageCircle, { size: 20 }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-xl font-semibold", children: "WhatsApp opened!" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-sm text-sm text-muted-foreground", children: "Your prefilled message has been opened in WhatsApp. Just hit send!" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setSent(false), className: "mt-6 text-sm text-accent-cyan hover:text-foreground", children: "Send another message" })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx(Field, { label: "Full name", name: "name", ref: nameRef, required: true }),
          /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", ref: emailRef, required: true })
        ] }),
        /* @__PURE__ */ jsx(Field, { label: "Organization", name: "org", ref: orgRef }),
        /* @__PURE__ */ jsx(Field, { label: "Subject", name: "subject", ref: subjectRef, required: true }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { ref: messageRef, name: "message", required: true, rows: 5, className: "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-accent-cyan/40 transition focus-visible:border-accent-cyan focus-visible:ring-2", placeholder: "Tell us about your interest in the iLink Global ecosystem…" })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "submit", className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-accent-blue/30 transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto", children: [
          "Send via WhatsApp ",
          /* @__PURE__ */ jsx(MessageCircle, { size: 16 })
        ] })
      ] }) })
    ] })
  ] }) }) });
}
const Field = forwardRef(function Field2({
  label,
  name,
  type = "text",
  required
}, ref) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: name, className: "mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("input", { ref, id: name, name, type, required, className: "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none ring-accent-cyan/40 transition focus-visible:border-accent-cyan focus-visible:ring-2" })
  ] });
});
export {
  ContactPage as component
};
