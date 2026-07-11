import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Search,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  User as UserIcon,
  Plus,
  Minus,
  Play,
  ShieldCheck,
  Wallet,
  Dice5,
  Gavel,
  HeartHandshake,
  MessageCircleQuestion,
  Sparkles,
  PlayCircle,
} from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ExpertCard } from "@/components/site/ExpertCard";
import { featuredExperts } from "@/content/experts";
import { categories } from "@/content/categories";
import { mediaFeed } from "@/content/mediaFeed";
import { publishedQuestions } from "@/content/faq";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ca5ino Zašto Zato — Iza kulisa igre" },
      {
        name: "description",
        content:
          "Edukativna platforma o iGaming industriji: bonusi, regulative, uplate, igre i odgovorna igra — objašnjeno jednostavno i prijateljski.",
      },
    ],
  }),
  component: HomePage,
});


/* ============================= HERO ============================= */
function Hero() {
  const [q, setQ] = useState("");
  return (
    <section className="relative overflow-hidden bg-bg-soft">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pt-14 pb-8 md:px-6 lg:grid-cols-12 lg:pt-20 lg:pb-10">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <Sparkles className="h-3.5 w-3.5" /> Edukativna platforma · ne kockarnica
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-text-strong sm:text-5xl lg:text-6xl">
            Iza <span className="text-brand">kulisa</span> igre
          </h1>
          <p className="mt-5 max-w-2xl text-base text-text-body sm:text-lg">
            Šta se krije iza promocija i kako one utiču na vas i vaše ponašanje
            tokom igre? Što više razumete kako igre, bonusi i pravila funkcionišu,
            manje su šanse da vas nešto neprijatno iznenadi. Zato smo okupili
            iskustvo, podatke i stručna mišljenja na jednom mestu kako bismo vam
            približili mehanizme online igara na sreću.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-7 flex w-full max-w-2xl items-center gap-2 rounded-2xl border border-border bg-white p-2 shadow-soft"
          >
            <div className="flex flex-1 items-center gap-2 px-2">
              <Search className="h-5 w-5 text-text-muted" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                type="text"
                placeholder="Pretraži vesti i video sadržaj..."
                className="w-full bg-transparent py-2.5 text-sm text-text-strong placeholder:text-text-muted focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-cta transition hover:brightness-95"
            >
              Pretraži <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-success" /> Nezavisno i edukativno</span>
            <span className="inline-flex items-center gap-1.5"><HeartHandshake className="h-4 w-4 text-brand" /> Promovišemo odgovornu igru</span>
            <span className="inline-flex items-center gap-1.5"><Gavel className="h-4 w-4 text-warning" /> Samo 18+</span>
          </div>
        </div>

        <div className="relative mt-4 lg:col-span-5 lg:mt-0">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none">
            {/* Yellow accent block behind */}
            <div
              aria-hidden
              className="absolute -right-3 -top-3 h-[55%] w-[55%] rounded-[28px] bg-accent sm:-right-5 sm:-top-5"
            />
            {/* Navy dotted accent behind, bottom-left */}
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl border-2 border-brand/15 sm:h-32 sm:w-32"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--brand-primary) 1.2px, transparent 1.5px)",
                backgroundSize: "12px 12px",
                opacity: 0.35,
              }}
            />
            {/* Main image — slight tilt, layered on top */}
            <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-border bg-white shadow-card rotate-[-2deg] lg:rotate-[-3deg] transition-transform duration-500 hover:rotate-0">
              <img
                src={heroIllustration}
                alt="Edukacija o online igrama na sreću"
                width={1024}
                height={1280}
                className="block h-full w-full object-cover"
              />
              {/* Soft bottom gradient for badge legibility */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent"
              />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-brand shadow-soft backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" /> Bez reklama operatera
              </span>
            </div>

            {/* Floating stat card — top-left, peeking off the image */}
            <div className="absolute -left-3 top-6 hidden rounded-2xl border border-border bg-white p-3 pr-4 shadow-card sm:flex sm:items-center sm:gap-3 lg:-left-6">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-brand">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                  Bonus uslovi
                </div>
                <div className="text-sm font-bold text-text-strong">
                  Objašnjeno na 1 minut
                </div>
              </div>
            </div>

            {/* Floating chip — bottom-right */}
            <div className="absolute -bottom-3 right-2 hidden items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-text-strong shadow-card sm:inline-flex lg:right-6">
              <span className="h-2 w-2 rounded-full bg-success" />
              Verifikovano od stručnjaka
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

/* ============================= QUICK LINKS ============================= */
/**
 * Brzi linkovi = pravi kategorijski unosi iz src/content/categories.ts.
 * Ikonice i kratak opis mapirani po slug-u; klik vodi na tačnu kategoriju.
 */
const quickLinkMeta: Record<string, { icon: typeof ShieldCheck; desc: string }> = {
  "registracija-verifikacija": { icon: ShieldCheck, desc: "Kako se otvara nalog i zašto se traži lična karta." },
  "bonus-uslovi": { icon: Sparkles, desc: "Šta zaista znači „uslov klađenja x40“?" },
  "uplate-isplate": { icon: Wallet, desc: "Metode plaćanja, provizije i rokovi isplate." },
  "sve-o-igricama": { icon: Dice5, desc: "RTP, volatilnost i kako slotovi zaista rade." },
  "svet-regulative": { icon: Gavel, desc: "Kako se zakoni razlikuju od zemlje do zemlje." },
  "odgovorna-igra": { icon: HeartHandshake, desc: "Limit, pauza, samoisključenje — kako rade." },
};

function QuickLinks() {
  return (
    <section className="relative pt-8 pb-10 md:pt-10 md:pb-12 bg-gradient-to-b from-bg-cream via-bg-cream to-white">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-px h-28 bg-gradient-to-b from-[#FFC53D]/35 via-[#FFC53D]/10 to-transparent" />


      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-bg-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              <ArrowRight className="h-3.5 w-3.5" /> Brzi linkovi
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-text-strong sm:text-4xl">
              Edukacija
            </h2>
            <p className="mt-2 max-w-xl text-text-body">
              Najtraženije teme — objašnjene jednostavno, bez sitnih slova.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const meta = quickLinkMeta[cat.slug];
            if (!meta) return null;
            const Icon = meta.icon;
            return (
              <Link
                key={cat.slug}
                to={cat.path as never}
                className="group flex flex-col rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              >
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-brand transition group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-bold text-text-strong">{cat.title}</h3>
                <p className="mt-1 text-sm text-text-muted">{meta.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Saznaj više <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================= TOPIC MARQUEE (separator) ============================= */
const marqueeTopics = [
  "Uslov klađenja x40",
  "RTP 96.5%",
  "KYC verifikacija",
  "Samoisključenje",
  "Volatilnost slotova",
  "Licence EU",
  "Brza isplata",
  "Provizije na uplatu",
  "Bonus bez depozita",
  "Limit dnevne potrošnje",
  "Sportske kvote",
  "Live dealer",
];

function TopicMarquee() {
  const loop = [...marqueeTopics, ...marqueeTopics];
  return (
    <div
      aria-hidden="true"
      className="marquee-mask relative overflow-hidden border-y border-border bg-[color:var(--brand-primary-deep)] py-4"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[color:var(--brand-primary-deep)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[color:var(--brand-primary-deep)] to-transparent" />
      <div className="marquee-track gap-3">
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-accent)]" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}



/* ============================= MEDIA CARD ============================= */
/**
 * Prikazuje unos iz mediaFeed.ts (jedini izvor istine za vesti/video).
 * Klik vodi na /vesti-mediji/{slug} — istu punu stranu iz koje je izvučen.
 */
function MediaCard({ item }: { item: (typeof mediaFeed)[number] }) {
  const isVideo = item.type === "video";
  const category = isVideo ? "Video" : "Vest";
  return (
    <Link
      to="/vesti-mediji/$slug"
      params={{ slug: item.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
      aria-label={isVideo ? `Pogledaj video: ${item.title}` : item.title}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-blue-50">
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand shadow-soft">
          {category}
        </span>

        {isVideo && (
          <>
            <span
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(15,20,55,0.10) 0%, rgba(15,20,55,0.45) 60%, rgba(15,20,55,0.75) 100%)",
              }}
            />
            <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[color:var(--brand-accent)] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[color:var(--brand-primary-deep)] shadow-cta">
              <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-[color:var(--brand-primary-deep)] text-[color:var(--brand-accent)]">
                <Play className="h-2 w-2 fill-current" />
              </span>
              Video
            </span>
            <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-0.5 text-[11px] font-semibold text-white">
              {item.read}:00
            </span>
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-white/95 text-[color:var(--brand-primary)] shadow-card ring-4 ring-white/40 transition group-hover:scale-105 group-hover:bg-[color:var(--brand-accent)] group-hover:text-[color:var(--brand-primary-deep)]">
                <Play className="ml-1 h-8 w-8 fill-current" />
              </span>
            </span>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-text-strong group-hover:text-brand">
          {item.title}
        </h3>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5"><UserIcon className="h-3.5 w-3.5" />{item.author}</span>
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{item.date}</span>
          <span className="inline-flex items-center gap-1.5">
            {isVideo ? <Play className="h-3.5 w-3.5" /> : <Clock className="h-3.5 w-3.5" />}
            {item.read} min {isVideo ? "videa" : "čitanja"}
          </span>
        </div>
      </div>
    </Link>
  );
}


function LatestNews() {
  const items = mediaFeed.filter((m) => m.type === "news").slice(0, 4);
  return (
    <section id="vesti" className="relative pt-10 pb-16 md:pt-12 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              <Calendar className="h-3.5 w-3.5" /> Najnovije vesti
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-text-strong sm:text-4xl">
              Aktuelne teme
            </h2>
          </div>
          <Link to="/vesti-mediji" className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
            Sve vesti <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((n) => (
            <MediaCard key={n.slug} item={n} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestEducation() {
  // Mix videos + guides iz mediaFeed-a; teaser = pun unos, samo skraćen prikaz.
  const items = [
    ...mediaFeed.filter((m) => m.type === "video"),
    ...mediaFeed.filter((m) => m.type === "news"),
  ].slice(0, 4);
  return (
    <section className="relative bg-bg-soft py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 -z-0" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              <PlayCircle className="h-3.5 w-3.5" /> Najnoviji edukativni sadržaj
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-text-strong sm:text-4xl">
              Učite svojim tempom
            </h2>
            <p className="mt-2 max-w-xl text-text-body">
              Kratki video objašnjenja i tekstualni vodiči — bez stručnog žargona.
            </p>
          </div>
          <Link to="/vesti-mediji" className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
            Cela biblioteka <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => (
            <MediaCard key={c.slug} item={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================= FAQ ============================= */
const faqs = [
  {
    q: "Da li je ovo sajt za klađenje?",
    a: "Ne. ca5ino Zašto Zato je nezavisna edukativna platforma. Ne primamo opklade, ne preporučujemo gde da igrate i ne nudimo bonuse — objašnjavamo kako industrija funkcioniše.",
  },
  {
    q: "Šta tačno znači „uslov klađenja x40“?",
    a: "Znači da iznos bonusa morate da prokockate 40 puta pre nego što ga možete podići. Na bonus od 1.000 RSD to je 40.000 RSD prometa. Detaljan vodič nalazi se u sekciji Bonus uslovi.",
  },
  {
    q: "Kako da postavim limit ili napravim pauzu?",
    a: "Svaki licencirani operater po zakonu mora da ponudi alate za odgovornu igru: dnevni/nedeljni limit depozita, vremenski limit i samoisključenje. U sekciji Odgovorna igra prikazujemo kako se to radi korak po korak.",
  },
  {
    q: "Koliko su sigurni online plaćanja?",
    a: "Licencirani operateri koriste regulisane platne procesore i šifrovanje na bankarskom nivou. Ipak, vreme isplate i naknade zavise od metode — sve to objašnjavamo u sekciji Uplate & Isplate.",
  },
  {
    q: "Mogu li da postavim sopstveno pitanje?",
    a: "Naravno. U sekciji Postavi pitanje pošaljite pitanje anonimno — naš tim ili stručni savetnici javno odgovaraju u roku od nekoliko dana.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <MessageCircleQuestion className="h-3.5 w-3.5" /> Najčešća pitanja
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-text-strong sm:text-4xl">
            Sve što vas najčešće zanima
          </h2>
          <p className="mt-3 text-text-body">
            Brzi odgovori na pitanja koja dobijamo svake nedelje. Ne nalazite svoje?
            Pošaljite ga u sekciji <Link to="/postavi-pitanje" className="font-semibold text-brand hover:underline">Postavi pitanje</Link>.
          </p>
        </div>

        <div className="lg:col-span-8">
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-blue-50/50"
                  >
                    <span className="text-base font-semibold text-text-strong sm:text-lg">{f.q}</span>
                    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${isOpen ? "bg-accent text-accent-foreground" : "bg-blue-50 text-brand"}`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 pr-16 text-sm leading-relaxed text-text-body">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================= EXPERTS ============================= */



function Experts() {
  return (
    <section id="rec-strucnjaka" className="relative overflow-hidden bg-bg-soft py-16 md:py-20">
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            <UserIcon className="h-3.5 w-3.5" /> Reč stručnjaka
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-text-strong sm:text-4xl">
            Ljudi koji znaju kako industrija zaista funkcioniše
          </h2>
          <p className="mt-2 text-text-body">
            Pravnici, psiholozi i analitičari dele konkretne savete iz svoje prakse.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredExperts.map((e) => (
            <ExpertCard key={e.id} variant="teaser" expert={e} />
          ))}
        </div>
      </div>
    </section>
  );
}


/* ============================= POSTAVI PITANJE ============================= */
// Teaser Q&A = publishedQuestions iz src/content/faq.ts (jedini izvor).
const sampleQA = publishedQuestions.slice(0, 3);

function AskQuestion() {
  return (
    <section id="postavi" className="relative overflow-hidden py-16 md:py-24">
      
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              <MessageCircleQuestion className="h-3.5 w-3.5" /> Postavi pitanje
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-text-strong sm:text-4xl">
              Imate konkretno pitanje? Odgovaramo javno.
            </h2>
            <p className="mt-3 text-text-body">
              Naš tim i stručni saradnici svake nedelje biraju najkorisnija
              pitanja i objavljuju odgovore. Anonimno je, besplatno i —
              najvažnije — može da pomogne i drugima koji se isto pitaju.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/postavi-pitanje"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground shadow-cta transition hover:brightness-95"
              >
                Postavi pitanje <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/rec-strucnjaka"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-brand hover:bg-blue-50"
              >
                Pogledaj sva pitanja
              </Link>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {sampleQA.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:shadow-card"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-50 text-brand">
                    <MessageCircleQuestion className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-bold text-text-strong">{item.q}</p>
                    <p className="mt-2 text-sm leading-relaxed text-text-body">{item.a}</p>
                    <p className="mt-3 text-xs text-text-muted">{item.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


/* ============================= PAGE ============================= */
function HomePage() {
  // memo not strictly needed, but keeps things tidy
  useMemo(() => null, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <TopicMarquee />
        <LatestNews />
        <LatestEducation />
        
        <Experts />
        <AskQuestion />
      </main>
      <Footer />
    </div>
  );
}
