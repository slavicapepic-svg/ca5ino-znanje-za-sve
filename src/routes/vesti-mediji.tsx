import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Calendar, Clock, User as UserIcon } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";
import { mediaFeed } from "@/content/mediaFeed";
import { LimitedGrid } from "@/components/site/LimitedGrid";

export const Route = createFileRoute("/vesti-mediji")({
  head: () => ({
    meta: [
      { title: "Vesti i Mediji — Ca5ino ZaštoZato" },
      { name: "description", content: "Najnoviji video sadržaji, vesti, intervjui i analize iz sveta online igara na sreću." },
      { property: "og:title", content: "Vesti i Mediji" },
      { property: "og:description", content: "Razumite ne samo šta se dešava, već i zašto se dešava." },
    ],
  }),
  component: VestiMedijiPage,
});

type Filter = "all" | "video" | "news";

function VestiMedijiPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const items = mediaFeed.filter((m) => filter === "all" || m.type === filter);

  const tabs: { id: Filter; label: string }[] = [
    { id: "all", label: "Sve" },
    { id: "video", label: "Video" },
    { id: "news", label: "Vesti" },
  ];

  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Početna", to: "/" }, { label: "Vesti i Mediji" }]} />
      <PageHeader
        eyebrow="Vesti i Mediji"
        title="Vesti i Mediji"
        intro="Mesto gde objavljujemo najnovije video sadržaje, vesti, intervjue i analize iz sveta online igara na sreću. Razumite ne samo šta se dešava, već i zašto se dešava. Pregledajte najnovije objave, pogledajte video sadržaje i ostanite u toku sa temama o kojima se retko govori otvoreno."
      />

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="mb-8 inline-flex rounded-full border border-border bg-white p-1 shadow-soft">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setFilter(t.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === t.id ? "bg-brand text-white shadow-cta" : "text-text-body hover:text-brand"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <LimitedGrid initialCount={6} cols={3}>
          {items.map((m) => (
            <Link
              key={m.slug}
              to="/vesti-mediji/$slug"
              params={{ slug: m.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-blue-50">
                <img src={m.thumbnail} alt={m.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                {m.type === "video" && (
                  <>
                    <span aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,20,55,0.10) 0%, rgba(15,20,55,0.55) 100%)" }} />
                    <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-extrabold uppercase text-accent-foreground shadow-cta">Video</span>
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-brand shadow-card ring-4 ring-white/40 transition group-hover:scale-105">
                        <Play className="ml-0.5 h-7 w-7 fill-current" />
                      </span>
                    </span>
                  </>
                )}
                {m.type === "news" && (
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow-soft">Vest</span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold leading-snug text-text-strong group-hover:text-brand">{m.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{m.excerpt}</p>
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-xs text-text-muted">
                  <span className="inline-flex items-center gap-1.5"><UserIcon className="h-3.5 w-3.5" />{m.author}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{m.date}</span>
                  <span className="inline-flex items-center gap-1.5">
                    {m.type === "video" ? <Play className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                    {m.read} min
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </LimitedGrid>
      </section>
    </SiteShell>
  );
}
