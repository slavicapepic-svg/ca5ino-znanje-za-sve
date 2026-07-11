import { Sparkles } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  author,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  author?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 pb-10 md:px-6 md:pt-10 md:pb-14">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-9">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-text-strong sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-body sm:text-lg">
              {intro}
            </p>
          )}
        </div>
        {author && (
          <div className="md:col-span-3 md:text-right">
            <p className="text-xs uppercase tracking-wider text-text-muted">Autor rubrike</p>
            <p className="mt-1 text-sm font-semibold text-text-strong">{author}</p>
          </div>
        )}
      </div>
    </section>
  );
}
