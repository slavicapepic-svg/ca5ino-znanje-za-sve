import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";
import { ExpertCard } from "@/components/site/ExpertCard";
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
            <ExpertCard key={question.slug} variant="full" expert={expert} question={question} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
