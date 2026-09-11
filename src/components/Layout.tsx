import { NavLink, Outlet, useLocation } from "react-router";
import { useState } from "react";

const navLinks = [
  { to: "/dispatch", label: "Dispatch" },
  { to: "/book", label: "Book" },
  { to: "/articles", label: "Articles" },
  { to: "/listen", label: "Listen" },
  { to: "/reading", label: "Reading" },
  { to: "/archive", label: "Archive" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      {/* Top bar */}
      <header className="rule-bottom sticky top-0 z-50" style={{ backgroundColor: "var(--background)" }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 leading-none group">
            {/* Logomark */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              {/* Screen rectangle */}
              <rect
                x="3" y="7" width="30" height="20"
                rx="1"
                stroke="var(--foreground)"
                strokeWidth="1.5"
                fill="none"
              />
              {/* Screen stand */}
              <line x1="13" y1="27" x2="23" y2="27" stroke="var(--foreground)" strokeWidth="1.5" />
              <line x1="18" y1="27" x2="18" y2="31" stroke="var(--foreground)" strokeWidth="1.5" />
              <line x1="12" y1="31" x2="24" y2="31" stroke="var(--foreground)" strokeWidth="1.5" />
              {/* Fork inside screen */}
              <line x1="13" y1="12" x2="13" y2="22" stroke="var(--accent)" strokeWidth="1.25" />
              <line x1="13" y1="12" x2="13" y2="15" stroke="var(--accent)" strokeWidth="1.25" />
              <path d="M11 12 L11 15 Q13 17 15 15 L15 12" stroke="var(--accent)" strokeWidth="1.1" fill="none" />
              {/* Knife inside screen */}
              <line x1="19" y1="12" x2="19" y2="22" stroke="var(--accent)" strokeWidth="1.25" />
              <path d="M19 12 L23 15 L19 17" stroke="var(--accent)" strokeWidth="1.1" fill="none" />
            </svg>

            <div className="flex flex-col">
              <span
                className="font-mono-label text-[9px] tracking-[0.2em] uppercase"
                style={{ color: "var(--muted-foreground)" }}
              >
                Gavin James White
              </span>
              <span
                className="text-lg font-semibold tracking-tight leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Eat Your Screen
              </span>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `font-mono-label text-[11px] tracking-[0.14em] uppercase transition-colors ${
                    isActive
                      ? "border-b"
                      : "hover:opacity-70"
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? "var(--accent)" : "var(--foreground)",
                  borderColor: isActive ? "var(--accent)" : undefined,
                  paddingBottom: isActive ? "1px" : undefined,
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden font-mono-label text-[11px] tracking-widest uppercase"
            style={{ color: "var(--muted-foreground)" }}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden rule-top" style={{ backgroundColor: "var(--card)" }}>
            <nav className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono-label text-[12px] tracking-[0.16em] uppercase"
                  style={{ color: "var(--foreground)" }}
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="rule-top mt-24" style={{ backgroundColor: "var(--card)" }}>
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              className="text-base font-medium mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Eat Your Screen
            </p>
            <p
              className="font-mono-label text-[10px] tracking-widest uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              Food, the feed and what's still worth eating.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <p
              className="font-mono-label text-[10px] tracking-widest uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              Gavin James White · London
            </p>
            <p
              className="font-mono-label text-[10px] tracking-widest uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              © 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
