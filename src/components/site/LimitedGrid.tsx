import { Children, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

/**
 * Globalno pravilo — nigde ne prikazuj ceo spisak kartica odjednom.
 * Prikazuje `initialCount` (podrazumevano 4) kartica; ostatak se otkriva:
 *  - preko "Vidi sve →" CTA-a ka arhivi (kada je prosleđen `viewAllHref`),
 *  - inače in-place preko "Prikaži još / Prikaži manje" dugmeta.
 * Kada je ukupan broj kartica ≤ initialCount, dugme se ne renderuje.
 */
export function LimitedGrid({
  children,
  initialCount = 4,
  viewAllHref,
  viewAllLabel = "Vidi sve",
  cols = 3,
  className = "",
}: {
  children: ReactNode;
  initialCount?: number;
  viewAllHref?: string;
  viewAllLabel?: string;
  cols?: 2 | 3 | 4;
  className?: string;
}) {
  const items = Children.toArray(children);
  const total = items.length;
  const [expanded, setExpanded] = useState(false);

  const hasMore = total > initialCount;
  const shown = viewAllHref || !expanded ? items.slice(0, initialCount) : items;

  const colClass =
    cols === 2 ? "sm:grid-cols-2" :
    cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" :
    "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={className}>
      <div className={`grid grid-cols-1 gap-6 ${colClass}`}>{shown}</div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          {viewAllHref ? (
            <Link
              to={viewAllHref as never}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              {viewAllLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              {expanded ? (
                <>Prikaži manje <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>Prikaži još ({total - initialCount}) <ChevronDown className="h-4 w-4" /></>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
