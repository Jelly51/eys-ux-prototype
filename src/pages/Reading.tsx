import { readingList } from "../data";

export default function Reading() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      <div className="rule-bottom pb-8 mb-12">
        <p
          className="font-mono-label text-[10px] tracking-[0.22em] uppercase mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          Curated
        </p>
        <h1
          className="text-4xl md:text-5xl font-medium mb-4"
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
        >
          Reading
        </h1>
        <p
          className="text-base leading-relaxed max-w-xl"
          style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
        >
          Books that bear on the subject. Not a comprehensive bibliography — a personal selection of the things that shaped the thinking.
        </p>
      </div>

      <div className="space-y-0">
        {readingList.map((item, i) => (
          <div
            key={item.title}
            className="grid grid-cols-12 gap-6 py-8 rule-bottom group"
          >
            <div className="col-span-12 md:col-span-1">
              <span
                className="font-mono-label text-[9px] tracking-widest"
                style={{ color: "var(--muted-foreground)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="col-span-12 md:col-span-3">
              <span
                className="font-mono-label text-[9px] tracking-widest uppercase"
                style={{ color: "var(--muted-foreground)" }}
              >
                {item.year}
              </span>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h3
                className="text-lg font-medium mb-1"
                style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
              >
                {item.title}
              </h3>
              <p
                className="font-mono-label text-[10px] tracking-[0.12em] uppercase mb-3"
                style={{ color: "var(--muted-foreground)" }}
              >
                {item.author}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
              >
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 pt-8 rule-top">
        <p
          className="text-sm leading-relaxed max-w-xl"
          style={{ color: "var(--secondary-foreground)", fontStyle: "italic", fontWeight: 300 }}
        >
          This list is updated occasionally. Suggestions are welcome via the weekly dispatch.
        </p>
      </div>
    </div>
  );
}
