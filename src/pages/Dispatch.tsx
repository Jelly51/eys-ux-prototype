import { useState } from "react";
import WireframeBlock from "../components/WireframeBlock";

const sections = [
  {
    num: "01",
    label: "The Main Read",
    description: "A sample chapter from the book in progress, with a link to read the full thing.",
    example: "This week: the opening of Chapter 01. On photographing dinner before eating it, and what that cost appetite.",
  },
  {
    num: "02",
    label: "Three Plates",
    description: "Three curated ideas, stories, or observations, sequenced intentionally.",
    example: "A Tokyo ramen shop that bans photography. A Substack on sourdough as a proxy for anxieties about time. A 1974 essay on garlic.",
  },
  {
    num: "03",
    label: "Five Open Tabs",
    description: "Browser holdovers from the week — links I saved and didn't want to lose.",
    example: "The Wayback Machine page for a defunct delivery startup. A paper on how ambient scent affects menu choice. A recipe I will probably never cook.",
  },
  {
    num: "04",
    label: "One Record",
    description: "A kitchen listening recommendation — for cooking, for eating, for both.",
    example: "Haruomi Hosono, <em>Watering a Flower</em> (1984). Ambient music that makes pasta feel intentional.",
  },
  {
    num: "05",
    label: "One Object",
    description: "A tool or vessel earning its counter space.",
    example: "The Kuhn Rikon peeler. Thirty years old, still the only one that works correctly.",
  },
];

export default function Dispatch() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      {/* Header */}
      <div className="rule-bottom pb-10 mb-12">
        <p
          className="font-mono-label text-[10px] tracking-[0.22em] uppercase mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          Weekly · Free
        </p>
        <h1
          className="text-4xl md:text-5xl font-medium mb-5"
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
        >
          The Dispatch
        </h1>
        <p
          className="text-base leading-relaxed max-w-xl"
          style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
        >
          Five sections, every Thursday. A book excerpt, curated stories, browser tabs worth keeping, a kitchen record, and one object worth knowing.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-0 mb-16">
        {sections.map((sec) => (
          <div key={sec.num} className="grid grid-cols-12 gap-6 py-8 rule-bottom">
            <div className="col-span-12 md:col-span-1">
              <span
                className="font-mono-label text-[10px] tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                {sec.num}
              </span>
            </div>
            <div className="col-span-12 md:col-span-4">
              <h3
                className="text-lg font-medium"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {sec.label}
              </h3>
              <p
                className="text-sm mt-1 leading-relaxed"
                style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
              >
                {sec.description}
              </p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div
                className="p-4"
                style={{ backgroundColor: "var(--card)", borderLeft: "1px solid var(--border)" }}
              >
                <p
                  className="font-mono-label text-[9px] tracking-widest uppercase mb-2"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Recent example
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontStyle: "italic", fontWeight: 300 }}
                  dangerouslySetInnerHTML={{ __html: sec.example }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Illustration — appetite series context */}
      <div className="mb-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-5">
          <WireframeBlock
            label="Illustration · Appetite series — dispatch"
            caption="From the appetite series — twelve drawings, one a month."
            aspect="aspect-square"
          />
        </div>
        <div className="md:col-span-7 flex items-center">
          <div>
            <p
              className="font-mono-label text-[9px] tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--accent)" }}
            >
              Original illustration
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ fontStyle: "italic", fontWeight: 300 }}
            >
              Each dispatch includes an original illustration from the appetite series — twelve drawings published over twelve months, one per issue.
            </p>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2
            className="text-2xl md:text-3xl font-medium mb-4"
            style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}
          >
            Subscribe free.
            <br />
            <em>Read it Thursday.</em>
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
          >
            No spam. No algorithm. No pitch deck.
            Just five good things, once a week.
          </p>
        </div>
        <div>
          {submitted ? (
            <div
              className="p-6"
              style={{ backgroundColor: "var(--card)", borderLeft: "2px solid var(--accent)" }}
            >
              <p
                className="font-mono-label text-[10px] tracking-widest uppercase mb-2"
                style={{ color: "var(--accent)" }}
              >
                Subscribed
              </p>
              <p className="text-sm" style={{ fontWeight: 300 }}>
                You'll receive the next dispatch on Thursday.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 text-sm outline-none font-mono-label tracking-wide"
                style={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity font-mono-label tracking-widest uppercase"
                style={{
                  backgroundColor: "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                Subscribe
              </button>
              <p
                className="font-mono-label text-[9px] tracking-widest uppercase"
                style={{ color: "var(--muted-foreground)" }}
              >
                Free · Unsubscribe anytime
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
