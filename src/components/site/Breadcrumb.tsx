import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 md:px-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-text-muted">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="inline-flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3 w-3 opacity-50" />}
              {it.to && !last ? (
                <Link to={it.to} className="hover:text-brand">{it.label}</Link>
              ) : (
                <span className={last ? "font-semibold text-text-strong" : ""}>{it.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
