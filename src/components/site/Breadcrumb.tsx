import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; to?: string; href?: string };

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 md:px-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-text-muted">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          const content = (
            <span className="inline-flex items-center gap-1">
              {i === 0 && <Home className="h-3 w-3" />}
              {it.label}
            </span>
          );
          return (
            <li key={i} className="inline-flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-3 w-3 opacity-50" />}
              {last ? (
                <span className="font-semibold text-text-strong">{content}</span>
              ) : it.href ? (
                <a href={it.href} className="rounded px-1 py-0.5 hover:bg-blue-50 hover:text-brand">{content}</a>
              ) : it.to ? (
                <Link to={it.to} className="rounded px-1 py-0.5 hover:bg-blue-50 hover:text-brand">{content}</Link>
              ) : (
                <span>{content}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
