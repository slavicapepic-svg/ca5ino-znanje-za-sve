import { notFound, Link } from "@tanstack/react-router";
import {
  ShieldCheck, Sparkles, Wallet, Dice5, Gavel, HeartHandshake,
  ArrowRight, ArrowUpRight, ArrowLeft, Calendar, Clock,
  User as UserIcon, MessageCircleQuestion, Info, Quote, CheckCircle2,
  BookOpen, ListChecks, FileText,
} from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { CardGrid } from "@/components/site/CardGrid";
import { CardTile } from "@/components/site/CardTile";
import { LimitedGrid } from "@/components/site/LimitedGrid";
import { EmptyState } from "@/components/site/EmptyState";
import { categories, getCategoryBySlug, getArticle, type Article, type Category } from "@/content/categories";

/* --- per-category metadata: icon + cross-sell --- */
const catMeta: Record<string, { icon: typeof ShieldCheck; related: string[] }> = {
  "registracija-verifikacija": { icon: ShieldCheck, related: ["uplate-isplate", "odgovorna-igra"] },
  "bonus-uslovi":              { icon: Sparkles,    related: ["sve-o-igricama", "uplate-isplate"] },
  "uplate-isplate":            { icon: Wallet,      related: ["registracija-verifikacija", "svet-regulative"] },
  "sve-o-igricama":            { icon: Dice5,       related: ["bonus-uslovi", "odgovorna-igra"] },
  "svet-regulative":           { icon: Gavel,       related: ["registracija-verifikacija", "odgovorna-igra"] },
  "odgovorna-igra":            { icon: HeartHandshake, related: ["sve-o-igricama", "svet-regulative"] },
};

const iconFor = (slug: string) => catMeta[slug]?.icon ?? BookOpen;

const slugifyId = (s: string) =>
  s.toLowerCase()
    .replace(/[čć]/g, "c").replace(/š/g, "s").replace(/ž/g, "z").replace(/đ/g, "dj")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* ================================================================
 * CATEGORY (parent) PAGE
 * ================================================================ */
export function CategoryPage({ slug }: { slug: string }) {
  const cat = getCategoryBySlug(slug);
  if (!cat) throw notFound();
  const Icon = iconFor(cat.slug);

  const grouped = new Map<string, Article[]>();
  const ungrouped: Article[] = [];
  for (const a of cat.articles) {
    if (a.group) {
      const arr = grouped.get(a.group) ?? [];
      arr.push(a);
      grouped.set(a.group, arr);
    } else {
      ungrouped.push(a);
    }
  }
  const groups = [...grouped.entries()];
  const related = (catMeta[cat.slug]?.related ?? [])
    .map((s) => categories.find((c) => c.slug === s))
    .filter(Boolean) as Category[];

  return (
    <SiteShell>
      <Breadcrumb
        items={[
          { label: "Početna", to: "/" },
          { label: "Edukacija", href: "/#edukacija" },
          { label: cat.title },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="blob left-[-6rem] top-[-6rem] h-72 w-72 bg-[color:var(--brand-accent)]/40" />
        <div aria-hidden className="blob right-[-4rem] top-16 h-64 w-64 bg-[color:var(--brand-primary)]/25" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pt-10 pb-14 md:px-6 md:pt-14 md:pb-16 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              <Sparkles className="h-3.5 w-3.5" /> {cat.eyebrow}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-text-strong sm:text-4xl lg:text-5xl">
              {cat.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-text-body sm:text-lg">
              {cat.intro}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-text-muted">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1">
                <ListChecks className="h-3.5 w-3.5 text-brand" />
                {cat.articles.length} tema
              </span>
              {groups.length > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1">
                  <BookOpen className="h-3.5 w-3.5 text-brand" />
                  {groups.length} celina
                </span>
              )}
            </div>
          </div>
          <div className="hidden lg:col-span-4 lg:block">
            <div className="relative mx-auto grid h-64 w-64 place-items-center rounded-[2rem] bg-gradient-to-br from-blue-50 to-white shadow-card">
              <div aria-hidden className="absolute -right-3 -top-3 h-10 w-10 rounded-2xl bg-[color:var(--brand-accent)]" />
              <div aria-hidden className="absolute -bottom-3 -left-3 h-8 w-8 rounded-xl bg-[color:var(--brand-primary)]" />
              <Icon className="h-24 w-24 text-brand" strokeWidth={1.4} />
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents (bonus-uslovi) */}
      {cat.slug === "bonus-uslovi" && cat.infoBlocks && cat.infoBlocks.length > 0 && (
        <section className="border-y border-border bg-white py-10 md:py-12">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex items-end justify-between gap-6">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
                  <ListChecks className="h-3.5 w-3.5" /> Sadržaj
                </span>
                <h2 className="mt-3 text-xl font-extrabold text-text-strong sm:text-2xl">
                  Šta ćete pronaći na ovoj stranici
                </h2>
              </div>
              <span className="hidden text-xs text-text-muted sm:block">
                {cat.infoBlocks.length + 1} celina · kliknite za skok
              </span>
            </div>

            <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Sve teme u rubrici", href: "#teme", hint: `${cat.articles.length} tema` },
                ...cat.infoBlocks.map((b) => ({
                  title: b.title,
                  href: `#${slugifyId(b.title)}`,
                  hint: "Pročitajte više",
                })),
              ].map((item, i) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex h-full items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-sm font-extrabold text-brand transition group-hover:bg-brand group-hover:text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-snug text-text-strong group-hover:text-brand">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-xs text-text-muted">{item.hint}</span>
                    </span>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-text-muted transition group-hover:translate-x-0.5 group-hover:text-brand" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Ungrouped articles — clean tiles (image + title) for bonus */}
      {ungrouped.length > 0 && (
        <section id="teme" className="py-14 md:py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeader index={1} icon={Icon} title="Sve teme u rubrici" subtitle="Vodiči i objašnjenja iz oblasti." />
            <LimitedGrid initialCount={4} cols={3}>
              {ungrouped.map((a) => (
                <CardTile
                  key={a.slug}
                  to={`${cat.path}/${a.slug}`}
                  image={a.image}
                  title={a.title}
                  author={cat.slug === "bonus-uslovi" ? undefined : a.author}
                  date={cat.slug === "bonus-uslovi" ? undefined : a.date}
                  read={cat.slug === "bonus-uslovi" ? undefined : a.read}
                  category={cat.slug === "bonus-uslovi" ? undefined : cat.eyebrow.split("·")[1]?.trim()}
                />
              ))}
            </LimitedGrid>
          </div>
        </section>
      )}

      {/* Info blocks -> compact grid of cards (rendered AFTER tiles) */}
      {cat.infoBlocks && cat.infoBlocks.length > 0 && (
        <section className="border-y border-border bg-bg-soft py-14">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {cat.infoBlocks.map((b, i) => (
                <article
                  key={b.title}
                  id={slugifyId(b.title)}
                  className="flex flex-col scroll-mt-24 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:shadow-card"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-sm font-bold text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-base font-extrabold leading-snug text-text-strong sm:text-lg">{b.title}</h2>
                  </div>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-body">
                    {formatInfoBody(b.body)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Grouped sections alternating background */}
      {groups.map(([group, arts], gi) => {
        const alt = gi % 2 === 1;
        const startIndex = ungrouped.length > 0 ? gi + 2 : gi + 1;
        return (
          <section key={group} className={`py-14 md:py-16 ${alt ? "bg-bg-soft border-y border-border" : ""}`}>
            <div className="mx-auto max-w-7xl px-4 md:px-6">
              <SectionHeader
                index={startIndex}
                icon={Icon}
                title={group}
                subtitle={`${arts.length} ${arts.length === 1 ? "tema" : arts.length < 5 ? "teme" : "tema"} u ovoj celini.`}
              />
              <LimitedGrid initialCount={4} cols={3}>
                {arts.map((a) => (
                  <CardTile key={a.slug} to={`${cat.path}/${a.slug}`} image={a.image} title={a.title} author={a.author} date={a.date} read={a.read} category={group} />
                ))}
              </LimitedGrid>
            </div>
          </section>
        );
      })}

      {/* Empty state — kada Redakcija još nije objavila teme */}
      {cat.articles.length === 0 && (!cat.infoBlocks || cat.infoBlocks.length === 0) && (
        <section className="py-14 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <EmptyState
              icon={FileText}
              message="Sadržaj ove stranice se priprema."
              hint="Uskoro dodajemo vodiče i objašnjenja za ovu rubriku."
            />
          </div>
        </section>
      )}

      {/* Cross-sell */}
      {related.length > 0 && (
        <section className="bg-[color:var(--brand-primary-deep)] py-16 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-8 flex flex-col items-start justify-between gap-3 md:flex-row md:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-accent)]">
                  <ArrowRight className="h-3.5 w-3.5" /> Povezane rubrike
                </span>
                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Nastavi da istražuješ</h2>
                <p className="mt-2 max-w-2xl text-white/80">Znanje iz jedne oblasti otvara drugu — kreni dublje u sistem.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {related.map((r) => {
                const RIcon = iconFor(r.slug);
                return (
                  <Link
                    key={r.slug}
                    to={r.path as never}
                    className="group flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[color:var(--brand-accent)] text-[color:var(--brand-primary-deep)]">
                      <RIcon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold">{r.title}</h3>
                      <p className="mt-1 line-clamp-2 text-sm text-white/75">{r.intro}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-accent)]">
                        Otvori rubriku <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}

function SectionHeader({ index, icon: Icon, title, subtitle }: { index: number; icon: typeof ShieldCheck; title: string; subtitle?: string }) {
  return (
    <div className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-brand">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            {String(index).padStart(2, "0")} — Celina
          </span>
          <h2 className="mt-1 text-2xl font-extrabold text-text-strong sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-text-muted">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}

/* ================================================================
 * ARTICLE PAGE
 * ================================================================ */
export function ArticlePage({ categorySlug, articleSlug }: { categorySlug: string; articleSlug: string }) {
  const found = getArticle(categorySlug, articleSlug);
  if (!found) throw notFound();
  const { category, article } = found;
  const idx = category.articles.findIndex((a) => a.slug === article.slug);
  const prev = idx > 0 ? category.articles[idx - 1] : undefined;
  const next = idx < category.articles.length - 1 ? category.articles[idx + 1] : undefined;

  const sameGroup = article.group
    ? category.articles.filter((a) => a.group === article.group && a.slug !== article.slug)
    : [];
  const related = (sameGroup.length ? sameGroup : category.articles.filter((a) => a.slug !== article.slug))
    .slice(0, 3);

  const sidebarList = category.articles.filter((a) => a.slug !== article.slug).slice(0, 6);

  return (
    <SiteShell>
      <Breadcrumb
        items={[
          { label: "Početna", to: "/" },
          { label: "Edukacija", href: "/#edukacija" },
          { label: category.title, to: category.path },
          { label: article.title },
        ]}
      />

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-4 pt-6 pb-4 md:px-6">
        <Link
          to={category.path as never}
          className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand hover:bg-accent hover:text-accent-foreground"
        >
          <Sparkles className="h-3.5 w-3.5" /> {category.eyebrow}
        </Link>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-text-strong sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5"><UserIcon className="h-3.5 w-3.5" />{article.author}</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{article.date}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{article.read} min čitanja</span>
        </div>
        <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-card">
          <img src={article.image} alt={article.title} className="block h-auto w-full object-cover" />
        </div>
      </section>

      {/* BODY + SIDEBAR */}
      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <div className="max-w-[70ch] text-text-body">
              <p className="text-lg leading-relaxed text-text-strong">
                {article.excerpt ?? article.title}. U nastavku objašnjavamo šta ova tema znači u praksi i na šta obratiti pažnju pre nego što donesete odluku.
              </p>

              <h2 className="mt-10 text-2xl font-extrabold text-text-strong">Šta ćete naučiti</h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Ključne pojmove i kako ih prepoznati u pravilima operatera.",
                  "Najčešće greške koje igrači prave i kako ih izbeći.",
                  "Praktične savete koji vam mogu uštedeti vreme i novac.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <Callout tone="info" title="Važno">
                Pravila operatera često sadrže detalje pisane sitnim slovima. Pre nego što prihvatite bonus ili
                pošaljete zahtev za isplatu, uvek proverite konkretne uslove za vaš nalog.
              </Callout>

              <h2 className="mt-10 text-2xl font-extrabold text-text-strong">Kako funkcioniše u praksi</h2>
              <p className="mt-4 leading-relaxed">
                Sistemi za proveru, verifikaciju i isplatu rade po jasnim pravilima. Kada razumete logiku iza njih,
                lakše ćete prepoznati šta je uobičajen postupak, a šta zahteva vašu reakciju.
              </p>

              <PullQuote>
                Znanje menja pravila igre. Kada razumete sistem, više ne možete biti iznenađeni.
              </PullQuote>

              <h2 className="mt-10 text-2xl font-extrabold text-text-strong">Sledeći korak</h2>
              <p className="mt-4 leading-relaxed">
                Kada savladate ovu temu, preporučujemo da pogledate <Link to={category.path as never} className="text-brand underline underline-offset-2 hover:text-brand-deep">ostale teme u rubrici {category.title}</Link>{" "}
                i povežete znanje sa drugim oblastima našeg edukativnog centra.
              </p>
            </div>

            {/* Author block */}
            <div className="mt-10 flex items-start gap-4 rounded-2xl border border-border bg-bg-soft p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand text-white font-bold">
                {article.author.split(" ").map((s) => s[0]).slice(0, 2).join("")}
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-text-muted">Autor</p>
                <p className="text-sm font-semibold text-text-strong">{article.author}</p>
                <p className="mt-1 text-sm text-text-body">
                  Piše o iGaming industriji, pravilima operatera i pravima igrača.
                </p>
              </div>
            </div>

            {/* Prev / next */}
            <nav className="mt-8 grid gap-3 sm:grid-cols-2">
              {prev ? (
                <Link
                  to={`${category.path}/${prev.slug}` as never}
                  className="group flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card"
                >
                  <ArrowLeft className="mt-1 h-4 w-4 shrink-0 text-brand" />
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-text-muted">Prethodna tema</p>
                    <p className="mt-0.5 text-sm font-semibold text-text-strong group-hover:text-brand">{prev.title}</p>
                  </div>
                </Link>
              ) : <span />}
              {next ? (
                <Link
                  to={`${category.path}/${next.slug}` as never}
                  className="group flex items-start gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card sm:text-right"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-text-muted">Sledeća tema</p>
                    <p className="mt-0.5 text-sm font-semibold text-text-strong group-hover:text-brand">{next.title}</p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-brand" />
                </Link>
              ) : <span />}
            </nav>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Sažetak</p>
                <p className="mt-2 text-sm leading-relaxed text-text-body">
                  {article.excerpt ?? article.title}.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-text-muted">
                  <Clock className="h-3.5 w-3.5" /> {article.read} min čitanja
                </div>
              </div>

              {sidebarList.length > 0 && (
                <div className="rounded-2xl border border-border bg-white p-5 shadow-soft">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Povezane teme</p>
                  <ul className="space-y-2">
                    {sidebarList.map((a) => (
                      <li key={a.slug}>
                        <Link
                          to={`${category.path}/${a.slug}` as never}
                          className="group flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm text-text-body hover:bg-blue-50"
                        >
                          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                          <span className="group-hover:text-brand">{a.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link
                to="/postavi-pitanje"
                className="block rounded-2xl bg-[color:var(--brand-primary-deep)] p-5 text-white shadow-cta transition hover:brightness-110"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-accent)]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-accent)]">
                  <MessageCircleQuestion className="h-3.5 w-3.5" /> Pitanje?
                </span>
                <p className="mt-3 text-lg font-extrabold leading-snug">Niste našli odgovor?</p>
                <p className="mt-1 text-sm text-white/80">Postavite pitanje i naš tim će vam odgovoriti.</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--brand-accent)]">
                  Postavi pitanje <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border bg-bg-soft py-14">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                  <BookOpen className="h-3.5 w-3.5" /> Nastavi čitanje
                </span>
                <h2 className="mt-3 text-2xl font-extrabold text-text-strong sm:text-3xl">
                  Povezane teme{article.group ? ` — ${article.group}` : ""}
                </h2>
              </div>
              <Link
                to={category.path as never}
                className="hidden shrink-0 items-center gap-1 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-brand hover:bg-blue-50 sm:inline-flex"
              >
                Sve teme <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <CardGrid>
              {related.map((a) => (
                <CardTile
                  key={a.slug}
                  to={`${category.path}/${a.slug}`}
                  image={a.image}
                  title={a.title}
                  author={a.author}
                  date={a.date}
                  read={a.read}
                  category={a.group ?? category.eyebrow.split("·")[1]?.trim()}
                />
              ))}
            </CardGrid>
          </div>
        </section>
      )}
    </SiteShell>
  );
}

/* --- Info body formatter: turns "Term — definition" lines into bold-term list,
 *     leaves regular paragraphs, keeps bullet lines starting with "•", auto-links URLs. --- */
function formatInfoBody(body: string) {
  const paragraphs = body.split("\n\n").map((s) => s.trim()).filter(Boolean);

  const renderInline = (text: string) =>
    text.split(/(https?:\/\/[^\s]+)/g).map((chunk, k) =>
      /^https?:\/\//.test(chunk) ? (
        <a key={k} href={chunk} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline break-all">{chunk}</a>
      ) : (
        <span key={k}>{chunk}</span>
      ),
    );

  // Group consecutive "Term — def" or "• …" paragraphs into a single list
  const nodes: React.ReactNode[] = [];
  let listBuffer: { term?: string; rest: string }[] = [];
  const flush = () => {
    if (!listBuffer.length) return;
    nodes.push(
      <ul key={`ul-${nodes.length}`} className="space-y-2">
        {listBuffer.map((it, k) => (
          <li key={k} className="flex gap-2">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--brand-accent)]" />
            <span>
              {it.term && <strong className="font-semibold text-text-strong">{it.term}</strong>}
              {it.term ? " — " : ""}
              {renderInline(it.rest)}
            </span>
          </li>
        ))}
      </ul>,
    );
    listBuffer = [];
  };

  for (const p of paragraphs) {
    const bullet = p.replace(/^•\s*/, "");
    const isBullet = bullet !== p;
    const dashMatch = p.match(/^([^—\n]{2,60})\s+—\s+(.+)$/s);
    if (dashMatch) {
      listBuffer.push({ term: dashMatch[1].trim(), rest: dashMatch[2].trim() });
    } else if (isBullet) {
      listBuffer.push({ rest: bullet });
    } else {
      flush();
      nodes.push(<p key={`p-${nodes.length}`}>{renderInline(p)}</p>);
    }
  }
  flush();
  return nodes;
}

/* --- Article helpers --- */

function Callout({ tone = "info", title, children }: { tone?: "info" | "note"; title: string; children: React.ReactNode }) {
  return (
    <div className={`mt-8 flex gap-4 rounded-2xl border-l-4 p-5 ${tone === "info" ? "border-accent bg-bg-cream" : "border-brand bg-blue-50"}`}>
      <Info className={`mt-0.5 h-5 w-5 shrink-0 ${tone === "info" ? "text-[color:var(--warning)]" : "text-brand"}`} />
      <div className="min-w-0">
        <p className="text-sm font-bold uppercase tracking-wider text-text-strong">{title}</p>
        <p className="mt-1 text-base leading-relaxed text-text-body">{children}</p>
      </div>
    </div>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <figure className="mt-10 rounded-2xl bg-[color:var(--brand-primary-deep)] p-6 text-white md:p-8">
      <Quote className="h-8 w-8 text-[color:var(--brand-accent)]" />
      <blockquote className="mt-3 text-xl font-bold leading-snug sm:text-2xl">
        {children}
      </blockquote>
    </figure>
  );
}
