import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { findExpertQA } from "@/content/experts";

export const Route = createFileRoute("/rec-strucnjaka/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = Route.useParams();
  const found = findExpertQA(slug);
  if (!found) throw notFound();
  const { expert, question } = found;

  return (
    <SiteShell>
      <Breadcrumb
        items={[
          { label: "Početna", to: "/" },
          { label: "Reč stručnjaka", to: "/rec-strucnjaka" },
          { label: expert.name },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 pt-6 pb-16 md:px-6">
        <h1 className="text-3xl font-extrabold leading-tight text-text-strong sm:text-4xl">
          „{question.question}”
        </h1>
        <p className="mt-4 text-xs text-text-muted">{question.date}</p>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-text-body">
          {question.answer.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-border bg-bg-soft p-6 sm:flex-row sm:items-center">
          <img src={expert.photo} alt={expert.name} className="h-20 w-20 rounded-full object-cover" />
          <div className="min-w-0 flex-1">
            <p className="text-base font-bold text-text-strong">{expert.name}</p>
            <p className="text-sm text-brand">{expert.title}</p>
            <p className="mt-2 text-sm text-text-body">{expert.bio}</p>
            <a
              href={expert.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn profil
            </a>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/rec-strucnjaka" className="text-sm font-semibold text-brand hover:underline">
            ← Sve pitanja stručnjaka
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}
