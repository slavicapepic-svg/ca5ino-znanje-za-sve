import type { ReactNode } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";

export function LegalPage({
  title,
  intro,
  children,
  breadcrumbLabel,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
  breadcrumbLabel: string;
}) {
  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Početna", to: "/" }, { label: breadcrumbLabel }]} />
      <PageHeader eyebrow="Pravno" title={title} intro={intro} />
      <article className="mx-auto max-w-3xl px-4 pb-20 text-sm leading-relaxed text-text-body md:px-6 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text-strong [&_p]:mt-4">
        {children}
      </article>
    </SiteShell>
  );
}
