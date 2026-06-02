import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ilinkLogo from "@/assets/ilink-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/architecture", label: "Architecture" },
  { to: "/footprint", label: "Footprint" },
  { to: "/operations", label: "Operations" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto w-[min(1200px,94%)]">
        <nav
          className={cn(
            "flex items-center justify-between gap-4 rounded-2xl px-5 py-3",
            "glass-strong",
          )}
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-cyan to-accent-blue shadow-lg shadow-accent-blue/30">
              <span className="font-display text-lg font-bold text-primary-foreground">i</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-base font-semibold tracking-tight">
                iLink <span className="text-accent-cyan">Global</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Holdings
              </div>
            </div>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{
                    className:
                      "rounded-lg px-3 py-2 text-sm text-foreground bg-white/5 ring-1 ring-accent-cyan/40 shadow-[0_0_20px_-5px_var(--accent-cyan)]",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="hidden rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-accent-blue/30 transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Get in Touch
          </Link>

          <button
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="glass-strong mt-2 rounded-2xl p-3 md:hidden">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{
                      className:
                        "block rounded-lg px-3 py-2.5 text-sm text-foreground bg-white/5",
                    }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
