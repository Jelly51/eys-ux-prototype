import { Link } from "react-router";
import { articles, bookChapters } from "../data";
import WireframeBlock from "../components/WireframeBlock";

export default function Home() {
  const featured = articles[0];
  const secondary = articles.slice(1, 3);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 rule-bottom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <p
              className="font-mono-label text-[10px] tracking-[0.22em] uppercase mb-6"
              style={{ color: "var(--accent)" }}
            >
              A cultural publication
            </p>
            <h1
              className="text-4xl md:text-6xl font-medium leading-[1.1] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
            >
              Food, the feed
              <br />
              <span style={{ fontStyle: "italic" }}>and what's still</span>
              <br />
              worth eating.
            </h1>
            <p className="text-lg leading-relaxed max-w-xl" style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}>
              Restaurants, delivery platforms, television, games, creators, technology, and now AI — how digital media shapes not just what we buy but what we want.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            <div
              className="p-5"
              style={{ backgroundColor: "var(--card)", borderLeft: "2px solid var(--accent)" }}
            >
              <p
                className="font-mono-label text-[10px] tracking-widest uppercase mb-2"
                style={{ color: "var(--muted-foreground)" }}
              >
                Weekly dispatch
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ fontWeight: 300 }}>
                Five sections every week: a book excerpt, curated stories, browser tabs, a record, and an object worth knowing.
              </p>
              <Link
                to="/dispatch"
                className="font-mono-label text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity"
                style={{ color: "var(--accent)" }}
              >
                Subscribe free →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex items-baseline justify-between mb-8 rule-bottom pb-4">
          <h2
            className="font-mono-label text-[11px] tracking-[0.2em] uppercase"
            style={{ color: "var(--muted-foreground)" }}
          >
            Latest Articles
          </h2>
          <Link
            to="/articles"
            className="font-mono-label text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity"
            style={{ color: "var(--accent)" }}
          >
            All articles →
          </Link>
        </div>

        {/* Featured article */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 mb-10 rule-bottom pb-10">
          <div className="md:col-span-1 flex md:flex-col items-start md:items-end pt-1 mb-3 md:mb-0 md:pr-6">
            <span
              className="font-mono-label text-[10px] tracking-widest"
              style={{ color: "var(--muted-foreground)" }}
            >
              {featured.date}
            </span>
          </div>
          <div className="md:col-span-11">
            <p
              className="font-mono-label text-[10px] tracking-[0.15em] uppercase mb-2"
              style={{ color: "var(--accent)" }}
            >
              {featured.category}
            </p>
            <Link to={`/articles/${featured.slug}`} className="group">
              <h3
                className="text-3xl md:text-4xl font-medium mb-3 group-hover:opacity-80 transition-opacity"
                style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.15 }}
              >
                {featured.title}
              </h3>
            </Link>
            <p
              className="text-base leading-relaxed mb-4 max-w-2xl"
              style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
            >
              {featured.subtitle}
            </p>
            <Link
              to={`/articles/${featured.slug}`}
              className="font-mono-label text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity"
              style={{ color: "var(--foreground)" }}
            >
              Read — {featured.readTime} →
            </Link>
          </div>
        </div>

        {/* Secondary articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {secondary.map((article) => (
            <div key={article.slug} className="rule-bottom pb-8">
              <div className="flex items-center justify-between mb-3">
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
              </div>
              <Link to={`/articles/${article.slug}`} className="group">
                <h3
                  className="text-xl font-medium mb-2 group-hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.3 }}
                >
                  {article.title}
                </h3>
              </Link>
              <p
                className="text-sm leading-relaxed mb-4"
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
          ))}
        </div>
      </section>

      {/* Appetite series illustration */}
      <section className="max-w-5xl mx-auto px-6 py-10 rule-bottom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 md:col-start-4">
            <WireframeBlock
              label="Illustration · Appetite series no. 01"
              caption="From the appetite series — twelve drawings, one a month."
              aspect="aspect-[3/2]"
            />
          </div>
        </div>
      </section>

      {/* Book promo */}
      <section
        className="rule-top rule-bottom py-14"
        style={{ backgroundColor: "var(--foreground)" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <p
                className="font-mono-label text-[10px] tracking-[0.22em] uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                Written in public · Monthly chapters
              </p>
              <h2
                className="text-3xl md:text-4xl font-medium mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--background)",
                  lineHeight: 1.2,
                }}
              >
                A plate no longer
                <br />
                <em>only answers hunger.</em>
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "#A89D8C", fontWeight: 300 }}
              >
                The book is being written and published here, one chapter per month, free to read with full audio. Chapter 01 is live now.
              </p>
              <Link
                to="/book"
                className="font-mono-label text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity"
                style={{ color: "var(--background)" }}
              >
                Read the book →
              </Link>
            </div>
            <div className="md:col-span-5">
              <div
                className="p-6"
                style={{ border: "1px solid #3D3630" }}
              >
                {bookChapters.filter(c => c.status === "published").map((ch) => (
                  <div key={ch.slug} className="mb-4 last:mb-0">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span
                        className="font-mono-label text-[10px] tracking-widest"
                        style={{ color: "var(--accent)" }}
                      >
                        Ch. {ch.number}
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "var(--background)",
                          fontStyle: "italic",
                        }}
                      >
                        {ch.title}
                      </span>
                    </div>
                  </div>
                ))}
                <div
                  className="mt-4 pt-4"
                  style={{ borderTop: "1px solid #3D3630" }}
                >
                  <p
                    className="font-mono-label text-[9px] tracking-widest uppercase"
                    style={{ color: "#5A5047" }}
                  >
                    Ch. 02–04 in progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter strip */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p
              className="font-mono-label text-[10px] tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--muted-foreground)" }}
            >
              The Dispatch
            </p>
            <h2
              className="text-2xl md:text-3xl font-medium mb-4"
              style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.25 }}
            >
              Five sections. Every week. Free.
            </h2>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--secondary-foreground)", fontWeight: 300 }}
            >
              The Main Read, Three Plates, Five Open Tabs, One Record, One Object. Delivered to your inbox each Thursday.
            </p>
          </div>
          <div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 text-sm outline-none focus:ring-1 font-mono-label tracking-wide"
                style={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  fontFamily: "'JetBrains Mono', monospace",
                  ringColor: "var(--accent)",
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
            </form>
            <p
              className="mt-3 font-mono-label text-[9px] tracking-widest uppercase"
              style={{ color: "var(--muted-foreground)" }}
            >
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
