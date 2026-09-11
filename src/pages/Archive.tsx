import { Link } from "react-router";
import { articles, bookChapters } from "../data";

export default function Archive() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      <div className="rule-bottom pb-8 mb-12">
        <p
          className="font-mono-label text-[10px] tracking-[0.22em] uppercase mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          Complete record
        </p>
        <h1
          className="text-4xl md:text-5xl font-medium"
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
        >
          Archive
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Articles */}
        <section className="md:col-span-7">
          <h2
            className="font-mono-label text-[10px] tracking-[0.2em] uppercase mb-6"
            style={{ color: "var(--muted-foreground)" }}
          >
            Articles — {articles.length}
          </h2>
          <div className="space-y-0">
            {articles.map((article) => (
              <div key={article.slug} className="rule-bottom py-5 group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className="font-mono-label text-[9px] tracking-[0.15em] uppercase"
                        style={{ color: "var(--accent)" }}
                      >
                        {article.category}
                      </span>
                      <span
                        className="font-mono-label text-[9px] tracking-widest"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {article.date}
                      </span>
                    </div>
                    <Link
                      to={`/articles/${article.slug}`}
                      className="text-base font-medium hover:opacity-70 transition-opacity"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {article.title}
                    </Link>
                  </div>
                  <span
                    className="font-mono-label text-[9px] tracking-widest shrink-0 mt-1"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {article.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Book */}
        <section className="md:col-span-5">
          <h2
            className="font-mono-label text-[10px] tracking-[0.2em] uppercase mb-6"
            style={{ color: "var(--muted-foreground)" }}
          >
            Book Chapters
          </h2>
          <div className="space-y-0">
            {bookChapters.map((ch) => (
              <div
                key={ch.slug}
                className="py-5 rule-bottom"
                style={{ opacity: ch.status === "upcoming" ? 0.45 : 1 }}
              >
                <div className="flex items-baseline gap-3 mb-1">
                  <span
                    className="font-mono-label text-[9px] tracking-widest"
                    style={{ color: "var(--accent)" }}
                  >
                    Ch. {ch.number}
                  </span>
                  <span
                    className="font-mono-label text-[9px] tracking-widest uppercase"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {ch.status === "upcoming" ? "Forthcoming" : "Published"}
                  </span>
                </div>
                {ch.status === "published" ? (
                  <Link
                    to="/book"
                    className="text-sm font-medium hover:opacity-70 transition-opacity"
                    style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
                  >
                    {ch.title}
                  </Link>
                ) : (
                  <p
                    className="text-sm font-medium"
                    style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
                  >
                    {ch.title}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div
            className="mt-10 p-5"
            style={{ backgroundColor: "var(--card)" }}
          >
            <p
              className="font-mono-label text-[9px] tracking-widest uppercase mb-3"
              style={{ color: "var(--muted-foreground)" }}
            >
              About
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ fontWeight: 300 }}
            >
              Eat Your Screen is a cultural publication by Gavin James White, published from London since 2026.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
