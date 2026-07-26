import { useMemo, useState } from "react";
import {
  Gift, RefreshCw, PiggyBank, Sparkles, Ticket,
  Calculator, AlertTriangle, Lock, TrendingDown,
  Brain, Repeat, Timer, ExternalLink, BookOpen, ChevronDown,
} from "lucide-react";

/* ---------- 1) Bonus types ---------- */

type BonusType = {
  id: string;
  name: string;
  tag: "Depozit" | "Retencija" | "Slotovi" | "Sport";
  icon: React.ComponentType<{ className?: string }>;
  short: string;
  detail: string;
};

const BONUS_TYPES: BonusType[] = [
  {
    id: "first",
    name: "Bonus dobrodošlice",
    tag: "Depozit",
    icon: Gift,
    short: "Jednokratni bonus na prvu uplatu.",
    detail: "Obično najveći procentualno, ali sa najstrožim uslovima proigravanja (wagering).",
  },
  {
    id: "reload",
    name: "Reload bonus",
    tag: "Retencija",
    icon: RefreshCw,
    short: "Bonus na svaku sledeću uplatu.",
    detail: "Manji od prvog. Cilj mu je da vas zadrži aktivnim na platformi.",
  },
  {
    id: "cashback",
    name: "Cashback",
    tag: "Retencija",
    icon: PiggyBank,
    short: "Povraćaj dela izgubljenog novca.",
    detail: "Najčešće 5–20% posle definisanog perioda. Deluje kao „mreža za pad“ i podstiče duže sesije.",
  },
  {
    id: "spins",
    name: "Free Spins",
    tag: "Slotovi",
    icon: Sparkles,
    short: "Besplatni spinovi na određenim slotovima.",
    detail: "Dobitak se skoro uvek uplaćuje kao bonus (ne kao keš) i podleže wageringu.",
  },
  {
    id: "freebet",
    name: "Gratis opklada",
    tag: "Sport",
    icon: Ticket,
    short: "Besplatna opklada u kladionici.",
    detail: "Ako prođe, isplaćuje se čist dobitak — bez uloga koji je bio „besplatan“.",
  },
];

const FILTERS = ["Sve", "Depozit", "Retencija", "Slotovi", "Sport"] as const;

function BonusTypesSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Sve");
  const items = filter === "Sve" ? BONUS_TYPES : BONUS_TYPES.filter((b) => b.tag === filter);

  return (
    <section
      id="glavni-tipovi-bonusa-u-industriji"
      aria-labelledby="bt-heading"
      className="scroll-mt-24 border-y border-border bg-white py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionEyebrow index={1} label="Tipovi bonusa" />
        <h2 id="bt-heading" className="mt-3 text-2xl font-extrabold text-text-strong sm:text-3xl">
          Glavni tipovi bonusa u industriji
        </h2>
        <p className="mt-2 max-w-3xl text-text-body">
          Pet formata koje ćete videti gotovo na svakoj platformi. Svaki ima svoju logiku — i svoju zamku.
        </p>

        <div
          role="tablist"
          aria-label="Filter po tipu bonusa"
          className="mt-6 flex flex-wrap gap-2"
        >
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                  active
                    ? "border-brand bg-brand text-white shadow-soft"
                    : "border-border bg-white text-text-body hover:border-brand/40 hover:text-brand"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b) => (
            <article
              key={b.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-card"
            >
              <span className="absolute right-4 top-4 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand">
                {b.tag}
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--brand-accent)]/25 text-[color:var(--brand-primary-deep)] transition group-hover:bg-[color:var(--brand-accent)]">
                <b.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-text-strong">{b.name}</h3>
              <p className="mt-2 text-sm font-semibold text-text-body">{b.short}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{b.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 2) Debt + wagering calculator ---------- */

function WageringSection() {
  const [amount, setAmount] = useState<number>(2000);
  const [factor, setFactor] = useState<number>(35);
  const turnover = useMemo(() => Math.max(0, Math.round(amount * factor)), [amount, factor]);
  const fmt = new Intl.NumberFormat("sr-RS");

  return (
    <section
      id="bonus-je-dug-a-ne-poklon"
      aria-labelledby="dug-heading"
      className="scroll-mt-24 bg-bg-soft py-14 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionEyebrow index={2} label="Realna cena bonusa" />
        <h2 id="dug-heading" className="mt-3 text-2xl font-extrabold text-text-strong sm:text-3xl">
          Bonus je dug, a ne poklon
        </h2>
        <p className="mt-2 max-w-3xl text-text-body">
          Iza svakog velikog broja stoje prednost kuće i zakon velikih brojeva. Bonus je virtualni dug definisan
          pravilima operatera — što više igrate, statistika radi protiv vas.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          {/* Calculator */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-[color:var(--brand-primary-deep)] p-6 text-white shadow-card md:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--brand-accent)] text-[color:var(--brand-primary-deep)]">
                  <Calculator className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Wagering kalkulator</p>
                  <p className="text-lg font-bold">Koliko zapravo morate da proigrate?</p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    Iznos bonusa (RSD)
                  </span>
                  <input
                    type="number"
                    min={0}
                    step={100}
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value) || 0)}
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-lg font-bold text-white placeholder:text-white/40 focus:border-[color:var(--brand-accent)] focus:outline-none"
                    aria-label="Iznos bonusa u dinarima"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    Faktor proigravanja (×)
                  </span>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    step={1}
                    value={factor}
                    onChange={(e) => setFactor(Number(e.target.value) || 0)}
                    className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-lg font-bold text-white placeholder:text-white/40 focus:border-[color:var(--brand-accent)] focus:outline-none"
                    aria-label="Faktor proigravanja"
                  />
                </label>
              </div>

              <div className="mt-6 rounded-2xl bg-white/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Potreban promet</p>
                <p className="mt-1 text-3xl font-black text-[color:var(--brand-accent)] sm:text-4xl">
                  {fmt.format(turnover)} RSD
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Toliko morate da uložite u igrama pre nego što bonus (i dobici iz njega) postanu vaši za isplatu.
                </p>
              </div>

              <p className="mt-4 flex items-start gap-2 text-xs text-white/70">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-accent)]" />
                Kalkulator je informativan. Stvarna pravila zavise od operatera — game weighting, max bet i rok
                trajanja bonusa dodatno menjaju sliku.
              </p>
            </div>
          </div>

          {/* Example cards */}
          <div className="grid gap-4 lg:col-span-2">
            <ExampleCard
              icon={Lock}
              title="Zaključan novac"
              body="Dok ne ispunite wagering, ne možete podići ni bonus ni dobitke iz njega."
            />
            <ExampleCard
              icon={TrendingDown}
              title="Primer: 2.000 × 35"
              body="Bonus od 2.000 RSD zahteva 70.000 RSD prometa pre nego što bilo šta postane vaše."
            />
            <ExampleCard
              icon={AlertTriangle}
              title="Skriveni limiti"
              body="Max opklada dok je bonus aktivan, max isplata iz bonusa, igre koje ne broje 100% ka wageringu."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExampleCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-brand">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-extrabold text-text-strong">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-text-body">{body}</p>
      </div>
    </div>
  );
}

/* ---------- 3) Psychology accordions ---------- */

type Mech = { id: string; title: string; icon: React.ComponentType<{ className?: string }>; body: string };

const MECHS: Mech[] = [
  {
    id: "loss",
    title: "Isključivanje straha od gubitka",
    icon: Brain,
    body: "Bonus nije „vaš novac“, pa vam se čini da nemate šta da izgubite. Zapravo trošite vreme, pažnju i sve buduće uplate koje ćete napraviti nakon što uđete u sistem.",
  },
  {
    id: "sunk",
    title: "Sunk Cost Fallacy — pritisak uloženog truda",
    icon: TrendingDown,
    body: "Kad ste već proigrali 30.000 od 70.000 wageringa, teško je odustati — čini se da bacate ono što ste do sada uradili. Kazino računa upravo na to.",
  },
  {
    id: "habit",
    title: "Kreiranje navike",
    icon: Repeat,
    body: "Cashback, dnevni free spinovi i „misije“ pretvaraju povremeno igranje u dnevni ritual. Kad ritual postoji, akvizicija je gotova.",
  },
  {
    id: "time",
    title: "Vremenski pritisak",
    icon: Timer,
    body: "Rokovi trajanja bonusa i tajmeri za free spinove guraju vas da igrate brže i više nego što biste inače.",
  },
];

function PsychologySection() {
  const [open, setOpen] = useState<string | null>("loss");
  return (
    <section
      id="bonus-je-udica-za-vas-mozak"
      aria-labelledby="psy-heading"
      className="scroll-mt-24 border-y border-border bg-white py-14 md:py-16"
    >
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionEyebrow index={3} label="Psihološki mehanizmi" />
        <h2 id="psy-heading" className="mt-3 text-2xl font-extrabold text-text-strong sm:text-3xl">
          Bonus je udica za vaš mozak
        </h2>
        <p className="mt-2 text-text-body">
          Bonus radi na nekoliko psiholoških okidača istovremeno. Kliknite na mehanizam da vidite kako funkcioniše
          u praksi.
        </p>

        <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-white shadow-soft">
          {MECHS.map((m) => {
            const isOpen = open === m.id;
            return (
              <div key={m.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`mech-${m.id}`}
                  onClick={() => setOpen(isOpen ? null : m.id)}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition hover:bg-bg-soft"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--brand-accent)]/25 text-[color:var(--brand-primary-deep)]">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1 text-base font-extrabold text-text-strong">{m.title}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-text-muted transition-transform ${isOpen ? "rotate-180 text-brand" : ""}`}
                  />
                </button>
                <div
                  id={`mech-${m.id}`}
                  role="region"
                  hidden={!isOpen}
                  className="px-5 pb-5 pl-[4.5rem] text-sm leading-relaxed text-text-body sm:text-base"
                >
                  {m.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- 4) Sources ---------- */

type Source = { title: string; domain: string; url: string; note: string };

const SOURCES: Source[] = [
  {
    title: "Matthias Ciappara — Building Engagement Through Gamification",
    domain: "gamblingindustryjobs.com",
    url: "https://gamblingindustryjobs.com/career-conversations/matthias-ciappara-building-engagement-through-gamification/",
    note: "Intervju o tome kako se gejmifikacija koristi za retenciju igrača.",
  },
  {
    title: "Optimove iGaming Pulse — Promotions & Retention",
    domain: "optimove.com",
    url: "https://www.optimove.com/solutions/igaming/promotions",
    note: "Industrijski uvid u to kako operateri planiraju bonus i promo cikluse.",
  },
];

function SourcesSection() {
  return (
    <section
      id="odakle-nam-znanje"
      aria-labelledby="src-heading"
      className="scroll-mt-24 bg-bg-soft py-14 md:py-16"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <SectionEyebrow index={4} label="Izvori" />
        <h2 id="src-heading" className="mt-3 text-2xl font-extrabold text-text-strong sm:text-3xl">
          Odakle nam znanje
        </h2>
        <p className="mt-2 max-w-3xl text-text-body">
          Dolazimo iz iGaming industrije i tvrdnje potkrepljujemo izvorima. Za dublje čitanje o gejmifikaciji i
          mehanizmima retencije:
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {SOURCES.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-brand transition group-hover:bg-brand group-hover:text-white">
                  <BookOpen className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-extrabold leading-snug text-text-strong group-hover:text-brand">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {s.domain}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-text-body">{s.note}</span>
                </span>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-text-muted transition group-hover:translate-x-0.5 group-hover:text-brand" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- shared ---------- */

function SectionEyebrow({ index, label }: { index: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand">
      <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-[10px] font-black text-white">
        {String(index).padStart(2, "0")}
      </span>
      {label}
    </span>
  );
}

/* ---------- public wrapper ---------- */

export function BonusInfoSections() {
  return (
    <>
      <BonusTypesSection />
      <WageringSection />
      <PsychologySection />
      <SourcesSection />
    </>
  );
}
