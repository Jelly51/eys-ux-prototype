import { useState } from "react";
import { Link } from "react-router";
import { bookChapters } from "../data";
import WireframeBlock from "../components/WireframeBlock";

export default function Book() {
  const [activeChapter, setActiveChapter] = useState(bookChapters[0]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      {/* Header */}
      <div className="rule-bottom pb-8 mb-12">
        <p
          className="font-mono-label text-[10px] tracking-[0.22em] uppercase mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          Written in public · Monthly chapters
        </p>
        <h1
          className="text-4xl md:text-5xl font-medium mb-4"
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
        >
          Eat Your Screen
          <br />
          <em>The Book</em>
        </h1>
        <p
          className="text-base leading-relaxed max-w-xl"
          style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
        >
          A book about how digital media shapes food desire, written and published here one chapter per month. Free to read. Full audio included.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Chapter list */}
        <aside className="md:col-span-3">
          <p
            className="font-mono-label text-[9px] tracking-widest uppercase mb-5"
            style={{ color: "var(--muted-foreground)" }}
          >
            Chapters
          </p>
          <div className="space-y-1">
            {bookChapters.map((ch) => (
              <button
                key={ch.slug}
                onClick={() => ch.status === "published" && setActiveChapter(ch)}
                disabled={ch.status === "upcoming"}
                className="w-full text-left py-3 px-3 transition-all group"
                style={{
                  backgroundColor: activeChapter.slug === ch.slug ? "var(--card)" : "transparent",
                  borderLeft: activeChapter.slug === ch.slug ? "2px solid var(--accent)" : "2px solid transparent",
                  opacity: ch.status === "upcoming" ? 0.45 : 1,
                  cursor: ch.status === "upcoming" ? "default" : "pointer",
                }}
              >
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-mono-label text-[9px] tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    {ch.number}
                  </span>
                  <span
                    className="text-sm leading-snug"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      color: "var(--foreground)",
                    }}
                  >
                    {ch.title}
                  </span>
                </div>
                {ch.status === "upcoming" && (
                  <p
                    className="font-mono-label text-[9px] tracking-widest uppercase mt-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    Forthcoming
                  </p>
                )}
                {ch.audio && ch.status === "published" && (
                  <p
                    className="font-mono-label text-[9px] tracking-widest uppercase mt-1"
                    style={{ color: "var(--accent)" }}
                  >
                    ♪ Audio
                  </p>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Chapter content */}
        <div className="md:col-span-9">
          {activeChapter.status === "published" ? (
            <>
              {/* Chapter header illustration */}
              <div className="mb-8">
                <WireframeBlock
                  label={`Illustration · Ch. ${activeChapter.number}`}
                  caption={`Chapter ${activeChapter.number} — drawn for this book, never stock, never reused.`}
                  aspect="aspect-[16/7]"
                />
              </div>

              <div className="rule-bottom pb-8 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="font-mono-label text-[10px] tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    Ch. {activeChapter.number}
                  </span>
                  {activeChapter.audio && (
                    <span
                      className="font-mono-label text-[10px] tracking-widest uppercase"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      ♪ Audio available
                    </span>
                  )}
                </div>
                <h2
                  className="text-3xl md:text-4xl font-medium mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.15 }}
                >
                  {activeChapter.title}
                </h2>
                <p
                  className="text-base"
                  style={{ color: "var(--secondary-foreground)", fontStyle: "italic", fontWeight: 300 }}
                >
                  {activeChapter.subtitle}
                </p>
              </div>

              <div className="space-y-6">
                {activeChapter.body.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg leading-[1.85]"
                    style={{ fontWeight: 300 }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-start justify-center py-20">
              <p
                className="font-mono-label text-[10px] tracking-widest uppercase mb-4"
                style={{ color: "var(--muted-foreground)" }}
              >
                In progress
              </p>
              <h2
                className="text-2xl font-medium mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
              >
                {activeChapter.title}
              </h2>
              <p
                className="text-sm leading-relaxed mb-8"
                style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
              >
                This chapter is still being written. Subscribe to the weekly dispatch to be notified when it publishes.
              </p>
              <Link
                to="/dispatch"
                className="font-mono-label text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity"
                style={{ color: "var(--accent)" }}
              >
                Subscribe to dispatch →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
