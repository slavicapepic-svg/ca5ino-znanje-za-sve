import { createFileRoute } from "@tanstack/react-router";
import { Headphones, ExternalLink, MapPin, HeartHandshake } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";
import { helpOrgs } from "@/content/helpLinks";

export const Route = createFileRoute("/vazne-stranice")({
  head: () => ({
    meta: [
      { title: "Važne stranice — Institucije i SOS linije | Ca5ino ZaštoZato" },
      { name: "description", content: "Institucije i SOS linije za osobe sa problemom patološkog kockanja i njihove porodice." },
      { property: "og:title", content: "Važne stranice — Institucije i SOS linije" },
      { property: "og:description", content: "Kontakti institucija i besplatnih linija za pomoć u Srbiji." },
    ],
  }),
  component: VaznePage,
});

function VaznePage() {
  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Početna", to: "/" }, { label: "Važne stranice" }]} />
      <PageHeader
        eyebrow="Zatražite pomoć"
        title="Važne stranice: gde možete da potražite pomoć"
        intro="Ako ste vi ili neko blizak izgubili kontrolu nad igranjem, prvi korak je razgovor. Ove institucije rade poverljivo i besplatno."
      />
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
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
                      <a
                        href={`tel:${p.number.replace(/[^\d+]/g, "")}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
                      >
                        <span aria-hidden>🎧</span>
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
      </section>
    </SiteShell>
  );
}
