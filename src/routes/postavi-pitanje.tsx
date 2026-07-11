import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MessageCircleQuestion, Plus, Minus, Search, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";
import { publishedQuestions } from "@/content/faq";

export const Route = createFileRoute("/postavi-pitanje")({
  head: () => ({
    meta: [
      { title: "Postavi pitanje — Ca5ino ZaštoZato" },
      { name: "description", content: "Anonimno postavite pitanje o online kazinima i kladionicama. Odgovaramo javno na osnovu iskustva i prakse." },
      { property: "og:title", content: "Postavi pitanje" },
      { property: "og:description", content: "Nezavisno mišljenje kada vam nešto nije jasno ili smatrate da ste oštećeni." },
    ],
  }),
  component: PostaviPitanjePage,
});

function PostaviPitanjePage() {
  const [nick, setNick] = useState("");
  const [question, setQuestion] = useState("");
  const [sent, setSent] = useState(false);
  const [query, setQuery] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filtered = useMemo(() => {
    if (!query.trim()) return publishedQuestions;
    const q = query.toLowerCase();
    return publishedQuestions.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
  }, [query]);

  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Početna", to: "/" }, { label: "Postavi pitanje" }]} />
      <PageHeader
        eyebrow="Vaša pitanja"
        title="Postavi pitanje"
        intro="Na ovom mestu odgovaramo na vaša pitanja i analiziramo stvarne situacije sa kojima se igrači susreću u online kazinima i kladionicama. Ako smatrate da ste oštećeni, nešto vam nije jasno ili želite nezavisno mišljenje, objasnićemo šta se dogodilo, zašto i koje mogućnosti imate dalje."
      />

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="rounded-2xl border border-border bg-bg-cream p-6 shadow-soft">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 shrink-0 text-brand" />
            <p className="text-sm leading-relaxed text-text-body">
              <strong className="text-text-strong">Napomena:</strong> Odgovori i saveti zasnovani su na
              višegodišnjem iskustvu u radu sa igračima, medijaciji sporova i poznavanju praksi iGaming
              industrije. Sadržaj je informativnog i edukativnog karaktera i ne predstavlja pravni savet
              niti garanciju ishoda u pojedinačnim sporovima sa operaterima.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-extrabold text-text-strong">Vaše pitanje</h2>
            <p className="mt-3 text-sm text-text-body">
              Vaša privatnost nam je važna. Pitanja možete postavljati potpuno anonimno — dovoljno je da
              unesete nadimak. Pitanja sa uvredama, govorom mržnje, pretnjama ili neprimerenim sadržajem
              neće biti objavljena.
            </p>

            {sent ? (
              <div className="mt-6 rounded-2xl border border-border bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold text-success">Hvala! Pitanje je poslato.</p>
                <p className="mt-2 text-sm text-text-body">
                  Naš tim pregleda pitanja i objavljuje odgovore u roku od nekoliko dana.
                </p>
                <button
                  onClick={() => { setSent(false); setNick(""); setQuestion(""); }}
                  className="mt-4 text-sm font-semibold text-brand hover:underline"
                >
                  Postavi novo pitanje
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (nick.trim() && question.trim()) setSent(true); }}
                className="mt-6 space-y-4 rounded-2xl border border-border bg-white p-6 shadow-soft"
              >
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted">Nadimak</label>
                  <input
                    type="text"
                    value={nick}
                    onChange={(e) => setNick(e.target.value)}
                    required
                    maxLength={40}
                    className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm text-text-strong focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    placeholder="npr. Igrač123"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted">Vaše pitanje</label>
                  <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                    rows={6}
                    maxLength={2000}
                    className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-strong focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    placeholder="Opišite situaciju što je moguće konkretnije..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-cta transition hover:brightness-95"
                >
                  <MessageCircleQuestion className="h-4 w-4" /> Pošalji pitanje
                </button>
                <p className="text-[11px] text-text-muted">
                  Slanjem pitanja saglasni ste da ono može biti anonimno objavljeno na sajtu zajedno sa
                  odgovorom redakcije, uz eventualne manje izmene radi zaštite privatnosti i čitljivosti.
                </p>
              </form>
            )}
          </div>

          <div className="lg:col-span-7">
            <h2 className="text-2xl font-extrabold text-text-strong">Objavljena pitanja</h2>

            <div className="mt-4 flex items-center gap-2 rounded-xl border border-border bg-white p-2 shadow-soft">
              <Search className="ml-2 h-4 w-4 text-text-muted" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="search"
                placeholder="Pretraži objavljena pitanja..."
                className="w-full bg-transparent py-2 text-sm text-text-strong placeholder:text-text-muted focus:outline-none"
              />
            </div>

            <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
              {filtered.length === 0 && (
                <p className="p-6 text-sm text-text-muted">Nema rezultata za „{query}“.</p>
              )}
              {filtered.map((f, i) => {
                const isOpen = openIdx === i;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-blue-50/50"
                    >
                      <span className="text-sm font-semibold text-text-strong sm:text-base">{f.q}</span>
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${isOpen ? "bg-accent text-accent-foreground" : "bg-blue-50 text-brand"}`}>
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-6 text-sm leading-relaxed text-text-body">
                        <p>{f.a}</p>
                        {f.author && <p className="mt-3 text-xs text-text-muted">{f.author}</p>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
