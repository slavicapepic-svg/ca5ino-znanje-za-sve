import { useState } from "react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { Play, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { findMediaBySlug } from "@/content/mediaFeed";

export const Route = createFileRoute("/vesti-mediji/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const item = findMediaBySlug(slug);
  if (!item) throw notFound();

  const [playing, setPlaying] = useState(false);

  return (
    <SiteShell>
      <Breadcrumb
        items={[
          { label: "Početna", to: "/" },
          { label: "Vesti i Mediji", to: "/vesti-mediji" },
          { label: item.title },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 pt-6 pb-16 md:px-6">
        <h1 className="text-3xl font-extrabold leading-tight text-text-strong sm:text-4xl">{item.title}</h1>
        <p className="mt-4 text-sm text-text-muted">
          {item.author} · {item.date} · {item.read} min {item.type === "video" ? "videa" : "čitanja"}
        </p>

        {item.guestBio && (
          <p className="mt-6 rounded-xl border border-border bg-bg-soft p-4 text-sm text-text-body">
            {item.guestBio}
          </p>
        )}

        {item.type === "video" && item.youtubeId && (
          <div className="mt-8 aspect-video overflow-hidden rounded-2xl border border-border bg-black shadow-card">
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
                title={item.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                className="group relative h-full w-full"
                aria-label={`Pusti video: ${item.title}`}
              >
                <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" />
                <span aria-hidden className="absolute inset-0 bg-black/40 transition group-hover:bg-black/50" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 text-brand shadow-card ring-4 ring-white/40 transition group-hover:scale-105">
                    <Play className="ml-1 h-8 w-8 fill-current" />
                  </span>
                </span>
              </button>
            )}
          </div>
        )}

        {item.type === "video" && item.relatedArticle && (
          <a
            href={item.relatedArticle.href}
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border bg-bg-soft px-4 py-3 text-sm font-semibold text-brand transition hover:bg-blue-50"
          >
            {item.relatedArticle.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}

        {item.type === "news" && item.thumbnail && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-soft">
            <img src={item.thumbnail} alt={item.title} className="block h-auto w-full object-cover" />
          </div>
        )}

        <div className="prose prose-slate mt-8 max-w-none text-text-body">
          {item.keyPoints && item.keyPoints.length > 0 && (
            <>
              <h2 className="mt-8 text-2xl font-bold text-text-strong">Ključne tačke</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                {item.keyPoints.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </>
          )}
          {item.body && <p className="mt-6 leading-relaxed">{item.body}</p>}
          {!item.body && !item.keyPoints && (
            <p className="mt-6 leading-relaxed">Prateći tekst uskoro.</p>
          )}
        </div>
      </article>
    </SiteShell>
  );
}
