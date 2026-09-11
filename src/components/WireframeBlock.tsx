interface WireframeBlockProps {
  label: string;
  caption?: string;
  aspect?: string; // tailwind aspect class or custom style
  width?: string;  // tailwind width class
  className?: string;
}

export default function WireframeBlock({
  label,
  caption,
  aspect = "aspect-[4/3]",
  width = "w-full",
  className = "",
}: WireframeBlockProps) {
  return (
    <figure className={`${width} ${className}`}>
      <div
        className={`${aspect} relative overflow-hidden`}
        style={{ border: "1px solid var(--border)" }}
      >
        {/* Diagonal grid lines */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id={`grid-${label.replace(/\s+/g, "-")}`}
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 32 L32 0"
                stroke="var(--border)"
                strokeWidth="0.75"
                fill="none"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#grid-${label.replace(/\s+/g, "-")})`}
          />
          {/* Corner marks */}
          <line x1="0" y1="0" x2="10" y2="0" stroke="var(--muted-foreground)" strokeWidth="1" />
          <line x1="0" y1="0" x2="0" y2="10" stroke="var(--muted-foreground)" strokeWidth="1" />
          <line x1="100%" y1="0" x2="calc(100% - 10px)" y2="0" stroke="var(--muted-foreground)" strokeWidth="1" />
          <line x1="100%" y1="0" x2="100%" y2="10" stroke="var(--muted-foreground)" strokeWidth="1" />
          <line x1="0" y1="100%" x2="10" y2="100%" stroke="var(--muted-foreground)" strokeWidth="1" />
          <line x1="0" y1="100%" x2="0" y2="calc(100% - 10px)" stroke="var(--muted-foreground)" strokeWidth="1" />
          <line x1="100%" y1="100%" x2="calc(100% - 10px)" y2="100%" stroke="var(--muted-foreground)" strokeWidth="1" />
          <line x1="100%" y1="100%" x2="100%" y2="calc(100% - 10px)" stroke="var(--muted-foreground)" strokeWidth="1" />
        </svg>

        {/* Centre label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
          <span
            className="font-mono-label text-[9px] tracking-[0.22em] uppercase text-center"
            style={{ color: "var(--muted-foreground)" }}
          >
            {label}
          </span>
        </div>
      </div>
      {caption && (
        <figcaption
          className="mt-2 font-mono-label text-[9px] tracking-[0.14em] uppercase leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
