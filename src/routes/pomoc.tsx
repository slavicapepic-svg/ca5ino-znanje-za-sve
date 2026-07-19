import { createFileRoute, Link } from "@tanstack/react-router";
import { Headphones, ExternalLink, MapPin, HeartHandshake, Phone, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";
import { helpOrgs } from "@/content/helpLinks";

export const Route = createFileRoute("/pomoc")({
  head: () => ({
    meta: [
      { title: "Pomoć — SOS linije i institucije | Ca5ino ZaštoZato" },
      { name: "description", content: "Ako ste izgubili kontrolu nad igranjem, ovde su besplatne i poverljive linije i institucije koje pomažu." },
      { property: "og:title", content: "Pomoć — SOS linije i institucije" },
      { property: "og:description", content: "Besplatne linije i institucije za pomoć u Srbiji." },
    ],
  }),
  component: PomocPage,
});

function PomocPage() {
  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Početna", to: "/" }, { label: "Pomoć" }]} />
      <PageHeader
        eyebrow="Zatražite pomoć"
        title="Niste sami — pomoć postoji"
        intro="Ako ste vi ili neko vama blizak izgubili kontrolu nad igranjem, prvi korak je razgovor. Ove linije su besplatne, poverljive i dostupne odmah."
      />

      <section className="mx-auto max-w-7xl px-4 pb-6 md:px-6">
        <div className="rounded-2xl border border-accent/40 bg-accent/10 p-6 md:flex md:items-center md:justify-between md:gap-6">
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-text-strong">SOS linija — 24/7 poverljivo</p>
              <p className="mt-1 text-base text-text-body">Ministarstvo zdravlja i Uprava za igre na sreću</p>
            </div>
          </div>
          <a href="tel:0800110011" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-base font-bold text-white shadow-soft transition hover:opacity-90 md:mt-0">
            <Headphones className="h-4 w-4" /> 0800-110-011
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {helpOrgs.map((o) => (
            <div key={o.name} className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-brand">
                <HeartHandshake className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-text-strong">{o.name}</h3>
              <p className="mt-2 text-sm text-text-body">{o.description}</p>
              {o.address && (
                <p className="mt-3 inline-flex items-start gap-2 text-sm text-text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{o.address}</span>
                </p>
              )}
              {o.link && (
                <a href={o.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
                  <ExternalLink className="h-4 w-4" /> {o.link.replace(/^https?:\/\//, "")}
                </a>
              )}
              {o.phones && o.phones.length > 0 && (
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {o.phones.map((p) => (
                    <li key={p.number}>
                      <a href={`tel:${p.number.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
                        <Headphones className="h-4 w-4" />
                        {p.number}
                      </a>
                      {p.note && <p className="ml-6 text-xs text-text-muted">{p.note}</p>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl bg-[color:var(--brand-primary-deep)] p-6 text-white md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-lg font-bold">Želite da saznate više o odgovornoj igri?</p>
            <p className="mt-1 text-sm text-white/75">Pročitajte naše vodiče iz sekcije Odgovorna igra.</p>
          </div>
          <Link to="/odgovorna-igra" className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-accent-foreground transition hover:opacity-90">
            Odgovorna igra <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
