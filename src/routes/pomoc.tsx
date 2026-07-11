import { createFileRoute } from "@tanstack/react-router";
import { Phone, ExternalLink, HeartHandshake } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";
import { helpOrgs } from "@/content/helpLinks";

export const Route = createFileRoute("/pomoc")({
  head: () => ({
    meta: [
      { title: "Pomoć — Institucije i SOS linije | Ca5ino ZaštoZato" },
      { name: "description", content: "Institucije, SOS linije i onlajn savetovanje za osobe sa problematičnim igranjem." },
      { property: "og:title", content: "Pomoć — Institucije i SOS linije" },
      { property: "og:description", content: "Ako ste vi ili neko blizak izgubili kontrolu — evo gde možete da se javite." },
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
        title="Važne stranice: gde možete da potražite pomoć"
        intro="Ako ste vi ili neko blizak izgubili kontrolu nad igranjem, prvi korak je razgovor. Ove institucije rade poverljivo i besplatno."
      />
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {helpOrgs.map((o) => (
            <div key={o.name} className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-blue-50 text-brand">
                <HeartHandshake className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-text-strong">{o.name}</h3>
              <p className="mt-2 flex-1 text-sm text-text-body">{o.description}</p>
              <div className="mt-4 space-y-2">
                {o.phone && (
                  <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
                    <Phone className="h-4 w-4" /> {o.phone}
                  </a>
                )}
                {o.link && (
                  <a href={o.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
                    <ExternalLink className="h-4 w-4" /> Poseti sajt
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
