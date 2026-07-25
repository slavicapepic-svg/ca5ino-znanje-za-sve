import { useState } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  Play, ArrowUpRight, ArrowRight, Calendar, Clock,
  User as UserIcon, ChevronDown, ListChecks, Newspaper, Video as VideoIcon,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { CardGrid } from "@/components/site/CardGrid";
import { CardTile } from "@/components/site/CardTile";
import { ShareButtons } from "@/components/site/ShareButtons";
import { mediaFeed, findMediaBySlug, type MediaItem } from "@/content/mediaFeed";

export const Route = createFileRoute("/vesti-mediji/$slug")({
  head: ({ params }) => {
    const item = findMediaBySlug(params.slug);
    if (!item) {
      return { meta: [{ title: "Sadržaj nije pronađen — Ca5ino ZaštoZato" }] };
    }
    const isVideo = item.type === "video";
    const kind = isVideo ? "Video" : item.type === "blog" ? "Blog" : "Vest";
    return {
      meta: [
        { title: `${item.title} — Ca5ino ZaštoZato` },
        { name: "description", content: item.excerpt },
        { property: "og:type", content: isVideo ? "video.other" : "article" },
        { property: "og:title", content: `${kind}: ${item.title}` },
        { property: "og:description", content: item.excerpt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: item.title },
        { name: "twitter:description", content: item.excerpt },
      ],
    };
  },
  component: RouteComponent,
});

function initials(name: string) {
  return name.split(" ").map((s) => s[0]).slice(0, 2).join("");
}

function relatedFor(item: MediaItem): MediaItem[] {
  const others = mediaFeed.filter((m) => m.slug !== item.slug);
  const sameType = others.filter((m) => m.type === item.type);
  const rest = others.filter((m) => m.type !== item.type);
  return [...sameType, ...rest].slice(0, 3);
}

function kindLabel(type: MediaItem["type"]) {
  if (type === "video") return "Video";
  if (type === "blog") return "Blog";
  return "Vest";
}

function RouteComponent() {
  const { slug } = Route.useParams();
  const item = findMediaBySlug(slug);
  if (!item) throw notFound();

  const [playing, setPlaying] = useState(false);
  const [keyOpen, setKeyOpen] = useState(true);
  const related = relatedFor(item);
  const isVideo = item.type === "video";

  const KindIcon = isVideo ? VideoIcon : Newspaper;
  const readingLabel = isVideo ? "min videa" : "min čitanja";

  return (
    <SiteShell>
      <Breadcrumb
        items={[
          { label: "Početna", to: "/" },
          { label: "Vesti i Mediji", to: "/vesti-mediji" },
          { label: item.title },
        ]}
      />

      {/* HEADER */}
      <section className="mx-auto max-w-4xl px-4 pt-6 pb-4 md:px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
          <KindIcon className="h-3.5 w-3.5" /> {kindLabel(item.type)}
        </span>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-text-strong sm:text-4xl">
          {item.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5">
            <UserIcon className="h-3.5 w-3.5" />
            {item.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {item.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {item.read} {readingLabel}
          </span>
        </div>

        {item.guestBio && (
          <p className="mt-6 rounded-xl border border-border bg-bg-soft p-4 text-sm leading-relaxed text-text-body">
            {item.guestBio}
          </p>
        )}
      </section>

      {/* MEDIA */}
      <section className="mx-auto max-w-4xl px-4 md:px-6">
        {isVideo && item.youtubeId ? (
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-border bg-black shadow-card">
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`}
                title={item.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 h-full w-full"
                aria-label={`Pusti video: ${item.title}`}
              >
                <img src={item.thumbnail} alt={item.title} className="h-full w-full object-cover" />
                <span aria-hidden className="absolute inset-0 bg-black/40 transition group-hover:bg-black/50" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 text-brand shadow-card ring-4 ring-white/40 transition group-hover:scale-105">
                    <Play className="ml-1 h-8 w-8 fill-current" />
                  </span>
                </span>
                <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white">
                  {item.read} min
                </span>
              </button>
            )}
          </div>
        ) : (
          item.thumbnail && (
            <figure className="overflow-hidden rounded-3xl border border-border shadow-card">
              <img src={item.thumbnail} alt={item.title} className="block h-auto w-full object-cover" />
            </figure>
          )
        )}

        {isVideo && item.relatedArticle && (
          <a
            href={item.relatedArticle.href}
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border bg-bg-soft px-4 py-3 text-sm font-semibold text-brand transition hover:bg-blue-50"
          >
            {item.relatedArticle.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-3xl px-4 pt-10 pb-6 md:px-6">
        <div className="max-w-[70ch] text-[15px] leading-relaxed text-text-body [&_p]:mt-4 [&_p]:first:mt-0">
          <p className="text-lg leading-relaxed text-text-strong">{item.excerpt}</p>
          {item.body ? (
            item.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>
              {isVideo
                ? "U ovom videu razlažemo temu jasno i konkretno — bez marketing jezika. Ispod plejera pronaći ćete ključne tačke i preporučene tekstove za dalje čitanje."
                : "Detaljan prateći tekst objavljujemo uskoro. U međuvremenu, pogledajte povezane teme na dnu strane."}
            </p>
          )}
        </div>

        {/* Key points — collapsible */}
        {item.keyPoints && item.keyPoints.length > 0 && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
            <button
              type="button"
              onClick={() => setKeyOpen((v) => !v)}
              aria-expanded={keyOpen}
              className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
            >
              <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-strong">
                <ListChecks className="h-4 w-4 text-brand" />
                Ključne tačke {isVideo ? "iz videa" : "iz teksta"}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-text-muted transition ${keyOpen ? "rotate-180" : ""}`}
              />
            </button>
            {keyOpen && (
              <ul className="space-y-2 border-t border-border bg-bg-soft/60 px-5 py-4 text-sm text-text-body">
                {item.keyPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-accent)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Share */}
        <ShareButtons title={item.title} className="mt-8" />

        {/* Author / creator box */}
        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-border bg-bg-soft p-5">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand text-sm font-bold text-white">
            {initials(item.author)}
          </span>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-text-muted">
              {isVideo ? "Autor / kanal" : "Autor"}
            </p>
            <p className="text-sm font-semibold text-text-strong">{item.author}</p>
            <p className="mt-1 text-sm leading-relaxed text-text-body">
              {item.guestBio ??
                "Deo redakcije Ca5ino ZaštoZato — piše i snima o iGaming industriji, pravima igrača i odgovornoj igri."}
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="border-t border-border bg-bg-soft py-14">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
                  <ArrowRight className="h-3.5 w-3.5" /> Još iz rubrike
                </span>
                <h2 className="mt-3 text-2xl font-extrabold text-text-strong sm:text-3xl">
                  Još iz Vesti i Mediji
                </h2>
              </div>
              <Link
                to="/vesti-mediji"
                className="hidden shrink-0 items-center gap-1 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-brand hover:bg-blue-50 sm:inline-flex"
              >
                Sve teme <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <CardGrid>
              {related.map((r) => (
                <CardTile
                  key={r.slug}
                  to={`/vesti-mediji/${r.slug}`}
                  image={r.thumbnail}
                  title={r.title}
                  author={r.author}
                  date={r.date}
                  read={r.read}
                  category={kindLabel(r.type)}
                />
              ))}
            </CardGrid>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
