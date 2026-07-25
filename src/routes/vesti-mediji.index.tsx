import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Calendar, Clock, User as UserIcon, Newspaper, Video as VideoIcon, LayoutGrid } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";
import { mediaFeed } from "@/content/mediaFeed";
import { LimitedGrid } from "@/components/site/LimitedGrid";
import { EmptyState } from "@/components/site/EmptyState";

export const Route = createFileRoute("/vesti-mediji/")({
  head: () => ({
    meta: [
      { title: "Vesti i Mediji — Ca5ino ZaštoZato" },
      { name: "description", content: "Centralni hub za sve vesti, video sadržaje, intervjue i analize iz sveta online igara na sreću." },
      { property: "og:title", content: "Vesti i Mediji" },
      { property: "og:description", content: "Razumite ne samo šta se dešava, već i zašto se dešava." },
    ],
  }),
  component: VestiMedijiIndexPage,
});

type Filter = "all" | "news" | "video";

const tabs: { id: Filter; label: string; icon: typeof LayoutGrid; empty: string }[] = [
  { id: "all", label: "Svi", icon: LayoutGrid, empty: "Uskoro objavljujemo prve vesti i video sadržaje." },
  { id: "news", label: "Vesti", icon: Newspaper, empty: "Uskoro stižu prve vesti — vratite se za par dana." },
  { id: "video", label: "Video", icon: VideoIcon, empty: "Prvi video sadržaji su u pripremi." },
];

function VestiMedijiIndexPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const items = mediaFeed.filter((m) => {
    if (filter === "all") return true;
    if (filter === "news") return m.type === "news" || m.type === "blog";
    return m.type === "video";
  });
  const active = tabs.find((t) => t.id === filter)!;

  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Početna", to: "/" }, { label: "Vesti i Mediji" }]} />
      <PageHeader
        eyebrow="Vesti i Mediji"
        title="Vesti i Mediji"
        intro="Centralno mesto na sajtu gde objavljujemo sve — vesti, video sadržaje, intervjue, analize i povremeno blogove. Razumite ne samo šta se dešava, već i zašto se dešava."
      />

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="mb-8 inline-flex rounded-full border border-border bg-white p-1 shadow-soft">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setFilter(t.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
                  filter === t.id ? "bg-brand text-white shadow-cta" : "text-text-body hover:text-brand"
                }`}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </button>
            );
          })}
        </div>

        {items.length === 0 ? (
          <EmptyState
            icon={active.icon}
            message={active.empty}
            hint="Kada Redakcija doda sadržaj, ovde će se automatski pojaviti."
          />
        ) : (
          <LimitedGrid initialCount={6} cols={3}>
            {items.map((m) => {
              const isVideo = m.type === "video";
              const label = m.type === "video" ? "Video" : m.type === "blog" ? "Blog" : "Vest";
              return (
                <Link
                  key={m.slug}
                  to="/vesti-mediji/$slug"
                  params={{ slug: m.slug }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-blue-50">
                    <img src={m.thumbnail} alt={m.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                    {isVideo ? (
                      <>
                        <span aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,20,55,0.10) 0%, rgba(15,20,55,0.55) 100%)" }} />
                        <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-extrabold uppercase text-accent-foreground shadow-cta">Video</span>
                        <span className="absolute inset-0 grid place-items-center">
                          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-brand shadow-card ring-4 ring-white/40 transition group-hover:scale-105">
                            <Play className="ml-0.5 h-7 w-7 fill-current" />
                          </span>
                        </span>
                      </>
                    ) : (
                      <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow-soft">{label}</span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base font-bold leading-snug text-text-strong group-hover:text-brand">{m.title}</h3>
                    <p className="mt-2 text-sm text-text-muted">{m.excerpt}</p>
                    <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-xs text-text-muted">
                      <span className="inline-flex items-center gap-1.5"><UserIcon className="h-3.5 w-3.5" />{m.author}</span>
                      <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{m.date}</span>
                      <span className="inline-flex items-center gap-1.5">
                        {isVideo ? <Play className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
                        {m.read} min
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </LimitedGrid>
        )}
      </section>
    </SiteShell>
  );
}
