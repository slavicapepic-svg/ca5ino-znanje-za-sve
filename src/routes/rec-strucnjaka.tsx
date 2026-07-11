import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";
import { experts } from "@/content/experts";

export const Route = createFileRoute("/rec-strucnjaka")({
  head: () => ({
    meta: [
      { title: "Reč stručnjaka — Ca5ino ZaštoZato" },
      { name: "description", content: "Psiholozi, pravnici i analitičari objašnjavaju kako iGaming industrija zaista funkcioniše." },
      { property: "og:title", content: "Reč stručnjaka" },
      { property: "og:description", content: "Konkretni odgovori stručnjaka iz prakse." },
    ],
  }),
  component: RecStrucnjakaPage,
});

function RecStrucnjakaPage() {
  const allQuestions = experts.flatMap((e) => e.questions.map((q) => ({ expert: e, question: q })));
  if (allQuestions.length === 0) throw notFound();

  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Početna", to: "/" }, { label: "Reč stručnjaka" }]} />
      <PageHeader
        eyebrow="Reč stručnjaka"
        title="Reč stručnjaka"
        intro="Verujemo da nijedna osoba ne može sama dati sve odgovore kada je reč o online igrama na sreću. Zato smo okupili stručnjake iz različitih oblasti — psihologe, neuropsihologe, matematičare i druge eksperte — koji zajedno sa nama proučavaju kako razmišljamo, donosimo odluke i reagujemo na rizik, nagrade i neizvesnost."
      />
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allQuestions.map(({ expert, question }) => (
            <Link
              key={question.slug}
              to="/rec-strucnjaka/$slug"
              params={{ slug: question.slug }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-blue-50">
                <img src={expert.photo} alt={expert.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-bold text-text-strong">{expert.name}</p>
                <p className="text-xs text-brand">{expert.title}</p>
                <a
                  href={expert.linkedin}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex w-fit items-center gap-1 text-[11px] font-semibold text-text-muted hover:text-brand"
                >
                  <Linkedin className="h-3 w-3" /> LinkedIn
                </a>
                <h3 className="mt-4 text-base font-bold leading-snug text-text-strong group-hover:text-brand">
                  „{question.question}”
                </h3>
                <p className="mt-auto pt-4 text-xs text-text-muted">{question.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
