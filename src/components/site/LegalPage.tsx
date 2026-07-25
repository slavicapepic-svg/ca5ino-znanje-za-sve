import { Children, isValidElement, cloneElement, type ReactNode, type ReactElement } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import { PageHeader } from "@/components/site/PageHeader";
import { FileText, Mail, CalendarClock } from "lucide-react";

// --- Auto-linkify: turn URLs and emails inside text nodes into <a> tags ---
const URL_RE = /(https?:\/\/[^\s<>()]+[^\s<>().,;:!?])|([\w.+-]+@[\w-]+\.[\w.-]+)/g;

function linkifyString(text: string, keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  URL_RE.lastIndex = 0;
  while ((m = URL_RE.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const raw = m[0];
    const isEmail = !!m[2];
    const href = isEmail ? `mailto:${raw}` : raw;
    out.push(
      <a
        key={`${keyPrefix}-${i++}`}
        href={href}
        target={isEmail ? undefined : "_blank"}
        rel={isEmail ? undefined : "noopener noreferrer"}
        className="inline-flex items-baseline gap-1 font-medium text-brand underline decoration-brand/30 underline-offset-2 transition hover:text-brand-hover hover:decoration-brand/70 break-words"
      >
        {raw}
      </a>,
    );
    last = m.index + raw.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function linkifyNode(node: ReactNode, keyPrefix = "lk"): ReactNode {
  if (typeof node === "string") return linkifyString(node, keyPrefix);
  if (Array.isArray(node)) return node.map((n, i) => <span key={i}>{linkifyNode(n, `${keyPrefix}-${i}`)}</span>);
  if (isValidElement(node)) {
    const el = node as ReactElement<any>;
    if (el.type === "a") return el; // already a link
    const kids = (el.props as any)?.children;
    if (kids == null) return el;
    return cloneElement(el, el.props, linkifyNode(kids, keyPrefix));
  }
  return node;
}

// --- Extract H2 sections to build a TOC and to wrap them nicely ---
function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type Section = { id: string; title: string; nodes: ReactNode[] };

function splitSections(children: ReactNode): { intro: ReactNode[]; sections: Section[] } {
  const arr = Children.toArray(children);
  const intro: ReactNode[] = [];
  const sections: Section[] = [];
  let current: Section | null = null;
  for (const child of arr) {
    if (isValidElement(child) && (child.type === "h2" || (child as any).props?.mdxType === "h2")) {
      const title = String((child.props as any).children ?? "").trim();
      current = { id: slugify(title), title, nodes: [] };
      sections.push(current);
    } else {
      if (current) current.nodes.push(child);
      else intro.push(child);
    }
  }
  return { intro, sections };
}

export function LegalPage({
  title,
  intro,
  children,
  breadcrumbLabel,
  updatedAt,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
  breadcrumbLabel: string;
  updatedAt?: string;
}) {
  const linked = linkifyNode(children);
  const { intro: introNodes, sections } = splitSections(linked);

  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Početna", to: "/" }, { label: breadcrumbLabel }]} />
      <PageHeader eyebrow="Pravno" title={title} intro={intro} />

      <div className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        {/* Meta bar */}
        <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-black/[0.06] bg-cream/60 px-4 py-3 text-xs text-text-muted">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-semibold text-text-strong">
            <FileText className="h-3.5 w-3.5 text-brand" /> Pravni dokument
          </span>
          {updatedAt && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="h-3.5 w-3.5" /> Poslednje ažuriranje: <strong className="text-text-strong">{updatedAt}</strong>
            </span>
          )}
          <span className="ml-auto inline-flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" />
            <a href="mailto:redakcija@ca5inozastozato.rs" className="font-medium text-brand hover:text-brand-hover">
              redakcija@ca5inozastozato.rs
            </a>
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          {/* Sticky TOC */}
          {sections.length > 1 && (
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-24">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">Sadržaj</p>
                <nav>
                  <ol className="space-y-1 border-l border-black/[0.08]">
                    {sections.map((s, i) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="group flex items-start gap-3 border-l-2 border-transparent py-1.5 pl-4 -ml-px text-sm text-text-body transition hover:border-brand hover:text-brand"
                        >
                          <span className="mt-0.5 w-6 shrink-0 text-xs font-bold tabular-nums text-text-muted group-hover:text-brand">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{s.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </aside>
          )}

          {/* Article */}
          <article
            className={
              (sections.length > 1 ? "lg:col-span-8 xl:col-span-9 " : "") +
              "max-w-none text-[15px] leading-relaxed text-text-body " +
              "[&_p]:mt-4 [&_p]:first:mt-0 " +
              "[&_em]:font-semibold [&_em]:not-italic [&_em]:text-text-strong " +
              "[&_strong]:text-text-strong"
            }
          >
            {introNodes.length > 0 && (
              <div className="rounded-2xl border border-brand/10 bg-blue-50/50 p-5 md:p-6">
                {introNodes}
              </div>
            )}

            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className="mt-10 scroll-mt-24 border-t border-black/[0.06] pt-8 first:mt-8"
              >
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="text-sm font-bold tabular-nums text-brand-yellow-ink bg-brand-yellow/70 rounded-md px-2 py-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-bold text-text-strong md:text-2xl">{s.title}</h2>
                </div>
                <div className="max-w-3xl">{s.nodes}</div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </SiteShell>
  );
}
