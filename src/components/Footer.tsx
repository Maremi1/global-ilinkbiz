import { Link } from "@tanstack/react-router";
import { Mail, Globe, MapPin } from "lucide-react";
import ilinkLogo from "@/assets/ilink-logo.png.asset.json";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 px-4 pb-10">
      <div className="mx-auto w-[min(1200px,94%)]">
        <div className="glass-strong rounded-2xl p-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <img src={ilinkLogo.url} alt="iLink Global" className="h-10 w-auto" />
              </div>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                Structuring a global ecosystem across knowledge, trade,
                infrastructure and capital — from Rwanda to the world.
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold">Explore</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/architecture" className="hover:text-accent-cyan">Architecture</Link></li>
                <li><Link to="/footprint" className="hover:text-accent-cyan">Footprint</Link></li>
                <li><Link to="/operations" className="hover:text-accent-cyan">Operations</Link></li>
                <li><Link to="/contact" className="hover:text-accent-cyan">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Mail size={14} className="mt-0.5 text-accent-cyan" />
                  <a href="mailto:info@ilinkbiz.com" className="hover:text-accent-cyan">info@ilinkbiz.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <Globe size={14} className="mt-0.5 text-accent-cyan" />
                  <a href="https://global.ilinkbiz.com" className="hover:text-accent-cyan">global.ilinkbiz.com</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 text-accent-cyan" />
                  <span>Vision Arcade, Kigali, Rwanda</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted-foreground sm:flex-row">
            <span>© {new Date().getFullYear()} iLink Global Holdings. All rights reserved.</span>
            <span>Headquartered in Kigali · Operating across Africa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
