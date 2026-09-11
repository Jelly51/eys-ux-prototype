export default function Listen() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      <div className="rule-bottom pb-8 mb-12">
        <p
          className="font-mono-label text-[10px] tracking-[0.22em] uppercase mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          Coming soon
        </p>
        <h1
          className="text-4xl md:text-5xl font-medium"
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
        >
          Listen
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <p
            className="text-lg leading-relaxed mb-6"
            style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
          >
            A podcast extension of Eat Your Screen. Conversations about food, media, and the interfaces between them. Episode 01 is in production.
          </p>
          <p
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
          >
            The podcast will be delivered through the weekly dispatch first — subscribe to hear it before it lands anywhere else.
          </p>

          <div
            className="p-6"
            style={{ backgroundColor: "var(--card)", borderLeft: "2px solid var(--accent)" }}
          >
            <p
              className="font-mono-label text-[9px] tracking-widest uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              Episode 01 — In production
            </p>
            <h3
              className="text-xl font-medium mb-3"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            >
              TBC
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
            >
              First episode guest and subject to be announced via the weekly dispatch. Subscribe to be the first to hear it.
            </p>
            <div
              className="flex items-center gap-4 py-3 px-4"
              style={{ backgroundColor: "var(--secondary)", opacity: 0.7 }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--muted-foreground)" }}
              >
                <span className="text-xs" style={{ color: "var(--background)" }}>▶</span>
              </div>
              <div>
                <p
                  className="font-mono-label text-[9px] tracking-widest uppercase"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Not yet available
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div
            className="p-6"
            style={{ backgroundColor: "var(--card)" }}
          >
            <p
              className="font-mono-label text-[9px] tracking-widest uppercase mb-5"
              style={{ color: "var(--muted-foreground)" }}
            >
              What to expect
            </p>
            <div className="space-y-5">
              {[
                ["Format", "Conversations. Monologues. Field recordings. No fixed format — whatever serves the idea."],
                ["Length", "Probably 30–60 minutes. No filler."],
                ["Frequency", "Whenever there's something worth saying. Loosely monthly."],
                ["Where", "Via the weekly dispatch first. Then Spotify, Apple, everywhere else."],
              ].map(([label, text]) => (
                <div key={label} className="rule-bottom pb-4 last:border-0 last:pb-0">
                  <p
                    className="font-mono-label text-[9px] tracking-widest uppercase mb-1"
                    style={{ color: "var(--accent)" }}
                  >
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
