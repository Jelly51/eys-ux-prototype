import { Link } from "react-router";
import { articles } from "../data";

const categories = ["All", "Restaurants", "Platforms", "Media"];

export default function Articles() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      {/* Header */}
      <div className="rule-bottom pb-8 mb-12">
        <p
          className="font-mono-label text-[10px] tracking-[0.22em] uppercase mb-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          Eat Your Screen
        </p>
        <h1
          className="text-4xl md:text-5xl font-medium"
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}
        >
          Articles
        </h1>
      </div>

      {/* Article list */}
      <div className="space-y-0">
        {articles.map((article, i) => (
          <article
            key={article.slug}
            className="grid grid-cols-12 gap-6 py-8 rule-bottom hover:opacity-90 transition-opacity group"
          >
            <div className="col-span-12 md:col-span-1">
              <span
                className="font-mono-label text-[9px] tracking-widest"
                style={{ color: "var(--muted-foreground)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="col-span-12 md:col-span-2">
              <span
                className="font-mono-label text-[10px] tracking-widest"
                style={{ color: "var(--muted-foreground)" }}
              >
                {article.date}
              </span>
            </div>
            <div className="col-span-12 md:col-span-9">
              <p
                className="font-mono-label text-[10px] tracking-[0.15em] uppercase mb-2"
                style={{ color: "var(--accent)" }}
              >
                {article.category}
              </p>
              <Link to={`/articles/${article.slug}`}>
                <h2
                  className="text-xl md:text-2xl font-medium mb-2 group-hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.25 }}
                >
                  {article.title}
                </h2>
              </Link>
              <p
                className="text-sm leading-relaxed mb-3 max-w-2xl"
                style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
              >
                {article.subtitle}
              </p>
              <Link
                to={`/articles/${article.slug}`}
                className="font-mono-label text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity"
                style={{ color: "var(--foreground)" }}
              >
                Read — {article.readTime} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
