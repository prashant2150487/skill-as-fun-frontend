import * as React from "react";
import { motion, Variants } from "framer-motion";

/**
 * SplitText
 * A flexible split-text animation component using Framer Motion.
 *
 * Features
 * - Split by characters or words
 * - Staggered entrance with parent/child variants
 * - Smooth slide-up + fade-in reveal (classic split-text effect)
 * - Optional `once` + `margin` via whileInView viewport controls
 * - Fully typed props and tailwind-friendly
 */

export type SplitBy = "chars" | "words";

export interface SplitTextProps {
  text: string;
  splitBy?: SplitBy; // default: "chars"
  /**
   * Base delay before the sequence starts (seconds)
   */
  delay?: number; // default: 0
  /**
   * Stagger between items (seconds)
   */
  stagger?: number; // default: 0.04
  /**
   * Animation duration per item (seconds)
   */
  duration?: number; // default: 0.6
  /**
   * Easing function name or custom cubic-bezier as [x1, y1, x2, y2]
   */
  ease?: "easeOut" | "easeInOut" | "anticipate" | number[]; // default: "easeOut"
  /**
   * Animate only once when it enters the viewport?
   */
  once?: boolean; // default: true
  /**
   * Viewport root margin (e.g., "-10% 0% -10% 0%")
   */
  margin?: string; // default: "-10% 0% -10% 0%"
  /**
   * Optional wrapper element. Defaults to span.
   */
  as?: keyof JSX.IntrinsicElements; // default: "span"
  className?: string;
  /**
   * If true, keeps whitespace when splitting by words (adds spaces between animated spans)
   */
  preserveSpaces?: boolean; // default: true
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  splitBy = "chars",
  delay = 0,
  stagger = 0.04,
  duration = 0.6,
  ease = "easeOut",
  once = true,
  margin = "-10% 0% -10% 0%",
  as: Wrapper = "span",
  className,
  preserveSpaces = true,
}) => {
  const parent: Variants = {
    hidden: {},
    visible: {
      transition: {
        delay,
        staggerChildren: stagger,
      },
    },
  };

  const child: Variants = {
    hidden: { y: "120%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration, ease },
    },
  };

  // Prepare segments
  const segments = React.useMemo(() => {
    if (splitBy === "words") {
      const words = text.split(/(\s+)/); // keep spaces as separate tokens
      return words.map((w, i) => ({ key: `w-${i}`, content: w, isSpace: /\s+/.test(w) }));
    }
    // chars
    return Array.from(text).map((ch, i) => ({ key: `c-${i}`, content: ch, isSpace: ch === " " }));
  }, [text, splitBy]);

  return (
    <Wrapper className={className} aria-label={text}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin }}
        variants={parent}
        style={{ display: "inline-block", willChange: "transform" }}
      >
        {segments.map(({ key, content, isSpace }) => {
          // If we split by words and encounter a space, we can choose to render as plain text
          if (isSpace ) {
            return preserveSpaces ? (
              <span key={key} aria-hidden>
                {content}
              </span>
            ) : null;
          }

          return (
            <span
              key={key}
              className="inline-block overflow-hidden align-bottom"
              aria-hidden
              style={{ lineHeight: 1.1 }}
            >
              <motion.span
                variants={child}
                style={{ display: "inline-block" }}
              >
                {content}
              </motion.span>
            </span>
          );
        })}
      </motion.span>
    </Wrapper>
  );
};

/**
 * Demo component
 * - Shows several variants of the SplitText effect
 */
const Demo: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full space-y-12">
        <header className="space-y-2">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">SplitText × Framer Motion</h1>
          <p className="text-sm md:text-base text-gray-600">
            A lightweight, type-safe split text animation for React + TypeScript.
          </p>
        </header>

        <section className="space-y-6 rounded-2xl border p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Characters (default)</h2>
          <SplitText
            text="Hello, Prashant — let your text glide in style."
            className="text-2xl md:text-4xl font-semibold"
            delay={0.2}
            stagger={0.035}
            duration={0.5}
            ease="easeOut"
          />
          <p className="text-sm text-gray-500">Scroll this into view to replay if <code>once</code> is false.</p>
        </section>

        <section className="space-y-6 rounded-2xl border p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Words</h2>
          <SplitText
            splitBy="words"
            text="Build silky reveal effects with one component."
            className="text-2xl md:text-4xl font-semibold"
            delay={0}
            stagger={0.08}
            duration={0.55}
            ease={[0.16, 1, 0.3, 1]}
          />
        </section>

        <section className="space-y-6 rounded-2xl border p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Replay on scroll</h2>
          <SplitText
            text="This one animates every time it re-enters the viewport."
            className="text-2xl md:text-4xl font-semibold"
            once={false}
            margin="-20% 0% -20% 0%"
          />
        </section>

        <footer className="text-xs text-gray-500">
          Tip: Wrap in a heading or paragraph and style using Tailwind.
        </footer>
      </div>
    </div>
  );
};

export default Demo;
