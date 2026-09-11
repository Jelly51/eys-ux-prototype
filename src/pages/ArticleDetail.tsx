import { useParams, Link } from "react-router";
import { articles } from "../data";
import WireframeBlock from "../components/WireframeBlock";

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        <p
          className="font-mono-label text-[10px] tracking-widest uppercase mb-4"
          style={{ color: "var(--muted-foreground)" }}
        >
          Not found
        </p>
        <Link to="/articles" style={{ color: "var(--accent)" }}>
          ← Back to articles
        </Link>
      </div>
    );
  }

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const next = articles[currentIndex + 1];
  const prev = articles[currentIndex - 1];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Back */}
      <Link
        to="/articles"
        className="font-mono-label text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity mb-12 inline-block"
        style={{ color: "var(--muted-foreground)" }}
      >
        ← Articles
      </Link>

      {/* Article header */}
      <header className="rule-bottom pb-10 mb-12">
        <div className="flex items-center gap-6 mb-5">
          <span
            className="font-mono-label text-[10px] tracking-[0.15em] uppercase"
            style={{ color: "var(--accent)" }}
          >
            {article.category}
          </span>
          <span
            className="font-mono-label text-[10px] tracking-widest"
            style={{ color: "var(--muted-foreground)" }}
          >
            {article.date}
          </span>
          <span
            className="font-mono-label text-[10px] tracking-widest"
            style={{ color: "var(--muted-foreground)" }}
          >
            {article.readTime} read
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl font-medium mb-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          {article.title}
        </h1>

        <p
          className="text-xl leading-relaxed max-w-2xl"
          style={{ color: "var(--secondary-foreground)", fontStyle: "italic", fontWeight: 300 }}
        >
          {article.subtitle}
        </p>
      </header>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <div className="space-y-6">
            {article.body.split("\n\n").map((para, i) => (
              <div key={i}>
                <p
                  className="text-base md:text-lg leading-[1.8]"
                  style={{ fontWeight: 300 }}
                >
                  {para}
                </p>
                {i === 2 && (
                  <WireframeBlock
                    label={`Illustration · ${article.category}`}
                    caption="Commissioned illustration — appetite series."
                    aspect="aspect-[3/2]"
                    className="mt-8"
                  />
                )}
              </div>
            ))}
          </div>

          <div
            className="mt-14 pt-8 rule-top"
          >
            <p
              className="font-mono-label text-[10px] tracking-widest uppercase mb-1"
              style={{ color: "var(--muted-foreground)" }}
            >
              Gavin James White
            </p>
            <p
              className="font-mono-label text-[10px] tracking-widest uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              London · {article.date}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-4 space-y-8">
          <div
            className="p-5 sticky top-24"
            style={{ backgroundColor: "var(--card)", borderLeft: "2px solid var(--accent)" }}
          >
            <p
              className="font-mono-label text-[9px] tracking-widest uppercase mb-4"
              style={{ color: "var(--muted-foreground)" }}
            >
              From Eat Your Screen
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ fontWeight: 300 }}>
              A weekly dispatch exploring food, media, and digital desire. Free to subscribe.
            </p>
            <Link
              to="/dispatch"
              className="font-mono-label text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity"
              style={{ color: "var(--accent)" }}
            >
              Subscribe →
            </Link>
          </div>
        </aside>
      </div>

      {/* Prev / Next */}
      <nav
        className="mt-16 pt-8 rule-top grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {prev ? (
          <div>
            <p
              className="font-mono-label text-[9px] tracking-widest uppercase mb-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              ← Previous
            </p>
            <Link
              to={`/articles/${prev.slug}`}
              className="text-base font-medium hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {prev.title}
            </Link>
          </div>
        ) : (
          <div />
        )}
        {next && (
          <div className="md:text-right">
            <p
              className="font-mono-label text-[9px] tracking-widest uppercase mb-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              Next →
            </p>
            <Link
              to={`/articles/${next.slug}`}
              className="text-base font-medium hover:opacity-70 transition-opacity"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {next.title}
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
